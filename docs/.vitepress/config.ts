//因为导航栏和侧边栏的代码较多，所以抽离出来

import {defineConfig, DefaultTheme} from 'vitepress'

export default defineConfig({

    title: "Tuniao UI", //网站标题
    description: "图鸟UI-是图鸟科技打造的开发者全成长周期开源平台，围绕酷炫、效率、合作、成就、变现五大用户价值布局平台能力，全力服务开发者，旨在成为开发者的好朋友。图鸟历经多轮打磨雕刻，集海量高品质图鸟模板、实时在线预览、多元化场景模板、轻便好学、易上手等多重优势于一身的开发神器，更自带免费开源可商用属性，为企业集团、公司团队、前端后端开发者、运营大佬、社交达人、学生小白提供了一个零成本的在线开发平台和资源库。", //网站描述,会生成<meta>便签
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
            {icon: 'github', link: "https://github.com/ahua666/tuniaoUI"},
        ],

        nav: [
            {text: '指南', link: '/guide/demo'},
            {text: '组件', link: '/components/install'},
            {text: '模板', link: ''},
            {text: '资源', link: ''},
            {text: '社区', link: ''},
            {text: '作品', link: ''},
            {text: '团队', link: '/team/team'},
            {
                text: '资源',
                items: [
                    {text: 'Item A', link: '/'},
                    {text: 'Item B', link: '/'},
                    {text: 'Item C', link: '/'}
                ]
            }
        ],
        sidebar: {
            '/guide': [
                {
                    text: '指南',
                    items: [
                        {text: '效果演示', link: '/guide/demo'},
                        {text: '扩展自定义图标库', link: '/guide/customIcon'},
                        {text: '注意事项', link: '/guide/note',}
                    ],
                    collapsed: false,
                }
            ],
            '/components/': [{
                text: '起步',
                items: [
                    {text: '加群交流反馈', link: '/components/addQQGroup',},
                    {text: '介绍', link: '/components/intro',},
                    {text: '安装', link: '/components/install',},
                    {text: '配置', link: '/components/setting',},
                    {text: '快速上手', link: '/components/quickstart',},
                    {text: '内置样式', link: '/components/common',},
                    {text: '注意事项', link: '/components/feature',},
                ],
                collapsed: false,
            }, {
                text: '基础组件',

                items: [
                    // {text: 'Color 色彩', link: '/components/color'},//颜色显示暂时有点问题 先不显示
                    {text: 'Icon 图标', link: '/components/icon',},
                    {text: 'Button 按钮', link: '/components/button',},
                    {text: 'Flex布局', link: '/components/layout',},
                    {text: 'Badge 徽标', link: '/components/badge',},
                    {text: 'Tag 标签', link: '/components/tag',},
                    {text: 'Loading 加载动画', link: '/components/loadingIcon',},
                    {text: 'Avatar 头像', link: '/components/avatar',},
                    {text: 'Swiper 轮播图', link: '/components/swiper',},
                    {text: 'ReadMore 查看更多', link: '/components/readMore',},
                    {text: 'Steps 步骤条', link: '/components/steps',},
                    {text: 'SwipeAction 滑动单元格', link: '/components/swipeAction',},
                ],
                collapsed: false,
            },
            ],
        },
    },
})
;

