import Image from "next/image";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/** Substantial reviews. Six cards, gold five-star ratings, premium materials feel, subtle Unsplash watermark. */
export function Testimonials() {
  return (
    <section className="relative bg-paper py-16 md:py-24 lg:py-32 border-y border-line-subtle overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1800&q=60&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.04] mix-blend-multiply"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-10 md:mb-16 lg:mb-20">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>From the people who keep coming back</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                What customers say.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 flex md:items-end">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center">
                  <p className="font-sans font-black text-5xl text-ink leading-none">
                    4.8
                  </p>
                  <div className="flex gap-0.5 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-gold"
                        fill="currentColor"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                </div>
                <div className="border-l border-line pl-5">
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite">
                    Average rating
                  </p>
                  <p className="mt-1 text-sm text-ink font-semibold leading-snug">
                    Across hundreds of reviews from Richardson drivers
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.05} margin="-10%">
              <article className="relative bg-surface border border-line p-7 md:p-8 h-full shadow-card hover:shadow-card-lg transition-shadow duration-300">
                <Quote
                  className="absolute top-7 right-7 text-gold/55"
                  size={32}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="text-gold"
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <blockquote className="text-base text-ink/85 leading-relaxed font-medium">
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

        <div className="mt-14 text-center">
          <Link
            href="https://www.google.com/search?q=The+Star+Auto+Service+Richardson+TX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.16em] font-extrabold text-ink hover:text-royal transition-colors border-b-2 border-ink hover:border-royal pb-1"
          >
            Read more reviews on Google
            <ArrowRight size={13} strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
