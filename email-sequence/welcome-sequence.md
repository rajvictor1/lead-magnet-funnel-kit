# Welcome Email Sequence

## Overview

| Email | Timing | Subject | Purpose |
|-------|--------|---------|---------|
| 1 | Immediately after signup | Your LinkedIn templates are inside | Deliver PDF + set expectation |
| 2 | +1 day | The one template that never fails | Educate + build trust |
| 3 | +3 days | The 20-minute LinkedIn post system | Introduce BrandOps workflow |
| 4 | +7 days | Ready to turn one idea into a carousel + newsletter? | Soft CTA to BrandOps |

---

## Email 1 — Immediate Delivery

**Subject:** Your LinkedIn templates are inside 🚀
**Preview text:** 5 proven templates. Use the first one today.

### Plain text

Hi there,

Thanks for downloading the 5 LinkedIn Templates That Get 100+ Likes.

Your PDF is attached. Here is a quick way to use it today:

1. Pick one template that matches what you want to say.
2. Fill in your own story, lesson, or example.
3. Post within 20 minutes.

Template 2 (The Question Hook) usually gets the fastest engagement if you are unsure where to start.

Happy posting,
Rajesh Kumar
BrandOps

### HTML

```html
<p>Hi there,</p>
<p>Thanks for downloading <strong>5 LinkedIn Templates That Get 100+ Likes</strong>.</p>
<p>Your PDF is attached. Here is a quick way to use it today:</p>
<ol>
  <li>Pick one template that matches what you want to say.</li>
  <li>Fill in your own story, lesson, or example.</li>
  <li>Post within 20 minutes.</li>
</ol>
<p>Template 2 (The Question Hook) usually gets the fastest engagement if you are unsure where to start.</p>
<p>Happy posting,<br>Rajesh Kumar<br>BrandOps</p>
```

---

## Email 2 — +1 Day

**Subject:** The one template that never fails
**Preview text:** It works because it feels personal.

### Plain text

Hi there,

Out of the 5 templates, the one I come back to most often is the Personal Story template.

Why it works:
- People remember stories, not tips.
- A small failure or lesson feels relatable.
- It builds trust before you ever ask for anything.

Try this structure today:
- What I used to believe
- What happened that changed it
- What I do now
- One lesson for the reader

If you post it, tag me. I will engage.

Rajesh Kumar
BrandOps

### HTML

```html
<p>Hi there,</p>
<p>Out of the 5 templates, the one I come back to most often is the <strong>Personal Story</strong> template.</p>
<p>Why it works:</p>
<ul>
  <li>People remember stories, not tips.</li>
  <li>A small failure or lesson feels relatable.</li>
  <li>It builds trust before you ever ask for anything.</li>
</ul>
<p>Try this structure today:</p>
<ol>
  <li>What I used to believe</li>
  <li>What happened that changed it</li>
  <li>What I do now</li>
  <li>One lesson for the reader</li>
</ol>
<p>If you post it, tag me. I will engage.</p>
<p>Rajesh Kumar<br>BrandOps</p>
```

---

## Email 3 — +3 Days

**Subject:** The 20-minute LinkedIn post system
**Preview text:** From blank page to published in 20 minutes.

### Plain text

Hi there,

Speed matters on LinkedIn. The creators who post consistently do not spend hours writing.

Here is the 20-minute system I use:

- 0-5 min: Pick a template
- 5-10 min: Write one personal example
- 10-15 min: Edit for clarity
- 15-20 min: Add hook + CTA + post

The template removes the blank-page problem. The timer removes the perfectionism problem.

If you want the same system built into your content workflow, BrandOps does exactly that: research once, review, then publish a carousel + newsletter.

See how it works: https://www.brandops.site

Rajesh Kumar
BrandOps

### HTML

```html
<p>Hi there,</p>
<p>Speed matters on LinkedIn. The creators who post consistently do not spend hours writing.</p>
<p>Here is the 20-minute system I use:</p>
<ul>
  <li>0-5 min: Pick a template</li>
  <li>5-10 min: Write one personal example</li>
  <li>10-15 min: Edit for clarity</li>
  <li>15-20 min: Add hook + CTA + post</li>
</ul>
<p>The template removes the blank-page problem. The timer removes the perfectionism problem.</p>
<p>If you want the same system built into your content workflow, BrandOps does exactly that: research once, review, then publish a carousel + newsletter.</p>
<p><a href="https://www.brandops.site">See how it works</a></p>
<p>Rajesh Kumar<br>BrandOps</p>
```

---

## Email 4 — +7 Days

**Subject:** Ready to turn one idea into a carousel + newsletter?
**Preview text:** This is how BrandOps users save 5 hours a week.

### Plain text

Hi there,

By now you have seen how a simple template can speed up your LinkedIn posts.

The next level is a system:
- One research topic
- One review step
- One carousel
- One newsletter

That is what BrandOps does. It is built for solo operators, trainers, and founders who want to publish more without losing control.

If you are curious, here is the next step:
https://www.brandops.site

No pressure. Keep the templates either way.

Rajesh Kumar
BrandOps

### HTML

```html
<p>Hi there,</p>
<p>By now you have seen how a simple template can speed up your LinkedIn posts.</p>
<p>The next level is a system:</p>
<ul>
  <li>One research topic</li>
  <li>One review step</li>
  <li>One carousel</li>
  <li>One newsletter</li>
</ul>
<p>That is what BrandOps does. It is built for solo operators, trainers, and founders who want to publish more without losing control.</p>
<p>If you are curious, here is the next step: <a href="https://www.brandops.site">BrandOps</a></p>
<p>No pressure. Keep the templates either way.</p>
<p>Rajesh Kumar<br>BrandOps</p>
```

---

## Mailchimp merge tags

Use these merge tags when copying into Mailchimp Customer Journey emails:

| Placeholder | Mailchimp tag | Purpose |
|-------------|---------------|---------|
| First name | `*|FNAME|*` | Personalize greeting |
| Email | `*|EMAIL|*` | Insert subscriber email |
| Download URL | `*|PDF_URL|*` | Link to hosted PDF |
| Unsubscribe | `*|UNSUB|*` | Required unsubscribe link |
| Company address | `*|LIST:ADDRESS|*` | CAN-SPAM compliance |

---

## Automation triggers

| Email | Trigger | Delay |
|-------|---------|-------|
| 1 | Tag added: `lead-magnet-signup` | Immediate |
| 2 | Tag added: `lead-magnet-signup` | 1 day |
| 3 | Tag added: `lead-magnet-signup` | 3 days |
| 4 | Tag added: `lead-magnet-signup` | 7 days |
