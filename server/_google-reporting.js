const crypto = require("crypto");

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPES = [
  "https://www.googleapis.com/auth/analytics.readonly",
  "https://www.googleapis.com/auth/webmasters.readonly",
].join(" ");

function base64url(value) {
  return Buffer.from(value).toString("base64url");
}

function credentials() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  const parsed = JSON.parse(raw);
  if (!parsed.client_email || !parsed.private_key) throw new Error("Google service-account JSON is missing required fields.");
  return { ...parsed, private_key: String(parsed.private_key).replace(/\\n/g, "\n") };
}

async function accessToken() {
  const service = credentials();
  if (!service) throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not configured.");
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64url(JSON.stringify({
    iss: service.client_email,
    scope: SCOPES,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600,
  }));
  const unsigned = `${header}.${claim}`;
  const signature = crypto.sign("RSA-SHA256", Buffer.from(unsigned), service.private_key).toString("base64url");
  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${unsigned}.${signature}` }),
  });
  const payload = await response.json();
  if (!response.ok || !payload.access_token) throw new Error(payload.error_description || "Google access token could not be created.");
  return payload.access_token;
}

function isoDate(daysAgo = 0) {
  const value = new Date();
  value.setUTCDate(value.getUTCDate() - daysAgo);
  return value.toISOString().slice(0, 10);
}

async function googleJson(url, body, token) {
  const response = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error?.message || "Google reporting request failed.");
  return payload;
}

function metric(row, index) {
  return Number(row?.metricValues?.[index]?.value || 0);
}

async function analyticsReport(token) {
  const propertyId = String(process.env.GOOGLE_ANALYTICS_PROPERTY_ID || "").replace(/^properties\//, "");
  if (!propertyId) return null;
  const endpoint = `https://analyticsdata.googleapis.com/v1beta/properties/${encodeURIComponent(propertyId)}:runReport`;
  const metrics = [{ name: "sessions" }, { name: "keyEvents" }, { name: "totalRevenue" }];
  const run = (startDate, endDate, withPages = false) => googleJson(endpoint, {
    dateRanges: [{ startDate, endDate }],
    dimensions: withPages ? [{ name: "landingPagePlusQueryString" }] : [],
    metrics,
    ...(withPages ? { orderBys: [{ metric: { metricName: "sessions" }, desc: true }], limit: 20 } : {}),
  }, token);
  const [currentPayload, previousPayload, pagePayload] = await Promise.all([
    run(isoDate(28), isoDate(1)),
    run(isoDate(56), isoDate(29)),
    run(isoDate(28), isoDate(1), true),
  ]);
  const current = currentPayload.totals?.[0];
  const previous = previousPayload.totals?.[0];
  return {
    current: { sessions: metric(current, 0), keyEvents: metric(current, 1), revenue: metric(current, 2) },
    previous: { sessions: metric(previous, 0), keyEvents: metric(previous, 1), revenue: metric(previous, 2) },
    topLandingPages: (pagePayload.rows || []).slice(0, 10).map((row) => ({ path: row.dimensionValues?.[0]?.value || "/", sessions: metric(row, 0), keyEvents: metric(row, 1) })),
  };
}

async function searchConsoleReport(token) {
  const property = process.env.GOOGLE_SEARCH_CONSOLE_PROPERTY;
  if (!property) return null;
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/searchAnalytics/query`;
  const base = { startDate: isoDate(28), endDate: isoDate(1), rowLimit: 25 };
  const [totals, queries, pages] = await Promise.all([
    googleJson(endpoint, base, token),
    googleJson(endpoint, { ...base, dimensions: ["query"] }, token),
    googleJson(endpoint, { ...base, dimensions: ["page"] }, token),
  ]);
  const total = (totals.rows || [])[0] || {};
  const mapRows = (rows) => (rows || []).slice(0, 10).map((row) => ({ key: row.keys?.[0] || "", clicks: row.clicks || 0, impressions: row.impressions || 0, ctr: row.ctr || 0, position: row.position || 0 }));
  return {
    clicks: total.clicks || 0,
    impressions: total.impressions || 0,
    ctr: total.ctr || 0,
    position: total.position || 0,
    topQueries: mapRows(queries.rows),
    topPages: mapRows(pages.rows),
  };
}

async function reportingSnapshot() {
  if (!credentials()) return { configured: false, analytics: null, searchConsole: null };
  const token = await accessToken();
  const [analytics, searchConsole] = await Promise.allSettled([analyticsReport(token), searchConsoleReport(token)]);
  return {
    configured: true,
    analytics: analytics.status === "fulfilled" ? analytics.value : null,
    searchConsole: searchConsole.status === "fulfilled" ? searchConsole.value : null,
    errors: [analytics, searchConsole].filter((item) => item.status === "rejected").map((item) => item.reason?.message || "Google report failed."),
  };
}

module.exports = { reportingSnapshot };
