import { defineField, defineType } from "sanity"

export default defineType({
  name: "news",
  title: "移民动态",
  type: "document",
  fields: [
    defineField({ name: "title", title: "标题", type: "string" }),
    defineField({ name: "titleEn", title: "英文标题", type: "string" }),
    defineField({ name: "slug", title: "链接", type: "slug", options: { source: "title" } }),
    defineField({ name: "publishedAt", title: "发布日期", type: "datetime" }),
    defineField({ name: "summary", title: "摘要", type: "text", rows: 3 }),
    defineField({ name: "summaryEn", title: "英文摘要", type: "text", rows: 3 }),
    defineField({ name: "body", title: "正文", type: "array", of: [{ type: "block" }] }),
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt" },
  },
})
