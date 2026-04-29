import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Homepage FAQ section. Renders 6 of the most-clicked FAQs from the sitewide
 * data so the FAQPage rich snippet can fire on `/` directly. Visual treatment
 * matches the /faq page accordions for consistency.
 */
export function HomeFAQ() {
  const featured = FAQ_ITEMS.slice(0, 6);

  return (
    <section className="bg-cream py-16 md:py-24 lg:py-32 border-t border-line-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>Common questions</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                Answers, straight up.
              </h2>
              <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
                The questions Richardson drivers ask us most, with the same
                straight answers we give over the phone.
              </p>
              <div className="mt-8">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.16em] font-extrabold text-ink hover:text-royal transition-colors border-b-2 border-ink hover:border-royal pb-1"
                >
                  See all questions
                  <ArrowRight size={13} strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3 md:space-y-4">
              {featured.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 0.04}>
                  <details className="group relative bg-surface border border-line p-6 md:p-7 shadow-card open:shadow-card-lg transition-shadow">
                    <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                      <h3 className="font-sans font-black text-base md:text-lg text-ink tracking-tight leading-snug">
                        {faq.q}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="shrink-0 w-7 h-7 bg-royal-tint flex items-center justify-center transition-transform group-open:rotate-45 relative"
                      >
                        <span className="block w-3 h-0.5 bg-royal absolute" />
                        <span className="block w-0.5 h-3 bg-royal absolute" />
                      </span>
                    </summary>
                    <p className="mt-4 text-sm md:text-base text-graphite leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
