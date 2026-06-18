function sendJson(res, status, payload, cacheControl = "no-store") {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", cacheControl);
  res.end(JSON.stringify(payload));
}

async function readJson(req) {
  if (req.body && typeof req.body === "object") return req.body;
  let body = "";
  for await (const chunk of req) body += chunk;
  if (!body) return {};
  return JSON.parse(body);
}

function bearerToken(req) {
  return String(req.headers?.authorization || "").replace(/^Bearer\s+/i, "").trim();
}

function adminAuthorized(req) {
  const expected = process.env.ADMIN_SYNC_SECRET || process.env.CRON_SECRET;
  if (!expected) return false;
  const supplied = bearerToken(req) || String(req.headers?.["x-admin-key"] || "").trim();
  return supplied === expected;
}

module.exports = { adminAuthorized, bearerToken, readJson, sendJson };
