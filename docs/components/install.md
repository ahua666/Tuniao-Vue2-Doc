## 安装
<demo-model url="/"></demo-model>

::: warning 说明

由于TuniaoUI使用easycom模式，可以让您无需引入组件即可直接使用，但此功能呢需要HbuilderX 2.5.5及以上版本才支持，详细请查看uni-app官方对[easycom模式](https://uniapp.dcloud.io/collocation/pages?id=easycom)的介绍，`easycom`打包的时候是**按需引入**的，您可以放心引入TuniaoUI的整个组件库，发布打包时会自动剔除您没有使用的组件(注意：调试时仍然是全部引入的)。

请确保您下载的[HbuilderX](https://www.dcloud.io/hbuilderx.html)为APP开发版，而非标准版，并且在"工具->插件安装"中安装了"scss/sass编译"插件。
:::


### 下载安装

使用下载的方式安装，能更加方便的阅读代码，但是每次升级都需要重新下载并且覆盖tuniao-ui文件夹。

- 在uni-app插件市场搜索TuniaoUI，点击页面右上角选择`使用HubilderX 导入插件` 或者 `下载插件ZIP`。
- 下载TuniaoUI的示例项目，将其根目录的tuniao-ui文件夹复制到您的项目的根目录，然后对项目进行[配置](setting.md)。

[下载地址](https://gitee.com/TSpecific/tuniao-ui)



### 示例项目

此方式为整个TuniaoUI演示项目，里面有TuniaoUI核心，组件演示，模板等，建议用户可以下载 此项目运行用于查看UI演示效果，复制模板案例，通过里面的示例，可以快速掌握某一个组件的用法。

- 途径一：在uni-app插件市场搜索`图鸟UI`，点击页面右上角选择`使用HubilderX 导入插件` 或者 `下载插件ZIP`。

[下载地址](https://ext.dcloud.net.cn/plugin?id=7088)



::: danger 注意
演示项目不适用于直接开发中，它只是演示用的，可以直接运行并查看效果。
如果在微信开发工具真机预览时，提示分包太大运行的问题，请在`HBuilder X`进行设置：菜单栏 运行 -> 运行到小程序模拟器，在下拉菜单中**勾选**"运行时是否压缩代码"
:::

