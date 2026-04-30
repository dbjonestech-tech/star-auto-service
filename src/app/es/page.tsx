import type { Metadata } from "next";
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
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title:
    "Reparación automotriz en Richardson, TX | The Star Auto Service | 4.8★ · Desde 1998",
  description:
    "Taller familiar de reparación automotriz en Richardson, TX. Mecánicos certificados ASE, Centro NAPA Auto Care, servicio bilingüe y precios honestos. Frenos, cambio de aceite, diagnóstico, A/C, verificación estatal. Llama al (972) 231-2886.",
  alternates: {
    canonical: `${SITE.url}/es`,
    languages: {
      "en-US": SITE.url,
      "es-US": `${SITE.url}/es`,
      "x-default": SITE.url,
    },
  },
  openGraph: {
    title: "Reparación automotriz en Richardson, TX | The Star Auto Service",
    description:
      "Taller familiar en Richardson, TX desde 1998. 4.8★ en 136 reseñas. Certificación ASE, NAPA Auto Care, servicio bilingüe. Llama al (972) 231-2886.",
    url: `${SITE.url}/es`,
    siteName: SITE.name,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reparación automotriz en Richardson, TX | The Star Auto Service",
    description:
      "Taller familiar en Richardson, TX desde 1998. 4.8★ en 136 reseñas. Certificación ASE, NAPA Auto Care, servicio bilingüe.",
  },
};

/**
 * Spanish home page (parallel-tree). Mirrors the English home structure with
 * locale="es" propagated to every section. Long-form data files (services,
 * areas, resources) still pull English copy in this phase — Phase 3 ships
 * the .es.ts data twins. Customer testimonials stay English by design.
 *
 * Gated behind SPANISH_ENABLED until the full /es/ tree is wired and reviewed.
 */
export default function HomePageEs() {
  if (!SPANISH_ENABLED) notFound();

  return (
    <>
      <div className="md:flex md:flex-col md:min-h-[calc(100svh-5rem)] xl:min-h-[calc(100svh-7.25rem)]">
        <Hero locale="es" />
        <CredentialsBar locale="es" />
      </div>
      <BrandMarquee locale="es" />
      <Pillars locale="es" />
      <ServicesOverview locale="es" />
      <ShopStory locale="es" />
      <ShopGallery locale="es" />
      <Testimonials locale="es" />
      <AreasServed locale="es" />
      <HomeFAQ locale="es" />
      <MapSection locale="es" />
      <CTASection locale="es" />
    </>
  );
}
