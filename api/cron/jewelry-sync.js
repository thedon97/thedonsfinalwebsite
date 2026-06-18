const { adminAuthorized, sendJson } = require("../_http");
const { syncJewelryProducts } = require("../_jewelry-sync");

module.exports = async function handler(req, res) {
  try {
    if (!adminAuthorized(req)) {
      sendJson(res, 401, { ok: false, message: "Cron authorization required." });
      return;
    }
    const localParts = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      weekday: "short",
      hour: "2-digit",
      hourCycle: "h23",
    }).formatToParts(new Date()).map((part) => [part.type, part.value]));
    if (localParts.weekday !== "Sun" || localParts.hour !== "00") {
      sendJson(res, 200, { ok: true, skipped: true, message: "Outside Sunday midnight America/New_York sync window." });
      return;
    }
    const result = await syncJewelryProducts("cron");
    sendJson(res, 200, result);
  } catch (error) {
    sendJson(res, 500, { ok: false, message: "Scheduled jewelry sync failed.", error: error.message });
  }
};
