import type { Metadata } from "next"
import { Noto_Sans_SC, Lora } from "next/font/google"
import "./globals.css"

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "佳阳移民 | JiaYang Immigration — 加拿大专业移民顾问",
  description: "佳阳移民提供难民、家庭团聚、留学、旅游探亲、延期续签、入籍及枫叶卡更新等全面移民服务。持牌RCIC移民顾问，专业可信赖。",
  metadataBase: new URL("https://jiayangimmigration.ca"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" className={`${notoSansSC.variable} ${lora.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
