## Slider 滑动选择器 <to-api/>
      
<demo-model url="/componentsPage/slider/slider"></demo-model>


该组件一般用于表单中，手动选择一个区间范围的场景。



### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |



### 基本使用

需要通过`v-model`绑定一个值，来初始化滑块的选择值(`min`到`max`之间)，这个值是双向绑定的，您可以通过这个值，实时地得知内部的滑动结果。

```vue
<template>
  <tn-slider v-model="value"></tn-slider>
</template>

<script>
  export default {
    data() {
      return {
        value: 30
      }
    }
  }
</script>
```



### 设置最大最小值

设置`min`和`max`可以设置滑动条的最小最大值。

```vue
<tn-slider v-model="value" :mix="20" :max="60"></tn-slider>
```



### 设置步进值

设置`step`参数可以设置步进值，就是每一次滑动时跳变的值。

::: tip 提示

需要注意的是，这个`step`必须要被`max`值整除，否则会出现无法无法滑动到最大值的情况。

:::

```vue
<tn-slider v-model="value" :mix="20" :max="60" :step="5"></tn-slider>
```



### 自定义滑动选择器的样式

- 通过`inactiveColor`配置底部滑动条背景颜色
- 通过`activeColor`配置底部选择部分的背景颜色
- 通过`blockWidth`配置滑块宽度(高等于宽)
- 通过`blockColor`配置滑动按钮按钮的颜色
- 通过`height`配置滑块条高度，单位rpx

```vue
<tn-slider v-model="value" activeColor="red" blockColor="green"></tn-slider>
```



### 自定义滑块的内容和样式

如果需要使用自定义的滑块只需要在`tn-slider`组件中包裹自定义的滑块即可。

```vue
<template>
  <tn-slider v-model="value">
    <view class="tn-slider__custom-block">
      {{ value }}
    </view>
  </tn-slider>
</template>

<script>
  export default {
    data() {
      return {
        value: 30
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tn-slider__custom-block {
    background-color: $tn-color-orange;
    width: auto;
    height: 40rpx;
    line-height: 40rpx;
    padding: 0 5rpx;
    border-radius: 50%;
    text-align: center;
    color: #FFFFFF;
  }
</style>
```



### API

### Props

|      属性名      |      说明      |       类型       |   默认值   | 可选值  |
|:-------------:|:------------:|:--------------:|:-------:|:----:|
|    v-model    | 用于双向绑定当前选中的值 | Number\|String |    0    |  -   |
|      min      |   允许选择的最小值   |     Number     |    0    |  -   |
|      max      |   允许选择的最大值   |     Number     |   100   |  -   |
|     step      |  每一次滑动的步进值   |     Number     |    1    |  -   |
|   disabled    |    禁止滑动滑块    |    Boolean     |  false  | true |
|  blockWidth   | 滑块的宽度，单位rpx  |     Number     |   30    |  -   |
|  lineHeight   | 滑动条的高度，单位rpx |     Number     |    8    |  -   |
|  activeColor  |  滑动条激活时的颜色   |     String     | #01BEFF |  -   |
| inactiveColor |  滑动条未激活时的颜色  |     String     | #E6E6E6 |  -   |
|  blockColor   |    滑块的颜色     |     String     | #FFFFFF |  -   |
|  blockStyle   |   滑块自定义样式    |     Object     |    -    |  -   |



### Slots

|   名称    |     说明     |
|:-------:|:----------:|
| default | 存放自定义滑块的内容 |



### Event

| 事件名称   | 说明     | 回调参数 |
|--------|--------|------|
| start  | 滑块开始滑动 | -    |
| moving | 滑块正在滑动 | -    |
| end    | 滑块结束滑动 | -    |
