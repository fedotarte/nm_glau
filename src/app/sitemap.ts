import type { MetadataRoute } from "next";

import { getDoneArticles } from "@/content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const articleEntries: MetadataRoute.Sitemap = getDoneArticles().map(
    (article) => ({
      url: `${SITE_URL}/articles/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...articleEntries,
  ];
}
