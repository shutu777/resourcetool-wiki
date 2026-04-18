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
        - text: 项目介绍
          link: /guide/intro
          theme: alt

  - type: features
    title: 核心特性
    description: 从资源发现到播放，全链路自动化覆盖
    features:
      - title: HDHive 影视搜索
        icon: flat-color-icons:search
        details: TMDB + HDHive API 一站式搜索解锁，多用户多重智能负载均衡
        link: /features/hdhive-search

      - title: Telegram 频道监控
        icon: flat-color-icons:voice-presentation
        details: MTProto 实时监听新消息与编辑消息，多源多目标转发，黑白名单过滤
        link: /features/channel-monitor

      - title: 115 网盘自动转存
        icon: flat-color-icons:download
        details: 自动识别 115分享/magnet/ed2k 链接，智能全局防抖，入队自动转存
        link: /features/pan115-transfer

      - title: Emby 302 直链
        icon: flat-color-icons:start
        details: 路径替换 + Pickcode 双模式，CD2 gRPC 加速，302 重定向播放
        link: /features/emby302

      - title: Telegram Bot
        icon: flat-color-icons:smartphone-tablet
        details: 搜索影视，手动转发自动匹配规则，智能去重，转存完成实时通知
        link: /features/telegram-bot

      - title: 设备流控
        icon: flat-color-icons:lock
        details: 限制每用户在线设备数，双层超时，平滑过渡，防止恶意攻击
        link: /features/device-control

      - title: Emby 用户管理
        icon: flat-color-icons:conference-call
        details: 开服管理、激活码、到期自动禁用，支持共享模式与自备 Cookie 模式
        link: /features/emby-user-mgmt

      - title: 系统管理
        icon: flat-color-icons:services
        details: JWT 双角色权限，智能分流代理，TMDB Key 配置，按天轮转日志
        link: /features/system-config
---
