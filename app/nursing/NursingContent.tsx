"use client"

import Image from "next/image"
import Link from "next/link"
import { useLang } from "../context/lang"

const content = {
  en: {
    home: "Home", label: "A pathway for nursing graduates", title: "Your nursing career in Canada starts here",
    subtitle: "From China to Richmond, British Columbia, Canada.", strapline: "Study · Work · Immigrate",
    intro: "Bring your nursing education and ambition to your next chapter. JiaYang Immigration helps Chinese nursing graduates and experienced nurses understand the steps towards professional practice and life in British Columbia.",
    photo: "AI-generated illustration; not actual staff or clients.", cta: "Discuss your pathway", supportTitle: "Guidance at every stage",
    support: [
      { title: "Nursing licensure guidance", text: "Understand credential and competency assessment through Inspire Global Assessments (formerly NCAS), BCCNM registration, any required bridging education, and preparation for the NCLEX-RN or REX-PN examination, as applicable." },
      { title: "Immigration planning", text: "Explore Express Entry, the BC Provincial Nominee Program and work permit options with a regulated Canadian immigration consultant. The appropriate route depends on your qualifications, circumstances and current program criteria." },
      { title: "Employment preparation", text: "Get guidance on exploring opportunities with BC health authorities, hospitals, clinics and long-term care facilities, and preparing to connect with prospective employers." },
      { title: "English preparation", text: "Understand the difference between language evidence for nursing registration and immigration. IELTS Academic may support nursing registration; Express Entry requires IELTS General Training if you choose IELTS. We help you plan your preparation and find training resources." },
    ],
    eligibilityTitle: "Who is this pathway for?",
    eligibility: ["Graduating nursing students planning ahead", "Recent nursing graduates", "Nurses with clinical experience", "Applicants motivated to build a career abroad"],
    eligibilityNote: "You can start planning before graduation. Eligibility for registration, education programs and immigration is assessed separately against each organization’s requirements.",
    stepsTitle: "Your pathway, step by step",
    stepsIntro: "An individual plan connects your professional and immigration goals. Steps may overlap or change after assessment.",
    steps: [
      ["Start with a conversation", "Discuss your education, experience and goals in an information session or consultation."],
      ["Prepare your English", "Identify the language evidence you need for registration and your intended immigration route."],
      ["Gather your credentials", "Prepare education, identity and nursing practice records for the required assessments."],
      ["Complete the required assessment", "Follow Inspire and BCCNM instructions for credential and competency assessment."],
      ["Work towards registration", "Complete any required bridging education, the applicable registration examination and BCCNM requirements."],
      ["Explore employment", "Prepare for applications and interviews with prospective BC healthcare employers."],
      ["Plan your immigration pathway", "Assess work authorization and immigration options; this planning may begin earlier in your journey."],
      ["Begin your next chapter", "Plan your move and start work once you have the required registration and authorization."],
    ],
    bridgingTitle: "What is a bridging program?", bridgingText: "Additional education can help internationally educated professionals adapt their skills to Canadian practice. Learn what bridging may involve and how to choose a suitable program.", bridgingCta: "Explore bridging programs",
    richmondTitle: "Build your future in Richmond", richmondText: "A Chinese-speaking community, a multicultural setting and proximity to Vancouver make Richmond a place to consider as you plan your life in British Columbia. Explore healthcare career opportunities alongside the practicalities of settling in a new city.",
    benefitsTitle: "A clearer plan, with support", benefits: ["Immigration guidance from a regulated Canadian immigration consultant", "A structured plan tailored to your background", "Help understanding the next step and where to find the right resources"],
    note: "Applicants must complete and submit their own BCCNM and Inspire applications. JiaYang provides guidance and immigration consulting; licensing, admission, hiring and immigration decisions remain with the respective organizations.",
    sources: "Official application information",
  },
  zh: {
    home: "首页", label: "面向护理毕业生的职业路径", title: "您的加拿大护理生涯，从这里开始",
    subtitle: "从中国，走向加拿大不列颠哥伦比亚省列治文。", strapline: "学习 · 工作 · 移民",
    intro: "带着您的护理教育背景与职业理想，开启新的篇章。佳阳移民帮助中国护理毕业生及有经验的护士，了解在 BC 省执业与生活所需的准备步骤。",
    photo: "AI 生成示意图，非真实员工或客户。", cta: "咨询您的发展路径", supportTitle: "每个阶段，都有清晰的方向",
    support: [
      { title: "护理执照准备指导", text: "了解 Inspire Global Assessments（原 NCAS）的学历与能力评估、BCCNM 注册、可能需要的衔接课程，以及适用的 NCLEX-RN 或 REX-PN 执照考试准备。" },
      { title: "移民路径规划", text: "与加拿大持牌移民顾问一起了解快速通道（Express Entry）、BC 省提名及工作许可选项。适合的路径取决于个人资历、实际情况及届时的项目条件。" },
      { title: "就业准备支持", text: "了解 BC 省卫生局、医院、诊所及长期护理机构的工作机会，为联系潜在雇主和求职做好准备。" },
      { title: "英语准备指导", text: "区分护理注册与移民所需的语言证明。护理注册可使用符合要求的 IELTS Academic；快速通道申请如选择雅思，则须使用 IELTS General Training。我们协助您梳理学习方向与培训资源。" },
    ],
    eligibilityTitle: "适合哪些申请人？",
    eligibility: ["希望提前规划的护理专业应届生", "近期护理专业毕业生", "具备临床经验的护士", "有意向赴海外发展护理事业的申请人"],
    eligibilityNote: "您可以在毕业前开始规划。执业注册、院校课程及移民申请分别由相关机构按各自条件审核。",
    stepsTitle: "一步一步，规划赴加拿大的路径",
    stepsIntro: "结合您的职业目标与移民需求制定个人计划。部分步骤可以并行，具体顺序可能随评估结果调整。",
    steps: [
      ["初步交流", "通过项目说明或咨询，讨论您的教育背景、工作经验与目标。"],
      ["准备英语", "确认护理注册及拟申请移民路径各自需要的语言证明。"],
      ["整理资历材料", "准备学历、身份证明及护理执业记录，用于相关评估。"],
      ["完成所需评估", "按照 Inspire 和 BCCNM 的指引完成学历及护理能力评估。"],
      ["推进执业注册", "完成要求的衔接教育、适用的注册考试及 BCCNM 的其他条件。"],
      ["探索就业机会", "准备向 BC 省医疗雇主提交求职申请及参加面试。"],
      ["规划移民及工作许可", "评估合法工作所需的许可与适合的移民路径；这项规划也可能提前进行。"],
      ["开启新的生活", "取得所需执照和工作授权后，安排赴加生活与就业。"],
    ],
    bridgingTitle: "什么是 Bridging Program？", bridgingText: "衔接课程帮助海外受训的专业人士适应加拿大的执业要求。了解课程可能包含的内容，以及如何选择适合自己的项目。", bridgingCta: "了解衔接课程",
    richmondTitle: "在列治文，规划您的未来", richmondText: "列治文拥有华语社区、多元文化环境，并毗邻温哥华。规划在 BC 省的护理职业发展时，也可以同步了解这座城市的生活与安居安排。",
    benefitsTitle: "清晰的计划，持续的支持", benefits: ["加拿大持牌移民顾问提供移民咨询", "结合个人背景梳理准备步骤", "帮助理解下一步安排及寻找合适资源"],
    note: "BCCNM 和 Inspire 的申请须由申请人本人填写并提交。佳阳提供信息指导和移民咨询；执照、录取、聘用及移民审批分别由相关机构决定。",
    sources: "官方申请信息",
  },
}

