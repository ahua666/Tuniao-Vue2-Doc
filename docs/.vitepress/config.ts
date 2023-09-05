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
    head: [
        [
            'script', // js 文件
            { src: 'https://cdn.staticfile.org/twikoo/1.6.17/twikoo.all.min.js' }
        ],[
            'script', // js 文件
            { src: '/js/Star.js' }
        ],[
            'meta',
            { property: "og:description", content: "图鸟UI-是图鸟科技打造的开发者全成长周期开源平台，围绕酷炫、效率、合作、成就、变现,五大用户价值布局平台能力，全力服务开发者，旨在成为开发者的好朋友。图鸟历经多轮打磨雕刻，集海量高品质图鸟模板、实时在线预览、多元化场景模板、轻便好学、易上手等多重优势于一身的开发神器，更自带免费开源可商用属性，为企业集团、公司团队、前端后端开发者、运营大佬、社交达人、学生小白提供了一个零成本的在线开发平台和资源库。" }
        ],
        [
            'meta',
            { name: "keywords", content: "图鸟科技，图鸟UI，UI设计，酷炫模板，酷炫前端，插件市场，uniapp，uni-app，小程序，一站式开发，混合开发，跨平台开发，微信小程序，组件，前端模板，页面模板，项目模板，HBuilderX模板，原型制作，视觉设计，程序开发，运营维护，前端组件，项目模版，官网模版，全套模版，全套源码，免费下载" }
        ]
    ],
    lastUpdated: true, //以git提交的时间为更新时间
    themeConfig: {
        // author: 'Star',
        editLink: {
            pattern: 'https://github.com/ahua666/Tuniao-Vue2-Doc/edit/master/docs/:path',
            text: '在Github上编辑此页'
        },
        search: {
            provider: 'local'
        },
        //最后更新时间文本
        lastUpdated: {
            text: '上次更新时间',
        },
        // logo: "/avatar.png", //导航栏左侧头像
        docFooter: { //上下篇文本
            prev: '上一篇',
            next: '下一篇'
        },
        aside:false,
        footer: {
            copyright: 'Copyright © 2022-present Tuniao UI',
            // message: "Released under the MIT License.",

        },
        socialLinks: [     // 信息栏展示社交信息
            {icon: 'github', link: "https://github.com/ahua666/tuniaoUI"},
        ],

        nav: [
            {text: '指南', link: '/guide/demo'},
            {text: '组件', link: '/components/install'},
            {text: '模板', link: '/theme/intro'},
            {text: '资源', link: '/components/resource'},
            {text: '社区', link: '/Community/Community'},
            {text: '作品', link: '/works/works'},
            {text: '团队', link: '/team/team'},
            {text: 'Vue3', link: 'https://vue3.tuniaokj.com/'},
            // {text: '图标', link: ''},
            // {text: 'Vue3', link: ''},
            // {text: 'Gitee', link: ''},
            {
                text: '资源',
                items: [
                    {text: '图标', link: 'https://icon.ahuaaa.cn/#/'},
                    {text: 'Gitee', link: 'https://gitee.com/TSpecific/tuniao-ui'},
                    {text: '插件市场', link: 'https://ext.dcloud.net.cn/publisher?id=356088'}
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
                },
                {
                    text: '填坑技巧',
                    items: [
                        {text: '自定义tabbar', link: 'https://mp.weixin.qq.com/s/tiiwQlB9Z1ItmxBCYQV-og'}
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
                    {text: 'Color 色彩', link: '/components/color'},
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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
            }, {
                text: '其他组件',
                items: [
                    {text: 'CodeInput 验证码输入', link: '/components/codeInput',},
                    {text: 'LoadMore 加载更多', link: '/components/loadMore',},
                ],
                collapsed: false,
            },
            ],
            '/theme': [{
                text: '起步',
                collapsed: false,
                items: [
                    {text: '介绍', link: '/theme/intro'}
                ]
            },
                {
                    text: '炫酷模板',
                    collapsed: false,
                    items: [

                        {text: '火箭登录', link: '/theme/login1'},
                        {text: '粒子登录', link: '/theme/login2'},
                        {text: '背景登录', link: '/theme/login3'},
                        {text: '简约登录', link: '/theme/login4'},
                        {text: '夏天个人', link: '/theme/my1'},
                        {text: '图鸟个人', link: '/theme/my2'},
                        {text: '外卖个人', link: '/theme/my3'},
                        {text: '高端个人', link: '/theme/my4'},
                        {text: '音乐首页', link: '/theme/music'},
                        {text: '课程首页', link: '/theme/course'},
                        {text: '设计首页', link: '/theme/design'},
                        {text: '招聘首页', link: '/theme/job'},
                        {text: '投屏首页', link: '/theme/screen'},
                        {text: '壁纸首页', link: '/theme/wallpaper'},
                        {text: '健康码', link: '/theme/qrcode'},
                        {text: '关于我们', link: '/theme/about'},
                        {text: '全新出发', link: '/theme/outset'},
                        {text: '资讯左图', link: '/theme/article1'},
                        {text: '资讯右图', link: '/theme/article2'},
                        {text: '全屏轮播', link: '/theme/fullpage'},
                        {text: '时钟', link: '/theme/clock'},
                        {text: '加载动画', link: '/theme/AnimateLoading'},
                        {text: '流星悬浮', link: '/theme/suspended'},
                        {text: '随机粒子', link: '/theme/particle'},
                        {text: '相册图集', link: '/theme/photo'},
                        {text: '镂空效果', link: '/theme/hollow'},
                        {text: '泡泡飘出', link: '/theme/bubble'},
                        {text: 'CSS波浪', link: '/theme/wave'},
                        {text: '3D全景', link: '/theme/pano'}
                    ]
                },
                {
                    text: '会员模板',
                    collapsed: false,
                    items: [
                        {text: '操作指引', link: '/theme/vip/guide'},
                        {text: '首次指引', link: '/theme/vip/start'},
                        {text: '圈子首页', link: '/theme/vip/blog'},
                        {text: '社交圈子', link: '/theme/vip/socialize'},
                        {text: '简约圈子(旧)', link: '/themevip//circle'},
                        {text: '圈子个人', link: '/theme/vip/myblog'},
                        {text: '消息通知', link: '/theme/vip/message'},
                        {text: '商品优选', link: '/theme/vip/prefer'},
                        {text: '优选详情', link: '/theme/vip/product'},
                        {text: '博客博主', link: '/theme/vip/blogger'},
                        {text: '炫酷功能', link: '/theme/vip/cool'},
                        {text: '友情链接', link: '/theme/vip/link'},
                        {text: '祝福页面', link: '/theme/vip/bless'},
                        {text: '图鸟首页', link: '/theme/vip/tuniao'},
                        {text: '奶茶首页', link: '/theme/vip/tea'},
                        {text: '阅读首页', link: '/theme/vip/read'},
                        {text: '月亮首页', link: '/theme/vip/moon'},
                        {text: '计划首页', link: '/theme/vip/plan'},
                        {text: '新年首页', link: '/theme/vip/year'},
                        {text: '电影首页', link: '/theme/vip/movie'},
                        {text: '食物首页', link: '/theme/vip/food'},
                        {text: '拟态首页', link: '/theme/vip/mimicry'},
                        {text: '充电首页', link: '/theme/vip/power'},
                        {text: '卡片首页', link: '/theme/vip/card'},
                        {text: '健康首页', link: '/theme/vip/health'},
                        {text: '全景首页', link: '/theme/vip/panoramic'},
                        {text: 'uCharts首页', link: '/theme/vip/ucharts'},
                        {text: '店铺商品', link: '/theme/vip/store'},
                        {text: '商品订单', link: '/theme/vip/order'},
                        {text: '商品分类', link: '/theme/vip/classify'},
                        {text: '积分活动', link: '/theme/vip/money'},
                        {text: 'Drag长按拖拽', link: '/theme/vip/basic-drag'},
                        {text: '图片上传长按拖拽', link: '/theme/vip/upload-image-drag'},
                        {text: 'Cropper图片裁剪', link: '/theme/vip/cropper'},
                        {text: 'StackSwiper堆叠轮播', link: '/theme/vip/stack-swiper'},
                        {text: '重力首页', link: '/theme/vip/page1'},
                        {text: '自定义下拉刷新', link: '/theme/vip/scroll-view'},
                        {text: '级联选择', link: '/theme/vip/cascade-selectio'},
                        {text: '瀑布流', link: '/theme/vip/waterfall'},
                        {text: '树形菜单', link: '/theme/vip/tree-view'},
                        {text: '表格', link: '/theme/vip/table'},
                        {text: '图鸟轮播(实验)', link: '/theme/vip/custom-swiper'},
                        {text: '短视频', link: '/theme/vip/short-video'},
                        {text: '外卖模板', link: '/theme/vip/walking-route'}
                    ]
                }]
        },
    },
})
;

