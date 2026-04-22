---
title: 快速开始
createTime: 2026/04/18 17:42:20
permalink: /guide/pd2mg2va/
---

# 快速开始

本页面将指导你在 5 分钟内完成 ResourceTool 的部署。

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

## 环境变量说明

以下是 `docker-compose.yml` 中用到的环境变量：

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
:::

## 部署

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
       environment:
         - TZ=Asia/Shanghai
         - RESOURCE_LICENSE=你的授权码
         - GOMEMLIMIT=256MiB
         - GOGC=50
   ```

   ::: caution 数据持久化
   务必将 `/data` 目录挂载到宿主机，否则容器重建后数据库和配置将丢失。
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
  -e TZ=Asia/Shanghai \
  -e RESOURCE_LICENSE=你的授权码 \
  -e GOMEMLIMIT=256MiB \
  -e GOGC=50 \
  shutu736/resource-tool:latest
```
:::

## 访问面板

浏览器打开 `http://你的服务器IP:29999`，默认管理员账号：

| 项目 | 值 |
|------|------|
| 用户名 | `admin` |
| 密码 | `admin` |

::: caution 安全提示
首次登录后请立即修改默认密码！在个人资料页面可以修改用户名和密码。
:::

## 端口说明

| 端口 | 用途 |
|------|------|
| `29999` | Web 管理面板（Caddy 反代） |
| `29998` | 后端 API 端口（内部使用） |
| Emby 302 端口 | 在 Emby 302 配置中设定 |

::: info 网络模式
默认使用 `network_mode: host`，容器直接使用宿主机网络。如需 bridge 模式，请自行映射端口。
:::

::: steps

1. 访问 `http://IP:29999` 确认面板可用

2. 登录后查看仪表盘，确认各模块状态

3. 在系统配置中测试代理连接（如已配置）

4. 在 115 配置中验证 Cookie 有效性

:::

## 常见部署问题

::: details 端口被占用
```bash
# 查看端口占用
ss -tlnp | grep 29999
# 或
netstat -tlnp | grep 29999
```
:::

::: details 容器无法启动
```bash
# 查看容器日志
docker logs resource-tool
```
:::

::: details 无法访问面板
- 检查防火墙是否放行 29999 端口
- 检查云服务器安全组规则
- 确认 `network_mode: host` 配置正确
:::
