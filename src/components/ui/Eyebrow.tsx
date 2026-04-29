type EyebrowProps = {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
};

/** Small-caps section label. Editorial signature. */
export function Eyebrow({ children, light = false, className = "" }: EyebrowProps) {
  const tone = light ? "text-cream/70" : "text-graphite";
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone} ${className}`}
    >
      {children}
    </p>
  );
}
