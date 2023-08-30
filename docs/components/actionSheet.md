## ActionSheet 操作菜单 <to-api/>

<demo-model url="/componentsPage/action-sheet/action-sheet"></demo-model>
此组件从底部弹出操作菜单，供用户选中并返回选中结果。
本组件功能类似于uni的`uni.showActionSheet`API，配置更加灵活，所有平台都表现一致。


### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

- 通过`v-model`绑定一个`布尔值`的变量控制弹出层的打开和收起。
- 通过`list`设置需要显示的菜单，该值为一个对象数组，对象至少要提供`text`属性，另外可选的有`fontSize`(字体大小)，`color`(颜色)，`disabled`(是否禁用)， `subText`(描述信息)。

```vue
<template>
  <view>
    <tn-action-sheet v-model="show" :list="list" @click="click"></tn-action-sheet>
    <tn-button @click="show = true">打开ActionSheet</tn-button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
          text: '点赞',
          color: 'blue',
          fontSize: 28,
          subText: '感谢您的点赞'
        }, {
          text: '分享'
        }, {
          text: '评论'
        }],
        show: false
      }
    },
    methods: {
      click(index) {
        console.log(`点击了第${index + 1}项，内容为：${this.list[index].text}`)
      }
    }
  }
</script>

```



### 配置顶部提示信息和底部取消按钮

- `tips`参数为一个对象类型，属性可以设置`text`，`fontSize`(字体大小)，`color`(颜色)，文本内容将会显示组件的上方，起提示作用。
- `cancel-btn`参数配置是否显示底部的取消按钮，默认显示。

```vue
<template>
  <view>
    <tn-action-sheet v-model="show" :list="list" :tips="tips"></tn-action-sheet>
    <tn-button @click="show = true">打开ActionSheet</tn-button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
          text: '点赞',
          color: 'blue',
          fontSize: 28,
          subText: '感谢您的点赞'
        }, {
          text: '分享'
        }, {
          text: '评论'
        }],
        tips: {
          text: '文字操作',
          color: '#080808',
          fontSize: 28
        }
        show: false
      }
    }
  }
</script>
```



### API

### Props

|       属性名        |             说明              |  类型   | 默认值 | 可选值 |
| :-----------------: | :---------------------------: | :-----: | :----: | :----: |
|       v-model       | 用于控制操作菜单的弹出与关闭  | Boolean | false  |  true  |
|        list         |         按钮文字数组          |  Array  |   -    |   -    |
|        tips         |       顶部居中提示文字        | Object  |   -    |   -    |
|    borderRadius     | 操作菜单顶部圆角数值，单位rpx | Number  |   -    |   -    |
| safeAreaInsetBottom |      开启底部安全区适配       | Boolean | false  |  true  |
|    maskCloseable    |    点击遮罩层可关闭选择器     | Boolean |  true  | false  |
|      cancelBtn      |       显示底部取消按钮        | Boolean |  true  | false  |
|     cancelText      |       底部取消按钮文字        | String  |  取消  |   -    |
|       zIndex        |       弹窗的`zIndex`值        | Number  | 20075  |   -    |



### Slots

none



### Event

| 事件名称 | 说明                       | 回调参数                                  |
| -------- | -------------------------- | ----------------------------------------- |
| click    | 点击操作菜单上的按钮时触发 | index: 点击了第几个，1代表点击了第2个按钮 |
| close    | 点击取消按钮时触发         | -                                         |

