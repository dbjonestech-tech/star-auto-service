import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/** Substantial 3-column service card grid. Premium materials, gold accents, hover gold-rule slide, deep-link to /services/[slug]. */
export function ServicesOverview() {
  const featured = SERVICES.slice(0, 6);
  const featuredSlugs = new Set([
    "brakes",
    "oil-change",
    "engine-diagnostics",
    "engine-repair",
    "transmission",
    "electrical",
  ]);

  return (
    <section className="relative bg-paper py-24 md:py-32 border-y border-line-subtle overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1800&q=60&auto=format&fit=crop"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.04] pointer-events-none mix-blend-multiply"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>What we work on</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                From oil to overhaul.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex md:items-end">
            <Reveal delay={0.08}>
              <p className="text-lg text-graphite leading-relaxed font-medium">
                Twelve service categories, every common make and model, domestic and
                import. If it&apos;s on your dashboard or under your hood, we&apos;ve seen
                it before, and we know what to do about it.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {featured.map((service, i) => {
            const Icon =
              (LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<{
                className?: string;
                size?: number;
                strokeWidth?: number;
              }>) || LucideIcons.Wrench;

            const href = featuredSlugs.has(service.id)
              ? `/services/${service.id}`
              : `/services#${service.id}`;

            return (
              <Reveal key={service.id} delay={i * 0.06} margin="-15%">
                <Link
                  href={href}
                  className="group relative block bg-surface border border-line p-7 md:p-8 h-full shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-7 right-7 h-0.5 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gold-tint flex items-center justify-center shrink-0" style={{ width: "52px", height: "52px" }}>
                      <Icon
                        className="text-royal"
                        size={26}
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                    <ArrowRight
                      size={18}
                      strokeWidth={2.25}
                      className="text-stone group-hover:text-royal group-hover:translate-x-1 transition-all"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-sans font-black text-xl md:text-2xl text-ink tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-graphite leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.18em] font-bold text-royal group-hover:text-royal-deep">
                    Learn more
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 bg-ink text-cream hover:bg-royal px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
          >
            See all {SERVICES.length} services
            <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
