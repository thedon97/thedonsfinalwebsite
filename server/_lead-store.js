const crypto = require("crypto");
const { databaseConfigured, query } = require("./_db");

let leadSchemaPromise;

function configured() {
  return databaseConfigured();
}

async function ensureLeadSchema() {
  if (!configured()) return false;
  if (!leadSchemaPromise) {
    leadSchemaPromise = query(`
      CREATE TABLE IF NOT EXISTS lead_submissions (
        id BIGSERIAL PRIMARY KEY,
        public_id TEXT NOT NULL UNIQUE,
        lead_type TEXT NOT NULL,
        source TEXT,
        customer JSONB NOT NULL DEFAULT '{}'::jsonb,
        jewelry JSONB NOT NULL DEFAULT '{}'::jsonb,
        checkout JSONB NOT NULL DEFAULT '{}'::jsonb,
        payload JSONB NOT NULL DEFAULT '{}'::jsonb,
        status TEXT NOT NULL DEFAULT 'pending',
        business_email_status TEXT NOT NULL DEFAULT 'pending',
        customer_email_status TEXT NOT NULL DEFAULT 'pending',
        last_error TEXT,
        stripe_status TEXT,
        stripe_session_id TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS lead_submissions_created_at_idx ON lead_submissions(created_at DESC);
      CREATE INDEX IF NOT EXISTS lead_submissions_status_idx ON lead_submissions(status, business_email_status, customer_email_status);
      CREATE INDEX IF NOT EXISTS lead_submissions_stripe_idx ON lead_submissions(stripe_session_id) WHERE stripe_session_id IS NOT NULL;

      CREATE TABLE IF NOT EXISTS lead_email_attempts (
        id BIGSERIAL PRIMARY KEY,
        lead_id BIGINT NOT NULL REFERENCES lead_submissions(id) ON DELETE CASCADE,
        kind TEXT NOT NULL,
        provider TEXT NOT NULL DEFAULT 'resend',
        recipient TEXT,
        subject TEXT,
        status TEXT NOT NULL,
        provider_id TEXT,
        error TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS lead_email_attempts_lead_idx ON lead_email_attempts(lead_id, created_at DESC);
    `).then(() => true).catch((error) => {
      leadSchemaPromise = null;
      throw error;
    });
  }
  return leadSchemaPromise;
}

function leadType(payload = {}) {
  return String(payload.type || payload.jewelry?.requestType || payload.checkout?.event || "Website Request").slice(0, 180);
}

function normalizePayload(payload = {}) {
  return {
    ...payload,
    customer: payload.customer && typeof payload.customer === "object" ? payload.customer : {},
    jewelry: payload.jewelry && typeof payload.jewelry === "object" ? payload.jewelry : {},
    checkout: payload.checkout && typeof payload.checkout === "object" ? payload.checkout : {},
  };
}

async function createLead(payload = {}) {
  await ensureLeadSchema();
  const normalized = normalizePayload(payload);
  const publicId = crypto.randomUUID();
  const result = await query(`
    INSERT INTO lead_submissions (
      public_id, lead_type, source, customer, jewelry, checkout, payload,
      status, stripe_status, stripe_session_id
    )
    VALUES ($1,$2,$3,$4::jsonb,$5::jsonb,$6::jsonb,$7::jsonb,'pending',$8,$9)
    RETURNING *
  `, [
    publicId,
    leadType(normalized),
    String(normalized.source || ""),
    JSON.stringify(normalized.customer),
    JSON.stringify(normalized.jewelry),
    JSON.stringify(normalized.checkout),
    JSON.stringify(normalized),
    normalized.checkout?.status || normalized.stripe?.status || null,
    normalized.checkout?.sessionId || normalized.checkout?.stripeSessionId || normalized.stripeSessionId || null,
  ]);
  return rowToLead(result.rows[0]);
}