export default function NursingContent() {
  const { lang } = useLang()
  const tx = content[lang]

  return (
    <>
      <section className="px-5 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <nav aria-label={lang === "zh" ? "面包屑导航" : "Breadcrumb"} className="mb-10 flex gap-3 text-sm text-[#718096]"><Link href="/" className="hover:text-[#9B6727]">{tx.home}</Link><span>/</span><span>{lang === "zh" ? "护理项目" : "Nursing"}</span></nav>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#9B6727]">{tx.label}</p>
              <h1 className="font-display text-4xl font-medium leading-[1.12] sm:text-5xl lg:text-6xl">{tx.title}</h1>
              <p className="mt-6 text-xl leading-relaxed text-[#52647C]">{tx.subtitle}</p>
              <p className="mt-5 font-display text-xl italic text-[#9B6727]">{tx.strapline}</p>
              <p className="mt-6 text-lg leading-relaxed text-[#52647C]">{tx.intro}</p>
              <a href="#nursing-contact" className="mt-8 inline-block rounded-full bg-[#C4873A] px-7 py-4 text-sm font-medium text-white hover:bg-[#A06A20]">{tx.cta}</a>
            </div>
            <figure>
              <Image src="/nursing-career.png" alt={lang === "zh" ? "两位身穿蓝色制服的护士，AI 生成示意图" : "Two nurses in blue scrubs, AI-generated illustration"} width={1536} height={1024} preload sizes="(min-width: 1280px) 608px, (min-width: 1024px) 50vw, 100vw" className="w-full rounded-[2rem] shadow-[0_24px_70px_rgba(16,33,59,0.12)]" />
              <figcaption className="mt-3 text-xs leading-relaxed text-[#718096]">{tx.photo}</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 font-display text-3xl sm:text-4xl">{tx.supportTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {tx.support.map((item, i) => <article key={item.title} className="rounded-2xl border border-[#DDE6F0] p-7 sm:p-8"><p className="mb-4 font-display text-3xl text-[#C4873A]">0{i + 1}</p><h3 className="mb-3 text-xl font-medium">{item.title}</h3><p className="text-lg leading-relaxed text-[#52647C]">{item.text}</p></article>)}
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-relaxed text-[#52647C]">{tx.note}</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#9B6727]"><span className="text-[#52647C]">{tx.sources}:</span><a href="https://www.bccnm.ca/RN/applications_registration/how_to_apply/InternationalEN/Pages/Default.aspx" className="underline underline-offset-4">BCCNM</a><a href="https://www.inspireassessments.org/british-columbia/" className="underline underline-offset-4">Inspire Global Assessments</a><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html" className="underline underline-offset-4">IRCC</a></div>
        </div>
      </section>
      <section className="px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div><h2 className="mb-6 font-display text-3xl sm:text-4xl">{tx.eligibilityTitle}</h2><ul className="space-y-4">{tx.eligibility.map(item => <li key={item} className="flex gap-3 text-lg text-[#52647C]"><span aria-hidden="true" className="text-[#C4873A]">✓</span>{item}</li>)}</ul><p className="mt-6 text-base leading-relaxed text-[#52647C]">{tx.eligibilityNote}</p></div>
          <div className="rounded-[2rem] bg-[#10213B] p-8 text-white sm:p-10"><h2 className="font-display text-3xl leading-tight">{tx.bridgingTitle}</h2><p className="mt-5 text-lg leading-relaxed text-[#A8B8D0]">{tx.bridgingText}</p><Link href="/nursing/bridging-program" className="mt-7 inline-block rounded-full border border-[#C4873A] px-6 py-3 text-base text-[#E9BD82] hover:bg-[#C4873A] hover:text-white">{tx.bridgingCta} <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
      <section className="bg-white px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl"><h2 className="font-display text-3xl sm:text-4xl">{tx.stepsTitle}</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#52647C]">{tx.stepsIntro}</p><ol className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">{tx.steps.map(([title, text], i) => <li key={title} className="flex gap-5 border-t border-[#DDE6F0] pt-6"><span className="font-display text-2xl text-[#9B6727]">{String(i + 1).padStart(2, "0")}</span><div><h3 className="text-xl font-medium">{title}</h3><p className="mt-3 text-lg leading-relaxed text-[#52647C]">{text}</p></div></li>)}</ol></div>
      </section>
      <section className="px-5 py-16 sm:px-6 md:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2"><div><h2 className="font-display text-3xl sm:text-4xl">{tx.richmondTitle}</h2><p className="mt-6 text-lg leading-relaxed text-[#52647C]">{tx.richmondText}</p></div><div><h2 className="font-display text-3xl sm:text-4xl">{tx.benefitsTitle}</h2><ul className="mt-6 space-y-4">{tx.benefits.map(item => <li key={item} className="flex gap-3 text-lg leading-relaxed text-[#52647C]"><span aria-hidden="true" className="text-[#C4873A]">✓</span>{item}</li>)}</ul></div></div></section>
    </>
  )
}
