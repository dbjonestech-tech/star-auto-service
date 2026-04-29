import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, Calendar, Wrench } from "lucide-react";
import { SITE } from "@/lib/constants";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "NAPA Auto Care Warranty | The Star Auto Service";
const DESCRIPTION =
  "Your repair at The Star Auto Service is backed by NAPA Auto Care's nationwide 24-month / 24,000-mile peace-of-mind warranty, honored at over 17,000 NAPA Auto Care Centers.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/warranty` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/warranty`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
};

const PILLARS = [
  {
    icon: Calendar,
    headline: "24 months",
    body: "Coverage starts the day of repair and runs for two full years from that date.",
  },
  {
    icon: Wrench,
    headline: "24,000 miles",
    body: "Or 24,000 miles of driving, whichever comes first. Both parts and qualifying labor.",
  },
  {
    icon: MapPin,
    headline: "Nationwide, 17,000+ shops",
    body: "Honored at every NAPA Auto Care Center across the country. Move, road-trip, no problem.",
  },
];

export default function WarrantyPage() {
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Warranty", url: `${SITE.url}/warranty` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24 border-b border-line overflow-hidden">
        <SectionWatermark src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1800&q=60&auto=format&fit=crop" opacity={0.05} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Peace of mind warranty</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  Your repair,
                  <br />
                  <span className="text-royal">backed nationwide.</span>
                </h1>
                <p className="mt-7 text-lg md:text-xl text-graphite leading-relaxed font-medium max-w-2xl">
                  As an official NAPA Auto Care Center, the work we do at The Star Auto Service is covered by NAPA&apos;s nationwide warranty, 24 months, 24,000 miles, honored at over 17,000 NAPA Auto Care Centers across the country.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="relative aspect-[4/3] overflow-hidden bg-ink shadow-card-lg">
                  <Image
                    src="/assets/warranty-hero.jpg"
                    alt="NAPA AutoCare Center sign on the storefront"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24 lg:py-32 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.headline} delay={i * 0.06}>
                  <article className="relative bg-surface border border-line p-8 md:p-10 h-full shadow-card">
                    <div className="absolute top-0 left-8 right-8 h-1 bg-gold" aria-hidden="true" />
                    <div className="w-14 h-14 bg-royal-tint flex items-center justify-center mb-7">
                      <Icon className="text-royal" size={26} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <h2 className="font-sans font-black text-2xl md:text-3xl text-ink tracking-tight leading-none">
                      {p.headline}
                    </h2>
                    <p className="mt-5 text-base text-graphite leading-relaxed font-medium">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24 lg:py-32 border-b border-line-subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              The plain version.
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg text-graphite leading-relaxed font-medium">
              <p>
                When you have a qualifying repair done at The Star Auto Service, the parts and labor are warrantied for 24 months from the date of repair, or 24,000 miles of driving, whichever comes first.
              </p>
              <p>
                If something goes wrong with that specific repair within the warranty period, the work is covered. You can bring it back to us. You can also bring it to any of the 17,000+ NAPA Auto Care Centers nationwide, meaning if you move to Phoenix, road-trip to Maine, or break down in a small town in Oklahoma on a Tuesday, the warranty travels with you.
              </p>
              <p className="text-ink font-semibold">
                Keep your invoice. That&apos;s the proof. We also keep it on file at the shop, so if you misplace yours, give us a call.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 relative bg-surface border border-line p-7 md:p-8 shadow-card">
              <div className="absolute top-0 left-7 right-7 h-0.5 bg-gold" aria-hidden="true" />
              <div className="flex items-start gap-5">
                <span className="w-12 h-12 bg-gold-tint flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-royal" size={22} strokeWidth={2} aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h3 className="font-sans font-black text-lg md:text-xl text-ink tracking-tight">
                    What&apos;s covered
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-graphite leading-relaxed font-medium">
                    Most repairs you&apos;d typically have done at a shop, brakes, engine work, transmission, electrical, cooling, AC, fuel, suspension, and more. The specific eligible categories are governed by NAPA. We&apos;ll walk you through what applies to your repair before any work starts.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow>Got a warranty question?</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              Call us and we&apos;ll walk you through it.
            </h2>
            <p className="mt-7 text-base md:text-lg text-graphite leading-relaxed font-medium max-w-xl mx-auto">
              Lost your invoice? Need to confirm something is covered? Driving across the country and want to know where the closest NAPA shop is? We&apos;ll help with all of it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2.5 bg-ink text-cream hover:bg-royal px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
              >
                Call {SITE.phone}
                <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
              </a>
              <Link
                href="https://www.napaautocare.com/locator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border-2 border-ink text-ink hover:bg-ink hover:text-cream px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
              >
                Find a NAPA shop nationwide
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
