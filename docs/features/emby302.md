---
title: Emby 助手
createTime: 2026/04/18 17:45:57
permalink: /features/sgjlr1de/
---

# Emby 助手

对应前端侧边栏 **概览 → Emby 助手**（即 `Emby 302 助手`），用于配置 Emby 302 直链播放网关。支持多实例，每个实例对应一个 Emby 服务，页面以卡片网格展示。

## 页面结构

顶部显示标题、描述和「新增配置」按钮。每个 Emby 302 配置以独立卡片展示，卡片内有三个标签页：

:::: card-grid
::: card title="基础配置" icon="material-symbols:tune"
连接信息、关联 115 账号、四种工作模式配置
:::
::: card title="流控配置" icon="material-symbols:shield"
UA 屏蔽黑名单和预缓存策略
:::
::: card title="Bot 配置" icon="material-symbols:smart-toy"
Emby Bot 实例设置（需开服授权）
:::
::::

---

## 基础配置

### 基本信息

| 配置项 | 说明 |
|--------|------|
| **配置名称** | 自定义名称，如「Emby 家庭服」 |
| **启用开关** | 右上角 Switch，控制该实例是否启用 |
| **Emby 内网地址** | Emby 服务器地址，如 `http://192.168.5.5:8096` |
| **Emby API Key** | 在 Emby 管理面板 → API 密钥中获取，密码框显示，可点击眼睛切换明文 |
| **反代端口** | Emby 客户端连接此端口，网关自动转发。如 `18096` |

::: caution 反代端口不能与 Emby 原始端口相同，客户端必须通过反代端口连接才能触发 302 重定向。
:::

### 关联配置

| 配置项 | 说明 |
|--------|------|
| **115 账号** | 必选。未匹配到映射规则时使用的默认播放账号，同时用于 Emby API 文件路径查询 |

### 工作模式

::: tip 混合模式
四种模式可独立开关，也可组合使用（混合 STRM 库），系统自动根据 STRM 文件内容匹配对应模式。
:::

#### 路径替换模式

::: info Strm 支持的 URL 格式
```
/115open/Symedia媒体库/电影.mkv                        （本地挂载路径）
/mnt/115/媒体库/电影/电影.mkv                           （CD2 本地挂载路径）
http://cd2:29798/static/http/.../False//115open/...    （CD2 cloud strm，False 后双斜杠）
```
:::

开启后显示的子配置：

| 配置项 | 说明 |
|--------|------|
| **CD2 实例** | 可选，用于 gRPC 快速路径加速 |
| **CD2 路径前缀** | 从 Emby/STRM 路径中去掉的前缀（如 CD2 本地挂载点），同时用于自动生成映射和 CD2 gRPC 快速路径 |
| **自动生成路径映射** | 弹窗：输入 strm 内的文件路径，系统自动匹配 115 配置名生成映射规则 |
| **路径替换规则** | 可视化编辑器，格式：`/路径前缀 => 115配置名`。支持注释行（`#` 开头） |

::: details 路径替换规则示例
```
/CloudNAS/CloudDrive/115open => 115-殊途
/mnt/115 => 115-殊途
http://cd2:29798/static/http/.../False//115open => 115-殊途
# 井号开头为注释行
```
:::

#### Pickcode 模式

::: info Strm 支持的 URL 格式
```
http://host/api/?pickcode=abc&name=电影.mkv
http://host/videoPlayUrl?pickcode=abc&account=xxx
http://host/videoPlayUrl?fileId=abc&account=xxx
```
:::

::: details Pickcode 秒传映射配置示例
```
115-殊途 => 115-淡然          # 秒传到淡然播放
115-殊途 => 115-淡然, 115-2   # 随机选一
# 留空表示不秒传
```
:::

#### 分享模式

独立开关，可与 Pickcode / 路径替换模式同时开启（混合 STRM 库）。

::: info Strm 支持的 URL 格式
```
http://host/api/?share_code=xxx&receive_code=yyy&id=12345&name=电影.mkv
http://host/shareVideoPlayUrl?shareCode=xxx&password=yyy&fileId=zzz&fileName=电影.mkv
```
支持下划线命名和驼峰命名两种格式。开启后显示 **分享秒传映射** 编辑器。
:::

#### Emby 原生播放

| 状态 | 行为 |
|------|------|
| **开启** | 不开路径替换 / PK / 分享模式时，可直接走 Emby 原生播放 |
| **作为备用** | 开了路径替换或 PK 模式后，115 直链失败时可回退到 Emby 原生播放 |
| **关闭** | 不再使用 Emby 原生播放，包括独立播放和作为备用线路 |

