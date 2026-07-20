const Stripe = require("stripe");
const { sendJson } = require("./_http");
const { createLead, updateStripeStatus, configured } = require("./_lead-store");
const { processFallbackEmails, processLeadEmails } = require("./send-request")._test;

function stripeClient() {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("Missing server environment variable: STRIPE_SECRET_KEY");
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

async function readRaw(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks);
}

function eventPayload(event, session) {
  const statusByType = {
    "checkout.session.completed": "completed",
    "checkout.session.async_payment_failed": "failed",
    "checkout.session.expired": "expired",
  };
  const metadata = session.metadata || {};
  const customFields = Object.fromEntries((session.custom_fields || [])
    .map((field) => [field.key, field.text?.value || field.dropdown?.value || field.numeric?.value || ""])
    .filter(([key, value]) => key && value));
  const address = session.customer_details?.address || session.shipping_details?.address || {};
  const shippingAddress = session.shipping_details?.address || {};
  const billingAddress = session.customer_details?.address || {};
  const fullName = session.customer_details?.name || [customFields.first_name, customFields.last_name].filter(Boolean).join(" ");
  const selectedOptions = metadata.selected_options || metadata.selections || "";
  return {
    type: `Stripe ${statusByType[event.type] || event.type}`,
    source: "Stripe webhook",
    customer: {
      fullName,
      firstName: customFields.first_name || "",
      lastName: customFields.last_name || "",
      email: session.customer_details?.email || session.customer_email || "",
      phone: session.customer_details?.phone || "",
      addressLine1: address.line1 || "",
      addressLine2: address.line2 || "",
      city: address.city || "",
      state: address.state || "",
      postalCode: address.postal_code || "",
      country: address.country || "",
      shippingName: session.shipping_details?.name || "",
      shippingAddress: [shippingAddress.line1, shippingAddress.line2, shippingAddress.city, shippingAddress.state, shippingAddress.postal_code, shippingAddress.country].filter(Boolean).join(", "),
      billingAddress: [billingAddress.line1, billingAddress.line2, billingAddress.city, billingAddress.state, billingAddress.postal_code, billingAddress.country].filter(Boolean).join(", "),
    },
    jewelry: {
      requestType: `Stripe ${statusByType[event.type] || event.type}`,
      productName: metadata.product_name || metadata.product_id || metadata.diamond_id || "Stripe Checkout",
      productCategory: metadata.category || metadata.product_source || "Checkout",
      budget: session.amount_total ? `$${Math.round(session.amount_total / 100).toLocaleString("en-US")}` : "",
      selectedOptions,
      productId: metadata.product_id || "",
      diamondId: metadata.diamond_id || "",
      stockNumber: metadata.stock_number || "",
      reportNumber: metadata.report_number || "",
      notes: [
        `Stripe session ${session.id} status ${session.payment_status || session.status || statusByType[event.type]}.`,
        selectedOptions ? `Selected website options: ${selectedOptions}` : "",
      ].filter(Boolean).join("\n"),
    },
    checkout: {
      event: event.type,
      status: statusByType[event.type] || session.status || "",
      sessionId: session.id,
      paymentStatus: session.payment_status || "",
      amountTotal: session.amount_total || "",
      currency: session.currency || "",
      customerEmail: session.customer_details?.email || session.customer_email || "",
      customerPhone: session.customer_details?.phone || "",
      paymentMethodTypes: (session.payment_method_types || []).join(", "),
      selectedOptions,
      metadata,
    },
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { ok: false, message: "Method not allowed." });
    return;
  }
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    sendJson(res, 503, { ok: false, message: "Stripe webhook is not configured." });
    return;
  }
  const signature = req.headers["stripe-signature"];
  if (!signature) {
    sendJson(res, 400, { ok: false, message: "Missing Stripe signature." });
    return;
  }
  try {
    const raw = await readRaw(req);
    const event = stripeClient().webhooks.constructEvent(raw, signature, secret);
    if (!["checkout.session.completed", "checkout.session.async_payment_failed", "checkout.session.expired"].includes(event.type)) {
      sendJson(res, 200, { ok: true, ignored: true });
      return;
    }
    const session = event.data?.object || {};
    const payload = eventPayload(event, session);
    if (!configured()) {
      let result;
      try {
        result = await processFallbackEmails(payload);
      } catch (emailError) {
        console.error("Stripe webhook email processing failed after event acceptance", {
          eventId: event.id,
          eventType: event.type,
          error: emailError?.message || emailError,
        });
        sendJson(res, 200, {
          ok: false,
          webhookAccepted: true,
          databaseConfigured: false,
          businessEmailStatus: "failed",
          customerEmailStatus: "failed",
        });
        return;
      }
      const ok = Boolean(result.businessResult?.ok && result.customerResult?.ok);
      sendJson(res, 200, {
        ok,
        webhookAccepted: true,
        databaseConfigured: false,
        businessEmailStatus: result.businessResult?.ok ? "sent" : "failed",
        customerEmailStatus: result.customerResult?.ok
          ? (result.customerResult?.skipped ? "skipped" : "sent")
          : "failed",
      });
      return;
    }
    await updateStripeStatus(session.id, event.type, { eventId: event.id, eventType: event.type }).catch(() => null);
    const lead = await createLead(payload);
    let result;
    try {
      result = await processLeadEmails(lead, payload);
    } catch (emailError) {
      console.error("Stripe webhook lead email processing failed after event acceptance", {
        eventId: event.id,
        eventType: event.type,
        leadId: lead?.publicId,
        error: emailError?.message || emailError,
      });
      sendJson(res, 200, {
        ok: false,
        webhookAccepted: true,
        leadId: lead?.publicId,
        status: lead?.status,
        businessEmailStatus: "failed",
        customerEmailStatus: "failed",
      });
      return;
    }
    sendJson(res, 200, { ok: true, leadId: result.lead.publicId, status: result.lead.status });
  } catch (error) {
    sendJson(res, 400, { ok: false, message: error.message || "Stripe webhook failed." });
  }
};
