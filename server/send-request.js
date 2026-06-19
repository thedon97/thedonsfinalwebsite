const BUSINESS_EMAIL = "thedonjewelersandjewelry@gmail.com";
const DEFAULT_FROM_EMAIL = "The Don Jewelers & Jewelry <onboarding@resend.dev>";
const MAX_BODY_BYTES = 4_200_000;

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
  const fileNames = (payload.files || []).map((file) => `${clean(file.name)} (${Math.round(Number(file.size || 0) / 1024)} KB)`).join(", ");
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
    fileNames ? ["", "Inspiration images attached", fileNames].join("\n") : "",
  ].filter(Boolean).join("\n");
}

function titleCaseLabel(value) {
  return String(value || "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[._-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function detailRows(obj) {
  if (!obj || typeof obj !== "object") return "";
  return Object.entries(obj)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== "")
    .map(([key, value]) => `
      <tr>
        <td style="width:34%;padding:10px 12px;border-bottom:1px solid #e7dfd2;color:#766b5a;font-size:13px;font-weight:700;vertical-align:top">${htmlEscape(titleCaseLabel(key))}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #e7dfd2;color:#18140f;font-size:14px;line-height:1.55;white-space:pre-wrap;word-break:break-word">${htmlEscape(typeof value === "object" ? JSON.stringify(value) : value)}</td>
      </tr>
    `).join("");
}

function emailSection(title, rows) {
  if (!rows) return "";
  return `
    <div style="margin:0 0 22px">
      <h2 style="margin:0;padding:12px 16px;background:#17130d;color:#f0d58a;font-family:Georgia,serif;font-size:17px">${htmlEscape(title)}</h2>
      <table role="presentation" style="width:100%;border-collapse:collapse;background:#fff">${rows}</table>
    </div>
  `;
}

function requestHtml(payload) {
  const submitted = new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "long", timeStyle: "short" });
  const files = payload.files || [];
  return `
    <div style="margin:0;padding:24px;background:#f4efe6;font-family:Arial,sans-serif;color:#18140f">
      <div style="max-width:720px;margin:0 auto;background:#fff;border:1px solid #ded4c4">
        <div style="padding:26px;background:#17130d;text-align:center">
          <div style="color:#f0d58a;font-family:Georgia,serif;font-size:25px;font-weight:700">The Don Jewelers &amp; Jewelry</div>
          <div style="margin-top:8px;color:#fff;font-size:14px;letter-spacing:.08em;text-transform:uppercase">New Website Request</div>
        </div>
        <div style="padding:26px">
          <p style="margin:0 0 6px;font-size:18px;font-weight:700">${htmlEscape(payload.type || payload.jewelry?.requestType || "Website Request")}</p>
          <p style="margin:0 0 24px;color:#766b5a;font-size:13px">Submitted ${htmlEscape(submitted)} · <a href="${htmlEscape(payload.source)}" style="color:#8a6418">View source page</a></p>
          ${emailSection("Customer Information", detailRows(payload.customer))}
          ${emailSection("Jewelry & Order Details", detailRows(payload.jewelry))}
          ${payload.checkout ? emailSection("Checkout Information", detailRows(payload.checkout)) : ""}
          ${files.length ? `
            <div style="padding:16px;border:1px solid #ded4c4;background:#fbf8f2">
              <strong style="display:block;margin-bottom:6px">Inspiration Images Attached (${files.length})</strong>
              <span style="color:#766b5a;font-size:13px">${files.map((file) => htmlEscape(file.name)).join(", ")}</span>
            </div>
          ` : ""}
        </div>
      </div>
    </div>
  `;
}

function emailAttachments(files = []) {
  if (files.length > 5) throw new Error("No more than 5 inspiration images may be attached.");
  let totalBytes = 0;
  return files.map((file) => {
    const content = clean(file.content);
    if (!content || !/^[A-Za-z0-9+/=]+$/.test(content)) throw new Error(`Uploaded image ${clean(file.name) || "file"} is invalid.`);
    const estimatedBytes = Math.floor(content.length * 0.75);
    totalBytes += estimatedBytes;
    if (totalBytes > 2_600_000) throw new Error("Uploaded inspiration images are too large.");
    return {
      filename: clean(file.name) || "inspiration.jpg",
      content,
    };
  });
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
      attachments: emailAttachments(payload.files),
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

module.exports._test = { emailAttachments, requestHtml, requestSubject, requestText };
