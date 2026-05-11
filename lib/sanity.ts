import { createClient } from "next-sanity"

export const client = createClient({
  projectId: "byyhmzdj",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
})

export async function getNews() {
  return client.fetch(`*[_type == "news"] | order(publishedAt desc)[0...6] {
    _id, title, titleEn, slug, publishedAt, summary, summaryEn
  }`)
}
