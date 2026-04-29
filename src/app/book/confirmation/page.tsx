import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, Clock, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";

const TITLE = "Booking Received | The Star Auto Service";
const DESCRIPTION =
  "Thanks for booking with The Star Auto Service. We'll be in touch within one business day.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/book/confirmation` },
  robots: { index: false, follow: false },
};

export default function BookConfirmationPage() {
  return (
    <section className="bg-cream py-24 md:py-32 min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative bg-surface border border-line p-10 md:p-14 shadow-card-lg">
          <div className="absolute top-0 left-10 right-10 h-0.5 bg-emerald" aria-hidden="true" />

          <div className="w-16 h-16 bg-emerald/15 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-emerald" size={32} strokeWidth={2} aria-hidden="true" />
          </div>

          <Eyebrow>Booking received</Eyebrow>
          <h1 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
            We got it. We&apos;ll call you back.
          </h1>
          <p className="mt-7 text-base md:text-lg text-graphite leading-relaxed font-medium max-w-xl mx-auto">
            Thanks for booking with The Star Auto Service. We&apos;ll review your request and call you back within one business day to confirm a time. For anything urgent, please call the shop directly.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2.5 bg-ink text-cream hover:bg-royal px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
            >
              <Phone size={14} strokeWidth={2.5} aria-hidden="true" />
              Call {SITE.phone}
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 border-2 border-ink text-ink hover:bg-ink hover:text-cream px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
            >
              Back to homepage
            </Link>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="flex items-start gap-4">
            <span className="w-11 h-11 bg-royal-tint flex items-center justify-center shrink-0">
              <Clock className="text-royal" size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite">
                Shop hours
              </p>
              <p className="mt-2 text-sm text-ink font-medium tabular-nums">
                Mon–Fri {SITE.hours.weekday}
              </p>
              <p className="text-sm text-ink font-medium tabular-nums">
                Saturday {SITE.hours.saturday}
              </p>
              <p className="text-sm text-ink font-medium">Sunday Closed</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-11 h-11 bg-gold-tint flex items-center justify-center shrink-0">
              <MapPin className="text-royal" size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite">
                Walk-ins
              </p>
              <p className="mt-2 text-sm text-graphite leading-relaxed font-medium">
                Always welcome. Same-day when we can.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-11 h-11 bg-royal-tint flex items-center justify-center shrink-0">
              <MapPin className="text-royal" size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite">
                Visit
              </p>
              <p className="mt-2 text-sm text-ink font-medium leading-snug">
                {SITE.address.street}
              </p>
              <p className="text-sm text-ink font-medium leading-snug">
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
