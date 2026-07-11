---
title: 快速开始
createTime: 2026/05/02
permalink: /guide/quick-start/
---

# 快速开始

## 什么是 ResourceTool？

ResourceTool 是一款**一站式影视资源自动化管理平台**，集成 HDHive 搜索、Telegram 频道监控、115 网盘自动转存和 Emby 播放网关服务。

它帮助影视爱好者实现从**资源发现 → 自动转存 → 直链播放**的全流程自动化。

::: important
ResourceTool 只是一个自动化工具，**不提供任何影视资源**。
:::

### 授权与售价

ResourceTool 采用付费授权模式，按功能分为两个版本：

| 版本 | 价格 | 功能范围 |
|------|------|---------|
| **基础版** | ¥129 | HDHive 搜刮、Telegram 频道监控与转存、115 网盘自动管理、Emby 播放网关、系统管理 |
| **开服版** | ¥299 | 包含基础版全部功能 + Emby 运营管理（用户管理、用户面板、权限模板、媒体库管控、Bot 交互、签到积分、邀请码、设备流控、求片系统、多线路、生命周期任务、防攻击等） |
| **专业版** | ¥399 | 包含基础版全部功能 + 开服全部功能 + Telegram搜索 + 缺集补漏 |

::: tip 授权说明
- 基础版授权码即可使用核心搜刮和播放功能，适合个人或家庭自用
- 开服版在基础版之上解锁完整的 Emby 运营套件，适合对外提供服务的场景
- 授权码绑定设备，购买后可找管理员换绑
:::

### 核心能力

:::: card-grid
::: card title="影视搜索" icon="material-symbols:search"
集成 TMDB + HDHive 中心网关，一站式搜索、解锁、转存。授权用户智能调度，Bot 内即时推送。
:::
::: card title="Telegram 自动化" icon="material-symbols:cell-tower"
MTProto Session 实时监听频道，多源多目标转发，关键词过滤，HDHive 自动解锁。
:::
::: card title="115 自动转存" icon="material-symbols:cloud-download"
支持 115 扫码登录、VIP/容量检测，自动识别 115 分享链接、magnet、ed2k，每个频道独立转存目录。
:::
::: card title="Emby 播放全场景" icon="material-symbols:play-circle"
按 STRM 类型和网盘模式自动分流，覆盖路径、Pickcode、分享、自备、同播复制和原生兜底。
:::
::: card title="Emby 开服管理" icon="material-symbols:manage-accounts"
用户管理、权限模板、媒体库管控、生命周期任务、自备 Cookie、多线路配置与积分签到系统。
:::
::: card title="系统管理" icon="material-symbols:settings"
JWT 权限控制，HTTP/SOCKS5 代理智能分流，HDHive 网关接入，备份还原，日志按天轮转。
:::
::::

---

## 部署

本页面将指导你在 5 分钟内完成 ResourceTool 的 Docker 部署。

