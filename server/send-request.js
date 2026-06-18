const BUSINESS_EMAIL = "thedonjewelersandjewelry@gmail.com";
const DEFAULT_FROM_EMAIL = "The Don Jewelers & Jewelry <onboarding@resend.dev>";
const MAX_BODY_BYTES = 200000;

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > MAX_BODY_BYTES) {
        reject(new Error("Request is too large."));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid request body."));
      }
    });
    req.on("error", reject);
  });
}

function clean(value) {
  return String(value || "").trim();
}

function formatLines(obj, prefix = "") {
  if (!obj || typeof obj !== "object") return "";
  return Object.entries(obj)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== "")
    .map(([key, value]) => {
      if (typeof value === "object" && !Array.isArray(value)) return formatLines(value, `${prefix}${key}.`);
      if (Array.isArray(value)) return `${prefix}${key}: ${value.map((item) => typeof item === "object" ? JSON.stringify(item) : item).join(", ")}`;
      return `${prefix}${key}: ${value}`;
    })
    .filter(Boolean)
    .join("\n");
}

function htmlEscape(value) {
  return clean(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function requestSubject(payload) {
  const type = clean(payload.type || payload.jewelry?.requestType || "Website Request");
  const product = clean(payload.jewelry?.productName || payload.productName);
  const customer = clean(payload.customer?.fullName || payload.customer?.name);
  return [type, product, customer].filter(Boolean).join(" - ").slice(0, 180);
}

function requestText(payload) {
  return [
    "New website request for The Don Jewelers & Jewelry",
    "",
    `Type: ${clean(payload.type || payload.jewelry?.requestType || "Website Request")}`,
    `Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}`,
    `Source: ${clean(payload.source)}`,
    "",
    "Customer",
    formatLines(payload.customer) || "Not provided",
    "",
    "Jewelry / Order Details",
    formatLines(payload.jewelry) || "Not provided",
    "",
    payload.checkout ? ["Checkout / Stripe", formatLines(payload.checkout)].join("\n") : "",
    payload.files?.length ? ["", "Uploaded file names", formatLines({ files: payload.files })].join("\n") : "",
  ].filter(Boolean).join("\n");
}

function requestHtml(payload) {
  const text = requestText(payload);
  return `
    <div style="font-family:Arial,sans-serif;color:#181818;line-height:1.5">
      <h2 style="margin:0 0 12px">New Website Request</h2>
      <p style="margin:0 0 16px">The Don Jewelers & Jewelry received a website request.</p>
      <pre style="white-space:pre-wrap;background:#f7f4ef;border:1px solid #ddd;padding:16px;border-radius:8px">${htmlEscape(text)}</pre>
    </div>
  `;
}

async function sendEmail(payload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      status: 503,
      message: "Email notifications are not configured. Add RESEND_API_KEY in Vercel.",
    };
  }

  const to = clean(process.env.RESEND_TO_EMAIL) || BUSINESS_EMAIL;
  const from = clean(process.env.RESEND_FROM_EMAIL) || DEFAULT_FROM_EMAIL;
  const replyTo = clean(payload.customer?.email);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: replyTo || undefined,
      subject: requestSubject(payload),
      text: requestText(payload),
      html: requestHtml(payload),
    }),
  });

  if (!response.ok) {
    let message = "Resend email delivery failed.";
    try {
      const data = await response.json();
      message = data?.message || data?.error || message;
    } catch {
      // Keep the safe default message.
    }
    return { ok: false, status: response.status, message };
  }

  return { ok: true, status: response.status, message: "Email notification sent." };
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { ok: false, message: "Method not allowed." });
    return;
  }

  try {
    const payload = await readJsonBody(req);
    const result = await sendEmail(payload);
    sendJson(res, result.ok ? 200 : 200, {
      ok: result.ok,
      message: result.message,
      emailConfigured: Boolean(process.env.RESEND_API_KEY),
    });
  } catch (error) {
    sendJson(res, 200, {
      ok: false,
      message: error?.message || "Request notification could not be sent.",
      emailConfigured: Boolean(process.env.RESEND_API_KEY),
    });
  }
};
