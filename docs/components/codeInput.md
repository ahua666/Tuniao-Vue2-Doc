## CodeInput 验证码输入 <to-api/>

<demo-model url="/componentsPage/verification-code-input/verification-code-input"></demo-model>

该组件一般用于验证用户短信验证码的场景，也可以结合TuniaoUI的[键盘组件](keyboard.md)使用

### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |

### 基本使用

```vue

<view class="tn-bg-white">
<tn-verification-code-input v-model="value1"></tn-verification-code-input>
</view>
```

### 居中提示线

```vue

<view class="tn-bg-white">
<tn-verification-code-input v-model="value2" mode="middleLine"></tn-verification-code-input>
</view>
```

### 底部提示线

```vue

<view class="tn-bg-white">
<tn-verification-code-input v-model="value3" mode="bottomLine"></tn-verification-code-input>
</view>
```

### 修改验证码长度

```vue

<view class="tn-bg-white">
<tn-verification-code-input v-model="value4" :maxLength="6"></tn-verification-code-input>
</view>
```

### 使用圆点隐藏已输入

```vue

<view class="tn-bg-white">
<tn-verification-code-input v-model="value5" :dotFill="true"></tn-verification-code-input>
</view>
```

### 不带呼吸效果

```vue

<view class="tn-bg-white">
<tn-verification-code-input v-model="value6" :breathe="false"></tn-verification-code-input>
</view>
```

### 字体加粗
```vue

<view class="tn-bg-white">
<tn-verification-code-input v-model="value7" :bold="true"></tn-verification-code-input>
</view>
```
### 自定义样式
```vue

<view class="tn-bg-white">
<tn-verification-code-input v-model="value8" :fontSize="40" :inputWidth="60" activeColor="#3D7EFF"
                            inactiveColor="#9EBEFF"></tn-verification-code-input>
</view>
```
### API

### CodeInput Props

|       属性名        |               说明               |      类型       |  默认值  |                            可选值                            |
|:----------------:|:------------------------------:|:-------------:|:-----:|:---------------------------------------------------------:|
|      value       |             验证码的值              | String/Number |  ''   |                             -                             |
|    maxLength     |             最大输入长度             |    Number     |   4   |                             -                             |
|       mode       |              显示模式              |    String     |  box  | `box` 盒子 <br/>`bottomLine`  底部横线 <br/> `middleLine`  中间横线 |
|     dotFill      |           用圆点填充空白位置            |    Boolean    | false |                        true/false                         |
|       bold       |              字体加粗              |    Boolean    | false |                        true/false                         |
|     fontSize     |              字体大小              |    Number     |  ''   |                             -                             |
|   activeColor    |             激活时的颜色             |    String     |  ''   |                             -                             |
|    inputWidth    |          输入框宽度，单位rpx           |    Number     |  80   |                             -                             |
|     breathe      |         当前激活的item带呼吸效果         |    Boolean    | true  |                        true/false                         |
|      focus       |             自动获取焦点             |    Boolean    | false |                        true/false                         |
| disabledKeyboard | 隐藏原生键盘，当使用自定义键盘的时候设置该参数未true即可 |    Boolean    | false |                        true/false                         |
|   activeColor    |             激活时的颜色             |    String     |  ''   |                             -                             |
|    inputWidth    |          输入框宽度，单位rpx           |    Number     |  80   |                             -                             |
|     breathe      |         当前激活的item带呼吸效果         |    Boolean    | true  |                        true/false                         |

### CodeInput Event

| 事件名称   | 说明             | 回调参数                 |
|--------|----------------|----------------------|
| change | 输入时触发          | value String/Number  |
| input  | 输入时触发          | value  String/Number |
| finish | 达到maxlength时触发 | value String/Number  |
