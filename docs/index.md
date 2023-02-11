---
layout: home

title: Tuniao
titleTemplate: 一个Vue3组件库

hero:
  name: Tuniao UI
  text: 一个Vue3组件库
  tagline: 快捷、方便且高可用
    
  image:
    src: .vitepress/public/logo.png
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
    details: 享受vue3的极速体验，享受TypeScript的强类型提示，性能强劲快速,vite编译速度极快。
  - icon: 📦
    title: 高颜值
    details: 继承Tuniao Vue2版，继续保持美观易用。
  - icon: 🛠️
    title: 按需引入
    details: 直接支持按需引入无需配置任何插件
---

<script setup>
import { onMounted } from 'vue';
import { fetchReleaseTag } from '.vitepress/utils/fetchReleaseTag';
onMounted(() => {
  fetchReleaseTag()
})
</script>