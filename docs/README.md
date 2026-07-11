---
home: true
config:
  - type: doc-hero
    hero:
      name: ResourceTool
      tagline: 影视资源自动化管理平台
      text: 从资源发现、监控转存到 Emby 播放与运营，把分散的工作流集中在一个平台完成。
      image:
        light: /logo-light.png
        dark: /logo.png
        alt: ResourceTool Logo
      actions:
        - text: 开始部署
          link: /guide/quick-start/
          theme: brand
        - text: 查看使用须知
          link: /guide/prerequisites/
          theme: alt

  - type: features
    title: 三步开始使用
    description: 按顺序完成准备、部署与配置，快速建立第一条自动化工作流。
    features:
      - title: 01 · 确认环境
        icon: flat-color-icons:ok
        details: 先了解硬件、网络、账号与授权要求，避免在部署过程中反复调整。
        link: /guide/prerequisites/

      - title: 02 · 完成部署
        icon: flat-color-icons:services
        details: 使用 Docker Compose 启动服务，并完成首次登录和基础系统配置。
        link: /guide/quick-start/

      - title: 03 · 接入服务
        icon: flat-color-icons:smartphone-tablet
        details: 连接 115、Telegram、HDHive 与 Emby，按需启用自动化能力。
        link: /features/system/

  - type: features
    title: 核心能力
    description: 围绕资源、播放与运营组织功能，需要时再深入对应文档。
    features:
      - title: 资源发现与补全
        icon: flat-color-icons:search
        details: 聚合 HDHive 与 Telegram 资源，识别剧集缺口并自动搜索补全。
        link: /features/hdhive/

      - title: 监控与自动转存
        icon: flat-color-icons:download
        details: 实时监听 Telegram 消息，识别分享链接并自动转存至 115 网盘。
        link: /features/telegram/

      - title: Emby 直链播放
        icon: flat-color-icons:start
        details: 根据 STRM 与网盘模式自动分流，覆盖多种 302 直链播放场景。
        link: /features/emby302/

      - title: Emby 用户运营
        icon: flat-color-icons:conference-call
        details: 管理多实例用户、注册审核、权限模板、到期状态与活跃度。
        link: /features/emby-user-mgmt/

      - title: 求片与积分体系
        icon: flat-color-icons:voice-presentation
        details: 提供求片、签到、积分、邀请码与公告等自助运营能力。
        link: /features/media-requests/

      - title: 系统与数据管理
        icon: flat-color-icons:services
        details: 集中配置授权、代理、品牌、备份还原、系统日志与监控大屏。
        link: /features/system/
---
