## Toast 消息提示 <to-api/>

<demo-model url="/componentsPage/toast/toast"></demo-model>
此组件的功能与`uni.showToast`API功能类似，不过相比于uni官方的有以下优点：

- 可以不限制提示文本的限制，可以单独设置标题和文本内容。
- 使用TuniaoUI内置的图标。



:::warning 注意：

由于uni中无法通过js创建元素，所以需要在页面中调用`<tn-toast />`组件，再通过`ref`开启。

:::



### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |



### 基本使用

通过`ref`弹出`toast`。

```vue
<template>
  <view>
    <tn-toast ref="toast"></tn-toast>
    <tn-button @click="open">
      弹出Toast
    </tn-button>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      open() {
        this.$refs.toast.show({
          title: '支付成功',
          content: '即将跳转到订单页面',
          icon: 'success',
          image: '',
          duration: 1500
        })
      }
    }
  }
</script>
```



### API

### Props

|  属性名   |       说明        |   类型   |  默认值  | 可选值 |
|:------:|:---------------:|:------:|:-----:|:---:|
| zIndex | Toast的`zIndex`值 | Number | 20090 |  -  |



### Params

这些参数通过`ref`调用`<tn-toast />`组件内部的`show`方法进行传入。

|    参数    |                        说明                         |   类型   | 默认值  | 可选值 |
|:--------:|:-------------------------------------------------:|:------:|:----:|:---:|
|  title   |                      消息提示的标题                      | String |  -   |  -  |
| content  |                消息提示的内容，如果没有设置则不显示                 | String |  -   |  -  |
|   icon   |               消息提示显示的图标，如果没有设置则不显示                | String |  -   |  -  |
|  image   | 消息提示显示的图片的地址，如果同时设置了`icon`，有优先显示`icon`，如果没有设置则不显示 | String |  -   |  -  |
| duration |                   消息提示持续时间，单位ms                   | Number | 2000 |  -  |



### Slots

none



### Event

| 事件名称   | 说明               | 回调参数 |
|--------|------------------|------|
| closed | `Toast`消息提示关闭时触发 | -    |

