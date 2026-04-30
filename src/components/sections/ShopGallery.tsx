import Image from "next/image";
import { SITE } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";
import { UI, interpolate } from "@/lib/translations/ui";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { MapEmbed } from "@/components/ui/MapEmbed";

type Props = { locale?: Locale };

/**
 * "On Belt Line, in Richardson", replaces the previous shop-only gallery.
 * Anchors the shop's geographic location with a real map, pairs it with one
 * actual storefront photo + community/neighborhood imagery, and tells the
 * story of being a fixture on the corner since 1998.
 */
export function ShopGallery({ locale = "en" }: Props) {
  const copy = UI[locale].shopGallery;
  const mapHl = locale === "es" ? "es" : "en";
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-96.7127265!3d32.9478494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f06c4520ba7%3A0xbb1004d56727b314!2sThe%20Star%20Auto%20Service!5e0!3m2!1s${mapHl}!2sus`;

  return (
    <section className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-10 md:mb-14 lg:mb-16">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>{copy.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                {copy.headlineLine1}
                <br />
                <span className="text-royal">{copy.headlineLine2}</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 flex md:items-end">
            <Reveal delay={0.1}>
              <p className="text-lg text-graphite leading-relaxed font-medium">
                {copy.intro}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4">
          <Reveal className="lg:col-span-7" margin="-10%">
            <figure className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-ink shadow-card-lg group">
              <Image
                src="/assets/shop-day-2.jpg"
                alt={interpolate(copy.altStorefront, { name: SITE.name })}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-7 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">
                  {copy.storefrontLabel}
                </p>
                <p className="mt-1.5 text-cream font-bold text-lg md:text-xl">
                  {copy.storefrontCaption}
                </p>
              </figcaption>
              <div
                className="absolute top-5 left-5 bg-gold text-ink px-3 py-2 shadow-gold flex flex-col items-center"
                aria-hidden="true"
              >
                <p className="text-[9px] uppercase tracking-[0.2em] font-extrabold leading-none">
                  {copy.estLabel}
                </p>
                <p className="font-sans font-black text-xl tracking-tight leading-none mt-0.5 tabular-nums">
                  1998
                </p>
              </div>
            </figure>
          </Reveal>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
            <Reveal margin="-10%" delay={0.08}>
              <div className="relative aspect-[4/3] sm:aspect-square lg:aspect-[5/4] overflow-hidden shadow-card-lg">
                <MapEmbed
                  src={mapSrc}
                  title={interpolate(copy.mapTitle, { name: SITE.name })}
                  address={`${SITE.address.street} · ${SITE.address.city}, ${SITE.address.state}`}
                  className="absolute inset-0 border-0"
                />
                <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-ink/40 to-transparent pointer-events-none">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-cream">
                    {copy.mapLabel}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal margin="-10%" delay={0.16}>
              <figure className="relative aspect-[4/3] sm:aspect-square lg:aspect-[5/4] overflow-hidden bg-ink shadow-card-lg group">
                <Image
                  src="/assets/home-neighborhood.avif"
                  alt={copy.altNeighborhoodHome}
                  fill
                  sizes="(min-width: 1024px) 35vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">
                    {copy.neighborhoodLabel}
                  </p>
                  <p className="mt-1 text-cream font-bold text-base md:text-lg">
                    {copy.neighborhoodCaption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.12} margin="-10%">
          <figure className="relative mt-3 md:mt-4 aspect-[16/6] overflow-hidden bg-ink shadow-card-lg group">
            <Image
              src="/assets/home-richardson-fixture.avif"
              alt={copy.altAerial}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-ink/20" />
            <figcaption className="absolute inset-y-0 left-0 max-w-2xl flex items-center px-6 md:px-10 lg:px-14">
              <div>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-gold">
                  {copy.fixtureLabel}
                </p>
                <p className="mt-3 font-sans font-black text-2xl md:text-3xl lg:text-4xl text-cream tracking-tight leading-tight">
                  {copy.fixtureHeadline}
                </p>
                <p className="mt-4 text-sm md:text-base text-cream/85 font-medium leading-relaxed">
                  {copy.fixtureSub}
                </p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