::: important 分享模式不使用此开关作为备用线路，避免与路径替换 / PK 模式混淆。
:::

---

## 流控配置

需先保存基础配置后，才能切换到此标签页。

### UA 屏蔽

| 配置项 | 说明 |
|--------|------|
| **启用 UA 屏蔽** | 总开关 |
| **屏蔽的 UA 列表** | 一行一个 UA（如 `SenPlayer`），区分大小写，命中后返回 403 |
| **UA 白名单用户** | 从 Emby 用户列表中选择。管理员用户（is_admin）自动跳过，无需手动添加 |

页面内置常见播放器 UA 参考：Emby、Infuse、SenPlayer、Forward、Hills、Yamby、AfuseKt、VidHub、Filmly 等 20+ 播放器。

### 预缓存

| 配置项 | 说明 |
|--------|------|
| **启用预缓存** | 总开关 |
| **电影 / 剧集** | 分别控制是否对电影和剧集触发预缓存 |
| **多版本缓存上限** | 电影和剧集分别设置缓存版本数上限（默认各 2） |
| **预缓存用户名单** | 从 Emby 用户中勾选。不勾选任何人 = 全部用户均触发预缓存 |
| **缓存有效期** | 滑块调节，5 分钟 ~ 2 小时，默认 30 分钟 |

::: tip 预缓存原理
用户打开影片详情页时，系统即提前获取直链并缓存，正式播放时零延迟响应。内置防重复机制，避免快速浏览时产生过多请求。
:::

---

## Bot 配置

需开服授权才会显示此标签页。每个 Emby 302 实例可绑定一个独立的 Emby Bot。

| 配置项 | 说明 |
|--------|------|
| **启用实例 Bot** | 开启后该实例将使用独立 Token 启动 Bot 服务 |
| **Bot Token** | 从 @BotFather 获取的该实例专属 Token。右侧「测试」按钮可验证连接 |
| **管理员 TG 账号** | 该实例 Bot 管理员，接收通知并可进入管理员菜单。支持搜索 TG 用户名或昵称 |
| **TG 群组 ID** | 填写后管理员可在 Bot 中检测已绑定用户是否仍在该群组内（退群检测）。不需要则填 0 |
| **自定义欢迎消息** | 支持 `{name}` 占位符，留空则使用默认欢迎语 |
| **封面图** | 支持上传 jpg/jpeg/png/gif/webp，可预览。默认使用系统封面，可一键恢复 |

### Emby Bot 功能

Emby Bot 是面向 Emby 用户的 Telegram Bot，提供以下功能：

::: info 用户命令
| 命令 | 说明 |
|------|------|
| `/start` | 主菜单 |
| `/bind` | 绑定 TG 账号到 Emby 用户 |
| `/invite` | 兑换邀请码续期 |
| `/userinfo` | 查看个人信息（到期时间、网盘模式等） |
| `/status` | 服务器状态 |
| `/cookie` | 更新自备模式的 115 Cookie |
| `/count` | 媒体库统计 |
| `/leaderboard` | 观影排行榜 |
| `/help` | 命令帮助 |
:::

**用户菜单（内联键盘）：**
- 👥 用户配置 — 个人信息、修改密码、切换线路、切换网盘模式、更新 Cookie
- 📖 帮助 — 命令列表

**管理员菜单（内联键盘）：**
- 🕵️ 管理员菜单 — 用户管理（搜索/禁用/删除/调整到期时间）、批量操作、退群检测、系统状态

---

## 容器监控配置

需先保存基础配置后，才能切换到此标签页。

Emby 长期运行后内存会持续增长（内存泄漏），最终可能导致系统卡顿甚至被系统强杀。容器监控功能可以自动检测 Emby Docker 容器的内存用量，在内存超标且 Emby 空闲时自动重启容器释放内存。

### 配置项说明

| 配置项 | 说明 |
|--------|------|
| **启用内存监控** | 总开关 |
| **Docker Host** | Docker 连接地址。同设备**留空**（自动使用 docker.sock），跨设备填 `tcp://IP:2375` |
| **容器名称** | Emby Docker 容器的名称（不是镜像名） |
| **内存阈值 (GB)** | 容器内存超过此值时开始计时，支持小数，默认 5.0 |
| **持续时间 (分钟)** | 内存超阈值且 Emby 空闲持续多久后自动重启，默认 5 |

