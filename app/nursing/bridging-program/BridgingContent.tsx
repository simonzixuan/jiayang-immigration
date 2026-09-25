"use client"

import Link from "next/link"
import { useLang } from "../../context/lang"

const content = {
  en: {
    home: "Home", nursing: "Nursing pathway", label: "Understanding your options", title: "What is a bridging program?",
    intro: "A bridging program helps internationally trained professionals connect their existing education and experience with Canadian workplace expectations. It can support employment preparation and integration into professional practice.",
    nursingNote: "For nurses, bridging or transitional education may address gaps identified during the registration process. The education you need depends on your assessment and BCCNM’s requirements.",
    featuresTitle: "How bridging programs can help",
    features: [
      { title: "Profession-specific learning", text: "Programs focus on a profession or sector. Nursing education addresses healthcare practice rather than the general job-search skills covered by newcomer employment services." },
      { title: "Practical experience", text: "Depending on the program, learning may include simulation, a supervised practicum or workplace experience. Check the course details to understand what is included and what placements require." },
      { title: "A fit for your background", text: "Admission criteria help match a program to your professional education and preparation. Some programs have a competitive selection process; entry is not automatic." },
    ],
    who: "Who are bridging programs for?", whoIntro: "They are designed for internationally educated professionals. Before applying, check the specific provider’s requirements for:",
    requirements: ["A relevant overseas post-secondary qualification or professional credential", "Professional experience, where required by the program", "English proficiency sufficient for the course and its practical components", "Canadian immigration status and any authorization needed for study, work or placement", "An assessment outcome or regulator referral, where required"],
    eligibilityNote: "There is no single experience or IELTS threshold for every bridging program. Entry criteria and language scores vary; confirm the requirements with the school and regulator before applying.",
    helpTitle: "Finding the right program", help: "JiaYang helps Chinese nurses understand available resources and the immigration considerations around further study. Start with your assessment outcome, then look at a program’s recognition, admission criteria, duration, fees and clinical requirements.",
    source: "Read BCCNM’s guidance for internationally educated nurses", back: "Back to the nursing pathway",
  },
  zh: {
    home: "首页", nursing: "护理项目", label: "了解您的选择", title: "什么是衔接课程？",
    intro: "衔接课程（Bridging Program）帮助海外受训的专业人士，将已有学历和工作经验与加拿大职场要求相衔接，为就业准备与职业融入提供支持。",
    nursingNote: "对于护士，衔接或过渡教育可用于补足注册评估中发现的差距。需要修读哪些课程，取决于个人评估结果及 BCCNM 的要求。",
    featuresTitle: "衔接课程能提供哪些帮助？",
    features: [
      { title: "针对专业的学习", text: "课程围绕特定职业或行业设置。护理衔接教育侧重医疗护理实践，有别于一般新移民就业服务中的通用求职技能培训。" },
      { title: "实践经验", text: "不同课程可能包含模拟训练、受监督实习或职场实践。申请前应查阅课程内容，确认是否安排实践及参与所需条件。" },
      { title: "匹配个人背景", text: "入学条件用于判断课程是否适合申请人的专业背景和准备程度。部分课程择优录取，符合基本条件并不代表自动获录。" },
    ],
    who: "衔接课程适合谁？", whoIntro: "此类课程面向海外受训的专业人士。申请前，请向具体课程提供方确认以下条件：",
    requirements: ["相关海外高等教育学历或专业资格", "课程要求的相关工作经验（如适用）", "足以参与学习及实践环节的英语能力", "加拿大移民身份，以及学习、工作或实习所需授权", "评估结果或监管机构转介要求（如适用）"],
    eligibilityNote: "衔接课程没有统一的工作年限或雅思分数门槛。各课程的录取和语言要求不同，申请前应向院校及监管机构核实。",
    helpTitle: "寻找适合自己的课程", help: "佳阳帮助中国护士了解相关资源，以及进一步学习涉及的移民问题。建议先了解评估结果，再比较课程认可情况、入学要求、时长、费用及临床实践条件。",
    source: "阅读 BCCNM 海外受训护士官方指引", back: "返回护理项目介绍",
  },
}

export default function BridgingContent() {
  const { lang } = useLang()
  const tx = content[lang]

  return (
    <>
      <section className="bg-[#10213B] px-5 pb-16 pt-32 text-white sm:px-6 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <nav aria-label={lang === "zh" ? "面包屑导航" : "Breadcrumb"} className="mb-10 flex flex-wrap gap-3 text-sm text-[#A8B8D0]"><Link href="/" className="hover:text-white">{tx.home}</Link><span>/</span><Link href="/nursing" className="hover:text-white">{tx.nursing}</Link><span>/</span><span>Bridging</span></nav>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#E9BD82]">{tx.label}</p>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">{tx.title}</h1>
          <p className="mt-7 text-xl leading-relaxed text-[#D9E4F2]">{tx.intro}</p>
          <p className="mt-5 text-lg leading-relaxed text-[#A8B8D0]">{tx.nursingNote}</p>
        </div>
      </section>
      <article className="mx-auto max-w-4xl px-5 py-16 sm:px-6 md:py-20">
        <h2 className="font-display text-3xl sm:text-4xl">{tx.featuresTitle}</h2>
        <div className="mt-8 space-y-8">{tx.features.map((item, i) => <section key={item.title} className="flex gap-5 border-t border-[#DDE6F0] pt-7"><span aria-hidden="true" className="font-display text-3xl text-[#9B6727]">0{i + 1}</span><div><h3 className="text-xl font-medium">{item.title}</h3><p className="mt-3 text-lg leading-relaxed text-[#52647C]">{item.text}</p></div></section>)}</div>
        <section className="mt-16"><h2 className="font-display text-3xl sm:text-4xl">{tx.who}</h2><p className="mt-6 text-lg leading-relaxed text-[#52647C]">{tx.whoIntro}</p><ul className="mt-6 list-disc space-y-4 pl-6 text-lg leading-relaxed text-[#52647C] marker:text-[#9B6727]">{tx.requirements.map(item => <li key={item}>{item}</li>)}</ul><p className="mt-6 text-base leading-relaxed text-[#52647C]">{tx.eligibilityNote}</p></section>
        <section className="mt-16"><h2 className="font-display text-3xl sm:text-4xl">{tx.helpTitle}</h2><p className="mt-6 text-lg leading-relaxed text-[#52647C]">{tx.help}</p><a href="https://www.bccnm.ca/RN/applications_registration/how_to_apply/InternationalEN/Pages/Default.aspx" className="mt-5 inline-block text-base text-[#9B6727] underline underline-offset-4">{tx.source}</a></section>
        <Link href="/nursing" className="mt-12 inline-block rounded-full border border-[#C4873A] px-6 py-3 text-base text-[#9B6727] hover:bg-[#C4873A] hover:text-white"><span aria-hidden="true">← </span>{tx.back}</Link>
      </article>
    </>
  )
}
