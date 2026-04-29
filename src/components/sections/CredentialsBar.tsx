import Image from "next/image";
import { SITE } from "@/lib/constants";

/** Royal-blue trust band. Three metric cards + featured NAPA Auto Care Center logo. */
export function CredentialsBar() {
  const yearsInBusiness = new Date().getFullYear() - SITE.established;

  return (
    <section className="relative bg-royal text-cream">
      <div className="absolute inset-x-0 top-0 h-px bg-gold/40" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gold/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-6 md:gap-x-10">
              <div className="text-center md:text-left">
                <p className="font-sans font-black text-4xl md:text-5xl tracking-tight text-cream leading-none">
                  {yearsInBusiness}+
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] font-bold text-gold">
                  Years in Richardson
                </p>
                <p className="mt-1.5 text-sm text-cream/70 font-medium">
                  Family-owned since {SITE.established}
                </p>
              </div>

              <div className="text-center md:text-left">
                <p className="font-sans font-black text-4xl md:text-5xl tracking-tight text-cream leading-none">
                  4.8
                  <span className="ml-1 text-gold">★</span>
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] font-bold text-gold">
                  Average Rating
                </p>
                <p className="mt-1.5 text-sm text-cream/70 font-medium">
                  Across hundreds of reviews
                </p>
              </div>

              <div className="text-center md:text-left">
                <p className="font-sans font-black text-4xl md:text-5xl tracking-tight text-cream leading-none">
                  ASE
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] font-bold text-gold">
                  Certified Technicians
                </p>
                <p className="mt-1.5 text-sm text-cream/70 font-medium">
                  The industry standard
                </p>
              </div>
            </div>
          </div>

          {/* Featured NAPA Auto Care Center block */}
          <div className="lg:col-span-4">
            <div className="bg-cream p-6 md:p-7 shadow-card-lg flex flex-col items-center text-center">
              <Image
                src="/assets/napa-autocare.png"
                alt="NAPA Auto Care Center"
                width={300}
                height={100}
                className="h-16 md:h-20 w-auto object-contain"
              />
              <p className="mt-4 text-[11px] uppercase tracking-[0.18em] font-bold text-royal">
                Official NAPA Auto Care Center
              </p>
              <p className="mt-1.5 text-sm text-graphite font-medium leading-relaxed">
                24-month / 24,000-mile peace of mind warranty, honored at over 17,000
                NAPA shops nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
