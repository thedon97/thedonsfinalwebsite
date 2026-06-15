# The Don Jewelers & Jewelry

Vercel-ready website for a private jeweler specializing in custom jewelry, engagement rings, diamond jewelry, and nationwide shipping.

## Vercel Deployment

1. Upload or push the project root to GitHub.
2. Import the repository into Vercel.
3. Use the default project settings.
4. Build command: `npm run build`
5. Output directory: `.`
6. Go to Settings > Environment Variables.
7. Add or update `DIAMOND_API_KEY` with the private LGD API key.
8. Go to Deployments.
9. Open the three-dot menu on the latest deployment.
10. Click Redeploy.
11. Turn off "Use existing Build Cache."
12. Redeploy and test the live diamond page.

## Environment Variables

For the live Labgrown Diamond inventory, add this in Vercel Project Settings > Environment Variables:

```text
DIAMOND_API_KEY=your_private_lgd_api_key
```

Do not commit real `.env` files or private API keys.

The website frontend calls `/api/diamonds`. The server-side route calls only these LGD feeds and keeps the key private:

- Certified Diamonds
- Certified Color Diamonds

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
