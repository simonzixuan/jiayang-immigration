import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./sanity/schemaTypes"

export default defineConfig({
  name: "jiayang-immigration",
  title: "佳阳移民后台",
  projectId: "byyhmzdj",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
