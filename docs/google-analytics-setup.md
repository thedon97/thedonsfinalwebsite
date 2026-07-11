# Google Analytics 4 Setup

## Implemented

- Measurement ID resolution: `NEXT_PUBLIC_GA_MEASUREMENT_ID`, then `GA_MEASUREMENT_ID`, then the existing production ID.
- GA4 loads only when Vercel reports production, unless `GA_DEBUG=true`.
- Automatic page views are disabled; route views are sent once per path/title combination.
- Do Not Track is respected. Set `GA_CONSENT_REQUIRED=true` only after adding an approved consent UI; tracking then waits for `localStorage.donAnalyticsConsent = "granted"`.
- No names, email addresses, phone numbers, notes, file names, or other PII are sent.

## Events

Existing and added events include `page_view`, `view_item`, `search`, `add_to_cart`, `begin_checkout`, `generate_lead`, `quote_form_start`, `quote_form_submit`, `contact_form_submit`, `appointment_request`, `ring_builder_start`, `ring_design_submit`, `custom_jewelry_submit`, `product_inquiry_submit`, `financing_request`, `phone_click`, `email_click`, and `social_click`.

Stripe-hosted wallet/card selection is not visible to website JavaScript. Payment-method events require Stripe webhook/payment-method data and must not include sensitive card information. Completed payment should be measured from the verified Stripe webhook, not the success-page visit alone.

## Environment

Set in Vercel Production:

```text
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-68DJH1C3QF
GA_DEBUG=false
GA_CONSENT_REQUIRED=false
```

Keep the legacy `GA_MEASUREMENT_ID` only if another integration uses it. Both variables pointing to the same ID do not create two tags; the resolver selects one.

## Verification

1. Open GA4 > Reports > Realtime, visit the production website in a browser without Do Not Track, and navigate between pages.
2. Confirm one `page_view` per navigation and test `search`, `phone_click`, `quote_form_start`, and a safe test form submission.
3. For DebugView, temporarily set `GA_DEBUG=true` in a Preview deployment, test, then return it to `false`.
4. Mark business outcomes such as `appointment_request`, `ring_design_submit`, `quote_form_submit`, and verified purchase events as key events in GA4 Admin.
5. Do not test production forms with invented customer data that could be mistaken for a real lead; label internal tests clearly.

The protected `/admin` SEO panel shows integration readiness and saved lead conversions. Direct GA4 reporting requires `GOOGLE_ANALYTICS_PROPERTY_ID` and a secure server-side Google credential integration.
