"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { LangProvider, useLang } from "./context/lang"
import Header from "./components/Header"
import NewsSection from "./components/NewsSection"
import FloatingContact from "./components/FloatingContact"

const officeAddress = "5599 Cooney Rd, Unit 2, Richmond, BC V6X 3M6"
const officeMapUrl = "https://www.google.com/maps/search/?api=1&query=5599%20Cooney%20Rd%20Unit%202%20Richmond%20BC%20V6X%203M6"

const t = {
  zh: {
    heroTag: "Richmond BC 持牌移民顾问 · RCIC Licensed",
    heroTitle: "列治文专业移民服务",
    heroSub: "用心做好细节，以诚赢得信赖",
    heroDesc: "佳阳移民深耕大温哥华列治文移民领域10年+，为华人及各族裔客户提供全面专业的移民服务。",
    heroBtn: "立即免费咨询",
    heroBtn2: "查看服务",
    heroMiniName: "您的姓名",
    heroMiniPhone: "联系电话",
    heroMiniService: "咨询类型",
    heroMiniBtn: "免费获取评估",
    heroMiniSuccess: "收到！顾问会尽快联系您。",
    trustItems: ["Richmond 办公室", "中英双语沟通", "首次咨询免费"],
    servicesTag: "服务范围",
    servicesTitle: "全方位移民服务",
    serviceNote: "免费评估 · 查看详情",
    services: [
      { num: "01", title: "难民与人道主义", href: "/services/refugee-humanitarian", desc: "为需要庇护和人道主义保护的申请人提供专业支持，守护您的安全与尊严。" },
      { num: "02", title: "配偶团聚移民", href: "/services/spousal-sponsorship", desc: "协助境内、境外配偶担保申请，梳理关系证明、担保资格和递交流程。", links: [{ label: "配偶团聚", href: "/services/spousal-sponsorship" }, { label: "父母团聚", href: "/services/parent-sponsorship" }] },
      { num: "03", title: "学签与工签", href: "/services/study-permit", desc: "加拿大学签、工签和毕业工签申请支持，为学业、工作和身份衔接提前规划。", links: [{ label: "学签申请", href: "/services/study-permit" }, { label: "工签申请", href: "/services/work-permit" }, { label: "PGWP", href: "/services/pgwp" }] },
      { num: "04", title: "旅游与探亲", href: "/services/visitor-visa", desc: "加拿大、美国、澳大利亚旅游及探亲签证申请，专业备材，让您轻松往来，与家人保持联系。" },
      { num: "05", title: "延期与续签", href: "/services/status-extension", desc: "身份延期、续签及各类疑难案件处理，维护您在加拿大的合法身份。" },
      { num: "06", title: "枫叶卡更新", href: "/services/pr-card-renewal", desc: "加拿大永久居民卡更新、居住义务核对和旅行记录整理，降低材料风险。", links: [{ label: "枫叶卡更新", href: "/services/pr-card-renewal" }, { label: "入籍申请", href: "/services/citizenship" }] },
      { num: "07", title: "企业家移民", href: "/services/entrepreneur-immigration", desc: "BC省企业家移民、联邦创业签证（SUV）等项目，助有创业意向的您在加拿大落地生根。" },
      { num: "08", title: "投资移民", href: "/services/investor-immigration", desc: "省提名投资类项目评估与申请，为具备资产实力的申请人规划最优移民路径。" },
      { num: "09", title: "快速通道 Express Entry", href: "/services/express-entry", desc: "联邦技术移民主流路径，综合评分（CRS）评估、提分策略及全程申请，助您高效获得永居身份。" },
    ],
    aboutTag: "关于我们",
    aboutTitle: "佳阳移民",
    aboutDesc1: "佳阳移民是位于 Richmond BC 的持牌移民顾问公司（RCIC），深耕大温哥华列治文移民领域10年+，致力于为华人及各族裔客户提供专业、真诚的移民服务。",
    aboutDesc2: "我们的宗旨是「用心做好细节，以诚赢得信赖」。无论案件简单还是复杂，我们都全力以赴，为每位客户争取最好的结果。",
    rcic: "加拿大持牌移民顾问",
    rcicSub: "ICCRC Licensed",
    stat1: "年从业经验",
    stat2: "服务客户",
    stat3: "Google 好评",
    testimonialsTag: "客户评价",
    testimonialsTitle: "真实案例，真实评价",
    testimonials: [
      { text: "我在佳阳移民咨询时服务耐心，解答专业。之后在这里办理了美签，速度非常快，都没有面试就拿到了新美签。", name: "程洋洋", type: "美签申请" },
      { text: "佳阳移民咨询时服务耐心，解答专业。之后在这里办理了团聚，非常快拿到工签和档案号。佳阳移民的老师非常专业迅速，真诚推荐！", name: "Chi Jiangbin", type: "家庭团聚" },
      { text: "Werner顾问非常专业！帮我成功的把爸爸妈妈办了团聚移民过来。靠谱！", name: "Lichen Chai", type: "家庭团聚" },
    ],
    contactTag: "联系我们",
    contactTitle: "立即咨询",
    contactDesc: "无论您处于移民旅程的哪个阶段，我们都在这里为您解答疑惑，提供专业建议。",
    visitNote: "可预约到店咨询",
    mapLink: "打开地图导航",
    responseNote: "提交后我们会尽快回复，也可以直接添加微信 Kris0214。",
    phone: "电话",
    email: "邮箱",
    wechat: "微信",
    address: "地址",
    formName: "您的姓名",
    formPhone: "联系电话",
    formService: "咨询类型",
    formEmail: "电子邮箱（选填）",
    formMsg: "请简要描述您的情况",
    formBtn: "提交咨询",
    formSubmitting: "提交中...",
    formSuccess: "收到！我们会尽快与您联系。",
    formError: "提交失败，请直接发邮件至 jy.simon.ca@gmail.com",
    processTag: "服务流程",
    processTitle: "四步开启您的移民之旅",
    steps: [
      { num: "01", title: "免费咨询", desc: "通过电话、微信或邮件与我们联系，顾问将免费评估您的移民资格和最佳方案。" },
      { num: "02", title: "案件评估", desc: "深入分析您的个人情况，制定专属移民方案，明确所需材料和时间线。" },
      { num: "03", title: "材料准备", desc: "全程指导材料收集与整理，确保申请文件完整、准确，最大化获批概率。" },
      { num: "04", title: "递交跟进", desc: "代您递交申请，全程跟进审理进度，及时处理移民局的补件要求。" },
    ],
    faqTag: "常见问题",
    faqTitle: "您可能想知道",
    faqs: [
      { q: "申请移民需要多长时间？", a: "时间因项目而异。家庭团聚（配偶）通常需要12-18个月，父母担保约需24个月，Express Entry快速通道一般6个月内出结果。我们会在评估时给您更准确的预期时间线。" },
      { q: "RCIC持牌顾问和移民律师有什么区别？", a: "RCIC持牌移民顾问由加拿大移民顾问监管机构（CICC）授权，专注于移民申请，费用通常低于律师。对于大多数移民案件，RCIC顾问完全能够胜任。复杂的司法上诉案件才需要律师介入。" },
      { q: "第一次咨询收费吗？", a: "首次咨询免费。我们会评估您的情况、介绍适合您的移民路径，以及大致所需材料和费用，帮助您做出决定。" },
      { q: "我在国内可以申请吗？", a: "可以。我们服务境内外客户，大部分沟通通过微信、电话或邮件进行，材料可以通过电子方式提交。" },
      { q: "Richmond 哪里可以做加拿大移民咨询？", a: "佳阳移民位于 Richmond BC，是受 CICC 监管的 RCIC 持牌移民顾问团队，服务列治文、大温哥华及境内外客户。您可以通过电话、微信、邮件联系，也可以预约到办公室咨询加拿大移民申请方向。" },
      { q: "加拿大工签可以怎么转 PR？", a: "工签转 PR 通常要结合工作经验、语言成绩、学历、雇主支持、省提名或 Express Entry 分数评估。建议先确认当前身份和工作背景，再规划最适合的申请路径。" },
      { q: "案件被拒后还能再申请吗？", a: "可以。被拒不代表终止，很多案件经过重新准备和调整策略后获批。我们也处理上诉和行政复议案件，欢迎咨询。" },
      { q: "列治文移民顾问费用大概是多少？", a: "费用因案件类型和复杂程度而异。家庭团聚顾问费通常在 $1,500-$3,000 CAD，Express Entry 约 $2,000-$4,000 CAD。首次咨询免费，评估后我们会提供明确报价，无隐藏费用。" },
      { q: "Express Entry 需要什么条件？", a: "Express Entry 主要看 CRS 综合评分，涵盖年龄、学历、语言（雅思/法语）、工作经验等因素。一般来说，CRS 分数越高被邀请概率越大。我们可以免费评估您的分数并建议提分方案。" },
      { q: "配偶移民需要多长时间，需要什么材料？", a: "境内配偶团聚（Inland）通常12个月左右，境外（Outland）约12-18个月。主要材料包括：结婚证、双方护照、关系证明（合照、通讯记录等）、财务证明。我们会提供完整材料清单并全程指导。" },
    ],
    footerRights: "版权所有",
    footerLicense: "加拿大持牌移民顾问",
  },
  en: {
    heroTag: "Richmond BC Licensed Immigration Consultant · RCIC Licensed",
    heroTitle: "Richmond Professional Immigration Services",
    heroSub: "Attention to Detail. Trust Through Integrity.",
    heroDesc: "JiaYang Immigration is a Richmond BC RCIC licensed firm, serving Chinese and multicultural clients across Greater Vancouver for 10+ years with expertise and care.",
    heroBtn: "Free Consultation",
    heroBtn2: "Our Services",
    heroMiniName: "Your Name",
    heroMiniPhone: "Phone Number",
    heroMiniService: "Service Type",
    heroMiniBtn: "Free Assessment",
    heroMiniSuccess: "Received! A consultant will contact you shortly.",
    trustItems: ["Richmond office", "Chinese & English support", "Free initial consultation"],
    servicesTag: "Services",
    servicesTitle: "Comprehensive Immigration Services",
    serviceNote: "Free assessment · Details",
    services: [
      { num: "01", title: "Refugee & Humanitarian", href: "/services/refugee-humanitarian", desc: "Professional support for asylum seekers and humanitarian protection applicants, safeguarding your safety and dignity." },
      { num: "02", title: "Spousal Sponsorship", href: "/services/spousal-sponsorship", desc: "Inland and outland spousal sponsorship support, including relationship evidence and sponsor eligibility review.", links: [{ label: "Spousal", href: "/services/spousal-sponsorship" }, { label: "Parents", href: "/services/parent-sponsorship" }] },
      { num: "03", title: "Study & Work Permits", href: "/services/study-permit", desc: "Study permit, work permit, and PGWP support to plan your education, career, and immigration pathway.", links: [{ label: "Study Permit", href: "/services/study-permit" }, { label: "Work Permit", href: "/services/work-permit" }, { label: "PGWP", href: "/services/pgwp" }] },
      { num: "04", title: "Tourism & Family Visits", href: "/services/visitor-visa", desc: "Visitor and tourist visa applications for Canada, the US, and Australia — professional document preparation to keep you connected with family." },
      { num: "05", title: "Extensions & Renewals", href: "/services/status-extension", desc: "Status extensions, renewals, and complex case handling to maintain your legal status in Canada." },
      { num: "06", title: "PR Card Renewal", href: "/services/pr-card-renewal", desc: "PR card renewal support, residency obligation review, and travel history organization for permanent residents.", links: [{ label: "PR Card", href: "/services/pr-card-renewal" }, { label: "Citizenship", href: "/services/citizenship" }] },
      { num: "07", title: "Entrepreneur Immigration", href: "/services/entrepreneur-immigration", desc: "BC PNP Entrepreneur stream, Federal Start-Up Visa (SUV), and more — ideal pathways for business-minded applicants ready to launch in Canada." },
      { num: "08", title: "Investor Immigration", href: "/services/investor-immigration", desc: "Assessment and application support for provincial nominee investor programs, helping high-net-worth applicants find the most efficient immigration route." },
      { num: "09", title: "Express Entry", href: "/services/express-entry", desc: "Canada's flagship skilled worker pathway. We assess your CRS score, develop score-boosting strategies, and manage your full application for permanent residence." },
    ],
    aboutTag: "About Us",
    aboutTitle: "JiaYang Immigration",
    aboutDesc1: "JiaYang Immigration is a Richmond BC RCIC licensed immigration consulting company with 10+ years of experience in Greater Vancouver, dedicated to serving Chinese and multicultural clients with professionalism and integrity.",
    aboutDesc2: "Our motto: \"Attention to detail, trust through integrity.\" Whether your case is simple or complex, we give our full effort to achieve the best possible outcome for every client.",
    rcic: "Licensed Canadian Immigration Consultant",
    rcicSub: "ICCRC Licensed",
    stat1: "Years Experience",
    stat2: "Clients Served",
    stat3: "Google Rating",
    testimonialsTag: "Testimonials",
    testimonialsTitle: "Real Cases. Real Results.",
    testimonials: [
      { text: "The service at JiaYang Immigration was patient and professional. I applied for a US visa here and got it approved very quickly — no interview required!", name: "Cheng Yangyang", type: "US Visa" },
      { text: "The consultation was patient and professional. I completed my family reunification here and quickly received my work permit and file number. Highly recommended!", name: "Chi Jiangbin", type: "Family Reunification" },
      { text: "Consultant Werner is very professional! He successfully helped me bring my parents here through family reunification. Reliable!", name: "Lichen Chai", type: "Family Reunification" },
    ],
    contactTag: "Contact",
    contactTitle: "Get In Touch",
    contactDesc: "Wherever you are in your immigration journey, we are here to answer your questions and provide professional advice.",
    visitNote: "In-office consultation by appointment",
    mapLink: "Open map directions",
    responseNote: "After submitting, we will reply as soon as possible. You can also add WeChat Kris0214 directly.",
    phone: "Phone",
    email: "Email",
    wechat: "WeChat",
    address: "Address",
    formName: "Your Name",
    formPhone: "Phone Number",
    formService: "Service Type",
    formEmail: "Email Address (optional)",
    formMsg: "Briefly describe your situation",
    formBtn: "Submit Inquiry",
    formSubmitting: "Submitting...",
    formSuccess: "Received! We'll be in touch shortly.",
    formError: "Submission failed. Please email us at jy.simon.ca@gmail.com",
    processTag: "How It Works",
    processTitle: "Four Steps to Your New Life",
    steps: [
      { num: "01", title: "Free Consultation", desc: "Contact us by phone, WeChat, or email. Our consultant will assess your eligibility and recommend the best immigration pathway at no cost." },
      { num: "02", title: "Case Assessment", desc: "We conduct an in-depth analysis of your situation and create a personalized immigration plan with clear timelines and document requirements." },
      { num: "03", title: "Document Preparation", desc: "We guide you through every document required, ensuring your application is complete and accurate to maximize approval chances." },
      { num: "04", title: "Submission & Follow-up", desc: "We submit your application and track its progress, responding promptly to any requests from immigration authorities." },
    ],
    faqTag: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "How long does the immigration process take?", a: "Processing times vary by program. Spousal sponsorship typically takes 12–18 months, parent sponsorship around 24 months, and Express Entry draws usually result in a decision within 6 months. We'll give you a more accurate timeline after assessing your case." },
      { q: "What's the difference between an RCIC and an immigration lawyer?", a: "An RCIC (Regulated Canadian Immigration Consultant) is licensed by CICC to handle immigration applications, typically at a lower cost than a lawyer. For most immigration cases, an RCIC is fully qualified. Lawyers are generally only needed for complex judicial appeals." },
      { q: "Is the first consultation free?", a: "Yes, the initial consultation is free. We'll assess your situation, explain suitable immigration pathways, and outline the documents and costs involved to help you make an informed decision." },
      { q: "Can I apply from outside Canada?", a: "Absolutely. We serve clients both inside and outside Canada. Most communication is done via WeChat, phone, or email, and documents can be submitted electronically." },
      { q: "Where can I get Chinese immigration services in Richmond BC?", a: "JiaYang Immigration is an RCIC licensed immigration consultant team regulated by CICC, based in Richmond BC and serving clients across Richmond, Greater Vancouver, and overseas. Consultations are available by phone, WeChat, email, or appointment at our office." },
      { q: "How can a Canadian work permit lead to PR?", a: "A work permit can support a PR pathway when combined with eligible work experience, language scores, education, employer support, provincial nomination options, or Express Entry CRS planning. We can review your current status and suggest a practical next step." },
      { q: "Can I reapply after a refusal?", a: "Yes. A refusal doesn't mean the end of your case. Many applications are approved after revisiting the strategy and strengthening the documentation. We also handle appeals and administrative reviews — feel free to reach out." },
      { q: "How much does immigration consulting cost in Richmond BC?", a: "Fees vary by case type. Family sponsorship typically ranges from $1,500–$3,000 CAD, and Express Entry applications around $2,000–$4,000 CAD. We offer a free initial consultation with transparent pricing and no hidden fees." },
      { q: "What are the requirements for Express Entry?", a: "Express Entry uses a Comprehensive Ranking System (CRS) based on age, education, language scores (IELTS/TEF), and work experience. The higher your CRS score, the better your chances of receiving an Invitation to Apply. We offer free score assessments and improvement strategies." },
      { q: "How long does spousal sponsorship take and what documents are needed?", a: "Inland spousal sponsorship typically takes around 12 months; Outland takes 12–18 months. Key documents include: marriage certificate, passports, proof of relationship (photos, communication records), and financial documents. We provide a complete checklist and full guidance throughout." },
    ],
    footerRights: "All Rights Reserved",
    footerLicense: "Licensed Canadian Immigration Consultant",
  },
}

