"use client"

import { LangProvider, useLang } from "./context/lang"
import Header from "./components/Header"

const t = {
  zh: {
    heroTag: "加拿大持牌移民顾问 · ICCRC Licensed",
    heroTitle: "专业移民服务",
    heroSub: "用心做好细节，以诚赢得信赖",
    heroDesc: "佳阳移民深耕加拿大移民领域近7年，为华人及各族裔客户提供全面专业的移民服务。",
    heroBtn: "立即免费咨询",
    heroBtn2: "查看服务",
    servicesTag: "服务范围",
    servicesTitle: "全方位移民服务",
    services: [
      { num: "01", title: "难民与人道主义", desc: "为需要庇护和人道主义保护的申请人提供专业支持，守护您的安全与尊严。" },
      { num: "02", title: "家庭团聚", desc: "协助配偶、子女及父母移民申请，让家人早日团聚，共享天伦之乐。" },
      { num: "03", title: "移民与留学", desc: "学习签证、工作许可、毕业生工签，为您的学业与职业发展保驾护航。" },
      { num: "04", title: "旅游与探亲", desc: "探亲签证、旅游签证申请，让您轻松往来，与家人保持联系。" },
      { num: "05", title: "延期与续签", desc: "身份延期、续签及各类疑难案件处理，维护您在加拿大的合法身份。" },
      { num: "06", title: "入籍与枫叶卡", desc: "加拿大入籍申请及永久居民卡更新，助您深根加拿大，开创新篇章。" },
    ],
    aboutTag: "关于我们",
    aboutTitle: "佳阳移民",
    aboutDesc1: "佳阳移民是加拿大持牌移民顾问公司，深耕移民领域近7年，致力于为华人及各族裔客户提供专业、真诚的移民服务。",
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
    phone: "电话",
    email: "邮箱",
    wechat: "微信",
    address: "地址",
    formName: "您的姓名",
    formPhone: "联系电话",
    formService: "咨询类型",
    formMsg: "请简要描述您的情况",
    formBtn: "提交咨询",
    processTag: "服务流程",
    processTitle: "四步开启您的移民之旅",
    steps: [
      { num: "01", title: "免费咨询", desc: "通过电话、微信或邮件与我们联系，顾问将免费评估您的移民资格和最佳方案。" },
      { num: "02", title: "案件评估", desc: "深入分析您的个人情况，制定专属移民方案，明确所需材料和时间线。" },
      { num: "03", title: "材料准备", desc: "全程指导材料收集与整理，确保申请文件完整、准确，最大化获批概率。" },
      { num: "04", title: "递交跟进", desc: "代您递交申请，全程跟进审理进度，及时处理移民局的补件要求。" },
    ],
    footerRights: "版权所有",
    footerLicense: "加拿大持牌移民顾问",
  },
  en: {
    heroTag: "Licensed Canadian Immigration Consultant · ICCRC Licensed",
    heroTitle: "Professional Immigration Services",
    heroSub: "Attention to Detail. Trust Through Integrity.",
    heroDesc: "JiaYang Immigration has served Chinese and multicultural clients across Canada for nearly 7 years with expertise and care.",
    heroBtn: "Free Consultation",
    heroBtn2: "Our Services",
    servicesTag: "Services",
    servicesTitle: "Comprehensive Immigration Services",
    services: [
      { num: "01", title: "Refugee & Humanitarian", desc: "Professional support for asylum seekers and humanitarian protection applicants, safeguarding your safety and dignity." },
      { num: "02", title: "Family Reunification", desc: "Sponsorship applications for spouses, children, and parents to bring your loved ones to Canada." },
      { num: "03", title: "Immigration & Study", desc: "Study permits, work permits, and PGWP applications to support your academic and career journey." },
      { num: "04", title: "Tourism & Family Visits", desc: "Visitor and tourist visa applications to maintain connections with your family." },
      { num: "05", title: "Extensions & Renewals", desc: "Status extensions, renewals, and complex case handling to maintain your legal status in Canada." },
      { num: "06", title: "Citizenship & PR Card", desc: "Citizenship applications and PR card renewals to help you build deeper roots in Canada." },
    ],
    aboutTag: "About Us",
    aboutTitle: "JiaYang Immigration",
    aboutDesc1: "JiaYang Immigration is a licensed Canadian immigration consulting company with nearly 7 years of experience, dedicated to serving Chinese and multicultural clients with professionalism and integrity.",
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
    phone: "Phone",
    email: "Email",
    wechat: "WeChat",
    address: "Address",
    formName: "Your Name",
    formPhone: "Phone Number",
    formService: "Service Type",
    formMsg: "Briefly describe your situation",
    formBtn: "Submit Inquiry",
    processTag: "How It Works",
    processTitle: "Four Steps to Your New Life",
    steps: [
      { num: "01", title: "Free Consultation", desc: "Contact us by phone, WeChat, or email. Our consultant will assess your eligibility and recommend the best immigration pathway at no cost." },
      { num: "02", title: "Case Assessment", desc: "We conduct an in-depth analysis of your situation and create a personalized immigration plan with clear timelines and document requirements." },
      { num: "03", title: "Document Preparation", desc: "We guide you through every document required, ensuring your application is complete and accurate to maximize approval chances." },
      { num: "04", title: "Submission & Follow-up", desc: "We submit your application and track its progress, responding promptly to any requests from immigration authorities." },
    ],
    footerRights: "All Rights Reserved",
    footerLicense: "Licensed Canadian Immigration Consultant",
  },
}

