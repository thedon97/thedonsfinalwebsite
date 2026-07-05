# The Don Jewelers & Jewelry

Production-ready website for a private jeweler specializing in custom jewelry, engagement rings, diamond jewelry, and nationwide shipping.

## Production Deployment

1. Upload or push the project root to GitHub.
2. Import the repository into your hosting dashboard.
3. Use the default project settings.
4. Build command: `npm run build`
5. Output directory: `.`
6. Go to Settings > Environment Variables.
7. Add or update the LGD and Resend environment variables listed below for Production, Preview, and Development.
8. Go to Deployments.
9. Open the three-dot menu on the latest deployment.
10. Click Redeploy.
11. Turn off "Use existing Build Cache."
12. Redeploy and test the live diamond page.

## Environment Variables

For the live Labgrown Diamond inventory, request emails, lead recovery, and Stripe checkout notifications, add this in Project Settings > Environment Variables:

```text
LGD_API_KEY=your_private_lgd_api_key
LGD_CERTIFIED_URL=https://lgdusallc.com/developer-api/diamond?type=certified
LGD_CERTIFIED_COLOR_URL=https://lgdusallc.com/developer-api/diamond?type=certified_color
RESEND_API_KEY=your_private_resend_api_key
RESEND_TO_EMAIL=thedonjewelersandjewelry@gmail.com
RESEND_FROM_EMAIL=The Don Jewelers & Jewelry <onboarding@resend.dev>
DATABASE_URL=your_postgres_database_url
STRIPE_SECRET_KEY=your_private_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_signing_secret
ADMIN_SYNC_SECRET=your_private_admin_key
SITE_URL=https://www.thedonjewelersandjewelrynyc.com
```

Do not commit real `.env` files or private API keys.

`RESEND_FROM_EMAIL` can stay as `The Don Jewelers & Jewelry <onboarding@resend.dev>` for initial testing. For production email delivery, verify your own sending domain in Resend and replace it with a verified sender such as `The Don Jewelers & Jewelry <orders@yourdomain.com>`.

The website frontend calls only these server-side routes. The server-side routes call LGD and keep the key private:

- `/api/diamonds/certified`
- `/api/diamonds/certified-color`
- `/api/test-diamond-api`
- `/api/send-request`

Website quote forms, product inquiry forms, checkout inquiry forms, appointment requests, engagement ring builder requests, and Stripe payment-link click alerts send lead records through `/api/send-request`. The server saves the lead to PostgreSQL, sends the business email through Resend, sends a customer confirmation email when a customer email is present, and logs every sent/failed attempt for admin retry.

Stripe Checkout session creation is logged as a lead. Stripe webhook events should be pointed to:

```text
https://www.thedonjewelersandjewelrynyc.com/api/stripe-webhook
```

Recommended Stripe events:

- `checkout.session.completed`
- `checkout.session.async_payment_failed`
- `checkout.session.expired`

Lead recovery is available at `/admin` through the Lead Recovery section. Use `ADMIN_SYNC_SECRET` as the admin recovery key.

## Production catalog, sync, and checkout

The production product catalog supports PostgreSQL through `DATABASE_URL`. On first database-backed product request, manual products and the bundled CVD jewelry snapshot are seeded without deleting custom products. Supplier jewelry refreshes through:

- `POST /api/admin/jewelry-sync` with `x-admin-key: ADMIN_SYNC_SECRET`
- GitHub Actions at Sunday midnight in `America/New_York`

Required private Vercel environment variables:

- `DATABASE_URL`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `ADMIN_SYNC_SECRET`
- `CRON_SECRET`
- `SITE_URL`
- Existing `LGD_*` variables

`/api/system-status` reports only whether required settings exist; it never returns secret values.

## Included Compliance Pages

- Refund & Return Policy
- Payment Policy
- Shipping Policy
- Custom Order Policy
- Warranty Policy
- Terms & Conditions
- Privacy Policy
- Financing Policy

Policy links are available in the footer and checkout support area.
