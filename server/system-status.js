const { databaseConfigured } = require("./_db");
const { sendJson } = require("./_http");
const { businessEmail, fromEmail, resendConfigured } = require("./_email-service");

module.exports = async function handler(req, res) {
  sendJson(res, 200, {
    ok: true,
    databaseConfigured: databaseConfigured(),
    leadRecoveryConfigured: databaseConfigured(),
    resendConfigured: resendConfigured(),
    resendFromEmail: fromEmail(),
    resendBusinessEmail: businessEmail(),
    stripeConfigured: Boolean(process.env.STRIPE_SECRET_KEY),
    stripeWebhookConfigured: Boolean(process.env.STRIPE_WEBHOOK_SECRET),
    adminSyncConfigured: Boolean(process.env.ADMIN_SYNC_SECRET),
    cronConfigured: Boolean(process.env.CRON_SECRET),
    lgdConfigured: Boolean(process.env.LGD_API_KEY),
  }, "no-store");
};
