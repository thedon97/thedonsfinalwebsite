const { sendJson } = require("./_http");

function clean(value) {
  return String(value || "").trim();
}

const DEFAULT_GA_MEASUREMENT_ID = "G-68DJH1C3QF";

function bool(value, fallback = false) {
  if (value === undefined || value === null || value === "") return fallback;
  return /^(1|true|yes|on)$/i.test(String(value));
}

module.exports = async function handler(req, res) {
  sendJson(res, 200, {
    ok: true,
    analytics: {
      gaMeasurementId: clean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.GA_MEASUREMENT_ID || process.env.VITE_GA_MEASUREMENT_ID || DEFAULT_GA_MEASUREMENT_ID),
      enabled: process.env.NODE_ENV === "production" || bool(process.env.GA_DEBUG),
      debug: bool(process.env.GA_DEBUG),
      consentRequired: bool(process.env.GA_CONSENT_REQUIRED),
    },
    searchConsole: {
      siteVerification: clean(process.env.GOOGLE_SITE_VERIFICATION),
    },
  }, "public, s-maxage=300, stale-while-revalidate=3600");
};
