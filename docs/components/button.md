## Button 按钮 <to-api/>
<demo-model url="/basicPage/button/button"></demo-model>
该组件内部实现以uni-app`button`组件为基础，进行了二次封装。

::: warning 注意
此组件内部使用`uni-app`组件为基础，暴露出来的props基本和官方组件保持一致，不同的平台会有不同的限制，具体可以参考uni-app的官方文档：[uni-app官方button组件](https://uniapp.dcloud.io/component/button)
:::

### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

按钮内容通过`slot`传入。

```vue
<tn-button>图鸟</tn-button>
```



### 设置按钮的颜色

可以通过`backgroundColor`和`fontColor`来设置颜色信息。设置按钮的颜色可以使用TuniaoUI内置样式中的颜色值进行设置

```vue
<tn-button backgroundColor="#01BEFF" fontColor="#080808">自定义颜色按钮</tn-button>
<tn-button backgroundColor="tn-bg-blue" fontColor="tn-color-white">自定义颜色按钮</tn-button>
```



### 设置尺寸

可以通过设置`tn-button`组件的`size`（可选值为`sm`(小尺寸),`lg`(大尺寸)），默认值为空。

```vue
<tn-button size="sm">小尺寸按钮</tn-button>
```



### 设置按钮的形状

可以通过设置`tn-button`组件的`shape`（可选值为default(默认),round(椭圆),icon(图标按钮)）

```vue
<tn-button shape="round">椭圆按钮</tn-button>
```



### 设置镂空状态

镂空状态下的按钮背景颜色会被设置为`transparent`(透明)，通过`plain`属性来设置

```vue
<tn-button :plain="true">镂空按钮</tn-button>
```



### API

### Props

|      属性名      |              说明               |       类型       | 默认值  |                        可选值                         |
| :--------------: | :-----------------------------: |:--------------:| :-----: | :---------------------------------------------------: |
|      index       |   用于区分多个按钮的点击事件    | String\|Number |    0    |                           -                           |
| backgroundColor  |            背景颜色             |     String     | #FFFFFF | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontColor     |            字体颜色             |     String     |    -    | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|     fontSize     |            字体大小             |     Number     |   28    |                           -                           |
|     fontUnit     |         字体大小的单位          |     String     |   rpx   |                           -                           |
|      width       |              宽度               |     String     |  auto   |                           -                           |
|      height      |              高度               |     String     |  64rpx  |                           -                           |
|     padding      |             内边距              |     String     | 0 30rpx |                           -                           |
|      margin      |             外边距              |     String     |    -    |                           -                           |
|       size       |            按钮尺寸             |     String     |    -    |                         sm/lg                         |
|      shape       |           按钮的形状            |     String     | default |    default(默认)、round(椭圆按钮)、icon(图标按钮)     |
|      shadow      |            加上阴影             |    Boolean     |  false  |                         true                          |
|     fontBold     |            加粗字体             |    Boolean     |  false  |                         true                          |
|      plain       |            镂空按钮             |    Boolean     |  false  |                         true                          |
|      border      | 显示边框，`plain`为`true`时生效 |    Boolean     |  true   |                         false                         |
|    borderBold    | 边框加粗，`plain`为`true`时生效 |    Boolean     |  false  |                         true                          |
|     disabled     |              禁用               |    Boolean     |  false  |                         true                          |
|     loading      |            加载状态             |    Boolean     |  false  |                         true                          |
|     formType     |       form表单触发的类型        |     String     |    -    |                     submit/reset                      |
|     openType     |            开放能力             |     String     |    -    |                  参考uni-app官方文档                  |
| blockRepeatClick |          阻止重复点击           |    Boolean     |  false  |                         true                          |
| scene |          场景：（如果开启blockRepeatClick，这里无效）none ： 不开启防抖节流模式，debounce ：防抖模式 throttle：节流模式           |     String     |  none  |                         true                          |
| blockTime |          防抖节流间隔时间（毫秒）           |    Number     |  200  |                         true                          |



### Slots

|  名称   |               说明               |
| :-----: | :------------------------------: |
| default | 按钮显示的内容，可自定义内容展示 |



### Event

| 事件名称       | 说明                                                         | 回调参数                                                     |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| getuserinfo    | 参考官方文档[getuserinfo](https://uniapp.dcloud.io/component/button) | 返回获取到的用户信息                                         |
| concat         | 打开客服会话，参考官方文档[concat](https://uniapp.dcloud.io/component/button) | 如果用户在会话中点击消息卡片后返回应用，可以从 contact 回调中获得具体信息 |
| getphonenumber | 获取用户手机号回调，参考官方文档[getphonenumber](https://uniapp.dcloud.io/component/button) | 手机号信息                                                   |
| error          | 当使用开放能力时，发生错误时的回调，参考官方文档[error](https://uniapp.dcloud.io/component/button) | 错误回调信息                                                 |
| click          | 按钮点击事件                                                 | index                                                        |

