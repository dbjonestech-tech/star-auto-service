import { Hero } from "@/components/sections/Hero";
import { CredentialsBar } from "@/components/sections/CredentialsBar";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { Pillars } from "@/components/sections/Pillars";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ShopStory } from "@/components/sections/ShopStory";
import { ShopGallery } from "@/components/sections/ShopGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { AreasServed } from "@/components/sections/AreasServed";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { MapSection } from "@/components/sections/MapSection";
import { CTASection } from "@/components/sections/CTASection";

/** Homepage. Hero + trust strip + CredentialsBar share the first viewport on md+, then story/services/etc. */
export default function HomePage() {
  return (
    <>
      <div className="md:flex md:flex-col md:min-h-[calc(100svh-5rem)] xl:min-h-[calc(100svh-7.25rem)]">
        <Hero />
        <CredentialsBar />
      </div>
      <BrandMarquee />
      <Pillars />
      <ServicesOverview />
      <ShopStory />
      <ShopGallery />
      <Testimonials />
      <AreasServed />
      <HomeFAQ />
      <MapSection />
      <CTASection />
    </>
  );
}
