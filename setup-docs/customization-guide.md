# Customization Guide

## Change brand colors

Edit `landing-page/app/globals.css`:

```css
:root {
  --primary: 24 100% 50%;       /* orange */
  --accent: 24 100% 50%;        /* orange */
  --background: 222.2 84% 4.9%; /* dark */
  --foreground: 0 0% 98%;       /* white */
}
```

Change HSL values to match the client brand.

## Replace the logo

Edit `landing-page/components/header.tsx` and `landing-page/components/footer.tsx`:

- Replace `BrandOps` text with an SVG or image.
- Remove or replace the Sparkles icon.

## Replace the PDF

1. Delete `landing-page/public/lead-magnet.pdf`.
2. Add the new PDF as `landing-page/public/lead-magnet.pdf`.
3. Update the download filename in `landing-page/components/lead-capture-form.tsx`.

## Update the lead magnet copy

1. Edit `landing-page/app/page.tsx`:
   - Hero headline
   - Subheadline
   - Template cards
   - CTA text
2. Edit `assets/lead-magnet-source.md`:
   - Full lead magnet content
3. Regenerate the PDF using `src/build_pdf.py`.

## Rename for a client

Replace these occurrences of "BrandOps":

- `landing-page/app/page.tsx`
- `landing-page/components/header.tsx`
- `landing-page/components/footer.tsx`
- `landing-page/app/layout.tsx`
- `email-sequence/welcome-sequence.md`
- `README.md`

## Change the URL path

The landing page runs at the root `/` by default. To change the deploy path, update `next.config.mjs` and the Vercel project settings.

## Add Google Analytics

Add the tracking script in `landing-page/app/layout.tsx` inside the `<head>` tag.

## Switch from CSV to database

Replace the CSV logic in `app/api/capture-lead/route.ts` with:
- Supabase
- Airtable
- Notion
- Google Sheets API

## Add real email automation

Follow `setup-docs/automated-email-system.md`.
