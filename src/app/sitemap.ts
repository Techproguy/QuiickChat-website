import type { MetadataRoute } from "next";

const SITE_URL = "https://quiickchat.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "yearly",
    priority: route === "" ? 1 : 0.3,
  }));
}
