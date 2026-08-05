const { routeFeed, loadFeed, FALLBACK_MESSAGE, sendJson, testDiamondApi } = require("../server/_diamond-utils");
const { routeInventory } = require("../server/_live-inventory-utils");
const products = require("../server/products");
const systemStatus = require("../server/system-status");
const checkout = require("../server/create-checkout-session");
const sendRequest = require("../server/send-request");
const merchantFeed = require("../server/merchant-feed");
const siteConfig = require("../server/site-config");
const adminJewelrySync = require("../server/admin/jewelry-sync");
const adminLeadRecovery = require("../server/admin/lead-recovery");
const adminSeoDashboard = require("../server/admin/seo-dashboard");
const adminIntegrationHealth = require("../server/admin/integration-health");
const cronJewelrySync = require("../server/cron/jewelry-sync");
const seoPages = require("../server/seo-pages");
const stripeWebhook = require("../server/stripe-webhook");
const stripeConfig = require("../server/stripe-config");

const certified = routeFeed("certified");
const certifiedColor = routeFeed("certified-color");
const jewelry = routeInventory("jewelry");
const matchingPair = routeInventory("matching-pair");
const matchingPairColor = routeInventory("matching-pair-color");

async function combinedDiamonds(req, res) {
  const page = Math.max(1, Number(new URL(req.url, "http://localhost").searchParams.get("page") || 1) || 1);
  try {
    const results = await Promise.allSettled([loadFeed("certified", page), loadFeed("certified-color", page)]);
    const diamonds = results.flatMap((result) => result.status === "fulfilled" ? result.value.diamonds : []);
    const errors = results.filter((result) => result.status === "rejected").map((result) => result.reason?.message || "LGD feed unavailable.");
    sendJson(res, 200, {
      ok: diamonds.length > 0,
      cached: results.some((result) => result.status === "fulfilled" && result.value.cached),
      stale: results.some((result) => result.status === "fulfilled" && result.value.stale),
      page,
      count: diamonds.length,
      diamonds,
      message: diamonds.length ? "" : FALLBACK_MESSAGE,
      error: errors.join(" | "),
    });
  } catch (error) {
    sendJson(res, 200, { ok: false, cached: false, page, count: 0, diamonds: [], message: FALLBACK_MESSAGE, error: error.message || FALLBACK_MESSAGE });
  }
}

module.exports = async function handler(req, res) {
  const url = new URL(req.url, "http://localhost");
  const route = String(url.searchParams.get("route") || url.pathname.replace(/^\/api\/?/, "")).replace(/^\/+|\/+$/g, "");
  const routes = {
    "products": products,
    "system-status": systemStatus,
    "create-checkout-session": checkout,
    "send-request": sendRequest,
    "stripe-webhook": stripeWebhook,
    "stripe-config": stripeConfig,
    "merchant-feed": merchantFeed,
    "site-config": siteConfig,
    "seo": seoPages,
    "admin/jewelry-sync": adminJewelrySync,
    "admin/lead-recovery": adminLeadRecovery,
    "admin/seo-dashboard": adminSeoDashboard,
    "admin/integration-health": adminIntegrationHealth,
    "cron/jewelry-sync": cronJewelrySync,
    "test-diamond-api": testDiamondApi,
    "diamonds": combinedDiamonds,
    "diamonds/certified": certified,
    "diamonds/certified-color": certifiedColor,
    "diamonds/matching-pair": matchingPair,
    "diamonds/matching-pair-color": matchingPairColor,
    "jewelry": jewelry,
  };
  const selected = routes[route];
  if (!selected) {
    sendJson(res, 404, { ok: false, message: "API route not found." });
    return;
  }
  try {
    await selected(req, res);
  } catch (error) {
    if (!res.writableEnded) sendJson(res, 500, { ok: false, message: "The requested service is temporarily unavailable.", error: error.message });
  }
};
