import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";

const TITLE = "Aviso de privacidad | The Star Auto Service";
const DESCRIPTION =
  "Cómo The Star Auto Service recopila, usa y protege la información que se envía a través de este sitio web.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE.url}/es/privacy`,
    languages: {
      "en-US": `${SITE.url}/privacy`,
      "es-US": `${SITE.url}/es/privacy`,
      "x-default": `${SITE.url}/privacy`,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/es/privacy`,
    siteName: SITE.name,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "abril de 2026";

export default function PrivacyPageEs() {
  if (!SPANISH_ENABLED) notFound();

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Inicio", url: `${SITE.url}/es` },
    { name: "Aviso de privacidad", url: `${SITE.url}/es/privacy` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="bg-cream pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Privacidad</Eyebrow>
            <h1 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              Aviso de privacidad.
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
              <h2>Qué recopilamos</h2>
              <p>
                Cuando llenas un formulario de contacto o de cita en este sitio, recopilamos la información que tú nos das: nombre, número de teléfono, correo electrónico opcional, año / marca / modelo opcional del vehículo, el servicio que te interesa y cualquier mensaje que escribas.
              </p>
              <p>
                <strong>No</strong> recopilamos información de pago a través de este sitio web. Los pagos se hacen en el taller, en persona.
              </p>

              <h2>Por qué la recopilamos</h2>
              <p>
                Usamos la información que envías para responder a tu consulta, agendar tu servicio y darle seguimiento al trabajo que se hace en tu vehículo. Solo eso.
              </p>

              <h2>Con quién la compartimos</h2>
              <p>
                No vendemos ni rentamos tu información. Los formularios se entregan al correo del taller a través de{" "}
                <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="text-royal hover:text-royal-deep underline-offset-4 hover:underline">
                  Resend
                </a>
                , nuestro proveedor de correo transaccional. Más allá de Resend manejando el correo en tránsito, ningún tercero recibe la información que envías.
              </p>

              <h2>Cookies y analítica</h2>
              <p>
                Este sitio usa{" "}
                <a href="https://vercel.com/docs/analytics" target="_blank" rel="noopener noreferrer" className="text-royal hover:text-royal-deep underline-offset-4 hover:underline">
                  Vercel Analytics
                </a>
                {" "}para estadísticas agregadas y respetuosas con la privacidad. Vercel Analytics no usa cookies y no recopila información personal identificable.
              </p>
              <p>
                Guardamos una pequeña marca en el localStorage de tu navegador para recordar si cerraste la barra de llamadas en móvil. Esa marca queda en tu dispositivo y nunca sale de él.
              </p>

              <h2>Cuánto tiempo la guardamos</h2>
              <p>
                Los envíos de formulario se quedan en el correo del taller para nuestros registros y para mantener el historial de servicio. Si quieres que borremos un registro tuyo, contáctanos con los datos de abajo.
              </p>

              <h2>Tus opciones</h2>
              <p>
                Puedes pedir que borremos la información que enviaste, pedir una copia de lo que tenemos o corregir cualquier cosa que esté mal. Escribe al correo del taller o llámanos y lo manejamos directamente.
              </p>

              <h2>Seguridad</h2>
              <p>
                Tomamos medidas razonables para proteger la información que envías. Los formularios tienen límites de velocidad y protección contra abuso automatizado. El sitio se sirve por HTTPS.
              </p>

              <h2>Cambios</h2>
              <p>
                Si esta política cambia de manera significativa, actualizamos la fecha al inicio de esta página.
              </p>

              <h2>Contacto</h2>
              <p>
                ¿Preguntas sobre esta política? Llama al taller al{" "}
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
