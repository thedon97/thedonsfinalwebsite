# SEO Product Indexing Checklist

Use this checklist after deploying product SEO changes.

## Google Search Console

- Submit `https://www.thedonjewelersandjewelrynyc.com/sitemap.xml`.
- Inspect one manual product URL, for example `/products/...`.
- Inspect one LGD jewelry product URL, for example `/products/...` or `/diamonds/lab-grown/...`.
- Inspect one live diamond URL when cached inventory exists, for example `/diamonds/[certificate-or-stock-number]`.
- Request indexing for the most important product and category URLs.

## Crawlability

- Confirm product title, price, category, and specs appear in original HTML source.
- Confirm product pages do not depend only on client-side `fetch()` or `useEffect` style rendering.
- Confirm every product card links with a normal `<a href="/products/...">` URL.
- Confirm important category pages remain indexable.
- Confirm filter/sort combinations use the category canonical URL and do not create thin duplicate index pages.

## Schema

- Validate product URLs in Google's Rich Results Test.
- Confirm `Product` schema includes name, image, description, SKU, brand, category, offer, price when available, availability, and item condition.
- Confirm diamond product schema includes available specs such as carat, shape, color, clarity, cut, polish, symmetry, lab, certificate number, and growth method.
- Confirm `BreadcrumbList` schema appears on product pages.

## Robots And Sitemap

- Confirm `https://www.thedonjewelersandjewelrynyc.com/robots.txt` loads.
- Confirm robots allows product, diamond, and category pages.
- Confirm robots blocks admin, API, checkout status, account, and private routes.
- Confirm `https://www.thedonjewelersandjewelrynyc.com/sitemap.xml` loads.
- Confirm sitemap includes homepage, categories, visible products, LGD jewelry products, and cached diamond URLs.
- Confirm hidden, deleted, unavailable, draft, and sold-out products are excluded unless intentionally available for inquiry.

## Deployment QA

- Run `npm run check`.
- Run `npm run build`.
- Open a product page and confirm the visual design stays clean: image/gallery, title, price, specs, availability, and buttons only.
- Confirm checkout/order buttons still work for available priced products.
- Confirm request/inquiry buttons still work for quote-only products.
- Confirm no private API keys or admin data appear in page source.
