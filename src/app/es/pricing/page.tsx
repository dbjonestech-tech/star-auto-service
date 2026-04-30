import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Phone,
  Calendar,
  ShieldCheck,
  Eye,
  Wallet,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { CTASection } from "@/components/sections/CTASection";

const TITLE =
  "Precios de reparación automotriz | Rangos honestos | The Star Auto Service Richardson TX";
const DESCRIPTION =
  "Rangos de precio reales para frenos, cambios de aceite, A/C, trabajo de motor, transmisión y más en Richardson, TX. Negocio familiar, certificación ASE, NAPA Auto Care. Llama al (972) 231-2886.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE.url}/es/pricing`,
    languages: {
      "en-US": `${SITE.url}/pricing`,
      "es-US": `${SITE.url}/es/pricing`,
      "x-default": `${SITE.url}/pricing`,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/es/pricing`,
    siteName: SITE.name,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

type PriceLine = { label: string; range: string };

type PriceCard = {
  category: string;
  href: string;
  intro: string;
  lines: PriceLine[];
  footnote?: string;
};

const CARDS_ES: PriceCard[] = [
  {
    category: "Frenos",
    href: "/es/services/brakes",
    intro:
      "Pastillas, discos, calipers, líquido, ABS. La mayoría de los trabajos el mismo día con refacciones en stock.",
    lines: [
      { label: "Cambio de pastillas, por eje (sedán)", range: "$150 – $300" },
      { label: "Cambio de pastillas y discos, por eje", range: "$300 – $550" },
      { label: "Cambio de líquido de frenos", range: "$80 – $150" },
      { label: "Reemplazo de un caliper", range: "$250 – $500" },
      { label: "Reemplazo de cilindro maestro", range: "$400 – $800" },
    ],
    footnote:
      "Los frenos de lujo europeos (BMW, Mercedes, Porsche, Audi) cuestan aproximadamente 50 a 80% más porque las refacciones cuestan más.",
  },
  {
    category: "Cambio de aceite y lubricación",
    href: "/es/services/oil-change",
    intro:
      "Viscosidad y filtro correctos para tu vehículo. Aceptamos clientes sin cita.",
    lines: [
      { label: "Cambio de aceite convencional", range: "$35 – $55" },
      { label: "Semisintético", range: "$50 – $75" },
      { label: "Full sintético", range: "$70 – $110" },
      { label: "Sintético europeo (BMW, MB, VW, Volvo)", range: "$95 – $145" },
    ],
    footnote:
      "Incluye relleno de líquido de frenos, anticongelante y limpiaparabrisas, además de inspección visual de bandas, mangueras, llantas y frenos mientras el auto está en el elevador.",
  },
  {
    category: "A/C y calefacción",
    href: "/es/services/hvac",
    intro:
      "Recarga, detección de fugas, compresor, condensador, calefactor. Sistemas R-134a y R-1234yf.",
    lines: [
      { label: "Prueba de A/C + recarga (R-134a)", range: "$150 – $250" },
      { label: "Prueba de A/C + recarga (R-1234yf)", range: "$250 – $400" },
      { label: "Reemplazo de compresor de A/C, sedán", range: "$900 – $1,400" },
      { label: "Reemplazo de compresor de A/C, camioneta o lujo", range: "$1,200 – $2,800" },
      { label: "Reemplazo de calefactor", range: "$700 – $1,800" },
    ],
    footnote:
      "Agéndalo en marzo, antes de la corrida de agosto. Sellamos la fuga antes de recargar refrigerante. No rellenamos y rezamos.",
  },
  {
    category: "Diagnóstico de motor",
    href: "/es/services/engine-diagnostics",
    intro:
      "Diagnóstico real con herramientas específicas del fabricante, no a las adivinanzas con refacciones.",
    lines: [
      { label: "Diagnóstico OBD-II + análisis de freeze-frame", range: "$100 – $150" },
      { label: "Diagnóstico de fallas intermitentes / eléctricas", range: "$150 – $300" },
    ],
    footnote:
      "La cuota de diagnóstico se descuenta de la reparación si haces el trabajo con nosotros. Cuando lo encontramos, pagas una sola vez.",
  },
  {
    category: "Reparación y reemplazo de motor",
    href: "/es/services/engine-repair",
    intro:
      "Juntas de cabeza, componentes de tiempo, soportes, reemplazos. Cotizaciones en menos de 24 horas después de la inspección.",
    lines: [
      { label: "Banda de tiempo + bomba de agua + tensores", range: "$700 – $1,400" },
      { label: "Reparación de junta de cabeza", range: "$1,800 – $3,500" },
      { label: "Reemplazo de motor (usado)", range: "$3,500 – $6,500" },
      { label: "Reemplazo de motor (remanufacturado)", range: "$5,500 – $9,500" },
    ],
    footnote:
      "Cotizamos reconstrucción contra reemplazo con honestidad, basado en las cuentas. La garantía NAPA aplica al trabajo de motor que califica.",
  },
  {
    category: "Transmisión",
    href: "/es/services/transmission",
    intro:
      "Diagnosticamos antes de reemplazar. La mayoría de los problemas no son fallas totales.",
    lines: [
      { label: "Drenado y rellenado (fluido correcto para tu especificación)", range: "$150 – $300" },
      { label: "Servicio de transmisión con filtro", range: "$250 – $450" },
      { label: "Reconstrucción", range: "$2,500 – $4,500" },
      { label: "Reemplazo (remanufacturado o usado)", range: "$3,500 – $6,500" },
    ],
  },
  {
    category: "Eléctrico y batería",
    href: "/es/services/electrical",
    intro: "Probamos el sistema de carga antes de venderte una batería.",
    lines: [
      { label: "Prueba de batería", range: "Gratis, sin cita" },
      { label: "Reemplazo de batería (depende del grupo)", range: "$200 – $400" },
      { label: "Reemplazo de alternador", range: "$400 – $800" },
      { label: "Reemplazo de marcha", range: "$350 – $700" },
      { label: "Diagnóstico de consumo parásito", range: "$150 – $300" },
    ],
  },
  {
    category: "Verificación estatal de Texas",
    href: "/es/services/state-inspections",
    intro: "Estación autorizada de verificación. Sin cita.",
    lines: [
      { label: "Seguridad + emisiones (condados de DFW)", range: "$25.50" },
      { label: "Solo seguridad (condados sin emisiones)", range: "$7.00" },
      {
        label: "Re-inspección después de no aprobar",
        range: "Gratis en un plazo de 15 días en el mismo taller",
      },
    ],
    footnote:
      "Más la cuota de registro del estado, que se paga en el DMV. Trae tu tarjeta del seguro.",
  },
  {
    category: "Llantas y alineación",
    href: "/es/services/tires",
    intro: "Rotación, balanceo, reparación, reemplazo, TPMS.",
    lines: [
      { label: "Rotación de llantas", range: "$30 – $45" },
      { label: "Balanceo, las cuatro llantas", range: "$50 – $80" },
      { label: "Reparación de poncha, tapón + parche", range: "$30 – $50" },
      { label: "Alineación de cuatro ruedas", range: "$100 – $140" },
      { label: "Reemplazo de sensor TPMS", range: "$80 – $140 cada uno" },
    ],
  },
  {
    category: "Sistema de enfriamiento",
    href: "/es/services/cooling-system",
    intro: "Cambio de anticongelante, radiador, termostato, bomba de agua, mangueras.",
    lines: [
      { label: "Cambio de anticongelante + relleno correcto", range: "$120 – $220" },
      { label: "Reemplazo de termostato", range: "$220 – $500" },
      { label: "Reemplazo de bomba de agua", range: "$450 – $1,200" },
      { label: "Reemplazo de radiador", range: "$500 – $1,200" },
    ],
  },
  {
    category: "Inyección de combustible",
    href: "/es/services/fuel-injection",
    intro:
      "Limpieza, filtros, bombas, cuerpos de aceleración. Limpieza GDI con cáscara de nuez disponible.",
    lines: [
      { label: "Servicio de limpieza de inyectores", range: "$100 – $200" },
      { label: "Reemplazo de filtro de combustible", range: "$80 – $200" },
      { label: "Reemplazo de bomba de combustible (en tanque)", range: "$500 – $900" },
      { label: "Limpieza del cuerpo de aceleración", range: "$120 – $220" },
    ],
  },
  {
    category: "Servicio de batería",
    href: "/es/services/battery",
    intro:
      "El calor de Texas es la causa número uno de muerte de baterías. Probamos primero el sistema de carga.",
    lines: [
      { label: "Prueba gratis de batería", range: "Sin cita, sin compra obligatoria" },
      { label: "Reemplazo de batería, grupo estándar", range: "$200 – $300" },
      { label: "Batería AGM (lujo, start-stop)", range: "$300 – $450" },
      { label: "Diagnóstico del sistema de carga", range: "$100 – $150" },
    ],
  },
];

const PROMISES_ES = [
  {
    icon: Eye,
    title: "Cotización antes de mover una sola herramienta",
    body: "Ves los hallazgos de la inspección, la reparación propuesta y el precio antes de que toquemos algo más allá del diagnóstico.",
  },
  {
    icon: Wallet,
    title: "Sin sobrecargos después",
    body: "Si encontramos algo mientras estamos en el trabajo, paramos y te llamamos. Cualquier cambio a la cotización requiere tu autorización.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía NAPA Auto Care",
    body: "Reparaciones que califican cubiertas 24 meses / 24,000 millas, válidas en más de 17,000 talleres NAPA en todo el país.",
  },
];

export default function PricingPageEs() {
  if (!SPANISH_ENABLED) notFound();

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Inicio", url: `${SITE.url}/es` },
    { name: "Precios", url: `${SITE.url}/es/pricing` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24 border-b border-line overflow-hidden">
        <SectionWatermark
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1800&q=60&auto=format&fit=crop"
          opacity={0.05}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Precios honestos</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  Precios reales,
                  <br />
                  <span className="text-royal">por escrito.</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <p className="text-base sm:text-lg md:text-xl text-graphite leading-relaxed font-medium">
                  Rangos realistas para cada servicio que hacemos, publicados para que puedas presupuestar con confianza. Cotización final después de la inspección. Sin sobrecargos, nunca.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-12 md:py-16 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {PROMISES_ES.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.05}>
                  <article className="relative bg-surface border border-line p-6 md:p-7 shadow-card h-full">
                    <div className="absolute top-0 left-6 right-6 h-0.5 bg-gold" aria-hidden="true" />
                    <div className="w-11 h-11 bg-royal-tint flex items-center justify-center mb-5">
                      <Icon size={20} strokeWidth={2} className="text-royal" aria-hidden="true" />
                    </div>
                    <h2 className="font-sans font-black text-lg md:text-xl text-ink tracking-tight leading-snug">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-graphite leading-relaxed font-medium">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-14 lg:mb-16">
            <Reveal>
              <Eyebrow>Por categoría de servicio</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1.04]">
                Lo que cuestan las cosas en realidad.
              </h2>
              <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
                Cada rango de abajo asume un auto típico o una camioneta ligera. El precio final depende de tu vehículo en específico, lo que encontremos en la inspección y la disponibilidad de refacciones. Siempre cotizamos antes de empezar el trabajo.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7">
            {CARDS_ES.map((card, i) => (
              <Reveal key={card.category} delay={i * 0.04} margin="-10%">
                <article className="relative bg-surface border border-line p-7 md:p-9 shadow-card h-full">
                  <div className="absolute top-0 left-7 right-7 h-1 bg-royal" aria-hidden="true" />
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-sans font-black text-2xl md:text-[1.625rem] text-ink tracking-tight leading-tight">
                      {card.category}
                    </h3>
                    <Link
                      href={card.href}
                      aria-label={`Más información sobre ${card.category}`}
                      className="shrink-0 mt-1 text-stone hover:text-royal transition-colors"
                    >
                      <ArrowRight size={20} strokeWidth={2.25} aria-hidden="true" />
                    </Link>
                  </div>
                  <p className="text-sm md:text-base text-graphite leading-relaxed font-medium">
                    {card.intro}
                  </p>

                  <dl className="mt-6 divide-y divide-line-subtle">
                    {card.lines.map((line) => (
                      <div
                        key={line.label}
                        className="flex items-baseline justify-between gap-4 py-3"
                      >
                        <dt className="text-sm md:text-base text-ink font-semibold leading-snug">
                          {line.label}
                        </dt>
                        <dd className="shrink-0 font-sans font-black text-sm md:text-base text-royal tabular-nums tracking-tight">
                          {line.range}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {card.footnote ? (
                    <p className="mt-5 pt-5 border-t border-line-subtle text-xs md:text-sm text-graphite leading-relaxed font-medium italic">
                      {card.footnote}
                    </p>
                  ) : null}

                  <div className="mt-6">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-extrabold text-royal hover:text-royal-deep transition-colors"
                    >
                      Ver detalles de {card.category.toLowerCase()}
                      <ArrowRight size={12} strokeWidth={2.5} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20 lg:py-24 border-t border-line-subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow>¿Quieres una cotización real?</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              Cuéntanos qué pasa.
            </h2>
            <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
              Llama al taller o agenda en línea. Cotizamos en firme después de la inspección. Sin anticipo, sin compromiso.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/es/book"
                className="inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold-soft px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all shadow-gold"
              >
                <Calendar size={17} strokeWidth={2.5} aria-hidden="true" />
                Agendar servicio
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 border-2 border-ink text-ink hover:bg-ink hover:text-cream px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all"
              >
                <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
                Llama al {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection locale="es" />
    </>
  );
}
