"use client"

import Link from "next/link"
import Header from "../components/Header"
import FloatingContact from "../components/FloatingContact"
import { useLang } from "../context/lang"

export default function NursingLayout({ children }: { children: React.ReactNode }) {
  const { lang } = useLang()

  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#10213B]">
      <Header />
      {children}
      <section className="bg-[#10213B] px-5 py-16 text-white sm:px-6" id="nursing-contact">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#C4873A]">{lang === "zh" ? "与佳阳移民交流" : "Talk to JiaYang Immigration"}</p>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">{lang === "zh" ? "一起规划您的下一步" : "Let’s plan your next step"}</h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#A8B8D0]">{lang === "zh" ? "告诉我们您的护理教育、工作经历与目标。我们将帮助您了解适合自己的准备方向。" : "Tell us about your nursing education, experience and goals. We’ll help you understand where to begin."}</p>
            <Link href="/#contact" className="mt-7 inline-block rounded-full bg-[#C4873A] px-7 py-4 text-sm font-medium text-white hover:bg-[#A06A20]">{lang === "zh" ? "预约免费咨询" : "Book a free consultation"}</Link>
          </div>
          <address className="space-y-4 text-base leading-relaxed not-italic text-[#D9E4F2]">
            <p className="font-medium text-white">JiaYang Immigration Consulting Services</p>
            <p>5599 Cooney Rd, Unit 2<br />Richmond, BC V6X 0N8, Canada</p>
            <p><a href="tel:+16042386686" className="hover:text-[#C4873A]">+1 (604) 238-6686</a><br /><a href="mailto:jy.simon.ca@gmail.com" className="break-all hover:text-[#C4873A]">jy.simon.ca@gmail.com</a></p>
            <p>WeChat: Kris0214</p>
            <p className="text-sm text-[#A8B8D0]">{lang === "zh" ? "RCIC 注册编号" : "RCIC Registration Numbers"}: R529798; R713063</p>
          </address>
        </div>
      </section>
      <footer className="bg-[#0B1728] px-5 py-7 text-center text-xs text-[#A8B8D0]">© {new Date().getFullYear()} 佳阳移民 JiaYang Immigration</footer>
      <FloatingContact />
    </main>
  )
}
