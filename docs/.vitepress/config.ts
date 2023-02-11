//因为导航栏和侧边栏的代码较多，所以抽离出来

import {defineConfig, DefaultTheme} from 'vitepress'

export default defineConfig({

    title: "Tuniao UI", //网站标题
    description: "美观易用", //网站描述,会生成<meta>便签
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
            {icon: 'github', link: "https://github.com/ahua666"},
        ],
        nav: [
            {text: '指南', link: '/guide/demo'},
            {text: '组件', link: '/components/install'},
            {text: '模板', link: ''},
            {text: '资源', link: ''},
            {text: '社区', link: ''},
            {text: '作品', link: ''},
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
                    collapsed: true,
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
            }],
        },
    },
});

