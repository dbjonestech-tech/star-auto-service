import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { UI } from "@/lib/translations/ui";
import { BookPageBody } from "@/components/page-bodies/BookPageBody";

const copy = UI.es.bookPage;

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: {
    canonical: `${SITE.url}/es/book`,
    languages: {
      "en-US": `${SITE.url}/book`,
      "es-US": `${SITE.url}/es/book`,
      "x-default": `${SITE.url}/book`,
    },
  },
  openGraph: {
    title: copy.metaTitle,
    description: copy.metaDescription,
    url: `${SITE.url}/es/book`,
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

export default function BookPageEs() {
  if (!SPANISH_ENABLED) notFound();
  return <BookPageBody locale="es" />;
}
