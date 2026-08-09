# Database-backed lead recovery

The storefront already supports PostgreSQL lead recovery. It activates automatically when `DATABASE_URL` is available to the Vercel project.

## Recommended production setup

1. In the Vercel project `thedonsfinalwebsite`, open **Storage / Marketplace** and add **Neon Postgres**.
2. Connect it to Production and Preview. Vercel will inject `DATABASE_URL` without exposing the credential in the repository.
3. Redeploy the latest production commit.
4. Submit one controlled contact-form test and one controlled appointment test.
5. Open `/api/system-status` and confirm `leadRecoveryConfigured` is true.
6. In the protected admin lead-recovery view, confirm both test records exist and their business/customer email statuses are recorded.

No manual SQL migration is required for the first connection. `server/_db.js` and `server/_lead-store.js` create the required product, inventory, lead, and email-attempt tables with `CREATE TABLE IF NOT EXISTS`.

## Recovery behavior

- Every request is stored before its notification result is finalized.
- Business and customer email attempts are recorded separately.
- Failed Resend deliveries remain visible for an authenticated retry.
- Stripe session and webhook status can be associated with the stored lead.

## Backup policy

- Enable the database provider's automated backups / point-in-time restore option appropriate to the account plan.
- Keep Production and Preview databases separate.
- Never put `DATABASE_URL` in Git, browser code, screenshots, or support messages.
- Test restoration quarterly using a provider-created branch or isolated restore target, never by overwriting Production.

## Verification checklist

- `DATABASE_URL` exists in Vercel Production and Preview.
- `/api/system-status` reports database-backed lead recovery configured.
- Contact, appointment, custom order, product inquiry, diamond inquiry, and Stripe notification audits pass.
- A failed-email test can be located and retried from the protected recovery view.
