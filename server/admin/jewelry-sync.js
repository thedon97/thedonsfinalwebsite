const { adminAuthorized, sendJson } = require("../_http");
const { latestSync, syncJewelryProducts } = require("../_jewelry-sync");

module.exports = async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const status = await latestSync();
      sendJson(res, 200, { ok: true, ...status });
      return;
    }
    if (req.method !== "POST") {
      sendJson(res, 405, { ok: false, message: "Method not allowed." });
      return;
    }
    if (!adminAuthorized(req)) {
      sendJson(res, 401, { ok: false, message: "Admin authorization required." });
      return;
    }
    const result = await syncJewelryProducts("admin");
    sendJson(res, 200, result);
  } catch (error) {
    sendJson(res, 500, { ok: false, message: "Jewelry sync failed.", error: error.message });
  }
};