function rowToLead(row) {
  if (!row) return null;
  return {
    id: row.id,
    publicId: row.public_id,
    type: row.lead_type,
    source: row.source,
    customer: row.customer || {},
    jewelry: row.jewelry || {},
    checkout: row.checkout || {},
    payload: row.payload || {},
    status: row.status,
    businessEmailStatus: row.business_email_status,
    customerEmailStatus: row.customer_email_status,
    lastError: row.last_error,
    stripeStatus: row.stripe_status,
    stripeSessionId: row.stripe_session_id,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

async function getLead(id) {
  await ensureLeadSchema();
  const result = await query("SELECT * FROM lead_submissions WHERE id=$1 OR public_id=$2 LIMIT 1", [
    Number(id) || 0,
    String(id || ""),
  ]);
  return rowToLead(result.rows[0]);
}

async function listLeads({ limit = 50, status = "" } = {}) {
  await ensureLeadSchema();
  const values = [Math.min(200, Math.max(1, Number(limit) || 50))];
  const where = [];
  if (status) {
    values.push(status);
    where.push(`status=$${values.length}`);
  }
  const result = await query(`
    SELECT *
    FROM lead_submissions
    ${where.length ? `WHERE ${where.join(" AND ")}` : ""}
    ORDER BY created_at DESC
    LIMIT $1
  `, values);
  return result.rows.map(rowToLead);
}

async function logEmailAttempt(leadId, { kind, recipient, subject, status, providerId = "", error = "" }) {
  await ensureLeadSchema();
  await query(`
    INSERT INTO lead_email_attempts (lead_id, kind, recipient, subject, status, provider_id, error)
    VALUES ($1,$2,$3,$4,$5,$6,$7)
  `, [leadId, kind, recipient || "", subject || "", status, providerId || "", error || ""]);
}

async function updateLeadEmailStatus(leadId, updates = {}) {
  await ensureLeadSchema();
  const business = updates.businessEmailStatus;
  const customer = updates.customerEmailStatus;
  const status = updates.status;
  const error = updates.lastError || "";
  const result = await query(`
    UPDATE lead_submissions
    SET
      business_email_status=COALESCE($2, business_email_status),
      customer_email_status=COALESCE($3, customer_email_status),
      status=COALESCE($4, status),
      last_error=NULLIF($5, ''),
      updated_at=NOW()
    WHERE id=$1
    RETURNING *
  `, [leadId, business || null, customer || null, status || null, error]);
  return rowToLead(result.rows[0]);
}

async function updateStripeStatus(sessionId, status, payload = {}) {
  await ensureLeadSchema();
  const result = await query(`
    UPDATE lead_submissions
    SET stripe_status=$2, payload=payload || $3::jsonb, updated_at=NOW()
    WHERE stripe_session_id=$1
    RETURNING *
  `, [sessionId, status, JSON.stringify({ stripeWebhook: payload })]);
  return rowToLead(result.rows[0]);
}

async function updateLeadCheckout(leadId, checkout = {}, payloadPatch = {}) {
  await ensureLeadSchema();
  const result = await query(`
    UPDATE lead_submissions
    SET
      checkout=checkout || $2::jsonb,
      payload=payload || $3::jsonb,
      stripe_status=COALESCE($4, stripe_status),
      stripe_session_id=COALESCE($5, stripe_session_id),
      updated_at=NOW()
    WHERE id=$1
    RETURNING *
  `, [
    leadId,
    JSON.stringify(checkout || {}),
    JSON.stringify(payloadPatch || {}),
    checkout.status || null,
    checkout.sessionId || checkout.stripeSessionId || null,
  ]);
  return rowToLead(result.rows[0]);
}

async function listEmailAttempts(leadId) {
  await ensureLeadSchema();
  const result = await query(`
    SELECT * FROM lead_email_attempts
    WHERE lead_id=$1
    ORDER BY created_at DESC
    LIMIT 20
  `, [leadId]);
  return result.rows.map((row) => ({
    id: row.id,
    kind: row.kind,
    provider: row.provider,
    recipient: row.recipient,
    subject: row.subject,
    status: row.status,
    providerId: row.provider_id,
    error: row.error,
    createdAt: row.created_at,
  }));
}

module.exports = {
  configured,
  createLead,
  ensureLeadSchema,
  getLead,
  listEmailAttempts,
  listLeads,
  logEmailAttempt,
  updateLeadCheckout,
  updateLeadEmailStatus,
  updateStripeStatus,
};
