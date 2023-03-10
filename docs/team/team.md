---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/kewohuixiang.jpg',
    name: '可我会像',
    title: '开发者',
    desc:'图鸟背锅侠'
  },{
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=3156027735&s=640',
    name: 'Star',
    title: '开发者',
    links: [
      { icon: 'github', link: 'https://github.com/ahua666' },
    ],
    desc:'全栈开发'
  },{
    avatar: '/Jaylen.jpg',
    name: 'Jaylen',
    title: '开发者',
    desc:'负责TuniaoUI技术架构与实施，组织架构设计与升级优化等工作'
  },{
    avatar: '/tu.jpg',
    name: '弃续',
    title: '开发者',
    desc:'负责TuniaoUI核心组件研发，维护与升级，技术支持等工作'
  },{
    avatar: '/hao.jpg',
    name: 'Fa1Zz',
    title: '开发者',
    desc:'前端开发'
  },{
    avatar: '/yuanyuan.jpg',
    name: '圆圆',
    title: '高级设计师',
    desc:'肥姑妈、sketch、即时设计、PS、Ai、Axure、墨刀、xiaopiu等'
  },{
    avatar: '/buxuxiongwo.jpg',
    name: '不许凶我',
    title: '高级设计师',
    desc:'设计工具：PS、Ai、肥姑妈、AE、搅拌机、C4D等'
  },

  
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      关于我们
    </template>
    <template #lead>
    以下为Tuniao UI研发团队，排名不分先后：
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />

</VPTeamPage>
