---
layout: home

title: Tuniao
titleTemplate: 一个Vue2组件库

hero:
  name: Tuniao UI
  text: 一个Vue2组件库
  tagline: 快捷、方便且高可用
    
  image:
    src: /logo.png
    alt: Star
  actions:
    - theme: brand
      text: 开始
      link: /guide/demo
    - theme: alt
      text: 在 Github 上查看
      link: https://github.com/ahua666/tuniaoUI
features:
  - icon: 🛠️
    title: 指南
    details: 涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川
  - icon: 💡
    title: 组件
    details: 众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用
  - icon: 📦
    title: 模板
    details: 酷炫常用的页面模板，更有让你眼前一亮的界面效果,适配微信小程序、APP、H5
  - icon: 📖
    title: 资源
    details: 下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。
---

<script setup>
import { onMounted } from 'vue';
import { fetchReleaseTag } from '.vitepress/utils/fetchReleaseTag';
onMounted(() => {
  fetchReleaseTag()
})
</script>
