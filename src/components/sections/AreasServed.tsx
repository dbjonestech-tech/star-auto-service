import Link from "next/link";
import { MapPin } from "lucide-react";
import { AREAS } from "@/lib/areas";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const RICHARDSON_NEIGHBORHOODS = [
  "Canyon Creek",
  "J.J. Pearce",
  "Berkner",
  "Heights",
  "Cottonwood Heights",
  "Sherrill Park",
  "Dover Park",
  "Richardson Square",
  "Belt Line corridor",
];

/**
 * Areas-served band. Six DFW cities (linked) and Richardson neighborhood pills.
 * Surface area for long-tail "auto repair near [neighborhood]" and
 * "mechanic [city]" searches. SEO-driven layout, light treatment.
 */
export function AreasServed() {
  return (
    <section className="bg-paper py-16 md:py-24 lg:py-28 border-y border-line-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>Where we serve</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                Belt Line, and beyond.
              </h2>
              <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
                Trusted by drivers across north Dallas, plus every Richardson
                neighborhood from Canyon Creek to Sherrill Park.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 space-y-10">
            {/* DFW cities served */}
            <Reveal delay={0.06}>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-5">
                  Cities served
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                  {AREAS.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/areas/${a.slug}`}
                      className="group relative bg-surface border border-line px-4 py-3.5 md:px-5 md:py-4 shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition-all"
                    >
                      <div className="absolute top-0 left-4 right-4 h-0.5 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                      <p className="font-sans font-extrabold text-sm md:text-base text-ink leading-tight tracking-tight group-hover:text-royal transition-colors">
                        {a.name}, {a.state}
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.16em] font-bold text-graphite">
                        {a.driveTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Richardson neighborhoods */}
            <Reveal delay={0.12}>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-5">
                  Richardson neighborhoods
                </p>
                <div className="flex flex-wrap gap-2">
                  {RICHARDSON_NEIGHBORHOODS.map((n) => (
                    <span
                      key={n}
                      className="inline-flex items-center gap-1.5 bg-cream border border-line px-3 py-1.5 text-[11px] md:text-xs font-bold text-ink uppercase tracking-[0.1em]"
                    >
                      <MapPin size={11} strokeWidth={2.5} className="text-royal" aria-hidden="true" />
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
