"use client"

import dynamic from "next/dynamic"

const NewsSection = dynamic(() => import("./NewsSection"), { ssr: false })

export default function NewsSectionWrapper() {
  return <NewsSection />
}
