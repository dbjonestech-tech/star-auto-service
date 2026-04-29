import Image from "next/image";
import Link from "next/link";
import { Calendar, Phone, Star } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

/** Closing CTA. Royal-blue ground with photographic backdrop, bold display, gold primary CTA. */
export function CTASection() {
  return (
    <section className="relative bg-royal-deep text-cream overflow-hidden">
      {/* Photographic backdrop, dimmed for legibility */}
      <Image
        src="/assets/shop-front.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-royal-deep via-royal-deep/95 to-royal-deep/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-royal-deep/60 via-transparent to-royal-deep" />

      {/* Gold accent lines */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gold/60" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gold/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <Reveal>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 mb-7">
              <Star
                size={18}
                className="text-gold"
                fill="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-cream/85">
                Schedule a service
              </span>
            </div>

            <h2 className="font-sans font-black text-display-1 leading-[0.96] tracking-[-0.025em] text-cream">
              Let&apos;s take a look
              <br />
              <span className="text-gold">at it.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-cream/85 leading-relaxed font-medium">
              Book online, give us a call, or stop by the shop. Walk-ins are always
              welcome, and the coffee is on. We&apos;ll get you in, get you a straight
              answer, and get you back on the road.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold-soft px-9 py-4.5 text-sm font-extrabold uppercase tracking-[0.14em] transition-all shadow-gold hover:shadow-card-lg hover:-translate-y-0.5"
              >
                <Calendar size={17} strokeWidth={2.5} aria-hidden="true" />
                Book a Service
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="group inline-flex items-center justify-center gap-2.5 bg-transparent text-cream border-2 border-cream/70 hover:bg-cream hover:text-ink px-9 py-4.5 text-sm font-extrabold uppercase tracking-[0.14em] transition-all"
              >
                <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
