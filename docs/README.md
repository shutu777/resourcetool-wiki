---
home: true
config:
  - type: doc-hero
    hero:
      name: ResourceTool
      tagline: 影视资源自动化管理平台
      text: 搜索·监控·转存·播放 一站搞定
      image:
        light: /logo-light.png
        dark: /logo.png
        alt: ResourceTool Logo
      actions:
        - text: 快速开始
          link: /guide/quick-start
          theme: brand
        - text: 使用须知
          link: /guide/prerequisites
          theme: alt

  - type: features
    title: 核心特性
    description: 从资源发现到播放，全链路自动化覆盖
    features:
      - title: HDHive 影视搜索
        icon: flat-color-icons:search
        details: TMDB + HDHive 中心网关一站式搜索解锁，授权用户智能负载均衡
        link: /features/hdhive

      - title: Telegram 频道监控
        icon: flat-color-icons:voice-presentation
        details: MTProto 实时监听新消息与编辑消息，多源多目标转发，黑白名单过滤
        link: /features/telegram

      - title: 115 网盘自动转存
        icon: flat-color-icons:download
        details: 扫码登录、VIP/容量检测，自动识别 115 分享/magnet/ed2k 链接并入队转存
        link: /features/pan115

      - title: Emby 播放全场景
        icon: flat-color-icons:start
        details: 按 STRM 类型和网盘模式自动分流，覆盖路径、Pickcode、分享、自备和原生播放
        link: /features/emby302

      - title: 插件化助手
        icon: flat-color-icons:smartphone-tablet
        details: 115、HDHive、Telegram、CloudDrive2、飞牛 OS 等能力集中在插件库管理
        link: /features/system

      - title: 开服运营
        icon: flat-color-icons:lock
        details: 注册审核、生命周期任务、设备流控、媒体库管控、权限模板和自助面板
        link: /features/emby-users

      - title: Emby 用户管理
        icon: flat-color-icons:conference-call
        details: 多实例用户、115 账号筛选、CSV 导入、批量模板、到期与活跃度管理
        link: /features/emby-users

      - title: 系统管理
        icon: flat-color-icons:services
        details: 授权、代理、TMDB、HDHive 网关、品牌定制、备份还原和系统日志
        link: /features/system
---
