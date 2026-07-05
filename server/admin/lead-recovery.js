const { adminAuthorized, readJson, sendJson } = require("../_http");
const { requestSubject, sendBusinessEmail, sendCustomerConfirmation, businessEmail } = require("../_email-service");
const {
  configured,
  getLead,
  listEmailAttempts,
  listLeads,
  logEmailAttempt,
  updateLeadEmailStatus,
} = require("../_lead-store");

async function retryLead(lead, kinds = ["business", "customer"]) {
  const payload = lead.payload || {
    type: lead.type,
    source: lead.source,
    customer: lead.customer,
    jewelry: lead.jewelry,
    checkout: lead.checkout,
  };
  const results = {};
  for (const kind of kinds) {
    const recipient = kind === "business" ? businessEmail() : payload.customer?.email;
    const subject = kind === "business" ? requestSubject(payload) : `Customer confirmation: ${requestSubject(payload)}`;
    const result = kind === "business" ? await sendBusinessEmail(payload) : await sendCustomerConfirmation(payload);
    await logEmailAttempt(lead.id, {
      kind,
      recipient,
      subject,
      status: result.ok ? (result.skipped ? "skipped" : "sent") : "failed",
      providerId: result.id || "",
      error: result.ok ? "" : result.message,
    });
    results[kind] = result;
  }
  const businessOk = kinds.includes("business") ? Boolean(results.business?.ok) : lead.businessEmailStatus === "sent";
  const customerOk = kinds.includes("customer") ? Boolean(results.customer?.ok) : ["sent", "skipped"].includes(lead.customerEmailStatus);
  const lastError = Object.values(results).filter((result) => result && !result.ok).map((result) => result.message).join(" | ");
  return updateLeadEmailStatus(lead.id, {
    businessEmailStatus: kinds.includes("business") ? (results.business?.ok ? "sent" : "failed") : undefined,
    customerEmailStatus: kinds.includes("customer") ? (results.customer?.ok ? (results.customer?.skipped ? "skipped" : "sent") : "failed") : undefined,
    status: businessOk && customerOk ? "emailed" : "email_failed",
    lastError,
  });
}

module.exports = async function handler(req, res) {
  if (!adminAuthorized(req)) {
    sendJson(res, 401, { ok: false, message: "Admin key required." });
    return;
  }
  if (!configured()) {
    sendJson(res, 503, { ok: false, message: "DATABASE_URL is not configured.", configured: false });
    return;
  }
  try {
    if (req.method === "GET") {
      const params = new URL(req.url, "http://localhost").searchParams;
      const leads = await listLeads({ limit: params.get("limit") || 50, status: params.get("status") || "" });
      const withAttempts = await Promise.all(leads.map(async (lead) => ({
        ...lead,
        attempts: await listEmailAttempts(lead.id),
      })));
      sendJson(res, 200, { ok: true, configured: true, leads: withAttempts });
      return;
    }
    if (req.method === "POST") {
      const body = await readJson(req);
      const lead = await getLead(body.leadId || body.id);
      if (!lead) {
        sendJson(res, 404, { ok: false, message: "Lead not found." });
        return;
      }
      const kinds = Array.isArray(body.kinds) && body.kinds.length ? body.kinds : ["business", "customer"];
      const updated = await retryLead(lead, kinds.filter((kind) => ["business", "customer"].includes(kind)));
      sendJson(res, 200, { ok: true, lead: updated, attempts: await listEmailAttempts(updated.id) });
      return;
    }
    sendJson(res, 405, { ok: false, message: "Method not allowed." });
  } catch (error) {
    sendJson(res, 500, { ok: false, message: error.message || "Lead recovery failed." });
  }
};
