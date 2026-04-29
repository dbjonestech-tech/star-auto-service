import Image from "next/image";
import Link from "next/link";
import { Star, Phone, MapPin } from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";

/** Footer. Ink ground, gold star + bold wordmark, royal/gold accents, substantial visit + nav blocks. */
export function Footer() {
  return (
    <footer className="bg-ink text-cream relative">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gold/60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <Star
                className="text-gold"
                size={26}
                fill="currentColor"
                strokeWidth={1.5}
              />
              <p className="font-sans font-extrabold text-lg tracking-tight uppercase">
                The Star Auto Service
              </p>
            </div>
            <p className="text-sm text-cream/65 leading-relaxed max-w-xs font-medium">
              Family-owned auto repair in Richardson, Texas. Honest assessments, quality
              repairs, and a commitment to your safety. Since 1998.
            </p>

            <div className="mt-7 inline-flex bg-cream p-2.5 shadow-card">
              <Image
                src="/assets/napa-autocare.png"
                alt="NAPA Auto Care Center"
                width={200}
                height={66}
                className="h-12 w-auto object-contain"
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.18em] font-bold text-cream/65">
              <span>ASE Certified</span>
              <span className="text-cream/30">/</span>
              <span>Bilingual Service</span>
              <span className="text-cream/30">/</span>
              <span>Family-Owned</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold mb-5">
              Visit
            </p>
            <ul className="space-y-2 text-sm text-cream/85">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} strokeWidth={2} className="mt-0.5 text-cream/55 shrink-0" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2.5 pt-2">
                <Phone size={15} strokeWidth={2} className="text-cream/55 shrink-0" />
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="hover:text-gold transition-colors font-semibold"
                >
                  {SITE.phone}
                </a>
              </li>
            </ul>

            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold mt-7 mb-3">
              Hours
            </p>
            <ul className="space-y-1 text-sm text-cream/85">
              <li>
                <span className="text-cream/55">Mon&ndash;Fri</span>{" "}
                <span className="ml-1 font-semibold">{SITE.hours.weekday}</span>
              </li>
              <li>
                <span className="text-cream/55">Saturday</span>{" "}
                <span className="ml-1 font-semibold">{SITE.hours.saturday}</span>
              </li>
              <li>
                <span className="text-cream/55">Sunday</span>{" "}
                <span className="ml-1 font-semibold">Closed</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold mb-5">
              Site
            </p>
            <ul className="space-y-2.5 text-sm text-cream/85">
              <li>
                <Link href="/services" className="hover:text-gold transition-colors font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors font-medium">
                  The Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-gold transition-colors font-medium">
                  Book service
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold mb-5">
              Services
            </p>
            <ul className="space-y-2.5 text-sm text-cream/85">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-gold transition-colors font-medium"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline bg-cream/15 my-12" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-cream/55">
          <p>
            &copy; {new Date().getFullYear()} The Star Auto Service. All rights reserved.
          </p>
          <p>
            Site by{" "}
            <a
              href="https://dbjtechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/75 hover:text-gold transition-colors underline-offset-4 hover:underline font-medium"
            >
              DBJ Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
