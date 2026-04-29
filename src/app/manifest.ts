import type { MetadataRoute } from "next";

/**
 * PWA manifest. Generated at build time so the Next.js dynamic icon URLs
 * (which carry content hashes) stay in sync with the actual generated
 * routes. Replaces the static /public/manifest.json.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Star Auto Service",
    short_name: "Star Auto",
    description:
      "Family-owned auto repair in Richardson, TX since 1998. ASE-Certified, NAPA Auto Care Center, bilingual service.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F7F4ED",
    theme_color: "#0B3D91",
    icons: [
      {
        src: "/icon1",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon2",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
