## Modal 模态框 <to-api/>

弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作。

<demo-model url="/componentsPage/modal/modal"></demo-model>

### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

- 通过`v-model`绑定一个`布尔值`的变量控制模态框的打开和收起。
- 模态框默认是空白的一个弹窗，需要设置`title`、`content`、`buttom`等属性来让模态框显示内容。

```vue
<template>
  <view>
    <tn-modal v-model="show" :title="title" :content="content" :button="button"></tn-modal>
    <tn-button @click="open">
      打开模态框
    </tn-button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        title: '提示信息',
        content: '提示信息的内容',
        button: [{
            text: '取消',
            backgroundColor: '#E6E6E6',
            fontColor: '#FFFFFF',
            plain: true,
            shape: 'round'
          },
          {
            text: '确定',
            backgroundColor: 'tn-bg-indigo',
            fontColor: '#FFFFFF'
          }
        ]
      }
    },
    methods: {
      open() {
        this.show = true;
      }
    }
  }
</script>
```



### 设置模态框中的按钮

通过`button`设置模态框中显示的按钮，传入的是一个数值对象，其中对象中包含以下的配置项：

- text：按钮中的内容
- backgroundColor：按钮背景颜色
- fontColor：按钮文字颜色
- plain：是否为镂空按钮
- shape：按钮的形状

```js
button: [{
    text: '取消',
    backgroundColor: '#E6E6E6',
    fontColor: '#FFFFFF'
  },
  {
    text: '确定',
    backgroundColor: 'tn-bg-indigo',
    fontColor: '#FFFFFF'
  }
]
```



### 自定义内容的样式

- 通过`backgroundColor`设置模态框的背景颜色。
- 通过`fontColor`设置提示文字的颜色。
- 通过`fontSize`设置提示文字的大小。

```vue
<tn-modal v-model="show" :title="title" :content="content" :button="button" :backgroundColor="#FFFFFF" :fontSize="28"></tn-modal>
```



### 控制模态框的宽度

通过设置`width`属性来控制模态框的宽度，可以设置`指定的数值`、`百分比`、`auto`、`带单位的数值`。

```vue
<tn-modal v-model="show" :title="title" :content="content" :button="button" :width="90%"></tn-modal>
```



### 自定义模态框中内容

提供了一个参数`custom`，将其设置为`true`即可自定义模态框中的内容，自定义的内容通过`slot`插槽传入。

在使用自定义内容时，`title`、`content`、`button`设置的内容将会失效。

```vue
<tn-modal v-model="show" :custom="true">
  <view class="custom-modal-content">
    <view class="tn-icon tn-icon-about-fill"></view>
    <view class="text">这是一段自定义内容</view>
  </view>
</tn-modal>
```



### API

### Props

|       属性名        |                             说明                             |  类型   | 默认值 | 可选值 |
| :-----------------: | :----------------------------------------------------------: | :-----: | :----: | :----: |
|       v-model       |                  用于控制模态框的弹出与关闭                  | Boolean | false  |  true  |
|        width        |                         模态框的宽度                         | String  |  84%   |   -    |
|       padding       |                        模态框的内边距                        | String  |   -    |   -    |
|       radius        |                   圆角的弧度数值，单位rpx                    | Number  |   12   |   -    |
|        title        |                         模态框的标题                         | String  |   -    |   -    |
|       content       |                         模态框的内容                         | String  |   -    |   -    |
|       button        | 模态框显示的按钮信息，出入一个数值对象，详细可以查看上方说明 |  Array  |   -    |   -    |
| safeAreaInsetBottom |                      开启底部安全区适配                      | Boolean | false  |  true  |
|    maskCloseable    |                    点击遮罩层可关闭选择器                    | Boolean |  true  | false  |
|    showCloseBtn     |                         显示关闭按钮                         | Boolean | false  |  true  |
|        zoom         |                       显示放大缩小动画                       | Boolean |  true  | false  |
|       custom        |                     自定义模态框中的内容                     | Boolean | false  |  true  |
|       zIndex        |                       弹窗的`zIndex`值                       | Number  | 20080  |   -    |



### Slots

|  名称   |        说明        |
| :-----: | :----------------: |
| default | 自定义模态框的内容 |



### Event

| 事件名称 | 说明             | 回调参数                               |
| -------- | ---------------- | -------------------------------------- |
| click    | 点击按钮时触发   | index：点击按钮的序号(0代表第一个按钮) |
| cancel   | 模态框关闭时触发 | -                                      |

