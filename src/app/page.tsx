import { Hero } from "@/components/sections/Hero";
import { CredentialsBar } from "@/components/sections/CredentialsBar";
import { Pillars } from "@/components/sections/Pillars";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ShopStory } from "@/components/sections/ShopStory";
import { ShopGallery } from "@/components/sections/ShopGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { MapSection } from "@/components/sections/MapSection";
import { CTASection } from "@/components/sections/CTASection";

/** Homepage. Hero, brand credentials, pillars, services, shop story, gallery, reviews, visit, closing CTA. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <CredentialsBar />
      <Pillars />
      <ServicesOverview />
      <ShopStory />
      <ShopGallery />
      <Testimonials />
      <MapSection />
      <CTASection />
    </>
  );
}
