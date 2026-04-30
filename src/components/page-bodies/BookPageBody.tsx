import { Phone, Clock, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { UI, interpolate } from "@/lib/translations/ui";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { BookForm } from "@/app/book/BookForm";

type Props = { locale: Locale };

export function BookPageBody({ locale }: Props) {
  const copy = UI[locale].bookPage;
  const commonCopy = UI[locale].common;
  const footerCopy = UI[locale].footer;

  const homePath = locale === "es" ? `${SITE.url}/es` : SITE.url;
  const bookPath = `${SITE.url}${localizedPath("/book", locale)}`;
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: commonCopy.breadcrumbHome, url: homePath },
    { name: copy.eyebrow, url: bookPath },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 border-b border-line overflow-hidden">
        <SectionWatermark
          src="https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=1800&q=60&auto=format&fit=crop"
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

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <BookForm locale={locale} />
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="space-y-8">
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="block relative bg-ink text-cream p-7 md:p-8 shadow-card-lg hover:bg-royal-deep transition-colors group"
                  >
                    <div className="absolute top-0 left-7 right-7 h-0.5 bg-gold" aria-hidden="true" />
                    <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-gold mb-3">
                      {copy.orCallNow}
                    </p>
                    <p className="font-sans font-black text-3xl md:text-4xl tracking-tight leading-none tabular-nums">
                      {SITE.phone}
                    </p>
                    <p className="mt-3 text-sm text-cream/75 font-medium leading-relaxed">
                      {copy.callIntro}
                    </p>
                  </a>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-royal-tint flex items-center justify-center shrink-0">
                      <Clock className="text-royal" size={22} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-2.5">
                        {copy.shopHours}
                      </p>
                      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-base">
                        <dt className="text-graphite font-medium">{footerCopy.monFri}</dt>
                        <dd className="text-ink font-semibold tabular-nums">{SITE.hours.weekday}</dd>
                        <dt className="text-graphite font-medium">{footerCopy.saturday}</dt>
                        <dd className="text-ink font-semibold tabular-nums">{SITE.hours.saturday}</dd>
                        <dt className="text-graphite font-medium">{footerCopy.sunday}</dt>
                        <dd className="text-ink font-semibold">{footerCopy.closed}</dd>
                      </dl>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-gold-tint flex items-center justify-center shrink-0">
                      <Phone className="text-royal" size={22} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-2">
                        {copy.walkIns}
                      </p>
                      <p className="text-base text-graphite leading-relaxed font-medium">
                        {copy.walkInsBody}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={interpolate(copy.openInMapsAria, { address: SITE.address.full })}
                    className="group flex items-start gap-5 -m-3 p-3 hover:bg-paper transition-colors"
                  >
                    <div className="w-12 h-12 bg-royal-tint flex items-center justify-center shrink-0">
                      <MapPin className="text-royal" size={22} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-1.5">
                        {copy.visit}
                      </p>
                      <p className="text-base text-ink font-semibold leading-snug group-hover:text-royal transition-colors">
                        {SITE.address.street}
                      </p>
                      <p className="text-base text-ink font-semibold leading-snug group-hover:text-royal transition-colors">
                        {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                      </p>
                    </div>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
