import Image from "next/image";
import { SITE } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { MapEmbed } from "@/components/ui/MapEmbed";

/**
 * "On Belt Line, in Richardson", replaces the previous shop-only gallery.
 * Anchors the shop's geographic location with a real map, pairs it with one
 * actual storefront photo + community/neighborhood imagery, and tells the
 * story of being a fixture on the corner since 1998.
 */
export function ShopGallery() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-96.7127265!3d32.9478494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f06c4520ba7%3A0xbb1004d56727b314!2sThe%20Star%20Auto%20Service!5e0!3m2!1sen!2sus";

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-16">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>On Belt Line, in Richardson</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                A fixture on the corner
                <br />
                <span className="text-royal">since 1998.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 flex md:items-end">
            <Reveal delay={0.1}>
              <p className="text-lg text-graphite leading-relaxed font-medium">
                E Belt Line Road runs east-to-west across Richardson, and we&apos;ve been on the same corner since &apos;98. Across from the Coin Laundry, between Plano Road and Jupiter. Easy in, easy out.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Asymmetric grid: storefront photo + map + community photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4">
          {/* Big left: actual storefront */}
          <Reveal className="lg:col-span-7" margin="-10%">
            <figure className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-ink shadow-card-lg group">
              <Image
                src="/assets/shop-day-2.jpg"
                alt={`${SITE.name} storefront on E Belt Line Road`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-7 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">
                  Storefront · 900 E Belt Line Rd
                </p>
                <p className="mt-1.5 text-cream font-bold text-lg md:text-xl">
                  Same corner. Same family. Twenty-eight years.
                </p>
              </figcaption>
              <div
                className="absolute top-5 left-5 bg-gold text-ink px-3 py-2 shadow-gold flex flex-col items-center"
                aria-hidden="true"
              >
                <p className="text-[9px] uppercase tracking-[0.2em] font-extrabold leading-none">
                  Est.
                </p>
                <p className="font-sans font-black text-xl tracking-tight leading-none mt-0.5 tabular-nums">
                  1998
                </p>
              </div>
            </figure>
          </Reveal>

          {/* Right column: map (top) + community photo (bottom) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
            <Reveal margin="-10%" delay={0.08}>
              <div className="relative aspect-[4/3] sm:aspect-square lg:aspect-[5/4] overflow-hidden shadow-card-lg">
                <MapEmbed
                  src={mapSrc}
                  title={`Map of ${SITE.name} on E Belt Line Road, Richardson`}
                  address={`${SITE.address.street} · ${SITE.address.city}, ${SITE.address.state}`}
                  className="absolute inset-0 border-0"
                />
                <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-ink/40 to-transparent pointer-events-none">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-cream">
                    Where we are · The map
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal margin="-10%" delay={0.16}>
              <figure className="relative aspect-[4/3] sm:aspect-square lg:aspect-[5/4] overflow-hidden bg-ink shadow-card-lg group">
                <Image
                  src="/assets/home-neighborhood.avif"
                  alt="Richardson neighborhood home with palms"
                  fill
                  sizes="(min-width: 1024px) 35vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">
                    The neighborhood
                  </p>
                  <p className="mt-1 text-cream font-bold text-base md:text-lg">
                    Richardson families since &rsquo;98
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Closing wide band: community/Texas-road context */}
        <Reveal delay={0.12} margin="-10%">
          <figure className="relative mt-3 md:mt-4 aspect-[16/6] overflow-hidden bg-ink shadow-card-lg group">
            <Image
              src="/assets/home-richardson-fixture.avif"
              alt="Aerial view of Richardson, Texas at golden hour"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-ink/20" />
            <figcaption className="absolute inset-y-0 left-0 max-w-2xl flex items-center px-6 md:px-10 lg:px-14">
              <div>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-gold">
                  A fixture on Belt Line
                </p>
                <p className="mt-3 font-sans font-black text-2xl md:text-3xl lg:text-4xl text-cream tracking-tight leading-tight">
                  Richardson commuters. Plano second-opinions. Garland fleet trucks. Allen carpools.
                </p>
                <p className="mt-4 text-sm md:text-base text-cream/85 font-medium leading-relaxed">
                  Twenty-eight years on the corner means a lot of cars and a lot of drivers, and most of them came back.
                </p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
