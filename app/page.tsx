"use client"

import { LangProvider, useLang } from "./context/lang"
import Header from "./components/Header"

const t = {
  zh: {
    heroTag: "持牌 RCIC 移民顾问",
    heroTitle: "与您同行",
    heroSub: "开启新生活",
    heroDesc: "无论您面对何种移民困境，佳阳移民以专业、耐心与温暖，陪伴您走过每一步。",
    heroBtn: "免费咨询",
    servicesTag: "我们的服务",
    servicesTitle: "全方位移民服务",
    services: [
      { icon: "🕊️", title: "难民与人道主义", desc: "为需要庇护和人道主义保护的申请人提供专业支持，守护您的安全与尊严。" },
      { icon: "👨‍👩‍👧", title: "家庭团聚", desc: "协助配偶、子女及父母移民申请，让家人早日团聚，共享天伦之乐。" },
      { icon: "🎓", title: "移民与留学", desc: "学习签证、工作许可、毕业生工签，为您的学业与职业发展保驾护航。" },
      { icon: "✈️", title: "旅游与探亲", desc: "探亲签证、旅游签证申请，让您轻松往来，与家人保持联系。" },
      { icon: "📋", title: "延期与续签", desc: "身份延期、续签及各类疑难案件处理，维护您在加拿大的合法身份。" },
      { icon: "🍁", title: "入籍与枫叶卡", desc: "加拿大入籍申请及永久居民卡更新，助您深根加拿大，开创新篇章。" },
    ],
    aboutTag: "关于佳阳",
    aboutTitle: "专业与温暖并重",
    aboutDesc1: "佳阳移民由持牌注册移民顾问（RCIC）创立，深耕加拿大移民领域多年，服务华人及各族裔移民客户。",
    aboutDesc2: "我们深知移民路上的不易，每一个案件都全力以赴，以专业知识和真诚态度，为每位客户争取最好的结果。",
    rcic: "持牌注册移民顾问",
    rcicSub: "RCIC Licensed",
    stat1: "多年经验",
    stat2: "服务客户",
    stat3: "成功率",
    testimonialsTag: "客户见证",
    testimonialsTitle: "他们的新生活，是我们最大的骄傲",
    testimonials: [
      { text: "佳阳移民帮助我顺利完成家庭团聚申请，整个过程专业细致，让我非常安心。感谢他们让我的家人终于团聚在一起！", name: "王女士", type: "家庭团聚" },
      { text: "我的案件非常复杂，很多机构都拒绝受理，佳阳移民耐心分析，最终帮我成功获批。真的非常感激！", name: "陈先生", type: "疑难案件" },
      { text: "从留学签证到毕业工签，全程都是佳阳移民在帮我处理，省心省力，强烈推荐！", name: "李同学", type: "留学移民" },
    ],
    contactTag: "联系我们",
    contactTitle: "立即咨询，迈出第一步",
    contactDesc: "无论您处于移民旅程的哪个阶段，我们都在这里为您解答。",
    phone: "电话",
    email: "邮箱",
    wechat: "微信",
    address: "地址",
    formName: "您的姓名",
    formPhone: "联系电话",
    formService: "咨询类型",
    formMsg: "请简要描述您的情况",
    formBtn: "提交咨询",
    footerRights: "版权所有",
    footerLicense: "持牌 RCIC 移民顾问",
  },
  en: {
    heroTag: "Licensed RCIC Immigration Consultant",
    heroTitle: "We Walk",
    heroSub: "With You",
    heroDesc: "Whatever immigration challenges you face, JiaYang Immigration guides you through every step with expertise, patience, and care.",
    heroBtn: "Free Consultation",
    servicesTag: "Our Services",
    servicesTitle: "Comprehensive Immigration Services",
    services: [
      { icon: "🕊️", title: "Refugee & Humanitarian", desc: "Professional support for asylum seekers and humanitarian protection applicants, safeguarding your safety and dignity." },
      { icon: "👨‍👩‍👧", title: "Family Reunification", desc: "Sponsorship applications for spouses, children, and parents to bring your loved ones to Canada." },
      { icon: "🎓", title: "Immigration & Study", desc: "Study permits, work permits, and PGWP applications to support your academic and career journey." },
      { icon: "✈️", title: "Tourism & Family Visits", desc: "Visitor and tourist visa applications to maintain connections with your family." },
      { icon: "📋", title: "Extensions & Renewals", desc: "Status extensions, renewals, and complex case handling to maintain your legal status in Canada." },
      { icon: "🍁", title: "Citizenship & PR Card", desc: "Citizenship applications and PR card renewals to help you build deeper roots in Canada." },
    ],
    aboutTag: "About JiaYang",
    aboutTitle: "Professional & Compassionate",
    aboutDesc1: "JiaYang Immigration was founded by a licensed Regulated Canadian Immigration Consultant (RCIC), with years of experience serving Chinese and multicultural clients across Canada.",
    aboutDesc2: "We understand how challenging the immigration journey can be. We approach every case with full commitment, professional knowledge, and genuine care to achieve the best possible outcome for each client.",
    rcic: "Licensed Immigration Consultant",
    rcicSub: "RCIC Licensed",
    stat1: "Years Experience",
    stat2: "Clients Served",
    stat3: "Success Rate",
    testimonialsTag: "Client Stories",
    testimonialsTitle: "Their New Lives Are Our Greatest Pride",
    testimonials: [
      { text: "JiaYang Immigration helped me complete my family sponsorship application smoothly. The process was professional and thorough, giving me great peace of mind.", name: "Ms. Wang", type: "Family Reunification" },
      { text: "My case was very complex and many agencies refused to take it. JiaYang patiently analyzed everything and ultimately helped me get approved. I'm truly grateful!", name: "Mr. Chen", type: "Complex Case" },
      { text: "From my study permit to PGWP, JiaYang handled everything. Stress-free and highly recommended!", name: "Student Li", type: "Study Immigration" },
    ],
    contactTag: "Contact Us",
    contactTitle: "Start Your Journey Today",
    contactDesc: "Wherever you are in your immigration journey, we are here to help.",
    phone: "Phone",
    email: "Email",
    wechat: "WeChat",
    address: "Address",
    formName: "Your Name",
    formPhone: "Phone Number",
    formService: "Service Type",
    formMsg: "Briefly describe your situation",
    formBtn: "Submit Inquiry",
    footerRights: "All Rights Reserved",
    footerLicense: "Licensed RCIC Immigration Consultant",
  },
}

