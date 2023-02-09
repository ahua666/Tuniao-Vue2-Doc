## Loading 加载动画 <to-api/>

<demo-model url="/componentsPage/loading/loading"></demo-model>


该组件为loading的一个小动画，主要为其他组件显示正在加载信息的场景服务。



### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

通过设置`mode`显示不同的加载动画。`circle`为圆圈，`flower`为花朵转圈。

设置`show`属性可以设置是否显示加载动画。

```vue
<tn-loading mode="circle" :show="true"></tn-loading>
```



### 设置加载动画的颜色

`color`属性当前只在`mode`为`circle`下有效。

```vue
<tn-loading color="#AAAAAA"></tn-loading>
```



### 设置尺寸

可以通过设置`tn-loading`组件的`size`。

```vue
<tn-button size="sm">小尺寸按钮</tn-button>
```



### API

### Props

| 属性名 |                说明                |  类型   | 默认值 | 可选值 |
| :----: | :--------------------------------: | :-----: | :----: | :----: |
|  mode  |            加载动画模式            | String  | circle | flower |
|  show  |            显示加载动画            | Boolean |  true  | false  |
| color  | 加载动画演示，在`circle`模式下有效 | String  |   -    |   -    |
|  size  |     加载动画的大小，单位为rpx      | Number  |   34   |   -    |



### Slots

none



### Event

none
