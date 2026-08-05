const Stripe = require("stripe");
const { adminAuthorized, sendJson } = require("../_http");
const { fetchFeed } = require("../_diamond-utils");

async function checkResend() {
  if (!process.env.RESEND_API_KEY) return { ok: false, configured: false, message: "RESEND_API_KEY is missing." };
  const response = await fetch("https://api.resend.com/domains", {
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
  });
  const payload = await response.json().catch(() => ({}));
  return {
    ok: response.ok,
    configured: true,
    status: response.status,
    message: response.ok ? "Resend credentials accepted." : (payload.message || "Resend credentials were rejected."),
  };
}

async function checkStripe() {
  if (!process.env.STRIPE_SECRET_KEY) return { ok: false, configured: false, message: "STRIPE_SECRET_KEY is missing." };
  try {
    const account = await new Stripe(process.env.STRIPE_SECRET_KEY).accounts.retrieve();
    return {
      ok: true,
      configured: true,
      chargesEnabled: Boolean(account.charges_enabled),
      payoutsEnabled: Boolean(account.payouts_enabled),
      webhookConfigured: Boolean(process.env.STRIPE_WEBHOOK_SECRET),
      message: account.charges_enabled ? "Stripe account is reachable and charges are enabled." : "Stripe account is reachable, but charges are not enabled.",
    };
  } catch (error) {
    return { ok: false, configured: true, message: error.message || "Stripe credentials were rejected." };
  }
}

async function checkLgd() {
  if (!process.env.LGD_API_KEY) return { ok: false, configured: false, message: "LGD_API_KEY is missing." };
  const results = await Promise.allSettled([fetchFeed("certified", 1), fetchFeed("certified-color", 1)]);
  const feeds = results.map((result, index) => result.status === "fulfilled"
    ? { feed: index ? "certified-color" : "certified", ok: true, count: result.value.diamonds.length }
    : { feed: index ? "certified-color" : "certified", ok: false, message: result.reason?.message || "Feed failed." });
  return {
    ok: feeds.some((feed) => feed.ok && feed.count > 0),
    configured: true,
    feeds,
    message: feeds.some((feed) => feed.ok && feed.count > 0) ? "LGD inventory is reachable." : "LGD inventory did not return active diamonds.",
  };
}

module.exports = async function handler(req, res) {
  if (!adminAuthorized(req)) {
    sendJson(res, 401, { ok: false, message: "Admin key required." });
    return;
  }
  if (req.method !== "GET") {
    sendJson(res, 405, { ok: false, message: "Method not allowed." });
    return;
  }
  const [resend, stripe, lgd] = await Promise.all([checkResend(), checkStripe(), checkLgd()]);
  sendJson(res, 200, {
    ok: resend.ok && stripe.ok && lgd.ok,
    checkedAt: new Date().toISOString(),
    integrations: { resend, stripe, lgd },
    notifications: {
      businessRecipientConfigured: Boolean(process.env.RESEND_TO_EMAIL),
      senderConfigured: Boolean(process.env.RESEND_FROM_EMAIL),
      stripeLifecycleWebhookConfigured: Boolean(process.env.STRIPE_WEBHOOK_SECRET),
    },
  }, "no-store");
};

module.exports._test = { checkLgd, checkResend, checkStripe };