function Home() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <main className="flex-1">
      <Header />

      {/* Hero */}
      <section className="min-h-screen flex items-center bg-[#FEFCF8] pt-16">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4873A] mb-6">{tx.heroTag}</p>
            <h1 className="font-display text-6xl md:text-7xl font-medium text-[#2A1F0E] leading-tight mb-4">
              {tx.heroTitle}
            </h1>
            <h2 className="font-display text-4xl md:text-5xl font-normal italic text-[#C4873A] mb-8">
              {tx.heroSub}
            </h2>
            <p className="text-[#6B5535] text-base leading-relaxed mb-10 max-w-md">{tx.heroDesc}</p>
            <a
              href="#contact"
              className="inline-block bg-[#C4873A] text-white px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[#8B6012] transition-colors"
            >
              {tx.heroBtn}
            </a>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-[#E8D8BC] rounded-full opacity-40" />
              <div className="absolute inset-8 bg-[#C4873A] rounded-full opacity-20" />
              <div className="absolute inset-16 flex items-center justify-center">
                <span className="text-8xl">🍁</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-[#F5EAD8]" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4873A] mb-4">{tx.servicesTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#2A1F0E]">{tx.servicesTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tx.services.map((s) => (
              <div key={s.title} className="bg-[#FEFCF8] p-8 hover:shadow-md transition-shadow">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-lg font-medium text-[#2A1F0E] mb-3">{s.title}</h3>
                <p className="text-[#6B5535] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-[#FEFCF8]" id="about">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4873A] mb-4">{tx.aboutTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#2A1F0E] mb-8">{tx.aboutTitle}</h2>
            <p className="text-[#6B5535] leading-relaxed mb-4">{tx.aboutDesc1}</p>
            <p className="text-[#6B5535] leading-relaxed mb-10">{tx.aboutDesc2}</p>
            <div className="inline-flex items-center gap-3 border border-[#C4873A] px-6 py-3">
              <span className="text-2xl">🍁</span>
              <div>
                <p className="text-sm font-medium text-[#2A1F0E]">{tx.rcic}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4873A]">{tx.rcicSub}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { num: "10+", label: tx.stat1 },
              { num: "500+", label: tx.stat2 },
              { num: "95%", label: tx.stat3 },
            ].map((s) => (
              <div key={s.label} className="text-center py-8 bg-[#F5EAD8]">
                <p className="font-display text-4xl font-medium text-[#C4873A] mb-2">{s.num}</p>
                <p className="text-[11px] tracking-[0.1em] text-[#6B5535]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#2A1F0E]" id="testimonials">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4873A] mb-4">{tx.testimonialsTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#FBF6EE]">{tx.testimonialsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tx.testimonials.map((r) => (
              <div key={r.name} className="bg-[#3A2D1A] p-8">
                <div className="w-8 h-px bg-[#C4873A] mb-6" />
                <p className="font-display text-base italic text-[#E8D8BC] leading-relaxed mb-6">"{r.text}"</p>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#C4873A]">— {r.name}</p>
                <p className="text-[10px] text-[#6B5535] mt-1">{r.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 bg-[#F5EAD8]" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4873A] mb-4">{tx.contactTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#2A1F0E] mb-4">{tx.contactTitle}</h2>
            <p className="text-[#6B5535]">{tx.contactDesc}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                { label: tx.phone, value: "+1 (xxx) xxx-xxxx" },
                { label: tx.email, value: "info@jiayangimmigration.ca" },
                { label: tx.wechat, value: "JiaYangImmigration" },
                { label: tx.address, value: "Canada" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C4873A] w-16 pt-1 shrink-0">{item.label}</span>
                  <span className="text-[#2A1F0E]">{item.value}</span>
                </div>
              ))}
            </div>
            <form className="space-y-4">
              <input type="text" placeholder={tx.formName} className="w-full bg-[#FEFCF8] border border-[#E8D8BC] px-4 py-3 text-sm text-[#2A1F0E] placeholder-[#B8A882] focus:outline-none focus:border-[#C4873A]" />
              <input type="tel" placeholder={tx.formPhone} className="w-full bg-[#FEFCF8] border border-[#E8D8BC] px-4 py-3 text-sm text-[#2A1F0E] placeholder-[#B8A882] focus:outline-none focus:border-[#C4873A]" />
              <select className="w-full bg-[#FEFCF8] border border-[#E8D8BC] px-4 py-3 text-sm text-[#2A1F0E] focus:outline-none focus:border-[#C4873A]">
                <option value="">{tx.formService}</option>
                {tx.services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
              </select>
              <textarea rows={4} placeholder={tx.formMsg} className="w-full bg-[#FEFCF8] border border-[#E8D8BC] px-4 py-3 text-sm text-[#2A1F0E] placeholder-[#B8A882] focus:outline-none focus:border-[#C4873A] resize-none" />
              <button type="submit" className="w-full bg-[#C4873A] text-white py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[#8B6012] transition-colors">
                {tx.formBtn}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#2A1F0E] text-center">
        <p className="text-[#6B5535] text-[11px] tracking-[0.2em]">
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
