"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Download, Loader2, Sparkles } from "lucide-react";

export function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/capture-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      // Trigger instant PDF download
      const link = document.createElement("a");
      link.href = "/lead-magnet.pdf";
      link.download = "5-linkedin-templates-brandops.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("Check your downloads — your templates are on the way!");
      setEmail("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to submit.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 rounded-full border border-border bg-card px-5 py-3 text-sm text-foreground outline-none ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-primary"
      />
      <Button
        type="submit"
        disabled={loading}
        className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Get Free Templates
          </>
        )}
      </Button>
    </form>
  );
}
