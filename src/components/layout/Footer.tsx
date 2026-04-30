"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Star, Phone, MapPin } from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";
import { AREAS } from "@/lib/areas";
import { type Locale, localeFromPath } from "@/lib/i18n";
import { t } from "@/lib/translations/ui";

type Props = { locale?: Locale };

function L(path: string, locale: Locale): string {
  if (locale === "en") return path;
  return path === "/" ? "/es" : `/es${path}`;
}

/** Footer. Ink ground, gold star + bold wordmark, royal/gold accents, substantial visit + nav blocks. */
export function Footer({ locale: propLocale }: Props = {}) {
  const pathname = usePathname() ?? "/";
  const locale: Locale = propLocale ?? localeFromPath(pathname);
  return (
    <footer className="bg-ink text-cream relative">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gold/60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-4">
            <Link
              href={L("/", locale)}
              aria-label={`${SITE.name} ${t(locale, "header.home").toLowerCase()}`}
              className="brand-star-link inline-flex items-center gap-2.5 mb-5 group"
            >
              <Star
                className="brand-star text-gold transition-transform group-hover:scale-110 duration-300"
                size={26}
                fill="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <p className="font-sans font-extrabold text-lg tracking-tight uppercase group-hover:text-gold transition-colors">
                The Star Auto Service
              </p>
            </Link>
            <p className="text-sm text-cream/65 leading-relaxed max-w-xs font-medium">
              {t(locale, "footer.blurb")}
            </p>

            <div className="mt-7 inline-flex bg-cream p-2.5 shadow-card">
              <Image
                src="/assets/napa-autocare.png"
                alt={t(locale, "footer.napaAlt")}
                width={200}
                height={66}
                className="h-12 w-auto object-contain"
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.18em] font-bold text-cream/65">
              <span>{t(locale, "footer.aseCertified")}</span>
              <span className="text-cream/30">/</span>
              <span>{t(locale, "footer.bilingualService")}</span>
              <span className="text-cream/30">/</span>
              <span>{t(locale, "footer.familyOwned")}</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold mb-5">
              {t(locale, "footer.visit")}
            </p>
            <ul className="space-y-2 text-sm text-cream/85">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} strokeWidth={2} className="mt-0.5 text-cream/55 shrink-0" aria-hidden="true" />
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                  aria-label={`${t(locale, "cta.getDirections")}: ${SITE.address.full}`}
                >
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-2">
                <Phone size={15} strokeWidth={2} className="text-cream/55 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="hover:text-gold transition-colors font-semibold"
                >
                  {SITE.phone}
                </a>
              </li>
            </ul>

            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold mt-7 mb-3">
              {t(locale, "footer.hours")}
            </p>
            <ul className="space-y-1 text-sm text-cream/85">
              <li>
                <span className="text-cream/55">{t(locale, "footer.monFri")}</span>{" "}
                <span className="ml-1 font-semibold">{SITE.hours.weekday}</span>
              </li>
              <li>
                <span className="text-cream/55">{t(locale, "footer.saturday")}</span>{" "}
                <span className="ml-1 font-semibold">{SITE.hours.saturday}</span>
              </li>
              <li>
                <span className="text-cream/55">{t(locale, "footer.sunday")}</span>{" "}
                <span className="ml-1 font-semibold">{t(locale, "footer.closed")}</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold mb-5">
              {t(locale, "footer.site")}
            </p>
            <ul className="space-y-2.5 text-sm text-cream/85">
              <li>
                <Link href={L("/services", locale)} className="hover:text-gold transition-colors font-medium">
                  {t(locale, "footer.services")}
                </Link>
              </li>
              <li>
                <Link href={L("/about", locale)} className="hover:text-gold transition-colors font-medium">
                  {t(locale, "footer.theShopLink")}
                </Link>
              </li>
              <li>
                <Link href={L("/reviews", locale)} className="hover:text-gold transition-colors font-medium">
                  {t(locale, "footer.reviewsLink")}
                </Link>
              </li>
              <li>
                <Link href={L("/resources", locale)} className="hover:text-gold transition-colors font-medium">
                  {t(locale, "footer.resourcesLink")}
                </Link>
              </li>
              <li>
                <Link href={L("/faq", locale)} className="hover:text-gold transition-colors font-medium">
                  {t(locale, "footer.faqLink")}
                </Link>
              </li>
              <li>
                <Link href={L("/warranty", locale)} className="hover:text-gold transition-colors font-medium">
                  {t(locale, "footer.warrantyLink")}
                </Link>
              </li>
              <li>
                <Link href={L("/contact", locale)} className="hover:text-gold transition-colors font-medium">
                  {t(locale, "footer.contactLink")}
                </Link>
              </li>
              <li>
                <Link href={L("/book", locale)} className="hover:text-gold transition-colors font-medium">
                  {t(locale, "footer.bookServiceLink")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold mb-5">
              {t(locale, "footer.services")}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2.5 text-sm text-cream/85">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={L(`/services/${s.id}`, locale)}
                    className="hover:text-gold transition-colors font-medium"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href={L("/services", locale)}
                  className="text-gold hover:text-gold-soft transition-colors font-bold uppercase tracking-[0.12em] text-[11px]"
                >
                  {t(locale, "footer.allServicesOverviewLink")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline bg-cream/15 my-10" />

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-cream/70">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold whitespace-nowrap">
            {t(locale, "footer.areasServed")}
          </p>
          {AREAS.map((area) => (
            <Link
              key={area.slug}
              href={L(`/areas/${area.slug}`, locale)}
              className="hover:text-gold transition-colors font-medium whitespace-nowrap"
            >
              {area.name}
            </Link>
          ))}
        </div>

        <div className="hairline bg-cream/15 my-12" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-cream/55">
          <p>
            &copy; {new Date().getFullYear()} The Star Auto Service. {t(locale, "footer.rightsReserved")}
          </p>
          <div className="flex items-center gap-5">
            <Link href={L("/privacy", locale)} className="hover:text-gold transition-colors font-medium">
              {t(locale, "footer.privacy")}
            </Link>
            <Link href={L("/terms", locale)} className="hover:text-gold transition-colors font-medium">
              {t(locale, "footer.terms")}
            </Link>
            <span className="text-cream/30" aria-hidden="true">/</span>
            <p>
              {t(locale, "footer.siteBy")}{" "}
              <a
                href="https://dbjtechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DBJ Technologies website, opens in a new tab"
                className="text-cream/75 hover:text-gold transition-colors underline-offset-4 hover:underline font-medium"
              >
                DBJ Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
