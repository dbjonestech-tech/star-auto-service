import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CallFAB } from "@/components/ui/CallFAB";
import { ScrollCallBar } from "@/components/ui/ScrollCallBar";
import { PhoneCallEnhancer } from "@/components/ui/PhoneCallEnhancer";
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
    default: "Auto Repair Richardson TX | The Star Auto Service",
  },
  description:
    "Family-owned auto repair in Richardson, TX since 1998. ASE-certified mechanics, honest pricing, bilingual service. Call (972) 231-2886 for an appointment.",
  keywords: [
    "auto repair Richardson TX",
    "mechanic Richardson",
    "brake repair",
    "oil change",
    "engine diagnostics",
    "transmission repair",
    "ASE certified mechanic",
    "car repair near me",
    "The Star Auto Service",
  ],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: "Auto Repair Richardson TX | The Star Auto Service",
    description:
      "Family-owned auto repair in Richardson, TX since 1998. ASE-certified mechanics, honest pricing, bilingual service. Call (972) 231-2886 for an appointment.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Repair Richardson TX | The Star Auto Service",
    description:
      "Family-owned auto repair in Richardson, TX since 1998. ASE-certified mechanics, honest pricing, bilingual service. Call (972) 231-2886 for an appointment.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
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
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CallFAB />
        <ScrollCallBar />
        <PhoneCallEnhancer />
        <Analytics />
      </body>
    </html>
  );
}
