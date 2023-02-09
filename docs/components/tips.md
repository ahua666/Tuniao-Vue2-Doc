## Tips 警告消息 <to-api/>
<demo-model url="/componentsPage/tips/tips"></demo-model>

此组件用户弹出文字提示信息，可以修改文字和背景颜色。

:::warning 注意：

由于uni中无法通过js创建元素，所以需要在页面中调用`<tn-tips />`组件，再通过`ref`开启。

:::



### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

通过`ref`弹出`tips`。

```vue
<template>
  <view>
    <tn-tips ref="tips" position="top"></tn-tips>
    <tn-button @click="open">
      弹出Tips
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
        this.$refs.tips.show({
          msg: '对不起，网络连接失败',
          backgroundColor: '#E83A30',
          fontColor: '#FFFFFF',
          duration: 1500
        })
      }
    }
  }
</script>

```



### 切换显示的位置

通过设置`position`属性可以将信息显示在不同的地方，top(顶部),center(中间),bottom(底部)。

```vue
<tn-tips ref="tips" position="top"></tn-tips>
```



### 解决使用自定义导航栏时被遮挡的问题

此组件提供了`top`属性可以设置距离顶部的高度，当前属性在`position`为`top`时生效。

只需要将`top`属性设置为`自定义顶部导航栏的高度`即可解决问题。

```vue
<tn-tips ref="tips" position="top" :top="45"></tn-tips>
```



### API

### Props

|  属性名  |                         说明                          |  类型  | 默认值 |    可选值     |
| :------: | :---------------------------------------------------: | :----: | :----: | :-----------: |
| position |                    消息显示的位置                     | String |  top   | center/bottom |
|   top    | 消息距离顶部的距离，`position`设置为`top`生效，单位px | Number |   -    |       -       |
|  zIndex  |                   Tips的`zIndex`值                    | Number | 19080  |       -       |



### Params

这些参数通过`ref`调用`<tn-toast />`组件内部的show方法进行传入。

|      参数       |           说明           |  类型  | 默认值 | 可选值 |
| :-------------: | :----------------------: | :----: | :----: | :----: |
|       msg       |      警告消息的内容      | String |   -    |   -    |
| backgroundColor |  警告消息容器的背景颜色  | String |   -    |   -    |
|    fontColor    |    警告消息的字体颜色    | String |   -    |   -    |
|    duration     | 消息提示持续时间，单位ms | Number |  2000  |   -    |



### Slots

none



### Event

| 事件名称 | 说明                     | 回调参数 |
| -------- | ------------------------ | -------- |
| close    | `Tips`消息提示关闭时触发 | -        |

