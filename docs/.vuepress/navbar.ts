import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "首页", link: "/", icon: "material-symbols:home" },
  {
    text: "快速开始",
    icon: "material-symbols:rocket-launch",
    items: [
      { text: "快速开始", link: "/guide/quick-start/", icon: "material-symbols:rocket-launch" },
      { text: "使用须知", link: "/guide/prerequisites/", icon: "material-symbols:settings" },
      { text: "升级指南", link: "/guide/upgrade/", icon: "material-symbols:upgrade" },
    ],
  },
  {
    text: "功能详解",
    icon: "material-symbols:extension",
    items: [
      {
        text: "核心配置",
        items: [
          { text: "Emby 播放全场景", link: "/features/emby302/", icon: "material-symbols:play-circle" },
          { text: "115 云盘配置", link: "/features/pan115/", icon: "material-symbols:cloud" },
          { text: "Telegram 集成", link: "/features/telegram/", icon: "material-symbols:cell-tower" },
          { text: "HDHive 助手", link: "/features/hdhive/", icon: "material-symbols:search" },
        ],
      },
      {
        text: "Emby 运营",
        items: [
          { text: "Emby 用户管理", link: "/features/emby-users/", icon: "material-symbols:manage-accounts" },
          { text: "实例与 Bot", link: "/features/emby-instances/", icon: "material-symbols:dns" },
          { text: "签到与积分", link: "/features/emby-checkin/", icon: "material-symbols:toll" },
          { text: "线路与会话", link: "/features/emby-lines/", icon: "material-symbols:link" },
          { text: "公告与邀请码", link: "/features/emby-codes/", icon: "material-symbols:confirmation-number" },
          { text: "求片系统", link: "/features/emby-requests/", icon: "material-symbols:movie-filter" },
          { text: "安全配置", link: "/features/emby-security/", icon: "material-symbols:security" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "系统管理", link: "/features/system/", icon: "material-symbols:tune" },
          { text: "监控大屏", link: "/features/monitor/", icon: "material-symbols:tv" },
        ],
      },
    ],
  },
  { text: "FAQ", link: "/faq/", icon: "material-symbols:help" },
]);
