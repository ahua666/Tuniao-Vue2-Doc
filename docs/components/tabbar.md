## Tabbar 底部导航

<demo-model url="/"></demo-model>


该组件有以下优缺点：

#### 优点：

此组件一般用于应用的底部导航，具有如下特点：

- 可以设置凸起的按钮（不限于中间，可以在任何菜单上进行设置）
- 图标可以使用字体图标(内置图标)或者图片
- 可以动态切换菜单的数量以及配置
- 切换菜单之前，可以进行回调鉴权
- 可以设置角标
- 有效防止组件区域高度塌陷，无需给父元素额外的内边距或者外边距来避开导航的区域

#### 缺点：

- 首先是性能问题，在uni-app的vue版本上，自定义tabbar让您不得不在一个webview内模拟出多个页面，这存在严重的性能问题，在小程序上可能会出现闪屏现象
- 相比原生的uni-app的tabbar，自定义tabbar让你失去了路由管理的功能
- 渲染的速度比不上原生的tabbar，但是这影响不大

### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

在使用的时候，需要注意组件的位置，要将它放在和页面包裹所有内容的元素同级的位置，否则可能会造成组件的高度塌陷，有如下几个需要注意的点：

- 通过`list`参数配置每一个菜单item的参数
    - 通过list设置的菜单参数，优先级会比全局参数高
    - 通过设置`out`参数为`true`即可让对应的菜单变成突起菜单（不建议弄成动态，不听劝的我也没办法）
- 将组件放在和页面包裹所有内容的元素同级的位置
- 通过`v-model`绑定一个数值变量，用于指示当前激活项的索引

下面解释`list`数组中元素参数的作用：

```json
let list = [
	{
		// 激活时的图标/图片，使用TuniaoUI内置的图标
		activeIcon: "count-fill",
		// 未激活时的图标/图片，使用TuniaoUI内置的图标
		inactiveIcon: "count",
		// 显示的提示文字
		title: '首页',
		// 角标显示的数字，如果需要移除角标，不配置此参数或者配置此参数为0即可
		count: 2,
		// 如果配置此值为true，那么角标将会以红点的形式显示
		dot: true,
		// 当前显示为图标时，激活状态下的图标颜色，在这里配置的参数优先级比全局高
        activeIconColor: 'tn-cool-bg-color-1',
        // 当前显示为图标时，未激活状态下的图标颜色，在这里配置的参数优先级比全局高
        inactiveIconColor: '#AAAAAA',
        // 激活状态下的字体颜色，在这里配置的参数优先级比全局高
        activeColor: '#080808',
        // 未激活状态下的字体颜色，在这里配置的参数优先级比全局高
        inactiveColor: '#AAAAAA',
        // 图标大小
        iconSize: 40,
        // 是否显示未突起图标
        out: false
	}
]
```

```vue
<template>
  <view class="index">

    <view class="tn-page"></view>

    <tn-tabbar v-model="currentIndex" :list="tabbarList"></tn-tabbar>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 底部tabbar菜单数据
        tabbarList: [{
            title: '元素',
            activeIcon: 'count-fill',
            inactiveIcon: 'menu'
          },
          {
            title: '组件',
            activeIcon: 'discover-fill',
            inactiveIcon: 'discover'
          },
          {
            title: '页面',
            activeIcon: 'honor',
            inactiveIcon: 'honor',
            activeIconColor: '#FFFFFF',
            inactiveIconColor: '#FFFFFF',
            iconSize: 50,
            out: true
          },
          {
            title: '工具',
            activeIcon: 'computer-fill',
            inactiveIcon: 'computer'
          },
          {
            title: '图鸟',
            activeIcon: 'vip-fill',
            inactiveIcon: 'vip'
          }
        ],
        // tabbar当前被选中的序号
        currentIndex: 0
      }
    }
  }
</script>
```



### 自定义导航栏配置

可以通过以下参数，对组件进行整体的外观配置：

- 设置`height`和`outHeight`参数可以配置导航栏的高度和突起按钮的高度。
- 设置`bgColor`参数可以配置导航栏的背景颜色。
- 设置activeColor、inactiveColor、activeIconColor、inactiveIconColor参数配置文字与图标激活和未激活时的颜色，可以使用TuniaoUI内置的颜色类。
- 设置`animation`和`animationMode`可以设置点击选中时的动画：
    - 当前只提供了`scale`(缩放)一种动画模式。

```vue
<tn-tabbar v-model="currentIndex" :list="tabbarList" activeColor="#838383" inactiveColor="#AAAAAA"
  activeIconColor="tn-cool-bg-color-7" @change="switchTabbar" :animation="true"></tn-tabbar>
```



### 切换前回调

::: warning 注意

在使用该功能的父组件不能设置`name`参数。

:::

在点击切换之前，如果配置了`beforeSwitch`参数并绑定的是一个方法的话，将会抛出点击项的索引，并执行此方法。