function Home() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <main className="flex-1">
      <Header />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16 relative overflow-hidden" style={{background: "linear-gradient(135deg, #1B2B4E 0%, #0F1A30 100%)"}}>
        <div className="absolute inset-0 z-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15}} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4873A] mb-8">{tx.heroTag}</p>
          <h1 className="font-display text-5xl md:text-7xl font-medium text-white leading-tight mb-6 max-w-3xl">
            {tx.heroTitle}
          </h1>
          <p className="text-[#C4873A] text-lg md:text-xl font-display italic mb-6">{tx.heroSub}</p>
          <p className="text-[#A8B8D0] text-base leading-relaxed mb-12 max-w-xl">{tx.heroDesc}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="inline-block bg-[#C4873A] text-white px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[#A06A20] transition-colors">
              {tx.heroBtn}
            </a>
            <a href="#services" className="inline-block border border-[#A8B8D0] text-[#A8B8D0] px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:border-white hover:text-white transition-colors">
              {tx.heroBtn2}
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#C4873A]">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-3 divide-x divide-[#A06A20]">
          {[
            { num: "7+", label: tx.stat1 },
            { num: "400+", label: tx.stat2 },
            { num: "5.0 ★", label: tx.stat3 },
          ].map((s) => (
            <div key={s.label} className="text-center px-4">
              <p className="font-display text-3xl font-medium text-white mb-1">{s.num}</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-white" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4873A] mb-4">{tx.servicesTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#1B2B4E]">{tx.servicesTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E9F0]">
            {tx.services.map((s) => (
              <div key={s.title} className="bg-white p-8 hover:bg-[#F5F7FB] transition-colors">
                <p className="font-display text-3xl font-light text-[#C4873A] mb-4">{s.num}</p>
                <h3 className="text-base font-medium text-[#1B2B4E] mb-3">{s.title}</h3>
                <p className="text-[#5A6A82] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-[#1B2B4E]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4873A] mb-4">{tx.processTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white">{tx.processTitle}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-0">
            {tx.steps.map((s, i) => (
              <div key={s.num} className="relative p-8 border-l border-[#2A3E60] first:border-l-0 md:first:border-l md:border-l">
                <p className="font-display text-4xl font-light text-[#C4873A] mb-4">{s.num}</p>
                <h3 className="text-base font-medium text-white mb-3">{s.title}</h3>
                <p className="text-[#A8B8D0] text-sm leading-relaxed">{s.desc}</p>
                {i < tx.steps.length - 1 && (
                  <span className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-[#C4873A] text-lg z-10">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-[#F5F7FB]" id="about">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4873A] mb-4">{tx.aboutTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#1B2B4E] mb-8">{tx.aboutTitle}</h2>
            <p className="text-[#5A6A82] leading-relaxed mb-4">{tx.aboutDesc1}</p>
            <p className="text-[#5A6A82] leading-relaxed mb-10">{tx.aboutDesc2}</p>
            <div className="inline-flex items-center gap-4 bg-white border border-[#E5E9F0] px-6 py-4">
              <div className="w-8 h-8 bg-[#1B2B4E] flex items-center justify-center">
                <span className="text-white text-sm font-bold">🍁</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1B2B4E]">{tx.rcic}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4873A]">{tx.rcicSub}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1B2B4E] p-12 text-white">
            <p className="font-display text-2xl italic text-[#C4873A] mb-6">
              {lang === "zh" ? "「用心做好细节，以诚赢得信赖」" : '"Attention to detail, trust through integrity."'}
            </p>
            <p className="text-[#A8B8D0] text-sm leading-relaxed">
              {lang === "zh"
                ? "自2016年成立以来，佳阳移民始终坚持以客户利益为先，用专业赢得每一位客户的信任。"
                : "Since 2016, JiaYang Immigration has put clients first, earning trust through professionalism and dedication."}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white" id="testimonials">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4873A] mb-4">{tx.testimonialsTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#1B2B4E]">{tx.testimonialsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tx.testimonials.map((r) => (
              <div key={r.name} className="border border-[#E5E9F0] p-8">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-[#C4873A] text-sm">★</span>)}
                </div>
                <p className="text-[#2A3A52] leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[#1B2B4E]">{r.name}</p>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#C4873A] border border-[#C4873A] px-2 py-1">{r.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 bg-[#1B2B4E]" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4873A] mb-4">{tx.contactTag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-4">{tx.contactTitle}</h2>
            <p className="text-[#A8B8D0]">{tx.contactDesc}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                { label: tx.phone, value: "+1 (604) 238-6686" },
                { label: tx.email, value: "jy.simon.ca@gmail.com" },
                { label: tx.wechat, value: "Kris0214" },
                { label: tx.address, value: "5599 Cooney Rd, Unit 2, Richmond, BC V6X 3M6" },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 border-b border-[#2A3E60] pb-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C4873A] w-14 pt-1 shrink-0">{item.label}</span>
                  <span className="text-white text-sm">{item.value}</span>
                </div>
              ))}
            </div>
            <form action="https://formspree.io/f/xpqbkzdy" method="POST" className="space-y-4">
              <input type="text" name="name" placeholder={tx.formName} className="w-full bg-[#2A3E60] border border-[#3A5070] px-4 py-3 text-sm text-white placeholder-[#5A7090] focus:outline-none focus:border-[#C4873A]" />
              <input type="tel" name="phone" placeholder={tx.formPhone} className="w-full bg-[#2A3E60] border border-[#3A5070] px-4 py-3 text-sm text-white placeholder-[#5A7090] focus:outline-none focus:border-[#C4873A]" />
              <select name="service" className="w-full bg-[#2A3E60] border border-[#3A5070] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C4873A]">
                <option value="">{tx.formService}</option>
                {tx.services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
              </select>
              <textarea name="message" rows={4} placeholder={tx.formMsg} className="w-full bg-[#2A3E60] border border-[#3A5070] px-4 py-3 text-sm text-white placeholder-[#5A7090] focus:outline-none focus:border-[#C4873A] resize-none" />
              <button type="submit" className="w-full bg-[#C4873A] text-white py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[#A06A20] transition-colors">
                {tx.formBtn}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-[#111D33] text-center">
        <p className="text-[#3A5070] text-[11px] tracking-[0.2em]">
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
