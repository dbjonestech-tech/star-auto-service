import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";

const BOOK_TITLE = "Book a Service | The Star Auto Service";
const BOOK_DESCRIPTION =
  "Schedule auto repair at The Star Auto Service in Richardson, TX. Online booking is on the way. For now, call (972) 231-2886 to book in.";

export const metadata: Metadata = {
  title: { absolute: BOOK_TITLE },
  description: BOOK_DESCRIPTION,
  alternates: { canonical: `${SITE.url}/book` },
  openGraph: {
    title: BOOK_TITLE,
    description: BOOK_DESCRIPTION,
    url: `${SITE.url}/book`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
};

/** Booking page placeholder. Real time-slot picker lands in Phase 2 alongside the portal. */
export default function BookPage() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Eyebrow>Book a service</Eyebrow>
        <h1 className="mt-6 font-display text-display-2 text-ink leading-[1.02] tracking-tight">
          Online booking is on the way.
        </h1>
        <p className="mt-8 text-base md:text-lg text-graphite leading-relaxed max-w-xl mx-auto">
          The new scheduling system is being built right now and will be live soon. In the
          meantime, the fastest way to book is by phone. We&apos;ll pick up, hear what your
          car is doing, and get you slotted in.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center justify-center bg-ink text-cream hover:bg-ink-soft px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-colors"
          >
            Call {SITE.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-colors"
          >
            Send a message
          </Link>
        </div>

        <div className="mt-16 hairline" />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone mb-2">Shop hours</p>
            <p className="text-sm text-ink">
              <span className="text-graphite">Mon&ndash;Fri</span> {SITE.hours.weekday}
            </p>
            <p className="text-sm text-ink">
              <span className="text-graphite">Saturday</span> {SITE.hours.saturday}
            </p>
            <p className="text-sm text-ink">
              <span className="text-graphite">Sunday</span> Closed
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone mb-2">Walk-ins</p>
            <p className="text-sm text-graphite leading-relaxed">
              Always welcome. Coffee&apos;s on, the bays are open, and we&apos;ll do our
              best to get you looked at the same day.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone mb-2">Visit</p>
            <p className="text-sm text-ink">{SITE.address.street}</p>
            <p className="text-sm text-ink">
              {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
