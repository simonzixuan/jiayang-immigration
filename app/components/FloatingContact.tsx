"use client"

import { useState } from "react"
import { useLang } from "../context/lang"

export default function FloatingContact() {
  const { lang } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <>
          <a
            href="tel:+16042386686"
            className="flex items-center gap-3 bg-[#1B2B4E] border border-[#C4873A] text-white px-4 py-3 shadow-lg hover:bg-[#2A3E60] transition-colors"
          >
            <span className="text-[#C4873A] text-lg">📞</span>
            <span className="text-sm whitespace-nowrap">+1 (604) 238-6686</span>
          </a>
          <div className="flex items-center gap-3 bg-[#1B2B4E] border border-[#C4873A] text-white px-4 py-3 shadow-lg">
            <span className="text-[#C4873A] text-lg">💬</span>
            <div>
              <p className="text-xs text-[#A8B8D0]">WeChat</p>
              <p className="text-sm">Kris0214</p>
            </div>
          </div>
        </>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-[#C4873A] text-white shadow-lg hover:bg-[#A06A20] transition-colors flex items-center justify-center"
        aria-label={lang === "zh" ? "联系我们" : "Contact Us"}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4L16 16M16 4L4 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="white" strokeWidth="2"/>
            <path d="M22 6L12 13 2 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </button>
    </div>
  )
}
