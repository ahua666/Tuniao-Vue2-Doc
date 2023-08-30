## Badge 徽标 <to-api/>
该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式。

<demo-model url="/basicPage/badge/badge"></demo-model>
TuniaoUI微标包含了点和带内容的两种形式。



::: warning 注意

该组件内部是使用了`absulote`绝对定位，所以如果使用了当前组件的父元素需要设置position:relative相对定位。再通过调整`top`、`right`参数实现位置设置。

:::



### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

微标内容通过`slot`传入。

```vue
<tn-badge>99</tn-badge>
```



### 设置微标的颜色

可以通过`backgrundColor`和`fontColor`来设置颜色信息。设置微标的颜色可以使用TuniaoUI内置样式中的颜色值进行设置

```vue
<tn-badge backgroundColor="#01BEFF" fontColor="#080808">99</tn-badge>
<tn-badge backgroundColor="tn-bg-blue" fontColor="tn-color-white">99</tn-badge>
```



### 设置微标大小

可以通过设置`tn-badge`组件的`radius`设置微标的圆大小。

```vue
<tn-badge :redius="32">99</tn-badge>
```



### 设置微标为一个点

可以通过设置`tn-badge`组件的`dot`为true，将微标变成一个点，此时微标内的内容将不再进行显示。

```vue
<tn-badge :dot="true"></tn-badge>
```



### 使微标的中心点和父元素的右上角重合

为了方便用户在不定内容时也可以实现中心点重合，提供了一个参数，通过设置`translateCenter`可以使微标的中心点和父元素的右上角重合。

```vue
<tn-badge :translateCenter="true">99+</tn-badge>
```



### API

### Props

|     属性名      |                        说明                        |      类型      |  默认值   |                        可选值                         |
| :-------------: | :------------------------------------------------: | :------------: | :-------: | :---------------------------------------------------: |
|      index      |             用于区分多个微标的点击事件             | String\|Number |     0     |                           -                           |
| backgroundColor |                      背景颜色                      |     String     |  #FFFFFF  | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontColor    |                      字体颜色                      |     String     |     -     | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontSize     |                      字体大小                      |     Number     |    18     |                           -                           |
|    fontUnit     |                   字体大小的单位                   |     String     |    rpx    |                           -                           |
|     radius      |                      微标大小                      |     Number     |     -     |                           -                           |
|     padding     |                       内边距                       |     String     | 4rpx 8rpx |                           -                           |
|     margin      |                       外边距                       |     String     |     -     |                           -                           |
|       dot       |                    显示为一个点                    |    Boolean     |   false   |                         true                          |
|    absolute     |                相对于父元素绝对定位                |    Boolean     |   false   |                         true                          |
|       top       |  `absolute`为`true`时生效，相对于父元素上边的位置  |     String     |     -     |                           -                           |
|      right      |  `absolute`为`true`时生效，相对于父元素右边的位置  |     String     |     -     |                           -                           |
| translateCenter | `absolute`为`true`时生效，中心点与父元素右上角重合 |    Boolean     |   true    |                         false                         |



### Slots

|  名称   |               说明               |
| :-----: | :------------------------------: |
| default | 微标显示的内容，可自定义内容展示 |



### Event

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
| click    | 按钮点击事件 | index    |


