import type { Metadata } from "next";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { CTASection } from "@/components/sections/CTASection";

const SERVICES_TITLE = "Auto Repair Services | The Star Auto Service Richardson TX";
const SERVICES_DESCRIPTION =
  "Auto repair services in Richardson, TX. Brakes, oil changes, engine diagnostics, transmission, AC, tires, state inspections. Call (972) 231-2886.";

export const metadata: Metadata = {
  title: { absolute: SERVICES_TITLE },
  description: SERVICES_DESCRIPTION,
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: SERVICES_TITLE,
    description: SERVICES_DESCRIPTION,
    url: `${SITE.url}/services`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SERVICES_TITLE,
    description: SERVICES_DESCRIPTION,
  },
};

export default function ServicesPage() {
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Services", url: `${SITE.url}/services` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      {/* Intro band */}
      <section className="relative bg-cream pt-24 md:pt-32 pb-20 md:pb-24 border-b border-line overflow-hidden">
        <SectionWatermark src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=1800&q=60&auto=format&fit=crop" opacity={0.05} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>What we work on</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  Twelve service
                  <br />
                  <span className="text-royal">categories.</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <p className="text-lg md:text-xl text-graphite leading-relaxed font-medium">
                  Domestic and import, gas and hybrid, every common make and model. ASE-Certified technicians. NAPA Auto Care nationwide warranty. Texas state inspections walk-in.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-paper py-24 md:py-32 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
            {SERVICES.map((service, i) => {
              const Icon =
                (LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<{
                  className?: string;
                  size?: number;
                  strokeWidth?: number;
                }>) || LucideIcons.Wrench;

              return (
                <Reveal key={service.id} delay={i * 0.04} margin="-10%">
                  <Link
                    href={`/services/${service.id}`}
                    id={service.id}
                    className="group relative block bg-surface border border-line p-7 md:p-9 h-full shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 scroll-mt-24 overflow-hidden"
                  >
                    <div className="absolute top-0 left-7 right-7 h-0.5 bg-gold origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500 ease-out" aria-hidden="true" />
                    <div className="flex items-start gap-5">
                      <div
                        className="bg-gold-tint flex items-center justify-center shrink-0"
                        style={{ width: "56px", height: "56px" }}
                      >
                        <Icon className="text-royal" size={28} strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h2 className="font-sans font-black text-2xl md:text-[1.625rem] text-ink tracking-tight leading-tight">
                            {service.title}
                          </h2>
                          <ArrowRight
                            size={20}
                            strokeWidth={2.25}
                            className="text-stone group-hover:text-royal group-hover:translate-x-1 transition-all shrink-0 mt-1"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="mt-3 text-base text-graphite leading-relaxed font-medium">
                          {service.description}
                        </p>
                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-sm text-graphite font-medium"
                            >
                              <LucideIcons.Check
                                size={15}
                                strokeWidth={2.5}
                                className="text-emerald shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-6 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-extrabold text-royal group-hover:text-royal-deep">
                          Learn more about {service.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
