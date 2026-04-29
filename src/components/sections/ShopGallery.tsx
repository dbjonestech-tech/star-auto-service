import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type Shot = {
  src: string;
  alt: string;
  caption: string;
  label: string;
};

const SHOTS: readonly Shot[] = [
  {
    src: "/assets/shop-day-2.jpg",
    alt: "The Star Auto Service exterior under a bright Texas sky",
    caption: "Belt Line Road, Richardson",
    label: "Storefront",
  },
  {
    src: "/assets/shop-snow.jpg",
    alt: "The shop in a rare Richardson snowfall",
    caption: "A rare Texas snow",
    label: "A moment",
  },
  {
    src: "/assets/shop-bays-1.jpg",
    alt: "Open service bays at The Star Auto Service",
    caption: "Open bays, ready to work",
    label: "In the bays",
  },
  {
    src: "/assets/shop-side.jpg",
    alt: "Side view of the shop on the corner",
    caption: "Twenty-eight years on the corner",
    label: "The corner",
  },
] as const;

function pad2(n: number): string {
  return String(n + 1).padStart(2, "0");
}

type FigureProps = {
  shot: Shot;
  index: number;
  className?: string;
  sizes: string;
  captionSize?: "sm" | "md";
};

function GalleryFigure({ shot, index, className = "", sizes, captionSize = "md" }: FigureProps) {
  return (
    <figure className={`relative overflow-hidden bg-ink shadow-card-lg group ${className}`}>
      <Image
        src={shot.src}
        alt={shot.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold tabular-nums">
          {pad2(index)} / {shot.label}
        </p>
        <p
          className={`mt-1 text-cream font-bold ${
            captionSize === "md" ? "text-base md:text-lg" : "text-sm md:text-base"
          }`}
        >
          {shot.caption}
        </p>
      </figcaption>
    </figure>
  );
}

/** Photo gallery. Four real shop shots — asymmetric magazine grid + closing wide band. */
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
                A working family shop on Belt Line. Open bays, fair quotes, real people. Stop by any weekday or come in Saturday morning. Walk-ins welcome.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="grid grid-cols-12 grid-rows-2 gap-3 md:gap-4 aspect-[16/9] md:aspect-[16/8]">
            <GalleryFigure
              shot={SHOTS[0]}
              index={0}
              sizes="(min-width: 768px) 60vw, 100vw"
              className="col-span-12 md:col-span-7 row-span-1 md:row-span-2"
            />
            <GalleryFigure
              shot={SHOTS[1]}
              index={1}
              sizes="(min-width: 768px) 40vw, 50vw"
              className="col-span-6 md:col-span-5 row-span-1"
              captionSize="sm"
            />
            <GalleryFigure
              shot={SHOTS[2]}
              index={2}
              sizes="(min-width: 768px) 40vw, 50vw"
              className="col-span-6 md:col-span-5 row-span-1"
              captionSize="sm"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mt-3 md:mt-4 aspect-[16/6] overflow-hidden bg-ink shadow-card-lg group">
            <Image
              src={SHOTS[3].src}
              alt={SHOTS[3].alt}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-7 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold tabular-nums">
                {pad2(3)} / {SHOTS[3].label}
              </p>
              <p className="mt-1 text-cream font-bold text-base md:text-lg">
                {SHOTS[3].caption}
              </p>
            </figcaption>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
