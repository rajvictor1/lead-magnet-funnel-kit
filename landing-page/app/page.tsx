import { LeadCaptureForm } from "@/components/lead-capture-form";
import { TemplateCard } from "@/components/template-card";
import { Sparkles, Download, Mail, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

const templates = [
  {
    title: "The Personal Story",
    likes: "100-300 likes",
    description: "Vulnerable, relatable, and high-engagement. Best for building personal brand and thought leadership.",
    preview: `I used to spend 6 hours per LinkedIn post...

Most people use generic templates. I did too.

Then I realized: people don't care about perfect posts. They care about REAL stories.

Now I write posts in 20 minutes. My engagement is 3x.

The lesson: authenticity beats polish.`,
  },
  {
    title: "The Question Hook",
    likes: "150-400 likes",
    description: "Spark immediate engagement with a surprising question and contrarian take.",
    preview: `Does working 80-hour weeks make you successful?

Most people say yes.

But the real answer is NO.

Here's why:
- Burnout kills productivity
- Sleep deprivation ruins decisions
- You miss what matters

What would you say?`,
  },
  {
    title: "The Mini-Thread",
    likes: "200-500 likes",
    description: "Educational value from mistakes. Highly shareable and great for establishing expertise.",
    preview: `5 mistakes I made building my email list:

1) I sent too many emails
→ I switched to 1 email/week. Opens doubled.

2) I wrote salesy subject lines
→ Curiosity subjects. Opens tripled.

3) I sent from a corporate email
→ Personal email. 5x response rate.`,
  },
  {
    title: "The Case Study",
    likes: "150-350 likes",
    description: "Concrete proof with numbers. Best for sales, product validation, and credibility.",
    preview: `Sarah wanted to grow her LinkedIn audience.

Problem: Posts took 6 hours each. She had 2,000 followers.

Solution: She used content templates + BrandOps automation.

Results: 3 months later, 8,000 followers. Posts took 20 minutes.

Interested in similar results? DM me.`,
  },
  {
    title: "The Trend Take",
    likes: "300-800 likes",
    description: "Timely, contrarian, and shareable. Best for trending topics and viral potential.",
    preview: `Everyone's talking about ChatGPT.

What most people think: "It will replace writers."

What I think: "It will replace bad writers."

Why: AI is great at generating content. It's terrible at creating truth.

This matters because: writers who think critically will thrive. The rest will be automated.`,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Free PDF Download
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            5 LinkedIn Templates
            <br />
            That Get{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              100+ Likes
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Proven formulas used by founders, coaches, and creators to post consistently on LinkedIn
            without spending hours on every post.
          </p>
          <div className="mt-10">
            <LeadCaptureForm />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">No spam. Unsubscribe anytime. Built by BrandOps.</p>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What you'll get</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Each template includes a formula, a real example, customization tips, and realistic engagement expectations.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template, index) => (
              <TemplateCard key={template.title} {...template} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="about" className="border-y border-border/50 bg-muted/20 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How it works</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: Mail, step: "01", title: "Enter your email", desc: "We save your email and never share it." },
              { icon: Download, step: "02", title: "Download instantly", desc: "Your PDF downloads immediately after submit." },
              { icon: BarChart3, step: "03", title: "Post with confidence", desc: "Use the templates to grow your LinkedIn engagement." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border/50 bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">STEP {item.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-orange-500/10 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get the templates now</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join 500+ creators using these templates to post faster and grow faster on LinkedIn.
          </p>
          <div className="mt-8">
            <LeadCaptureForm />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Instant PDF delivery. No credit card required.</p>
        </div>
      </section>
    </>
  );
}
