## NumberBox 步进器 <to-api/>

<demo-model url="/componentsPage/number-box/number-box"></demo-model>

该组件一般用于数量设置的场景。

### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

通过`v-model`绑定`value`初始值，此值是双向绑定的，无需在回调中将返回的数值重新赋值给`value`。

```vue
<template>
  <tn-number-box v-model="value"></tn-number-box>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
```



### 限制输入范围

可以通过`min`和`max`来设置最小值和最大值。

```vue
<tn-number-box v-model="value" :min="0" :max="100"></tn-number-box>
```



### 设置步进值

可以通过`step`属性设置每次点击增加或者减少按钮变化的值，支持设置为**小数**。

**说明**：如果步进值是小数需要将`positiveInteger`的值设置为`false`。

```vue
<tn-number-box v-model="value" :min="0" :max="100" :positiveInteger="false" :step="1.1"></tn-number-box>
```



### 设置禁用状态

该组件有disabled和disabledInput两个禁用选项。

- disabled：全局禁用，此时将禁用输入和点击进行增减。
- disabledInput：禁止输入，但是可以通过按钮进行增减。

```vue
<tn-number-box v-model="value" :disabled="true"></tn-number-box>
```



### API

### Props

|     属性名      |                             说明                             |      类型      | 默认值  |                        可选值                         |
| :-------------: | :----------------------------------------------------------: | :------------: | :-----: | :---------------------------------------------------: |
|     v-model     |                          步进器的值                          |     Number     |    1    |                           -                           |
|      index      |                   用于区分多个步进器的事件                   | String\|Number |    -    |                           -                           |
| backgroundColor |                           背景颜色                           |     String     | #E6E6E6 | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontColor    |                           字体颜色                           |     String     |    -    | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontSize     |                           字体大小                           |     Number     |   28    |                           -                           |
|    fontUnit     |                        字体大小的单位                        |     String     |   rpx   |                           -                           |
|       min       |                         步进器最小值                         |     Number     |    0    |                           -                           |
|       max       |                         步进器最大值                         |     Number     |  99999  |                           -                           |
|      step       | 步进值，每次加或者减的值，如果是小数，需要配置`positiveInteger`为`false` |     Number     |    1    |                           -                           |
|    disabled     |                          禁用步进器                          |    Boolean     |  false  |                         true                          |
|  disabledInput  |                       禁用步进器的输入                       |    Boolean     |  false  |                         true                          |
|   inputWidth    |                    输入框的宽度，单位rpx                     |     Number     |   88    |                           -                           |
|   inputHeight   |                    输入框的高度，单位rpx                     |     Number     |   50    |                           -                           |
|  cursorSpacing  |      指定光标于键盘的距离，避免键盘遮挡输入框，单位rpx       |    Boolean     |   100   |                           -                           |
|    longPress    |                    开启长按进行连续递增减                    |    Boolean     |  true   |                         false                         |
|  longPressTime  |                   长按触发时间间隔，单位ms                   |     Number     |   250   |                           -                           |
| positiveInteger |                       只允许输入正整数                       |    Boolean     |  true   |                         false                         |



### Slots

none



### Event

| 事件名称 | 说明                   | 回调参数                                          |
| -------- | ---------------------- | ------------------------------------------------- |
| change   | 步进数值发生变化时触发 | {value: 当前步进值，index: 当前步进器`index`标识} |
| blur     | 输入框失去焦点时触发   | {value: 当前步进值，index: 当前步进器`index`标识} |
| minus    | 点击减少按钮时触发     | {value: 当前步进值，index: 当前步进器`index`标识} |
| plus     | 点击增加按钮时触发     | {value: 当前步进值，index: 当前步进器`index`标识} |

