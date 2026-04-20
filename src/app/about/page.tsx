import type { Metadata } from "next";
import * as LucideIcons from "lucide-react";
import { SITE, VALUE_PROPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";

const ABOUT_TITLE = "About Us | The Star Auto Service | Since 1998";
const ABOUT_DESCRIPTION =
  "Meet the team at The Star Auto Service. Family-owned since 1998, serving Richardson TX with honest auto repair. Call (972) 231-2886.";

export const metadata: Metadata = {
  title: { absolute: ABOUT_TITLE },
  description: ABOUT_DESCRIPTION,
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    url: `${SITE.url}/about`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
  },
};

/** About page with company story and values. */
export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            About {SITE.name}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Your trusted neighborhood mechanics since {SITE.established}.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Our Story
          </h2>
          <div className="prose prose-lg text-text-secondary leading-relaxed space-y-5">
            <p>
              Since 1998, The Star Auto Service has been a cornerstone of
              automotive excellence in Richardson, TX. What started as a small
              family-owned shop has grown into one of the most trusted auto
              repair facilities in the area.
            </p>
            <p>
              Our founder built this business on a simple principle: treat every
              customer with honesty and every vehicle with care. That principle
              hasn&apos;t changed in over 25 years.
            </p>
            <p>
              Our ASE-certified technicians bring decades of combined experience
              to every job, whether it&apos;s a routine oil change or a complete
              engine rebuild. We work on both domestic and import vehicles of all
              makes and models, always using quality parts and the latest
              diagnostic equipment.
            </p>
            <p>
              What truly sets us apart is our commitment to our community.
              We&apos;re proud to serve Richardson&apos;s diverse population with
              bilingual service in English and Spanish. We believe communication
              is the foundation of trust, and we want every customer to fully
              understand what their vehicle needs — and what it doesn&apos;t.
            </p>
            <p>
              We don&apos;t upsell. We don&apos;t recommend unnecessary repairs.
              We give you the straight truth and let you decide. That&apos;s the
              Star Auto way.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            heading="What We Stand For"
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

      <CTASection />
    </>
  );
}
