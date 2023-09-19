## Avatar 头像 <to-api/>

<demo-model url="/basicPage/avatar/avatar"></demo-model>


当前组件可以使用图标、文字、图片的形式给用户展示数据。



### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

通过`src`、`text`、`icon`属性可以设置显示为图片、文职、图标的头像信息。

```vue
<tn-avatar text="图鸟"></tn-avatar>
<tn-avatar src="xxx.jpg"></tn-avatar>
```



### 设置头像的颜色

可以通过`backgrundColor`和`fontColor`来设置颜色信息。设置头像的颜色可以使用TuniaoUI内置样式中的颜色值进行设置。

设置颜色仅在设置为图标和文字时生效。

```vue
<tn-avatar backgroundColor="#01BEFF" fontColor="#080808" text="TN"></tn-avatar>
<tn-avatar backgroundColor="tn-bg-blue" fontColor="tn-color-white" icon="mail"></tn-avatar>
```



### 设置尺寸

可以通过设置`tn-avatar`组件的`size`（可选值为`sm`(小尺寸),`lg`(大尺寸),xl(加大尺寸)），默认值为空。

```vue
<tn-avatar size="sm" text="小尺寸头像"></tn-avatar>
```



### 设置头像的形状

可以通过设置`tn-avatar`组件的`shape`（可选值为circle(圆形，默认值),square(圆角方形)）。

```vue
<tn-avatar shape="square" text="TN"></tn-avatar>
```



### 设置头像右上角角标

设置`badge`属性为`true`和设置`badgeIcon`或者`badgeText`不为空值即可以让头像显示右上角的角标。

- 通过设置badgeIcon设置角标显示为图标。
- 设置badgeText设置角标显示为文字。

```vue
<tn-avatar :badge="true" badgeText="12"></tn-avatar>
```



### 设置头像组

设置头像组可以使用`tn-avatar-group`组件，并且传入`lists`属性即可，`lists`传入以下对象属性可以让其显示对应的头像信息：

```json
{
    src: 'https://demo.com/avatar/xiaomai1.jpg', // 显示为图片
    text: 'TN', // 显示为文字
    icon: 'logo-tuniao', // 显示为图标
}
```



```vue
<tn-avatar-group :lists="groupList"></tn-avatar-group>

data() {
    return {
        groupList: {
            src: 'https://demo.com/avatar/xiaomai1.jpg', // 显示为图片
            text: 'TN', // 显示为文字
            icon: 'logo-tuniao', // 显示为图标
        }
    }
}
```



### API

### Avatar Props

|     属性名      |                             说明                             |      类型      |       默认值       |                        可选值                         |
| :-------------: | :----------------------------------------------------------: | :------------: | :----------------: | :---------------------------------------------------: |
|      index      |                  用于区分多个头像的点击事件                  | String\|Number |         0          |                           -                           |
| backgroundColor |                           背景颜色                           |     String     |      #E6E6E6       | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontColor    |                           字体颜色                           |     String     |      #FFFFFF       | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontSize     |                           字体大小                           |     Number     |         28         |                           -                           |
|    fontUnit     |                        字体大小的单位                        |     String     |        rpx         |                           -                           |
|      size       |                           头像尺寸                           |     String     |         -          |                       sm/lg/xl                        |
|      shape      |                          头像的形状                          |     String     |       circle       |            circle(圆形)、square(圆角方形)             |
|       src       |         图片地址，当设置了文字和图标后当前属性会失效         |     String     |         -          |       本地图片相对路径、绝对路径、网络图片地址        |
|      text       |             头像显示文字的内容，默认级别比图片高             |     String     |         -          |                           -                           |
|      icon       |         头像显示图标的名称，名称为TuniaoUI内置的图标         |     String     |         -          |                           -                           |
|     border      |                           显示边框                           |    Boolean     |       false        |                         true                          |
|   borderColor   |               边框颜色，`border`为`true`时生效               |     String     | rgba(0, 0, 0, 0.1) |                           -                           |
|   borderSize    |        边框的大小，`border`为`true`时生效，单位`rpx`         |     Number     |         2          |                           -                           |
|     imgMode     | 当设置了头像显示图片时生效，设置图片的裁剪模式，具体可以参考uni-app图片设置的[mode参数](https://uniapp.dcloud.io/component/image) |     String     |     aspectFill     |                           -                           |
|      badge      |                        显示右上角角标                        |    Boolean     |       false        |                         true                          |
|    badgeSize    |       当设置`badge`后生效，设置角标的大小，单位为`rpx`       |     Number     |         28         |                           -                           |
|  badgeBgColor   |           当设置`badge`后生效，设置角标的背景颜色            |     String     |      #AAAAAA       |                           -                           |
|   badgeColor    |           当设置`badge`后生效，设置角标的字体颜色            |     String     |      #FFFFFF       |                           -                           |
|    badgeIcon    |            当设置`badge`后生效，设置角标的的图标             |     String     |         -          |                           -                           |
|    badgeText    |           当设置`badge`后生效，设置角标的文字内容            |     String     |         -          |                           -                           |
|  badgePosition  |   当设置`badge`后生效，设置角标的位置，格式为[top, right]    |     Array      |       [0,0]        |                           -                           |



### Avatar Slots

none



### Avatar Event

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
| click    | 头像点击事件 | index    |



### AvatarGroup Props

| 属性名  |                             说明                             |  类型  |   默认值   |             可选值             |
| :-----: | :----------------------------------------------------------: | :----: | :--------: | :----------------------------: |
|  lists  |            头像组，头像内参数说明可以查看上面说明            | Array  |     []     |               -                |
|  size   |                           头像尺寸                           | String |     -      |            sm/lg/xl            |
|  shape  |                          头像的形状                          | String |   circle   | circle(圆形)、square(圆角方形) |
| imgMode | 当设置了头像显示图片时生效，设置图片的裁剪模式，具体可以参考uni-app图片设置的[mode参数](https://uniapp.dcloud.io/component/image) | String | aspectFill |               -                |
