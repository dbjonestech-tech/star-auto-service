import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { SERVICE_PAGE_SLUGS } from "@/lib/serviceContent";
import { AREA_SLUGS } from "@/lib/areas";
import { RESOURCE_SLUGS } from "@/lib/resources";
import { SPANISH_ENABLED } from "@/lib/i18n";

type SitemapEntry = MetadataRoute.Sitemap[number];

/**
 * Build a sitemap entry that, when SPANISH_ENABLED is on, also advertises
 * the Spanish twin via xhtml:link / `alternates.languages`. The relative
 * path is the same in both locales (only the /es prefix differs).
 */
function pair(
  path: string,
  changeFrequency: SitemapEntry["changeFrequency"],
  priority: number,
  now: Date,
): MetadataRoute.Sitemap {
  const enUrl = `${SITE.url}${path}`;
  const esUrl = `${SITE.url}/es${path === "/" ? "" : path}`;

  if (!SPANISH_ENABLED) {
    return [{ url: enUrl, lastModified: now, changeFrequency, priority }];
  }

  const alternates = {
    languages: {
      "en-US": enUrl,
      "es-US": esUrl,
      "x-default": enUrl,
    },
  };

  return [
    { url: enUrl, lastModified: now, changeFrequency, priority, alternates },
    {
      url: esUrl,
      lastModified: now,
      changeFrequency,
      priority,
      alternates,
    },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: Array<[string, SitemapEntry["changeFrequency"], number]> = [
    ["/", "weekly", 1.0],
    ["/services", "monthly", 0.95],
    ["/about", "monthly", 0.85],
    ["/contact", "monthly", 0.85],
    ["/book", "monthly", 0.9],
    ["/reviews", "weekly", 0.85],
    ["/faq", "monthly", 0.7],
    ["/warranty", "yearly", 0.6],
    ["/resources", "weekly", 0.75],
    ["/symptoms", "monthly", 0.9],
    ["/pricing", "monthly", 0.9],
    ["/credentials", "yearly", 0.7],
    ["/track", "monthly", 0.7],
    ["/privacy", "yearly", 0.3],
    ["/terms", "yearly", 0.3],
  ];

  const staticEntries = staticPaths.flatMap(([path, freq, priority]) =>
    pair(path, freq, priority, now),
  );

  const serviceEntries = SERVICE_PAGE_SLUGS.flatMap((slug) =>
    pair(`/services/${slug}`, "monthly", 0.9, now),
  );

  const areaEntries = AREA_SLUGS.flatMap((slug) =>
    pair(`/areas/${slug}`, "monthly", 0.8, now),
  );

  const resourceEntries = RESOURCE_SLUGS.flatMap((slug) =>
    pair(`/resources/${slug}`, "monthly", 0.7, now),
  );

  return [...staticEntries, ...serviceEntries, ...areaEntries, ...resourceEntries];
}
