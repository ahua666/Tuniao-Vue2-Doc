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
            copyright: 'Copyright © 2022-present Evan You,Made with ❤️ by Tuniao UI',
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
            },{
                text: '表单组件',
                items: [
                    {text: 'Form 表单', link: '/components/forms',},
                    {text: 'Calendar 日历', link: '/components/calendar',},
                    {text: 'Keyboard 键盘', link: '/components/keyboard',},
                    {text: 'Picker 选择器', link: '/components/picker',},
                    {text: 'Select 列选择器', link: '/components/select',},
                    {text: 'Rate 评分器', link: '/components/rate',},
                    {text: 'NumberBox 步进器', link: '/components/numberBox',},
                    {text: 'ImageUpload 图片上传', link: '/components/upload',},
                    {text: 'Code 验证码倒计时', link: '/components/code',},
                    {text: 'Input 输入框', link: '/components/input',},
                    {text: 'Checkbox 复选框', link: '/components/checkbox',},
                    {text: 'Radio 单选框', link: '/components/radio',},
                    {text: 'Switch 开关选择器', link: '/components/switch',},
                    {text: 'Slider 滑动选择器', link: '/components/slider',},
                    {text: 'SignBoard 签名板', link: '/components/sign_board',},
                ],
                collapsed: false,
            }, {
                text: '数据组件',
                items: [
                    {text: 'IndexList索引列表', link: '/components/list',},
                    {text: 'LineProgress 线形进度条', link: '/components/lineProgress',},
                    {text: 'CircleProgress 圆形进度条', link: '/components/circle_progress',},
                    {text: 'CountDown 倒计时', link: '/components/countDown',},
                    {text: 'CountTo 数字跳转', link: '/components/countTo',},
                    {text: 'CountScroll 数字滚动', link: '/components/count-scroll',},
                ],
                collapsed: false,
            },{
                text: '反馈组件',
                items: [
                    {text: 'Tips 警告消息', link: '/components/tips',},
                    {text: 'ActionSheet 操作菜单', link: '/components/actionSheet',},
                    {text: 'Toast 消息提示', link: '/components/toast',},
                    {text: 'NoticeBar 通知栏', link: '/components/noticeBar',},
                    {text: 'Collapse 折叠面板', link: '/components/collapse',},
                    {text: 'Popup 弹出层', link: '/components/popup',},
                    {text: 'Modal 模态框', link: '/components/modal',},
                ],
                collapsed: false,
            },{
                text: '布局组件',
                items: [
                    {text: 'List 列表容器', link: '/components/list_view',},
                    {text: 'List 列表Item', link: '/components/list_cell',},
                    {text: 'ScrollList 横向滚动', link: '/components/scrollList',},
                    {text: 'Grid 宫格布局', link: '/components/grid',},
                    {text: 'Skeleton 骨架屏', link: '/components/skeleton',},
                    {text: 'Sticky 吸顶', link: '/components/sticky',},
                    {text: 'TimeLine 时间轴', link: '/components/time_line',},
                ],
                collapsed: false,
            },{
                text: '导航组件',
                items: [
                    {text: 'Tabbar 底部导航', link: '/components/tabbar',},
                    {text: 'NavBar 自定义顶部导航栏', link: '/components/navbar',},
                    {text: 'Tabs 标签选项卡', link: '/components/tabs',},
                    {text: 'TabsSwiper 全屏选项卡', link: '/components/tabs_swiper',},
                    {text: 'Subsection 分段器', link: '/components/subsection',},
                    {text: 'Empty 内容为空', link: '/components/empty',},
                    {text: 'GoodsNav 商品导航', link: '/components/goodsNav',},
                ],
                collapsed: false,
            },{
                text: '其他组件',
                items: [
                    {text: 'CodeInput 验证码输入', link: '/components/codeInput',},
                    {text: 'LoadMore 加载更多', link: '/components/loadMore',},
                ],
                collapsed: false,
            },
            ],
        },
    },
})
;

