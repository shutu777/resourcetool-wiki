---
title: Telegram 助手
createTime: 2026/04/18 17:44:40
permalink: /features/plugin-telegram-config/
---

# Telegram 助手

对应前端侧边栏 **插件库 → Telegram 助手**，配置 Telegram Bot 和 MTProto Session，是频道监控、消息转发、用户交互等功能的基础。

## 功能概述

::: important 核心用途
Telegram 助手是 ResourceTool 与 Telegram 通信的枢纽。配置 MTProto Session 后可监听频道消息实现自动转发/转存；配置 Bot Token 后可通过 Bot 搜索影视、管理用户、接收通知。
:::

## 页面结构

页面分为两大配置区域：**MTProto Session** 和 **主 Bot 配置**。

### MTProto Session

用于登录 Telegram 用户账号，实现频道消息的实时监听。

| 配置项 | 说明 |
|--------|------|
| **API ID** | Telegram 应用的 API ID（从 [my.telegram.org](https://my.telegram.org) 获取） |
| **API Hash** | Telegram 应用的 API Hash |
| **手机号** | Telegram 账号的手机号码 |
| **Session 状态** | <Badge type="tip" text="已登录" /> 或 <Badge type="danger" text="未登录" /> |

::: caution MTProto Session 安全
Session 等同于 Telegram 账号的登录凭证，请妥善保管。Session 泄露可能导致账号被他人控制。
:::

::: details 登录流程
::::: steps

1. **填写 API 信息**

   输入 API ID、API Hash 和手机号

2. **获取验证码**

   点击「发送验证码」，Telegram 会向该手机号发送验证码

3. **输入验证码**

   在弹窗中输入收到的验证码

4. **二步验证（如有）**

   如果账号开启了二步验证，还需输入二步验证密码

5. **登录成功**

   Session 状态变为 <Badge type="tip" text="已登录" />，即可使用频道监控功能

:::::
:::

### 主 Bot 配置

配置 ResourceTool 的主 Telegram Bot，用于用户交互和通知推送。

| 配置项 | 说明 |
|--------|------|
| **Bot Token** | 从 [@BotFather](https://t.me/BotFather) 获取的 Bot Token |
| **白名单** | 允许使用 Bot 的用户 ID 列表，留空不限制 |
| **Chat ID** | Bot 发送通知的目标聊天 ID（用户/群组/频道） |

::: details Bot 功能菜单
配置完成后，Bot 支持以下功能：
- **搜索影视** — 通过 Bot 直接搜索 TMDB + HDHive 资源
- **HDHive 用户管理** — 查看积分余额和消耗
- **监控转发/转存** — 查看当前监控规则状态
- **日志查看** — 获取最近系统日志
- **版本信息** — 查看当前 ResourceTool 版本
:::

## 使用方法

::::: steps

1. **获取 API 凭证**

   前往 [my.telegram.org](https://my.telegram.org) 创建应用，获取 API ID 和 API Hash

2. **登录 MTProto Session**

   填写 API 信息和手机号，完成验证码登录

3. **创建 Bot**

   通过 [@BotFather](https://t.me/BotFather) 创建 Bot 并获取 Token

4. **配置 Bot**

   填写 Bot Token、白名单和 Chat ID

5. **保存配置**

   点击保存后，Bot 自动上线开始工作

:::::

## 注意事项

::: warning Session 过期
MTProto Session 可能因长时间未使用或 Telegram 安全策略而过期，需要重新登录。如果监控转发突然停止，请优先检查 Session 状态。
:::

::: info Bot 与 Session 的区别
- **MTProto Session** — 用于监听频道消息（转发/转存的前提）
- **Bot Token** — 用于用户交互和通知推送（搜索/管理的前提）

两者独立工作，可根据需要单独配置。
:::
