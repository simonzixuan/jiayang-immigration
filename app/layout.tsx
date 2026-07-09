import type { Metadata } from "next"
import { Noto_Sans_SC, Lora } from "next/font/google"
import Script from "next/script"
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

const seoKeywords = [
  "Richmond BC immigration services",
  "Richmond immigration services",
  "Canada immigration services Richmond",
  "Chinese immigration services Richmond BC",
  "Mandarin immigration services Richmond",
  "Cantonese immigration services Richmond",
  "Immigration consultation Richmond BC",
  "RCIC immigration consultant Richmond BC",
  "CICC regulated immigration consultant",
  "licensed immigration consultant Richmond",
  "Immigration help Richmond BC",
  "Immigration service near Richmond BC",
  "Vancouver immigration services",
  "Greater Vancouver immigration services",
  "BC immigration services",
  "Canada immigration consultation",
  "Immigrate to Canada consultation",
  "Express Entry consultation Richmond",
  "Express Entry help BC",
  "Canada PR application help",
  "Permanent residence application help",
  "Study permit application help",
  "Work permit application help",
  "Visitor visa extension Canada",
  "Family sponsorship Canada",
  "Spousal sponsorship Canada",
  "Parent sponsorship Canada",
  "Canadian citizenship application help",
  "Canada immigration document preparation",
  "Richmond 移民服务",
  "列治文移民服务",
  "列治文加拿大移民咨询",
  "温哥华移民服务",
  "大温移民服务",
  "BC 省移民服务",
  "加拿大移民咨询",
  "Richmond 持牌移民顾问",
  "列治文持牌移民顾问",
  "加拿大 RCIC 移民顾问",
  "CICC 监管移民顾问",
  "加拿大移民申请",
  "加拿大 PR 申请",
  "加拿大永久居民申请",
  "加拿大快速通道申请",
  "加拿大 Express Entry 咨询",
  "加拿大工签申请",
  "加拿大学签申请",
  "加拿大旅游签续签",
  "加拿大配偶团聚移民",
  "加拿大父母团聚移民",
  "加拿大入籍申请",
  "加拿大移民材料准备",
  "华人移民服务 Richmond",
  "中文移民服务列治文",
  "普通话移民咨询",
  "粤语移民咨询",
  "留学生移民加拿大",
  "工签转 PR 加拿大",
]

