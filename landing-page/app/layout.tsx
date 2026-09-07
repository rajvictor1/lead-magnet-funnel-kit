import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "5 LinkedIn Templates That Get 100+ Likes | Free Download",
  description:
    "Get 5 proven LinkedIn post templates used by founders, coaches, and creators to post faster and grow engagement.",
  keywords: ["LinkedIn templates", "LinkedIn post formulas", "personal brand", "lead magnet", "BrandOps"],
  openGraph: {
    title: "5 LinkedIn Templates That Get 100+ Likes",
    description: "Free downloadable PDF with 5 proven LinkedIn post templates.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <Header />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
