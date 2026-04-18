---
title: 使用须知
createTime: 2026/04/18 21:40:00
permalink: /guide/prerequisites/
---

# 使用须知

在开始部署之前，建议先了解 ResourceTool 的核心组件和使用场景。

## 三个 Telegram Bot

ResourceTool 内置三个独立的 Telegram Bot，需要在 [@BotFather](https://t.me/BotFather) 中分别创建，获取各自的 Token 后在面板中配置。

:::: card-grid
::: card title="主 Bot" icon="material-symbols:smart-toy"
面向 **管理员**。资源搜索、链接转存、频道监控管理的核心入口。
:::
::: card title="副 Bot（115 助手）" icon="material-symbols:robot-2"
面向 **管理员 / 被授权用户**。与主 Bot 功能相同，绑定到指定 115 账号。
:::
::: card title="Emby Bot" icon="material-symbols:live-tv"
面向 **Emby 终端用户**。账号绑定、邀请码、密码管理、服务器状态查看。
:::
::::

### 主 Bot

管理员日常操作的核心入口。

**菜单功能：**

| 菜单按钮 | 说明 |
|---------|------|
| 🔍 搜索影视 | 搜索 TMDB + HDHive 资源，内联按钮查看详情、解锁、一键转存 |
| 👥 HDHive 用户 | 查看所有 HDHive 用户的在线状态、周额度、积分、Premium 等信息 |
| 📡 监控转发 | 查看监控转发规则列表，点击即可切换单项开关 |
| 📥 监控转存 | 查看监控转存规则列表，点击即可切换单项开关 |
| 📋 最新日志 | 查看最近 50 条系统日志 |
| ℹ️ 版本信息 | 查看当前版本号、Bot 名称、运行时间 |

::: details 命令列表
| 命令 | 说明 |
|------|------|
| `/start` | 打开主菜单 |
| `/search 关键词` | 搜索影视资源 |
| `/show_hdhive_users_info` | HDHive 用户详情 |
| `/logs` | 最近日志 |
| `/version` | 版本信息 |
:::

**消息处理：**

- **发送 HDHive 链接** → 自动解锁资源并转存
- **转发频道消息** → 自动识别消息中的 115/magnet/ed2k 链接，匹配频道规则后转存
- **智能去重** — 如果转发来源频道已配置了监控转存规则，跳过确认直接转存
- **图片/超链接/Telegraph 页面** — 自动提取隐藏的资源链接
- **实时通知** — 转存成功、离线完成、番号提取等状态推送

::: important
主 Bot 本身**无法**主动监听其他频道消息。要实现自动监听，需要配合 MTProto Session + 频道监控/频道转存功能。
:::

### 副 Bot（115 助手）

每个 115 账号配置中可以绑定一个独立的副 Bot。副 Bot 与主 Bot **使用相同的功能和菜单**，区别在于：

| | 主 Bot | 副 Bot |
|------|--------|--------|
| **数量** | 1 个 | 每个 115 配置可绑定 1 个 |
| **转存目标** | 按规则匹配 | 绑定到该 115 账号 |
| **通知路由** | 通知管理员 | 通知该 115 配置的关联用户 |
| **访问控制** | 管理员白名单 | 独立的白名单（AllowedUserIDs） |

**使用场景：**

- 管理员管理多个 115 账号，每个账号有独立的 Bot 供对应用户使用
- 被授权的用户可以通过副 Bot 搜索和转存资源到指定 115 账号
- 转存完成通知自动路由到副 Bot 的关联用户，不会混乱

### Emby Bot

面向 Emby 终端用户的自助服务 Bot，每个 Emby 302 实例可配置一个独立的 Emby Bot。

**用户菜单：**

| 功能 | 说明 |
|------|------|
| 👤 个人信息 | 查看账号状态、到期时间、网盘模式、Cookie 状态 |
| 📺 我的会话 | 查看当前活跃的播放会话 |
| 🎬 媒体库统计 | 电影/剧集/单集/音乐数量统计 |
| 🏆 观影排行 | 1 天 / 7 天 / 30 天观影时长排行榜 |
| 📡 服务器状态 | Emby 服务器在线状态、延迟、版本 |
| 🔗 访问线路 | 查看可用的 Emby 访问线路 |
| 🔐 修改密码 | 验证旧密码后修改，同步到 Emby 服务端 |
| 🔄 重置密码 | 重置为随机密码，同步到 Emby 服务端 |
| 🍪 更新 Cookie | 自备模式用户更新 115 Cookie |
| 🗑️ 回收站密码 | 设置 115 回收站清理密码 |
| 🎟 使用邀请码 | 兑换邀请码续期 |
| 🔀 模式切换 | 在共享/自备模式之间切换（需管理员开放） |
| 🔗 绑定 / 🔓 解绑 | 绑定或解绑 Telegram 账号 |

::: details 用户命令
| 命令 | 说明 |
|------|------|
| `/start` | 主菜单 |
| `/bind 绑定码` | 绑定账号 |
| `/unbind` | 解绑账号 |
| `/invite 邀请码` | 兑换邀请码 |
| `/userinfo` | 个人信息 |
| `/status` | 服务器状态 |
| `/cookie` | 更新 115 Cookie |
| `/recyclepass` | 设置回收站密码 |
| `/changepw 旧密码 新密码` | 修改密码 |
| `/resetpw` | 重置密码 |
| `/switchmode` | 切换网盘模式 |
| `/mysessions` | 我的会话 |
| `/lines` | 访问线路 |
| `/count` | 媒体库统计 |
| `/leaderboard` | 观影排行榜 |
| `/help` | 命令帮助 |
:::

::: details 管理员命令
| 命令 | 说明 |
|------|------|
| `/sessions` | 查看所有活跃会话 |
| `/users` | 用户统计 |
| `/approve 用户名` | 审核通过用户（支持 `all`） |
| `/ban 用户名` | 禁用用户 |
| `/unban 用户名` | 启用用户 |
| `/low_activity` | 活跃度检测 |
| `/groupsync` | 群组同步检测 |
:::

::: details 管理员菜单额外功能
- 📋 审核待通过 — 查看并审核待通过用户
- 🔄 批量续期 — 7天/30天/365天 批量续期
- 🎟 生成邀请码 — 交互式生成邀请码（选择数量、时长、模式）
- 🔗 群组同步 — 检测群组成员与 Emby 用户同步情况
:::

::: details 群组管理命令（可在群组中使用，支持回复消息）
| 命令 | 说明 |
|------|------|
| `/lookup 用户名` | 查看/管理用户 |
| `/perm 用户名` | 设为永久用户 |
| `/unperm 用户名 天数` | 取消永久 |
| `/create 用户名 天数` | 快捷创建账号 |
| `/delete 用户名` | 删除用户账号 |
:::

### MTProto Session

::: important MTProto Session
除了三个 Bot 之外，还可以配置 MTProto Session 来实现频道自动化。Session 以**你的个人 Telegram 账号**身份登录，可以实时监听已加入的所有频道消息（新消息 + 编辑消息），这是 Bot 无法做到的。
:::

**登录方式：** 验证码 / 二步验证密码 / QR 码扫码（三选一）

::: caution
Session 登录后，**频道监控**（转发到其他 TG 频道）和**频道转存**（转存到 115 网盘）才能正常工作。未配置 Session 时，频道监控相关功能将无法使用。
:::

## Emby 播放全场景

ResourceTool 围绕 Emby 提供了完整的播放方案，以下是各场景简要介绍。

:::: card-grid
::: card title="302 直链播放" icon="material-symbols:play-circle"
核心播放方式。Emby 客户端播放时，302 重定向到 115 网盘直链，客户端直接从 115 CDN 流式播放，无需占用服务器带宽。
:::
::: card title="路径替换模式" icon="material-symbols:route"
STRM 文件存放本地挂载路径或 CD2 URL，系统通过路径映射规则查找 115 文件获取直链。支持 CD2 gRPC 毫秒级加速和多 115 账号秒传分流。
:::
::: card title="Pickcode 模式" icon="material-symbols:key"
STRM 文件直接存放 115 文件的 pickcode，无需路径映射，配置更简单。系统根据 pickcode 直接向 115 获取直链。
:::
::: card title="分享播放" icon="material-symbols:share"
跨账号播放无需事先转存。系统自动执行三级兜底：分享秒传 → 分享转存 → 分享直链，多副号轮询，临时文件自动清理。
:::
::: card title="同播复制" icon="material-symbols:content-copy"
115 并发限制下的解决方案。多用户同时播放同一视频时，自动为后续用户创建文件副本获取独立直链，播放结束后自动清理。
:::
::: card title="预缓存" icon="material-symbols:cached"
用户打开详情页即提前获取直链并缓存，正式播放时零延迟响应。内置防重复机制，避免快速浏览时产生过多请求。
:::
::::

::: note Emby 原生播放（降级）
当 115 出现风控（如 405）时，系统自动执行降级策略：先尝试通过 CloudDrive2 本地代理播放，最终回退到 Emby 自身的原始播放链路，确保用户始终能播放。
:::

### 自备网盘

Emby 开服场景下，支持两种用户模式：

:::: card-grid
::: card title="共享模式" icon="material-symbols:group"
所有用户共用管理员的 115 账号播放，适合小规模开服。
:::
::: card title="自备模式" icon="material-symbols:person"
用户通过 Emby Bot 绑定自己的 115 Cookie 独立播放，直链缓存隔离，互不影响，适合大规模开服。
:::
::::
