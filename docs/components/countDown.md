## CountDown 倒计时 <to-api/>

<demo-model url="/componentsPage/count-down/count-down"></demo-model>


该组件一般使用于某个活动的截止时间上，通过数字的变化，给用户明确的时间感受，提示用户进行某一个行为操作。
### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |



### 基本使用

通过`timestamp`参数设置倒计时间，单位为`秒`。

```vue
<template>
	<tn-count-down :timestamp="timestamp"></tn-count-down>
</template>

<script>
	export default {
		data() {
			timestamp: 86400,
		}
	}
</script>
```



### 设置是否显示天、时、分、秒

可以通过`showDays`、`showHours`、`showMinutes`、`showSeconds`参数设置为true(默认值)，可以对应显示天、时、分、秒。

另外还提供了一个`hideZeroDay`参数自动隐藏0天的情况，默认为关闭状态。

**说明**：参数的配置原则应该是"自右向左"的，设置了"时"，它右边的"分"和"秒"也应该设置为`true`。

```vue
<tn-count-down :timestamp="timestamp" :showDays="false" :showHours="false"></tn-count-down>
```



### 设置倒计时分隔符

可以通过`separator`设置是使用 `‘:’` 还是`中文`作为分隔符。并且通过`separatorColor`和`separatorSize`来设置分隔符的颜色和大小。

- en: 默认值，显示冒号分隔符。
- ch: 显示中文分隔符。

```vue
<tn-count-down :timestamp="timestamp" separator="ch" separatorColor="#01BEFF"></tn-count-down>
```



### 执行倒计时时机

通过`autoplay`配置倒计时是否在组件的`mounted`生命周期进行初始化(在`timestamp`有值前提下)，如果设置`autoplay`为`false`，就需要手动通过 `ref`的形式通知倒计时开始执行，调用的是组件内部的`start()`方法。

```vue
<template>
  <tn-count-down ref="countDown" :timestamp="timestamp" :autoplay="false"></tn-count-down>
</template>

<script>
  export default {
    data() {
      timestamp: 86400,
    },
    onLoad() {
      setTimeout(() => {
        this.$refs.countDown.start();
      }, 2000)
    }
  }
</script>
```



### 获取当前倒计时剩余秒数

有以下两种方法进行配置：

- 监听`change`事件，在回调中获得当前剩余的秒数。
- 通过`ref`调用，获取内部的`seconds`参数即为当前剩余的秒数。

```vue
<template>
  <tn-count-down ref="countDown" :timestamp="timestamp" :autoplay="false" @change="change"></tn-count-down>
</template>

<script>
  export default {
    data() {
      timestamp: 86400,
    },
    onLoad() {
      setTimeout(() => {
        this.$refs.countDown.start();
      }, 2000)
    },
    methods: {
      // 事件触发，每秒一次
      change(timestamp) {
        console.log(timestamp);
      },
      // ref形式获取内部的值
      getSeconds() {
        console.log(this.$refs.countDown.seconds);
      }
    }
  }
</script>
```



### API

### Props

|       属性名       |     说明      |   类型    |   默认值   |                  可选值                  |
|:---------------:|:-----------:|:-------:|:-------:|:-------------------------------------:|
|    timestamp    |  倒计时时间，单位s  | Number  |    0    |                   -                   |
|    autoplay     |   自定开启倒计时   | Boolean |  true   |                 false                 |
| backgroundColor |    背景颜色     | String  | #FFFFFF | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontColor    |    字体颜色     | String  | #080808 | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontSize     |    字体大小     | Number  |   30    |                   -                   |
|    fontUnit     |   字体大小的单位   | String  |   rpx   |                   -                   |
|     height      |   数字框的高度    | String  |  auto   |                   -                   |
|    separator    |    分隔符类型    | String  |   en    |                  ch                   |
|  separatorSize  | 分隔符尺寸，单位rpx | Number  |   30    |                   -                   |
| separatorColor  |    分隔符颜色    | String  | #080808 |                   -                   |
|   showBorder    |    显示边框     | String  |  false  |                 true                  |
|   borderColor   |    边框颜色     | String  | #080808 |                   -                   |
|   showSeconds   |     显示秒     | Boolean |  true   |                 false                 |
|   showMinutes   |     显示分     | Boolean |  true   |                 false                 |
|    showHours    |     显示时     | Boolean |  true   |                 false                 |
|    showDays     |     显示天     | Boolean |  true   |                 false                 |
|   hideZeroDay   |  自动隐藏0天的情况  | Boolean |  false  |                 true                  |



### Slots

none



### Methods

需要通过`ref`手动调用。

|  名称   |   说明    |
|:-----:|:-------:|
| start | 开始执行倒计时 |



### Event

| 事件名称   | 说明            | 回调参数         |
|--------|---------------|--------------|
| end    | 倒计时结束         | -            |
| change | 倒计时过程中，每秒触发一次 | 当前剩余的倒计时的时间戳 |

