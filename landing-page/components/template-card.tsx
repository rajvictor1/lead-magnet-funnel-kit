"use client";

import { Card, CardContent } from "@/components/ui/card";

interface TemplateCardProps {
  title: string;
  likes: string;
  description: string;
  preview: string;
  index: number;
}

export function TemplateCard({ title, likes, description, preview, index }: TemplateCardProps) {
  return (
    <Card className="overflow-hidden border-border/50 bg-card transition-all hover:border-primary/50">
      <CardContent className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground">TEMPLATE {String(index + 1).padStart(2, "0")}</span>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">{likes}</span>
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 rounded-lg bg-muted/50 p-4">
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{preview}</p>
        </div>
      </CardContent>
    </Card>
  );
}
