"use client";

import Image from "next/image";
import { ShieldCheck, Wrench, HeartHandshake } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const PILLARS = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Honest",
    body: "We tell you what your car needs, and what it doesn't. Twenty-eight years of one rule, one shop, one straight answer at a time.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Skilled",
    body: "ASE-Certified technicians with decades of combined experience. Every make, every model, every system. Domestic, import, gas, hybrid.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Yours",
    body: "Family-owned, bilingual, and walk-in friendly. We treat your car the way we'd treat our own. That's been the deal since 1998.",
  },
] as const;

function trackPointer(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

/** Three substantial pillars. Cursor-tracking gold spotlight + gold-rule slide + lift on hover. */
export function Pillars() {
  return (
    <section className="relative bg-cream py-24 md:py-32 overflow-hidden">
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
        <div className="max-w-2xl mb-16 md:mb-20">
          <Reveal>
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              Three things, every time.
            </h2>
            <p className="mt-6 text-lg text-graphite leading-relaxed font-medium max-w-xl">
              The reasons Richardson keeps coming back. Same as they were the day we opened.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.number} delay={i * 0.08}>
                <article
                  onMouseMove={trackPointer}
                  className="group relative bg-surface border border-line p-8 md:p-10 h-full shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Gold rule (static base) */}
                  <div className="absolute top-0 left-8 right-8 h-1 bg-royal z-20" aria-hidden="true" />
                  {/* Gold rule slide (overlay on hover) */}
                  <div
                    className="absolute top-0 left-8 right-8 h-1 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"
                    aria-hidden="true"
                  />
                  {/* Cursor spotlight */}
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
                        {pillar.number}
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
