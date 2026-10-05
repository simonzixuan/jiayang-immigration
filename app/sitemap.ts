import { MetadataRoute } from "next"
import { servicePages, siteUrl } from "./services/service-data"
import { client } from "../lib/sanity"

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const validSlug = /^[a-z0-9]+(-[a-z0-9]+)*$/
  const articles: { slug: { current: string }, _updatedAt: string }[] = await client
    .fetch(`*[_type == "news" && defined(slug.current)] { slug, _updatedAt }`)
    .catch(() => [])

  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/nursing`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/nursing/bridging-program`, changeFrequency: "monthly", priority: 0.7 },
    ...servicePages.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.filter((article) => validSlug.test(article.slug.current)).map((article) => ({
      url: `${siteUrl}/blog/${article.slug.current}`,
      lastModified: new Date(article._updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]
}
