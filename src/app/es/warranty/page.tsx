import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ShieldCheck, MapPin, Calendar, Wrench } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Garantía NAPA Auto Care | The Star Auto Service";
const DESCRIPTION =
  "Tu reparación en The Star Auto Service está respaldada por la garantía nacional de tranquilidad de NAPA Auto Care: 24 meses / 24,000 millas, válida en más de 17,000 Centros NAPA Auto Care.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE.url}/es/warranty`,
    languages: {
      "en-US": `${SITE.url}/warranty`,
      "es-US": `${SITE.url}/es/warranty`,
      "x-default": `${SITE.url}/warranty`,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/es/warranty`,
    siteName: SITE.name,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

const PILLARS_ES = [
  {
    icon: Calendar,
    headline: "24 meses",
    body: "La cobertura empieza el día de la reparación y dura dos años completos a partir de esa fecha.",
  },
  {
    icon: Wrench,
    headline: "24,000 millas",
    body: "O 24,000 millas de manejo, lo que llegue primero. Refacciones y mano de obra que califica.",
  },
  {
    icon: MapPin,
    headline: "Nacional, más de 17,000 talleres",
    body: "Válida en cada Centro NAPA Auto Care del país. Si te mudas o vas de viaje, no hay problema.",
  },
];

export default function WarrantyPageEs() {
  if (!SPANISH_ENABLED) notFound();

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Inicio", url: `${SITE.url}/es` },
    { name: "Garantía", url: `${SITE.url}/es/warranty` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24 border-b border-line overflow-hidden">
        <SectionWatermark src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1800&q=60&auto=format&fit=crop" opacity={0.05} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Garantía de tranquilidad</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  Tu reparación,
                  <br />
                  <span className="text-royal">respaldada en todo el país.</span>
                </h1>
                <p className="mt-7 text-lg md:text-xl text-graphite leading-relaxed font-medium max-w-2xl">
                  Como Centro NAPA Auto Care oficial, el trabajo que hacemos en The Star Auto Service está cubierto por la garantía nacional de NAPA: 24 meses, 24,000 millas, válida en más de 17,000 Centros NAPA Auto Care en todo el país.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="relative aspect-[4/3] overflow-hidden bg-ink shadow-card-lg">
                  <Image
                    src="/assets/warranty-hero.jpg"
                    alt="Letrero de NAPA AutoCare Center en la fachada del taller"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24 lg:py-32 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PILLARS_ES.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.headline} delay={i * 0.06}>
                  <article className="relative bg-surface border border-line p-8 md:p-10 h-full shadow-card">
                    <div className="absolute top-0 left-8 right-8 h-1 bg-gold" aria-hidden="true" />
                    <div className="w-14 h-14 bg-royal-tint flex items-center justify-center mb-7">
                      <Icon className="text-royal" size={26} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <h2 className="font-sans font-black text-2xl md:text-3xl text-ink tracking-tight leading-none">
                      {p.headline}
                    </h2>
                    <p className="mt-5 text-base text-graphite leading-relaxed font-medium">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24 lg:py-32 border-b border-line-subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Cómo funciona</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              La versión clara.
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg text-graphite leading-relaxed font-medium">
              <p>
                Cuando te haces una reparación que califica en The Star Auto Service, las refacciones y la mano de obra están cubiertas por 24 meses a partir de la fecha de reparación, o 24,000 millas de manejo, lo que llegue primero.
              </p>
              <p>
                Si algo falla con esa reparación específica dentro del periodo de garantía, el trabajo está cubierto. Puedes traerlo de regreso con nosotros. También puedes llevarlo a cualquiera de los más de 17,000 Centros NAPA Auto Care del país. Si te mudas a Phoenix, vas de viaje a Maine o te quedas botado en un pueblito de Oklahoma un martes, la garantía viaja contigo.
              </p>
              <p className="text-ink font-semibold">
                Guarda tu factura. Esa es la prueba. Nosotros también la tenemos en archivo en el taller, así que si pierdes la tuya, llámanos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 relative bg-surface border border-line p-7 md:p-8 shadow-card">
              <div className="absolute top-0 left-7 right-7 h-0.5 bg-gold" aria-hidden="true" />
              <div className="flex items-start gap-5">
                <span className="w-12 h-12 bg-gold-tint flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-royal" size={22} strokeWidth={2} aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h3 className="font-sans font-black text-lg md:text-xl text-ink tracking-tight">
                    Qué cubre
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-graphite leading-relaxed font-medium">
                    La mayoría de las reparaciones que normalmente harías en un taller: frenos, trabajo de motor, transmisión, eléctrico, enfriamiento, A/C, combustible, suspensión y más. Las categorías específicas que califican las define NAPA. Te explicamos qué aplica a tu reparación antes de empezar el trabajo.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow>¿Tienes una pregunta sobre la garantía?</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              Llámanos y te explicamos.
            </h2>
            <p className="mt-7 text-base md:text-lg text-graphite leading-relaxed font-medium max-w-xl mx-auto">
              ¿Perdiste tu factura? ¿Necesitas confirmar si algo está cubierto? ¿Vas de viaje por el país y quieres saber dónde está el taller NAPA más cercano? Te ayudamos con todo eso.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2.5 bg-ink text-cream hover:bg-royal px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
              >
                Llama al {SITE.phone}
                <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
              </a>
              <Link
                href="https://www.napaautocare.com/locator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border-2 border-ink text-ink hover:bg-ink hover:text-cream px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
              >
                Encuentra un taller NAPA en todo el país
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection locale="es" />
    </>
  );
}
