import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "../../components/Header"
import FloatingContact from "../../components/FloatingContact"
import { LangProvider } from "../../context/lang"
import { getServicePage, servicePages, siteUrl } from "../service-data"

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

const localSeoKeywords = [
  "Richmond BC immigration services",
  "Chinese immigration services Richmond BC",
  "Immigration consultation Richmond BC",
  "RCIC immigration consultant Richmond BC",
  "CICC regulated immigration consultant",
  "licensed immigration consultant Richmond",
  "Canada immigration services Richmond",
  "Vancouver immigration services",
  "Greater Vancouver immigration services",
  "Canada PR application help",
  "Permanent residence application help",
  "Immigration help Richmond BC",
  "列治文移民服务",
  "Richmond 移民服务",
  "Richmond 持牌移民顾问",
  "列治文持牌移民顾问",
  "加拿大 RCIC 移民顾问",
  "CICC 监管移民顾问",
  "温哥华移民服务",
  "加拿大移民咨询",
  "加拿大 PR 申请",
  "中文移民服务列治文",
  "华人移民服务 Richmond",
]

const relatedServiceSlugs: Record<string, string[]> = {
  "family-sponsorship": ["spousal-sponsorship", "parent-sponsorship"],
  "spousal-sponsorship": ["family-sponsorship", "parent-sponsorship"],
  "parent-sponsorship": ["family-sponsorship", "spousal-sponsorship", "visitor-visa"],
  "work-study-permit": ["study-permit", "work-permit", "pgwp"],
  "study-permit": ["work-study-permit", "pgwp", "work-permit"],
  "work-permit": ["work-study-permit", "pgwp", "express-entry"],
  "pgwp": ["study-permit", "work-permit", "express-entry"],
  "citizenship-pr-card": ["pr-card-renewal", "citizenship"],
  "pr-card-renewal": ["citizenship-pr-card", "citizenship"],
  "citizenship": ["citizenship-pr-card", "pr-card-renewal"],
}

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServicePage(slug)

  if (!service) {
    return {}
  }

  const url = `${siteUrl}/services/${service.slug}`

  return {
    title: service.metaTitle,
    description: service.description,
    keywords: [...service.keywords, ...localSeoKeywords],
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.description,
      url,
      siteName: "佳阳移民 JiaYang Immigration",
      locale: "zh_CN",
      alternateLocale: ["en_CA"],
      type: "article",
      images: [{ url: "/logo.png", width: 512, height: 512, alt: "佳阳移民 JiaYang Immigration" }],
    },
    twitter: {
      card: "summary",
      title: service.metaTitle,
      description: service.description,
      images: ["/logo.png"],
    },
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServicePage(slug)

  if (!service) {
    notFound()
  }

  const relatedServices = (relatedServiceSlugs[service.slug] ?? [])
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))

  const serviceUrl = `${siteUrl}/services/${service.slug}`
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} | ${service.titleEn}`,
    description: service.description,
    url: serviceUrl,
    serviceType: service.titleEn,
    areaServed: ["Richmond BC", "Vancouver", "Burnaby", "Surrey", "Coquitlam", "Greater Vancouver", "British Columbia", "Canada", "China"],
    availableLanguage: ["zh-CN", "zh-Hant", "en-CA"],
    audience: {
      "@type": "Audience",
      audienceType: "Chinese-speaking, English-speaking, local, and overseas Canadian immigration clients",
    },
    provider: {
      "@type": "LegalService",
      name: "佳阳移民 JiaYang Immigration",
      url: siteUrl,
      telephone: "+16042386686",
      email: "jy.simon.ca@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5599 Cooney Rd, Unit 2",
        addressLocality: "Richmond",
        addressRegion: "BC",
        postalCode: "V6X 3M6",
        addressCountry: "CA",
      },
    },
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  }
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "服务项目", item: `${siteUrl}/#services` },
      { "@type": "ListItem", position: 3, name: service.title, item: serviceUrl },
    ],
  }

  return (
    <LangProvider>
      <main className="min-h-screen bg-[#F7F9FC] text-[#10213B]">
        <Header />

        <section className="relative overflow-hidden bg-[#10213B] px-5 pt-36 pb-20 text-white sm:px-6">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#10213B_0%,rgba(16,33,59,0.92)_52%,rgba(16,33,59,0.72)_100%)]" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-8 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#C4873A]">
              <Link href="/" className="transition-colors hover:text-white">首页</Link>
              <span>/</span>
              <Link href="/#services" className="transition-colors hover:text-white">服务项目</Link>
            </div>
            <div className="max-w-3xl">
              <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-[#C4873A]">Richmond BC Immigration Services</p>
              <h1 className="mb-5 font-display text-4xl font-medium leading-tight md:text-6xl">{service.title}</h1>
              <p className="mb-3 text-xl text-[#D9E4F2]">{service.titleEn}</p>
              <p className="max-w-2xl text-base leading-relaxed text-[#A8B8D0]">{service.summary}</p>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/#contact" className="inline-flex h-[3.25rem] items-center justify-center rounded-full bg-[#C4873A] px-8 text-[11px] uppercase tracking-[0.26em] text-white shadow-[0_18px_38px_rgba(196,135,58,0.28)] transition-colors hover:bg-[#A06A20]">
                免费咨询
              </Link>
              <a href="tel:+16042386686" className="inline-flex h-[3.25rem] items-center justify-center rounded-full border border-white/20 px-8 text-[11px] uppercase tracking-[0.26em] text-white transition-colors hover:border-[#C4873A]">
                电话联系
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="rounded-[2rem] border border-[#DDE6F0] bg-white p-7 shadow-[0_16px_44px_rgba(16,33,59,0.06)]">
              <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#9B6727]">Service Snapshot</p>
              <p className="text-sm leading-relaxed text-[#52647C]">{service.summaryEn}</p>
              <div className="mt-8 space-y-4 border-t border-[#E6EDF5] pt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9B6727]">Office</p>
                  <p className="mt-2 text-sm text-[#10213B]">5599 Cooney Rd, Unit 2, Richmond, BC V6X 3M6</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9B6727]">Contact</p>
                  <p className="mt-2 text-sm text-[#10213B]">+1 (604) 238-6686</p>
                  <p className="mt-1 text-sm text-[#10213B]">WeChat: Kris0214</p>
                </div>
              </div>
            </aside>

            <div className="space-y-8">
              <section className="rounded-[2rem] border border-[#DDE6F0] bg-white p-7 shadow-[0_16px_44px_rgba(16,33,59,0.06)] sm:p-9">
                <h2 className="mb-6 font-display text-3xl font-medium text-[#10213B]">适合哪些申请人</h2>
                <div className="grid gap-3 sm:grid-cols-3">
                  {service.idealFor.map((item) => (
                    <div key={item} className="rounded-2xl border border-[#E6EDF5] bg-[#F7F9FC] p-4 text-sm leading-relaxed text-[#52647C]">
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] border border-[#DDE6F0] bg-white p-7 shadow-[0_16px_44px_rgba(16,33,59,0.06)] sm:p-9">
                <h2 className="mb-6 font-display text-3xl font-medium text-[#10213B]">我们可以协助</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.support.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-[#E6EDF5] p-4">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#C4873A]" />
                      <p className="text-sm leading-relaxed text-[#52647C]">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {relatedServices.length > 0 && (
                <section className="rounded-[2rem] border border-[#DDE6F0] bg-white p-7 shadow-[0_16px_44px_rgba(16,33,59,0.06)] sm:p-9">
                  <h2 className="mb-6 font-display text-3xl font-medium text-[#10213B]">相关服务</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {relatedServices.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className="rounded-2xl border border-[#E6EDF5] p-4 transition-colors hover:border-[#C4873A]"
                      >
                        <h3 className="mb-2 text-base font-medium text-[#10213B]">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-[#52647C]">{item.summary}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              <section className="rounded-[2rem] border border-[#DDE6F0] bg-white p-7 shadow-[0_16px_44px_rgba(16,33,59,0.06)] sm:p-9">
                <h2 className="mb-6 font-display text-3xl font-medium text-[#10213B]">常见问题</h2>
                <div className="divide-y divide-[#E6EDF5]">
                  {service.faqs.map((faq) => (
                    <div key={faq.q} className="py-5 first:pt-0 last:pb-0">
                      <h3 className="mb-2 text-base font-medium text-[#10213B]">{faq.q}</h3>
                      <p className="text-sm leading-relaxed text-[#52647C]">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[2rem] bg-[#10213B] p-8 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#C4873A]">Free Initial Consultation</p>
              <h2 className="font-display text-3xl font-medium">先确认路径，再准备材料</h2>
            </div>
            <Link href="/#contact" className="inline-flex h-[3.25rem] items-center justify-center rounded-full bg-[#C4873A] px-8 text-[11px] uppercase tracking-[0.26em] text-white transition-colors hover:bg-[#A06A20]">
              联系佳阳移民
            </Link>
          </div>
        </section>

        <FloatingContact />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </main>
    </LangProvider>
  )
}
