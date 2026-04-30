import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Star } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { CountUp } from "@/components/ui/CountUp";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { CTASection } from "@/components/sections/CTASection";

const ABOUT_TITLE = "Sobre nosotros | The Star Auto Service | Desde 1998";
const ABOUT_DESCRIPTION =
  "Miguel Ibarra abrió The Star Auto Service en Richardson, TX en 1998 con una sola regla: nunca recomendar una reparación que el auto no necesite. Veintiocho años después, esa sigue siendo la regla.";

export const metadata: Metadata = {
  title: { absolute: ABOUT_TITLE },
  description: ABOUT_DESCRIPTION,
  alternates: {
    canonical: `${SITE.url}/es/about`,
    languages: {
      "en-US": `${SITE.url}/about`,
      "es-US": `${SITE.url}/es/about`,
      "x-default": `${SITE.url}/about`,
    },
  },
  openGraph: {
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    url: `${SITE.url}/es/about`,
    siteName: SITE.name,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
  },
};

export default function AboutPageEs() {
  if (!SPANISH_ENABLED) notFound();

  const yearsInBusiness = new Date().getFullYear() - SITE.established;

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Inicio", url: `${SITE.url}/es` },
    { name: "Sobre nosotros", url: `${SITE.url}/es/about` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24 border-b border-line overflow-hidden">
        <SectionWatermark src="/assets/shop-side.jpg" opacity={0.06} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Sobre el taller</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  Veintiocho años
                  <br />
                  <span className="text-royal">en Belt Line.</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <p className="text-lg md:text-xl text-graphite leading-relaxed font-medium">
                  Reparación automotriz familiar en Richardson, Texas. Misma familia, misma esquina, misma regla.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                key: "years",
                value: <CountUp to={yearsInBusiness} duration={1.6} />,
                label: "Años en Richardson",
                note: `Negocio familiar desde ${SITE.established}`,
              },
              {
                key: "rating",
                value: (
                  <>
                    <CountUp to={4.8} duration={1.6} decimals={1} />
                    <span className="text-gold" aria-hidden="true">★</span>
                  </>
                ),
                label: "Calificación promedio",
                note: (
                  <>
                    En <CountUp to={136} duration={1.6} /> reseñas de Google
                  </>
                ),
              },
              {
                key: "services",
                value: <CountUp to={12} duration={1.6} />,
                label: "Categorías de servicio",
                note: "Nacionales e importados",
              },
            ].map((stat, i) => (
              <Reveal key={stat.key} delay={i * 0.06}>
                <article className="relative bg-surface border border-line p-7 md:p-8 h-full shadow-card">
                  <div className="absolute top-0 left-7 right-7 h-0.5 bg-gold" aria-hidden="true" />
                  <p className="font-sans font-black text-4xl md:text-5xl text-ink tracking-tight leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.18em] font-bold text-royal">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-sm text-graphite font-medium">{stat.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden bg-ink shadow-card-lg">
                  <Image
                    src="/assets/about-28-years.jpg"
                    alt={`${SITE.name} en Belt Line Road, veintiocho años en la esquina`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="hidden md:flex absolute top-6 left-6 bg-gold text-ink px-4 py-3 shadow-gold flex-col items-center">
                  <Star size={18} className="brand-star" fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] font-extrabold leading-none">
                    Est.
                  </p>
                  <p className="font-sans font-black text-2xl tracking-tight leading-none mt-0.5">
                    {SITE.established}
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <Eyebrow>El fundador</Eyebrow>
                <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                  Una sola regla, un solo taller, desde 1998.
                </h2>
                <div className="mt-8 space-y-5 text-base md:text-lg text-graphite leading-relaxed font-medium">
                  <p>
                    Miguel Ibarra abrió The Star Auto Service sobre E Belt Line Road en 1998 con una sola regla, clara: no recomendar una reparación que el auto no necesite.
                  </p>
                  <p>
                    Veintiocho años después, la regla ha sobrevivido a cada atajo, a cada cadena que se instaló más adelante en la misma calle y a cada pretexto fácil para cortar camino. Por eso los clientes regresan. Por eso sus hijos también regresan.
                  </p>
                  <p>
                    Lo que empezó como una bahía familiar pequeña creció hasta convertirse en uno de los talleres de reparación más confiables de Richardson, pero el taller sigue siendo familiar, en el mostrador se sigue hablando inglés y español, y la respuesta a &ldquo;¿de verdad necesito esto?&rdquo; sigue siendo directa.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24 lg:py-32 border-y border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>El trabajo</Eyebrow>
                <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                  Cada marca y modelo común.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <div className="space-y-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
                  <p>
                    Técnicos certificados ASE. Centro NAPA Auto Care con garantía nacional de 24 meses / 24,000 millas válida en más de 17,000 talleres NAPA. Servicio bilingüe en inglés y español.
                  </p>
                  <p>
                    Nacionales e importados. Gasolina e híbridos. Desde un cambio de aceite de rutina hasta el reemplazo completo del motor. Doce categorías de servicio cubren casi todo lo que pasa por las bahías, y la verificación estatal de Texas se atiende sin cita.
                  </p>
                </div>
                <div className="mt-10">
                  <Link
                    href="/es/services"
                    className="inline-flex items-center gap-3 bg-ink text-cream hover:bg-royal px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
                  >
                    Ver los 12 servicios
                    <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection locale="es" />
    </>
  );
}
