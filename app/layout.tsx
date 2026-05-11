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
  metadataBase: new URL("https://jiayangimmigration.com"),
  verification: { google: "3DtVqQJdYiZJCdtgYp5ybZVFQPBLOzJ0w-XwCP75ctk" },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "佳阳移民 JiaYang Immigration",
  "description": "加拿大持牌移民顾问公司，提供难民、家庭团聚、留学、旅游探亲、延期续签、入籍及枫叶卡更新等全面移民服务。",
  "url": "https://jiayangimmigration.com",
  "telephone": "+16042386686",
  "email": "jy.simon.ca@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5599 Cooney Rd, Unit 2",
    "addressLocality": "Richmond",
    "addressRegion": "BC",
    "postalCode": "V6X 3M6",
    "addressCountry": "CA"
  },
  "areaServed": "Canada",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "24",
    "bestRating": "5"
  },
  "openingHours": "Mo-Fr 10:00-18:00",
  "sameAs": ["https://www.google.com/maps?cid=jiayangimmigration"]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" className={`${notoSansSC.variable} ${lora.variable} h-full`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
