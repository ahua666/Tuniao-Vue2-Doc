## Popup 弹出层 <to-api/>

<demo-model url="/componentsPage/popup/popup"></demo-model>


弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义。



:::tip 提示

popup弹出层中对应自定义内容的容器中已经内置了`scroll-view`元素，内如内容超出容器的高度，将会自动获得垂直滚动的特性，如果您因为在`slot`内容做了滚动的处理，而造成了 冲突的话，请移除自定义关于滚动部分的逻辑。

:::



### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

- 通过`v-model`绑定一个`布尔值`的变量控制弹出层的打开和收起。
- 弹出层的内容由用户自定义，将其包裹在组件内部即可。

```vue
<template>
  <view>
    <tn-popup v-model="show">
      <view>这里填写弹窗的自定义内容</view>
    </tn-popup>
    <tn-button @click="show = true">打开</tn-button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
</script>
```



### 设置弹出层的方向

可以通过`mode	`对方向进行设置，left(左),top(上),right(右),bottom(下),center(中间)。

```vue
<tn-popup v-model="show" mode="bottom">
  <view>这里填写弹窗的自定义内容</view>
</tn-popup>
```



### 控制弹窗的宽度、高度

这里说的宽度，指的是左边，右边，中部弹出的场景，高度指的是顶部和底部弹出的场景(因为这两个场景宽度都是100%)。

提供了三个参数可以控制弹窗的宽度、高度，`length`，`width`，`height`，在这3个参数中`length`的优先级最低，三个参数都可以设置`指定的数值`、`百分比`、`auto`、`带单位的数值`。

- width - 对左、中、右弹框有效。
- height - 对上、中、下弹窗有效。

```vue
<tn-popup v-model="show" mode="bottom" length="30%">
  <view>这里填写弹窗的自定义内容</view>
</tn-popup>

<tn-popup v-model="show" mode="left" width="200rpx">
  <view>这里填写弹窗的自定义内容</view>
</tn-popup>
```



### 内部内容局部滚动

如果您需要让弹窗中的内容局部滚动，局部固定，可以按如下思路进行处理：

1. 在弹窗内容中放一个`scroll-view`组件，设置为竖向滚动，并指定高度(**必须**)
2. 在`scroll-view`组件下方放一块无需滚动内容，如下：

```vue
<tn-popup mode="bottom" v-model="show">
  <view class="content">
    <scroll-view scroll-y="true" style="height: 300rpx;">
      <view>
        <view v-for="index in 20" :key="index">
          第{{index}}个Item
        </view>
      </view>
    </scroll-view>
    <view class="confrim-btn">
      <tn-button @click="show = false;">确定</tn-button>
    </view>
  </view>
</tn-popup>
```



### API

### Props

|       属性名        |                             说明                             |      类型      |  默认值   |              可选值               |
| :-----------------: | :----------------------------------------------------------: | :------------: | :-------: | :-------------------------------: |
|       v-model       |                   用于控制弹框的弹出与关闭                   |    Boolean     |   false   |               true                |
|        mode         |                         弹框弹出方向                         |     String     |   left    |      right/top/bottom/center      |
|        mask         |                           显示遮罩                           |    Boolean     |   true    |               false               |
|       length        |                     弹框的宽度、高度信息                     | Number\|String |   auto    |                 -                 |
|        width        |   弹框的宽度，优先级比`length`高，仅在左、中、右模式下有效   |     String     |     -     |                 -                 |
|       height        |   弹框的高度，优先级比`length`高，仅在上、中、下模式下有效   |     String     |     -     |                 -                 |
|        zoom         |                开启缩放动画，在中间弹出时生效                |    Boolean     |   true    |               false               |
| safeAreaInsetBottom |                      开启底部安全区适配                      |    Boolean     |   false   |               true                |
|    maskCloseable    |                    点击遮罩层可关闭选择器                    |    Boolean     |   true    |               false               |
|     customStyle     |                        用户自定义样式                        |     Object     |     -     |                 -                 |
|    borderRadius     |                   显示圆角的大小，单位rpx                    |     Number     |     0     |                 -                 |
|      closeBtn       |                         显示关闭按钮                         |    Boolean     |   false   |               true                |
|    closeBtnIcon     |         关闭按钮的图标，仅可以使用TuniaoUI内部的图标         |     String     |   close   |                 -                 |
|  closeBtnPosition   | 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角 |     String     | top-right | bottom-left/top-left/bottom-right |
|   closeIconColor    |                      关闭按钮图标的颜色                      |     String     |  #AAAAAA  |                 -                 |
|    closeIconSize    |                  关闭按钮图标大小，单位rpx                   |     Number     |    30     |                 -                 |
|     negativeTop     |     给弹出一个往上的偏移量，防止弹窗与键盘重合，单位rpx      |     Number     |     0     |                 -                 |
|      marginTop      |      给弹框添加一个顶部边距，防止与导航栏重合，单位为px      |     Number     |     0     |                 -                 |
|       zIndex        |                       弹窗的`zIndex`值                       |     Number     |   20075   |                 -                 |



### Slots

|  名称   |       说明       |
| :-----: | :--------------: |
| default | 弹出层显示的内容 |



### Event

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| open     | 弹出层打开时触发 | -        |
| close    | 弹出层关闭时触发 | -        |

