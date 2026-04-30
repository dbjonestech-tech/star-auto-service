import Image from "next/image";
import { SITE } from "@/lib/constants";
import { CountUp } from "@/components/ui/CountUp";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/translations/ui";

type Props = { locale?: Locale };

/** Compact royal-blue trust band. Three metric tiles + horizontal NAPA card, sized to fit inside the hero-fold viewport. */
export function CredentialsBar({ locale = "en" }: Props) {
  const yearsInBusiness = new Date().getFullYear() - SITE.established;

  return (
    <section className="relative bg-royal text-cream">
      <div className="absolute inset-x-0 top-0 h-px bg-gold/40" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gold/40" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 gap-x-8 lg:gap-x-12 items-center">
          {/* Three metric tiles */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 gap-x-4 md:gap-x-8">
              <div className="text-center lg:text-left">
                <p className="font-sans font-black text-2xl md:text-3xl lg:text-4xl tracking-tight leading-none">
                  <CountUp to={yearsInBusiness} duration={1.6} />
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] font-bold text-gold leading-tight">
                  {t(locale, "credentialsBar.yearsInRichardson")}
                </p>
                <p className="mt-0.5 text-[10px] text-cream/65 font-medium leading-tight tabular-nums">
                  {t(locale, "credentialsBar.sincePrefix", { year: SITE.established })}
                </p>
              </div>

              <div className="text-center lg:text-left">
                <p className="font-sans font-black text-2xl md:text-3xl lg:text-4xl tracking-tight leading-none">
                  <CountUp to={4.8} duration={1.6} decimals={1} />
                  <span className="ml-0.5 text-gold" aria-hidden="true">★</span>
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] font-bold text-gold leading-tight">
                  {t(locale, "credentialsBar.averageRating")}
                </p>
                <p className="mt-0.5 text-[10px] text-cream/65 font-medium leading-tight">
                  {t(locale, "credentialsBar.googleReviews", {
                    count: SITE.rating.count,
                  })}
                </p>
              </div>

              <div className="text-center lg:text-left">
                <p className="font-sans font-black text-2xl md:text-3xl lg:text-4xl tracking-tight leading-none">
                  {t(locale, "credentialsBar.aseBig")}
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] font-bold text-gold leading-tight">
                  {t(locale, "credentialsBar.certifiedTechnicians")}
                </p>
                <p className="mt-0.5 text-[10px] text-cream/65 font-medium leading-tight">
                  {t(locale, "credentialsBar.industryStandard")}
                </p>
              </div>
            </div>
          </div>

          {/* NAPA card, horizontal */}
          <div className="lg:col-span-5">
            <div className="bg-cream px-4 py-3 md:px-5 md:py-3.5 shadow-card flex items-center gap-4">
              <Image
                src="/assets/napa-autocare.png"
                alt="NAPA Auto Care Center"
                width={160}
                height={54}
                className="h-10 md:h-12 w-auto object-contain shrink-0"
              />
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-royal leading-tight">
                  {t(locale, "credentialsBar.napaOfficial")}
                </p>
                <p className="mt-1 text-[11px] md:text-xs text-graphite font-medium leading-snug">
                  {t(locale, "credentialsBar.napaWarrantyTagline")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
