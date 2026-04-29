import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  AlertTriangle,
  Volume2,
  Wind,
  Activity,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { CTASection } from "@/components/sections/CTASection";

const TITLE =
  "Car Symptom Checker | Diagnose Common Issues | The Star Auto Service";
const DESCRIPTION =
  "What that warning light, weird noise, smell, or shake means, in plain English. From an ASE-Certified shop in Richardson, TX with 28 years of pattern recognition.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/symptoms` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/symptoms`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

type SymptomGroup = {
  icon: LucideIcon;
  title: string;
  intro: string;
  items: Array<{
    name: string;
    likely: string;
    severity: "now" | "soon" | "watch";
    serviceHref: string;
    resourceHref?: string;
  }>;
};

const SEVERITY_LABEL: Record<SymptomGroup["items"][number]["severity"], string> = {
  now: "Stop driving",
  soon: "Schedule this week",
  watch: "Inspect at next visit",
};

const SEVERITY_TINT: Record<SymptomGroup["items"][number]["severity"], string> = {
  now: "bg-ruby/10 text-ruby border-ruby/30",
  soon: "bg-gold-tint text-gold-deep border-gold/40",
  watch: "bg-royal-tint text-royal border-royal/30",
};

const GROUPS: SymptomGroup[] = [
  {
    icon: AlertTriangle,
    title: "Dashboard warning lights",
    intro:
      "If a light is flashing, treat it as urgent. Solid means schedule, not panic.",
    items: [
      {
        name: "Check engine light, solid",
        likely: "Dozens of possible causes. The code narrows it; real diagnosis confirms it.",
        severity: "soon",
        serviceHref: "/services/engine-diagnostics",
        resourceHref: "/resources/check-engine-light-guide",
      },
      {
        name: "Check engine light, flashing",
        likely: "Active misfire that can ruin a catalytic converter in minutes.",
        severity: "now",
        serviceHref: "/services/engine-diagnostics",
        resourceHref: "/resources/check-engine-light-guide",
      },
      {
        name: "Battery / charging system",
        likely: "Alternator, battery, or wiring. Most batteries die because of charging issues, not age.",
        severity: "soon",
        serviceHref: "/services/battery",
      },
      {
        name: "ABS / brake light",
        likely: "ABS sensor, low brake fluid, or worn pads triggering a sensor.",
        severity: "soon",
        serviceHref: "/services/brakes",
      },
      {
        name: "Tire pressure (TPMS) light",
        likely: "Cold-morning false alarm, slow leak, or a sensor whose battery has died.",
        severity: "watch",
        serviceHref: "/services/tires",
      },
      {
        name: "Temperature gauge in the red",
        likely: "Coolant level, thermostat, water pump, or radiator. Pull over immediately.",
        severity: "now",
        serviceHref: "/services/cooling-system",
      },
      {
        name: "Oil pressure light",
        likely: "Low oil, bad sensor, or pump failure. Stop driving until you have an answer.",
        severity: "now",
        serviceHref: "/services/engine-repair",
      },
    ],
  },
  {
    icon: Volume2,
    title: "Sounds your car shouldn't make",
    intro:
      "Most car problems announce themselves before they fail. Listen, then come in.",
    items: [
      {
        name: "Squealing when you brake",
        likely: "Wear-indicator tab on the brake pad. Schedule within the month.",
        severity: "soon",
        serviceHref: "/services/brakes",
      },
      {
        name: "Grinding or metal-on-metal braking",
        likely: "Pads worn through, scoring the rotor. This week, not next.",
        severity: "soon",
        serviceHref: "/services/brakes",
      },
      {
        name: "Engine knock or tick",
        likely: "Lifter, timing component, low oil, or pre-ignition. Diagnose before driving far.",
        severity: "soon",
        serviceHref: "/services/engine-repair",
      },
      {
        name: "Whine that changes with vehicle speed",
        likely: "Wheel bearing or differential. Worth a road test diagnosis.",
        severity: "soon",
        serviceHref: "/services/engine-diagnostics",
      },
      {
        name: "Squeal when AC turns on",
        likely: "AC compressor pulley or serpentine belt.",
        severity: "soon",
        serviceHref: "/services/hvac",
      },
      {
        name: "Click-click-click when starting",
        likely: "Weak battery or starter solenoid.",
        severity: "soon",
        serviceHref: "/services/battery",
      },
    ],
  },
  {
    icon: Wind,
    title: "Smells from the cabin or hood",
    intro: "Smells almost always mean a leak. The leak is the easy clue.",
    items: [
      {
        name: "Sweet, syrupy smell",
        likely: "Coolant leak. Could be a hose, radiator, or heater core.",
        severity: "soon",
        serviceHref: "/services/cooling-system",
      },
      {
        name: "Burning rubber",
        likely: "Belt slipping, hose touching exhaust, or a frozen pulley.",
        severity: "soon",
        serviceHref: "/services/engine-repair",
      },
      {
        name: "Hot oil / acrid smell after driving",
        likely: "Oil leak hitting the exhaust. Find the leak before it grows.",
        severity: "soon",
        serviceHref: "/services/engine-repair",
      },
      {
        name: "Strong gasoline smell",
        likely: "Fuel leak, leaking injector seal, or an evap-system fault.",
        severity: "now",
        serviceHref: "/services/fuel-injection",
      },
      {
        name: "Sulfur (rotten egg)",
        likely: "Catalytic converter or running rich. Texas inspection will fail.",
        severity: "soon",
        serviceHref: "/services/state-inspections",
      },
      {
        name: "Electrical / burning plastic",
        likely: "Wiring overheating somewhere. Stop driving.",
        severity: "now",
        serviceHref: "/services/electrical",
      },
    ],
  },
  {
    icon: Activity,
    title: "How the car feels",
    intro: "Vibration, pulling, soft pedals, the way the car drives tells the truth.",
    items: [
      {
        name: "Vibration through steering at highway speed",
        likely: "Tire balance, alignment, or a bent rim.",
        severity: "soon",
        serviceHref: "/services/tires",
      },
      {
        name: "Car pulls to one side",
        likely: "Alignment, tire pressure, or a stuck brake caliper.",
        severity: "soon",
        serviceHref: "/services/tires",
      },
      {
        name: "Brake pedal goes soft or sinks",
        likely: "Air in the lines, leak, or master cylinder. Do not drive.",
        severity: "now",
        serviceHref: "/services/brakes",
      },
      {
        name: "Pedal pulses under braking",
        likely: "Warped rotors. Sometimes resurfaced, often replaced.",
        severity: "soon",
        serviceHref: "/services/brakes",
      },
      {
        name: "Hesitation on acceleration",
        likely: "Fuel system, ignition, or a sensor going out of spec.",
        severity: "soon",
        serviceHref: "/services/fuel-injection",
      },
      {
        name: "Steering goes heavy",
        likely: "Power-steering fluid leak or pump failure.",
        severity: "soon",
        serviceHref: "/services/engine-repair",
      },
    ],
  },
  {
    icon: Zap,
    title: "How the car behaves",
    intro: "Starting, idling, stalling, the car's behavior is data.",
    items: [
      {
        name: "Slow crank in the morning",
        likely: "Battery (3+ years old in Texas heat is normal lifespan).",
        severity: "soon",
        serviceHref: "/services/battery",
      },
      {
        name: "No crank, just clicking",
        likely: "Battery dead, starter solenoid, or wiring at the battery terminals.",
        severity: "now",
        serviceHref: "/services/electrical",
      },
      {
        name: "Engine stalls at idle",
        likely: "Idle-air control, vacuum leak, fuel pump, or fueling problem.",
        severity: "soon",
        serviceHref: "/services/engine-diagnostics",
      },
      {
        name: "Rough idle",
        likely: "Misfire, vacuum leak, or fouled spark plugs.",
        severity: "soon",
        serviceHref: "/services/engine-diagnostics",
      },
      {
        name: "Mileage suddenly worse",
        likely: "Oxygen sensor, fuel-system fault, low tire pressure, or dirty MAF sensor.",
        severity: "soon",
        serviceHref: "/services/fuel-injection",
      },
      {
        name: "AC blows warm",
        likely: "Refrigerant leak, compressor, or condenser. Texas heat exposes it fast.",
        severity: "soon",
        serviceHref: "/services/hvac",
      },
    ],
  },
];

