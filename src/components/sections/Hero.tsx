import { Phone, ArrowRight, Award, Calendar, Star } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

/** Homepage hero section with gradient background and CTAs. */
export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary-light overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-light rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {SITE.tagline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Family-owned and ASE-certified. Serving Richardson, TX since{" "}
            {SITE.established}. Honest assessments, quality repairs, and a
            commitment to your safety.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" href={`tel:${SITE.phoneRaw}`}>
              <Phone size={20} className="mr-2" />
              Call {SITE.phone}
            </Button>
            <Button variant="secondary" size="lg" href="/services">
              Our Services
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span className="inline-flex items-center gap-1.5">
              <Award size={16} className="text-accent" />
              ASE Certified
            </span>
            <span className="text-gray-500">|</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={16} className="text-accent" />
              Since {SITE.established}
            </span>
            <span className="text-gray-500">|</span>
            <span className="inline-flex items-center gap-1.5">
              <Star size={16} className="text-accent" fill="currentColor" />
              4.8 Stars
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
