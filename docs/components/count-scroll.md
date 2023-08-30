## CountScroll 数字滚动<to-api/>
<demo-model url="/componentsPage/count-scroll/count-scroll"></demo-model>

该组件可以让数字滚动到指定的数值。

### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |



### 基本使用

通过`value`设置滚动到目标值。

```vue
<tn-count-scroll :value="100"></tn-count-scroll>
```



### API

### Props

|         属性名          |       说明        |       类型       |   默认值   |                  可选值                  |
|:--------------------:|:---------------:|:--------------:|:-------:|:-------------------------------------:|
|        value         |      滚动目标值      |     Number     |    0    |                   -                   |
|        height        |  滚动行的高度，单位rpx   |     Number     |   32    |                   -                   |
|        width         |  当个数字的宽度，单位rpx  | String\|Number |  auto   |                   -                   |
|      fontColor       |      字体颜色       |     String     | #080808 | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|       fontSize       |      字体大小       |     Number     |   32    |                   -                   |
|       fontUnit       |     字体大小的单位     |     String     |   rpx   |                   -                   |
|       duration       | 滚动到目标值持续的时间，单位s |     Number     |   1.2   |                   -                   |
|   decimalSeparator   |     小数的分隔符      |     String     |    .    |                   -                   |
| thousandthsSeparator |     千分位的分隔符     |     String     |    -    |                   -                   |
|         bold         |      字体加粗       |    Boolean     |  false  |                 true                  |



### Slots

none



### Methods

none



### Event

none
