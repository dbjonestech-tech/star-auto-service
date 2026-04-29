import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const SHOTS = [
  {
    src: "/assets/shop-day-2.jpg",
    alt: "The Star Auto Service exterior under a bright Texas sky",
    caption: "Belt Line Road, Richardson",
  },
  {
    src: "/assets/shop-snow.jpg",
    alt: "The shop in a rare Richardson snowfall",
    caption: "A rare Texas snow",
  },
  {
    src: "/assets/shop-bays-1.jpg",
    alt: "Open service bays at The Star Auto Service",
    caption: "Open bays, ready to work",
  },
  {
    src: "/assets/shop-side.jpg",
    alt: "Side view of the shop",
    caption: "Twenty-eight years on the corner",
  },
] as const;

/** Photo gallery. Four real shop shots in an asymmetric magazine grid. */
export function ShopGallery() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-16">
          <div className="md:col-span-6">
            <Reveal>
              <Eyebrow>Inside the shop</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                Come see for yourself.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex md:items-end">
            <Reveal delay={0.1}>
              <p className="text-lg text-graphite leading-relaxed font-medium">
                A working family shop on Belt Line. Open bays, fair quotes, real people.
                Stop by any weekday or come in Saturday morning. Walk-ins welcome, the
                coffee is on.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="grid grid-cols-12 grid-rows-2 gap-3 md:gap-4 aspect-[16/9] md:aspect-[16/8]">
            {/* Big feature, top-left, 2 cols × 2 rows */}
            <figure className="col-span-12 md:col-span-7 row-span-1 md:row-span-2 relative overflow-hidden bg-ink shadow-card-lg group">
              <Image
                src={SHOTS[0].src}
                alt={SHOTS[0].alt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">
                  01 / Storefront
                </p>
                <p className="mt-1 text-cream font-bold text-base md:text-lg">
                  {SHOTS[0].caption}
                </p>
              </figcaption>
            </figure>

            <figure className="col-span-6 md:col-span-5 row-span-1 relative overflow-hidden bg-ink shadow-card-lg group">
              <Image
                src={SHOTS[1].src}
                alt={SHOTS[1].alt}
                fill
                sizes="(min-width: 768px) 40vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">
                  02 / A moment
                </p>
                <p className="mt-1 text-cream font-bold text-sm md:text-base">
                  {SHOTS[1].caption}
                </p>
              </figcaption>
            </figure>

            <figure className="col-span-6 md:col-span-5 row-span-1 relative overflow-hidden bg-ink shadow-card-lg group">
              <Image
                src={SHOTS[2].src}
                alt={SHOTS[2].alt}
                fill
                sizes="(min-width: 768px) 40vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">
                  03 / In the bays
                </p>
                <p className="mt-1 text-cream font-bold text-sm md:text-base">
                  {SHOTS[2].caption}
                </p>
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
