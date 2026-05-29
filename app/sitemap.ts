import { MetadataRoute } from "next"
import { servicePages, siteUrl } from "./services/service-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-05-29")

  return [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...servicePages.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
