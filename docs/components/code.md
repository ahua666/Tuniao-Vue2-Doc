## Code 验证码倒计时 <to-api/>

<demo-model url="/componentsPage/verification-code/verification-code"></demo-model>

考虑到用户实际发送验证码的场景，可能是一个按钮，也可能是一段文字，提示语各有不同，所以本组件
不提供界面显示，只提供提示语，由用户将提示语嵌入到具体的场景


:::warning 注意：

由于uni中无法通过js创建元素，所以需要在页面中调用`<tn-verification-code />`组件，再通过`ref`调用。

:::



### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

通过`ref`获取组件对象，再执行后面的操作。

1. 通过`seconds`设置需要倒计的秒数(默认`60`)。
2. 通过`ref`调用组件内部的`start`方法，开始倒计时。
3. 通过监听`change`事件(从开始到结束之间，每秒触发一次)获得提示的文字。

注意：用户可能在倒计时的过程中点击获取验证码的按钮，组件内部提供了通过ref获取的`canGetCode`变量，在倒计时 过程中，该值为`false`，如果为`false`应该给予提示并不要再次向后端请求验证码，如果为`true`，则为获取验证码 之前，或者倒计结束之后，可以再次向后端请求验证码。

```vue
<template>
  <view>
    <tn-verification-code :seconds="seconds" @end="end" @start="start" ref="verificationCode" @change="codeChange"></tn-verification-code>
    <tn-button @tap="getCode">{{tips}}</tn-button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        tips: '',
        seconds: 10,
      }
    },
    onReady() {
      // 注意这里不能将一个组件赋值给data的一个变量，否则在微信小程序会
      // 造成循环引用而报错，如果你想这样做，请在非data中定义refCode变量
      // this.refCode = this.$refs.uCode;
    },
    methods: {
      codeChange(text) {
        this.tips = text
      },
      getCode() {
        if (this.$refs.verificationCode.canGetCode) {
          // 模拟向后端请求验证码
          uni.showLoading({
            title: '正在获取验证码'
          })
          setTimeout(() => {
            uni.hideLoading()
            // 这里此提示会被this.start()方法中的提示覆盖
            this.$tn.messageUtil.toast('验证码已发送')
            // 通知验证码组件内部开始倒计时
            this.$refs.verificationCode.start()
          }, 2000)
        } else {
          this.$tn.messageUtil.toast('倒计时结束后再发送')
        }
      },
      end() {
        this.$tn.messageUtil.toast('倒计时结束')
      },
      start() {
        this.$tn.messageUtil.toast('倒计时开始')
      }
    }
  }
</script>
```



### 自定义提示语

用户可以通过以下参数自定义每个阶段的提示信息。

- 获取前，参数为`startText`，默认值为"获取验证码"
- 倒计时期间，参数为`countDownText`，默认为"s秒重新获取"，这里的"s"(大小写均可)，将会被倒计的秒数替代
- 倒计时结束，参数为`endText`，默认值为"重新获取"

```vue
<tn-verification-code :seconds="seconds" ref="verificationCode" countDownText="请在s秒后再尝试"></tn-verification-code>
```



### 保持倒计时

一般情况下，在H5刷新浏览器，或者各端返回再进入时，倒计时会消失，导致用户可以再次尝试获取验证码，虽然后端还会对此进行进一步的判断。
对于这种情况，TuniaoUI给出了一个`keepRunning`参数(默认为`false`)，为`true`的时候，即使刷新浏览器，或者返回上一个页面， 倒计时依然会继续(如果还在倒计时间内的话)。

**注意：** 如果您的一个页面或者多个页面同时使用了多个此组件，为了防止多个组件之间，保存在本地的多个继续倒计时的变量之间互相干扰，可以配置 各个组件的`uniqueKey`为一个不重复的字符串，以作区分。

```vue
<tn-verification-code :seconds="seconds" ref="verificationCode" uniqueKey="page-a"></tn-verification-code>

<tn-verification-code :seconds="seconds" ref="verificationCode" uniqueKey="page-b"></tn-verification-code>
```



### API

### Props

|    属性名     |                             说明                             |  类型   |    默认值     | 可选值 |
| :-----------: | :----------------------------------------------------------: | :-----: | :-----------: | :----: |
|    seconds    |                     倒计时总时间，单位秒                     | Number  |      60       |   -    |
|   startText   |                     倒计时开始前提示信息                     | String  |  获取验证码   |   -    |
| countDownText | 正在执行倒计时的提示信息，s(大小写均可)将会被替换为具体的时间 | String  | s秒后重新获取 |   -    |
|    endText    |                      倒计时结束提示信息                      | String  |   重新获取    |   -    |
|  keepRunning  |            重新进入当前页面时，保持上一次的倒计时            | Boolean |     false     |  true  |
|   uniqueKey   |            用于区分多个页面保持倒计时时的唯一标识            | String  |       -       |   -    |



### Slots

none



### Methods

需要通过`ref`手动调用。

| 名称  |                   说明                   |
| :---: | :--------------------------------------: |
| start |              开始执行倒计时              |
| reset | 结束当前正在执行的倒计时，重新开始倒计时 |



### Event

| 事件名称 | 说明                         | 回调参数           |
| -------- | ---------------------------- | ------------------ |
| change   | 倒计时开始后，每一秒触发一次 | text: 当前剩余时间 |
| start    | 倒计时开始时触发             | -                  |
| end      | 倒计时结束时触发             | -                  |

