const { sendJson } = require("./_http");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    sendJson(res, 405, { ok: false, message: "Method not allowed." });
    return;
  }
  if (!process.env.STRIPE_PUBLISHABLE_KEY) {
    sendJson(res, 503, { ok: false, message: "Stripe is not configured." });
    return;
  }
  res.setHeader("Cache-Control", "no-store");
  sendJson(res, 200, { ok: true, publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
};
