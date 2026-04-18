---
title: 项目介绍
createTime: 2026/04/18 17:41:42
permalink: /guide/socw95qo/
---

# 项目介绍

## 什么是 ResourceTool？

ResourceTool 是一款**一站式影视资源自动化管理平台**，集成 HDHive 搜索、Telegram 频道监控、115 网盘自动转存和 Emby 302 直链播放服务。

它帮助影视爱好者实现从**资源发现 → 自动转存 → 直链播放**的全流程自动化，极大减少手动操作。

::: important
ResourceTool 只是一款自动化工具，**不提供任何影视资源**。
:::

## 核心能力

:::: card-grid
::: card title="影视搜索" icon="material-symbols:search"
集成 TMDB + HDHive Open API，搜索、详情、解锁、转存一站完成。多 HDHive 用户按剩余额度智能调度，Bot 内直接搜索即时推送。
:::
::: card title="Telegram 自动化" icon="material-symbols:cell-tower"
基于 MTProto Session 实时监听频道消息，多源多目标灵活转发，黑白名单关键词过滤，HDHive 链接自动解锁，Go Template 脱敏。
:::
::: card title="115 自动转存" icon="material-symbols:cloud-download"
自动识别 115 分享链接、magnet、ed2k 链接，消息到达即处理，3 秒防抖合并，每个频道独立转存目录，per-cookie 全局限速。
:::
::: card title="Emby 302 直链播放" icon="material-symbols:play-circle"
路径替换 + Pickcode 双模式，CD2 gRPC 毫秒级响应，秒传 + 同播复制多用户同时播放，预缓存零延迟，分享播放三级兜底。
:::
::: card title="Emby 开服管理" icon="material-symbols:manage-accounts"
用户创建、同步、激活码、到期管理一体化。设备流控防止账号共享，自备 Cookie 独立播放，多线路配置与自动过滤。
:::
::: card title="系统管理" icon="material-symbols:settings"
JWT + 双角色权限控制，HTTP/SOCKS5 代理按域名智能分流，一键配置导入导出，日志按天轮转自动清理。
:::
::::