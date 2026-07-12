const { adminAuthorized, sendJson } = require("../_http");
const { configured, listLeads } = require("../_lead-store");
const { reportingSnapshot } = require("../_google-reporting");

function countBy(leads, predicate) {
  return leads.filter(predicate).length;
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
  const leads = configured() ? await listLeads({ limit: 200 }) : [];
  const google = await reportingSnapshot().catch((error) => ({ configured: true, analytics: null, searchConsole: null, errors: [error.message] }));
  const type = (lead) => `${lead.type || ""} ${lead.jewelry?.requestType || ""}`.toLowerCase();
  sendJson(res, 200, {
    ok: true,
    generatedAt: new Date().toISOString(),
    integrations: {
      ga4Configured: Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.GA_MEASUREMENT_ID),
      searchConsoleVerificationConfigured: Boolean(process.env.GOOGLE_SITE_VERIFICATION),
      searchConsoleApiConfigured: Boolean(process.env.GOOGLE_SEARCH_CONSOLE_PROPERTY && process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
      analyticsApiConfigured: Boolean(process.env.GOOGLE_ANALYTICS_PROPERTY_ID && process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
      leadDatabaseConfigured: configured(),
    },
    conversions: {
      availableLeadSample: leads.length,
      quoteSubmissions: countBy(leads, (lead) => /quote|custom|design/.test(type(lead))),
      appointmentRequests: countBy(leads, (lead) => /appointment|consult/.test(type(lead))),
      checkoutStarts: countBy(leads, (lead) => /checkout/.test(type(lead))),
      purchases: countBy(leads, (lead) => /completed|payment complete/.test(type(lead))),
    },
    googleData: google,
    googleDataMessage: google.configured
      ? "Google reporting is connected. Metrics are read-only and returned only to authenticated administrators."
      : "GA4 and Search Console API metrics appear here only after secure Google API credentials are configured. No sample data is fabricated.",
    sitemapUrl: "https://www.thedonjewelersandjewelrynyc.com/sitemap.xml",
    robotsUrl: "https://www.thedonjewelersandjewelrynyc.com/robots.txt",
  }, "no-store");
};
