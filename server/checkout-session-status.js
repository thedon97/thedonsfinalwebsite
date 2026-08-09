const Stripe = require("stripe");
const { sendJson } = require("./_http");

function stripeClient() {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("Stripe is not configured.");
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    sendJson(res, 405, { ok: false, message: "Method not allowed." });
    return;
  }
  res.setHeader("Cache-Control", "no-store");
  const sessionId = String(new URL(req.url, "http://localhost").searchParams.get("session_id") || "");
  if (!/^cs_(test_|live_)[A-Za-z0-9]+$/.test(sessionId)) {
    sendJson(res, 400, { ok: false, message: "Invalid checkout session." });
    return;
  }
  try {
    const session = await stripeClient().checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price.product", "discounts.promotion_code"],
    });
    const paid = session.payment_status === "paid" || session.payment_status === "no_payment_required";
    if (!paid) {
      sendJson(res, 200, { ok: true, paid: false, status: session.payment_status || session.status });
      return;
    }
    const items = (session.line_items?.data || []).map((line) => ({
      item_id: line.price?.product?.metadata?.product_id || line.price?.product?.id || line.price?.id || "",
      item_name: line.description || line.price?.product?.name || "Jewelry",
      item_category: line.price?.product?.metadata?.category || "Jewelry",
      price: Number(line.amount_subtotal || 0) / 100 / Math.max(1, Number(line.quantity || 1)),
      quantity: Math.max(1, Number(line.quantity || 1)),
    }));
    sendJson(res, 200, {
      ok: true,
      paid: true,
      transactionId: session.id,
      value: Number(session.amount_total || 0) / 100,
      tax: Number(session.total_details?.amount_tax || 0) / 100,
      shipping: Number(session.total_details?.amount_shipping || 0) / 100,
      currency: session.currency || "usd",
      coupon: session.discounts?.[0]?.promotion_code?.code || "",
      items,
    });
  } catch (error) {
    console.error("Checkout status lookup failed", { sessionId, message: error?.message || String(error) });
    sendJson(res, 502, { ok: false, message: "Checkout status could not be verified." });
  }
};
