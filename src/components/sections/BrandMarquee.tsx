import { SITE } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";
import { UI, interpolate } from "@/lib/translations/ui";

type Props = { locale?: Locale };

/** Slim ink+gold marquee band. Pure CSS keyframes, motion-safe via globals.css. */
export function BrandMarquee({ locale = "en" }: Props) {
  const copy = UI[locale].brandMarquee;
  const years = new Date().getFullYear() - SITE.established;
  const items = copy.items.map((tpl) =>
    interpolate(tpl, {
      years,
      year: SITE.established,
      rating: SITE.rating.value,
      count: SITE.rating.count,
    }),
  );
  const doubled = [...items, ...items];

  return (
    <section
      aria-label={copy.eyebrow}
      className="relative bg-ink text-cream border-y-2 border-gold/30 overflow-hidden py-4"
    >
      <div className="flex gap-12 whitespace-nowrap motion-safe:animate-[marquee_38s_linear_infinite]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] font-bold shrink-0"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
