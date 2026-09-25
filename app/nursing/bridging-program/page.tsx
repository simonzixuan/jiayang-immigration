import type { Metadata } from "next"
import BridgingContent from "./BridgingContent"

export const metadata: Metadata = {
  title: "什么是衔接课程 | What Is a Bridging Program | 佳阳移民",
  description: "了解护理衔接课程的作用、实践内容和申请条件。Understand bridging education for internationally educated nurses in British Columbia.",
  alternates: { canonical: "/nursing/bridging-program", languages: {} },
  openGraph: { title: "What is a Bridging Program? | JiaYang Immigration", description: "Understanding bridging education for internationally educated nurses.", url: "/nursing/bridging-program", images: [{ url: "/nursing-career.png", width: 1536, height: 1024, alt: "AI-generated illustration of two nurses" }] },
  twitter: { card: "summary_large_image", title: "What is a Bridging Program? | JiaYang Immigration", description: "Understanding bridging education for internationally educated nurses.", images: ["/nursing-career.png"] },
}

export default function BridgingPage() {
  return <BridgingContent />
}
