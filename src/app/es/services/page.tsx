import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { UI } from "@/lib/translations/ui";
import { ServicesIndexBody } from "@/components/page-bodies/ServicesIndexBody";

const copy = UI.es.servicesIndex;

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: {
    canonical: `${SITE.url}/es/services`,
    languages: {
      "en-US": `${SITE.url}/services`,
      "es-US": `${SITE.url}/es/services`,
      "x-default": `${SITE.url}/services`,
    },
  },
  openGraph: {
    title: copy.metaTitle,
    description: copy.metaDescription,
    url: `${SITE.url}/es/services`,
    siteName: SITE.name,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: copy.metaTitle,
    description: copy.metaDescription,
  },
};

export default function ServicesPageEs() {
  if (!SPANISH_ENABLED) notFound();
  return <ServicesIndexBody locale="es" />;
}
