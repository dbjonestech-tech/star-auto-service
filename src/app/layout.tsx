import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CallFAB } from "@/components/ui/CallFAB";
import { ScrollCallBar } from "@/components/ui/ScrollCallBar";
import { PhoneCallEnhancer } from "@/components/ui/PhoneCallEnhancer";
import { HtmlLangSync } from "@/components/ui/HtmlLangSync";
import { CanopyBeacon } from "@/components/analytics/CanopyBeacon";
import { CanopyErrorBeacon } from "@/components/analytics/CanopyErrorBeacon";
import { DiagBeacon } from "@/components/analytics/DiagBeacon";
import { SITE } from "@/lib/constants";
import { generateJsonLd } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | The Star Auto Service",
    default:
      "Auto Repair in Richardson, TX | The Star Auto Service | 4.8★ · Since 1998",
  },
  description:
    "ASE-Certified family-owned auto repair in Richardson, TX since 1998. 4.8★ across 136 reviews. NAPA Auto Care nationwide warranty, bilingual service, honest pricing. Brakes, oil changes, engine diagnostics, AC, state inspections. Call (972) 231-2886.",
  keywords: [
    "auto repair Richardson TX",
    "mechanic Richardson TX",
    "auto repair shop Richardson",
    "car repair Richardson",
    "ASE certified mechanic Richardson",
    "NAPA Auto Care Richardson",
    "brake repair Richardson",
    "oil change Richardson TX",
    "engine diagnostics Richardson",
    "transmission repair Richardson",
    "Texas state inspection Richardson",
    "AC repair Richardson TX",
    "Spanish speaking mechanic Richardson",
    "auto repair near me",
    "best mechanic Richardson",
    "The Star Auto Service",
  ],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: "Auto Repair in Richardson, TX | The Star Auto Service",
    description:
      "Family-owned auto repair shop in Richardson, TX since 1998. 4.8★ across 136 Google reviews. ASE-Certified, NAPA Auto Care, bilingual. Call (972) 231-2886.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Repair in Richardson, TX | The Star Auto Service",
    description:
      "Family-owned auto repair shop in Richardson, TX since 1998. 4.8★ across 136 reviews. ASE-Certified, NAPA Auto Care, bilingual. Call (972) 231-2886.",
  },
  metadataBase: new URL(SITE.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F4ED" },
    { media: "(prefers-color-scheme: dark)", color: "#0B3D91" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateJsonLd();

  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-royal focus:text-cream focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <HtmlLangSync />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CallFAB />
        <ScrollCallBar />
        <PhoneCallEnhancer />
        <Analytics />
        <Suspense fallback={null}>
          <CanopyBeacon endpoint={process.env.NEXT_PUBLIC_CANOPY_URL!} />
        </Suspense>
        <CanopyErrorBeacon endpoint={process.env.NEXT_PUBLIC_CANOPY_URL!} />
        <DiagBeacon />
      </body>
    </html>
  );
}
