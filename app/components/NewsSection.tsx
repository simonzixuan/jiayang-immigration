"use client"

import { useEffect, useState } from "react"
import { client } from "../../lib/sanity"
import { useLang } from "../context/lang"

type NewsItem = {
  _id: string
  title: string
  titleEn?: string
  publishedAt: string
  summary?: string
  summaryEn?: string
}

export default function NewsSection() {
  const { lang } = useLang()
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    client.fetch(`*[_type == "news"] | order(publishedAt desc)[0...6] {
      _id, title, titleEn, publishedAt, summary, summaryEn
    }`).then(setNews).catch(() => {})
  }, [])

  if (news.length === 0) return null

  return (
    <section className="bg-[#F7F9FC] px-5 py-24 sm:px-6" id="news">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-[#9B6727]">
            {lang === "zh" ? "移民动态" : "Immigration News"}
          </p>
          <h2 className="font-display text-4xl font-medium text-[#1B2B4E] md:text-5xl">
            {lang === "zh" ? "最新政策动态" : "Latest Updates"}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {news.map((item) => (
            <div key={item._id} className="rounded-2xl border border-[#DDE6F0] bg-white p-7 shadow-[0_14px_40px_rgba(16,33,59,0.05)] transition hover:-translate-y-1 hover:border-[#C4873A]">
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#C4873A]">
                {new Date(item.publishedAt).toLocaleDateString(lang === "zh" ? "zh-CN" : "en-CA", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <h3 className="mb-3 text-base font-medium leading-snug text-[#1B2B4E]">
                {lang === "zh" ? item.title : (item.titleEn || item.title)}
              </h3>
              <p className="text-sm leading-relaxed text-[#5A6A82]">
                {lang === "zh" ? item.summary : (item.summaryEn || item.summary)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
