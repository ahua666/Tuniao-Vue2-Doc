## GoodsNav 商品导航 <to-api/>

<demo-model url="/componentsPage/goods-nav/goods-nav"></demo-model>

### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |

### 基本使用
```vue
<tn-goods-nav></tn-goods-nav>
```
### 显示阴影
```vue
<tn-goods-nav :shadow="true"></tn-goods-nav>
```

### 选项设置为头像
```vue
<template>
  <tn-goods-nav :options="avatarOptions"></tn-goods-nav>
</template>

<script>
export default {
  data() {
    return {
      avatarOptions: [{
        avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg'
      },{
        icon: 'service',
        text: '客服'
      },{
        icon: 'star',
        text: '收藏'
      }],
    }
  }
}
</script>
```
### 设置角标
```vue
<template>
  <tn-goods-nav :options="countOptions"></tn-goods-nav>
</template>

<script>
export default {
  data() {
    return {
      countOptions: [{
        avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
        count: 10
      }, {
        icon: 'service',
        text: '客服',
        count: 100
      }, {
        icon: 'star',
        text: '收藏'
      }],
    }
  }
}
</script>

```
### 设置边距按钮
```vue
<tn-goods-nav buttonType="paddingRect"></tn-goods-nav>
```
### 设置圆角按钮
```vue
<tn-goods-nav buttonType="round"></tn-goods-nav>
```
### 不设置选项
```vue
<tn-goods-nav :options="[]"></tn-goods-nav>
```
### 自定义颜色
```vue

<template>
  <tn-goods-nav :options="customOptions" buttonType="round" :buttonGroups="customButtonGroups"></tn-goods-nav>
</template>

<script>
export default {
  data() {
    return {
      customOptions: [{
        avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
        count: 10,
        countBackgroundColor: '#E83A30'
      }, {
        icon: 'service',
        text: '客服',
        count: 100,
        countBackgroundColor: 'transparent',
        countFontColor: '#E83A30'
      }, {
        icon: 'star',
        text: '收藏',
        iconColor: '#838383',
        fontColor: '#080808'
      }],
      customButtonGroups: [{
        text: '加入购物车',
        backgroundColor: 'tn-cool-bg-color-8',
        color: '#FFFFFF'
      }, {
        text: '结算',
        backgroundColor: 'tn-cool-bg-color-8--reverse',
        color: '#FFFFFF'
      }],
    }
  }
}
</script>
```
### 固定在底部
```vue

<template>
  <tn-goods-nav :fixed="true" :safeAreaInsetBottom="true" @optionClick="onOptionClick"
                @buttonClick="onButtonClick"></tn-goods-nav>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    // 选项点击事件
    onOptionClick(e) {
      this.$tn.message.toast(`点击了第${e.index}个选项`)
    },
    // 按钮点击事件
    onButtonClick(e) {
      this.$tn.message.toast(`点击了第${e.index}个按钮`)
    }
  }
}
</script>
```
### API

### Subsection Props

|         属性名         |                                                                                               说明                                                                                               |   类型    |                                                              默认值                                                              |          可选值           |
|:-------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------:|:-----------------------------------------------------------------------------------------------------------------------------:|:----------------------:|
|       options       | 选项信息(建议不超过3个)<br/>`icon`图标名称<br/>`text`显示的文本<br/>`count`角标的值<br/>`countBackgroundColor`角标背景颜色<br/>`countFontColor`角标字体颜色<br/>`iconColor`图标颜色<br/>`textColor`文本颜色<br/>`avatar`显示头像（此时将不显示图标和文本） |  Array  |                    [{icon: 'shop',text: '店铺'},{icon: 'service', text: '客服' },{ icon: 'star', text: '收藏' }]                    |           -            |
|    buttonGroups     |                                                           按钮组(建议不超过2个) <br/>`text`显示的文本<br/>`backgroundColor`按钮背景颜色<br/>`color` 文本颜色                                                           |  Array  | [{text: '加入购物车', backgroundColor: '#FFA726', color: '#FFFFFF' },{ text: '结算', backgroundColor: '#FF7043', color: '#FFFFFF' }] |           -            |
|   backgroundColor   |                                                                                              背景颜色                                                                                              | String  |                                                               -                                                               |           -            |
|       height        |                                                                                          导航的高度，单位rpx                                                                                           | Number  |                                                               0                                                               |           -            |
|       shadow        |                                                                                              显示阴影                                                                                              | Boolean |                                                             false                                                             |       true/false       |
|       zIndex        |                                                                                             导航的层级                                                                                              | Number  |                                                               0                                                               |           -            |
|     buttonType      |                                                                 按钮类型<br/>`rect` 方形 <br/>`paddingRect` 上下带边距方形<br/> `round` 圆角                                                                  | String  |                                                             rect                                                              | rect/round/paddingRect |
|        fixed        |                                                                                            是否固定在底部                                                                                             | Boolean |                                                             false                                                             |       true/false       |
| safeAreaInsetBottom |                                                                             是否开启底部安全区适配，开启的话，会在iPhoneX机型底部添加一定的内边距                                                                             | Boolean |                                                             false                                                             |       true/false       |

### Subsection Event

| 事件名称        | 说明     | 回调参数         |
|-------------|--------|--------------|
| optionClick | 选项点击事件 | index:Number |
| buttonClick | 按钮点击事件 | index:Number |
