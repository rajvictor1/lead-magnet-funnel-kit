# Deployment Guide

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
cd landing-page
npm install
vercel
```

When prompted, link to the GitHub repo `rajvictor1/lead-magnet-funnel-kit`.

### Option 2 — GitHub import

1. Push this repo to GitHub.
2. Go to https://vercel.com/new.
3. Import `rajvictor1/lead-magnet-funnel-kit`.
4. Set root directory to `landing-page`.
5. Click Deploy.

## After deployment

1. Open the deployed URL.
2. Submit a test email.
3. Check that the PDF downloads.
4. SSH or use Vercel Functions logs to verify `data/leads.csv` is being written.

## Important note about static export

The current `next.config.mjs` uses `output: "export"` for static hosting. This means `/api/capture-lead` will not work as a server function.

For the email capture API to work, you need one of these:

### A) Deploy as a full Next.js app (not static export)

Remove or comment out this line in `next.config.mjs`:

```js
output: "export",
```

Then deploy to Vercel. API routes will work normally.

### B) Use a form backend service

If you want to keep static export, replace `/api/capture-lead` with a service like:
- Formspree (free tier)
- Basin
- Getform
- Tally.so
- Google Apps Script

Update `components/lead-capture-form.tsx` to POST to that endpoint instead.

## Connect a custom domain

In Vercel:
1. Go to Project Settings → Domains.
2. Add your domain, e.g., `templates.brandops.site`.
3. Follow DNS instructions.

## Environment variables

If you connect Mailchimp or Resend, add these in Vercel:

- `MAILCHIMP_API_KEY`
- `MAILCHIMP_AUDIENCE_ID`
- `MAILCHIMP_SERVER_PREFIX`
- `RESEND_API_KEY`
- `FROM_EMAIL`

## Build verification

Run locally before deploying:

```bash
cd landing-page
npm install
npm run build
```

If the build passes, you are ready to deploy.
