import type { Metadata } from "next"
import NursingContent from "./NursingContent"

export const metadata: Metadata = {
  title: "加拿大护理职业发展 | Nursing Career in Canada | 佳阳移民",
  description: "为中国护理毕业生及在职护士提供赴加拿大的职业路径、执照准备信息及移民咨询。Explore your nursing career pathway to Richmond, British Columbia.",
  alternates: { canonical: "/nursing", languages: {} },
  openGraph: {
    title: "Your nursing career in Canada starts here | JiaYang Immigration",
    description: "Study · Work · Immigrate. Explore a nursing career pathway from China to British Columbia.",
    url: "/nursing",
    images: [{ url: "/nursing-career.png", width: 1536, height: 1024, alt: "AI-generated illustration of two nurses" }],
  },
  twitter: { card: "summary_large_image", title: "Nursing Career in Canada | JiaYang Immigration", description: "A nursing career pathway from China to British Columbia.", images: ["/nursing-career.png"] },
}

export default function NursingPage() {
  return <NursingContent />
}
