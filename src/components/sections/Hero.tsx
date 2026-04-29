import Image from "next/image";
import Link from "next/link";
import { Star, Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

/** Cinematic hero. Bright shop photo, light left-fade scrim, NAPA badge, gold CTA. */
export function Hero() {
  const yearsInBusiness = new Date().getFullYear() - SITE.established;

  return (
    <section className="relative bg-ink overflow-hidden">
      {/* Background photograph at full opacity */}
      <Image
        src="/assets/shop-day-1.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Light left-fade scrim only — photo stays bright on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent" />
      {/* Soft bottom for the trust strip */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/80 to-transparent" />

      {/* Floating NAPA AutoCare badge — top-right */}
      <div className="hidden md:block absolute top-8 right-8 z-10">
        <div className="bg-cream/95 backdrop-blur-sm shadow-card-lg p-3 border border-cream/40">
          <Image
            src="/assets/napa-autocare.png"
            alt="NAPA Auto Care Center"
            width={180}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-44 lg:py-52">
        <div className="max-w-3xl">
          {/* Eyebrow with star */}
          <div className="inline-flex items-center gap-2.5 mb-7">
            <Star
              size={18}
              className="text-gold drop-shadow-[0_2px_8px_rgba(244,180,0,0.5)]"
              fill="currentColor"
              strokeWidth={1.5}
            />
            <span
              className="text-[11px] uppercase tracking-[0.22em] font-bold text-cream"
              style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
            >
              Richardson, Texas &middot; Family-Owned Since {SITE.established}
            </span>
          </div>

          {/* Heavy display headline with text-shadow for crispness */}
          <h1
            className="font-sans font-black text-cream text-display-1 tracking-[-0.025em]"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.55), 0 2px 6px rgba(0,0,0,0.4)" }}
          >
            Expert auto repair,
            <br />
            <span className="text-gold drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]">
              done right.
            </span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-cream leading-relaxed max-w-2xl font-medium"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            ASE-certified technicians, NAPA Auto Care Center, bilingual service. Over{" "}
            {yearsInBusiness} years of straight answers, fair pricing, and quality work
            on every make and model.
          </p>

          {/* Heavy CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="group inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold-soft px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all shadow-gold hover:shadow-card-lg hover:-translate-y-0.5"
            >
              <Calendar size={17} strokeWidth={2.5} />
              Book a Service
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-2.5 bg-cream/10 backdrop-blur-sm text-cream border-2 border-cream hover:bg-cream hover:text-ink px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all"
            >
              <Phone size={17} strokeWidth={2.5} />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom trust strip */}
      <div className="relative border-t border-cream/15 bg-ink/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.18em] font-bold text-cream/90">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              ASE Certified
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              NAPA Auto Care
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Bilingual Service
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Family-Owned
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              {yearsInBusiness}+ Years in Richardson
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
