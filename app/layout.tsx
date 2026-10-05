import type { Metadata } from "next"
import { Noto_Sans_SC } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { LangProvider } from "./context/lang"

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

const seoKeywords = [
  "Richmond BC immigration services",
  "Richmond 持牌移民顾问 RCIC",
  "列治文移民服务",
  "RCIC",
  "CICC regulated immigration consultant",
  "CICC 监管移民顾问",
  "Chinese immigration services Richmond BC",
  "华人移民服务 Richmond",
  "普通话粤语移民咨询",
  "Greater Vancouver immigration services",
  "大温哥华移民服务",
  "Express Entry consultation Richmond",
  "加拿大 Express Entry 快速通道",
  "Canada PR application help",
  "加拿大 PR 永久居民申请",
  "Study permit application help",
  "加拿大学签申请",
  "Work permit application help",
  "加拿大工签申请",
  "工签转 PR 加拿大",
  "Visitor visa extension Canada",
  "加拿大旅游签续签",
  "Family sponsorship Canada",
  "加拿大家庭团聚移民",
  "Spousal sponsorship Canada",
  "加拿大配偶团聚移民",
  "Parent sponsorship Canada",
  "加拿大父母团聚移民",
  "Canadian citizenship application help",
  "加拿大入籍申请",
  "PR card renewal Canada",
  "枫叶卡更新",
  "佳阳移民 JiaYang Immigration",
]

export const metadata: Metadata = {
  title: "Richmond 持牌移民顾问 RCIC | 佳阳移民 | 首次咨询免费",
  description: "佳阳移民位于 Richmond BC，由加拿大持牌 RCIC 顾问提供配偶团聚、父母团聚、学签、工签、PR、入籍和枫叶卡更新服务。中英双语沟通，首次咨询免费。",
  metadataBase: new URL("https://jiayangimmigration.com"),
  verification: { google: "3DtVqQJdYiZJCdtgYp5ybZVFQPBLOzJ0w-XwCP75ctk" },
  keywords: seoKeywords,
  alternates: {
    canonical: "https://jiayangimmigration.com",
  },
  openGraph: {
    title: "Richmond 持牌移民顾问 RCIC | 佳阳移民 | 首次咨询免费",
    description: "Richmond BC RCIC 持牌移民顾问，提供配偶团聚、父母团聚、学签、工签、Express Entry、入籍和枫叶卡更新服务。中英双语，首次咨询免费。",
    url: "https://jiayangimmigration.com",
    siteName: "佳阳移民 JiaYang Immigration",
    locale: "zh_CN",
    alternateLocale: ["en_CA"],
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "佳阳移民 JiaYang Immigration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richmond 持牌移民顾问 RCIC | 佳阳移民",
    description: "配偶团聚、父母团聚、学签、工签、PR、入籍和枫叶卡更新。首次咨询免费。",
    images: ["/og-image.png"],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  "name": "佳阳移民 JiaYang Immigration",
  "image": "https://jiayangimmigration.com/logo.png",
  "description": "Richmond BC RCIC 持牌移民顾问公司，受 CICC 监管，提供难民、家庭团聚、留学、旅游探亲、延期续签、入籍及枫叶卡更新等全面移民服务。",
  "url": "https://jiayangimmigration.com",
  "telephone": "+16042386686",
  "email": "jy.simon.ca@gmail.com",
  "priceRange": "$1,500-$4,000 CAD",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5599 Cooney Rd, Unit 2",
    "addressLocality": "Richmond",
    "addressRegion": "BC",
    "postalCode": "V6X 0N8",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.1733266,
    "longitude": -123.1319772
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "10:00",
    "closes": "17:30"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "24"
  },
  "areaServed": ["Richmond BC", "Vancouver", "Burnaby", "Surrey", "Coquitlam", "New Westminster", "Delta", "Greater Vancouver", "British Columbia", "Canada", "China"],
  "knowsAbout": seoKeywords,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Canada Immigration Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Express Entry consultation Richmond" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Canada PR application help" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Study permit application help" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Work permit application help" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Family sponsorship Canada" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Visitor visa extension Canada" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Canadian citizenship application help" } }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" className={`${notoSansSC.variable} h-full`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <LangProvider>{children}</LangProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-04DZ8SYV48" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-04DZ8SYV48');`}</Script>
      </body>
    </html>
  )
}
