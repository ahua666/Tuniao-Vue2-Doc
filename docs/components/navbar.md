## NavBar 自定义顶部导航栏<to-api/>
::: danger 特别提示
在由于右侧的演示是通过iframe引入的，PC端可能无法显示正常效果，请在真机演示中查看效果。
:::

<demo-model url="/componentsPage/nav-bar/nav-bar"></demo-model>


此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用uni-app带的导航栏。

::: warning 注意
组件在以下情况下会有默认的高度，默认的导航栏高度会设置到全局变量中，可以通过this.vuex_custom_bar_height来获取默认的自定义顶部到导航栏的高度。

- H5：默认自定义顶栏的高度为45px
- 微信小程序：会根据小程序胶囊的位置来确定顶部导航栏的高度，这样做可以保证小程序的导航栏和官方的保持一致。

:::

### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |



### 基本使用

默认情况下，会显示**左边的返回按钮和返回的字样**并固定在顶部，如果不想显示可以将`isBack`设置为`false`。

**说明**：使用了自定义顶部导航栏需要将存放内容的`view`元素设置`paddingTop`为自定义高度的值，否则可能会出现内容被遮挡的情况。

::: tip 说明

在小程序下会自动避开右侧胶囊的区域。

:::

```vue
<template>
  <!-- 顶部自定义导航 -->
  <tn-nav-bar>自定义导航栏</tn-nav-bar>
  <!-- 页面内容 -->
  <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
    内容
  </view>
</template>
```



### 设置导航栏的高度

自定义导航栏根据不同端会默认有高度，但是用户也可以通过设置`height`属性去设置导航栏的高度，在设置了`height`属性之后会优先使用当前设置的高度。

**说明**：经过大量测测试，建议给安卓设定的导航栏高度为`48`，iOS设定的导航栏高度为`44`

```vue
<tn-nav-bar :height="68">自定义导航栏</tn-nav-bar>
```



### 自定义导航栏内容

自定义导航栏可以分为以下三种情况：

1. 不显示返回按钮，可以设置`isBack`为`false`即可，这时候就会隐藏左边的返回按钮信息。
2. 修改返回按钮对应的文本，可以通过设置`backTitle`来设置对应的文本，默认值是返回。
3. 自定义返回按钮的样式，可以设置`customBack`为`true`，然后将`slot`命名为`back`即可。

默认的`插槽slot`即为导航栏中间的内容

```vue
<!-- 自定义返回按钮样式 -->
<tn-nav-bar fixed alpha customBack>
  <view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
    <text class='tn-icon tn-icon-left'></text>
    <text class='tn-icon tn-icon-home-capsule-fill'></text>
  </view>
</tn-nav-bar>
```



### 自定义导航栏背景颜色

通过设置`backgroundColor`来设置导航栏的背景颜色，如果需要透明的背景可以设置`alpha`参数为`true`。

```vue
<tn-nav-bar :alpha="true">透明背景导航栏</tn-nav-bar>
```



### 返回前回调

::: warning 注意

在使用该功能的父组件不能设置`name`参数。

:::

在点击切换之前，如果配置了`beforeBack`参数并绑定的是一个方法的话，将会抛出点击项的索引，并执行此方法。

此回调可以返回一个`promise`、`true`，或者`false`，下面分别阐述三者的处理情况：

- `false`——如果返回`false`，将不会切换`tab`项
- `true`——如果返回`true`，将会切换`tab`项
- `promise`——如果返回的是一个`promise`，如果进入`then`回调，就会和返回`true`的情况一样，如果进入`catch`回调，就会和返回`false`的情况一样

下面举例说明：

1. #### 普通返回

```vue
<template>
  <tn-nav-bar fixed :beforeBack="beforeBack">导航栏</tn-nav-bar>
</template>

<script>
  export default {
    methods: {
      beforeBack(index) {
        // 只能切换偶数项
        if (index % 2 == 0) return true
        else return false
      }
    }
  }
</script>
```

2. #### 请求后返回

```vue
<template>
  <tn-nav-bar fixed :beforeBack="beforeBack">导航栏</tn-nav-bar>
</template>

<script>
  export default {
    methods: {
      async beforeBack(index) {
        // await等待一个请求，请求回来后再返回true，再进行切换
        let data = await this.$tn.http.post('https://demo.tuniao.com/xxx')
        return true // 或者根据逻辑返回false
      }
    }
  }
</script>
```

3. 返回一个Promise

```vue
<template>
  <tn-nav-bar fixed :beforeBack="beforeBack">导航栏</tn-nav-bar>
</template>

<script>
  export default {
    methods: {
      beforeBack(index) {
        // 返回一个promise
        return new Promise((resolve, reject) => {
          this.$tn.http.post('https://demo.tuniao.com/xxx').then(res => {
            // resolve()之后，将会进入promise的组件内部的then回调，相当于返回true
            resolve()
          }).catch(err => {
            // reject()之后，将会进入promise的组件内部的catch回调，相当于返回false
            reject()
          })
        })
      }
    }
  }
</script>

```



### 注意事项

既然是要自定义导航栏，那么首先就要取消系统自带的导航栏，需要在uni-app目的根目录的"pages.json"中设置，同时在此设置状态栏字体的颜色(H5无效)， 自定义导航栏后，如果想通过"uni.setNavigationBarColor"动态设置导航栏颜色相关参数，是可能会出问题的，请勿使用此方式。

```json
// pages.json

{
  "pages": [ 
    {
      "path": "pages/index/index",
      "style": {
        "navigationStyle": "custom", // 隐藏系统导航栏
      }
    }
  ],
  "globalStyle": {
    // 全局隐藏系统导航栏
    //"navigationStyle": "custom",
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "Tuniao UI",
  }
}
```



### API

### Props

|       属性名       |      说明       |    类型    |   默认值   |                  可选值                  |
|:---------------:|:-------------:|:--------:|:-------:|:-------------------------------------:|
| backgroundColor |     背景颜色      |  String  | #FFFFFF | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|     height      |    导航栏的高度     |  Number  |    -    |                   -                   |
|      unit       |    导航栏高度单位    |  String  |   px    |                   -                   |
|     isBack      |    显示返回按钮     | Boolean  |  true   |                 false                 |
|    backIcon     |    返回按钮图标     |  String  |  left   |                   -                   |
|    backTitle    |    返回按钮文本     |  String  |   返回    |                   -                   |
|      alpha      |     透明背景      | Boolean  |  false  |                 true                  |
|      fixed      |   将导航栏固定在顶部   | Boolean  |  true   |                 false                 |
|  bottomShadow   |    显示底部阴影     | Boolean  |  true   |                 false                 |
|   customBack    |   使用自定义返回按钮   | Boolean  |  false  |                 true                  |
|   beforeBack    |    返回前回调函数    | Function |    -    |                   -                   |
|     zIndex      | 导航栏的z-index的值 |  Number  |  29090  |                   -                   |



### Slots

|   名称    |    说明    |
|:-------:|:--------:|
| default | 导航栏中间内容  |
|  back   | 导航栏返回按钮  |
|  right  | 导航栏右边的内容 |



### Event

none
