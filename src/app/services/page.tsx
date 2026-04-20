import type { Metadata } from "next";
import * as LucideIcons from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Complete auto repair services in Richardson, TX. Brakes, oil changes, engine diagnostics, transmission, electrical, HVAC, tires, state inspections, and more.",
};

/** Services page showing all available services with feature lists. */
export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            From routine maintenance to major repairs, our ASE-certified
            technicians handle it all with quality parts and honest service.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            heading="Comprehensive Auto Repair"
            description="We service all makes and models — domestic and import."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const IconComponent =
                (LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; size?: number }>) ||
                LucideIcons.Wrench;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-surface rounded-xl p-6 md:p-8 shadow-sm border border-border-light scroll-mt-24"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                      <IconComponent className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-1.5">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-text-secondary"
                          >
                            <LucideIcons.Check
                              size={14}
                              className="text-success shrink-0"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
