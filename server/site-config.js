const { sendJson } = require("./_http");

function clean(value) {
  return String(value || "").trim();
}

const DEFAULT_GA_MEASUREMENT_ID = "G-68DJH1C3QF";

module.exports = async function handler(req, res) {
  sendJson(res, 200, {
    ok: true,
    analytics: {
      gaMeasurementId: clean(process.env.GA_MEASUREMENT_ID || process.env.VITE_GA_MEASUREMENT_ID || DEFAULT_GA_MEASUREMENT_ID),
    },
  }, "public, s-maxage=300, stale-while-revalidate=3600");
};
