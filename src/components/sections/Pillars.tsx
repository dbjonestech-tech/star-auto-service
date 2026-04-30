"use client";

import Image from "next/image";
import { ShieldCheck, Wrench, HeartHandshake } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/i18n";
import { UI } from "@/lib/translations/ui";

type Props = { locale?: Locale };

const ICONS = [ShieldCheck, Wrench, HeartHandshake] as const;
const NUMBERS = ["01", "02", "03"] as const;

function trackPointer(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

/** Three substantial pillars. Cursor-tracking gold spotlight + gold-rule slide + lift on hover. */
export function Pillars({ locale = "en" }: Props) {
  const copy = UI[locale].pillars;

  return (
    <section className="relative bg-cream py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1800&q=60&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.05] mix-blend-multiply"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 md:mb-16 lg:mb-20">
          <Reveal>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              {copy.headline}
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {copy.items.map((pillar, i) => {
            const Icon = ICONS[i] ?? Wrench;
            const number = NUMBERS[i] ?? "0" + (i + 1);
            return (
              <Reveal key={number} delay={i * 0.08}>
                <article
                  onMouseMove={trackPointer}
                  className="group relative bg-surface border border-line p-8 md:p-10 h-full shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-8 right-8 h-1 bg-royal z-20" aria-hidden="true" />
                  <div
                    className="absolute top-0 left-8 right-8 h-1 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                    style={{
                      background:
                        "radial-gradient(circle 360px at var(--mx, 50%) var(--my, 50%), rgba(244,180,0,0.18), transparent 55%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-7">
                      <div className="w-14 h-14 bg-royal-tint flex items-center justify-center">
                        <Icon className="text-royal" size={26} strokeWidth={2} aria-hidden="true" />
                      </div>
                      <span className="font-sans font-black text-2xl text-gold tabular-nums">
                        {number}
                      </span>
                    </div>
                    <h3 className="font-sans font-black text-3xl md:text-4xl text-ink tracking-tight leading-none">
                      {pillar.title}
                    </h3>
                    <p className="mt-5 text-base text-graphite leading-relaxed font-medium">
                      {pillar.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
