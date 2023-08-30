## Calendar 日历 <to-api/>

<demo-model url="/componentsPage/calendar/calendar"></demo-model>


此组件用于单个选择日期，范围选择日期等，日历被包裹在底部弹起的容器中。

**注意：** 此组件与[Picker 选择器](picker.md)的日期选择模式有一定的重合之处，区别在于本组件为更专业的日期选择场景，能选择日期范围等。
另外`Picker`组件的日期模式可以配置更多的参数，如时、分、秒等，可以根据不同的使用场景进行选择。


### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |



### 基本使用

- 通过`v-model`绑定一个布尔变量用于打开或收起日历弹窗。
- 通过`mode`参数指定日历的选择模式。

```vue
<template>
  <view>
    <tn-calendar v-model="show" mode="date"></tn-calendar>
    <tn-button @click="show = true">打开日历</tn-button>
  </view>
</template>
```



### 日历模式

- `mode`为`date`时选择单个日期。
- `mode`为`range`时选择一段日期范围。

#### 单日期模式

选择日期后，需要点击底部的`确定`按钮才会触发回调事件，回调参数为一个对象，有如下属性：

```json
{
    year: 2021, // 选择的年份
    month: 11, // 选择的月份
    day: 11, // 选择的哪一天
    days: 30, // 当前选中月有多少天
    week: '星期四', // 选择日期对应的星期数
    isToday: false, // 选中的日期是否为今天
    date: '2021-11-11', // 选择日期的整体值
    switch: false // 是否为切换年月操作
}
```



#### 日期范围模式

此模式用于选择一个日期范围，回调参数为一个对象，有如下属性：

```json
{
	endDate: "2021-11-11", // 选择的结束日期
	endDay: 11, // 结束日期是哪一天
	endMonth: 11, // 结束日期的月份
	endWeek: "星期四", // 结束日期的星期数
	endYear: 2021, // 结束日期的年份
	startDate: "2021-11-01", // 选择的起始日期
	startDay: 1, // 起始日期是哪一天
	startMonth: 11, // 起始日期的月份
	startWeek: "星期一", // 起始日期的星期数
	startYear: 2021 // 起始日期的年份
}
```



### 自定义内容

为了方便用户根据不同的业务场景显示不同的提示信息，该组件提供了以下参数可以供用户对提示信息进行自定义设置：

- `toolTips`设置顶部的提示信息
    - 也可以使用名为`tooltip`的插槽进行自定义(此时`toolTips`参数设置的值失效)

- `startText`设置当`mode`为`range`时开始日期下的提示文字
- `endText`设置当`mode`为`range`时结束日期下的提示文字

```vue
<tn-calendar v-model="show" mode="range" toolTips="入住/离开日期" startText="入住" endText="离开"></tn-calendar>
```





### API

### Props

|         属性名         |                       说明                       |       类型       |    默认值     |  可选值  |
|:-------------------:|:----------------------------------------------:|:--------------:|:----------:|:-----:|
|       v-model       |                   弹出与收起日历组件                    |    Boolean     |   false    | true  |
|        mode         |                模式，具体说明可以参考上方说明                 |     String     |    date    | range |
|     changeYear      |                     允许切换年份                     |    Boolean     |    true    | false |
|     changeMonth     |                     允许切换月份                     |    Boolean     |    true    | false |
|       maxYear       |                   允许选择的最大年份                    | Number\|String |    2100    |   -   |
|       minYear       |                   允许选择的最小年份                    | Number\|String |    1970    |   -   |
|       minDate       |                   允许选择的最小日期                    |     String     | 1970-01-01 |   -   |
|       maxDate       | 允许选择的最大日期，如果为空则为当天，格式为`yyyy-MM-dd(2021-11-11)` |     String     |     -      |   -   |
|   monthArrowColor   |                   切换月份按钮的颜色                    |     String     |  #AAAAAA   |   -   |
|   yearArrowColor    |                   切换年份按钮的颜色                    |     String     |  #C8C8C8   |   -   |
|        color        |                     默认字体颜色                     |     String     |  #080808   |   -   |
|    activeBgColor    |                 选中\|起始结束日期背景颜色                 |     String     |  #01BEFF   |   -   |
|     activeColor     |                 选中\|起始结束日期字体颜色                 |     String     |  #FFFFFF   |   -   |
|    rangeBgColor     |          范围日期内的背景颜色，`mode`为`range`时生效          |     String     | #E6E6E655  |   -   |
|     rangeColor      |          范围日期内的字体颜色，`mode`为`range`时生效          |     String     |  #01BEFF   |   -   |
|      startText      |          起始日期底部提示文字，`mode`为`range`时生效          |     String     |     开始     |   -   |
|       endText       |          结束日期底部提示文字，`mode`为`range`时生效          |     String     |     结束     |   -   |
|      btnColor       |                   底部按钮的背景颜色                    |     String     |  #01BEFF   |   -   |
|     lunarColor      |         农历字体的颜色，`showLunar`为`true`时生效          |     String     |  #AAAAAA   |   -   |
|   isActiveCurrent   |                  选中日期后是否有选中效果                  |    Boolean     |    true    | false |
|      isChange       |              切换年月时是否触发`change`事件               |    Boolean     |    true    | false |
|      showLunar      |                     显示农历信息                     |    Boolean     |    true    | false |
|      toolTips       |                     顶部提示信息                     |     String     |   请选择日期    |   -   |
|    borderRadius     |                 显示圆角的大小，单位rpx                  |     Number     |     0      |   -   |
|      closeBtn       |                     显示关闭按钮                     |    Boolean     |   false    | true  |
| safeAreaInsetBottom |                   开启底部安全区适配                    |    Boolean     |   false    | true  |
|    maskCloseable    |                  点击遮罩层可关闭选择器                   |    Boolean     |    true    | false |
|       zIndex        |                  弹窗的`zIndex`值                  |     Number     |   20075    |   -   |



### Slots

|   名称    |               说明                |
|:-------:|:-------------------------------:|
| tooltip | 顶部提示信息插槽，如果不填写则使用`toolTips`参数的值 |



### Event

| 事件名称   | 说明                  | 回调参数                        |
|--------|---------------------|-----------------------------|
| change | 点击确认按钮时触发，获取切换年月时触发 | 根据不同的模式返回不同的参数，详细信息可以参考上方说明 |
| close  | 关闭弹窗时触发             | -                           |