::: important 前置要求
- 一台 Linux 服务器（推荐 Ubuntu 20.04+）或 NAS 设备
- 安装 [Docker](https://docs.docker.com/engine/install/) 和 [Docker Compose](https://docs.docker.com/compose/install/)
- 获取 ResourceTool 授权码
:::

::: details 如果你还没安装 Docker
可以执行以下一键安装命令（适用于大多数 Linux 发行版）：

```bash
curl -fsSL https://get.docker.com | sh
```
:::

### 环境变量说明

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `RESOURCE_LICENSE` | 授权码，启动必需 | — |
| `TZ` | 时区设置 | `Asia/Shanghai` |
| `GOMEMLIMIT` | Go 运行时内存限制 | `256MiB` |
| `GOGC` | Go GC 触发阈值 | `50` |

::: details 其他可选变量
| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `RESOURCE_PORT` | 后端 API 监听端口 | `29998` |
| `RESOURCE_WEB_PORT` | Web 面板端口（Caddy） | `29999` |
| `RESOURCE_DB_PATH` | SQLite 数据库路径 | `/data/resourcetool.db` |
| `RESOURCE_JWT_SECRET` | JWT 签名密钥（留空自动生成） | 自动生成 |
| `RESOURCE_TRUSTED_PROXIES` | 可信反代 IP，逗号分隔 | `127.0.0.1,::1` |
| `RESOURCE_GOMAXPROCS` | Go 最大 CPU 线程数 | 自动 |
| `RESOURCE_GOMEMLIMIT` | Go 运行时软内存上限 | 按环境变量 |
| `RESOURCE_MAX_THREADS` | Go 最大 OS 线程数 | 默认运行时策略 |
:::

### 部署步骤

::: important 建议使用 Docker Compose 方式部署，便于管理和维护。
:::

::::: steps

1. 创建项目目录

   ```bash
   mkdir -p /opt/resource-tool && cd /opt/resource-tool
   ```

2. 创建 `docker-compose.yml`

   ```yaml
   services:
     resource-tool:
       image: shutu736/resource-tool:latest
       container_name: resource-tool
       restart: always
       network_mode: host
      volumes:
        - ./data:/data
        - /var/run/docker.sock:/var/run/docker.sock
       environment:
         - TZ=Asia/Shanghai
         - RESOURCE_LICENSE=你的授权码
         - GOMEMLIMIT=256MiB
         - GOGC=50
   ```

   ::: caution 数据持久化
   务必将 `/data` 目录挂载到宿主机，否则容器重建后数据库和配置将丢失。
   :::

   ::: tip Docker Socket
   如果需要容器监控、Emby 内存自动管理等功能，建议挂载 `/var/run/docker.sock`。不使用这些能力时可以移除该挂载。
   :::

3. 启动服务

   ```bash
   docker-compose up -d
   ```

4. 结束

   ::: tip 成功
   容器启动后，打开浏览器访问 `http://你的服务器IP:29999` 即可进入管理面板。
   :::

:::::

::: details 使用 Docker CLI 部署（替代方案）

```bash
docker run -d \
  --name resource-tool \
  --restart always \
  --network host \
  -v /opt/resource-tool/data:/data \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -e TZ=Asia/Shanghai \
  -e RESOURCE_LICENSE=你的授权码 \
  -e GOMEMLIMIT=256MiB \
  -e GOGC=50 \
  shutu736/resource-tool:latest
```
:::

---

## 首次访问

浏览器打开 `http://你的服务器IP:29999`，默认管理员账号：

| 项目 | 值 |
|------|------|
| 用户名 | `admin` |
| 密码 | `admin` |

::: caution 安全提示
首次登录后请立即修改默认密码！在右上角头像下拉 → 个人资料页面可以修改用户名和密码。
:::

### 端口说明

| 端口 | 用途 |
|------|------|
| `29999` | Web 管理面板（Caddy 反代） |
| `29998` | 后端 API 端口（内部使用） |
| Emby 302 端口 | 在 Emby 302 配置中自行设定 |

::: info 网络模式
默认使用 `network_mode: host`，容器直接使用宿主机网络。如需 bridge 模式，请自行映射端口。
:::

### 初始化检查

1. 访问 `http://IP:29999` 确认面板可用
2. 登录后查看仪表盘，确认各模块状态
3. 在系统配置中测试代理连接（如已配置）
4. 在插件库/助手中接入 115、HDHive、Telegram 等插件能力
5. 在 115 助手中验证 Cookie、VIP 状态和容量信息

---

## 下一步

部署完成后，按照以下顺序逐步配置各功能模块：

1. **[115 云盘配置](/features/pan115/)** — 添加 115 账号，配置转存和自动签到
2. **[HDHive 助手](/features/hdhive/)** — 配置中心网关授权、负载均衡和自动签到
3. **[Telegram 集成](/features/telegram/)** — 配置 Bot 和 Session，搭建频道监控
4. **[Emby 播放全场景](/features/emby302/)** — 创建 Emby 实例，配置 STRM 分流和网盘模式
5. **[系统管理](/features/system/)** — 配置备份还原、品牌定制、用户权限和日志查看

---

## 常见部署问题

::: details 端口被占用
```bash
ss -tlnp | grep 29999
# 或
netstat -tlnp | grep 29999
```
:::

::: details 容器无法启动
```bash
docker logs resource-tool
```
:::

::: details 无法访问面板
- 检查防火墙是否放行 29999 端口
- 检查云服务器安全组规则
- 确认 `network_mode: host` 配置正确
:::

---

## 免责声明

::: warning 请仔细阅读
1. **资源来源** — 所有通过本工具搜索、转存、播放的内容均来自第三方平台（如 115 网盘、HDHive、Telegram 频道等），与本项目无关
2. **合法使用** — 用户应自行确保使用本工具的行为符合当地法律法规，因违规使用产生的一切后果由用户自行承担
3. **版权责任** — 用户在使用本工具过程中涉及的所有版权问题，由用户自行与版权方协商解决
4. **无担保** — 本软件按"原样"提供，不提供任何明示或暗示的担保
5. **服务中断** — 由于第三方 API 变更、网络故障等原因导致的服务中断，本项目不承担任何责任
:::

::: danger 禁止行为
- 请勿将本工具用于任何商业用途
- 请勿在任何平台售卖本工具或提供有偿部署服务
- 请尊重原创内容版权，支持正版
:::

版权归属：ResourceTool | 许可证：[署名 4.0 国际 (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)
