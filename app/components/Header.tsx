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
      <nav className="fixed top-0 left-0 right-0 z-[60] border-b border-[#DDE6F0] bg-white/92 shadow-[0_12px_36px_rgba(16,33,59,0.08)] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-[4.5rem] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-icon.png"
              alt="logo"
              width={513}
              height={378}
              className="object-contain"
              style={{ width: "64px", height: "47px" }}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium text-[#10213B] tracking-wide">佳阳移民</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C4873A]">JiaYang Immigration</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.15em] uppercase text-[#52647C]">
            {links.map(link => (
              <a key={link.label} href={link.href} className="hover:text-[#10213B] transition-colors">
                {link.label}
              </a>
            ))}
            <button
              onClick={toggle}
              className="rounded-full border border-[#C4873A] text-[#9B6727] px-4 py-2 text-[10px] tracking-[0.2em] uppercase hover:bg-[#C4873A] hover:text-white transition-colors"
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-full border border-[#DDE6F0]"
            aria-label={open ? "关闭菜单" : "打开菜单"}
          >
            <span className={`block w-5 h-px bg-[#10213B] transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-5 h-px bg-[#10213B] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#10213B] transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[4.5rem] z-50 bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#10213B] text-base tracking-[0.3em] uppercase font-light"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { toggle(); setOpen(false) }}
            className="rounded-full border border-[#C4873A] text-[#9B6727] px-8 py-3 text-[11px] tracking-[0.2em] uppercase"
          >
            {lang === "zh" ? "Switch to English" : "切换中文"}
          </button>
        </div>
      )}
    </>
  )
}
