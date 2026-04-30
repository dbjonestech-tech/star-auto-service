import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";

const TITLE = "Términos del servicio | The Star Auto Service";
const DESCRIPTION =
  "Términos de uso de thestarautoservice.com y la relación entre los visitantes, los clientes y el taller.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE.url}/es/terms`,
    languages: {
      "en-US": `${SITE.url}/terms`,
      "es-US": `${SITE.url}/es/terms`,
      "x-default": `${SITE.url}/terms`,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/es/terms`,
    siteName: SITE.name,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "abril de 2026";

export default function TermsPageEs() {
  if (!SPANISH_ENABLED) notFound();

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Inicio", url: `${SITE.url}/es` },
    { name: "Términos del servicio", url: `${SITE.url}/es/terms` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="bg-cream pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Términos</Eyebrow>
            <h1 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              Términos del servicio.
            </h1>
            <p className="mt-6 text-base text-graphite font-medium">
              Última actualización: {LAST_UPDATED}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Prose>
              <h2>Uso del sitio</h2>
              <p>
                Este sitio existe para compartir información sobre The Star Auto Service en Richardson, Texas, y para que sea fácil contactarnos o pedir una cita de servicio. Al usar el sitio, aceptas usarlo para esos fines y no abusar de él.
              </p>

              <h2>Cotizaciones y estimaciones</h2>
              <p>
                Cualquier precio, tiempo de entrega o recomendación de reparación que se hable en el sitio, por teléfono o por formulario es una <strong>estimación</strong>. El acuerdo vinculante de la reparación es la orden de trabajo firmada que se crea en el taller después de inspeccionar el vehículo en persona.
              </p>

              <h2>Garantía</h2>
              <p>
                Como Centro NAPA Auto Care, las reparaciones que califican están respaldadas por la garantía nacional de tranquilidad de NAPA por 24 meses / 24,000 millas, válida en los Centros NAPA Auto Care participantes en todo el país. Los términos específicos, las refacciones cubiertas y las exclusiones se rigen por NAPA. Pídenos los detalles antes de autorizar el trabajo y te explicamos lo que aplica para tu reparación.
              </p>

              <h2>Exactitud</h2>
              <p>
                Tratamos de mantener la información del sitio al día y correcta. Si algo se ve mal, horarios, servicios ofrecidos o lo que sea, avísanos.
              </p>

              <h2>Marcas registradas</h2>
              <p>
                &ldquo;NAPA&rdquo; y &ldquo;NAPA Auto Care Center&rdquo; son marcas registradas de sus respectivos dueños y se usan aquí de acuerdo con el programa. &ldquo;ASE&rdquo; es marca registrada del National Institute for Automotive Service Excellence. &ldquo;The Star Auto Service&rdquo; es el nombre comercial del taller en Richardson, Texas.
              </p>

              <h2>Servicios de terceros</h2>
              <p>
                El sitio embebe Google Maps para ubicación e indicaciones y usa Vercel Analytics para estadísticas de tráfico agregadas. Esos servicios se rigen por sus propios términos.
              </p>

              <h2>Limitación de responsabilidad</h2>
              <p>
                La información en este sitio se provee &ldquo;tal cual&rdquo;. En la medida que la ley lo permita, el taller no es responsable por daños indirectos o consecuentes derivados del uso del sitio en sí. Nuestra garantía de servicio sobre el trabajo de reparación se describe en la sección &ldquo;Garantía&rdquo; de arriba y en tu orden de trabajo.
              </p>

              <h2>Ley aplicable</h2>
              <p>
                Estos términos se rigen por las leyes del Estado de Texas, y cualquier controversia se resolverá en los tribunales del condado de Dallas, Texas.
              </p>

              <h2>Cambios</h2>
              <p>
                Si estos términos cambian de manera significativa, actualizamos la fecha al inicio de esta página.
              </p>

              <h2>Contacto</h2>
              <p>
                ¿Preguntas sobre estos términos? Llama al taller al{" "}
                <a href={`tel:${SITE.phoneRaw}`} className="text-royal hover:text-royal-deep font-semibold tabular-nums">
                  {SITE.phone}
                </a>
                {" "}o mándanos un mensaje por la{" "}
                <Link href="/es/contact" className="text-royal hover:text-royal-deep underline-offset-4 hover:underline">
                  página de contacto
                </Link>
                . El taller está en {SITE.address.full}.
              </p>
            </Prose>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose-shop space-y-8 text-base md:text-lg text-graphite leading-relaxed font-medium [&_h2]:font-sans [&_h2]:font-black [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-ink [&_h2]:tracking-tight [&_h2]:leading-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_strong]:text-ink [&_strong]:font-bold">
      {children}
    </div>
  );
}
