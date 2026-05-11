"use client"

import { useState } from "react"
import Image from "next/image"
import { useLang } from "../context/lang"

const nav = {
  zh: [
    { label: "服务", href: "#services" },
    { label: "关于我们", href: "#about" },
    { label: "客户评价", href: "#testimonials" },
    { label: "联系我们", href: "#contact" },
  ],
  en: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
}

export default function Header() {
  const { lang, toggle } = useLang()
  const [open, setOpen] = useState(false)
  const links = nav[lang]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-[#1B2B4E]/95 backdrop-blur-sm border-b border-[#2A3E60]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Image src="/LOGO.png" alt="佳阳移民 JiaYang Immigration" width={100} height={40} className="h-10 w-auto object-contain" style={{ mixBlendMode: "screen" }} />
          </a>
          <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.15em] uppercase text-[#A8B8D0]">
            {links.map(link => (
              <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
            <button
              onClick={toggle}
              className="border border-[#C4873A] text-[#C4873A] px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase hover:bg-[#C4873A] hover:text-white transition-colors"
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10"
            aria-label={open ? "关闭菜单" : "打开菜单"}
          >
            <span className={`block w-5 h-px bg-white transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 top-16 z-50 bg-[#1B2B4E] flex flex-col items-center justify-center gap-10 md:hidden">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white text-base tracking-[0.3em] uppercase font-light"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { toggle(); setOpen(false) }}
            className="border border-[#C4873A] text-[#C4873A] px-8 py-3 text-[11px] tracking-[0.2em] uppercase"
          >
            {lang === "zh" ? "Switch to English" : "切换中文"}
          </button>
        </div>
      )}
    </>
  )
}
