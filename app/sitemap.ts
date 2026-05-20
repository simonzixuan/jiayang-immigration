import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://jiayangimmigration.com", lastModified: new Date("2025-05-01"), changeFrequency: "weekly", priority: 1 },
  ]
}
