## NoticeBar 通知栏 <to-api/>

<demo-model url="/componentsPage/notice-bar/notice-bar"></demo-model>

该组件用于滚动通告场景，有多种模式可供选择

### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |



### 基本使用

- 通过`list`数组参数设置需要滚动的内容
- 滚动`mode`参数有两种模式，分别是`horizontal`水平滚动，`vertical`垂直滚动。其中在水平滚动模式下又可以通过`circular`来配置是衔接滚动(`true`)还是步进滚动(`false`)， 衔接滚动滚动会把`list`数组元素拼接成一个字符串形式(用逗号进行分隔)进行滚动

```vue
<template>
  <view>
    <tn-notice-bar :list="list" mode="horizontal"></tn-notice-bar>

    <tn-notice-bar :list="list" mode="horizontal" :circular="false"></tn-notice-bar>

    <tn-notice-bar :list="list" mode="vertical"></tn-notice-bar>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          'TuniaoUI现已发布V1.0.0',
          '今天天气晴朗，适合处理bug',
          'TuniaoUIV2.0.0即将发布',
          '今天想提前下班，领导不允许："你提前走人就算你是旷工了啊！"'
        ]
      }
    }
  }
</script>
```



### 设置背景和字体颜色

可以通过`backgrundColor`和`fontColor`来设置颜色信息。设置通知栏的颜色可以使用TuniaoUI内置样式中的颜色值进行设置

```vue
<tn-notice-bar :list="list" mode="horizontal" backgroundColor="tn-bg-red" fontColor="#FFFFFF"></tn-notice-bar>
```



### 自定义图标

可以通过设置`leftIcon`、`rightIcon`为true来控制是否显示左右两边的图标，默认时显示左图标。

- 通过`leftIconName`、`rightIconName`来设置图标的名称（TuniaoUI中自带的）。
- 通过`leftIconSize`、`rightIconSize`来设置图标的大小（单位rpx）。

```vue
<tn-notice-bar :list="list" :leftIcon="true" :rightIcon="true"></tn-notice-bar>
```



### 设置滚动速度

- `mode`为`vertical`(垂直滚动)，或者`mode`为`horizontal`且`circular`为`false`时，两者都可视为"步进"滚动，此时通过`duration`设置滚动周期时长，单位为`ms`
- `mode`为`horizontal`且`circular`为`true`时，可视为"水平衔接滚动"，此时TuniaoUI加入了一个滚动因子参数，可确保在任意多内容情况下，滚动速度恒定不变， 可通过`speed`参数配置每秒滚动的距离，单位为`rpx`

```vue
<tn-notice-bar :list="list" mode="horizontal" :speed="140"></tn-notice-bar>

<tn-notice-bar :list="list" mode="horizontal" :circular="false" :duration="1500"></tn-notice-bar>

<tn-notice-bar :list="list" mode="vertical" :duration="1500"></tn-notice-bar>
```



### 设置滚动状态

- `autoplay`参数默认为`true`，控制是否自动播放滚动通告
- `playState`参数为`paused`，滚动会暂停，为`play`滚动继续播放

```vue
<tn-notice-bar :list="list" mode="horizontal" :speed="140" :playStatus="paused"></tn-notice-bar>
```



### API

### Props

|       属性名       |                              说明                              |   类型    |     默认值     |                  可选值                  |
|:---------------:|:------------------------------------------------------------:|:-------:|:-----------:|:-------------------------------------:|
|      list       |                            滚动的内容                             |  Array  |      -      |                   -                   |
|      show       |                            显示通知栏                             | Boolean |    true     |                 false                 |
|   playStatus    |                          通知栏信息滚动状态                           | String  |    play     |                paused                 |
|      mode       |                            信息滚动方向                            | String  | horizontal  |               vertical                |
| backgroundColor |                             背景颜色                             | String  |   #01BEFF   | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontColor    |                             字体颜色                             | String  |      -      | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|    fontSize     |                             字体大小                             | Number  |     26      |                   -                   |
|    fontUnit     |                           字体大小的单位                            | String  |     rpx     |                   -                   |
|    leftIcon     |                            显示左图标                             | Boolean |    true     |                 false                 |
|  leftIconName   |                    左图标名称，使用TuniaoUI内置的图标                     | String  |    sound    |                   -                   |
|  leftIconSize   |                        左图标大小，单位`rpx`                         | Number  |     34      |                   -                   |
|    rightIcon    |                            显示右图标                             | Boolean |    false    |                 true                  |
|  rightIconName  |                    右图标名称，使用TuniaoUI内置的图标                     | String  |    right    |                   -                   |
|  rightIconSize  |                        右图标大小，单位`rpx`                         | Number  |     26      |                   -                   |
|    closeBtn     |                            显示关闭按钮                            | Boolean |    false    |                 true                  |
|     radius      |                         圆角的值，单位`rpx`                         | Number  |      0      |                   -                   |
|     padding     |                             内边距                              | String  | 18rpx 24rpx |                   -                   |
|      speed      | 水平滚动文字的速度，`mode`为`horizontal`且`circular`为`true`时有效，单位每秒滚动rpx | Number  |     160     |                   -                   |
|    duration     |    垂直滚动切换速度，`mode`为`vertical`或者`circular`为`false`时有效，单位ms    | Number  |    2000     |                   -                   |
|    circular     |                    水平滚动时有效，水平滚动的文字是否衔接一起                     | Boolean |    true     |                 false                 |
|   autoHidden    |                      当list为空时，是否自动隐藏通知栏                      | Boolean |    true     |                 false                 |



### Slots

none



### Event

| 事件名称       | 说明                                                                          | 回调参数                     |
|------------|-----------------------------------------------------------------------------|--------------------------|
| click      | 点击通知栏的文字时触发，当`mode`为`horizontal`且`circular`为`false`，`mode`为`vertical`时有效    | index：当前点击的文本在list数值中的位置 |
| close      | 点击关闭按钮时触发                                                                   | -                        |
| leftClick  | 点击了左边图标时触发                                                                  | -                        |
| rightClick | 点击了右边图标时触发                                                                  | -                        |
| end        | 列表消息滚动完一个周期时触发，当`mode`为`horizontal`且`circular`为`false`，`mode`为`vertical`时有效 | -                        |

