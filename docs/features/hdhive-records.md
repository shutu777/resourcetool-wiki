---
title: 解锁记录
createTime: 2026/04/18 17:43:45
permalink: /features/hdhive-records/
---

# 解锁记录

对应前端侧边栏 **HDHive → 解锁记录**，展示所有 HDHive 资源解锁的历史记录和统计数据。

## 汇总卡片

页面顶部 4 张统计卡片：

:::: card-grid
::: card title="今日解锁" icon="material-symbols:today"
今天的解锁次数
:::
::: card title="总解锁数" icon="material-symbols:lock-open"
累计解锁次数
:::
::: card title="消耗积分" icon="material-symbols:toll"
累计消耗的 HDHive 积分
:::
::: card title="独立用户" icon="material-symbols:group"
触发过解锁的独立 HDHive 用户数
:::
::::

## 记录列表

下方为可搜索、可分页的解锁记录表格：

| 列名 | 说明 |
|------|------|
| **时间** | 解锁发生时间 |
| **资源名称** | 被解锁的 HDHive 资源标题 |
| **HDHive 用户** | 执行解锁的 HDHive 用户名 |
| **消耗积分** | 本次解锁消耗的积分数 |
| **触发来源** | 手动搜索 / 频道监控自动解锁 |
| **状态** | 成功（绿色）/ 失败（红色） |

支持按关键词搜索资源名称，分页展示（每页 10/20/30 条可选）。
