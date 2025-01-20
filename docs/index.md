---
layout: home

title: Tuniao
titleTemplate: UI组件模板库

hero:
  name: Tuniao UI
  text: UI组件模板库
  tagline: 酷炫、快捷、方便且高可用
    
  image:
    src: /logo.png
    alt: Star
  actions:
    - theme: brand
      text: 开始
      link: /components/install
    - theme: alt
      text: 演示
      link: /components/intro
    - theme: alt
      text: Gitee
      link: https://gitee.com/bruce_qiq/tuniao-ui
    - theme: alt
      text: Github
      link: https://github.com/ahua666/tuniaoUI
    - theme: alt
      text: DCloud
      link: https://ext.dcloud.net.cn/publisher?id=356088
features:
  - icon: <img src="/.vitepress/public/common/other/guide.png"/>
    title: 指南
    details: 涵盖uniapp各个方面，给开发者产品建议和设计理念，助力工作事业一骑绝尘
  - icon: <img src="/.vitepress/public/common/other/components.png"/>
    title: 组件
    details: 众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让用户快速集成，开箱即用
  - icon: <img src="/.vitepress/public/common/other/template.png"/>
    title: 模板
    details: 酷炫常用的页面模板，更有让你眼前一亮的界面效果，适配微信小程序、APP、H5
  - icon: <img src="/.vitepress/public/common/other/element.png"/>
    title: 团队
    details: 图鸟生态团队，致力于打造一个有归属感的开源生态，也因为信任而变得更好
---

<script setup>
import { onMounted } from 'vue';
import { fetchReleaseTag } from '.vitepress/utils/fetchReleaseTag';
onMounted(() => {
  fetchReleaseTag()
})
</script>
