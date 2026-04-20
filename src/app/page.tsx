import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";

const ServicesOverview = dynamic(
  () =>
    import("@/components/sections/ServicesOverview").then(
      (mod) => mod.ServicesOverview
    ),
  {
    loading: () => (
      <div className="py-16 md:py-24 animate-pulse">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 bg-border-light rounded w-48 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-48 bg-border-light rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    ),
  }
);

const WhyChooseUs = dynamic(
  () =>
    import("@/components/sections/WhyChooseUs").then((mod) => mod.WhyChooseUs),
  {
    loading: () => (
      <div className="py-16 md:py-24 bg-surface animate-pulse">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 bg-border-light rounded w-64 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-36 bg-border-light rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    ),
  }
);

const Testimonials = dynamic(
  () =>
    import("@/components/sections/Testimonials").then(
      (mod) => mod.Testimonials
    ),
  {
    loading: () => (
      <div className="py-16 md:py-24 animate-pulse">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 bg-border-light rounded w-56 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-52 bg-border-light rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    ),
  }
);

const CTASection = dynamic(
  () =>
    import("@/components/sections/CTASection").then((mod) => mod.CTASection),
  {
    loading: () => <div className="h-48 bg-accent animate-pulse" />,
  }
);

const MapSection = dynamic(
  () =>
    import("@/components/sections/MapSection").then((mod) => mod.MapSection),
  {
    loading: () => (
      <div className="py-16 md:py-24 bg-surface animate-pulse">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-80 bg-border-light rounded-xl" />
        </div>
      </div>
    ),
  }
);

/** Homepage combining all major sections. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <MapSection />
    </>
  );
}
