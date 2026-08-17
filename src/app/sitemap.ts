import type { MetadataRoute } from "next";
import { HELP_CATEGORIES } from "@/content/help";
import { BLOG_POSTS } from "@/content/blog";

const SITE_URL = "https://quiickchat.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes = [
    "",
    "/features",
    "/download",
    "/security",
    "/about",
    "/careers",
    "/brand",
    "/blog",
    "/help",
    "/privacy",
    "/terms",
  ];
  const helpRoutes = HELP_CATEGORIES.flatMap((c) => [
    `/help/${c.slug}`,
    ...c.articles.map((a) => `/help/${c.slug}/${a.slug}`),
  ]);
  const blogRoutes = BLOG_POSTS.map((p) => `/blog/${p.slug}`);

  return [...staticRoutes, ...helpRoutes, ...blogRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/help" ? 0.7 : 0.5,
  }));
}
