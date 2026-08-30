const { readJson, sendJson } = require("./_http");
const {
  businessEmail,
  requestSubject,
  resendConfigured,
  sendBusinessEmail,
  sendCustomerConfirmation,
} = require("./_email-service");
const {
  configured: leadDatabaseConfigured,
  createLead,
  logEmailAttempt,
  updateLeadEmailStatus,
} = require("./_lead-store");

async function sendAndLog(lead, payload, kind) {
  const recipient = kind === "business" ? businessEmail() : payload.customer?.email;
  const subject = kind === "business" ? requestSubject(payload) : `Customer confirmation: ${requestSubject(payload)}`;
  const result = kind === "business"
    ? await sendBusinessEmail(payload)
    : await sendCustomerConfirmation(payload);
  await logEmailAttempt(lead.id, {
    kind,
    recipient,
    subject,
    status: result.ok ? (result.skipped ? "skipped" : "sent") : "failed",
    providerId: result.id || "",
    error: result.ok ? "" : result.message,
  });
  return result;
}

async function processLeadEmails(lead, payload) {
  let businessResult;
  let customerResult;
  try {
    businessResult = await sendAndLog(lead, payload, "business");
  } catch (error) {
    businessResult = { ok: false, message: error.message || "Business email failed." };
    await logEmailAttempt(lead.id, {
      kind: "business",
      recipient: businessEmail(),
      subject: requestSubject(payload),
      status: "failed",
      error: businessResult.message,
    }).catch(() => {});
  }

  try {
    customerResult = await sendAndLog(lead, payload, "customer");
  } catch (error) {
    customerResult = { ok: false, message: error.message || "Customer confirmation failed." };
    await logEmailAttempt(lead.id, {
      kind: "customer",
      recipient: payload.customer?.email || "",
      subject: `Customer confirmation: ${requestSubject(payload)}`,
      status: "failed",
      error: customerResult.message,
    }).catch(() => {});
  }

  const businessOk = Boolean(businessResult?.ok);
  const customerOk = Boolean(customerResult?.ok);
  const status = businessOk && customerOk ? "emailed" : "email_failed";
  const lastError = [businessOk ? "" : businessResult?.message, customerOk ? "" : customerResult?.message].filter(Boolean).join(" | ");
  const updated = await updateLeadEmailStatus(lead.id, {
    businessEmailStatus: businessOk ? "sent" : "failed",
    customerEmailStatus: customerOk ? (customerResult?.skipped ? "skipped" : "sent") : "failed",
    status,
    lastError,
  });
  return { lead: updated, businessResult, customerResult };
}

async function processFallbackEmails(payload) {
  const businessResult = await sendBusinessEmail(payload);
  const customerResult = await sendCustomerConfirmation(payload);
  return { businessResult, customerResult };
}

function sendFallbackResult(res, result, databaseAvailable) {
  const ok = Boolean(result.businessResult?.ok && result.customerResult?.ok);
  sendJson(res, ok ? 200 : 202, {
    ok,
    message: ok
      ? "Request email notifications sent."
      : "Request email attempted, but one or more emails failed.",
    emailConfigured: resendConfigured(),
    databaseConfigured: databaseAvailable,
    businessEmailStatus: result.businessResult?.ok ? "sent" : "failed",
    customerEmailStatus: result.customerResult?.ok ? (result.customerResult?.skipped ? "skipped" : "sent") : "failed",
    lastError: [
      result.businessResult?.ok ? "" : result.businessResult?.message,
      result.customerResult?.ok ? "" : result.customerResult?.message,
    ].filter(Boolean).join(" | "),
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { ok: false, message: "Method not allowed." });
    return;
  }

  try {
    const payload = await readJson(req);
    if (!leadDatabaseConfigured()) {
      const result = await processFallbackEmails(payload);
      sendFallbackResult(res, result, false);
      return;
    }

    let lead;
    try {
      lead = await createLead(payload);
    } catch (databaseError) {
      console.warn("Lead database unavailable; sending inquiry emails without persistence.", databaseError.message);
      const fallback = await processFallbackEmails(payload);
      sendFallbackResult(res, fallback, false);
      return;
    }
    const result = await processLeadEmails(lead, payload);
    const ok = result.businessResult?.ok && result.customerResult?.ok;
    sendJson(res, ok ? 200 : 202, {
      ok,
      leadId: result.lead.publicId,
      message: ok
        ? "Request saved and email notifications sent."
        : "Request saved, but one or more emails failed. Retry from admin Lead Recovery.",
      emailConfigured: resendConfigured(),
      databaseConfigured: true,
      businessEmailStatus: result.lead.businessEmailStatus,
      customerEmailStatus: result.lead.customerEmailStatus,
      lastError: result.lead.lastError,
    });
  } catch (error) {
    sendJson(res, 500, {
      ok: false,
      message: error?.message || "Request could not be saved or emailed.",
      emailConfigured: resendConfigured(),
      databaseConfigured: leadDatabaseConfigured(),
    });
  }
};

module.exports._test = { processFallbackEmails, processLeadEmails };
