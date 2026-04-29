import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/** Photography-driven shop story. Primary feature photo + characterful detail inset, bold display headline. */
export function ShopStory() {
  const yearsInBusiness = new Date().getFullYear() - SITE.established;

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo composition */}
          <div className="lg:col-span-7 relative">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden bg-ink shadow-card-lg">
                <Image
                  src="/assets/shop-front.jpg"
                  alt={`${SITE.name} storefront in Richardson, Texas`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            {/* Neon-detail inset, bottom-right overlap */}
            <Reveal delay={0.18}>
              <div className="hidden md:block absolute -bottom-10 -right-6 lg:-right-10 w-[42%] aspect-[4/3] overflow-hidden bg-ink shadow-card-lg border-4 border-cream">
                <Image
                  src="/assets/check-engine-neon.jpg"
                  alt="Check engine neon sign at the shop"
                  fill
                  sizes="(min-width: 1024px) 25vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            {/* Established badge top-left */}
            <Reveal delay={0.1}>
              <div className="hidden md:flex absolute top-6 left-6 bg-gold text-ink px-4 py-3 shadow-gold flex-col items-center">
                <Star size={18} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] font-extrabold leading-none">
                  Est.
                </p>
                <p className="font-sans font-black text-2xl tracking-tight leading-none mt-0.5">
                  {SITE.established}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Copy */}
          <div className="lg:col-span-5 lg:pl-4">
            <Reveal delay={0.1}>
              <Eyebrow>The shop</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                A shop that has stayed honest for {yearsInBusiness} years.
              </h2>
              <div className="mt-8 space-y-5 text-base md:text-lg text-graphite leading-relaxed font-medium">
                <p>
                  Miguel Ibarra opened The Star Auto Service in 1998 with one rule: never
                  recommend a repair the car doesn&apos;t need. That rule has outlasted
                  every shortcut, every chain shop down the road, and every easy excuse to
                  cut corners.
                </p>
                <p>
                  What started as a small family-owned bay on Belt Line Road has grown
                  into one of Richardson&apos;s most trusted auto repair facilities.
                  ASE-Certified technicians. NAPA Auto Care nationwide warranty. Service
                  in English or Spanish, whichever you&apos;re more comfortable with.
                </p>
                <p className="text-ink font-semibold">
                  And the answer to &ldquo;do I really need this?&rdquo; is always given
                  straight.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-ink text-cream hover:bg-royal px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
                >
                  Read our story
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
