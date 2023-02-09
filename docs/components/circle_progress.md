## CircleProgress 圆形进度条<to-api/>
<demo-model url="/componentsPage/progress/progress"></demo-model>

用于展示进度信息，是一个圆形进度条。

内部是通过**canvas**实现的。



### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

- 通过`percent`设置当前的进度值，该值区间为0-100。
- 通过`activeColor`设置进度条的颜色。

```vue
<tn-circle-progress :percent="50" activeColor="#01BEFF"></tn-circle-progress>
```



### 在进度条内显示当前的进度值

可以通过设置`showPercent`参数来设置是否在进度条中显示进度。

**提示**：当前的进度值会显示在圆环的中间，如果将圆环的`width`太小可能会导致内容显示不完整。

```vue
<tn-circle-progress :percent="50" activeColor="#01BEFF" :showPercent="true"></tn-circle-progress>
```



### 自定义进度条内显示的内容

自定义进度条中显示的内容只需要将要显示的内容填写在`tn-circle-progress`内部（**默认插槽**）即可，使用自定义内容后`showPercent`参数会失效。

```vue
<tn-circle-progress :percent="50">
  <view class="tn-color-white">加载中</view>
</tn-circle-progress>
```



### API

### Props

|    属性名     |                说明                |  类型   | 默认值  | 可选值 |
| :-----------: | :--------------------------------: | :-----: | :-----: | :----: |
|    percent    |       进度条百分比值，0-100        | Number  |    0    |   -    |
|     width     |        圆环的宽度，单位rpx         | Number  |   200   |   -    |
|  borderWidth  |        圆环的线宽，单位rpx         | Number  |   14    |   -    |
|  activeColor  |        进度条激活部分的颜色        | String  | #01BEFF |   -    |
| inactiveColor |       进度条非激活部分的颜色       | String  | #F0F0F0 |   -    |
|  showPercent  |          显示进度条进度值          | Boolean |  false  |  true  |
|   duration    | 圆环执行**一圈动画**的时间，单位ms | Number  |  1500   |   -    |



### Slots

|  名称   |                       说明                       |
| :-----: | :----------------------------------------------: |
| default | 存放用户自定义进度条内的内容，会覆盖进度值的显示 |



### Event

none
