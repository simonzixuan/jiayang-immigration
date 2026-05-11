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
  title: "佳阳移民 | Richmond RCIC 持牌移民顾问 | JiaYang Immigration",
  description: "佳阳移民是 Richmond BC 持牌移民顾问（RCIC），提供家庭团聚、工签、学签、旅游签、入籍及枫叶卡更新等全面移民服务。专业可信赖。",
  metadataBase: new URL("https://jiayangimmigration.com"),
  verification: { google: "3DtVqQJdYiZJCdtgYp5ybZVFQPBLOzJ0w-XwCP75ctk" },
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
    }
  ]
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
  "areaServed": ["Richmond BC", "Vancouver", "Burnaby", "Surrey", "Canada"],
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-04DZ8SYV48" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-04DZ8SYV48');` }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
