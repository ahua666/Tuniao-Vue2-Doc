## List 列表Item<to-api/>
<demo-model url="/componentsPage/list/list"></demo-model>



::: tip 说明
该组件可以单独使用，也可以配合`tn-list-view`使用创建列表容器，同一个管理同一个容器中的列表。
:::

### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

#### 配合`tn-list-item`进行使用

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



#### 单独使用

```vue
<tn-list-cell>列表Item</tn-list-cell>
```



### 设置列表左边的箭头信息

`tn-list-cell`组件提供了`arrow`参数设置右边的箭头，配合`arrowRight`可以设置箭头是否贴紧列表右边。

```vue
<tn-list-cell :arrow="true" :arrowRight="true">显示右边箭头</tn-list-cell>
```



### 设置列表下边框信息

`tn-list-view`组件提供了`lineRight`和`lineLeft`参数，可以配置下边框距离列表两边是否产生一定的距离。

使用这两个参数的时候需要将`unlined`参数设置为`false`显示下边框。

```vue
<tn-list-cell :unlined="false" :lineRight="true" :lineLeft="false">下边框右边产生一定的距离</tn-list-cell>
```



### API

### Props

|     属性名      |                             说明                             |      类型      |   默认值    |                        可选值                         |
| :-------------: | :----------------------------------------------------------: | :------------: | :---------: | :---------------------------------------------------: |
|      index      |                 列表序号，标记当前点击的列表                 | Number\|String |      0      |                           -                           |
| backgroundColor |                           背景颜色                           |     String     |   #FFFFFF   | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontColor    |                           字体颜色                           |     String     |      -      | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontSize     |                           字体大小                           |     Number     |     28      |                           -                           |
|    fontUnit     |                        字体大小的单位                        |     String     |     rpx     |                           -                           |
|     padding     |                            内边距                            |     String     | 26rpx 30rpx |                           -                           |
|      arrow      |                       显示列表右边箭头                       |    Boolean     |    false    |                         true                          |
|   arrowRight    |      列表右箭头距离右边是否有边距，配合`arrow`参数使用       |    Boolean     |    true     |                         false                         |
|     unlined     |                       隐藏列表下面线条                       |    Boolean     |    false    |                         true                          |
|    lineLeft     | 当`unlined`为`false`生效，列表下面的线条是否距离左边产生一定的距离 |    Boolean     |    true     |                         false                         |
|    lineRight    | 当`unlined`为`false`生效，列表下面的线条是否距离右边产生一定的距离 |    Boolean     |    true     |                         false                         |
|     radius      |                        给列表加上圆角                        |    Boolean     |    false    |                         true                          |
|      hover      |                         列表点击效果                         |    Boolean     |    false    |                         true                          |



### Slots

|  名称   |           说明           |
| :-----: | :----------------------: |
| default | 存放用户自定义列表的内容 |



### Event

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
| click    | 列表点击事件 | index    |

