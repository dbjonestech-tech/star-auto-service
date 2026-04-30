import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { UI, interpolate } from "@/lib/translations/ui";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { ContactForm } from "@/app/contact/ContactForm";

type Props = { locale: Locale };

export function ContactPageBody({ locale }: Props) {
  const copy = UI[locale].contactPage;
  const commonCopy = UI[locale].common;
  const footerCopy = UI[locale].footer;
  const headerCopy = UI[locale].header;

  const mapHl = locale === "es" ? "es" : "en";
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-96.7127265!3d32.9478494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f06c4520ba7%3A0xbb1004d56727b314!2sThe%20Star%20Auto%20Service!5e0!3m2!1s${mapHl}!2sus`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address.full)}`;

  const homePath = locale === "es" ? `${SITE.url}/es` : SITE.url;
  const contactPath = `${SITE.url}${localizedPath("/contact", locale)}`;
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: commonCopy.breadcrumbHome, url: homePath },
    { name: headerCopy.contact, url: contactPath },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 border-b border-line overflow-hidden">
        <SectionWatermark src="/assets/contact-hero.avif" opacity={0.05} />
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
                <ContactForm locale={locale} />
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="space-y-7">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${copy.getDirections} ${SITE.address.full}`}
                    className="group flex items-start gap-5 -m-3 p-3 hover:bg-paper transition-colors"
                  >
                    <div className="w-12 h-12 bg-royal-tint flex items-center justify-center shrink-0">
                      <MapPin className="text-royal" size={22} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-1.5">
                        {copy.addressLabel}
                      </p>
                      <p className="font-sans font-bold text-lg text-ink leading-snug group-hover:text-royal transition-colors">
                        {SITE.address.street}
                      </p>
                      <p className="font-sans font-bold text-lg text-ink leading-snug group-hover:text-royal transition-colors">
                        {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-extrabold text-royal group-hover:text-royal-deep">
                        {copy.getDirections}
                        <ArrowRight size={13} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-gold-tint flex items-center justify-center shrink-0">
                      <Phone className="text-royal" size={22} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-1.5">
                        {copy.callLabel}
                      </p>
                      <a
                        href={`tel:${SITE.phoneRaw}`}
                        className="font-sans font-black text-3xl text-ink hover:text-royal transition-colors tracking-tight leading-none tabular-nums"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-royal-tint flex items-center justify-center shrink-0">
                      <Clock className="text-royal" size={22} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-2.5">
                        {copy.hoursLabel}
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

                  <MapEmbed
                    src={mapSrc}
                    title={interpolate(copy.mapTitleTemplate, { name: SITE.name })}
                    address={`${SITE.address.street} · ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}`}
                    className="aspect-[4/3] overflow-hidden shadow-card"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
