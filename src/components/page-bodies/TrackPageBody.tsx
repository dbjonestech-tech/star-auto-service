import Link from "next/link";
import {
  Phone,
  Calendar,
  Clock,
  Wrench,
  Package,
  CircleCheck,
  CircleDot,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { UI, interpolate } from "@/lib/translations/ui";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { CTASection } from "@/components/sections/CTASection";
import { StatusRequestForm } from "@/app/track/StatusRequestForm";

type Props = { locale: Locale };

const STAGE_ICONS: LucideIcon[] = [CircleDot, Clock, Phone, Wrench, Package, CircleCheck];

export function TrackPageBody({ locale }: Props) {
  const copy = UI[locale].trackPage;
  const commonCopy = UI[locale].common;

  const homePath = locale === "es" ? `${SITE.url}/es` : SITE.url;
  const trackPath = `${SITE.url}${localizedPath("/track", locale)}`;
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: commonCopy.breadcrumbHome, url: homePath },
    { name: copy.eyebrow, url: trackPath },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24 border-b border-line overflow-hidden">
        <SectionWatermark
          src="https://images.unsplash.com/photo-1523983254932-c7e6571c9d60?w=1800&q=60&auto=format&fit=crop"
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
                <p className="text-base sm:text-lg md:text-xl text-graphite leading-relaxed font-medium">
                  {copy.intro}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <StatusRequestForm locale={locale} />
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="space-y-6">
                  <div className="relative bg-surface border border-line p-6 md:p-7 shadow-card">
                    <div
                      className="absolute top-0 left-6 right-6 h-0.5 bg-royal"
                      aria-hidden="true"
                    />
                    <Eyebrow>{copy.haveLinkEyebrow}</Eyebrow>
                    <p className="mt-3 text-sm md:text-base text-graphite leading-relaxed font-medium">
                      {copy.haveLinkBody}
                    </p>
                  </div>

                  <div className="relative bg-surface border border-line p-6 md:p-7 shadow-card">
                    <div
                      className="absolute top-0 left-6 right-6 h-0.5 bg-gold"
                      aria-hidden="true"
                    />
                    <Eyebrow>{copy.preferToTalkEyebrow}</Eyebrow>
                    <p className="mt-3 text-sm md:text-base text-graphite leading-relaxed font-medium">
                      {copy.preferToTalkBody}
                    </p>
                    <a
                      href={`tel:${SITE.phoneRaw}`}
                      className="mt-4 inline-flex items-center gap-2 font-sans font-black text-2xl md:text-3xl text-ink hover:text-royal transition-colors tracking-tight leading-none tabular-nums"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24 lg:py-32 border-y border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-14 lg:mb-16">
            <Reveal>
              <Eyebrow>{copy.sixStagesEyebrow}</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1.04]">
                {copy.sixStagesHeadline}
              </h2>
              <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
                {copy.sixStagesIntro}
              </p>
            </Reveal>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {copy.stages.map((s, i) => {
              const Icon = STAGE_ICONS[i] ?? CircleDot;
              return (
                <Reveal key={s.title} delay={i * 0.04}>
                  <li className="relative bg-surface border border-line p-6 md:p-7 shadow-card flex items-start gap-5 h-full">
                    <span className="font-sans font-black text-xl text-gold tabular-nums leading-none shrink-0 w-8 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-9 h-9 bg-royal-tint flex items-center justify-center shrink-0">
                          <Icon
                            size={18}
                            strokeWidth={2}
                            className="text-royal"
                            aria-hidden="true"
                          />
                        </span>
                        <h3 className="font-sans font-black text-lg md:text-xl text-ink tracking-tight leading-snug">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-graphite leading-relaxed font-medium">
                        {s.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-14">
            <Reveal>
              <Eyebrow>{copy.promisesEyebrow}</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1.04]">
                {copy.promisesHeadline}
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {copy.promises.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="relative bg-surface border border-line p-6 md:p-7 shadow-card h-full">
                  <div
                    className="absolute top-0 left-6 right-6 h-0.5 bg-gold"
                    aria-hidden="true"
                  />
                  <h3 className="font-sans font-black text-lg md:text-xl text-ink tracking-tight leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-graphite leading-relaxed font-medium">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow light>{copy.closingEyebrow}</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-3 text-cream tracking-tight leading-tight">
              {copy.closingHeadline}
            </h2>
            <p className="mt-6 text-base md:text-lg text-cream/85 leading-relaxed font-medium">
              {copy.closingBody}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href={localizedPath("/book", locale)}
                className="inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold-soft px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all shadow-gold"
              >
                <Calendar size={17} strokeWidth={2.5} aria-hidden="true" />
                {copy.bookCTA}
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 border-2 border-cream text-cream hover:bg-cream hover:text-ink px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all"
              >
                <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
                {interpolate(copy.callCTA, { phone: SITE.phone })}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
