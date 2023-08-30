## Subsection 分段器 <to-api/>

<demo-model url="/componentsPage/subsection/subsection"></demo-model>


该分段器一般用于用户从几个选项中选择某一个的场景

### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |


### 基本使用 
```vue
<template>
  <tn-subsection :list="list"></tn-subsection>
</template>

<script>
export default {
  data() {
    return {
      list: ['全部','未付款','待发货','待收货','待评价'],
    }
  }
}
</script>
```
### 按钮模式
`button` 按钮模式 `subsection` 分段模式
```vue
<template>
  <tn-subsection :list="list" mode="button"></tn-subsection>
  <view class="tn-margin-top">
    <tn-subsection :list="list" mode="button" :borderRadius="50"></tn-subsection>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: ['全部','未付款','待发货','待收货','待评价'],
    }
  }
}
</script>
```
### 取消切换动画
```vue
<template>
  <tn-subsection :list="list" :animation="false"></tn-subsection>
</template>

<script>
export default {
  data() {
    return {
      list: ['全部','未付款','待发货','待收货','待评价'],
    }
  }
}
</script>
```
### 贝塞尔曲线切换动画
```vue
<template>
  <tn-subsection :list="list" animationType="cubic-bezier"></tn-subsection>
  <view class="tn-margin-top">
    <tn-subsection :list="list" mode="button" :borderRadius="50" animationType="cubic-bezier"></tn-subsection>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: ['全部','未付款','待发货','待收货','待评价'],
    }
  }
}
</script>
```
### 选中字体设置为粗体
```vue
<template>
  <tn-subsection :list="list" :bold="true"></tn-subsection>
</template>

<script>
export default {
  data() {
    return {
      list: ['全部','未付款','待发货','待收货','待评价'],
    }
  }
}
</script>
```
### 自定义样式
```vue

<template>
  <tn-subsection :list="list" :height="40" :fontSize="20"></tn-subsection>
  <view class="tn-margin-top">
    <tn-subsection :list="list" mode="button" :borderRadius="50" backgroundColor="tn-cool-bg-color-9"
                   buttonColor="tn-cool-bg-color-7" inactiveColor="#FFFFFF" activeColor="#27A1BA"></tn-subsection>
  </view>
  <view class="tn-margin-top">
    <tn-subsection :list="list" :borderRadius="50" backgroundColor="#FFFFFF" buttonColor="#E83A30"
                   inactiveColor="#838383"></tn-subsection>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: ['全部', '未付款', '待发货', '待收货', '待评价'],
    }
  }
}
</script>
```
### API

### Subsection Props

|       属性名       |             说明              |      类型       |    默认值     |        可选值        |
|:---------------:|:---------------------------:|:-------------:|:----------:|:-----------------:|
|      mode       | button 按钮模式 subsection 分段模式 |    String     | subsection | button/subsection |
|     height      |            组件高度             |    Number     |     60     |         -         |
|      list       |           tab的数据            |     Array     |     []     |         -         |
|     current     |        当前活动tab的index        | Number/String |     0      |         -         |
|   activeColor   |          激活时的字体颜色           |    String     |  #FFFFFF   |         -         |
|  inactiveColor  |          未激活时的字体颜色          |    String     |  #AAAAAA   |         -         |
|      bold       |        激活tab的字体是否加粗         |    Boolean    |   false    |    true/false     |
| backgroundColor |            背景颜色             |    String     |  #F4F4F4   |         -         |
|   buttonColor   |            滑块的颜色            |    String     |  #01BEFF   |         -         |
|      list       |           tab的数据            |     Array     |     []     |         -         |
|  borderRadius   | 当mode为button时生效，圆角的值，单位rpx  |    Number     |     10     |         -         |
|    animation    |           是否开启动画            |    Boolean    |    true    |    true/false     |
|  animationType  | 动画类型 cubic-bezier -> 贝塞尔曲线  |    String     |     ''     |         -         |
|  vibrateShort   |         滑动滑块是否触发震动          |    Boolean    |   false    |    true/false     |

### Subsection Event

| 事件名称   | 说明   | 回调参数                |
|--------|------|---------------------|
| change | 点击事件 | {index:0,name:"全部"} |
