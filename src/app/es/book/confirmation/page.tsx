import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Phone, Clock, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { Eyebrow } from "@/components/ui/Eyebrow";

const TITLE = "Solicitud recibida | The Star Auto Service";
const DESCRIPTION =
  "Gracias por reservar con The Star Auto Service. Te llamamos en un día hábil.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE.url}/es/book/confirmation`,
    languages: {
      "en-US": `${SITE.url}/book/confirmation`,
      "es-US": `${SITE.url}/es/book/confirmation`,
      "x-default": `${SITE.url}/book/confirmation`,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/es/book/confirmation`,
    siteName: SITE.name,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function BookConfirmationPageEs() {
  if (!SPANISH_ENABLED) notFound();

  return (
    <section className="bg-cream py-16 md:py-24 lg:py-32 min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative bg-surface border border-line p-10 md:p-14 shadow-card-lg">
          <div className="absolute top-0 left-10 right-10 h-0.5 bg-emerald" aria-hidden="true" />

          <div className="w-16 h-16 bg-emerald/15 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-emerald" size={32} strokeWidth={2} aria-hidden="true" />
          </div>

          <Eyebrow>Solicitud recibida</Eyebrow>
          <h1 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
            La recibimos. Te llamamos pronto.
          </h1>
          <p className="mt-7 text-base md:text-lg text-graphite leading-relaxed font-medium max-w-xl mx-auto">
            Gracias por reservar con The Star Auto Service. Revisamos tu solicitud y te llamamos en un día hábil para confirmar la hora. Para algo urgente, por favor llama al taller directamente.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2.5 bg-ink text-cream hover:bg-royal px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
            >
              <Phone size={14} strokeWidth={2.5} aria-hidden="true" />
              Llama al {SITE.phone}
            </a>
            <Link
              href="/es"
              className="inline-flex items-center gap-2.5 border-2 border-ink text-ink hover:bg-ink hover:text-cream px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="flex items-start gap-4">
            <span className="w-11 h-11 bg-royal-tint flex items-center justify-center shrink-0">
              <Clock className="text-royal" size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite">
                Horario del taller
              </p>
              <p className="mt-2 text-sm text-ink font-medium tabular-nums">
                Lun–Vie {SITE.hours.weekday}
              </p>
              <p className="text-sm text-ink font-medium tabular-nums">
                Sábado {SITE.hours.saturday}
              </p>
              <p className="text-sm text-ink font-medium">Domingo Cerrado</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="w-11 h-11 bg-gold-tint flex items-center justify-center shrink-0">
              <MapPin className="text-royal" size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite">
                Sin cita
              </p>
              <p className="mt-2 text-sm text-graphite leading-relaxed font-medium">
                Siempre bienvenidos. El mismo día cuando se puede.
              </p>
            </div>
          </div>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${SITE.address.full} en Google Maps`}
            className="group flex items-start gap-4 -m-2 p-2 hover:bg-paper transition-colors"
          >
            <span className="w-11 h-11 bg-royal-tint flex items-center justify-center shrink-0">
              <MapPin className="text-royal" size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite">
                Visítanos, abrir en Maps
              </p>
              <p className="mt-2 text-sm text-ink font-medium leading-snug group-hover:text-royal transition-colors">
                {SITE.address.street}
              </p>
              <p className="text-sm text-ink font-medium leading-snug group-hover:text-royal transition-colors">
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
