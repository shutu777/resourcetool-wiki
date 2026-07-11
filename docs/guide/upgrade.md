---
title: 升级指南
createTime: 2026/04/18 17:42:46
permalink: /guide/upgrade/
---

# 升级指南

::: tip 当前源码版本
本文已按 ResourceTool `2.1.1.1` 校对。`2.1.0` 增加 MoviePilot v2 订阅和剧集按季求片，`2.1.1` 重点增强了 115 分享转存与缺集补漏的稳定性。升级数据库会自动迁移，不需要手工执行 SQL。
:::

ResourceTool 使用 Docker 部署，升级非常简单。

## 标准升级流程

::: caution 先备份，再拉镜像
优先在 **系统 → 备份还原** 点击“立即备份”并确认历史记录成功。不要在容器运行时直接复制 SQLite 数据库目录。
:::

:::: steps

1. **拉取最新镜像**

   ```bash
   docker pull shutu736/resource-tool:latest
   ```

2. **重建容器**

   ```bash
   cd /opt/resource-tool  # 你的 docker-compose.yml 所在目录
   docker compose down
   docker compose up -d
   ```

3. **验证升级**

   ```bash
   # 查看容器日志确认启动正常
   docker logs -f resource-tool
   ```

   访问面板查看版本号，确认已更新。

::::

::: details 一键升级脚本
```bash
cd /opt/resource-tool && \
docker pull shutu736/resource-tool:latest && \
docker compose down && \
docker compose up -d && \
docker logs -f --tail 50 resource-tool
```
:::

## 数据库迁移

::: important 自动迁移
ResourceTool 使用 **Goose** 管理数据库迁移。新容器启动时会自动升级数据库，不需要手工执行 SQL。由于容器需要重建和启动，升级期间会有短暂停机。
:::

::: details 没有配置远端备份时
先停止容器，再复制完整数据目录，避免 SQLite WAL 正在写入时得到不一致的文件：

```bash
docker compose stop resource-tool
cp -r ./data ./data_backup_$(date +%Y%m%d)
docker compose start resource-tool
```
:::

::: details 指定版本升级
如果不想使用 latest 标签，可以指定具体版本：

```yaml
services:
  resource-tool:
    image: shutu736/resource-tool:2.1.1.1  # 示例：锁定到明确版本
    # ... 其余配置不变
```
:::

## 降级回退

::: danger 降级风险
降级时如果数据库版本较新（已执行新迁移），可能需要恢复备份数据才能正常运行。
:::

::: steps

1. 恢复备份数据（如果数据库结构有变更）

2. 修改 `docker-compose.yml` 中的镜像版本

3. 重新启动容器

:::
