## Tag 标签 <to-api/>

<demo-model url="/basicPage/tag/tag"></demo-model>

### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √   |  √   |     √      |    未兼容    |   未兼容   |   未兼容   |  未兼容  |



### 基本使用

标签内容通过`slot`传入。

```vue
<tn-tag>图鸟</tn-tag>
```



### 设置标签的颜色

可以通过`backgrundColor`和`fontColor`来设置颜色信息。设置标签的颜色可以使用TuniaoUI内置样式中的颜色值进行设置

```vue
<tn-tag backgroundColor="#01BEFF" fontColor="#080808">自定义颜色标签</tn-tag>
<tn-tag backgroundColor="tn-bg-blue" fontColor="tn-color-white">自定义颜色标签</tn-tag>
```



### 设置尺寸

可以通过设置`tn-tag`组件的`size`（可选值为`sm`(小尺寸),`lg`(大尺寸)），默认值为空。

```vue
<tn-tag size="sm">小尺寸标签</tn-tag>
```



### 设置标签的形状

可以通过设置`tn-tag`组件的`shape`（可选值为radius(圆角),circle(椭圆),circleLeft(左半圆),circleRight(右半圆)）

```vue
<tn-tag shape="radius">圆角标签</tn-tag>
```



### 设置镂空状态

镂空状态下的标签背景颜色会被设置为`transparent`(透明)，通过`plain`属性来设置

```vue
<tn-tag :plain="true">镂空标签</tn-tag>
```



### API

### Props

|     属性名      |            说明            |      类型      | 默认值  |                            可选值                            |
| :-------------: | :------------------------: | :------------: | :-----: | :----------------------------------------------------------: |
|      index      | 用于区分多个标签的点击事件 | String\|Number |    0    |                              -                               |
| backgroundColor |          背景颜色          |     String     | #01BEFF |    颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名     |
|    fontColor    |          字体颜色          |     String     |    -    |    颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名     |
|    fontSize     |          字体大小          |     Number     |   28    |                              -                               |
|    fontUnit     |       字体大小的单位       |     String     |   rpx   |                              -                               |
|      width      |            宽度            |     String     |  100%   |                              -                               |
|     height      |            高度            |     String     |  48rpx  |                              -                               |
|     padding     |           内边距           |     String     | 0 16rpx |                              -                               |
|     margin      |           外边距           |     String     |    0    |                              -                               |
|      size       |          按钮尺寸          |     String     |    -    |                            sm/lg                             |
|      shape      |         标签的形状         |     String     |    -    | radius(圆角)、circle(椭圆)、circleLeft(左半圆)、circleRight(右半圆) |
|      plain      |          镂空按钮          |    Boolean     |  false  |                             true                             |
|   originLeft    |  将组件的基准点设置在左边  |    Boolean     |  false  |                             true                             |
|   originRight   |  将组件的基准点设置在右边  |    Boolean     |  false  |                             true                             |



### Slots

|  名称   |               说明               |
| :-----: | :------------------------------: |
| default | 标签显示的内容，可自定义内容展示 |



### Event

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
| click    | 标签点击事件 | index    |

