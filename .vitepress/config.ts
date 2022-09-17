//因为导航栏和侧边栏的代码较多，所以抽离出来

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Star UI", //网站标题
  description: "没啥特点", //网站描述,会生成<meta>便签
  // author: "Star", //作者
  base: '/', //根目录 如果您计划将站点部署到https://foo.github.io/bar/，那么您应该将base设置为“/bar/”
  markdown: {
    lineNumbers: true, //显示代码行数
  },
  lastUpdated: true, //以git提交的时间为更新时间
  themeConfig: {
    // author: 'Star',
    lastUpdatedText: '上次更新时间', //最后更新时间文本
    // logo: "/avatar.png", //导航栏左侧头像
    docFooter: { //上下篇文本
      prev: '上一篇',
      next: '下一篇'
    },
    footer: {
      copyright: 'Copyright © 2022-present Star',
      message: "Released under the MIT License.",

    },
    socialLinks: [     // 信息栏展示社交信息
      { icon: 'github', link: "https://github.com/ahua666" },
    ]
  },
});