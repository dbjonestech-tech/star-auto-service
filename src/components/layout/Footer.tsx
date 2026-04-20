import Link from "next/link";
import { Star } from "lucide-react";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/constants";

/** Site footer with business info, navigation, and credits. */
export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-accent" size={24} fill="currentColor" />
              <span className="text-lg font-bold uppercase tracking-tight">
                {SITE.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {SITE.tagline}. Serving Richardson, TX and surrounding communities
              since {SITE.established}.
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Quick Links
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Services
            </p>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>{SITE.address.full}</li>
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>Mon–Fri: {SITE.hours.weekday}</li>
              <li>Saturday: {SITE.hours.saturday}</li>
              <li>Sunday: {SITE.hours.sunday}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Website by{" "}
            <a
              href="https://dbjtechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              DBJ Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
