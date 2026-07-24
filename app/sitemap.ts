import { MetadataRoute } from "next"
import { servicePages, siteUrl } from "./services/service-data"
import { client } from "../lib/sanity"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const validSlug = /^[a-z0-9]+(-[a-z0-9]+)*$/
  const articles: { slug: { current: string }, publishedAt: string }[] = await client
    .fetch(`*[_type == "news" && defined(slug.current)] { slug, publishedAt }`)
    .catch(() => [])

  return [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...servicePages.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.filter((article) => validSlug.test(article.slug.current)).map((article) => ({
      url: `${siteUrl}/blog/${article.slug.current}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]
}
