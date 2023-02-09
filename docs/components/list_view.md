## List 列表容器<to-api/>
<demo-model url="/componentsPage/list/list"></demo-model>

用于存放`tn-list-item`列表组件，实现统一管理列表组件。方便管理列表的顶部和边框等信息。

::: tip 说明
列表组件的外层盒子，结合组件`tn-list-item`使用
:::

### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

设置列表容器的`标题`为待发货，去掉所有边框，显示为`卡片类型`，列表显示右边的箭头。

```vue
<template>
    <tn-list-view title="待发货" :card="true" unlined="all">
      <block v-for="(item, index) in 3" :key="index">
        <tn-list-cell :arrow="true">图鸟科技</tn-list-cell>
      </block>
    </tn-list-view>
</template>
```



### 设置为自定义标题

`tn-list-view`组件提供了`customTitle`参数，当该参数设置为`true`时，`title`参数会失效。自定义标题的内容设置在名称为`title`的插槽中。

```vue
<tn-list-view :customTitle="true">
  <view slot="title" class="list-title-container">
    <tn-button class="list-title-button">设置</tn-button>
  </view>
</tn-list-view>
```



### API

### Props

|     属性名      |      说明      |  类型   | 默认值 |                        可选值                         |
| :-------------: | :------------: | :-----: | :----: | :---------------------------------------------------: |
| backgroundColor |    背景颜色    | String  |   -    | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontColor    |    字体颜色    | String  |   -    | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontSize     |    字体大小    | Number  |   28   |                           -                           |
|    fontUnit     | 字体大小的单位 | String  |  rpx   |                           -                           |
|      title      |      标题      | String  |   -    |                           -                           |
|     unlined     |  隐藏容器边框  | String  |  all   |                      top/bottom                       |
|    marginTop    |    上外边距    | String  |   -    |                           -                           |
|      card       | 显示为卡片模式 | Boolean | false  |                         true                          |
|   customTitle   |   自定义标题   | Boolean | false  |                         true                          |



### Slots

|  名称   |            说明            |
| :-----: | :------------------------: |
| default | 用户存放`tn-list-cell`组件 |
|  title  |  存放用户自定义标题的内容  |



### Event

| 事件名称   | 说明         | 回调参数 |
| ---------- | ------------ | -------- |
| clickTitle | 标题点击事件 | -        |

