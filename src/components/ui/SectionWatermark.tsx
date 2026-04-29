import Image from "next/image";

type Props = {
  src: string;
  /** 0-1, default 0.05 */
  opacity?: number;
  /** "multiply" (default, on cream/paper) or "lighten" (on dark bgs). */
  blendMode?: "multiply" | "lighten";
};

/** Decorative low-opacity Unsplash watermark layer for section backgrounds. Caller must place inside a `relative overflow-hidden` parent and lift its content with `relative z-10`. */
export function SectionWatermark({ src, opacity = 0.05, blendMode = "multiply" }: Props) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className={`object-cover ${blendMode === "multiply" ? "mix-blend-multiply" : "mix-blend-lighten"}`}
        style={{ opacity }}
      />
    </div>
  );
}
