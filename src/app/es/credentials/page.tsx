import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Award,
  FileBadge,
  Globe,
  Star,
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
  "Certificación ASE, NAPA Auto Care, estación de verificación de Texas | Credenciales | The Star Auto Service";
const DESCRIPTION =
  "Técnicos certificados ASE, Centro NAPA Auto Care con garantía nacional, estación autorizada de verificación estatal de Texas, acreditados por el BBB. Las certificaciones detrás de 28 años de reparación automotriz familiar en Richardson, TX.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE.url}/es/credentials`,
    languages: {
      "en-US": `${SITE.url}/credentials`,
      "es-US": `${SITE.url}/es/credentials`,
      "x-default": `${SITE.url}/credentials`,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/es/credentials`,
    siteName: SITE.name,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const PILLARS_ES = [
  {
    icon: Award,
    title: "Técnicos certificados ASE",
    body: "Nuestros técnicos cuentan con certificaciones del National Institute for Automotive Service Excellence y se vuelven a examinar cada cinco años para mantenerlas. ASE es el estándar de la industria para competencia comprobada en cada sistema común: motor, frenos, eléctrico, suspensión, A/C y más.",
    proof: "Reexamen cada 5 años. 8 áreas de especialidad. Estándar de la industria.",
  },
  {
    icon: ShieldCheck,
    title: "Centro NAPA Auto Care",
    body: "Miembro auditado del programa NAPA Auto Care. Eso significa que nuestro taller cumple con los estándares de NAPA en capacitación de técnicos, equipo y trato al cliente, y nuestras reparaciones que califican están respaldadas por la garantía nacional de tranquilidad de NAPA: 24 meses / 24,000 millas.",
    proof: "Válida en más de 17,000 talleres NAPA en todo el país.",
  },
  {
    icon: FileBadge,
    title: "Estación autorizada de verificación estatal de Texas",
    body: "Somos una estación autorizada por el Texas Department of Public Safety para verificación de seguridad y de emisiones en el condado de Dallas. También diagnosticamos y reparamos cualquier punto que no pase la inspección, y volvemos a hacer la prueba sin costo en un plazo de 15 días.",
    proof: "Verificación sin cita lun–vie 8:00 AM – 6:30 PM, sáb 8:00 AM – 4:00 PM.",
  },
  {
    icon: Star,
    title: "4.8★ en 136 reseñas de Google",
    body: "Veintiocho años de recomendación de boca en boca, por escrito. Nuestras reseñas hablan de precios honestos consistentes, diagnóstico real en lugar de adivinanzas con refacciones, y el tipo de relación de cliente repetido que solo se da cuando la regla se respeta.",
    proof: "Más de ciento treinta reseñas publicadas en Google.",
  },
  {
    icon: Globe,
    title: "Servicio bilingüe",
    body: "Servicio en inglés o español, como tú prefieras. Hablamos español. Cada cotización, cada hallazgo de inspección, cada conversación sobre lo que tu auto realmente necesita se explica en tu idioma.",
    proof: "Hablamos español. Cada visita, cada cotización, cada conversación.",
  },
];

const STANDARDS_ES = [
  {
    label: "Negocio familiar",
    body: "Fundado por Miguel Ibarra en 1998. Misma familia, misma esquina, misma regla.",
  },
  {
    label: "Refacciones de calidad original y OEM",
    body: "No le ponemos refacciones de saldo a tu auto. Calidad NAPA u OEM, las que vinieron de fábrica o las que el ingeniero especificó.",
  },
  {
    label: "Cuota de diagnóstico que se descuenta de la reparación",
    body: "El diagnóstico real toma tiempo y herramientas. La cuota se descuenta de la reparación si autorizas el trabajo. Cuando lo encontramos, pagas una sola vez.",
  },
  {
    label: "Cotización antes de mover una sola herramienta",
    body: "Ves los hallazgos de la inspección, la reparación propuesta y el precio. Cualquier cambio a la cotización requiere tu autorización.",
  },
  {
    label: "Reconocidos por el BBB",
    body: "Listados y con reseñas en el Better Business Bureau, con la transparencia pública que eso implica.",
  },
  {
    label: "Seguros y fianza",
    body: "Plenamente asegurados, con fianza y operando bajo todas las licencias estatales de Texas que aplican a un taller automotriz.",
  },
];

export default function CredentialsPageEs() {
  if (!SPANISH_ENABLED) notFound();

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Inicio", url: `${SITE.url}/es` },
    { name: "Credenciales", url: `${SITE.url}/es/credentials` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24 border-b border-line overflow-hidden">
        <SectionWatermark
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b3?w=1800&q=60&auto=format&fit=crop"
          opacity={0.05}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Credenciales y estándares</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  Por qué Richardson
                  <br />
                  <span className="text-royal">confía en el taller.</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <p className="text-base sm:text-lg md:text-xl text-graphite leading-relaxed font-medium">
                  Veintiocho años de reparación automotriz familiar, respaldados por cada credencial que un taller serio debe tener.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-12 md:py-16 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="md:col-span-4">
              <Reveal>
                <div className="bg-cream p-6 md:p-7 shadow-card flex items-center justify-center">
                  <Image
                    src="/assets/napa-autocare.png"
                    alt="Centro NAPA Auto Care"
                    width={320}
                    height={107}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal delay={0.1}>
                <Eyebrow>Centro oficial NAPA Auto Care</Eyebrow>
                <h2 className="mt-3 font-sans font-black text-2xl md:text-3xl text-ink tracking-tight leading-snug">
                  Tu reparación, respaldada en todo el país.
                </h2>
                <p className="mt-4 text-base md:text-lg text-graphite leading-relaxed font-medium">
                  Las reparaciones que califican tienen garantía de 24 meses / 24,000 millas, válida en más de 17,000 Centros NAPA Auto Care en todo el país. Si te mudas, vas de viaje o te quedas botado un martes en Oklahoma, la garantía viaja contigo.
                </p>
                <Link
                  href="/es/warranty"
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-extrabold text-royal hover:text-royal-deep transition-colors border-b-2 border-royal pb-1"
                >
                  Lee la garantía completa
                  <ArrowRight size={13} strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-14 lg:mb-16">
            <Reveal>
              <Eyebrow>Lo que respalda el trabajo</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1.04]">
                Cinco credenciales, cero atajos.
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
            {PILLARS_ES.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.05}>
                  <article className="relative bg-surface border border-line p-7 md:p-9 shadow-card h-full">
                    <div className="absolute top-0 left-7 right-7 h-1 bg-royal" aria-hidden="true" />
                    <div className="flex items-start gap-5">
                      <span className="w-12 h-12 bg-gold-tint flex items-center justify-center shrink-0">
                        <Icon size={22} strokeWidth={2} className="text-royal" aria-hidden="true" />
                      </span>
                      <div className="flex-1">
                        <h3 className="font-sans font-black text-xl md:text-2xl text-ink tracking-tight leading-tight">
                          {p.title}
                        </h3>
                        <p className="mt-4 text-sm md:text-base text-graphite leading-relaxed font-medium">
                          {p.body}
                        </p>
                        <p className="mt-5 text-[11px] uppercase tracking-[0.16em] font-bold text-royal">
                          {p.proof}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24 lg:py-32 border-y border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Los estándares</Eyebrow>
                <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                  Cómo trabajamos, cada vez.
                </h2>
                <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
                  Las credenciales están firmadas y certificadas. Los estándares son cómo el taller realmente ha operado durante veintiocho años.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-3">
                {STANDARDS_ES.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.04}>
                    <li className="relative bg-surface border border-line p-5 md:p-6 shadow-card flex items-start gap-4">
                      <span className="font-sans font-black text-base text-gold tabular-nums leading-none w-7 shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <p className="font-sans font-black text-base md:text-lg text-ink tracking-tight leading-snug">
                          {s.label}
                        </p>
                        <p className="mt-2 text-sm md:text-base text-graphite leading-relaxed font-medium">
                          {s.body}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow>Confianza, por escrito</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              Tráelo a un taller que lo puede comprobar.
            </h2>
            <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
              Llámanos. Pasa por el taller. Déjanos las llaves. Nos vamos a ganar los próximos veintiocho años de la misma manera en que nos ganamos los pasados.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 bg-ink text-cream hover:bg-royal px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-colors"
              >
                <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
                Llama al {SITE.phone}
              </a>
              <Link
                href="/es/book"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-ink text-ink hover:bg-ink hover:text-cream px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-colors"
              >
                Agendar servicio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection locale="es" />
    </>
  );
}
