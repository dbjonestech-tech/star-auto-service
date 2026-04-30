import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { UI } from "@/lib/translations/ui";
import { ResourcesIndexBody } from "@/components/page-bodies/ResourcesIndexBody";

const copy = UI.es.resourcesIndex;

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: {
    canonical: `${SITE.url}/es/resources`,
    languages: {
      "en-US": `${SITE.url}/resources`,
      "es-US": `${SITE.url}/es/resources`,
      "x-default": `${SITE.url}/resources`,
    },
  },
  openGraph: {
    title: copy.metaTitle,
    description: copy.metaDescription,
    url: `${SITE.url}/es/resources`,
    siteName: SITE.name,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

export default function ResourcesIndexEs() {
  if (!SPANISH_ENABLED) notFound();
  return <ResourcesIndexBody locale="es" />;
}
