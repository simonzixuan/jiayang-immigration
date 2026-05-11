"use client"

import { useLang } from "../context/lang"
import dynamic from "next/dynamic"

const NewsSection = dynamic(() => import("./NewsSection"), { ssr: false })

export default function NewsSectionWrapper() {
  const { lang } = useLang()
  return <NewsSection lang={lang} />
}
