---
title: Telegram Session 配置
createTime: 2026/04/18 17:45:29
permalink: /features/au6rzwd6/
---

# Telegram Session 配置

MTProto Session 是频道监控和频道转存的基础，用于以用户身份（而非 Bot）监听频道消息。

## 为什么需要 Session？

Telegram Bot 有以下限制：

- Bot 无法监听非自己管理的频道消息
- Bot 无法读取频道历史消息
- Bot 的消息接收存在延迟

MTProto Session 使用**用户账号**登录，可以实时监听所有已加入频道的消息，无上述限制。

## 登录方式

ResourceTool 支持三种 Session 登录方式：

### 1. 验证码登录

1. 输入手机号码
2. Telegram 会发送验证码到 App
3. 在 ResourceTool 中输入验证码完成登录

### 2. 二步验证

如果 Telegram 账号开启了二步验证（Two-Factor Authentication）：

1. 先完成验证码步骤
2. 系统提示输入二步验证密码
3. 输入密码完成登录

### 3. QR 码登录

1. 选择 QR 码登录方式
2. 系统显示二维码
3. 使用 Telegram 手机 App 扫码确认

## 配置步骤

1. 进入 **Telegram 配置** 页面
2. 在 Session 区域选择登录方式
3. 按提示完成登录
4. 登录成功后，Session 会自动持久化

::: warning 安全提示
- Session 登录等同于用你的个人账号登录 Telegram
- 请确保在安全的网络环境下操作
- Session 信息会加密存储在数据库中
:::

## Session 状态

| 状态 | 说明 |
|------|------|
| **在线** | Session 正常连接，频道监控运行中 |
| **离线** | Session 未登录或已断开 |
| **重连中** | 网络中断后自动重连 |

## 注意事项

- 一个 Telegram 账号同时只能有一个活跃的 MTProto Session
- 如果在其他设备登录相同账号，可能导致 Session 失效
- Session 失效后需要重新登录
