const Stripe = require("stripe");
const { sendJson } = require("./_http");
const { createLead, updateStripeStatus, configured } = require("./_lead-store");
const { processLeadEmails } = require("./send-request")._test;

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
  return {
    type: `Stripe ${statusByType[event.type] || event.type}`,
    source: "Stripe webhook",
    customer: {
      fullName: session.customer_details?.name || "",
      email: session.customer_details?.email || session.customer_email || "",
      phone: session.customer_details?.phone || "",
    },
    jewelry: {
      requestType: `Stripe ${statusByType[event.type] || event.type}`,
      productName: session.metadata?.product_id || session.metadata?.diamond_id || "Stripe Checkout",
      productCategory: session.metadata?.category || session.metadata?.product_source || "Checkout",
      budget: session.amount_total ? `$${Math.round(session.amount_total / 100).toLocaleString("en-US")}` : "",
      notes: `Stripe session ${session.id} status ${session.payment_status || session.status || statusByType[event.type]}.`,
    },
    checkout: {
      event: event.type,
      status: statusByType[event.type] || session.status || "",
      sessionId: session.id,
      paymentStatus: session.payment_status || "",
      amountTotal: session.amount_total || "",
      currency: session.currency || "",
      metadata: session.metadata || {},
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
    if (!configured()) {
      sendJson(res, 503, { ok: false, message: "DATABASE_URL is not configured." });
      return;
    }
    const session = event.data?.object || {};
    await updateStripeStatus(session.id, event.type, { eventId: event.id, eventType: event.type }).catch(() => null);
    const payload = eventPayload(event, session);
    const lead = await createLead(payload);
    const result = await processLeadEmails(lead, payload);
    sendJson(res, 200, { ok: true, leadId: result.lead.publicId, status: result.lead.status });
  } catch (error) {
    sendJson(res, 400, { ok: false, message: error.message || "Stripe webhook failed." });
  }
};