function Home() {
  const { lang } = useLang()
  const tx = t[lang]
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [heroFormState, setHeroFormState] = useState<"idle" | "submitting" | "success">("idle")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  async function handleHeroSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setHeroFormState("submitting")
    const data = new FormData(e.currentTarget)
    const res = await fetch("https://formspree.io/f/xpqbkzdy", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
    setHeroFormState(res.ok ? "success" : "idle")
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState("submitting")
    const data = new FormData(e.currentTarget)
    const res = await fetch("https://formspree.io/f/xpqbkzdy", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
    setFormState(res.ok ? "success" : "error")
  }

  return (
    <main className="flex-1 bg-[#F7F9FC] text-[#10213B]">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[700px] overflow-hidden bg-[#F2F6FB] pt-[4.5rem] md:min-h-[860px]">
        <div className="absolute inset-0 z-0 md:left-[39%]" style={{backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.48}} />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,#F2F6FB_0%,rgba(242,246,251,0.94)_38%,rgba(242,246,251,0.56)_62%,rgba(242,246,251,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-0 h-28 bg-[linear-gradient(180deg,rgba(242,246,251,0)_0%,#F7F9FC_88%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-20 md:py-[6.5rem] w-full motion-safe:animate-[fade-in-up_0.7s_ease-out_both]">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#9B6727] mb-7 sm:tracking-[0.34em]">{tx.heroTag}</p>
          <h1 className="font-display text-[2.2rem] sm:text-5xl md:text-7xl font-medium text-[#10213B] leading-[1.08] mb-6 max-w-[9.8em] md:max-w-3xl">
            {tx.heroTitle}
          </h1>
          <p className="text-[#9B6727] text-lg md:text-xl font-display italic mb-6">{tx.heroSub}</p>
          <p className="text-[#52647C] text-base leading-relaxed mb-8 max-w-xl">{tx.heroDesc}</p>
          <div className="mb-10 flex max-w-2xl flex-wrap gap-2">
            {tx.trustItems.map((item) => (
              <span key={item} className="shrink-0 rounded-full border border-[#DDE6F0] bg-white/70 px-4 py-2 text-[10px] uppercase tracking-[0.12em] text-[#52647C] backdrop-blur sm:text-[11px] sm:tracking-[0.16em]">
                {item}
              </span>
            ))}
          </div>
          {heroFormState === "success" ? (
            <div className="flex items-center gap-3 rounded-2xl border border-[#C4873A]/40 bg-white/80 px-6 py-4 backdrop-blur">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C4873A] text-white text-sm">✓</span>
              <p className="text-sm font-medium text-[#10213B]">{tx.heroMiniSuccess}</p>
            </div>
          ) : (
            <form onSubmit={handleHeroSubmit} className="w-full max-w-xl">
              <div className="flex flex-col gap-2 sm:flex-row">
                <input required type="text" name="name" placeholder={tx.heroMiniName} className="h-12 flex-1 rounded-full border border-[#C7D2E0] bg-white/90 px-5 text-sm text-[#10213B] placeholder-[#9AAAB8] outline-none backdrop-blur focus:border-[#C4873A]" />
                <input required type="tel" name="phone" placeholder={tx.heroMiniPhone} className="h-12 flex-1 rounded-full border border-[#C7D2E0] bg-white/90 px-5 text-sm text-[#10213B] placeholder-[#9AAAB8] outline-none backdrop-blur focus:border-[#C4873A]" />
              </div>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                <select required name="service" className="h-12 flex-1 rounded-full border border-[#C7D2E0] bg-white/90 px-5 text-sm text-[#10213B] outline-none backdrop-blur focus:border-[#C4873A]">
                  <option value="">{tx.heroMiniService}</option>
                  {tx.services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
                <button type="submit" disabled={heroFormState === "submitting"} className="h-12 shrink-0 rounded-full bg-[#C4873A] px-7 text-[11px] uppercase tracking-[0.24em] text-white shadow-[0_16px_36px_rgba(196,135,58,0.32)] transition-colors hover:bg-[#A06A20] disabled:opacity-60">
                  {heroFormState === "submitting" ? "..." : tx.heroMiniBtn}
                </button>
              </div>
              <p className="mt-3 text-[11px] text-[#7A8FA6]">
                {lang === "zh" ? "首次咨询免费 · 提交后顾问会主动联系" : "Free initial consultation · We'll reach out after submission"}
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-20 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto rounded-[1.75rem] border border-[#DDE6F0] bg-white px-4 py-3 grid grid-cols-1 divide-y divide-[#E6EDF5] shadow-[0_22px_60px_rgba(16,33,59,0.10)] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-7">
          {[
            { num: "10+", label: tx.stat1 },
            { num: "400+", label: tx.stat2 },
            { num: "5.0 ★", label: tx.stat3 },
          ].map((s) => (
            <div key={s.label} className="text-center px-4 py-4 sm:py-0">
              <p className="font-display text-3xl font-medium text-[#10213B] mb-1">{s.num}</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#718096]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-5 sm:px-6 bg-[#F7F9FC]" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.34em] uppercase text-[#9B6727] mb-4">{tx.servicesTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#1B2B4E]">{tx.servicesTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tx.services.map((s) => (
              <article key={s.title} className="flex min-h-[16rem] flex-col rounded-2xl border border-[#DDE6F0] bg-white p-7 shadow-[0_14px_40px_rgba(16,33,59,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#C4873A]">
                <p className="font-display text-3xl font-light text-[#C4873A] mb-4">{s.num}</p>
                <h3 className="mb-3 text-base font-medium text-[#1B2B4E]">
                  <Link href={s.href} className="transition-colors hover:text-[#C4873A]">
                    {s.title}
                  </Link>
                </h3>
                <p className="text-[#5A6A82] text-sm leading-relaxed">{s.desc}</p>
                {"links" in s && s.links && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.links.map((link) => (
                      <Link key={link.href} href={link.href} className="rounded-full border border-[#DDE6F0] px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[#52647C] transition-colors hover:border-[#C4873A] hover:text-[#C4873A]">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
                <Link href={s.href} className="mt-auto pt-6 text-[10px] uppercase tracking-[0.2em] text-[#C4873A] transition-colors hover:text-[#9B6727]">
                  {tx.serviceNote}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-5 sm:px-6 bg-[#10213B]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.34em] uppercase text-[#C4873A] mb-4">{tx.processTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white">{tx.processTitle}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {tx.steps.map((s, i) => (
              <div key={s.num} className="relative rounded-2xl border border-[#253957] bg-white/[0.04] p-7">
                <p className="font-display text-4xl font-light text-[#C4873A] mb-4">{s.num}</p>
                <h3 className="text-base font-medium text-white mb-3">{s.title}</h3>
                <p className="text-[#A8B8D0] text-sm leading-relaxed">{s.desc}</p>
                {i < tx.steps.length - 1 && (
                  <span className="hidden md:block absolute top-8 -right-3 text-[#C4873A] text-lg z-10">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-5 sm:px-6 bg-white" id="about">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-[0.34em] uppercase text-[#9B6727] mb-4">{tx.aboutTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#1B2B4E] mb-8">{tx.aboutTitle}</h2>
            <p className="text-[#5A6A82] leading-relaxed mb-4">{tx.aboutDesc1}</p>
            <p className="text-[#5A6A82] leading-relaxed mb-10">{tx.aboutDesc2}</p>
            <div className="inline-flex items-center gap-4 rounded-2xl bg-[#F7F9FC] border border-[#DDE6F0] px-6 py-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1B2B4E] text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3l1.6 4.1 3.9-1.5-1.8 4.1 4.3.7-3.7 2.4 2.7 3.5-4.3-.7L12 21l-2.7-5.4-4.3.7 2.7-3.5L4 10.4l4.3-.7-1.8-4.1 3.9 1.5L12 3z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1B2B4E]">{tx.rcic}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4873A]">{tx.rcicSub}</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#10213B] p-8 sm:p-12 text-white shadow-[0_24px_70px_rgba(16,33,59,0.18)]">
            <p className="font-display text-2xl italic text-[#C4873A] mb-6">
              {lang === "zh" ? "「用心做好细节，以诚赢得信赖」" : '"Attention to detail, trust through integrity."'}
            </p>
            <p className="text-[#A8B8D0] text-sm leading-relaxed">
              {lang === "zh"
                ? "多年深耕移民行业，佳阳移民始终坚持以客户利益为先，用专业赢得每一位客户的信任。"
                : "With years of deep expertise in Canadian immigration, JiaYang Immigration has put clients first, earning trust through professionalism and dedication."}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-5 sm:px-6 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.34em] uppercase text-[#9B6727] mb-4">{tx.faqTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#1B2B4E]">{tx.faqTitle}</h2>
          </div>
          <div className="rounded-[2rem] border border-[#DDE6F0] bg-white px-5 sm:px-8 divide-y divide-[#E5E9F0] shadow-[0_16px_44px_rgba(16,33,59,0.06)]">
            {tx.faqs.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-8"
                >
                  <span className="text-[#1B2B4E] font-medium">{item.q}</span>
                  <span className="text-[#C4873A] text-xl shrink-0">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <p className="text-[#5A6A82] text-sm leading-relaxed pb-6 motion-safe:animate-[fade-in-up_0.22s_ease-out_both]">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-5 sm:px-6 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.34em] uppercase text-[#9B6727] mb-4">{tx.testimonialsTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#10213B]">{tx.testimonialsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {tx.testimonials.map((r) => (
              <div key={r.name} className="rounded-2xl border border-[#DDE6F0] bg-[#F7F9FC] p-8 flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-[#C4873A] text-sm">★</span>)}
                </div>
                <p className="text-[#52647C] leading-relaxed mb-6 flex-1">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[#10213B]">{r.name}</p>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#C4873A] border border-[#C4873A] px-2 py-1">{r.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsSection />

      {/* Contact */}
      <section className="relative overflow-hidden bg-[#10213B] px-5 py-24 sm:px-6" id="contact">
        <div className="absolute inset-x-0 top-0 h-px bg-[#DDE6F0]/10" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-[#C4873A]">{tx.contactTag}</p>
            <h2 className="mb-5 font-display text-4xl font-medium text-white md:text-5xl">{tx.contactTitle}</h2>
            <p className="max-w-lg leading-relaxed text-[#A8B8D0]">{tx.contactDesc}</p>

            <div className="mt-10 divide-y divide-[#2A3E60] rounded-[1.75rem] border border-[#2A3E60] bg-white/[0.04]">
              <div className="grid gap-2 px-5 py-5 sm:grid-cols-[6rem_1fr]">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#C4873A]">{tx.phone}</span>
                <a href="tel:+16042386686" className="text-sm text-white transition-colors hover:text-[#C4873A]">+1 (604) 238-6686</a>
              </div>
              <div className="grid gap-2 px-5 py-5 sm:grid-cols-[6rem_1fr]">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#C4873A]">{tx.email}</span>
                <a href="mailto:jy.simon.ca@gmail.com" className="break-all text-sm text-white transition-colors hover:text-[#C4873A]">jy.simon.ca@gmail.com</a>
              </div>
              <div className="grid gap-2 px-5 py-5 sm:grid-cols-[6rem_1fr]">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#C4873A]">{tx.address}</span>
                <div>
                  <a href={officeMapUrl} target="_blank" rel="noreferrer" className="text-sm leading-relaxed text-white transition-colors hover:text-[#C4873A]">
                    {officeAddress}
                  </a>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#A8B8D0]">{tx.visitNote}</span>
                    <a href={officeMapUrl} target="_blank" rel="noreferrer" className="rounded-full border border-[#C4873A]/40 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#C4873A] transition-colors hover:bg-[#C4873A] hover:text-white">
                      {tx.mapLink}
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 px-5 py-5 sm:grid-cols-[6rem_1fr]">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#C4873A]">{tx.wechat}</span>
                <div className="flex items-center gap-4">
                  <Image src="/wechat-qr.jpg" alt="WeChat QR Code" width={112} height={112} className="h-28 w-28 rounded-2xl border border-white/10 object-cover" />
                  <div>
                    <p className="text-sm text-white">Kris0214</p>
                    <p className="mt-1 text-xs text-[#7F91AA]">WeChat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {formState === "success" ? (
            <div className="flex min-h-[420px] items-center justify-center rounded-[2rem] border border-[#C4873A]/60 bg-white/[0.05] p-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
              <div>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#C4873A] text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12.5l4.2 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-white">{tx.formSuccess}</p>
                <p className="mt-3 text-sm text-[#A8B8D0]">{tx.responseNote}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 rounded-[2rem] border border-[#2A3E60] bg-[#142846] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-8">
              <input required type="text" name="name" placeholder={tx.formName} className="w-full rounded-2xl border border-[#314765] bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-[#7F91AA] outline-none transition-colors focus:border-[#C4873A]" />
              <input required type="tel" name="phone" placeholder={tx.formPhone} className="w-full rounded-2xl border border-[#314765] bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-[#7F91AA] outline-none transition-colors focus:border-[#C4873A]" />
              <input type="email" name="email" placeholder={tx.formEmail} className="w-full rounded-2xl border border-[#314765] bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-[#7F91AA] outline-none transition-colors focus:border-[#C4873A]" />
              <select required name="service" className="w-full rounded-2xl border border-[#314765] bg-[#1B3658] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C4873A]">
                <option value="">{tx.formService}</option>
                {tx.services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
              </select>
              <textarea name="message" rows={5} placeholder={tx.formMsg} className="w-full resize-none rounded-2xl border border-[#314765] bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-[#7F91AA] outline-none transition-colors focus:border-[#C4873A]" />
              {formState === "error" && (
                <p className="text-sm text-red-300">{tx.formError}</p>
              )}
              <button type="submit" disabled={formState === "submitting"} className="w-full rounded-full bg-[#C4873A] py-4 text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#A06A20] disabled:opacity-60">
                {formState === "submitting" ? tx.formSubmitting : tx.formBtn}
              </button>
              <p className="text-center text-xs leading-relaxed text-[#7F91AA]">{tx.responseNote}</p>
            </form>
          )}
        </div>
      </section>

      <FloatingContact />

      {/* Footer */}
      <footer className="bg-[#0B1728] px-5 py-8 text-center sm:px-6">
        <p className="text-[11px] tracking-[0.2em] text-[#6F8198]">
          © {new Date().getFullYear()} 佳阳移民 JiaYang Immigration · {tx.footerRights} · {tx.footerLicense}
        </p>
      </footer>
    </main>
  )
}

export default function Page() {
  return (
    <LangProvider>
      <Home />
    </LangProvider>
  )
}
