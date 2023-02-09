## Keyboard 键盘 <to-api/>

<demo-model url="/componentsPage/keyboard/keyboard"></demo-model>

该组件为TuniaoUI自定义的键盘面板，内置了数字键盘，车牌号码，身份证3种模式，都有可以打乱按键顺序的选项。
可以结合TuniaoUI的[验证码输入组件](/components/codeinput.html)使用

### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

通过`mode`参数定义键盘的类型，`v-model`绑定一个值为布尔值的变量控制键盘的弹出与收起：

- mode = number (默认值)为数字键盘，此时顶部工具条中间的提示文字为"数字键盘"
- mode = car 为汽车键盘，此时顶部工具条中间的提示文字为"车牌号键盘"
- mode = card 为身份证键盘，此时顶部工具条中间的提示文字为"身份证键盘"

```vue
<template>
  <view>
    <tn-keyboard mode="number" v-model="show"></tn-keyboard>
    <tn-button @click="show = true">打开</tn-button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
</script>
```



### 设置顶部工具条信息

- 通过`tooltip`参数配置是否显示显示顶部的工具条，默认为`true`
- 通过`tips`参数修改工具条中间的提示文字
- 通过`showTips`可以控制是否显示工具条中间的文字
- 通过`cancelBtn`参数配置是否显示工具条左边的"取消"按钮
- 通过`confirmBtn`参数配置是否显示工具条右边的"完成"按钮

```vue
<tn-keyboard mode="number" v-model="show" tips="请输入金额" :cancelBtn="false"></tn-keyboard>
```



### 是否显示遮罩

在某些场景下需要用户可以观察到输入的内容，这时候可以设置`mask`属性为`false`隐藏遮罩。

```vue
<tn-keyboard mode="number" v-model="show" :mask="false"></tn-keyboard>
```



### 打乱键盘的顺序

可以通过设置`randomEnabled`参数设置是否打乱键盘的按键的顺序。

```vue
<tn-keyboard mode="number" v-model="show" :randomEnabled="true"></tn-keyboard>
```



### 获取键盘点击键的信息

- 输入值是通过组件的`change`事件实现的，组件内部每个按键被点击的时候，组件就会发出一个`change`事件，回调参数为点击的按键的值。
- 通过`backspace`事件监听键盘退格键的点击，通过修改父组件的值实现退格的效果，见下方示例

```vue
<template>
  <tn-keyboard v-model="show" mode="number" @change="valChange" @backspace="backspace"></tn-keyboard>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        show: false
      }
    },
    methods: {
      // 按键被点击(点击退格键不会触发此事件)
      valChange(val) {
        // 将每次按键的值拼接到value变量中
        this.value += val
        console.log(this.value);
      },
      // 退格键被点击
      backspace() {
        // 删除value的最后一个字符
        if (this.value.length) this.value = this.value.substr(0, this.value.length - 1)
        console.log(this.value);
      }
    }
  }
</script>
```



### API

### Props

|       属性名        |               说明               |  类型   | 默认值 |  可选值  |
| :-----------------: | :------------------------------: | :-----: | :----: | :------: |
|       v-model       |     用户控件键盘的弹出与收起     | Boolean | false  |   true   |
|        mode         |             键盘类型             | String  | number | card/car |
|     dotEnabled      |   显示小数点，在数字模式下有效   | Boolean |  true  |  false   |
|    randomEnabled    |           打乱键盘顺序           | Boolean | false  |   true   |
|    switchEnMode     | 切换中英文状态，在车牌模式下有效 | Boolean | false  |   true   |
|       tooltip       |          显示顶部工具条          | Boolean |  true  |  false   |
|      showTips       |   顶部工具条中是否显示提示信息   | Boolean |  true  |  false   |
|        tips         |      顶部工具条中间提示文字      | String  |   -    |    -     |
|      cancelBtn      |           显示取消按钮           | Boolean |  true  |  false   |
|       confirm       |           显示确认按钮           | Boolean |  true  |  false   |
|     cancelText      |          取消按钮的文字          | String  |  取消  |    -     |
|     confirmText     |          确认按钮的文字          | String  |  确认  |    -     |
| safeAreaInsetBottom |        开启底部安全区适配        | Boolean | false  |   true   |
|    maskCloseable    |      点击遮罩层可关闭选择器      | Boolean |  true  |  false   |
|        mask         |             显示遮罩             | Boolean |  true  |  false   |
|       zIndex        |         弹窗的`zIndex`值         | Number  | 20075  |    -     |



### Slots

|  名称   |             说明             |
| :-----: | :--------------------------: |
| default | 顶部工具条自定义中间提示内容 |



### Event

| 事件名称  | 说明                               | 回调参数 |
| --------- | ---------------------------------- | -------- |
| change    | 键盘按钮被点击时触发，不包含退格键 | 按键的值 |
| cancel    | 点击取消按钮时触发                 | -        |
| confirm   | 点击确认按钮时触发                 | -        |
| backspace | 点击键盘上的退格键时触发           | -        |