::: tip 如何查看容器名称
在 Emby 所在机器的终端执行：
```bash
docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}"
```
输出示例：
```
NAMES              IMAGE                        STATUS
emby               emby/embyserver:latest       Up 3 days
resource-tool      shutu736/resource-tool       Up 5 minutes
```
NAMES 列即为容器名称。
:::

### 工作原理

```
每 60 秒检测一次
    ↓
内存是否超过阈值？ → 否 → 等待下次检测
    ↓ 是
Emby 是否繁忙？ → 是 → 重置计时，等待下次检测
    ↓ 否（空闲）
连续空闲已超过设定时间？ → 否 → 继续计时
    ↓ 是
自动重启容器 → TG 通知管理员 → 进入 10 分钟冷却期
```

**繁忙检测项**（任一成立即跳过重启）：

| 检测项 | 说明 |
|--------|------|
| 🔄 计划任务运行中 | Emby 后台正在扫描媒体库、刷新元数据等 |
| 📥 近期有入库活动 | 3 分钟内有入库、刷新、元数据下载等操作记录 |
| ▶️ 有用户正在播放 | 任何用户的播放会话正在进行中 |
| ❌ Emby API 不可达 | 网络异常或 Emby 刚重启中，安全起见视为繁忙 |

**冷却机制**：容器重启后进入 10 分钟冷却期，期间不再检测，给 Emby 充足的启动和稳定时间。

### 内存阈值参考

| 媒体库规模 | 建议阈值 | 说明 |
|-----------|---------|------|
| 小型（< 5,000 部） | 3.0 ~ 4.0 GB | |
| 中型（5,000 ~ 20,000 部） | 5.0 ~ 8.0 GB | 默认 5.0 GB |
| 大型（> 20,000 部） | 8.0 ~ 12.0 GB | |

::: tip 如何确定合适的值
1. 点击「测试 Docker 连接」查看当前内存
2. 观察 Emby 正常运行 1~2 天后的内存峰值
3. 将阈值设为峰值的 **1.2 ~ 1.5 倍**

例如：正常峰值 3.5 GB → 阈值设 4.5 ~ 5.0 GB
:::

### 持续时间参考

| 时间 | 适用场景 |
|------|---------|
| 2 ~ 3 分钟 | 激进策略，确认存在内存泄漏时使用 |
| **5 分钟**（默认） | 适合大多数场景 |
| 10 分钟 | 保守策略，大型媒体库入库后内存可能需要时间回落 |

### TG 通知示例

重启成功或失败时，管理员会收到 Telegram 通知（需已配置 Bot）：

::: details 重启成功通知
```
🐳 [emby-main] Emby 容器已自动重启

📦 容器: emby
💾 内存: 5.2GB / 5.0GB (104%)
⏱️ 超阈值持续: 5m0s
🕐 冷却: 10m0s
```
:::

::: details 重启失败通知
```
❌ [emby-main] Emby 容器重启失败

📦 容器: emby
💾 内存: 5.2GB / 5.0GB
⚠️ 错误: container not found
```
:::

---

## 容器监控部署教程

根据你的实际部署场景，选择对应的配置方式。

### 场景一：RT 与 Emby 在同一台 Linux 服务器

> 最常见的部署方式。RT 和 Emby 都在同一台 Linux 机器上用 Docker 运行。

**第 1 步：修改 RT 的 docker-compose.yml**

把宿主机的 Docker Socket 挂载进 RT 容器：

```yaml
services:
  resource-tool:
    image: shutu736/resource-tool:latest
    container_name: resource-tool
    restart: always
    network_mode: host
    volumes:
      - ./data:/data
      - /var/run/docker.sock:/var/run/docker.sock  # ← 添加这一行
    environment:
      - TZ=Asia/Shanghai
      - RESOURCE_LICENSE=你的授权码
      - GOMEMLIMIT=256MiB
      - GOGC=50
```

修改后重启 RT 容器：

```bash
docker compose down && docker compose up -d
```

**第 2 步：在面板中配置**

进入 Emby 助手 → 选择目标实例 → 「容器监控」Tab：

| 配置项 | 填写 |
|--------|------|
| 启用内存监控 | ✅ 开启 |
| Docker Host | **留空** |
| 容器名称 | 你的 Emby 容器名，如 `emby` |
| 内存阈值 | `5.0` GB |
| 持续时间 | `5` 分钟 |

点击「测试 Docker 连接」验证后保存。

---

### 场景二：RT 与 Emby 在不同机器（局域网）

> 例如：RT 在 NAS-A，Emby 在 NAS-B 或另一台服务器。

