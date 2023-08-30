## TabsSwiper 全屏选项卡<to-api/>
<demo-model url="/vipPage/shop/order/order"></demo-model>

该组件内部实现主要依托于uni-app`scroll-view`和`swiper`组件，主要特色是切换过程中，tabsSwiper文字的颜色可以渐变，底部滑块可以 跟随式滑动，活动tab滚动居中等。应用场景可以用于需要左右切换页面。

TuniaoUI中共有2个组件可以实现tabs标签切换，分别是`tn-tabs`组件，`tn-tabs-swiper`组件，他们的异同点是：

- `tn-tabs`组件可以不结合uni-app`swiper`轮播组件使用，`tn-tabs-swiper`组件是必须要结合uni-app`swiper`轮播组件才能使用的。
- `tn-tabs`组件使用更简洁明了(这也是其存在的理由)，`tn-tabs-swiper`组件配置相对复杂一些。
- `tn-tabs-swiper`组件相比`tn-tabs`组件，由于搭配了uni-app`swiper`轮播组件，获得了滑块跟随，标签颜色渐变等效果，而`tn-tabs`组件是不具备的。

总的来说，二者配置参数和功能都差不多，看用户的需求自行衡量该使用哪一个组件。



::: warning 注意

此组件目前内部使用uni-app`swiper`组件为基础，`swiper`是单页组件， 适合做简单列表左右滑动，因为性能问题，用swiper做复杂长列表，需要较高的优化技巧以及接受一些限制。如果要实现类似腾讯新闻APP首页可以左右 滑动复杂的多个tab切换，不建议使用本组件，如果使用，请自行测试列表很长时的切换流畅度。

:::



### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |



### 基本使用

通过设置`isScroll`(默认为`true`)，配置tabs-swiper组件的内容是否可以左右拖动，一般4个标签以下时，无需拖动，设置为`false`，5个标签以上，建议可以左右拖动。

tabs标签的切换，需要绑定`current`值，在`change`事件回调中可以得到`index`，将其赋值给`current`即可。

具体的标签，通过`list`参数配置，该参数要求为数组，元素为对象，对象要有`name`属性，如果对象包含了`count`属性则会自动在右上角显示角标，用户可以通过设置`name`和`count`参数来自定义对象中`name`和`count`属性的名称。

```vue
<tn-tabs-swiper :list="list" :isScroll="false" :current="current" name="tab-name" @change="change"></tn-tabs-swiper>

<script>
  export default {
    data() {
      return {
        list: [{
          tab-name: '待收货'
        }, {
          tab-name: '待付款'
        }, {
          tab-name: '待评价',
          count: 5
        }],
        current: 0
      }
    },
    methods: {
      change(index) {
        this.current = index;
      }
    }
  }
</script>
```



### 自定义活动tab的样式

- 通过`activeColor`和`inactiveColor`控制tabs的激活和非激活颜色。
- `fontSize`为tabs文字大小。
- `current`为初始化tabs的激活tab索引，默认为0。
- `gutter`为单个tab标签的左右内边距之和，即左右各占`gutter`的一半。

```vue
<tn-tabs-swiper :list="list" current="2" activeColor="#31C9E8" inactiveColor="#E6E6E6" :fontSize="36"></tn-tabs-swiper>
```



### 自定义底部滑块的样式

- 可以通过`activeColor`控制颜色(同时为当前活动tab文字颜色和滑块的颜色)。
- `barWidth`控制滑块的长度(rpx)。
- `barHeight`控制滑块高度。

```vue
<tn-tabs-swiper :list="list" current="2" activeColor="#31C9E8" inactiveColor="#E6E6E6" :barWidth="50"></tn-tabs-swiper>
```



### 使用案例

该组件**必须**搭配uni-app`swiper`组件才能使用，可以实现左右滑动，注意：

- 必须要给组件设置`ref`属性，因为结合uni的`swiper`组件时需要调用tabsSwiper内部的方法。
- 本示例中在`swiper-item`中嵌套了`可选`的uni-app`scroll-view`组件，uni官方不建议在APP-vue和小程序中`scroll-view`中使用map、video等原生组件，
- 必须将组件的`current`参数，设置为`animationfinish`中的返回值。

