"use client"

import { useState } from "react"
import { useLang } from "../context/lang"

export default function FloatingContact() {
  const { lang } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="flex flex-col items-end gap-3 motion-safe:animate-[contact-pop_0.2s_ease-out_both]">
          <a
            href="tel:+16042386686"
            className="flex min-w-[15rem] items-center gap-3 rounded-2xl border border-[#DDE6F0] bg-white px-4 py-3 text-[#10213B] shadow-[0_18px_46px_rgba(16,33,59,0.18)] transition-colors hover:border-[#C4873A]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F1E8] text-[#C4873A]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7.1 4.8l1.8-1.1c.9-.6 2.1-.3 2.6.7l1.1 2.1c.4.8.2 1.7-.4 2.3l-1.1 1c.8 1.5 2 2.7 3.5 3.5l1-1.1c.6-.7 1.6-.8 2.3-.4l2.1 1.1c1 .5 1.3 1.7.7 2.6l-1.1 1.8c-.5.8-1.4 1.2-2.3 1.1C10.9 17.8 6.2 13.1 5.7 6.9c-.1-.9.4-1.7 1.4-2.1z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-sm whitespace-nowrap">+1 (604) 238-6686</span>
          </a>
          <div className="flex min-w-[15rem] items-center gap-3 rounded-2xl border border-[#DDE6F0] bg-white px-4 py-3 text-[#10213B] shadow-[0_18px_46px_rgba(16,33,59,0.18)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F1E8] text-[#C4873A]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 6.8A6.4 6.4 0 0111.6 1h.8A6.4 6.4 0 0119 7.3a6.4 6.4 0 01-6.6 6.3h-.7l-3.9 2.1.8-3.4A6.1 6.1 0 015 6.8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 7.6h.01M12 7.6h.01M15 7.6h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <p className="text-xs text-[#718096]">WeChat</p>
              <p className="text-sm text-[#10213B]">Kris0214</p>
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C4873A] text-white shadow-[0_18px_46px_rgba(196,135,58,0.34)] transition-colors hover:bg-[#A06A20]"
        aria-expanded={open}
        aria-label={lang === "zh" ? "联系我们" : "Contact Us"}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 6.8A6.4 6.4 0 0111.6 1h.8A6.4 6.4 0 0119 7.3a6.4 6.4 0 01-6.6 6.3h-.7l-3.9 2.1.8-3.4A6.1 6.1 0 015 6.8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 7.6h.01M12 7.6h.01M15 7.6h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  )
}