export const metadata: Metadata = {
  title: "Richmond 持牌移民顾问 RCIC | 佳阳移民 | 首次咨询免费",
  description: "佳阳移民位于 Richmond BC，由加拿大持牌 RCIC 顾问提供配偶团聚、父母团聚、学签、工签、PR、入籍和枫叶卡更新服务。中英双语沟通，首次咨询免费。",
  metadataBase: new URL("https://jiayangimmigration.com"),
  verification: { google: "3DtVqQJdYiZJCdtgYp5ybZVFQPBLOzJ0w-XwCP75ctk" },
  keywords: [
    ...seoKeywords,
    "Richmond移民顾问", "RCIC", "持牌移民顾问", "家庭团聚", "配偶移民", "父母移民",
    "Express Entry", "快速通道", "工签", "学签", "枫叶卡", "入籍",
    "佳阳移民", "列治文移民", "大温哥华移民",
    "Richmond immigration consultant", "RCIC licensed", "family sponsorship",
    "spousal sponsorship", "work permit", "study permit", "Canadian citizenship",
    "JiaYang Immigration", "Richmond BC immigration",
  ],
  alternates: {
    canonical: "https://jiayangimmigration.com",
    languages: {
      "zh-CN": "https://jiayangimmigration.com",
      "en-CA": "https://jiayangimmigration.com",
    },
  },
  openGraph: {
    title: "Richmond 持牌移民顾问 RCIC | 佳阳移民 | 首次咨询免费",
    description: "Richmond BC RCIC 持牌移民顾问，提供配偶团聚、父母团聚、学签、工签、Express Entry、入籍和枫叶卡更新服务。中英双语，首次咨询免费。",
    url: "https://jiayangimmigration.com",
    siteName: "佳阳移民 JiaYang Immigration",
    locale: "zh_CN",
    alternateLocale: ["en_CA"],
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "佳阳移民 JiaYang Immigration" }],
  },
  twitter: {
    card: "summary",
    title: "Richmond 持牌移民顾问 RCIC | 佳阳移民",
    description: "配偶团聚、父母团聚、学签、工签、PR、入籍和枫叶卡更新。首次咨询免费。",
    images: ["/logo.png"],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "申请移民需要多长时间？",
      "acceptedAnswer": { "@type": "Answer", "text": "时间因项目而异。家庭团聚（配偶）通常需要12-18个月，父母担保约需24个月，Express Entry快速通道一般6个月内出结果。我们会在评估时给您更准确的预期时间线。" }
    },
    {
      "@type": "Question",
      "name": "RCIC持牌顾问和移民律师有什么区别？",
      "acceptedAnswer": { "@type": "Answer", "text": "RCIC持牌移民顾问由加拿大移民顾问监管机构（CICC）授权，专注于移民申请，费用通常低于律师。对于大多数移民案件，RCIC顾问完全能够胜任。复杂的司法上诉案件才需要律师介入。" }
    },
    {
      "@type": "Question",
      "name": "第一次咨询收费吗？",
      "acceptedAnswer": { "@type": "Answer", "text": "首次咨询免费。我们会评估您的情况、介绍适合您的移民路径，以及大致所需材料和费用，帮助您做出决定。" }
    },
    {
      "@type": "Question",
      "name": "我在国内可以申请吗？",
      "acceptedAnswer": { "@type": "Answer", "text": "可以。我们服务境内外客户，大部分沟通通过微信、电话或邮件进行，材料可以通过电子方式提交。" }
    },
    {
      "@type": "Question",
      "name": "案件被拒后还能再申请吗？",
      "acceptedAnswer": { "@type": "Answer", "text": "可以。被拒不代表终止，很多案件经过重新准备和调整策略后获批。我们也处理上诉和行政复议案件，欢迎咨询。" }
    },
    {
      "@type": "Question",
      "name": "Richmond BC 哪里有RCIC持牌移民顾问？",
      "acceptedAnswer": { "@type": "Answer", "text": "佳阳移民位于 Richmond BC 5599 Cooney Rd, Unit 2，是持牌RCIC移民顾问公司，提供家庭团聚、工签、学签、旅游签等全面移民服务。电话：+1 (604) 238-6686。" }
    },
    {
      "@type": "Question",
      "name": "列治文移民顾问费用大概是多少？",
      "acceptedAnswer": { "@type": "Answer", "text": "费用因案件类型和复杂程度而异。家庭团聚顾问费通常在 $1,500-$3,000 CAD，Express Entry 约 $2,000-$4,000 CAD。首次咨询免费，评估后我们会提供明确报价，无隐藏费用。" }
    },
    {
      "@type": "Question",
      "name": "Express Entry 需要什么条件？",
      "acceptedAnswer": { "@type": "Answer", "text": "Express Entry 主要看 CRS 综合评分，涵盖年龄、学历、语言（雅思/法语）、工作经验等因素。一般来说，CRS 分数越高被邀请概率越大。我们可以免费评估您的分数并建议提分方案。" }
    },
    {
      "@type": "Question",
      "name": "配偶移民需要多长时间，需要什么材料？",
      "acceptedAnswer": { "@type": "Answer", "text": "境内配偶团聚（Inland）通常12个月左右，境外（Outland）约12-18个月。主要材料包括：结婚证、双方护照、关系证明（合照、通讯记录等）、财务证明。我们会提供完整材料清单并全程指导。" }
    },
    {
      "@type": "Question",
      "name": "How long does immigration take in Richmond BC?",
      "acceptedAnswer": { "@type": "Answer", "text": "Processing times vary by program. Spousal sponsorship typically takes 12–18 months, Express Entry draws usually result in a decision within 6 months. JiaYang Immigration in Richmond BC provides free case assessments to give you a more accurate timeline." }
    },
    {
      "@type": "Question",
      "name": "Where can I find a licensed RCIC immigration consultant in Richmond BC?",
      "acceptedAnswer": { "@type": "Answer", "text": "JiaYang Immigration is a licensed RCIC immigration consulting firm located at 5599 Cooney Rd, Unit 2, Richmond BC V6X 3M6. We offer free initial consultations and serve clients across the Greater Vancouver area. Call us at +1 (604) 238-6686." }
    },
    {
      "@type": "Question",
      "name": "What is the cost of immigration consulting services in Richmond BC?",
      "acceptedAnswer": { "@type": "Answer", "text": "Fees vary by case type. Family sponsorship typically ranges from $1,500–$3,000 CAD, and Express Entry applications around $2,000–$4,000 CAD. JiaYang Immigration offers a free initial consultation with transparent pricing and no hidden fees." }
    },
    {
      "@type": "Question",
      "name": "Can I apply for Canadian immigration from China?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. JiaYang Immigration serves clients both inside and outside Canada. Most communication is done via WeChat, phone, or email, and documents can be submitted electronically. Contact us at WeChat: Kris0214." }
    },
    {
      "@type": "Question",
      "name": "Richmond 哪里可以做加拿大移民咨询？",
      "acceptedAnswer": { "@type": "Answer", "text": "佳阳移民位于 Richmond BC 5599 Cooney Rd, Unit 2，是受 CICC 监管的 RCIC 持牌移民顾问团队，提供中文和英文加拿大移民咨询与申请支持，服务列治文、大温哥华及境内外客户。" }
    },
    {
      "@type": "Question",
      "name": "列治文华人移民服务可以中文沟通吗？",
      "acceptedAnswer": { "@type": "Answer", "text": "可以。佳阳移民支持普通话、粤语和英文沟通，可通过电话、微信、邮件或预约到办公室咨询加拿大移民申请。" }
    },
    {
      "@type": "Question",
      "name": "加拿大工签可以怎么转 PR？",
      "acceptedAnswer": { "@type": "Answer", "text": "工签转 PR 通常需要结合工作经验、语言成绩、学历、雇主支持、省提名或 Express Entry 分数评估。佳阳移民可帮助申请人先做路径评估，再规划材料准备。" }
    },
    {
      "@type": "Question",
      "name": "大温地区中文移民服务有哪些常见项目？",
      "acceptedAnswer": { "@type": "Answer", "text": "常见项目包括 Express Entry、加拿大 PR 申请、工签、学签、旅游签续签、家庭团聚、配偶担保、父母团聚、入籍和枫叶卡更新。" }
    }
  ]
}

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "佳阳移民 JiaYang Immigration",
  "description": "Richmond BC RCIC 持牌移民顾问公司，受 CICC 监管，提供难民、家庭团聚、留学、旅游探亲、延期续签、入籍及枫叶卡更新等全面移民服务。",
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
    <html lang="zh" className={`${notoSansSC.variable} ${lora.variable} h-full`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-04DZ8SYV48" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-04DZ8SYV48');`}</Script>
      </body>
    </html>
  )
}
