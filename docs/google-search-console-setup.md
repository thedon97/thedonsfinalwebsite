# Google Search Console Setup

## Current Website State

- Canonical host: `https://www.thedonjewelersandjewelrynyc.com`
- Sitemap: `https://www.thedonjewelersandjewelrynyc.com/sitemap.xml`
- Robots: `https://www.thedonjewelersandjewelrynyc.com/robots.txt`
- Existing HTML verification files are present. Optional meta verification is supported with `GOOGLE_SITE_VERIFICATION`; keep the token in Vercel, not Git.

## Manual Google Steps

1. In Search Console, add Domain property `thedonjewelersandjewelrynyc.com` (no protocol or `www`). Domain properties combine protocol and subdomain data.
2. Copy Google's TXT value into the DNS provider for the domain, wait for propagation, and click Verify. Do not remove the TXT record after verification.
3. Keep the existing URL-prefix property `https://www.thedonjewelersandjewelrynyc.com/` if it already contains history.
4. Open Sitemaps and submit `sitemap.xml`.
5. Inspect priority URLs below. Run Test Live URL, review rendered HTML and detected structured data, then request indexing only when the live test is valid.
6. In Indexing > Pages, filter to submitted sitemap URLs and separate genuine errors from duplicates, excluded utility pages, and normal crawl backlog.
7. Review Experience > Core Web Vitals by mobile and desktop URL group.
8. Review Enhancements for Product snippets, Merchant listings, Breadcrumbs, and any detected schema errors.
9. In Performance > Search results, compare 28 days and 3 months. Review Queries, Pages, Countries, Devices, and Search appearance. Export before major changes.

Google limits manual indexing requests and indexing is not immediate. Use URL Inspection for the highest-value changed pages; rely on the sitemap and internal links for the full catalog.

## Priority Inspection URLs

- `/`
- `/custom-engagement-rings`
- `/start-custom-ring-design`
- `/engagement-rings-allentown-pa`
- `/engagement-rings-lehigh-valley`
- `/custom-jewelry-allentown-pa`
- `/custom-jewelry-nyc`
- `/lab-diamond-rings`
- `/natural-diamond-rings`
- `/diamond-tennis-bracelets`
- `/custom-engagement-ring-process`
- `/engagement-ring-cost-guide`

Inspect representative product and diamond URLs after these core pages are indexed. A sitemap submission is a discovery signal, not a command to index every URL.
