import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Calendar,
  ShieldCheck,
  Eye,
  Wallet,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { CTASection } from "@/components/sections/CTASection";

const TITLE =
  "Auto Repair Pricing | Honest Cost Ranges | The Star Auto Service Richardson TX";
const DESCRIPTION =
  "Real auto repair price ranges for brakes, oil changes, AC, engine work, transmission, and more in Richardson, TX. Family-owned, ASE-Certified, NAPA Auto Care. Call (972) 231-2886.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/pricing` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/pricing`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

type PriceLine = { label: string; range: string; note?: string };

type PriceCard = {
  category: string;
  href: string;
  intro: string;
  lines: PriceLine[];
  footnote?: string;
};

const CARDS: PriceCard[] = [
  {
    category: "Brakes",
    href: "/services/brakes",
    intro:
      "Pads, rotors, calipers, fluid, ABS. Most jobs same-day with parts in stock.",
    lines: [
      { label: "Pad replacement, per axle (sedan)", range: "$150 – $300" },
      { label: "Pad and rotor replacement, per axle", range: "$300 – $550" },
      { label: "Brake fluid flush", range: "$80 – $150" },
      { label: "Caliper replacement, single", range: "$250 – $500" },
      { label: "Master cylinder replacement", range: "$400 – $800" },
    ],
    footnote:
      "European luxury brakes (BMW, Mercedes, Porsche, Audi) run roughly 50–80% higher because the parts cost more.",
  },
  {
    category: "Oil change and lube",
    href: "/services/oil-change",
    intro: "Right oil weight and filter spec for your vehicle. Walk-ins welcome.",
    lines: [
      { label: "Conventional oil change", range: "$35 – $55" },
      { label: "Synthetic blend", range: "$50 – $75" },
      { label: "Full synthetic", range: "$70 – $110" },
      { label: "European synthetic (BMW, MB, VW, Volvo)", range: "$95 – $145" },
    ],
    footnote:
      "Includes top-off of brake, coolant, and washer fluids and a visual inspection of belts, hoses, tires, and brakes while the car is up.",
  },
  {
    category: "AC and HVAC",
    href: "/services/hvac",
    intro:
      "Recharge, leak detection, compressor, condenser, heater core. R-134a and R-1234yf systems.",
    lines: [
      { label: "AC performance check + recharge (R-134a)", range: "$150 – $250" },
      { label: "AC performance check + recharge (R-1234yf)", range: "$250 – $400" },
      { label: "AC compressor replacement, sedan", range: "$900 – $1,400" },
      { label: "AC compressor replacement, truck or luxury", range: "$1,200 – $2,800" },
      { label: "Heater core replacement", range: "$700 – $1,800" },
    ],
    footnote:
      "Book in March before the August rush. We seal the leak before recharging refrigerant. No top-and-pray.",
  },
  {
    category: "Engine diagnostics",
    href: "/services/engine-diagnostics",
    intro: "Real diagnosis with manufacturer-specific scan tools, not parts-cannon guessing.",
    lines: [
      { label: "OBD-II diagnostic + freeze-frame analysis", range: "$100 – $150" },
      { label: "Intermittent / electrical drivability diagnosis", range: "$150 – $300" },
    ],
    footnote:
      "Diagnostic fee is credited toward the repair if you have us fix it. When we find it, you only pay once.",
  },
  {
    category: "Engine repair and replacement",
    href: "/services/engine-repair",
    intro:
      "Head gaskets, timing components, mounts, replacements. Quotes within 24 hours of inspection.",
    lines: [
      { label: "Timing belt + water pump + tensioners", range: "$700 – $1,400" },
      { label: "Head gasket repair", range: "$1,800 – $3,500" },
      { label: "Engine replacement (used)", range: "$3,500 – $6,500" },
      { label: "Engine replacement (remanufactured)", range: "$5,500 – $9,500" },
    ],
    footnote:
      "We quote rebuild vs. replace honestly based on the math. NAPA warranty applies on qualifying engine work.",
  },
  {
    category: "Transmission",
    href: "/services/transmission",
    intro:
      "Diagnose before we replace. Most issues are not full failures.",
    lines: [
      { label: "Drain and fill (right fluid for your spec)", range: "$150 – $300" },
      { label: "Transmission service with filter", range: "$250 – $450" },
      { label: "Rebuild", range: "$2,500 – $4,500" },
      { label: "Replacement (reman or used)", range: "$3,500 – $6,500" },
    ],
  },
  {
    category: "Electrical and battery",
    href: "/services/electrical",
    intro: "Charging system test before we sell you a battery.",
    lines: [
      { label: "Battery test", range: "Free, walk-in" },
      { label: "Battery replacement (group size dependent)", range: "$200 – $400" },
      { label: "Alternator replacement", range: "$400 – $800" },
      { label: "Starter replacement", range: "$350 – $700" },
      { label: "Parasitic-draw diagnostic", range: "$150 – $300" },
    ],
  },
  {
    category: "Texas state inspection",
    href: "/services/state-inspections",
    intro: "Authorized state inspection station. Walk-in.",
    lines: [
      { label: "Safety + emissions (DFW counties)", range: "$25.50" },
      { label: "Safety only (non-emissions counties)", range: "$7.00" },
      {
        label: "Re-inspection after pass",
        range: "Free within 15 days at the same shop",
      },
    ],
    footnote:
      "Plus the state's separate registration fee, paid at the DMV. Bring your insurance card.",
  },
  {
    category: "Tires and alignment",
    href: "/services/tires",
    intro: "Rotation, balance, repair, replacement, TPMS.",
    lines: [
      { label: "Tire rotation", range: "$30 – $45" },
      { label: "Tire balance, all four wheels", range: "$50 – $80" },
      { label: "Flat repair, plug + patch", range: "$30 – $50" },
      { label: "Wheel alignment, four-wheel", range: "$100 – $140" },
      { label: "TPMS sensor replacement", range: "$80 – $140 each" },
    ],
  },
  {
    category: "Cooling system",
    href: "/services/cooling-system",
    intro: "Coolant flush, radiator, thermostat, water pump, hoses.",
    lines: [
      { label: "Coolant flush + correct refill", range: "$120 – $220" },
      { label: "Thermostat replacement", range: "$220 – $500" },
      { label: "Water pump replacement", range: "$450 – $1,200" },
      { label: "Radiator replacement", range: "$500 – $1,200" },
    ],
  },
  {
    category: "Fuel injection",
    href: "/services/fuel-injection",
    intro: "Cleaning, filters, pumps, throttle bodies. GDI walnut blast available.",
    lines: [
      { label: "Fuel injector cleaning service", range: "$100 – $200" },
      { label: "Fuel filter replacement", range: "$80 – $200" },
      { label: "Fuel pump replacement (in-tank)", range: "$500 – $900" },
      { label: "Throttle body cleaning", range: "$120 – $220" },
    ],
  },
  {
    category: "Battery service",
    href: "/services/battery",
    intro:
      "Texas heat is the number-one battery killer. Charging system tested first.",
    lines: [
      { label: "Free battery test", range: "Walk-in, no purchase required" },
      { label: "Battery replacement, standard group", range: "$200 – $300" },
      { label: "AGM battery (luxury, stop-start)", range: "$300 – $450" },
      { label: "Charging system diagnosis", range: "$100 – $150" },
    ],
  },
];

