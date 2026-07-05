const BUSINESS_EMAIL = "thedonjewelersandjewelry@gmail.com";
const DEFAULT_FROM_EMAIL = "The Don Jewelers & Jewelry <onboarding@resend.dev>";

function clean(value) {
  return String(value || "").trim();
}

function businessEmail() {
  return clean(process.env.RESEND_TO_EMAIL)
    || clean(process.env.OFFICIAL_BUSINESS_EMAIL)
    || clean(process.env.BUSINESS_EMAIL)
    || BUSINESS_EMAIL;
}

function fromEmail() {
  return clean(process.env.RESEND_FROM_EMAIL) || DEFAULT_FROM_EMAIL;
}

function resendConfigured() {
  return Boolean(clean(process.env.RESEND_API_KEY));
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
          <p style="margin:0 0 24px;color:#766b5a;font-size:13px">Submitted ${htmlEscape(submitted)}${payload.source ? ` · <a href="${htmlEscape(payload.source)}" style="color:#8a6418">View source page</a>` : ""}</p>
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

function customerSubject(payload) {
  const type = clean(payload.jewelry?.requestType || payload.type || "request");
  return `We received your ${type} - The Don Jewelers & Jewelry`.slice(0, 180);
}

function customerText(payload) {
  return [
    "Thank you for contacting The Don Jewelers & Jewelry.",
    "",
    "We received your request and will review the details, budget, timeline, and design notes before following up.",
    "",
    payload.jewelry?.productName ? `Product: ${payload.jewelry.productName}` : "",
    payload.jewelry?.budget ? `Budget: ${payload.jewelry.budget}` : "",
    payload.jewelry?.priceEstimate ? `Builder estimate shown: ${payload.jewelry.priceEstimate}` : "",
    "",
    "If anything is urgent, call or text (484) 761-2008.",
  ].filter(Boolean).join("\n");
}

function customerHtml(payload) {
  return `
    <div style="margin:0;padding:24px;background:#f4efe6;font-family:Arial,sans-serif;color:#18140f">
      <div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #ded4c4">
        <div style="padding:24px;background:#17130d;text-align:center;color:#f0d58a;font-family:Georgia,serif;font-size:24px;font-weight:700">The Don Jewelers &amp; Jewelry</div>
        <div style="padding:26px">
          <h1 style="margin:0 0 12px;font-family:Georgia,serif;font-size:24px">We received your request</h1>
          <p style="line-height:1.65;color:#4f473d">Thank you for contacting The Don Jewelers &amp; Jewelry. We will review your design details, budget, timeline, and contact information before following up.</p>
          ${emailSection("Request Summary", detailRows({
            requestType: payload.jewelry?.requestType || payload.type,
            product: payload.jewelry?.productName,
            budget: payload.jewelry?.budget,
            priceEstimate: payload.jewelry?.priceEstimate,
            timeline: payload.jewelry?.timeline,
          }))}
          <p style="margin:18px 0 0;color:#766b5a;font-size:13px">For urgent questions, call or text (484) 761-2008.</p>
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

async function sendResendEmail({ to, subject, text, html, replyTo, attachments = [] }) {
  const apiKey = clean(process.env.RESEND_API_KEY);
  if (!apiKey) {
    return { ok: false, status: 503, message: "Email notifications are not configured. Add RESEND_API_KEY in Vercel." };
  }
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail(),
      to,
      reply_to: replyTo || undefined,
      subject,
      text,
      html,
      attachments,
    }),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    return { ok: false, status: response.status, message: data?.message || data?.error || "Resend email delivery failed.", data };
  }
  return { ok: true, status: response.status, message: "Email sent.", id: data?.id || "", data };
}

async function sendBusinessEmail(payload) {
  return sendResendEmail({
    to: businessEmail(),
    replyTo: clean(payload.customer?.email),
    subject: requestSubject(payload),
    text: requestText(payload),
    html: requestHtml(payload),
    attachments: emailAttachments(payload.files || []),
  });
}

async function sendCustomerConfirmation(payload) {
  const to = clean(payload.customer?.email);
  if (!to) return { ok: true, skipped: true, status: 204, message: "No customer email provided." };
  return sendResendEmail({
    to,
    subject: customerSubject(payload),
    text: customerText(payload),
    html: customerHtml(payload),
  });
}

module.exports = {
  businessEmail,
  clean,
  customerSubject,
  emailAttachments,
  fromEmail,
  requestHtml,
  requestSubject,
  requestText,
  resendConfigured,
  sendBusinessEmail,
  sendCustomerConfirmation,
  sendResendEmail,
};
