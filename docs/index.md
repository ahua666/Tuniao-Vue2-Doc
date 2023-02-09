---
layout: home

title: Star
titleTemplate: 一个Vue3组件库

hero:
  name: Star UI
  text: 一个Vue3组件库
  tagline: 快捷、方便且高可用
    
  image:
    src: ../.vitepress/public/logo.png
    alt: Star
  actions:
    - theme: brand
      text: 开始
      link: /guide/demo
    - theme: alt
      text: 在 Github 上查看
      link: https://github.com/ahua666
features:
  - icon: 💡
    title: Vue3组件库
    details: 基于vite打包和VUE3开发
  - icon: 📦
    title: 仅供学习使用
    details: 倾向于Vue3组件库的学习，请勿用于实际生产项目
  - icon: 🛠️
    title: 按需引入
    details: 直接支持按需引入无需配置任何插件。
---

<script setup>
import { onMounted } from 'vue';
import { fetchReleaseTag } from '.vitepress/utils/fetchReleaseTag';
onMounted(() => {
  fetchReleaseTag()
})
</script>