export default function SymptomsPage() {
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Symptoms", url: `${SITE.url}/symptoms` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Intro band */}
      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24 border-b border-line overflow-hidden">
        <SectionWatermark
          src="https://images.unsplash.com/photo-1597767108894-fccd5b7f9ca2?w=1800&q=60&auto=format&fit=crop"
          opacity={0.05}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Symptom checker</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  What is your
                  <br />
                  <span className="text-royal">car telling you?</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <p className="text-base sm:text-lg md:text-xl text-graphite leading-relaxed font-medium">
                  Warning lights, weird noises, strange smells, the way the car
                  drives. Find what you are dealing with, then book the right
                  service. From 28 years of pattern recognition in Richardson, TX.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Severity legend */}
      <section className="bg-paper py-10 md:py-12 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 md:gap-5 text-[11px] uppercase tracking-[0.18em] font-bold">
            <p className="text-graphite">Severity:</p>
            <span className="inline-flex items-center gap-2 bg-ruby/10 text-ruby border border-ruby/30 px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-ruby rounded-full" aria-hidden="true" />
              Stop driving
            </span>
            <span className="inline-flex items-center gap-2 bg-gold-tint text-gold-deep border border-gold/40 px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
              Schedule this week
            </span>
            <span className="inline-flex items-center gap-2 bg-royal-tint text-royal border border-royal/30 px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-royal rounded-full" aria-hidden="true" />
              Inspect at next visit
            </span>
          </div>
        </div>
      </section>

      {/* Symptom groups */}
      {GROUPS.map((group, gi) => {
        const Icon = group.icon;
        return (
          <section
            key={group.title}
            className={`${gi % 2 === 0 ? "bg-cream" : "bg-paper"} py-16 md:py-24 lg:py-28 border-b border-line-subtle`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 mb-10 md:mb-14">
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="inline-flex items-center gap-3 mb-5">
                      <span className="w-12 h-12 bg-royal-tint flex items-center justify-center">
                        <Icon
                          size={22}
                          strokeWidth={2}
                          className="text-royal"
                          aria-hidden="true"
                        />
                      </span>
                      <Eyebrow>Group {String(gi + 1).padStart(2, "0")}</Eyebrow>
                    </div>
                    <h2 className="font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1.04]">
                      {group.title}.
                    </h2>
                  </Reveal>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 flex lg:items-end">
                  <Reveal delay={0.08}>
                    <p className="text-base md:text-lg text-graphite leading-relaxed font-medium">
                      {group.intro}
                    </p>
                  </Reveal>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {group.items.map((s, i) => (
                  <Reveal key={s.name} delay={i * 0.04}>
                    <article className="relative bg-surface border border-line p-6 md:p-7 shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
                      <div
                        className="absolute top-0 left-6 right-6 h-0.5 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                        aria-hidden="true"
                      />
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-sans font-black text-lg md:text-xl text-ink tracking-tight leading-snug">
                          {s.name}
                        </h3>
                        <span
                          className={`shrink-0 inline-flex items-center px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] font-extrabold border ${SEVERITY_TINT[s.severity]}`}
                        >
                          {SEVERITY_LABEL[s.severity]}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-graphite leading-relaxed font-medium flex-1">
                        {s.likely}
                      </p>
                      <div className="mt-5 pt-4 border-t border-line-subtle flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.16em] font-extrabold">
                        <Link
                          href={s.serviceHref}
                          className="inline-flex items-center gap-1.5 text-royal hover:text-royal-deep transition-colors"
                        >
                          See the service
                          <ArrowRight
                            size={12}
                            strokeWidth={2.5}
                            aria-hidden="true"
                          />
                        </Link>
                        {s.resourceHref ? (
                          <Link
                            href={s.resourceHref}
                            className="inline-flex items-center gap-1.5 text-graphite hover:text-ink transition-colors"
                          >
                            Read the guide
                            <ArrowRight
                              size={12}
                              strokeWidth={2.5}
                              aria-hidden="true"
                            />
                          </Link>
                        ) : null}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Quick CTA strip */}
      <section className="bg-ink text-cream py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow light>Still not sure?</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-3 text-cream tracking-tight leading-tight">
              Tell us what you are hearing.
            </h2>
            <p className="mt-6 text-base md:text-lg text-cream/85 leading-relaxed font-medium">
              Call the shop. Describe what your car is doing. We will tell you
              whether it is something to drive in for, tow in, or wait on.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold-soft px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all shadow-gold"
              >
                <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
                Call {SITE.phone}
              </a>
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-cream text-cream hover:bg-cream hover:text-ink px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all"
              >
                Book a service
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
