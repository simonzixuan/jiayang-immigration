export const siteUrl = "https://jiayangimmigration.com"

export type ServicePage = {
  slug: string
  title: string
  titleEn: string
  metaTitle: string
  description: string
  keywords: string[]
  summary: string
  summaryEn: string
  idealFor: string[]
  support: string[]
  faqs: { q: string; a: string }[]
}

export const servicePages: ServicePage[] = [
  {
    slug: "refugee-humanitarian",
    title: "难民与人道主义申请",
    titleEn: "Refugee & Humanitarian Applications",
    metaTitle: "难民与人道主义申请 | Richmond BC 移民顾问 | 佳阳移民",
    description: "佳阳移民为 Richmond BC 及大温哥华客户提供难民、人道主义及复杂移民案件咨询，协助梳理背景、证据和申请路径。",
    keywords: ["难民申请", "人道主义申请", "Richmond immigration consultant", "refugee claim Canada", "humanitarian immigration"],
    summary: "为需要庇护、人道主义考量或复杂移民支持的申请人，提供清晰、谨慎、以材料为核心的案件评估。",
    summaryEn: "Careful case assessment and document-focused support for refugee, humanitarian, and complex Canadian immigration matters.",
    idealFor: ["需要评估难民或人道主义路径", "已有复杂背景或拒签记录", "需要整理证据和时间线"],
    support: ["初步资格和风险评估", "案件背景梳理", "材料清单和证据逻辑", "递交后进度跟进"],
    faqs: [
      { q: "难民或人道主义申请适合所有人吗？", a: "不适合。此类申请需要结合个人经历、风险、证据和加拿大移民法规综合判断，建议先做初步评估。" },
      { q: "如果已有拒签记录，还能咨询吗？", a: "可以。拒签记录会影响策略，但不代表一定没有后续路径，需要先看拒签原因和现有身份情况。" },
      { q: "可以远程沟通吗？", a: "可以。佳阳移民服务加拿大境内外客户，可通过电话、微信或邮件沟通。" },
    ],
  },
  {
    slug: "family-sponsorship",
    title: "家庭团聚移民",
    titleEn: "Family Sponsorship",
    metaTitle: "家庭团聚移民 | 配偶父母子女担保 | Richmond BC 移民顾问",
    description: "佳阳移民协助配偶、子女、父母及家庭团聚类移民申请，服务 Richmond BC、大温哥华及境外客户。",
    keywords: ["家庭团聚", "配偶移民", "父母团聚", "spousal sponsorship", "family sponsorship Richmond"],
    summary: "为希望与家人在加拿大团聚的申请人，提供关系证明、担保材料和递交流程支持。",
    summaryEn: "Support for Canadian family sponsorship applications, including spousal, dependent child, and parent sponsorship matters.",
    idealFor: ["配偶或伴侣担保", "子女团聚申请", "父母或祖父母相关咨询"],
    support: ["关系证明材料梳理", "担保人资格评估", "申请表格和文件准备", "补件和进度跟进"],
    faqs: [
      { q: "配偶团聚通常需要多久？", a: "时间会随项目和申请地点变化，常见区间约为 12 到 18 个月，具体以移民局进度为准。" },
      { q: "境外配偶可以申请吗？", a: "可以。境内和境外配偶团聚路径不同，材料重点也不同，建议先评估适合的递交方式。" },
      { q: "第一次咨询收费吗？", a: "首次咨询免费，可先了解基本情况、路径和大致材料要求。" },
    ],
  },
  {
    slug: "work-study-permit",
    title: "学签、工签与毕业工签",
    titleEn: "Study, Work Permit & PGWP",
    metaTitle: "学签工签毕业工签 | Richmond BC 移民顾问 | 佳阳移民",
    description: "佳阳移民提供加拿大学签、工签、毕业工签 PGWP 及相关身份规划咨询，服务留学生、毕业生和雇主支持类申请人。",
    keywords: ["学签", "工签", "毕业工签", "PGWP", "study permit", "work permit Richmond"],
    summary: "围绕学习、工作和身份衔接，帮助申请人理解材料要求、时间节点和后续移民可能性。",
    summaryEn: "Guidance for Canadian study permits, work permits, PGWP, and status planning for students and workers.",
    idealFor: ["准备申请加拿大学签", "毕业后申请 PGWP", "需要工签延期或转换身份"],
    support: ["学习计划和材料审查", "工签类别判断", "身份衔接时间线", "拒签后重新准备建议"],
    faqs: [
      { q: "学签被拒后还能再申请吗？", a: "可以，但需要先分析拒签原因，再决定是否补强学习计划、资金证明或其他材料。" },
      { q: "毕业工签什么时候申请？", a: "通常需要在符合条件的时间窗口内申请，建议毕业前就提前确认材料和时间线。" },
      { q: "工签可以和移民规划一起评估吗？", a: "可以。工签、工作经验和后续移民路径经常需要一起规划。" },
    ],
  },
  {
    slug: "visitor-visa",
    title: "旅游签与探亲签",
    titleEn: "Visitor Visa & Family Visit",
    metaTitle: "加拿大旅游签探亲签 | Richmond BC 移民顾问 | 佳阳移民",
    description: "佳阳移民协助加拿大、美国、澳大利亚旅游签和探亲签申请，帮助客户整理访问目的、资金、家庭联系和行程材料。",
    keywords: ["旅游签", "探亲签", "加拿大 visitor visa", "visitor visa Richmond", "family visit visa"],
    summary: "为探亲、旅游、短期访问客户准备更清晰的访问目的、资金和回国约束力材料。",
    summaryEn: "Visitor visa support for tourism, family visits, and short-term travel, with clear documentation planning.",
    idealFor: ["父母或亲友来加拿大探亲", "旅游访问加拿大", "已有拒签记录需要重新准备"],
    support: ["访问目的说明", "邀请信和行程建议", "资金与家庭联系材料", "拒签原因分析"],
    faqs: [
      { q: "探亲签一定需要邀请信吗？", a: "通常建议准备邀请信，并配合申请人的资金、家庭联系和访问计划一起说明。" },
      { q: "旅游签拒签后多久能再申请？", a: "没有固定答案，重点是拒签原因是否已经被解决，材料是否有实质补强。" },
      { q: "可以帮父母申请探亲签吗？", a: "可以。我们会根据父母的情况和邀请方在加拿大的信息准备材料方向。" },
    ],
  },
  {
    slug: "status-extension",
    title: "身份延期与续签",
    titleEn: "Status Extension & Renewal",
    metaTitle: "身份延期续签 | 加拿大合法身份维护 | Richmond BC 移民顾问",
    description: "佳阳移民协助访客、学生、工人等在加拿大的身份延期、续签和身份衔接问题，帮助客户维护合法身份。",
    keywords: ["身份延期", "续签", "visitor record", "status extension Canada", "restore status"],
    summary: "帮助在加拿大境内的客户确认身份有效期、延期路径和递交时间，降低身份中断风险。",
    summaryEn: "Support for Canadian status extension, renewal, and transition planning for visitors, students, and workers.",
    idealFor: ["访客身份即将到期", "学签或工签需要续签", "需要恢复身份或衔接新申请"],
    support: ["身份有效期检查", "延期类别判断", "材料和时间线准备", "递交后跟进"],
    faqs: [
      { q: "身份到期前多久应准备延期？", a: "建议尽早准备，避免临近截止日期时材料不足或递交风险增加。" },
      { q: "已经过期还能处理吗？", a: "需要先看过期时间和身份类别，部分情况可能涉及恢复身份，建议尽快咨询。" },
      { q: "延期期间可以继续留在加拿大吗？", a: "是否可以继续停留取决于递交时间和身份类型，需要按具体情况判断。" },
    ],
  },
  {
    slug: "citizenship-pr-card",
    title: "入籍与枫叶卡更新",
    titleEn: "Citizenship & PR Card Renewal",
    metaTitle: "加拿大入籍与枫叶卡更新 | Richmond BC 移民顾问",
    description: "佳阳移民协助加拿大入籍申请、永久居民卡更新、居住义务和材料准备，服务 Richmond BC 及大温哥华居民。",
    keywords: ["加拿大入籍", "枫叶卡更新", "PR card renewal", "Canadian citizenship", "Richmond immigration services"],
    summary: "为永久居民准备入籍或枫叶卡更新材料，梳理居住时间、证明文件和申请细节。",
    summaryEn: "Support for Canadian citizenship applications, PR card renewals, residency obligation review, and document preparation.",
    idealFor: ["准备申请加拿大入籍", "枫叶卡即将过期", "需要确认居住时间或旅行记录"],
    support: ["居住时间初步核对", "申请材料清单", "旅行记录整理", "递交和补件跟进"],
    faqs: [
      { q: "枫叶卡过期是否代表失去永久居民身份？", a: "枫叶卡过期不等于自动失去永久居民身份，但旅行和续卡会受到影响，需要看居住义务是否满足。" },
      { q: "入籍需要准备哪些材料？", a: "通常涉及身份证明、居住时间、语言或其他要求，具体以申请人情况和官方要求为准。" },
      { q: "旅行记录复杂怎么办？", a: "可以先整理出入境记录和护照页，再核对是否满足居住时间要求。" },
    ],
  },
  {
    slug: "entrepreneur-immigration",
    title: "企业家移民",
    titleEn: "Entrepreneur Immigration",
    metaTitle: "企业家移民与创业移民 | BC PNP SUV 咨询 | 佳阳移民",
    description: "佳阳移民为有创业或商业计划的申请人提供企业家移民、BC PNP Entrepreneur、Start-Up Visa 等路径初步评估。",
    keywords: ["企业家移民", "创业移民", "BC PNP Entrepreneur", "Start-Up Visa", "SUV Canada"],
    summary: "为有商业背景、创业计划或投资意向的客户评估可行移民路径和前期准备重点。",
    summaryEn: "Initial pathway assessment for entrepreneurs and business-minded applicants considering Canadian immigration options.",
    idealFor: ["有创业或管理经验", "希望在加拿大开展业务", "想了解 BC PNP 或 SUV 路径"],
    support: ["项目适配度初步评估", "商业背景梳理", "申请路径比较", "材料准备方向"],
    faqs: [
      { q: "企业家移民一定需要商业计划吗？", a: "多数商业类项目都需要清晰的商业方向和证明材料，具体取决于项目要求。" },
      { q: "SUV 和省提名企业家项目有什么不同？", a: "两者定位、要求和流程不同，需要结合申请人的背景、资源和目标选择。" },
      { q: "可以先做初步评估吗？", a: "可以。建议先评估个人背景、资产、语言、商业计划和时间预期。" },
    ],
  },
  {
    slug: "investor-immigration",
    title: "投资类移民评估",
    titleEn: "Investor Immigration Assessment",
    metaTitle: "投资类移民评估 | 加拿大省提名投资项目 | 佳阳移民",
    description: "佳阳移民为具备资产实力和投资意向的申请人评估加拿大投资类、省提名及商业移民路径。",
    keywords: ["投资移民", "省提名投资", "加拿大商业移民", "investor immigration", "business immigration Canada"],
    summary: "帮助申请人从资产、商业经验、地区选择和项目要求出发，判断投资类移民路径是否适合。",
    summaryEn: "Assessment for investor and business immigration pathways based on assets, business experience, and project fit.",
    idealFor: ["具备一定资产和商业经验", "考虑加拿大投资或商业项目", "需要比较不同省份路径"],
    support: ["背景和资产条件初评", "项目要求说明", "地区和路径比较", "材料准备建议"],
    faqs: [
      { q: "加拿大还有传统投资移民吗？", a: "项目会随政策变化，具体需要根据当前可行的省提名或商业类路径评估。" },
      { q: "投资金额越高越容易获批吗？", a: "不一定。项目匹配、商业经验、真实性和材料质量都很重要。" },
      { q: "可以只做路径咨询吗？", a: "可以。初步咨询可以先判断是否值得继续深入准备。" },
    ],
  },
  {
    slug: "express-entry",
    title: "快速通道 Express Entry",
    titleEn: "Express Entry",
    metaTitle: "Express Entry 快速通道 | CRS 评估 | Richmond BC 移民顾问",
    description: "佳阳移民提供 Express Entry 快速通道、CRS 分数评估、提分策略和永久居民申请支持，服务 Richmond BC 及境内外客户。",
    keywords: ["Express Entry", "快速通道", "CRS 评分", "联邦技术移民", "Richmond Express Entry consultant"],
    summary: "为技术移民申请人评估 CRS 分数、语言学历工作经验和可行提分方向，规划永久居民申请路径。",
    summaryEn: "Express Entry support including CRS assessment, score-improvement planning, and permanent residence application guidance.",
    idealFor: ["有加拿大或海外工作经验", "想评估 CRS 分数", "准备申请联邦技术移民或相关省提名"],
    support: ["CRS 初步评估", "提分策略建议", "材料清单和时间线", "递交后跟进"],
    faqs: [
      { q: "Express Entry 主要看什么？", a: "主要看 CRS 综合评分，包括年龄、学历、语言、工作经验、加拿大经历和其他加分因素。" },
      { q: "分数不够还能做什么？", a: "可以评估语言提分、学历认证、工作经验、省提名或其他路径是否可行。" },
      { q: "快速通道一定 6 个月出结果吗？", a: "6 个月通常指部分完整申请递交后的目标处理时间，实际仍会受案件和移民局进度影响。" },
    ],
  },
]

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug)
}
