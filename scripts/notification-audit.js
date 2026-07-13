const assert = require("assert");
const fs = require("fs");
const email = require("../server/_email-service");

const main = fs.readFileSync("main.js", "utf8");
const checkout = fs.readFileSync("server/create-checkout-session.js", "utf8");
const webhook = fs.readFileSync("server/stripe-webhook.js", "utf8");
const sendRequest = fs.readFileSync("server/send-request.js", "utf8");

const requiredForms = [
  "General Contact Form",
  "Product Inquiry Form",
  "Request Custom Design Form",
  "Custom Engagement Ring Request",
  "Appointment Request",
  "Checkout / Cart Inquiry",
];
for (const form of requiredForms) assert(main.includes(form), `Missing website notification source: ${form}`);

for (const event of ["checkout.session.completed", "checkout.session.async_payment_failed", "checkout.session.expired"]) {
  assert(webhook.includes(event), `Missing Stripe notification event: ${event}`);
}
assert(checkout.includes("Stripe checkout started"), "Checkout-start notification missing");
assert(sendRequest.includes("sendBusinessEmail(payload)"), "Business email call missing");
assert(sendRequest.includes("sendCustomerConfirmation(payload)"), "Customer confirmation call missing");
assert(sendRequest.includes("createLead(payload)"), "Database lead save missing");
assert(sendRequest.includes("processFallbackEmails(payload)"), "Email fallback without database missing");

const payload = {
  type: "INTERNAL NOTIFICATION TEMPLATE TEST",
  source: "https://www.thedonjewelersandjewelrynyc.com/start-custom-ring-design",
  customer: { fullName: "Internal Test", email: "test@example.com", phone: "(000) 000-0000" },
  jewelry: {
    requestType: "Custom Engagement Ring Request",
    diamondType: "Lab-grown",
    diamondShape: "Oval",
    caratWeight: "2 ct",
    settingStyle: "Hidden halo",
    metalType: "14K Yellow Gold",
    basketSetting: "Low basket",
    prongs: "Eagle claw",
    bandStyle: "Pave",
    ringSize: "6.5",
    budget: "$4,000-$7,000",
    timeline: "6 weeks",
    notes: "Template coverage only",
  },
  checkout: { event: "checkout.session.completed", status: "completed" },
  files: [{ name: "inspiration.jpg", type: "image/jpeg", size: 12, content: "aGVsbG8=" }],
};

const html = email.requestHtml(payload);
const text = email.requestText(payload);
for (const expected of ["Internal Test", "Oval", "Hidden halo", "14K Yellow Gold", "$4,000-$7,000", "inspiration.jpg", "completed"]) {
  assert(html.includes(expected) || text.includes(expected), `Email template omitted: ${expected}`);
}
assert.equal(email.emailAttachments(payload.files).length, 1, "Attachment was not prepared");
assert.equal(email.businessEmail(), "thedonjewelersandjewelry@gmail.com", "Default business recipient changed");

console.log(`Notification audit passed for ${requiredForms.length} form types, Stripe lifecycle events, customer confirmations, business email, database/fallback flow, and attachments.`);
