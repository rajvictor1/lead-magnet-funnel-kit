import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">BrandOps</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#templates" className="text-sm font-medium text-muted-foreground hover:text-foreground">Templates</Link>
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground">Why this works</Link>
          <Link href="#download" className="text-sm font-medium text-muted-foreground hover:text-foreground">Download</Link>
        </nav>
      </div>
    </header>
  );
}
