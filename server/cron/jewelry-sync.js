const { adminAuthorized, sendJson } = require("../_http");
const { syncJewelryProducts } = require("../_jewelry-sync");

module.exports = async function handler(req, res) {
  try {
    if (!adminAuthorized(req)) {
      sendJson(res, 401, { ok: false, message: "Cron authorization required." });
      return;
    }
    const result = await syncJewelryProducts("cron");
    sendJson(res, 200, result);
  } catch (error) {
    sendJson(res, 500, { ok: false, message: "Scheduled jewelry sync failed.", error: error.message });
  }
};