具体请参考：[uni的scroll-view组件文档](https://uniapp.dcloud.io/component/scroll-view)

**注意**：由于tabsSwiper组件需要结合uni的`swiper`组件使用，过程较为复杂，故此示例代码仅作参考使用。

```vue
<template>
  <view class="template-order">
    <view class="order-wrap" :style="{marginTop: vuex_custom_bar_height + 'px'}">
      <!-- 顶部标签 -->
      <tn-tabs-swiper ref="tabs" :list="list" :current="tabsIndex" :isScroll="false" @change="tabsChange"></tn-tabs-swiper>
      <!-- 标签内容 -->
      <swiper class="swiper__box" :current="swiperIndex" @transition="swiperTransition"
        @animationfinish="swiperAnimationFinish">
        <swiper-item class="swiper__item">全部</swiper-item>
        <swiper-item class="swiper__item">待付款</swiper-item>
        <swiper-item class="swiper__item">待发货</swiper-item>
        <swiper-item class="swiper__item">待收货</swiper-item>
        <swiper-item class="swiper__item">待评价</swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            name: '全部'
          },
          {
            name: '待付款'
          },
          {
            name: '待发货',
            count: 10
          },
          {
            name: '待收货'
          },
          {
            name: '待评价',
            count: 5
          }
        ],
        tabsIndex: 0,
        swiperIndex: 0
      }
    },
    onLoad() {

    },
    methods: {
      // 标签栏值发生改变
      tabsChange(index) {
        this.swiperIndex = index
      },
      // swiper-item位置发生改变
      swiperTransition(event) {
        this.$refs.tabs.setDx(event.detail.dx)
      },
      // swiper动画结束
      swiperAnimationFinish(event) {
        const current = event.detail.current
        this.$refs.tabs.setFinishCurrent(current)
        this.swiperIndex = current
        this.tabsIndex = current
      }
    }
  }
</script>

<style lang="scss" scoped>
  .order-wrap {
    display: flex;
    flex-direction: column;
    height: calc(100vh - var(--window-top));
    width: 100%;
  }

  .swiper {
    &__box {
      flex: 1;
    }

    &__item {
      height: 100%;
    }
  }
</style>
```



### API

### Props

|       属性名       |                         说明                         |       类型       |   默认值    |  可选值  |
|:---------------:|:--------------------------------------------------:|:--------------:|:--------:|:-----:|
|      list       |                   标签数据数组，格式为对象数组                   |     Array      |    -     |   -   |
|      name       |                `list`参数中`name`属性的名称                |     String     |   name   |   -   |
|      count      |               `list`参数中`count`属性的名称                |     String     |  count   |   -   |
|     current     |                     当前活动的tab索引                     |     Number     |    0     |   -   |
|    isScroll     |                      菜单可以左右滑动                      |    Boolean     |   true   | false |
|     height      |               tabsSwiper组件的高度，单位rpx                |     Number     |    80    |   -   |
|       top       | tabsSwiper组件距离顶部的距离，用于处理使用了自定义顶部的情况会导致tabs被遮挡，单位px |     Number     |    -     |   -   |
|    itemWidth    |                   tabs每个item的宽度                    | String\|Number |   auto   |   -   |
|   swiperWidth   |       tabsSwiper组件外部swiper的宽度，默认为屏幕宽度，单位rpx        |     Number     |   750    |   -   |
|    duration     |                    过渡动画执行时间，单位s                    |     Number     |   0.3    |   -   |
|   activeColor   |                      标签激活时的颜色                      |     String     | #01BEFF  |   -   |
|  inactiveColor  |                     标签未激活时的颜色                      |     String     | #080808  |   -   |
| activeItemStyle |                     激活标签的自定义样式                     |     Object     |    -     |   -   |
|     showBar     |                       显示底部滑块                       |    Boolean     |   true   | false |
|    barWidth     |                   底部滑块的宽度，单位rpx                    |     Number     |    40    |   -   |
|    barHeight    |                   底部滑块的高度，单位rpx                    |     Number     |    6     |   -   |
|    barStyle     |                     底部滑块自定义样式                      |     Object     |    -     |   -   |
|     gutter      |                  item的左边边距，单位rpx                   |     Number     |    30    |   -   |
|   badgeOffset   |   如果有微标的时候，微标的偏移参数，格式为[x, y]，对应的值为`top`和`right`    |     Array      | [20, 22] |   -   |
|      bold       |                       字体是否加粗                       |    Boolean     |  false   | true  |
| autoCenterMode  |                    滚动到中心时对应的目标                     |     String     |  window  |   -   |
|     zIndex      |                tabsSwiper组件的z-index                |     Number     |    1     |   -   |



### Slots

none



### Event

| 事件名称   | 说明      | 回调参数                     |
|--------|---------|--------------------------|
| change | 点击标签时触发 | index: 当前点击标签的index，从0开始 |

