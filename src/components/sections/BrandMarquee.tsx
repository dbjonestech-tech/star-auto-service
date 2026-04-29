const ITEMS = [
  "12 services",
  "28 years on Belt Line",
  "4.8★ across 136 reviews",
  "NAPA Auto Care Center",
  "ASE-Certified technicians",
  "Bilingual service",
  "Family-owned since 1998",
  "Texas state inspection station",
];

/** Slim ink+gold marquee band. Pure CSS keyframes, motion-safe via globals.css. */
export function BrandMarquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <section
      aria-label="At a glance"
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
