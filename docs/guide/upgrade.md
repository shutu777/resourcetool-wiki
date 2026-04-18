---
title: 升级指南
createTime: 2026/04/18 17:42:46
permalink: /guide/1bslpjv6/
---

# 升级指南

ResourceTool 使用 Docker 部署，升级非常简单。

## 标准升级流程

:::: steps

1. **拉取最新镜像**

   ```bash
   docker pull shutu736/resource-tool:latest
   ```

2. **重建容器**

   ```bash
   cd /opt/resource-tool  # 你的 docker-compose.yml 所在目录
   docker-compose down
   docker-compose up -d
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
docker-compose down && \
docker-compose up -d && \
docker logs -f --tail 50 resource-tool
```
:::

## 数据库迁移

::: important 自动迁移
ResourceTool 使用 **Goose** 进行数据库迁移管理。升级时数据库结构会自动迁移，无需手动操作，迁移过程中会自动修复历史列名问题，整个过程零停机。
:::

::: caution 升级前建议备份数据目录
```bash
cp -r ./data ./data_backup_$(date +%Y%m%d)
```
:::

::: details 指定版本升级
如果不想使用 latest 标签，可以指定具体版本：

```yaml
services:
  resource-tool:
    image: shutu736/resource-tool:v1.6.1  # 指定版本号
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
