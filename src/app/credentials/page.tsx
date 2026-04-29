import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Award,
  FileBadge,
  Globe,
  Star,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { CTASection } from "@/components/sections/CTASection";

const TITLE =
  "ASE-Certified, NAPA Auto Care, Texas Inspection Station | Credentials | The Star Auto Service";
const DESCRIPTION =
  "ASE-Certified technicians, NAPA Auto Care Center with nationwide warranty, authorized Texas state inspection station, BBB accredited. The certifications behind 28 years of family-owned auto repair in Richardson, TX.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/credentials` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/credentials`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const PILLARS = [
  {
    icon: Award,
    title: "ASE-Certified technicians",
    body: "Our technicians hold National Institute for Automotive Service Excellence certifications and re-test every five years to keep them. ASE is the industry standard for proven competence on every common system: engine, brakes, electrical, suspension, AC, and more.",
    proof: "Re-tested every 5 years. 8 specialty areas. Industry standard.",
  },
  {
    icon: ShieldCheck,
    title: "NAPA Auto Care Center",
    body: "An audited member of the NAPA Auto Care program. That means our shop meets NAPA's standards for technician training, equipment, and customer treatment, and our qualifying repairs are backed by NAPA's nationwide 24-month / 24,000-mile peace-of-mind warranty.",
    proof: "Honored at 17,000+ NAPA shops nationwide.",
  },
  {
    icon: FileBadge,
    title: "Texas state-authorized inspection station",
    body: "We are an authorized Texas Department of Public Safety inspection station for both safety and emissions inspections in Dallas County. We can also diagnose and repair any item that fails inspection, then re-test for free within 15 days.",
    proof: "Walk-in inspections Mon–Fri 8:00 AM – 6:30 PM, Sat 8:00 AM – 4:00 PM.",
  },
  {
    icon: Star,
    title: "4.8★ across 136 Google reviews",
    body: "Twenty-eight years of word-of-mouth, written down. Our customer reviews speak to consistent honest pricing, real diagnostics instead of parts-cannon guessing, and the kind of repeat-customer relationship that only happens when the rule is followed.",
    proof: "Over a hundred thirty published Google reviews.",
  },
  {
    icon: Globe,
    title: "Bilingual service",
    body: "Service in English or Spanish, whichever you are more comfortable with. Hablamos español. Every quote, every inspection finding, every conversation about what your car actually needs gets explained in your language.",
    proof: "Hablamos español. Every visit, every quote, every conversation.",
  },
];

const STANDARDS = [
  {
    label: "Family-owned and operated",
    body: "Founded by Miguel Ibarra in 1998. Same family, same corner, same rule.",
  },
  {
    label: "Original-quality and OEM parts",
    body: "We do not put bargain-bin parts in your car. NAPA-grade or OEM, the parts that came on the car or the parts the engineer specified.",
  },
  {
    label: "Diagnostic fee credited toward repair",
    body: "Real diagnostics take time and tools. The fee is credited toward the repair if you authorize the work. When we find it, you only pay once.",
  },
  {
    label: "Quoted before any wrench turns",
    body: "You see the inspection findings, the proposed repair, and the price. Authorization required for any change to the quote.",
  },
  {
    label: "BBB-recognized",
    body: "Listed and reviewable on the Better Business Bureau, with the public-facing accountability that comes with it.",
  },
  {
    label: "Insurance and bonding",
    body: "Fully insured, bonded, and operating under all applicable Texas business licenses for an automotive service facility.",
  },
];

export default function CredentialsPage() {
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Credentials", url: `${SITE.url}/credentials` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Intro band */}
      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24 border-b border-line overflow-hidden">
        <SectionWatermark
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b3?w=1800&q=60&auto=format&fit=crop"
          opacity={0.05}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Credentials &amp; standards</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  Why Richardson
                  <br />
                  <span className="text-royal">trusts the shop.</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <p className="text-base sm:text-lg md:text-xl text-graphite leading-relaxed font-medium">
                  Twenty-eight years of family-owned auto repair, backed by
                  every credential a serious shop should hold.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* NAPA card row */}
      <section className="bg-paper py-12 md:py-16 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="md:col-span-4">
              <Reveal>
                <div className="bg-cream p-6 md:p-7 shadow-card flex items-center justify-center">
                  <Image
                    src="/assets/napa-autocare.png"
                    alt="NAPA Auto Care Center"
                    width={320}
                    height={107}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={0.1}>
                <Eyebrow>Official NAPA Auto Care Center</Eyebrow>
                <h2 className="mt-3 font-sans font-black text-2xl md:text-3xl text-ink tracking-tight leading-snug">
                  Your repair, backed nationwide.
                </h2>
                <p className="mt-4 text-base md:text-lg text-graphite leading-relaxed font-medium">
                  Qualifying repairs are warrantied for 24 months / 24,000
                  miles, honored at over 17,000 NAPA Auto Care Centers across
                  the country. Move, road-trip, break down on a Tuesday in
                  Oklahoma, the warranty travels with you.
                </p>
                <Link
                  href="/warranty"
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-extrabold text-royal hover:text-royal-deep transition-colors border-b-2 border-royal pb-1"
                >
                  Read the full warranty
                  <ArrowRight size={13} strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The five pillars */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-14 lg:mb-16">
            <Reveal>
              <Eyebrow>What stands behind the work</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1.04]">
                Five credentials, no shortcuts.
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.05}>
                  <article className="relative bg-surface border border-line p-7 md:p-9 shadow-card h-full">
                    <div className="absolute top-0 left-7 right-7 h-1 bg-royal" aria-hidden="true" />
                    <div className="flex items-start gap-5">
                      <span className="w-12 h-12 bg-gold-tint flex items-center justify-center shrink-0">
                        <Icon size={22} strokeWidth={2} className="text-royal" aria-hidden="true" />
                      </span>
                      <div className="flex-1">
                        <h3 className="font-sans font-black text-xl md:text-2xl text-ink tracking-tight leading-tight">
                          {p.title}
                        </h3>
                        <p className="mt-4 text-sm md:text-base text-graphite leading-relaxed font-medium">
                          {p.body}
                        </p>
                        <p className="mt-5 text-[11px] uppercase tracking-[0.16em] font-bold text-royal">
                          {p.proof}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* The standards */}
      <section className="bg-paper py-16 md:py-24 lg:py-32 border-y border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>The standards</Eyebrow>
                <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                  How we work, every time.
                </h2>
                <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
                  The credentials are signed and certified. The standards are
                  how the shop has actually run for twenty-eight years.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-3">
                {STANDARDS.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.04}>
                    <li className="relative bg-surface border border-line p-5 md:p-6 shadow-card flex items-start gap-4">
                      <span className="font-sans font-black text-base text-gold tabular-nums leading-none w-7 shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <p className="font-sans font-black text-base md:text-lg text-ink tracking-tight leading-snug">
                          {s.label}
                        </p>
                        <p className="mt-2 text-sm md:text-base text-graphite leading-relaxed font-medium">
                          {s.body}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-cream py-14 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow>Trust, in writing</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              Bring it to a shop that can prove it.
            </h2>
            <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
              Call us. Drop in. Hand us the keys. We will earn the next
              twenty-eight years the same way we earned the last.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 bg-ink text-cream hover:bg-royal px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-colors"
              >
                <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
                Call {SITE.phone}
              </a>
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-ink text-ink hover:bg-ink hover:text-cream px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-colors"
              >
                Book a service
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
