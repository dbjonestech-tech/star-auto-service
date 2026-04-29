import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/track/", // unguessable per-repair links — keep out of search index
        ],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
