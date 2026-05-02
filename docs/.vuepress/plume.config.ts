import { defineThemeConfig } from "vuepress-theme-plume";
import navbar from "./navbar.js";

export default defineThemeConfig({
  logo: "/logo-light.png",
  logoDark: "/logo.png",
  appearance: true,

  profile: {
    name: "ResourceTool",
    description: "一站式影视资源自动化管理平台",
  },

  navbar,

  // Social links in navbar
  social: [
    {
      icon: "github",
      link: "https://github.com/shutu777/ResourceTool-Wiki",
    },
    {
      icon: "docker",
      link: "https://hub.docker.com/r/shutu736/resource-tool",
    },
  ],

  navbarSocialInclude: ["github", "docker"],

  // Dark mode transition animation
  transition: {
    page: true,
    postList: true,
    appearance: "circle-clip",
  },

  // Show deeper heading outline in aside
  outline: [2, 4],

  // Document collections with auto-sidebar
  collections: [
    {
      type: "doc",
      dir: "guide",
      linkPrefix: "/guide/",
      title: "快速开始",
      sidebar: [
        { text: "快速开始", link: "quick-start" },
        { text: "使用须知", link: "prerequisites" },
        { text: "升级指南", link: "upgrade" },
      ],
    },
    {
      type: "doc",
      dir: "features",
      linkPrefix: "/features/",
      title: "功能详解",
      sidebar: [
        {
          text: "核心配置",
          collapsed: false,
          items: [
            { text: "Emby 302 直链播放", link: "emby302" },
            { text: "115 云盘配置", link: "pan115" },
            { text: "Telegram 集成", link: "telegram" },
            { text: "HDHive 助手", link: "hdhive" },
          ],
        },
        {
          text: "Emby 运营",
          collapsed: false,
          items: [
            { text: "Emby 用户管理", link: "emby-user-mgmt" },
            { text: "实例与 Bot", link: "emby-instances" },
            { text: "签到与积分", link: "checkin-points" },
            { text: "线路与会话", link: "emby-lines" },
            { text: "公告与邀请码", link: "emby-codes" },
            { text: "求片系统", link: "media-requests" },
            { text: "安全配置", link: "emby-security" },
          ],
        },
        {
          text: "其他",
          collapsed: false,
          items: [
            { text: "系统管理", link: "system" },
            { text: "监控大屏", link: "monitor" },
          ],
        },
      ],
    },
    {
      type: "doc",
      dir: "faq",
      linkPrefix: "/faq/",
      title: "FAQ",
      sidebar: "auto",
    },
  ],

  // Footer
  footer: {
    message:
      'ResourceTool Wiki | <a href="https://github.com/shutu777/ResourceTool-Wiki" target="_blank">GitHub</a>',
    copyright: "Copyright © 2024-2026 ResourceTool",
  },
});