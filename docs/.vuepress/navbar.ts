import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "首页", link: "/", icon: "material-symbols:home" },
  {
    text: "新手指南",
    icon: "material-symbols:menu-book",
    items: [
      { text: "项目介绍", link: "/guide/intro", icon: "material-symbols:info" },
      { text: "免责声明", link: "/guide/disclaimer", icon: "material-symbols:shield" },
      { text: "快速开始", link: "/guide/quick-start", icon: "material-symbols:rocket-launch" },
      { text: "使用须知", link: "/guide/prerequisites", icon: "material-symbols:settings" },
      { text: "升级指南", link: "/guide/upgrade", icon: "material-symbols:upgrade" },
    ],
  },
  {
    text: "功能详解",
    icon: "material-symbols:extension",
    items: [
      {
        text: "概览",
        items: [
          { text: "Emby 助手", link: "/features/emby302", icon: "material-symbols:play-circle" },
          { text: "115 助手", link: "/features/pan115-config", icon: "material-symbols:cloud" },
          { text: "缓存管理", link: "/features/emby302-cache", icon: "material-symbols:database" },
        ],
      },
      {
        text: "插件库",
        items: [
          { text: "115 健康检查", link: "/features/plugin-115-health", icon: "material-symbols:health-and-safety" },
          { text: "115 签到", link: "/features/plugin-115-checkin", icon: "material-symbols:event-available" },
          { text: "CloudDrive2 助手", link: "/features/plugin-cd2", icon: "material-symbols:cloud-sync" },
          { text: "HDHive 签到", link: "/features/plugin-hdhive-checkin", icon: "material-symbols:stars" },
          { text: "Telegram 助手", link: "/features/plugin-telegram-config", icon: "material-symbols:send" },
          { text: "Telegram 签到", link: "/features/plugin-telegram-checkin", icon: "material-symbols:schedule-send" },
        ],
      },
      {
        text: "监控",
        items: [
          { text: "监控转发", link: "/features/channel-monitor", icon: "material-symbols:cell-tower" },
          { text: "监控转存", link: "/features/channel-transfer", icon: "material-symbols:content-copy" },
          { text: "使用统计", link: "/features/usage-stats", icon: "material-symbols:bar-chart" },
        ],
      },
      {
        text: "开服",
        items: [
          { text: "Emby 用户", link: "/features/emby-user-mgmt", icon: "material-symbols:manage-accounts" },
          { text: "访问线路", link: "/features/emby-lines", icon: "material-symbols:link" },
          { text: "活跃设备", link: "/features/emby-sessions", icon: "material-symbols:tv" },
          { text: "公告管理", link: "/features/announcements", icon: "material-symbols:campaign" },
          { text: "邀请码", link: "/features/activation-codes", icon: "material-symbols:confirmation-number" },
          { text: "开服配置", link: "/features/emby-security", icon: "material-symbols:security" },
        ],
      },
      {
        text: "HDHive",
        items: [
          { text: "HDHive 搜索", link: "/features/hdhive-search", icon: "material-symbols:search" },
          { text: "HDHive 助手", link: "/features/hdhive-users", icon: "material-symbols:group" },
          { text: "HDHive 记录", link: "/features/hdhive-records", icon: "material-symbols:history" },
        ],
      },
      {
        text: "秒传",
        items: [
          { text: "秒传", link: "/features/pan115-transfer", icon: "material-symbols:cloud-upload" },
        ],
      },
      {
        text: "系统",
        items: [
          { text: "系统配置", link: "/features/system-config", icon: "material-symbols:tune" },
        ],
      },
    ],
  },
  { text: "FAQ", link: "/faq/", icon: "material-symbols:help" },
  { text: "更新日志", link: "/guide/changelog/", icon: "material-symbols:update" },
]);
