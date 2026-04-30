import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { generateBreadcrumbJsonLd, FAQ_ITEMS_ES } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Preguntas frecuentes | The Star Auto Service";
const DESCRIPTION =
  "Respuestas a las preguntas comunes sobre reparación de frenos, cambios de aceite, verificación estatal de Texas, garantía NAPA, servicio bilingüe y más en The Star Auto Service en Richardson, TX.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE.url}/es/faq`,
    languages: {
      "en-US": `${SITE.url}/faq`,
      "es-US": `${SITE.url}/es/faq`,
      "x-default": `${SITE.url}/faq`,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/es/faq`,
    siteName: SITE.name,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

const EXTRA_FAQS_ES = [
  {
    q: "¿Son Centro NAPA Auto Care?",
    a: "Sí. The Star Auto Service es un Centro NAPA Auto Care oficial, lo que significa que las reparaciones que califican están respaldadas por una garantía nacional de 24 meses / 24,000 millas válida en más de 17,000 Centros NAPA Auto Care en todo el país.",
  },
  {
    q: "¿En qué marcas y modelos trabajan?",
    a: "Cada marca y modelo común, nacionales e importados, gasolina e híbridos. Toyota, Honda, Ford, Chevrolet, GMC, Ram, Nissan, Hyundai, Kia, Mazda, Subaru, BMW, Mercedes-Benz, Audi, Volkswagen, Lexus, Acura, Infiniti y muchas más.",
  },
  {
    q: "¿Necesito cita o puedo llegar sin avisar?",
    a: "Aceptamos clientes sin cita siempre, lunes a viernes 8:00 AM – 6:30 PM y sábados 8:00 AM – 4:00 PM. Para trabajos más grandes nos ayuda que nos avises para tener las refacciones a la mano y atenderte más rápido.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: `Estamos en ${SITE.address.full}, sobre E Belt Line Road en Richardson, con acceso fácil desde la US-75 y el Dallas North Tollway.`,
  },
  {
    q: "¿Ofrecen financiamiento?",
    a: "No manejamos un programa propio de financiamiento, pero trabajamos contigo en las cotizaciones, priorizamos las reparaciones por seguridad y te ayudamos a escalonar el trabajo que no tiene que pasar todo de una vez.",
  },
  {
    q: "¿Cuánto tiempo llevan en el negocio?",
    a: "Desde 1998. Miguel Ibarra abrió el taller con una sola regla: nunca recomendar una reparación que el auto no necesite, y veintiocho años después la regla y la propiedad familiar siguen en pie.",
  },
  {
    q: "¿Dan cotizaciones sin costo?",
    a: "Trabajamos con evaluaciones honestas y cotizaciones claras desde el principio. Llámanos, cuéntanos qué está pasando y platicamos lo que probablemente cuesta antes de que se mueva una sola herramienta.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Efectivo, tarjeta de crédito y de débito. No insistimos en contratos de garantía extendida.",
  },
  {
    q: "¿Ofrecen aventones de cortesía o autos prestados?",
    a: "Ofrecemos aventones de cortesía dentro de Richardson cuando la agenda lo permite, llámanos antes y te decimos.",
  },
  {
    q: "¿Puedo dejar mi auto fuera del horario de atención?",
    a: "Sí. Tenemos un buzón para entregar fuera de horario. Estaciónate en el lote, llena el sobre, deja las llaves y te llamamos en la mañana antes de empezar cualquier trabajo.",
  },
];

export default function FAQPageEs() {
  if (!SPANISH_ENABLED) notFound();

  const all = [...FAQ_ITEMS_ES, ...EXTRA_FAQS_ES];

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Inicio", url: `${SITE.url}/es` },
    { name: "Preguntas frecuentes", url: `${SITE.url}/es/faq` },
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/es/faq#faq`,
    inLanguage: "es-US",
    mainEntity: all.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqJsonLd} />

      <section className="relative bg-ink overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1800&q=70&auto=format&fit=crop"
          alt="Mecánico trabajando bajo el cofre en The Star Auto Service en Richardson, TX"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/90 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <Eyebrow light>Preguntas frecuentes</Eyebrow>
          <h1 className="mt-5 font-sans font-black text-display-1 text-cream tracking-[-0.025em] leading-[0.98]">
            Las respuestas directas,
            <br />
            <span className="text-gold">por escrito.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-cream/90 leading-relaxed font-medium max-w-2xl">
            {all.length} de las preguntas que más nos hacen. ¿No ves la tuya? Llama al taller o mándanos un mensaje, te respondemos.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {all.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.03}>
                <details className="group relative bg-surface border border-line p-6 md:p-7 shadow-card open:shadow-card-lg transition-shadow">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <h2 className="font-sans font-black text-lg md:text-xl text-ink tracking-tight leading-snug">
                      {faq.q}
                    </h2>
                    <span
                      aria-hidden="true"
                      className="shrink-0 w-7 h-7 bg-royal-tint flex items-center justify-center transition-transform group-open:rotate-45 relative"
                    >
                      <span className="block w-3 h-0.5 bg-royal absolute" />
                      <span className="block w-0.5 h-3 bg-royal absolute" />
                    </span>
                  </summary>
                  <p className="mt-5 text-base text-graphite leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/es/contact"
              className="inline-flex items-center gap-2.5 bg-ink text-cream hover:bg-royal px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
            >
              Pregúntanos
              <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection locale="es" />
    </>
  );
}
