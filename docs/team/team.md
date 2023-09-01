---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: '/common/kewohuixiang.jpg',
    name: '可我会像',
    title: '开发者 · 广东 广州',
    desc:'职责：负责产品经理、前端开发等工作</br></br>介绍：图鸟背锅侠',
    links: [
      { icon: 'github', link: 'https://gitee.com/kewohuixiang' },
    ]
  },{
    avatar: '/common/xxstar.jpg',
    name: 'Star',
    title: '全栈开发 · 湖南 常德',
    links: [
      { icon: 'github', link: 'https://github.com/ahua666' },
    ],
    desc:'职责：负责TuniaoUI核心组件研发，维护与升级，文档维护等工作</br></br>介绍：node.js、SpringBoot、C#、vue2、vue3、uniapp、flutter等'
  },{
    avatar: '/common/Jaylen.jpg',
    name: 'Jaylen',
    title: '全栈开发 · 广东 广州',
    desc:'职责：负责TuniaoUI技术架构与实施，组织架构设计与升级优化等工作</br></br>介绍：丰富的嵌入式、C端开发经验。Java、PHP、C、vue2/3、uniapp等'
  },{
    avatar: '/common/yuanyuan.jpg',
    name: '圆圆',
    title: '高级设计师 · 广东 广州',
    desc:'职责：负责UI设计、客户咨询</br></br>介绍：肥姑妈、sketch、即时设计、PS、Ai、Axure、墨刀、xiaopiu等'
  },{
    avatar: '/common/buxuxiongwo.jpg',
    name: '不许凶我',
    title: '高级设计师 · 浙江 杭州',
    desc:'职责：负责UI设计、与产品经理沟通交互体验设计</br></br>介绍：设计工具：PS、Ai、肥姑妈、AE、搅拌机、C4D等'
  },{
    avatar: '/common/LEELAA.jpg',
    name: 'LEELAA',
    title: '高级前端开发 · 江苏 苏州',
    desc:'职责：负责前端开发、云开发</br></br>介绍：8年前端开发经验。丰富的B端C端开发经验。vue2/3、react、svelte、vite、uniapp、trao、node.js等'
  },{
    avatar: '/common/hanlele.jpg',
    name: '韩乐乐',
    title: '高级项目经理 · 广东 佛山',
    desc:'职责：负责项目实施统筹、运营推广等工作</br></br>介绍：互联网连续创业者，拥有丰富的saas系统、erp系统、外卖点餐商业项目运营经验，资源整合能力强'
  },{
    avatar: '/common/tu.jpg',
    name: '弃续',
    title: '前端开发 · 广东 广州',
    desc:'职责：负责TuniaoUI核心组件研发，维护与升级，技术支持等工作</br></br>介绍：后端转前端、有一定的开发逻辑经验。PHP、vue、uniapp、uniCloud等'
  },{
    avatar: '/common/Fa1Zz.jpg',
    name: 'Fa1Zz',
    title: '前端开发 · 广东 佛山',
    desc:'职责：负责TuniaoUI文档维护与升级，技术支持等工作</br></br>介绍：前端开发'
  },{
    avatar: '/common/akai.jpg',
    name: '阿凯',
    title: '前端开发 · 四川 成都',
    desc:'职责：负责为TuniaoUI的用户答疑解惑提供技术支持。</br></br>介绍：vue、uniapp、Web、H5、原生小程序、后台。'
  },{
    avatar: '/common/bairi.jpg',
    name: '白日梦想家',
    title: '全栈开发 · 北京 朝阳',
    desc:'职责：图鸟uni_modules的封装和维护，为群友提供技术解答，技术支持等工作</br></br>介绍：php,e,vue,python,智能合约,tradingview,量化策略'
  },{
    avatar: '/common/mengxia.png',
    name: '孟夏乾月',
    title: '前端开发 · 浙江 杭州',
    desc:'职责：负责为TuniaoUI的用户答疑解惑提供技术支持，生态维护</br></br>介绍：4年开发经验 uniapp，unicloud，vue2/3，vite，node.js，react，ts，小程序，H5，web等'
  },{
    avatar: '/common/nroy.png',
    name: 'Nroy',
    title: '全栈开发 · 四川 成都',
    desc:'职责：负责为TuniaoUI的用户提供技术支持，生态维护</br></br>介绍：Php / Java / Nodejs / Python / Vue.js / Swift / C# / Frida / Pytorch </br>以爱好为职业，实现自我。'
  },{
    avatar: '/common/xiaoxu.png',
    name: '小许同学',
    title: '前端开发 · 河南 郑州',
    desc:'职责：负责为TuniaoUI的用户答疑解惑提供技术支持，技术生态支持者</br></br>介绍：想的多了全是问题 做的多了全是答案！喜欢挑战新技术，研究一些奇奇怪怪的技术点，社牛一只，入圈以来，已经认了两只外甥。主要技术栈：Vue'
  },{
    avatar: '/common/Mandy.png',
    name: 'Mandy',
    title: '资深服务端开发工程师 · 上海 静安',
    desc:'职责：负责为TuniaoUI的Gitee代码维护，图鸟UI vue2.0仓库维护者</br></br>介绍：精通Go，PHP，Java、中间件开发。兔兔找图开源程序作者'
  }

  
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
