import Image from "next/image";
import Link from "next/link";
import { Star, Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";
import { ScrollCue } from "@/components/ui/ScrollCue";
import heroPhoto from "../../../public/assets/shop-day-1.jpg";

/** Cinematic hero. Bright shop photo, deep left+bottom-right scrim, NAPA badge, gold CTA. */
export function Hero() {
  const yearsInBusiness = new Date().getFullYear() - SITE.established;

  return (
    <section className="relative bg-ink overflow-hidden md:flex md:flex-col md:flex-1">
      <Image
        src={heroPhoto}
        alt="The Star Auto Service shop on East Belt Line Road in Richardson, Texas, family-owned auto repair since 1998"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="object-cover"
      />

      {/* Deep left-fade scrim, strong enough that headline reads without text-shadow. */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-ink/15" />
      {/* Bottom-to-top scrim for trust strip + obscures bottom-right reader board. */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
      {/* Bottom-right vignette specifically darkens the LED reader board area. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_60%,rgba(15,15,18,0.5),transparent_55%)]" />

      {/* Floating NAPA AutoCare badge, top-right, native logo, no frame */}
      <div className="hidden md:block absolute top-6 right-6 lg:top-10 lg:right-10 z-10">
        <Image
          src="/assets/napa-autocare.png"
          alt="NAPA Auto Care Center"
          width={320}
          height={107}
          className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-12 lg:py-16 w-full md:flex-1 md:flex md:items-center">
        <div className="max-w-5xl w-full">
          {/* Eyebrow with star */}
          <div className="hero-eyebrow inline-flex items-center gap-2.5 mb-7">
            <Star
              size={18}
              className="brand-star text-gold drop-shadow-[0_2px_8px_rgba(244,180,0,0.5)]"
              fill="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-cream">
              Richardson, Texas &middot; Family-Owned Since {SITE.established}
            </span>
          </div>

          <h1 className="font-sans font-black text-cream text-display-1 tracking-[-0.025em]">
            <span className="hero-line-1">Auto repair in Richardson,</span>
            <br />
            <span className="hero-line-2 text-gold">
              done right.
              <span className="hero-streak" aria-hidden="true" />
            </span>
          </h1>

          <p className="hero-subhead mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-cream leading-relaxed max-w-2xl font-medium">
            ASE-Certified mechanics in Richardson, TX. NAPA Auto Care Center, bilingual service in English and Spanish. {yearsInBusiness} years of straight answers, fair pricing, and quality work on every common make and model.
          </p>

          {/* Mobile: Call first (flex-col-reverse). Desktop: Book first (flex-row). */}
          <div className="mt-10 md:mt-12 flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/book"
              className="hero-cta-1 group inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold-soft px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all shadow-gold hover:shadow-card-lg hover:-translate-y-0.5"
            >
              <Calendar size={17} strokeWidth={2.5} aria-hidden="true" />
              Book a Service
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              data-analytics="hero-call"
              className="hero-cta-2 group inline-flex items-center justify-center gap-2.5 bg-cream/10 backdrop-blur-sm text-cream border-2 border-cream hover:bg-cream hover:text-ink px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all"
            >
              <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      <ScrollCue />

      {/* Bottom trust strip */}
      <div className="hero-trust relative border-t border-cream/15 bg-ink/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-5 sm:gap-x-7 md:gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.18em] font-bold text-cream/90">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
              ASE-Certified
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
              NAPA Auto Care
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
              Bilingual Service
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
              Family-Owned
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
              {yearsInBusiness} Years in Richardson
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
