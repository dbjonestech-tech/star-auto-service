import * as LucideIcons from "lucide-react";
import { VALUE_PROPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Section highlighting value propositions with icons. */
export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Us"
          heading="Why Richardson Trusts Star Auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop) => {
            const IconComponent =
              (LucideIcons[prop.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; size?: number }>) ||
              LucideIcons.Star;

            return (
              <div key={prop.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-accent" size={26} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {prop.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
