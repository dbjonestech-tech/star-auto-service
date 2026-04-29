import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Custom 404 page. Editorial typography, on-brand. */
export default function NotFound() {
  return (
    <section className="bg-cream py-20 md:py-32 lg:py-44 min-h-[60vh] md:min-h-[70vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans font-black text-[5rem] md:text-[9rem] lg:text-[12rem] text-royal tracking-tight leading-none tabular-nums">
          404
        </p>
        <Eyebrow>Page not found</Eyebrow>
        <h1 className="mt-4 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
          That one&apos;s not in the bays.
        </h1>
        <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed max-w-xl mx-auto font-medium">
          The page you were looking for doesn&apos;t exist or has moved. Head back to the homepage, or give the shop a call and we&apos;ll point you the right way.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-ink text-cream hover:bg-royal px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
          >
            Back to homepage
            <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
          </Link>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center gap-2.5 border-2 border-ink text-ink hover:bg-ink hover:text-cream px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
          >
            <Phone size={14} strokeWidth={2.5} aria-hidden="true" />
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
