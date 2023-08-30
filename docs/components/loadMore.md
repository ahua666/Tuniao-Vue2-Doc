## LoadMore 加载更多 <to-api/>

<demo-model url="/componentsPage/load-more/load-more"></demo-model>


此组件一般用于标识页面底部加载数据时的状态

### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |


### 基本使用 
```vue
<template>
  <view>
    <tn-load-more></tn-load-more>
  </view>
</template>
```
### 加载中

```vue
<template>
  <view>
    <tn-load-more status="loading" :loadingIcon="false"></tn-load-more>
    <tn-load-more class="tn-margin-top" status="loading"></tn-load-more>
    <tn-load-more class="tn-margin-top" status="loading" loadingIconColor="#01BEFF"></tn-load-more>
    <tn-load-more class="tn-margin-top" status="loading" loadingIconType="flower"></tn-load-more>
  </view>
</template>
```
### 没有更多

```vue
<template>
  <view>
    <tn-load-more status="nomore"></tn-load-more>
    <view class="tn-margin-top">
      <tn-load-more class="tn-margin-top" status="nomore" dot></tn-load-more>
    </view>
  </view>
</template>
```
### 修改提示语

```vue
<template>
  <view>
    <tn-load-more status="loadmore" :loadText="loadText"></tn-load-more>
    <view class="tn-margin-top">
      <tn-load-more class="tn-margin-top" status="loading" :loadText="loadText"></tn-load-more>
    </view>
    <view class="tn-margin-top">
      <tn-load-more class="tn-margin-top" status="nomore" :loadText="loadText"></tn-load-more>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      loadText: {
        loadmore: '下拉加载',
        loading: '快速加载中...',
        nomore: '已经没有了啊'
      }
    }
  }
}
</script>
```
### 修改颜色
```vue
<template>
  <view>
    <tn-load-more status="loadmore" :loadText="loadText" fontColor="#01BEFF"></tn-load-more>
    <view class="tn-margin-top">
      <tn-load-more class="tn-margin-top" status="loading" :loadText="loadText" fontColor="tn-color-indigo">
      </tn-load-more>
    </view>
    <view class="tn-margin-top">
      <tn-load-more class="tn-margin-top" status="nomore" :loadText="loadText" fontColor="rgba(255, 129, 129, 0.8)">
      </tn-load-more>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      loadText: {
        loadmore: '下拉加载',
        loading: '快速加载中...',
        nomore: '已经没有了啊'
      }
    }
  }
}
</script>
```
### 修改字体尺寸
```vue
<tn-load-more :fontSize="32"></tn-load-more>
```
### API

### Props

| 参数               | 说明                                                       | 类型      | 默认值                                                       | 可选值                         |
|:-----------------|:---------------------------------------------------------|:--------|:----------------------------------------------------------|:----------------------------|
| status           | 加载状态                                                     | String  | loadmore                                                  | loadmore / loading / nomore |
| loadingIcon      | 显示加载图标                                                   | Boolean | true                                                      | false                       |
| loadingIconType  | 加载图标样式，参考tn-loading组件的加载类型 `circle` (圆圈) `flower` (花朵形状) | String  | circle                                                    | circle  / flower            |
| loadingIconColor | 在圆圈加载状态下，圆圈的颜色                                           | String  | -                                                         | -                           |
| loadText         | 显示的文字                                                    | Object  | { loadmore: '加载更多', loading: '正在加载...', nomore: '没有更多了' } |                             |
| dot              | 是否显示粗点，在nomore状态下生效                                      | Boolean | false                                                     | true                        |
| customStyle      | 自定义组件样式                                                  | Object  | -                                                         | -                           |
