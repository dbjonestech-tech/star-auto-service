import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { getServices } from "@/lib/constants.es";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { UI, interpolate } from "@/lib/translations/ui";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { CTASection } from "@/components/sections/CTASection";

type Props = { locale: Locale };

/** Services index body. Locale-aware for both /services and /es/services. */
export function ServicesIndexBody({ locale }: Props) {
  const copy = UI[locale].servicesIndex;
  const breadcrumbCopy = UI[locale].common;
  const services = getServices(locale);
  const indexPath = localizedPath("/services", locale);
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: breadcrumbCopy.breadcrumbHome, url: SITE.url },
    { name: UI[locale].header.services, url: `${SITE.url}${indexPath}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24 border-b border-line overflow-hidden">
        <SectionWatermark
          src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=1800&q=60&auto=format&fit=crop"
          opacity={0.05}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>{copy.eyebrow}</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  {copy.headlineLine1}
                  <br />
                  <span className="text-royal">{copy.headlineLine2}</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <p className="text-lg md:text-xl text-graphite leading-relaxed font-medium">
                  {copy.intro}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24 lg:py-32 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
            {services.map((service, i) => {
              const Icon =
                (LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<{
                  className?: string;
                  size?: number;
                  strokeWidth?: number;
                }>) || LucideIcons.Wrench;

              return (
                <Reveal key={service.id} delay={i * 0.04} margin="-10%">
                  <Link
                    href={localizedPath(`/services/${service.id}`, locale)}
                    id={service.id}
                    className="group relative block bg-surface border border-line p-7 md:p-9 h-full shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 scroll-mt-24 overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-7 right-7 h-0.5 bg-gold origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                      aria-hidden="true"
                    />
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
                          {interpolate(copy.learnMoreAbout, { title: service.title })}
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

      <CTASection locale={locale} />
    </>
  );
}
