"use client";

import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { UI, interpolate } from "@/lib/translations/ui";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type Props = { locale?: Locale };

function trackPointer(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

/** Substantial 3-column service card grid. Cursor-tracking gold spotlight, hover gold-rule slide, deep-link to /services/[slug]. */
export function ServicesOverview({ locale = "en" }: Props) {
  const copy = UI[locale].servicesOverview;
  const featured = SERVICES.slice(0, 6);

  return (
    <section className="relative bg-paper py-16 md:py-24 lg:py-32 border-y border-line-subtle overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1800&q=60&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.04] mix-blend-multiply"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-10 md:mb-16 lg:mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>{copy.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                {copy.headline}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex md:items-end">
            <Reveal delay={0.08}>
              <p className="text-lg text-graphite leading-relaxed font-medium">
                {copy.intro}
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
                "aria-hidden"?: string | boolean;
              }>) || LucideIcons.Wrench;

            const href = localizedPath(`/services/${service.id}`, locale);

            return (
              <Reveal key={service.id} delay={i * 0.06} margin="-15%">
                <Link
                  href={href}
                  onMouseMove={trackPointer}
                  className="group relative block bg-surface border border-line p-7 md:p-8 h-full shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Gold rule slide */}
                  <div
                    className="absolute top-0 left-7 right-7 h-0.5 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"
                    aria-hidden="true"
                  />
                  {/* Cursor spotlight */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                    style={{
                      background:
                        "radial-gradient(circle 320px at var(--mx, 50%) var(--my, 50%), rgba(244,180,0,0.16), transparent 60%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="bg-gold-tint flex items-center justify-center shrink-0"
                        style={{ width: "52px", height: "52px" }}
                      >
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
                      {copy.learnMore}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href={localizedPath("/services", locale)}
            className="inline-flex items-center gap-2.5 bg-ink text-cream hover:bg-royal px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
          >
            {interpolate(copy.seeAll, { count: SERVICES.length })}
            <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
