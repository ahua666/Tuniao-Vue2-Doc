## Switch 开关选择器 <to-api/>

<demo-model url="/componentsPage/switch/switch"></demo-model>
选择开关一般用于只有两个选择，且只能选其一。



### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

通过`v-model`绑定一个`布尔值`变量，这个变量是双向绑定的，当用户开或关选择器的时候，在父组件的该值也会相应的变为`true`或者`false`，也就是说， 您不用监听`change`事件，也能知道选择器当前处于开或者关的状态。

```vue
<template>
  <tn-switch v-model="checked"></tn-switch>
</template>

<script>
  export default {
    data() {
      return {
        checked: false,
      }
    },
    methods: {
      // switch打开或者关闭时触发，值为true或者false
      // 即使不监听此事件，this.checked此时也会相应的变成true或者false
      change(status) {
        // console.log(status);
      },
    }
  }
</script>

```



### 自定义颜色

设置`activeColor`参数可以对激活的颜色进行配置，设置`inactiveColor`参数可以对未激活的颜色进行配置。

```vue
<tn-switch v-model="checked" inactiveColor="#AAAAAA" activeColor="blue"></tn-switch>
```



### 自定义值

设置`activeValue`参数可以对激活时的值进行配置，设置`inactiveValue`参数可以对未激活时的值进行配置。

```vue
<tn-switch v-model="checked" :inactiveValue="0" :activeValue="1"></tn-switch>
```



### 自定义图标

设置`leftIcon`和`rightIcon`可以对Switch中左右两边的图标进行配置，图标只能使用TuniaoUI内置的图标，如果不配置则不显示图标。

```vue
<tn-switch v-model="checked" :leftIcon="sex-female" :rightIcon="sex-male"></tn-switch>
```



### 禁用Switch

设置`disabled`为`true`，即可禁用某个组件，让用户无法点击，禁用分为两种状态，一是未勾选前禁用，这时只显示一个灰色的区域。二是已勾选后 再禁用，会在原有的基础上加上一定的透明度，但此时依然是不可操作的。

```vue
<tn-switch v-model="checked" :disabled="true"></tn-switch>
```



### 加载中

设置`loading`为true可以设置switch当前处于加载状态，此时的Switch无法选中。

```vue
<tn-switch v-model="checked" :loading="true"></tn-switch>
```



### 异步控制

这种场景，一般发生在用户打开或者关闭选择器时，需要本地或者向后端请求判断，是否允许用户打开或者关闭的场景。

- 假设原来是打开状态

1. 您通过`watch`监听`v-model`绑定的`checked`变量，或者通过监听`switch`的`change`事件，得知`checked`变量发生了变化
2. 这时您可以通过设置`loading`为`true`，同时将`checked`值设置为`true`(因为用户已关闭，这里让它重新打开，并处于加载中)
3. 等请求结束后，根据判断结果，把`checked`值设置为`true`或者`false`，同时去掉加载中状态(`loading`设置为`false`)，让组件呈现最终的状态

```vue
<template>
  <tn-switch v-model="checked" :loading="loading"></tn-switch>
</template>

<script>
  export default {
    data() {
      return {
        checked: true,
        loading: false,
        // 中间变量，避免在watch中多次回调，造成无限循环
        controlStatus: false
      }
    },
    watch: {
      checked(val) {
        // 等于false，意味着用户手动关闭了switch
        if (val == false) {
          if (this.controlStatus == true) {
            this.controlStatus = false
            return
          }
          // 重新打开switch，并让它处于加载中的状态
          this.checked = true
          this.loading = true
          // 模拟向后端发起请求
          this.getRestultFromServer()
        }
      }
    },
    methods: {
      // switch打开或者关闭时触发，值为true或者false
      change(status) {
        // console.log(status);
      },
      getRestultFromServer() {
        // 通过定时器模拟向后端请求
        setTimeout(() => {
          this.controlStatus = true
          // 后端允许用户关闭switch，设置checked为false，结束loading状态
          this.loading = false
          this.checked = false
        }, 1500)
      }
    }
  }
</script>
```



### API

### Props

|    属性名     |                           说明                           |          类型           | 默认值  | 可选值 |
| :-----------: | :------------------------------------------------------: | :---------------------: | :-----: | :----: |
|    v-model    |               用于双向绑定`Switch`开关状态               |         Boolean         |  false  |  true  |
|   disabled    |                      禁止操作switch                      |         Boolean         |  false  |  true  |
|     shape     |                        按钮的形状                        |         String          | circle  | square |
|  activeColor  |                     激活时的背景颜色                     |         String          | #01BEFF |   -    |
| inactiveColor |                     关闭时的背景颜色                     |         String          | #AAAAAA |   -    |
|     size      |                      大小，单位rpx                       |         Number          |   50    |   -    |
|  activeValue  |                        激活时的值                        | String\|Number\|Boolean |  true   |   -    |
| inactiveValue |                        关闭时的值                        | String\|Number\|Boolean |  false  |   -    |
|   leftIcon    | 开关的左图标，为空时则不显示，只能使用TuniaoUI内置的图标 |         String          |    -    |   -    |
|   rightIcon   | 开关的右图标，为空时则不显示，只能使用TuniaoUI内置的图标 |         String          |    -    |   -    |
|    loading    |                       处在加载状态                       |         Boolean         |  false  |  true  |
| vibrateShort  |                    点击按钮时触发震动                    |         Boolean         |  false  |  true  |



### Slots

none



### Event

| 事件名称 | 说明                           | 回调参数                                           |
| -------- | ------------------------------ | -------------------------------------------------- |
| input    | `switch`开关状态发生改变时触发 | 打开时为`activeValue`值，关闭时为`inactiveValue`值 |
| change   | `switch`开关状态发生改变时触发 | 打开时为`activeValue`值，关闭时为`inactiveValue`值 |