**第 1 步：在 Emby 所在机器上开启 Docker TCP 端口**

SSH 登录到 Emby 所在机器，有两种方式（任选其一）：

::: tabs
@tab 方式 A：修改 daemon.json（推荐）

编辑 Docker 配置文件：

```bash
sudo nano /etc/docker/daemon.json
```

添加或修改为：

```json
{
  "hosts": ["unix:///var/run/docker.sock", "tcp://0.0.0.0:2375"]
}
```

> 如果文件中已有其他配置（如 `registry-mirrors`），在已有的 JSON 对象中添加 `"hosts"` 字段即可，不要覆盖原有内容。

保存后重启 Docker：

```bash
sudo systemctl restart docker
```

如果报错 `unable to configure the Docker daemon with file... and --host flags`，说明 systemd 和 daemon.json 冲突，改用方式 B。

@tab 方式 B：修改 systemd 配置

```bash
sudo systemctl edit docker
```

在打开的编辑器中输入：

```ini
[Service]
ExecStart=
ExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2375
```

保存后执行：

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```
:::

**第 2 步：验证 TCP 端口已开放**

在 **RT 所在机器** 上执行（将 IP 替换为 Emby 机器的局域网 IP）：

```bash
curl http://192.168.1.100:2375/_ping
```

返回 `OK` 即表示端口已开放。

::: caution 连接不上？
- 检查 Emby 机器的防火墙是否放通了 2375 端口（`sudo ufw allow 2375` 或 `sudo firewall-cmd --add-port=2375/tcp --permanent`）
- 确认 Docker 已重启（`sudo systemctl status docker`）
- 确认 IP 地址正确（`ip addr` 或 `ifconfig`）
:::

**第 3 步：RT 的 docker-compose.yml 不需要挂载 docker.sock**

```yaml
services:
  resource-tool:
    volumes:
      - ./data:/data
      # 跨设备模式不需要挂载 docker.sock
```

**第 4 步：在面板中配置**

| 配置项 | 填写 |
|--------|------|
| 启用内存监控 | ✅ 开启 |
| Docker Host | `tcp://192.168.1.100:2375`（Emby 机器的 IP） |
| 容器名称 | Emby 容器名 |
| 内存阈值 | `5.0` GB |
| 持续时间 | `5` 分钟 |

点击「测试 Docker 连接」验证后保存。

::: danger 安全提示
Docker TCP 端口 2375 **没有认证**，相当于把 root 权限暴露到网络。**只能在可信的内网使用**，绝对不要将 2375 端口暴露到公网。如需公网访问，请使用 TLS 证书配置 2376 端口。
:::

---

### 场景三：群晖 Synology DSM

> RT 和 Emby 都在同一台群晖上用 Container Manager 运行。

**第 1 步：添加 Docker Socket 挂载**

::: tabs
@tab DSM 7.2+（Container Manager 图形界面）

1. 打开 **Container Manager**
2. 找到 `resource-tool` 容器 → **停止**
3. 点击 **设置** → **存储空间** → **添加文件**
4. 填写：
   - 文件/文件夹：`/var/run/docker.sock`
   - 装载路径：`/var/run/docker.sock`
   - 类型：读写（rw）
5. 保存并重新启动容器

@tab SSH + docker-compose（通用）

SSH 登录群晖（需开启 SSH），编辑 docker-compose.yml，在 volumes 中添加：

```yaml
volumes:
  - ./data:/data
  - /var/run/docker.sock:/var/run/docker.sock
```

然后执行：

```bash
sudo docker compose down && sudo docker compose up -d
```
:::

**第 2 步：查看 Emby 容器名称**

在 Container Manager 的容器列表中直接查看，或 SSH 执行：

```bash
sudo docker ps --format "{{.Names}}"
```

**第 3 步：在面板中配置**

Docker Host **留空**，填入容器名称，其余与场景一相同。

---

### 场景四：飞牛 fnOS

> RT 和 Emby 都在飞牛 NAS 上运行。

**第 1 步：添加 Docker Socket 挂载**

SSH 登录飞牛 NAS，编辑 RT 的 docker-compose.yml，在 `volumes` 中添加：

```yaml
volumes:
  - ./data:/data
  - /var/run/docker.sock:/var/run/docker.sock
```

如果是通过 fnOS 图形界面管理 Docker 容器，在容器设置的「存储卷映射」中添加：

| 宿主机路径 | 容器路径 | 权限 |
|-----------|---------|------|
| `/var/run/docker.sock` | `/var/run/docker.sock` | 读写 |

