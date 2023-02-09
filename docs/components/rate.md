## Rate 评分器 <to-api/>

<demo-model url="/componentsPage/rate/rate"></demo-model>

该组件一般用于表单中，手动选择一个区间范围的场景。



### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

- 通过`count`参数设置总共有多少颗星星可选择。
- 通过`v-model`双向绑定初始化时默认选中的星星数量。

```vue
<template>
  <tn-rate v-model="value" :count="count"></tn-rate>
</template>

<script>
  export default {
    data() {
      return {
        count: 4,
        value: 2
      }
    }
  }
</script>
```



### 设置最小选中数

设置`minCount`可以设置最小选择星星的数量。

```vue
<tn-rate v-model="value" :minCount="1"></tn-rate>
```



### 设置禁用状态

设置`disbaled`参数可以设置禁用状态，在禁用下无法滑动和点击。

```vue
<tn-rate v-model="value" :disabled="true"></tn-rate>
```



### 设置半星状态

设置`allowHalf`参数可以允许选择半星。

```vue
<tn-rate v-model="3.5" :allowHalf="true"></tn-rate>
```



### 自定义样式

- 通过`activeColor`设置选中的星星的颜色
- 通过`inactiveColor`设置未选中时星星的颜色
- 通过`gutter`设置星星的间距，左右内边距各占`gutter`的一半

```vue
<tn-rate v-model="value" :activeColor="#31E749" :inactiveColor="#E7D5FA"></tn-rate>
```



### 自定义星星的图标

- 通过`activeIcon`设置激活的图标
- 通过`inactiveIcon`设置未激活的图标

图标只允许使用TuniaoUI内置的图标。

```vue
<tn-rate v-model="value" :activeIcon="emoji-good-fill" :inactiveIcon="emoji-good"></tn-rate>
```



### 评分分级分层

- 通过`colors`设置不同颜色区分评分层级
- 通过`icons`设置不同类型图标区分评分层级

`icons`参数传递了3个图标，当选中2个时，用第一个图标，4个时，用第二个图标，5个时，用第三个图标作为激活的图标。如此类推。

```vue
<template>
  <view>
    <tn-rate v-model="value" :colors="colors" :icons="icons"></tn-rate>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        value: 2,
        colors: ['#01BEFF','#3D7EFF','#31C9E8'],
        icons: ['star-fill','praise-fill','flower-fill']
      }
    }
  }
</script>
```



### API

### Props

|    属性名     |                    说明                    |  类型   |  默认值   | 可选值 |
| :-----------: | :----------------------------------------: | :-----: | :-------: | :----: |
|    v-model    |         用于双向绑定当前选中的数量         | Number  |     0     |   -    |
|     count     |               显示的星星数量               | Number  |     5     |   -    |
|   minCount    |            允许选择的最小星星数            | Number  |     0     |   -    |
|   disabled    |              禁止选择滑动操作              | Boolean |   false   |  true  |
|   allowHalf   |              允许选择半个星星              | Boolean |   false   |  true  |
|     size      |             星星大小，单位rpx              | Number  |    32     |   -    |
|  activeColor  |                被选中的颜色                | String  |  #01BEFF  |   -    |
| inactiveColor |               未被选中的颜色               | String  |  #AAAAAA  |   -    |
|  activeIcon   |  被选中的图标，只可使用TuniaoUI内置的图标  | String  | star-fill |   -    |
| inactiveIcon  | 未被选中的图标，只可使用TuniaoUI内置的图标 | String  |   star    |   -    |
|    gutter     |          星星之间的距离，单位rpx           | Number  |    10     |   -    |
|    colors     |           分层选择时的自定义颜色           |  Array  |     -     |   -    |
|     icons     |           分层选择时的自定义图标           |  Array  |     -     |   -    |



### Slots

none



### Event

| 事件名称 | 说明                       | 回调参数           |
| -------- | -------------------------- | ------------------ |
| change   | 选中星星数量发生变化时触发 | 当前选中的星星数量 |
