const { databaseConfigured } = require("./_db");
const { sendJson } = require("./_http");

module.exports = async function handler(req, res) {
  sendJson(res, 200, {
    ok: true,
    databaseConfigured: databaseConfigured(),
    stripeConfigured: Boolean(process.env.STRIPE_SECRET_KEY),
    adminSyncConfigured: Boolean(process.env.ADMIN_SYNC_SECRET),
    cronConfigured: Boolean(process.env.CRON_SECRET),
    lgdConfigured: Boolean(process.env.LGD_API_KEY),
  }, "no-store");
};
