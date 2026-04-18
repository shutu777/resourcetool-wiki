import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";

export default defineUserConfig({
  base: "/resourcetool-wiki/",
  lang: "zh-CN",
  title: "ResourceTool Wiki",
  description: "ResourceTool 官方文档 — 一站式影视资源自动化管理平台",

  head: [
    ["link", { rel: "icon", href: "/resourcetool-wiki/logo.png" }],
    ["meta", { name: "theme-color", content: "#3b82f6" }],
  ],

  theme: plumeTheme({
    // Hot-reloadable config is in plume.config.ts
    hostname: "https://shutu777.github.io/resourcetool-wiki/",
    docsRepo: "shutu777/ResourceTool-Wiki",
    docsDir: "docs",
    docsBranch: "main",
    editLink: false,
  }),

  bundler: viteBundler(),
});
