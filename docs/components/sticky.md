## Sticky 吸顶 <to-api/>

<demo-model url="/componentsPage/sticky/sticky"></demo-model>
该组件内部实现以uni-app`button`组件为基础，进行了二次封装。
::: danger 特别提示
在由于右侧的演示是通过iframe引入的，PC端无法正常操作，请在真机演示中查看效果。
:::
::: warning 注意
此组件内部使用`uni-app`组件为基础，暴露出来的props基本和官方组件保持一致，不同的平台会有不同的限制，具体可以参考uni-app的官方文档：[uni-app官方button组件](https://uniapp.dcloud.io/component/button)
:::

### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

通过`slot`，将需要吸顶的内容放在`Sticky`组件中即可，`slot`中只能有一个根元素。

::: danger 注意

由于页面依赖相关的原因的，部分页面会出现**Cannot read property 'bottom' of null**的报错.

产生问题原因：

`sticky`组件创建了`Observer`监听，当切换页面且页面没有销毁（例如：tabbar页面）， `sticky`组件也没有销毁，自然`beforeDestroy`没有生效，导致组件仍然保持监听，所以出现`Cannot read property 'bottom' of null`报错。所以我们需要手动断开监听来解决这个报错，如果这个报错影响到了您。

解决办法：

可以在隐藏当前页面的时候将`enabled`设置为`false`，然后在显示当前页面的时候将`enabled`设置为`true`。

:::

```vue
<template>
  <view class="container">
    <tn-sticky>
      <!-- 只能有一个根元素 -->
       <view class="sticky-content">图鸟科技</view>
    </tn-sticky>
  </view>
</template>
```



### 设置吸顶距离

可以通过`offsetTop`来设置吸顶时与顶部的距离。

```vue
<tn-sticky :offsetTop="100">
  <!-- 只能有一个根元素 -->
  <view class="sticky-content">图鸟科技</view>
</tn-sticky>
```



### API

### Props

|     属性名      |                             说明                             |      类型      | 默认值  | 可选值 |
| :-------------: | :----------------------------------------------------------: | :------------: | :-----: | :----: |
|      index      |               用于区分多个吸顶容器的自定义标识               | String\|Number |    -    |   -    |
|    offsetTop    |                吸顶时距离顶部的距离，单位rpx                 |     Number     |    0    |   -    |
|   h5NavHeight   |                      H5顶部导航栏的高度                      |     Number     |   45    |   -    |
| customNavHeight | 自定义导航栏的高度，在非H5下生效，**在小程序端使用了自定义顶部的时候需要设置该参数** |     Number     |    0    |   -    |
|     enabled     |                           开启吸顶                           |    Boolean     |  true   | false  |
| backgroundColor |                       吸顶容器背景颜色                       |     String     | #FFFFFF |   -    |
|     zIndex      |                      吸顶容器z-index值                       |     Number     |  19075  |   -    |



### Slots

|  名称   |       说明       |
| :-----: | :--------------: |
| default | 吸顶容器内的内容 |



### Event

| 事件名称 | 说明               | 回调参数                 |
| -------- | ------------------ | ------------------------ |
| fixed    | 组件吸顶时触发     | index: 组件的标识`index` |
| unfixed  | 组件取消吸顶时触发 | index: 组件的标识`index` |

