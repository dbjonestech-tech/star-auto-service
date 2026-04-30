import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { getService } from "@/lib/constants.es";
import { getServiceContent, SERVICE_PAGE_SLUGS } from "@/lib/serviceContent";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { UI, interpolate } from "@/lib/translations/ui";
import { ServiceDetailBody } from "@/components/page-bodies/ServiceDetailBody";

export function generateStaticParams() {
  return SERVICE_PAGE_SLUGS.map((slug) => ({ slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug, "es");
  const content = getServiceContent(slug, "es");
  const copy = UI.es.serviceDetail;

  if (!service || !content) return { title: copy.notFoundTitle };

  const title = interpolate(copy.metaTitleTemplate, { title: service.title });
  const description = interpolate(copy.metaDescriptionTemplate, {
    subhead: content.subhead,
  });

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `${SITE.url}/es/services/${slug}`,
      languages: {
        "en-US": `${SITE.url}/services/${slug}`,
        "es-US": `${SITE.url}/es/services/${slug}`,
        "x-default": `${SITE.url}/services/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/es/services/${slug}`,
      siteName: SITE.name,
      locale: "es_US",
      alternateLocale: ["en_US"],
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ServiceDetailPageEs({ params }: { params: Params }) {
  if (!SPANISH_ENABLED) notFound();
  const { slug } = await params;
  return <ServiceDetailBody slug={slug} locale="es" />;
}
