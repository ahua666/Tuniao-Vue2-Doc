## 配置

### 下载方式配置

#### 关于SCSS

TuniaoUI依赖SCSS，您必须要安装此插件，否则无法正常运行。

- 如果您的项目是由`HBuilder X`创建的，相信已经安装scss插件，如果没有，请在HBuilderX菜单的 工具->插件安装中找到"scss/sass编译"插件进行安装， 如不生效，重启HBuilderX即可。



#### 关于图片

::: warning 注意

开源版本中所使用到的图片均做了防盗链，只能在调试中使用，**不保证在生产环境中可以使用**。

图片均上传到[图鸟社区](https://www.yuque.com/tuniao)

:::



#### 准备工作

在配置之前，请确保您已经根据安装步骤中（下载安装方式二）的步骤对TuniaoUI进行下载安装，如果没有，请先下载[安装](./install.md/#下载安装)。



### 配置步骤

#### 1.复制文件到项目的根目录

- ##### 必要文件夹

    - 复制tuniao-ui文件夹
    - 复制store文件夹

- ##### 如果使用了模板页面则需要复制以下文件夹

    - 复制libs文件夹
    - 复制static文件夹



#### 2.引入TuniaoUI主JS库

在项目根目录中的`main.js`中，引入并使用TuniaoUI的JS库，注意这两行配置代码要放在import Vue之后。

```javascript
// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui'
Vue.use(TuniaoUI)
```



#### 3.引入TuniaoUI提供的vuex

在项目根目录的`main.js`中引入store

```js
// 引入store
import store from './store'
...
const app = new Vue({
  store,
  ...App
})
```

在项目根目录中的`main.js`中，引入并使用TuniaoUI的vuex，注意这两行配置代码要放在import Vue之后。

```js
// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$tn.mixin.js')
Vue.mixin(vuexStore)
```



#### 4.引入TuniaoUI的全局SCSS主题文件

在项目根目录的`uni.scss`中引入此文件。

```scss
@import 'tuniao-ui/theme.scss';
```



#### 5.引入TuniaoUI基础样式和图标文件

::: danger 注意
在`App.vue`中`style标签`首行的位置引入，注意给style标签加入lang="scss"属性
:::

```scss
<style lang="scss">
  /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
  @import './tuniao-ui/index.scss';
  @import './tuniao-ui/iconfont.css';
</style>
```



#### 6.配置easycom组件模式

此配置需要在根目录的`page.json`中进行。

::: tip 温馨提示
1. uni-app为了调试性能的原因，修改`easycom`规则不会实时生效，配置完后，您需要重启HBuilderX或者重新编译项目才能正常使用TuniaoUI的功能。
2. 请确保您的`pages.json`中只有一个`easycom`字段，否则请自行合并多个引入规则。
   :::

```
// pages.json
{
  "easycom": {
  	"^tn-(.*)": "@/tuniao-ui/components/tn-$1/tn-$1.vue"
  },
  "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    {
      // ......
    }
  ]
  // ......
}
```



### 注意事项

::: warning 注意
如果是开发微信小程序，请修改`manifest.json`微信小程序选项中的app-id
:::

### 视频教程
 

<div class="col-md-24 col-sm-24 col-xs-24">
<iframe style="width: 80%;height: 720px;margin: 20px" src="//player.bilibili.com/player.html?aid=262383566&bvid=BV1Se411F7du&cid=886418409&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
