import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { UI } from "@/lib/translations/ui";
import { BookConfirmationBody } from "@/components/page-bodies/BookConfirmationBody";

const copy = UI.en.bookConfirmation;

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: {
    canonical: `${SITE.url}/book/confirmation`,
    languages: SPANISH_ENABLED
      ? {
          "en-US": `${SITE.url}/book/confirmation`,
          "es-US": `${SITE.url}/es/book/confirmation`,
          "x-default": `${SITE.url}/book/confirmation`,
        }
      : undefined,
  },
  robots: { index: false, follow: false },
};

export default function BookConfirmationPage() {
  return <BookConfirmationBody locale="en" />;
}
