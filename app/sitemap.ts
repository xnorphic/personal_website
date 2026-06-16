import type { MetadataRoute } from "next";
import { BLOG_POSTS, SITE } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: "monthly", priority: 1.0, lastModified: now },
    { url: `${SITE.url}/resume`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${SITE.url}/projects`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${SITE.url}/blog`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${SITE.url}/contact`, changeFrequency: "yearly", priority: 0.7, lastModified: now },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...blogRoutes];
}
