import Link from "next/link";
import { Sparkles } from "lucide-react";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Templates", href: "#templates" },
      { label: "Download", href: "#download" },
      { label: "BrandOps", href: "https://www.brandops.site" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Email sequence", href: "https://github.com/rajvictor1/lead-magnet-funnel-kit/tree/main/email-sequence" },
      { label: "Tracker", href: "https://github.com/rajvictor1/lead-magnet-funnel-kit/tree/main/tracking" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "License", href: "https://github.com/rajvictor1/lead-magnet-funnel-kit/blob/main/LICENSE" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              BrandOps
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A review-first content workspace for solo operators, trainers, and founders who want to publish more without losing control.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{group.title}</h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} BrandOps. All rights reserved.</p>
          <p>Built with the Lead Magnet Funnel Kit.</p>
        </div>
      </div>
    </footer>
  );
}
