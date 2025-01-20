//因为导航栏和侧边栏的代码较多，所以抽离出来

import { defineConfig, DefaultTheme } from 'vitepress'

export default defineConfig({
    title: "Tuniao UI", //网站标题
    description: "图鸟UI-是图鸟科技打造的开发者全成长周期开源平台，围绕酷炫、效率、合作、成就、变现五大用户价值布局平台能力，全力服务开发者，旨在成为开发者的好朋友。图鸟历经多轮打磨雕刻，集海量高品质图鸟模板、实时在线预览、多元化场景模板、轻便好学、易上手等多重优势于一身的开发神器，更自带免费开源可商用属性，为企业集团、公司团队、前端后端开发者、运营大佬、社交达人、学生小白提供了一个零成本的在线开发平台和资源库。", //网站描述,会生成<meta>便签
    // author: "Star", //作者
    base: '/', //根目录 如果您计划将站点部署到https://foo.github.io/bar/，那么您应该将base设置为“/bar/”
    markdown: {
        lineNumbers: true, //显示代码行数
    },
    //search中文显示
    lang: 'zh',
    vite: {
        server: {
            host: '0.0.0.0',
            port: 5173,
            // 是否开启 https
            https: false,
        },
    },
    head: [
        [
            'script', // js 文件
            { src: 'https://cdn.staticfile.org/twikoo/1.6.21/twikoo.all.min.js' }
        ], [
            'script', // js 文件
            { src: '/js/Star.js' }
        ], [
            'meta',
            {
                property: "og:description",
                content: "图鸟UI-是图鸟科技打造的开发者全成长周期开源平台，围绕酷炫、效率、合作、成就、变现,五大用户价值布局平台能力，全力服务开发者，旨在成为开发者的好朋友。图鸟历经多轮打磨雕刻，集海量高品质图鸟模板、实时在线预览、多元化场景模板、轻便好学、易上手等多重优势于一身的开发神器，更自带免费开源可商用属性，为企业集团、公司团队、前端后端开发者、运营大佬、社交达人、学生小白提供了一个零成本的在线开发平台和资源库。图鸟科技，图鸟UI，UI设计，酷炫模板，酷炫前端，插件市场，uniapp，uni-app，小程序，一站式开发，混合开发，跨平台开发，微信小程序，组件，前端模板，页面模板，项目模板，HBuilderX模板，原型制作，视觉设计，程序开发，运营维护，前端组件，项目模版，官网模版，全套模版，全套源码，免费下载"
            }
        ],
        [
            'meta',
            {
                name: "keywords",
                content: "图鸟UI-是图鸟科技打造的开发者全成长周期开源平台，围绕酷炫、效率、合作、成就、变现,五大用户价值布局平台能力，全力服务开发者，旨在成为开发者的好朋友。图鸟历经多轮打磨雕刻，集海量高品质图鸟模板、实时在线预览、多元化场景模板、轻便好学、易上手等多重优势于一身的开发神器，更自带免费开源可商用属性，为企业集团、公司团队、前端后端开发者、运营大佬、社交达人、学生小白提供了一个零成本的在线开发平台和资源库。图鸟科技，图鸟UI，UI设计，酷炫模板，酷炫前端，插件市场，uniapp，uni-app，小程序，一站式开发，混合开发，跨平台开发，微信小程序，组件，前端模板，页面模板，项目模板，HBuilderX模板，原型制作，视觉设计，程序开发，运营维护，前端组件，项目模版，官网模版，全套模版，全套源码，免费下载"
            }
        ]
    ],

    lastUpdated: true, //以git提交的时间为更新时间
    themeConfig: {
        logo: '/common/logo/logo.png',
        // author: 'Star',
        // editLink: {
        //     pattern: 'https://github.com/ahua666/Tuniao-Vue2-Doc/edit/master/docs/:path',
        //     text: '在Github上编辑此页'
        // },
        //search中文显示
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索',
                                buttonAriaLabel: '搜索'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭'
                                }
                            }
                        }
                    }
                }
            }
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
        aside: false,
        footer: {
            copyright: 'Copyright © 2022~2025 图鸟UI',
            // message: "Released under the MIT License.",

        },
        socialLinks: [     // 信息栏展示社交信息
            { icon: 'gitee', link: "https://gitee.com/bruce_qiq/tuniao-ui" },
            { icon: 'github', link: "https://github.com/ahua666/tuniaoUI" },
            { icon: 'local', link: 'https://ext.dcloud.net.cn/publisher?id=356088' },
        ],

        nav: [
            { text: '指南', link: '/guide/demo' },
            { text: '组件', link: '/components/install' },
            { text: '模板', link: '/theme/intro' },
            { text: '社区', link: '/Community/Community' },
            { text: '团队', link: '/team/team' },
            { text: '推荐作品', link: '/works/works' },
            { text: '合作友联', link: '/partners/partners' },
            { text: '模板市场', link: 'https://templatemarket.tuniaokj.com/' },
            { text: '图鸟Vue3', link: 'https://vue3.tuniaokj.com/' },
            {
                text: '下载',
                items: [
                    { text: 'Gitee', link: 'https://gitee.com/bruce_qiq/tuniao-ui' },
                    { text: 'Github', link: 'https://github.com/ahua666/tuniaoUI' },
                    { text: 'DCloud', link: 'https://ext.dcloud.net.cn/publisher?id=356088' },
                ]
            }
        ],
        sidebar: {
            '/guide': [
                {
                    text: '指南',
                    items: [
                        { text: '效果演示', link: '/guide/demo' },
                        { text: '注意事项', link: '/guide/note', }
                    ],
                    collapsed: false,
                },
                {
                    text: '资源',
                    items: [
                        { text: '图片资源', link: '/guide/resource' },
                        { text: '图标资源', link: '/guide/icon' },
                    ],
                    collapsed: false,
                },
                {
                    text: '填坑技巧',
                    items: [
                        { text: '扩展自定义图标库', link: '/guide/customIcon' },
                        { text: '图鸟图标模板使用', link: 'https://icon.ahuaaa.cn/#/' },
                        { text: '图鸟自定义tabbar', link: 'https://mp.weixin.qq.com/s/tiiwQlB9Z1ItmxBCYQV-og' }
                    ],
                    collapsed: false,
                }
            ],
            '/components/': [{
                text: '起步',
                items: [
                    { text: '加群交流反馈', link: '/components/addQQGroup', },
                    { text: '介绍', link: '/components/intro', },
                    { text: '安装', link: '/components/install', },
                    { text: '配置', link: '/components/setting', },
                    { text: '快速上手', link: '/components/quickstart', },
                    { text: '内置样式', link: '/components/common', },
                    { text: '注意事项', link: '/components/feature', },
                ],
                collapsed: false,
            }, {
                text: '基础组件',
                items: [
                    { text: 'Color 色彩', link: '/components/color' },
                    { text: 'Icon 图标', link: '/components/icon', },
                    { text: 'Button 按钮', link: '/components/button', },
                    { text: 'Flex布局', link: '/components/layout', },
                    { text: 'Badge 徽标', link: '/components/badge', },
                    { text: 'Tag 标签', link: '/components/tag', },
                    { text: 'Loading 加载动画', link: '/components/loadingIcon', },
                    { text: 'Avatar 头像', link: '/components/avatar', },
                    { text: 'Swiper 轮播图', link: '/components/swiper', },
                    { text: 'ReadMore 查看更多', link: '/components/readMore', },
                    { text: 'Steps 步骤条', link: '/components/steps', },
                    { text: 'SwipeAction 滑动单元格', link: '/components/swipeAction', },
                ],
                collapsed: false,
            }, {
                text: '表单组件',
                items: [
                    { text: 'Form 表单', link: '/components/forms', },
                    { text: 'Calendar 日历', link: '/components/calendar', },
                    { text: 'Keyboard 键盘', link: '/components/keyboard', },
                    { text: 'Picker 选择器', link: '/components/picker', },
                    { text: 'Select 列选择器', link: '/components/select', },
                    { text: 'Rate 评分器', link: '/components/rate', },
                    { text: 'NumberBox 步进器', link: '/components/numberBox', },
                    { text: 'ImageUpload 图片上传', link: '/components/upload', },
                    { text: 'Code 验证码倒计时', link: '/components/code', },
                    { text: 'Input 输入框', link: '/components/input', },
                    { text: 'Checkbox 复选框', link: '/components/checkbox', },
                    { text: 'Radio 单选框', link: '/components/radio', },
                    { text: 'Switch 开关选择器', link: '/components/switch', },
                    { text: 'Slider 滑动选择器', link: '/components/slider', },
                    { text: 'SignBoard 签名板', link: '/components/sign_board', },
                ],
                collapsed: false,
            }, {
                text: '数据组件',
                items: [
                    { text: 'IndexList索引列表', link: '/components/list', },
                    { text: 'LineProgress 线形进度条', link: '/components/lineProgress', },
                    { text: 'CircleProgress 圆形进度条', link: '/components/circle_progress', },
                    { text: 'CountDown 倒计时', link: '/components/countDown', },
                    { text: 'CountTo 数字跳转', link: '/components/countTo', },
                    { text: 'CountScroll 数字滚动', link: '/components/count-scroll', },
                ],
                collapsed: false,
            }, {
                text: '反馈组件',
                items: [
                    { text: 'Tips 警告消息', link: '/components/tips', },
                    { text: 'ActionSheet 操作菜单', link: '/components/actionSheet', },
                    { text: 'Toast 消息提示', link: '/components/toast', },
                    { text: 'NoticeBar 通知栏', link: '/components/noticeBar', },
                    { text: 'Collapse 折叠面板', link: '/components/collapse', },
                    { text: 'Popup 弹出层', link: '/components/popup', },
                    { text: 'Modal 模态框', link: '/components/modal', },
                ],
                collapsed: false,
            }, {
                text: '布局组件',
                items: [
                    { text: 'List 列表容器', link: '/components/list_view', },
                    { text: 'List 列表Item', link: '/components/list_cell', },
                    { text: 'ScrollList 横向滚动', link: '/components/scrollList', },
                    { text: 'Grid 宫格布局', link: '/components/grid', },
                    { text: 'Skeleton 骨架屏', link: '/components/skeleton', },
                    { text: 'Sticky 吸顶', link: '/components/sticky', },
                    { text: 'TimeLine 时间轴', link: '/components/time_line', },
                ],
                collapsed: false,
            }, {
                text: '导航组件',
                items: [
                    { text: 'Tabbar 底部导航', link: '/components/tabbar', },
                    { text: 'NavBar 自定义顶部导航栏', link: '/components/navbar', },
                    { text: 'Tabs 标签选项卡', link: '/components/tabs', },
                    { text: 'TabsSwiper 全屏选项卡', link: '/components/tabs_swiper', },
                    { text: 'Subsection 分段器', link: '/components/subsection', },
                    { text: 'Empty 内容为空', link: '/components/empty', },
                    { text: 'GoodsNav 商品导航', link: '/components/goodsNav', },
                ],
                collapsed: false,
            }, {
                text: '其他组件',
                items: [
                    { text: 'CodeInput 验证码输入', link: '/components/codeInput', },
                    { text: 'LoadMore 加载更多', link: '/components/loadMore', },
                ],
                collapsed: false,
            },
            ],
            '/theme': [{
                text: '模板库 & 灵感集',
                collapsed: false,
                items: [
                    { text: '  图鸟UI-模板组件库', link: '/theme/muse/tnui' },
                    { text: '  图鸟模板1-圈子商圈', link: '/theme/muse/tnmb1' },
                    { text: '  图鸟模板2-社区博客', link: '/theme/muse/tnmb2' },
                    { text: '  图鸟模板3-凶姐壁纸', link: '/theme/muse/tnmb3' },
                    { text: '  图鸟模板4-资讯名片', link: '/theme/muse/tnmb4' },
                    { text: '  图鸟模板5-企业官网', link: '/theme/muse/tnmb5' },
                    { text: '  图鸟模板6-品牌商城', link: '/theme/muse/tnmb6' },
                    { text: '  图鸟模板6-珠宝首饰', link: '/theme/muse/tnmb6m' },
                    { text: '  图鸟模板7-办公OA', link: '/theme/muse/tnmb7' },
                    { text: '  图鸟模板8-盲盒藏品', link: '/theme/muse/tnmb8' },
                    { text: '  图鸟模板9-人脉交友', link: '/theme/muse/tnmb9' },
                    { text: '  图鸟模板10-猛犸空间', link: '/theme/muse/tnmb10' },
                    { text: '  图鸟模板11-教育学院', link: '/theme/muse/tnmb11' },
                    { text: '  图鸟模板12-花艺商城', link: '/theme/muse/tnmb12' },
                    { text: '  图鸟模板13-视觉商城', link: '/theme/muse/tnmb13' },
                    { text: '  图鸟模板14-播兔短剧', link: '/theme/muse/tnmb14' },
                    { text: '  图鸟模板15-蒲公英小说', link: '/theme/muse/tnmb15' },
                    { text: '  图鸟模板16-作品简历', link: '/theme/muse/tnmb16' },
                    { text: '  图鸟模板17-游戏社区', link: '/theme/muse/tnmb17' },
                    { text: '  图鸟模板18-拟态家居', link: '/theme/muse/tnmb18' },
                    { text: '  图鸟模板19-奶茶点餐', link: '/theme/muse/tnmb19' },
                    { text: '  图鸟模板20-拼车出行', link: '/theme/muse/tnmb20' },
                    { text: '  图鸟模板21-丑猫文学', link: '/theme/muse/tnmb21' },
                    { text: '  图鸟模板22-人脉树', link: '/theme/muse/tnmb22' },
                    { text: '  图鸟模板23-租赁服务', link: '/theme/muse/tnmb23' },
                    { text: '  图鸟图表-酷炫uCharts', link: '/theme/muse/tncharts' },
                    { text: '  图鸟icon-字体图标', link: '/theme/muse/tnicon' },
                    { text: '  模板生态-全览 🤣', link: '/theme/muse/intro' },
                ]
            },
            {
                text: '炫酷模板-演示',
                collapsed: false,
                items: [
                    {
                        text: '  登录注册', collapsed: false, items: [
                            { text: '火箭登录', link: '/theme/login1' },
                            { text: '粒子登录', link: '/theme/login2' },
                            { text: '背景登录', link: '/theme/login3' },
                            { text: '简约登录', link: '/theme/login4' },
                        ]
                    },
                    {
                        text: '  个人中心', collapsed: false, items: [
                            { text: '夏天个人', link: '/theme/my1' },
                            { text: '图鸟个人', link: '/theme/my2' },
                            { text: '外卖个人', link: '/theme/my3' },
                            { text: '高端个人', link: '/theme/my4' },
                        ]
                    },
                    {
                        text: '  常用首页', collapsed: false, items: [
                            { text: '音乐首页', link: '/theme/music' },
                            { text: '课程首页', link: '/theme/course' },
                            { text: '设计首页', link: '/theme/design' },
                            { text: '招聘首页', link: '/theme/job' },
                            { text: '投屏首页', link: '/theme/screen' },
                            { text: '壁纸首页', link: '/theme/wallpaper' },
                        ]
                    },
                    {
                        text: '  骚气页面', collapsed: false, items: [
                            { text: '健康码', link: '/theme/qrcode' },
                            { text: '关于我们', link: '/theme/about' },
                            { text: '全新出发', link: '/theme/outset' },
                            { text: '资讯左图', link: '/theme/article1' },
                            { text: '资讯右图', link: '/theme/article2' },
                            { text: '全屏轮播', link: '/theme/fullpage' },
                            { text: '时钟', link: '/theme/clock' },
                        ]
                    },
                    {
                        text: '  加载动画', collapsed: false, items: [
                            { text: '加载动画1', link: '/theme/AnimateLoading' },
                            { text: '加载动画2', link: '/theme/AnimateLoading2' },
                            { text: '加载动画3', link: '/theme/AnimateLoading3' },
                            { text: '加载动画4', link: '/theme/AnimateLoading4' },
                            { text: '加载动画5', link: '/theme/AnimateLoading5' },
                        ]
                    },
                    {
                        text: '  动效元素', collapsed: false, items: [
                            { text: '流星悬浮', link: '/theme/suspended' },
                            { text: '随机粒子', link: '/theme/particle' },
                            { text: '相册图集', link: '/theme/photo' },
                            { text: '镂空效果', link: '/theme/hollow' },
                            { text: '泡泡飘出', link: '/theme/bubble' },
                            { text: 'CSS波浪', link: '/theme/wave' },
                        ]
                    },
                    { text: '3D全景', link: '/theme/pano' }
                ]
            },
            {
                text: '会员模板-演示',
                collapsed: false,
                items: [
                    {
                        text: '  圈子博客', collapsed: false, items: [
                            { text: '操作指引', link: '/theme/vip/guide' },
                            { text: '首次指引', link: '/theme/vip/start' },
                            { text: '圈子首页', link: '/theme/vip/blog' },
                            { text: '社交圈子', link: '/theme/vip/socialize' },
                            { text: '简约圈子(旧)', link: '/theme/vip//circle' },
                            { text: '圈子个人', link: '/theme/vip/myblog' },
                            { text: '消息通知', link: '/theme/vip/message' },
                            { text: '商品优选', link: '/theme/vip/prefer' },
                            { text: '优选详情', link: '/theme/vip/product' },
                            { text: '博客博主', link: '/theme/vip/blogger' },
                            { text: '炫酷功能', link: '/theme/vip/cool' },
                            { text: '友情链接', link: '/theme/vip/link' },
                            { text: '祝福页面', link: '/theme/vip/bless' },
                        ]
                    },
                    {
                        text: '  酷炫首页', collapsed: false, items: [
                            { text: '图鸟首页', link: '/theme/vip/tuniao' },
                            { text: '奶茶首页', link: '/theme/vip/tea' },
                            { text: '阅读首页', link: '/theme/vip/read' },
                            { text: '月亮首页', link: '/theme/vip/moon' },
                            { text: '计划首页', link: '/theme/vip/plan' },
                            { text: '新年首页', link: '/theme/vip/year' },
                            { text: '电影首页', link: '/theme/vip/movie' },
                            { text: '食物首页', link: '/theme/vip/food' },
                            { text: '拟态首页', link: '/theme/vip/mimicry' },
                            { text: '充电首页', link: '/theme/vip/power' },
                            { text: '卡片首页', link: '/theme/vip/card' },
                            { text: '健康首页', link: '/theme/vip/health' },
                            { text: '全景首页', link: '/theme/vip/panoramic' },
                            { text: 'uCharts首页', link: '/theme/vip/ucharts' },
                        ]
                    },
                    {
                        text: '  商城店铺', collapsed: false, items: [
                            { text: '店铺商品', link: '/theme/vip/store' },
                            { text: '商品订单', link: '/theme/vip/order' },
                            { text: '商品分类', link: '/theme/vip/classify' },
                            { text: '积分活动', link: '/theme/vip/money' },
                        ]
                    },
                    {
                        text: '  其他页面', collapsed: false, items: [
                            { text: 'Drag长按拖拽', link: '/theme/vip/basic-drag' },
                            { text: '图片上传长按拖拽', link: '/theme/vip/upload-image-drag' },
                            { text: 'Cropper图片裁剪', link: '/theme/vip/cropper' },
                            { text: 'StackSwiper堆叠轮播', link: '/theme/vip/stack-swiper' },
                            { text: '重力首页', link: '/theme/vip/page1' },
                            { text: '自定义下拉刷新', link: '/theme/vip/scroll-view' },
                            { text: '级联选择', link: '/theme/vip/cascade-selection' },
                            { text: '瀑布流', link: '/theme/vip/waterfall' },
                            { text: '树形菜单', link: '/theme/vip/tree-view' },
                            { text: '表格', link: '/theme/vip/table' },
                            { text: '取色器', link: '/theme/vip/color' },
                            { text: '图鸟轮播(实验)', link: '/theme/vip/custom-swiper' },
                            { text: '短视频', link: '/theme/vip/short-video' },
                            { text: '外卖模板', link: '/theme/vip/walking-route' }
                        ]
                    },
                ]
            },
            // {
            //     text: '成套模板-演示',
            //     collapsed: false,
            //     items: [
            //         {
            //             text: '  圈子博客', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn1/home' },
            //                 { text: '圈子', link: '/theme/templete-demo/tn1/xxx' },
            //                 { text: '广场', link: '/theme/templete-demo/tn1/yyy' },
            //                 { text: '优选', link: '/theme/templete-demo/tn1/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn1/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn1/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  社区博客', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn2/home' },
            //                 { text: '社区', link: '/theme/templete-demo/tn2/xxx' },
            //                 { text: '发现', link: '/theme/templete-demo/tn2/yyy' },
            //                 { text: '消息', link: '/theme/templete-demo/tn2/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn2/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn2/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  凶姐壁纸', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn3/home' },
            //                 { text: '分类', link: '/theme/templete-demo/tn3/xxx' },
            //                 { text: '精选', link: '/theme/templete-demo/tn3/yyy' },
            //                 { text: '消息', link: '/theme/templete-demo/tn3/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn3/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn3/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  资讯名片', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn4/home' },
            //                 { text: '圈子', link: '/theme/templete-demo/tn4/xxx' },
            //                 { text: '发现', link: '/theme/templete-demo/tn4/yyy' },
            //                 { text: '名片', link: '/theme/templete-demo/tn4/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn4/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn4/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  企业官网', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn5/home' },
            //                 { text: '产品', link: '/theme/templete-demo/tn5/xxx' },
            //                 { text: '案例', link: '/theme/templete-demo/tn5/yyy' },
            //                 { text: '资讯', link: '/theme/templete-demo/tn5/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn5/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn5/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  品牌商城', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn6/home' },
            //                 { text: '全部', link: '/theme/templete-demo/tn6/xxx' },
            //                 { text: '购物车', link: '/theme/templete-demo/tn6/yyy' },
            //                 { text: '我的', link: '/theme/templete-demo/tn6/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn6/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  珠宝首饰', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn6m/home' },
            //                 { text: '全部', link: '/theme/templete-demo/tn6m/xxx' },
            //                 { text: '购物车', link: '/theme/templete-demo/tn6m/yyy' },
            //                 { text: '我的', link: '/theme/templete-demo/tn6m/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn6m/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  办公OA', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn7/home' },
            //                 { text: '时光', link: '/theme/templete-demo/tn7/xxx' },
            //                 { text: '工作台', link: '/theme/templete-demo/tn7/yyy' },
            //                 { text: '通讯录', link: '/theme/templete-demo/tn7/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn7/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn7/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  盲盒藏品', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn8/home' },
            //                 { text: '模型', link: '/theme/templete-demo/tn8/xxx' },
            //                 { text: '探索', link: '/theme/templete-demo/tn8/yyy' },
            //                 { text: '我的', link: '/theme/templete-demo/tn8/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn8/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  人脉交友', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn9/home' },
            //                 { text: '广场', link: '/theme/templete-demo/tn9/xxx' },
            //                 { text: '每日精选', link: '/theme/templete-demo/tn9/yyy' },
            //                 { text: '聊天', link: '/theme/templete-demo/tn9/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn9/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn9/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  猛犸空间', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn10/home' },
            //                 { text: '探索', link: '/theme/templete-demo/tn10/xxx' },
            //                 { text: '店铺', link: '/theme/templete-demo/tn10/yyy' },
            //                 { text: '圈子', link: '/theme/templete-demo/tn10/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn10/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn10/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  教育学院', collapsed: false, items: [
            //                 { text: '资讯', link: '/theme/templete-demo/tn11/zzz' },
            //                 { text: '首页', link: '/theme/templete-demo/tn11/xxx' },
            //                 { text: '我的', link: '/theme/templete-demo/tn11/yyy' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn11/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  花艺商城', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn12/home' },
            //                 { text: '产品', link: '/theme/templete-demo/tn12/xxx' },
            //                 { text: '探索', link: '/theme/templete-demo/tn12/yyy' },
            //                 { text: '购物车', link: '/theme/templete-demo/tn12/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn12/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn12/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  视觉商城', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn13/home' },
            //                 { text: '分类', link: '/theme/templete-demo/tn13/xxx' },
            //                 { text: '发现', link: '/theme/templete-demo/tn13/yyy' },
            //                 { text: '购物车', link: '/theme/templete-demo/tn13/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn13/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn13/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  播兔短剧', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn14/home' },
            //                 { text: '发现', link: '/theme/templete-demo/tn14/xxx' },
            //                 { text: '直播', link: '/theme/templete-demo/tn14/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn14/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn14/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  蒲公英小说', collapsed: false, items: [
            //                 { text: '书城', link: '/theme/templete-demo/tn15/home' },
            //                 { text: '分类', link: '/theme/templete-demo/tn15/xxx' },
            //                 { text: '活动', link: '/theme/templete-demo/tn15/yyy' },
            //                 { text: '书架', link: '/theme/templete-demo/tn15/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn15/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn15/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  作品简历', collapsed: false, items: [
            //                 { text: '关于', link: '/theme/templete-demo/tn16/home' },
            //                 { text: '工作', link: '/theme/templete-demo/tn16/xxx' },
            //                 { text: '作品', link: '/theme/templete-demo/tn16/yyy' },
            //                 { text: '开源', link: '/theme/templete-demo/tn16/zzz' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn16/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  游戏社区', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn17/home' },
            //                 { text: '发现', link: '/theme/templete-demo/tn17/xxx' },
            //                 { text: '排行榜', link: '/theme/templete-demo/tn17/yyy' },
            //                 { text: '消息', link: '/theme/templete-demo/tn17/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn17/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn17/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  拟态家居', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn18/home' },
            //                 { text: '智能', link: '/theme/templete-demo/tn18/xxx' },
            //                 { text: '发现', link: '/theme/templete-demo/tn18/yyy' },
            //                 { text: '资讯', link: '/theme/templete-demo/tn18/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn18/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn18/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  奶茶点餐', collapsed: false, items: [
            //                 { text: '门店', link: '/theme/templete-demo/tn19/home' },
            //                 { text: '点餐', link: '/theme/templete-demo/tn19/xxx' },
            //                 { text: '店铺', link: '/theme/templete-demo/tn19/yyy' },
            //                 { text: '订单', link: '/theme/templete-demo/tn19/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn19/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn19/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  拼车出行', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn20/home' },
            //                 { text: '消息', link: '/theme/templete-demo/tn20/xxx' },
            //                 { text: '发布', link: '/theme/templete-demo/tn20/yyy' },
            //                 { text: '商城', link: '/theme/templete-demo/tn20/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn20/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn20/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  丑猫文学', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn21/home' },
            //                 { text: '发现', link: '/theme/templete-demo/tn21/xxx' },
            //                 { text: '资讯', link: '/theme/templete-demo/tn21/yyy' },
            //                 { text: '我的', link: '/theme/templete-demo/tn21/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn21/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  人脉树', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn22/home' },
            //                 { text: '分类', link: '/theme/templete-demo/tn22/xxx' },
            //                 { text: '发布', link: '/theme/templete-demo/tn22/yyy' },
            //                 { text: '统计', link: '/theme/templete-demo/tn22/zzz' },
            //                 { text: '我的', link: '/theme/templete-demo/tn22/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn22/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  租赁服务', collapsed: false, items: [
            //                 { text: '首页', link: '/theme/templete-demo/tn23/home' },
            //                 { text: '发现', link: '/theme/templete-demo/tn23/xxx' },
            //                 { text: '资讯', link: '/theme/templete-demo/tn23/yyy' },
            //                 { text: '我的', link: '/theme/templete-demo/tn23/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tn23/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  图鸟图表', collapsed: false, items: [
            //                 { text: '图表组件', link: '/theme/templete-demo/tncharts/home' },
            //                 { text: '会员模板', link: '/theme/templete-demo/tncharts/xxx' },
            //                 { text: '免费模板', link: '/theme/templete-demo/tncharts/yyy' },
            //                 { text: '关于我们', link: '/theme/templete-demo/tncharts/kkk' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tncharts/xxx/xxx' },
            //             ]
            //         },
            //         {
            //             text: '  酷炫字体', collapsed: false, items: [
            //                 { text: '酷炫字体图标', link: '/theme/templete-demo/tnicon/home' },
            //                 { text: 'xxxx', link: '/theme/templete-demo/tnicon/xxx/xxx' },
            //             ]
            //         },
            //     ]
            // }
        ]
        },
    },
})
    ;

