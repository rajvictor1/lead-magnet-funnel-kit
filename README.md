# Lead Magnet Funnel Kit

A complete, reusable, done-for-you lead magnet funnel system. Build a standalone landing page, capture emails, deliver a downloadable PDF, and nurture leads with automated emails.

## What you get

| Component | Purpose |
|-----------|---------|
| **Standalone landing page** | Next.js app with client brand theme, ready to deploy on Vercel |
| **Lead magnet PDF** | Branded 7-page PDF asset with editable source |
| **Email capture + instant PDF delivery** | Visitor submits email → lead saved → PDF downloads immediately |
| **Welcome email sequence** | 4-email nurture sequence (immediate, +1 day, +3 days, +7 days) |
| **Automated email system setup** | Mailchimp + EmailJS/Resend integration guide |
| **Lead tracking spreadsheet** | Daily, weekly, monthly metrics tracker |

## Use cases

- Personal brands wanting to grow an email list
- Coaches, consultants, and founders launching a free resource
- SaaS companies needing a downloadable lead magnet funnel
- Agencies reselling a repeatable lead magnet kit to clients

## Folder structure

```
lead-magnet-funnel-kit/
├── landing-page/          # Next.js standalone landing page
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   │   └── lead-magnet.pdf
│   ├── package.json
│   └── next.config.mjs
├── assets/
│   ├── lead-magnet-source.md
│   └── lead-magnet.pdf
├── email-sequence/
│   └── welcome-sequence.md
├── setup-docs/
│   ├── deployment-guide.md
│   ├── customization-guide.md
│   └── automated-email-system.md
├── tracking/
│   └── lead-metrics-tracker.xlsx
└── src/
    └── build_pdf.py
```

## Quick start

### 1. Clone and install

```bash
git clone https://github.com/rajvictor1/lead-magnet-funnel-kit.git
cd lead-magnet-funnel-kit/landing-page
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

### 3. Deploy to Vercel

```bash
vercel --prod
```

Or push to GitHub and import into Vercel.

### 4. Connect automated emails (optional)

Follow `setup-docs/automated-email-system.md` to connect Mailchimp or Resend for the welcome sequence.

## How the email-to-PDF flow works

1. Visitor enters email on the landing page.
2. Frontend POSTs email to `/api/capture-lead`.
3. API saves the lead to `data/leads.csv` (server-side).
4. Browser immediately triggers download of `public/lead-magnet.pdf`.
5. If an email service key is configured, the API also sends the welcome email.

## Customization

See `setup-docs/customization-guide.md` for:
- Changing brand colors, fonts, and logo
- Replacing the PDF with your own lead magnet
- Updating the email sequence copy
- Renaming the product for a client

## License

MIT

## Built by

Rajesh Kumar · BrandOps · https://www.brandops.site