此回调可以返回一个`promise`、`true`，或者`false`，下面分别阐述三者的处理情况：

- `false`——如果返回`false`，将不会切换`tab`项
- `true`——如果返回`true`，将会切换`tab`项
- `promise`——如果返回的是一个`promise`，如果进入`then`回调，就会和返回`true`的情况一样，如果进入`catch`回调，就会和返回`false`的情况一样

下面举例说明：

1. #### 普通返回

```vue
<template>
  <tn-tabbar :beforeSwitch="beforeSwitch"></tn-tabbar>
</template>

<script>
  export default {
    methods: {
      beforeSwitch(index) {
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
  <tn-tabbar :beforeSwitch="beforeSwitch"></tn-tabbar>
</template>

<script>
  export default {
    methods: {
      async beforeSwitch(index) {
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
  <tn-tabbar :beforeSwitch="beforeSwitch"></tn-tabbar>
</template>

<script>
  export default {
    methods: {
      beforeSwitch(index) {
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



### 实战教程
::: tip 提示
自定义`tabbar`场景，可以在一个页面内通过几个组件，用`v-if`切换去模拟各个页面。下面的是旧版本图鸟UI应该做的。目前新版本的图鸟UI无需下述操作
:::
~~自定义`tabbar`场景，我们不建议在一个页面内通过几个组件，用`v-if`切换去模拟各个页面，而应该使用uni-app自带的tabbar系统，同时隐藏原生的tabbar， 再引入自定导航栏，这样可以保证原有性能，同时又能自定义tabbar，思路如下：~~

~~1. 在`pages.json`中正常定义`tabbar`逻辑和字段，只需配置`tabbar`字段`list`中的`pagePath`(需以"/"开头)属性即可~~
~~2. 在各个`tabbar`页面引入`tn-tabbar`组件，组件会默认自动通过`uni.hideTabBar()`隐藏系统`tabbar`~~
~~3. 通过`vuex`引用同一份`tabbar`组件的`list`参数，这样可以做到修改某一个页面的`tn-tabbar`数据，其他页面的`tn-tabbar`也能同步更新~~
~~4. 组件内部会自动处理各种跳转的逻辑，同时需要注意以下两点：~~

~~- 要在`list`参数中配置`pagePath`路径，此路径为`pages.json`中定义的`tabbar`字段的路径~~
~~- 此种方式，无需通过`v-model`绑定活动项，内部会自动进行判断和跳转~~~~

### API

### Props

|       属性名        |                        说明                         |      类型      | 默认值  | 可选值 |
| :-----------------: | :-------------------------------------------------: | :------------: | :-----: | :----: |
|       v-model       |                   当前激活的选项                    | String\|Number |    0    |   -    |
|        show         |                   显示底部导航栏                    |    Boolean     |  true   | false  |
|        list         |    底部导航栏信息配置，参数说明可以参考上方说明     |     Array      |    -    |   -    |
|       height        |                导航栏高度，单位`rpx`                |     Number     |   100   |   -    |
|      outHeight      |              突起按钮的高度，单位`rpx`              |     Number     |   100   |   -    |
|       bgColor       |                      背景颜色                       |     String     | #FFFFFF |   -    |
|      iconSize       |                 图标大小，单位`rpx`                 |     Number     |   40    |   -    |
|      fontSize       |                 字体大小，单位`rpx`                 |     Number     |   24    |   -    |
|     activeColor     |                  激活时文字的颜色                   |     String     | #01BEFF |   -    |
|    inactiveColor    |                 未激活时文字的颜色                  |     String     | #AAAAAA |   -    |
|   activeIconColor   |    激活时图标的颜色，可以使用TuniaoUI内置的颜色     |     String     | #01BEFF |   -    |
|  inactiveIconColor  |   未激活时图标的颜色，可以使用TuniaoUI内置的颜色    |     String     | #AAAAAA |   -    |
|     activeStyle     |                  激活时自定义样式                   |     Object     |    -    |   -    |
|       shadow        |                      显示阴影                       |    Boolean     |  true   | false  |
|      animation      |                 点击时触发图标动画                  |    Boolean     |  false  |  true  |
|    animationMode    |           触发的动画模式，详细见上方说明            |     String     |  scale  |   -    |
|        fixed        |                     固定在底部                      |    Boolean     |  true   | false  |
| safeAreaInsetBottom | 开启底部安全区适配，开启的话，会在iPhoneX机型底部添 |    Boolean     |  false  |  true  |
|    beforeSwitch     |                 切换前触发钩子函数                  |    Function    |    -    |   -    |



### Slots

none



### Event

| 事件名称 | 说明                 | 回调参数                  |
| -------- | -------------------- | ------------------------- |
| change   | 切换导航栏选项时触发 | index：当前选中的选项序号 |

