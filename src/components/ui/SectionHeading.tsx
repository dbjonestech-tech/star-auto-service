type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

/** Section heading with optional eyebrow text and description. */
export function SectionHeading({
  eyebrow,
  heading,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
            light ? "text-accent-light" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
