"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Lang = "zh" | "en"
const LangContext = createContext<{ lang: Lang; toggle: () => void }>({ lang: "zh", toggle: () => {} })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh")

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, toggle: () => setLang(l => l === "zh" ? "en" : "zh") }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
