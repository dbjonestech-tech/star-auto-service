import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { SITE } from "@/lib/constants";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { CountUp } from "@/components/ui/CountUp";
import { CTASection } from "@/components/sections/CTASection";

const ABOUT_TITLE = "About Us | The Star Auto Service | Since 1998";
const ABOUT_DESCRIPTION =
  "Miguel Ibarra opened The Star Auto Service in Richardson, TX in 1998 with one rule: never recommend a repair the car doesn't need. Twenty-eight years later, that's still the rule.";

export const metadata: Metadata = {
  title: { absolute: ABOUT_TITLE },
  description: ABOUT_DESCRIPTION,
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    url: `${SITE.url}/about`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
  },
};

export default function AboutPage() {
  const yearsInBusiness = new Date().getFullYear() - SITE.established;

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "About", url: `${SITE.url}/about` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      {/* Intro band */}
      <section className="bg-cream pt-24 md:pt-32 pb-20 md:pb-24 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>About the shop</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  Twenty-eight years
                  <br />
                  <span className="text-royal">on Belt Line.</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <p className="text-lg md:text-xl text-graphite leading-relaxed font-medium">
                  Family-owned auto repair in Richardson, Texas — by the same family, on the same corner, under the same rule.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Stat tiles */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                key: "years",
                value: <CountUp to={yearsInBusiness} duration={1.6} />,
                label: "Years in Richardson",
                note: `Family-owned since ${SITE.established}`,
              },
              {
                key: "rating",
                value: (
                  <>
                    <CountUp to={4.8} duration={1.6} decimals={1} />
                    <span className="text-gold" aria-hidden="true">★</span>
                  </>
                ),
                label: "Average rating",
                note: (
                  <>
                    Across <CountUp to={136} duration={1.6} /> Google reviews
                  </>
                ),
              },
              {
                key: "services",
                value: <CountUp to={12} duration={1.6} />,
                label: "Service categories",
                note: "Domestic and import",
              },
            ].map((stat, i) => (
              <Reveal key={stat.key} delay={i * 0.06}>
                <article className="relative bg-surface border border-line p-7 md:p-8 h-full shadow-card">
                  <div className="absolute top-0 left-7 right-7 h-0.5 bg-gold" aria-hidden="true" />
                  <p className="font-sans font-black text-4xl md:text-5xl text-ink tracking-tight leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.18em] font-bold text-royal">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-sm text-graphite font-medium">{stat.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder block */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden bg-ink shadow-card-lg">
                  <Image
                    src="/assets/shop-side.jpg"
                    alt={`Side view of ${SITE.name} on Belt Line Road`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="hidden md:flex absolute top-6 left-6 bg-gold text-ink px-4 py-3 shadow-gold flex-col items-center">
                  <Star size={18} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] font-extrabold leading-none">
                    Est.
                  </p>
                  <p className="font-sans font-black text-2xl tracking-tight leading-none mt-0.5">
                    {SITE.established}
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <Eyebrow>The founder</Eyebrow>
                <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                  One rule, one shop, since 1998.
                </h2>
                <div className="mt-8 space-y-5 text-base md:text-lg text-graphite leading-relaxed font-medium">
                  <p>
                    Miguel Ibarra opened The Star Auto Service on E Belt Line Road in 1998 with a single, plain rule: don&apos;t recommend a repair the car doesn&apos;t need.
                  </p>
                  <p>
                    Twenty-eight years later, the rule has outlasted every shortcut, every chain shop down the road, and every easy excuse to cut corners. It&apos;s why customers come back. It&apos;s why their kids come back.
                  </p>
                  <p>
                    What started as a small family-owned bay has grown into one of Richardson&apos;s most trusted auto repair facilities — but the shop is still family-run, the front desk still speaks both English and Spanish, and the answer to &ldquo;do I really need this?&rdquo; is still given straight.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The work */}
      <section className="bg-paper py-24 md:py-32 border-y border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>The work</Eyebrow>
                <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                  Every common make and model.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <div className="space-y-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
                  <p>
                    ASE-Certified technicians. NAPA Auto Care Center with a nationwide 24-month / 24,000-mile warranty honored at over 17,000 NAPA shops. Bilingual service in English and Spanish.
                  </p>
                  <p>
                    Domestic and import. Gas and hybrid. From a routine oil change to a complete engine replacement, twelve service categories cover almost everything that goes through the bays — and Texas state inspections are walk-in.
                  </p>
                </div>
                <div className="mt-10">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-3 bg-ink text-cream hover:bg-royal px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
                  >
                    See all 12 services
                    <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
