import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { SITE } from "@/lib/constants";
import { getResources } from "@/lib/resources";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { UI, interpolate } from "@/lib/translations/ui";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";

type Props = { locale: Locale };

/** Resources index body. Locale-aware. */
export function ResourcesIndexBody({ locale }: Props) {
  const copy = UI[locale].resourcesIndex;
  const commonCopy = UI[locale].common;
  const resources = getResources(locale);
  const homePath = locale === "es" ? `${SITE.url}/es` : SITE.url;
  const indexPath = `${SITE.url}${localizedPath("/resources", locale)}`;
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: commonCopy.breadcrumbHome, url: homePath },
    { name: copy.eyebrow, url: indexPath },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 border-b border-line overflow-hidden">
        <SectionWatermark src="/assets/resources-hero.avif" opacity={0.05} />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {resources.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.04}>
                <Link
                  href={localizedPath(`/resources/${r.slug}`, locale)}
                  className="group block relative bg-surface border border-line shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                    <Image
                      src={r.heroImage}
                      alt={r.heroAlt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-7 md:p-8">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold-deep">
                      {r.category}
                    </p>
                    <h2 className="mt-3 font-sans font-black text-xl md:text-2xl text-ink tracking-tight leading-tight">
                      {r.title}
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-graphite leading-relaxed font-medium">
                      {r.description}
                    </p>
                    <p className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-bold text-graphite">
                      <Clock size={12} strokeWidth={2.5} aria-hidden="true" />
                      {interpolate(copy.minReadTemplate, { minutes: r.readMinutes })}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
