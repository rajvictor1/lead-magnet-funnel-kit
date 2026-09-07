# Automated Email System

This guide explains how to add automated welcome and follow-up emails to the Lead Magnet Funnel Kit.

## Current state

The landing page already:
- Captures emails via `/api/capture-lead`
- Saves them to `data/leads.csv`
- Instantly downloads the PDF in the browser

What is **not** active yet: sending welcome emails or follow-up sequences.

## Phase 1 — No automation (active now)

- Visitor submits email.
- Lead is saved to CSV.
- PDF downloads immediately.
- You manually export leads from `data/leads.csv` and import into your email tool.

## Phase 2 — Automated emails (recommended next step)

Two free options:

### Option A — Mailchimp (free up to 500 contacts)

Best if you want a built-in CRM, templates, and Customer Journey automation.

#### Steps

1. Create a free account at https://mailchimp.com.
2. Create an audience called "Lead Magnet Subscribers".
3. Add a hidden field or tag called `lead-magnet-signup`.
4. Build a Customer Journey:
   - Trigger: tag added = `lead-magnet-signup`
   - Email 1: send immediately
   - Email 2: wait 1 day
   - Email 3: wait 3 days
   - Email 4: wait 7 days
5. Copy the email content from `email-sequence/welcome-sequence.md`.
6. Replace placeholders with Mailchimp merge tags:
   - `*|FNAME|*` for first name
   - `*|PDF_URL|*` for download link
   - `*|UNSUB|*` for unsubscribe
   - `*|LIST:ADDRESS|*` for footer address
7. Upload `public/lead-magnet.pdf` to Mailchimp or host on Google Drive and use that URL.
8. Get your Mailchimp API key and audience ID.
9. In the landing page API route, call Mailchimp to add the subscriber when `/api/capture-lead` is hit.

Example code to add to `app/api/capture-lead/route.ts`:

```typescript
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g. us14

async function addToMailchimp(email: string) {
  const res = await fetch(
    `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        tags: ["lead-magnet-signup"],
      }),
    }
  );
  return res.ok;
}
```

### Option B — Resend (free up to 3,000 emails/month)

Best if you want simple, developer-friendly transactional email and full control over the sequence.

#### Steps

1. Create a free account at https://resend.com.
2. Verify your domain or use the default Resend domain.
3. Create an API key.
4. Install the Resend SDK:

```bash
npm install resend
```

5. Create email templates in React or HTML.
6. Send immediate welcome email from `/api/capture-lead/route.ts`.
7. For follow-up emails, either:
   - Use Resend broadcast API with scheduled sends, or
   - Set up a Vercel cron job to check new leads and send follow-ups.

Example immediate email:

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "BrandOps <hello@brandops.site>",
  to: email,
  subject: "Your LinkedIn templates are inside 🚀",
  html: `...`,
  attachments: [
    {
      filename: "5-linkedin-templates.pdf",
      path: "./public/lead-magnet.pdf",
    },
  ],
});
```

## Environment variables

Create `.env.local` in `landing-page/` and never commit it:

```bash
# Mailchimp
MAILCHIMP_API_KEY=your_key
MAILCHIMP_AUDIENCE_ID=your_audience_id
MAILCHIMP_SERVER_PREFIX=your_server_prefix

# OR Resend
RESEND_API_KEY=your_key
FROM_EMAIL=hello@brandops.site
```

## Follow-up schedule

| Email | Delay | Content source |
|-------|-------|----------------|
| 1 | Immediate | `email-sequence/welcome-sequence.md` Email 1 |
| 2 | 1 day | Email 2 |
| 3 | 3 days | Email 3 |
| 4 | 7 days | Email 4 |

## Compliance

- Always include an unsubscribe link.
- Include a physical mailing address in the footer.
- Do not email people who did not explicitly opt in.
- Honor unsubscribe requests within 24 hours.

## Recommendation

Start with **Resend** if you want a fast, code-first setup and already have `brandops.site` email verified. Start with **Mailchimp** if you want a visual journey builder and do not mind the 500-contact free limit.
