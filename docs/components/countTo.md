## CountTo 数字跳转 <to-api/>

<demo-model url="/componentsPage/count-to/count-to"></demo-model>
该组件一般用于需要滚动数字到某一个值的场景，目标要求是一个递增的值。
### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

通过`startVal`设置开始值，`endVal`设置结束值。

```vue
<tn-count-to :startVal="0" :endVal="100"></tn-count-to>
```



### 设置是否显示小数位

通过`decimals`设置显示的小数位，如果设置了，在滚动过程中，小数位会一起变化。如果`startVal`和`endVal`是带小数的，应该设置`decimals`为 `startVal`和`endVal`一样的小数位数值。

```vue
<tn-count-to :startVal="0" :endVal="100.88" :decimals="2"></tn-count-to>
```



### 设置千分位分隔符

通过`thousandthsSeparator`配置千分位分隔符，默认为空字符串，可以设置英文逗号","，此参数表现为`endVal`值超过1000时，比如为"1257"，那么滚动后会变成"1,257"。

```vue
<tn-count-to :startVal="0" :endVal="1257" :thousandthsSeparator=","></tn-count-to>
```



### 执行滚动时机

通过`autoplay`配置倒计时是否在组件的`mounted`生命周期进行初始化，如果设置`autoplay`为`false`，就需要手动通过 `ref`的形式通知组件开始执行，调用的是组件内部的`start()`和`paused()` 方法来开始或暂停。

```vue
<template>
  <tn-count-to ref="countTo" :endVal="endVal" :autoplay="false"></tn-count-to>
</template>

<script>
  export default {
    data() {
      return {
        endVal: 1234.56,
      };
    },
    methods: {
      start() {
        this.$refs.countTo.start();
      },
      paused() {
        this.$refs.countTo.paused();
      },
      reStart() {
        this.$refs.countTo.reStart();
      },
    }
  }
</script>
```



### API

### Props

|        属性名        |               说明               |  类型   | 默认值  |                        可选值                         |
| :------------------: | :------------------------------: | :-----: | :-----: | :---------------------------------------------------: |
|       startVal       |            滚动开始值            | Number  |    0    |                           -                           |
|        endVal        |            滚动目标值            | Number  |    0    |                           -                           |
|       autoplay       |           自定开始滚动           | Boolean |  true   |                         false                         |
|      fontColor       |             字体颜色             | String  | #080808 | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|       fontSize       |             字体大小             | Number  |   50    |                           -                           |
|       fontUnit       |          字体大小的单位          | String  |   rpx   |                           -                           |
|       duration       |  滚动到目标值持续的时间，单位ms  | Number  |  2000   |                           -                           |
|      useEasing       | 在滚动到目标值的时候使用缓动效果 | Boolean |  true   |                         false                         |
|       decimals       |          显示小数的位数          | Number  |    0    |                           -                           |
|   decimalSeparator   |           小数的分隔符           | String  |    .    |                           -                           |
| thousandthsSeparator |          千分位的分隔符          | String  |    -    |                           -                           |
|         bold         |             字体加粗             | Boolean |  false  |                         true                          |



### Slots

none



### Methods

需要通过`ref`手动调用。

|  名称   |       说明       |
| :-----: | :--------------: |
|  start  |   开始执行滚动   |
| reStart | 重新开始执行滚动 |
| paused  |     暂停滚动     |



### Event

| 事件名称 | 说明     | 回调参数 |
| -------- | -------- | -------- |
| end      | 滚动结束 | -        |

