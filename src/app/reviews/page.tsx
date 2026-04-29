import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
import { SITE, TESTIMONIALS } from "@/lib/constants";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Customer Reviews | The Star Auto Service Richardson TX";
const DESCRIPTION =
  "Read 136+ Google reviews — 4.8★ average — from Richardson, Plano, Garland, and Dallas drivers who trust The Star Auto Service since 1998.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/reviews` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/reviews`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function ReviewsPage() {
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Reviews", url: `${SITE.url}/reviews` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="bg-cream pt-24 md:pt-32 pb-20 md:pb-24 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Customer reviews</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  136 reviews,
                  <br />
                  <span className="text-royal">4.8 stars,</span> 28 years.
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="relative bg-surface border border-line p-7 md:p-8 shadow-card">
                  <div className="absolute top-0 left-7 right-7 h-0.5 bg-gold" aria-hidden="true" />
                  <div className="flex items-center gap-5">
                    <div className="flex flex-col items-center">
                      <p className="font-sans font-black text-5xl text-ink leading-none tabular-nums">
                        4.8
                      </p>
                      <div className="flex gap-0.5 mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} className="text-gold" fill="currentColor" strokeWidth={1} aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                    <div className="border-l border-line pl-5 flex-1">
                      <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite">
                        Across 136 Google reviews
                      </p>
                      <p className="mt-1 text-sm text-ink font-semibold leading-snug">
                        Richardson, Plano, Garland, Dallas, Allen, Murphy
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.04}>
                <article className="relative bg-surface border border-line p-7 md:p-8 h-full shadow-card flex flex-col">
                  <Quote
                    className="absolute top-7 right-7 text-gold/55"
                    size={36}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} className="text-gold" fill="currentColor" strokeWidth={1} aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-base md:text-lg text-ink/85 leading-relaxed font-medium flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 pt-5 border-t border-line-subtle">
                    <p className="text-sm font-bold text-ink uppercase tracking-[0.08em]">
                      {t.author}
                    </p>
                    <p className="mt-0.5 text-xs text-graphite font-medium">{t.vehicle}</p>
                  </figcaption>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Reveal>
              <p className="text-base md:text-lg text-graphite font-medium max-w-xl mx-auto">
                Read all 136 reviews on Google or leave one of your own.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`https://www.google.com/maps/place/?q=place_id:${SITE.googlePlaceId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-ink text-cream hover:bg-royal px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
                >
                  Read reviews on Google
                  <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
                </Link>
                <Link
                  href={`https://search.google.com/local/writereview?placeid=${SITE.googlePlaceId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 border-2 border-ink text-ink hover:bg-ink hover:text-cream px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
                >
                  Leave us a review
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
