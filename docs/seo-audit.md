# SEO Audit - 2026-07-11

Scope: production repository and public architecture for `https://www.thedonjewelersandjewelrynyc.com`.

## Critical

- Unknown browser routes fall through to the SPA homepage with HTTP 200 instead of a true 404. This can create soft-404 indexing. Preserve all known SPA routes, then route unknown URLs through a server 404 in a follow-up deployment.
- Product JSON-LD previously contained a synthetic five-star review and rating. Removed from both server and client schema. Review markup must only return when legitimate reviews are visibly rendered and eligible under Google's rules.
- Local schema contained unconfirmed business hours. Do not add hours until the owner approves the exact appointment availability. The owner confirmed New York locality may remain; no street address was added.

## High Priority

- Search Console recently reported a large `Discovered - currently not indexed` group. The sitemap is technically valid, but product/diamond scale is much larger than the number of strong category and editorial pages. Improve internal linking and content quality before expanding URL volume further.
- Blog detail pages are rendered client-side and only `/blog` is in the server sitemap. Add server-rendered article URLs before treating the blog as a primary organic channel.
- `main.js` is a large single client bundle. Split catalog, admin, diamond inventory, and content modules to reduce parse and interaction cost.
- The loading splash forced a 1.8 second delay. Reduced to 250 ms; follow up with measured LCP and remove it entirely if it still delays the hero.
- Dynamic inventory images need normalized dimensions, `srcset`, and modern derivatives. Several PNG assets are 1-2 MB.
- Analytics reporting APIs are not configured. GA4 collection works, but the protected dashboard cannot pull sessions, Search Console clicks, impressions, or position until secure Google API access is added.

## Medium Priority

- The site is a custom Vercel serverless/SPA hybrid, not Next.js. Most important money pages are server rendered; several operational and article routes rely on JavaScript.
- Page titles and descriptions are extensive and generally unique, but location pages should be reviewed for genuinely distinct visible value to avoid doorway-page similarity.
- FAQ schema is generated only with supplied FAQ arrays, which is correct; continue ensuring every marked-up FAQ is visible on that page.
- Product offers should only expose `price` and availability when current inventory data supports them. Quote-only products should omit Offer pricing.
- Add image width/height or CSS aspect ratios wherever missing to reduce CLS.
- Add automated internal-link crawling after the soft-404 routing issue is fixed so broken links return detectable non-200 statuses.

## Low Priority

- Add `datePublished` and `dateModified` when server-rendered articles are introduced.
- Add explicit social image dimensions.
- Add a dedicated XML image sitemap only if image-search traffic becomes a measured opportunity.
- Consider a consent-management platform if advertising, remarketing, or regulated-region targeting is enabled.

## Already Working Correctly

- HTTPS canonical host is consistently `www.thedonjewelersandjewelrynyc.com` in generated canonicals.
- Important static, product, and diamond pages have server-rendered titles, descriptions, canonicals, Open Graph, Twitter cards, breadcrumbs, and JSON-LD.
- `/sitemap.xml` is generated from visible product data and cached diamond inventory; admin, API, checkout, account, cart, and search URLs are excluded.
- `/robots.txt` allows public crawling, blocks operational paths, and references the canonical sitemap.
- GA4 uses one config call, disables automatic page views, and tracks SPA route views manually.
- Forms use one server-side request service; Resend secrets remain server-side. Lead persistence, delivery status, and retry tooling are present when `DATABASE_URL` is configured.
- Stripe checkout start and webhook routes are integrated with lead/email logging.
- The official Google Business Profile URL is centralized in client and server configuration.

## Architecture

- Frontend: custom vanilla JavaScript SPA (`main.js`) with server-rendered SEO shells.
- Backend: CommonJS Vercel serverless functions routed through `api/index.js`.
- Data: PostgreSQL via `pg`, supplier/API snapshots, and JSON fallbacks.
- Hosting: Vercel rewrites in `vercel.json`.
- Payments: Stripe Checkout and webhook.
- Email: Resend via server-only code.
