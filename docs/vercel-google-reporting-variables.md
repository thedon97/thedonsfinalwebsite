# Vercel Variables for Google Reporting

Add these in Vercel Project Settings > Environment Variables for Production. Apply the same non-secret values to Preview if desired.

```text
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-68DJH1C3QF
GA_MEASUREMENT_ID=G-68DJH1C3QF
GA_DEBUG=false
GA_CONSENT_REQUIRED=false
GOOGLE_ANALYTICS_PROPERTY_ID=543481588
GOOGLE_SEARCH_CONSOLE_PROPERTY=https://www.thedonjewelersandjewelrynyc.com/
```

Add this only after creating a Google Cloud service account:

```text
GOOGLE_SERVICE_ACCOUNT_JSON=<paste the complete minified service-account JSON here>
```

Do not paste the placeholder from `.env.example` into production. Download the real JSON from Google Cloud, keep it private, and paste the complete one-line JSON as the Vercel value. Grant its `client_email` Viewer access to GA4 property `543481588` and Full or Restricted read access to the Search Console property. No write scopes are requested by the website.

Existing email/payment variables must remain unchanged:

```text
DATABASE_URL=<existing production value>
RESEND_API_KEY=<existing production value>
RESEND_TO_EMAIL=thedonjewelersandjewelry@gmail.com
RESEND_FROM_EMAIL=<existing verified sender>
STRIPE_SECRET_KEY=<existing production value>
STRIPE_WEBHOOK_SECRET=<existing production value>
ADMIN_SYNC_SECRET=<existing production value>
```

Never commit real database, Resend, Stripe, admin, or Google service-account credentials.