const PROMISES = [
  {
    icon: Eye,
    title: "Quoted before any wrench turns",
    body: "You see the inspection findings, the proposed repair, and the price before we touch anything beyond the diagnostic.",
  },
  {
    icon: Wallet,
    title: "No upcharges after the fact",
    body: "If we discover something while we are in there, we stop and call. Your authorization is required for any change to the quote.",
  },
  {
    icon: ShieldCheck,
    title: "NAPA Auto Care warranty",
    body: "Qualifying repairs covered 24 months / 24,000 miles, honored at over 17,000 NAPA shops nationwide.",
  },
];

export default function PricingPage() {
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Pricing", url: `${SITE.url}/pricing` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Intro band */}
      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24 border-b border-line overflow-hidden">
        <SectionWatermark
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1800&q=60&auto=format&fit=crop"
          opacity={0.05}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Honest pricing</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  Real prices,
                  <br />
                  <span className="text-royal">in writing.</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <p className="text-base sm:text-lg md:text-xl text-graphite leading-relaxed font-medium">
                  Realistic ranges for every service we do, published so you can
                  budget with confidence. Final quote after inspection. No
                  surprise upcharges, ever.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Promises strip */}
      <section className="bg-paper py-12 md:py-16 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {PROMISES.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.05}>
                  <article className="relative bg-surface border border-line p-6 md:p-7 shadow-card h-full">
                    <div className="absolute top-0 left-6 right-6 h-0.5 bg-gold" aria-hidden="true" />
                    <div className="w-11 h-11 bg-royal-tint flex items-center justify-center mb-5">
                      <Icon size={20} strokeWidth={2} className="text-royal" aria-hidden="true" />
                    </div>
                    <h2 className="font-sans font-black text-lg md:text-xl text-ink tracking-tight leading-snug">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-graphite leading-relaxed font-medium">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-14 lg:mb-16">
            <Reveal>
              <Eyebrow>By service category</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1.04]">
                What things actually cost.
              </h2>
              <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
                Every range below assumes a typical car or light truck. Final
                price depends on your specific vehicle, what we find on
                inspection, and parts availability. We always quote before
                starting work.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7">
            {CARDS.map((card, i) => (
              <Reveal key={card.category} delay={i * 0.04} margin="-10%">
                <article className="relative bg-surface border border-line p-7 md:p-9 shadow-card h-full">
                  <div className="absolute top-0 left-7 right-7 h-1 bg-royal" aria-hidden="true" />
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-sans font-black text-2xl md:text-[1.625rem] text-ink tracking-tight leading-tight">
                      {card.category}
                    </h3>
                    <Link
                      href={card.href}
                      aria-label={`Learn more about ${card.category}`}
                      className="shrink-0 mt-1 text-stone hover:text-royal transition-colors"
                    >
                      <ArrowRight size={20} strokeWidth={2.25} aria-hidden="true" />
                    </Link>
                  </div>
                  <p className="text-sm md:text-base text-graphite leading-relaxed font-medium">
                    {card.intro}
                  </p>

                  <dl className="mt-6 divide-y divide-line-subtle">
                    {card.lines.map((line) => (
                      <div
                        key={line.label}
                        className="flex items-baseline justify-between gap-4 py-3"
                      >
                        <dt className="text-sm md:text-base text-ink font-semibold leading-snug">
                          {line.label}
                        </dt>
                        <dd className="shrink-0 font-sans font-black text-sm md:text-base text-royal tabular-nums tracking-tight">
                          {line.range}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {card.footnote ? (
                    <p className="mt-5 pt-5 border-t border-line-subtle text-xs md:text-sm text-graphite leading-relaxed font-medium italic">
                      {card.footnote}
                    </p>
                  ) : null}

                  <div className="mt-6">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-extrabold text-royal hover:text-royal-deep transition-colors"
                    >
                      See {card.category.toLowerCase()} details
                      <ArrowRight size={12} strokeWidth={2.5} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-paper py-16 md:py-20 lg:py-24 border-t border-line-subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow>Want a real quote?</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              Tell us what is going on.
            </h2>
            <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
              Call the shop or book online. We will quote firmly after
              inspection. No deposit, no obligation.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold-soft px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all shadow-gold"
              >
                <Calendar size={17} strokeWidth={2.5} aria-hidden="true" />
                Book a service
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 border-2 border-ink text-ink hover:bg-ink hover:text-cream px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all"
              >
                <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
                Call {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
