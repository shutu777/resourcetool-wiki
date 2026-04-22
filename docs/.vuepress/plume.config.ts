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
      title: "新手指南",
      sidebar: [
        { text: "项目介绍", link: "intro" },
        { text: "使用须知", link: "prerequisites" },
        { text: "快速开始", link: "quick-start" },
        { text: "升级指南", link: "upgrade" },
        { text: "更新日志", link: "changelog" },
        { text: "免责声明", link: "disclaimer" },
      ],
    },
    {
      type: "doc",
      dir: "features",
      linkPrefix: "/features/",
      title: "功能详解",
      sidebar: [
        {
          text: "概览",
          collapsed: false,
          items: [
            { text: "Emby 助手", link: "emby302" },
            { text: "115 助手", link: "pan115-config" },
            { text: "缓存管理", link: "emby302-cache" },
            { text: "预缓存", link: "precache" },
          ],
        },
        {
          text: "插件库",
          collapsed: false,
          items: [
            { text: "插件库", link: "plugins" },
          ],
        },
        {
          text: "监控",
          collapsed: false,
          items: [
            { text: "监控转发", link: "channel-monitor" },
            { text: "监控转存", link: "channel-transfer" },
            { text: "使用统计", link: "usage-stats" },
          ],
        },
        {
          text: "开服",
          collapsed: false,
          items: [
            { text: "Emby 用户", link: "emby-user-mgmt" },
            { text: "实例管理", link: "emby-instances" },
            { text: "访问线路", link: "emby-lines" },
            { text: "活跃设备", link: "emby-sessions" },
            { text: "公告管理", link: "announcements" },
            { text: "邀请码", link: "activation-codes" },
            { text: "求片管理", link: "media-requests" },
            { text: "签到与积分", link: "checkin-points" },
            { text: "开服配置", link: "emby-security" },
          ],
        },
        {
          text: "HDHive",
          collapsed: false,
          items: [
            { text: "HDHive 搜索", link: "hdhive-search" },
            { text: "HDHive 助手", link: "hdhive-users" },
            { text: "HDHive 记录", link: "hdhive-records" },
          ],
        },
        {
          text: "秒传",
          collapsed: false,
          items: [
            { text: "秒传", link: "pan115-transfer" },
          ],
        },
        {
          text: "系统",
          collapsed: false,
          items: [
            { text: "系统配置", link: "system-config" },
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
