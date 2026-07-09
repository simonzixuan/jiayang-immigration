export const dynamic = "force-dynamic"

import { client } from "../../../lib/sanity"
import { PortableText } from "next-sanity"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

async function getArticle(slug: string) {
  return client.fetch(
    `*[_type == "news" && slug.current == $slug][0] {
      _id, title, titleEn, publishedAt, summary, summaryEn, body
    }`,
    { slug }
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) return {}
  return {
    title: `${article.title} | 佳阳移民`,
    description: article.summary || "",
    openGraph: { title: article.title, description: article.summary || "" },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const date = new Date(article.publishedAt).toLocaleDateString("zh-CN", {
    year: "numeric", month: "long", day: "numeric",
  })

  return (
    <main className="min-h-screen bg-white px-5 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link href="/#news" className="mb-8 inline-flex items-center gap-2 text-sm text-[#9B6727] hover:underline">
          ← 返回动态列表
        </Link>

        <p className="mb-4 text-xs uppercase tracking-widest text-[#C4873A]">{date}</p>
        <h1 className="mb-6 font-display text-3xl font-medium leading-tight text-[#1B2B4E] md:text-4xl">
          {article.title}
        </h1>

        {article.summary && (
          <p className="mb-10 text-lg leading-relaxed text-[#5A6A82] border-l-4 border-[#C4873A] pl-4">
            {article.summary}
          </p>
        )}

        {article.body && (
          <div className="prose prose-lg max-w-none prose-headings:text-[#1B2B4E] prose-a:text-[#C4873A] prose-strong:text-[#1B2B4E]">
            <PortableText value={article.body} />
          </div>
        )}

        <div className="mt-16 rounded-2xl bg-[#F7F9FC] p-8 text-center">
          <h2 className="mb-3 text-xl font-medium text-[#1B2B4E]">需要专业移民咨询？</h2>
          <p className="mb-6 text-[#5A6A82]">佳阳移民提供免费初步咨询，RCIC持牌顾问为您解答。</p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-[#C4873A] px-8 py-3 text-sm font-medium text-white hover:bg-[#9B6727] transition"
          >
            立即预约免费咨询
          </Link>
        </div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  const articles = await client.fetch(
    `*[_type == "news" && defined(slug.current)] { "slug": slug.current }`
  )
  return articles
    .filter((a: { slug: string }) => a.slug && !a.slug.startsWith("http") && a.slug.length < 200)
    .map((a: { slug: string }) => ({ slug: a.slug }))
}
