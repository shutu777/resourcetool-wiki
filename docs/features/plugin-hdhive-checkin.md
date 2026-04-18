---
title: HDHive 签到
createTime: 2026/04/18 17:44:40
permalink: /features/plugin-hdhive-checkin/
---

# HDHive 签到

对应前端侧边栏 **插件库 → HDHive 签到**，通过 HDHive Open API 自动完成每日签到，领取积分奖励。

## 功能概述

::: important 核心用途
HDHive 积分是解锁影视资源的货币。每日签到可获取免费积分，本插件支持自动签到并提供两种签到策略，帮助积累积分。
:::

## 页面结构

进入插件后，页面展示所有已配置的 HDHive 用户的签到状态：

| 字段 | 说明 |
|------|------|
| **HDHive 用户** | 用户名称 |
| **签到状态** | <Badge type="tip" text="已签到" /> 或 <Badge type="warning" text="未签到" /> |
| **获得积分** | 本次签到获取的积分数 |
| **当前余额** | 账户剩余积分 |
| **签到模式** | 普通 / 赌狗 |
| **操作** | 手动签到 / 编辑配置 |

## 签到模式

:::: card-grid
::: card title="普通签到" icon="material-symbols:check-circle"
稳定获取固定积分，无风险。适合积分充裕或保守型用户。
:::
::: card title="赌狗模式" icon="material-symbols:casino"
随机获取积分，上限更高但有概率获得较少积分。适合追求高收益的用户。
:::
::::

::: caution 赌狗模式风险
赌狗模式的积分收益随机波动，极端情况下可能不如普通签到。请根据自身积分储备谨慎选择。
:::

## 配置项

| 配置项 | 说明 |
|--------|------|
| **启用自动签到** | 开关，控制是否自动签到 |
| **签到时间** | 每日自动签到执行时间 |
| **签到模式** | 普通签到 / 赌狗模式 |

## 使用方法

::::: steps

1. **配置 HDHive 用户**

   确保已在 [HDHive 助手](hdhive-users.md) 中添加了 HDHive API Key

2. **进入插件**

   在前端侧边栏点击 **插件库 → HDHive 签到**

3. **设置签到策略**

   为每个 HDHive 用户选择签到模式和时间

4. **查看签到结果**

   签到后可在列表中查看获得积分和账户余额

:::::

## 注意事项

::: warning API Key 有效性
签到依赖有效的 HDHive API Key。如果签到失败，请在 [HDHive 助手](hdhive-users.md) 中确认 API Key 状态。
:::
