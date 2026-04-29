import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { SERVICE_PAGE_SLUGS } from "@/lib/serviceContent";
import { AREA_SLUGS } from "@/lib/areas";
import { RESOURCE_SLUGS } from "@/lib/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE.url}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE.url}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/warranty`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE.url}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${SITE.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceEntries: MetadataRoute.Sitemap = SERVICE_PAGE_SLUGS.map((slug) => ({
    url: `${SITE.url}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const areaEntries: MetadataRoute.Sitemap = AREA_SLUGS.map((slug) => ({
    url: `${SITE.url}/areas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const resourceEntries: MetadataRoute.Sitemap = RESOURCE_SLUGS.map((slug) => ({
    url: `${SITE.url}/resources/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...areaEntries, ...resourceEntries];
}
