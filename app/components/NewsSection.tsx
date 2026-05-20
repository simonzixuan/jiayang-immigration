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
    <section className="py-24 px-6 bg-[#F5F7FB]" id="news">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4873A] mb-4">
            {lang === "zh" ? "移民动态" : "Immigration News"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[#1B2B4E]">
            {lang === "zh" ? "最新政策动态" : "Latest Updates"}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item._id} className="bg-white border border-[#E5E9F0] p-8 hover:border-[#C4873A] transition-colors">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4873A] mb-4">
                {new Date(item.publishedAt).toLocaleDateString(lang === "zh" ? "zh-CN" : "en-CA", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <h3 className="text-base font-medium text-[#1B2B4E] mb-3 leading-snug">
                {lang === "zh" ? item.title : (item.titleEn || item.title)}
              </h3>
              <p className="text-[#5A6A82] text-sm leading-relaxed">
                {lang === "zh" ? item.summary : (item.summaryEn || item.summary)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
