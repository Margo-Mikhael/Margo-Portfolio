import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

// Static export: render this route to a file at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",
          "/api/",
          "/og/",
          "/rss/",
          "/vcard/",
          "/llms.txt",
          "/llms-full.txt",
          "/blog.mdx/",
          "/*.mdx",
          "/*.md",
        ],
      },
    ],
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
  };
}
