import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { SITE } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { UI, interpolate } from "@/lib/translations/ui";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type Props = { locale?: Locale };

/** Photography-driven shop story. Primary feature photo + characterful detail inset, bold display headline. */
export function ShopStory({ locale = "en" }: Props) {
  const copy = UI[locale].shopStory;
  const yearsInBusiness = new Date().getFullYear() - SITE.established;
  const lastIdx = copy.paragraphs.length - 1;

  return (
    <section className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden bg-ink shadow-card-lg">
                <Image
                  src="/assets/shop-bays-2.jpg"
                  alt={interpolate(copy.altShopBays, { name: SITE.name })}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="hidden md:block absolute -bottom-10 -right-6 lg:-right-10 w-[42%] aspect-[4/3] overflow-hidden bg-ink shadow-card-lg border-4 border-cream">
                <Image
                  src="/assets/check-engine-neon.jpg"
                  alt={copy.altCheckEngineNeon}
                  fill
                  sizes="(min-width: 1024px) 25vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="hidden md:flex absolute top-6 left-6 bg-gold text-ink px-4 py-3 shadow-gold flex-col items-center">
                <Star size={18} className="brand-star" fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] font-extrabold leading-none">
                  {copy.estLabel}
                </p>
                <p className="font-sans font-black text-2xl tracking-tight leading-none mt-0.5">
                  {SITE.established}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <Reveal delay={0.1}>
              <Eyebrow>{copy.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                {interpolate(copy.headline, { years: yearsInBusiness })}
              </h2>
              <div className="mt-8 space-y-5 text-base md:text-lg text-graphite leading-relaxed font-medium">
                {copy.paragraphs.map((p, i) => (
                  <p key={i} className={i === lastIdx ? "text-ink font-semibold" : undefined}>
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href={localizedPath("/about", locale)}
                  className="inline-flex items-center gap-3 bg-ink text-cream hover:bg-royal px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
                >
                  {copy.cta}
                  <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