修改后重启 RT 容器：

```bash
docker compose down && docker compose up -d
```

**第 2 步：查看 Emby 容器名称**

```bash
docker ps --format "{{.Names}}"
```

**第 3 步：在面板中配置**

Docker Host **留空**，填入容器名称，其余与场景一相同。

---

### 场景五：Unraid

> RT 和 Emby 都在 Unraid 上运行。

**第 1 步：添加 Docker Socket 挂载**

1. 在 Unraid WebUI → **Docker** → 找到 `resource-tool` → 点击图标 → **Edit**
2. 点击底部 **Add another Path, Port, Variable, Label or Device**
3. 选择 **Path**，填写：
   - Name：`Docker Socket`
   - Container Path：`/var/run/docker.sock`
   - Host Path：`/var/run/docker.sock`
   - Access Mode：`Read/Write`
4. 点击 **Apply**

**第 2 步：查看 Emby 容器名**

在 Unraid Docker 页面可以直接看到容器名，通常是 `EmbyServer` 或 `emby`。

**第 3 步：在面板中配置**

Docker Host **留空**，填入容器名称，其余与场景一相同。

---

### 场景六：RT 直接运行在宿主机（非 Docker 部署）

> RT 不在 Docker 中运行，而是直接运行二进制文件。

这种情况下 **不需要挂载任何东西**，RT 本身就在宿主机上，可以直接访问 Docker Socket。

在面板中 Docker Host **留空**即可。如果 Emby 在另一台机器上，填 `tcp://IP:2375`。

---

## 容器监控常见问题

### 测试连接提示「Docker 连接失败」

**同设备（Docker Host 留空）**：
1. 检查 docker-compose.yml 是否挂载了 `/var/run/docker.sock`
2. 修改后必须**重启 RT 容器**才生效（仅保存配置不够）
3. 检查 docker.sock 权限：`ls -la /var/run/docker.sock`（应为 `srw-rw----`）

**跨设备（Docker Host 填了 tcp://...）**：
1. 在 RT 机器上测试：`curl http://目标IP:2375/_ping`
2. 检查目标机器防火墙
3. 确认 Docker 已重启

### 开启监控后 Emby 频繁重启

- **调高内存阈值**：当前值可能低于 Emby 正常工作内存
- **增加持续时间**：改为 10 分钟，避免短暂波动触发
- **检查自动化工具**：TMM、Bazarr、Sonarr 等工具可能频繁触发入库，导致内存短暂飙高后又被判为空闲

### 重启后 Emby 需要多久恢复

通常 1 ~ 3 分钟。监控会自动进入 10 分钟冷却期，期间不会再次检测。

### 如何查看监控日志

监控日志的 tag 是 `[DockerMon]`，每 60 秒输出一次：

```
🐛 [DockerMon] [emby-main] 内存: 2.4GB/5.0GB (48.5%)，正常
🐛 [DockerMon] [emby-main] 内存: 5.2GB/5.0GB (103.3%)，检查 Emby 状态...
🐛 [DockerMon] [emby-main] Emby 空闲，超阈值已持续 3m0s / 5m0s
```

在 RT 面板的日志页面或 `data/logs/` 目录下查看。

---

## Emby 已知代理配置

v1.6.3 修复了网关 IP 转发问题后，还需要在 Emby 后台配置信任代理，Emby 才会读取 RT 转发的真实客户端 IP。

**配置步骤**：

1. 直接访问 Emby 的**原始端口**（不通过 RT 网关），如 `http://192.168.1.50:8096`
2. 进入管理后台 → **设置** → **网络**
3. 找到「**已知代理**」（Known proxies）
4. 填入 RT 网关所在机器的**内网 IP**

| 部署方式 | 填写内容 |
|---------|---------|
| RT 与 Emby 同机（Docker host 模式） | `127.0.0.1` |
| RT 与 Emby 同机（Docker bridge 模式） | RT 容器的内网 IP（通过 `docker inspect resource-tool` 查看） |
| RT 与 Emby 不同机 | RT 所在机器的局域网 IP，如 `192.168.1.50` |

5. 保存

::: important
配置后，**新的播放会话**会显示用户的真实公网 IP。已有的旧会话需要用户重新连接才会更新。
:::

**如何验证**：

1. 通过 RT 网关端口（如 `18096`）打开 Emby Web
2. 播放一个视频
3. 在 Emby 管理后台 → 仪表盘 → 查看该会话的 IP 是否为真实公网 IP（而非 `127.0.0.1` 或内网 IP）
