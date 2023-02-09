## SwipeAction 滑动单元格 <to-api/>

<demo-model url="/componentsPage/swipe-action/swipe-action"></demo-model>


该组件内部实现以uni-app`button`组件为基础，进行了二次封装，一般用于左滑唤出操作菜单的场景，用的最多的是左滑删除操作。
::: warning 注意
如果把该组件通过v-for用于左滑删除的列表，请保证循环的`:key`是一个唯一值，可以用数据的id或者title替代。 不能是数组循环的index，否则删除的时候，可能会出现数据错乱
:::
::: danger 特别提示
在由于右侧的演示是通过iframe引入的，PC端无法左右滑动，请在真机演示中查看效果。
:::
### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

`tn-swipe-action-item`组件需要将其包裹在`tn-swipe-action`组件中。

通过slot传入内容即可，可以将`v-for`的"index"索引值传递给`name`参数，用于点击时，在回调方法中对某一个数据进行操作(点击回调时第一个参数会返回此索引值)。

滑动菜单通过`options`参数配置，此参数为一个数组，元素为对象，可以配置按钮的文字，背景颜色(建议只配置此两个参数即可)，**请勿配置宽高等属性**，`options`中可以配置以下参数：

```json
{
    // 菜单文字
	text: '置顶',
    // 菜单图标TuniaoUI内置图标
    icon: 'star',
    // 图标大小
    iconSize: 28,
    // 自定义样式配置
    style: {
        // 圆角值
        borderRadius: '0rpx',
        // 背景颜色
        backgroundColor: '#01BEFF',
        // 图标、字体颜色
        color: '#FFFFFF',
        // 字体大小
        fontSize: 28
        // ......
    }
}
```

```vue
<template>
  <view class="components-index-list">
    <tn-swipe-action>
      <tn-swipe-action-item :options="options1">
        <view class="swipe-action__item tn-flex tn-flex-direction-row tn-flex-col-top tn-flex-row-left">
          <view class="swipe-action__item__image">
            <image src="https://tnuiimage.tnkjapp.com/shop/card.jpg" mode="scaleToFill"></image>
          </view>
          <view class="swipe-action__item__info tn-flex tn-flex-direction-column tn-flex-col-top tn-flex-row-right">
            <view class="swipe-action__item__info__title">
              基本使用
            </view>
            <view class="swipe-action__item__info__desc">
              向左滑动即可看到
            </view>
          </view>
        </view>
      </tn-swipe-action-item>
    </tn-swipe-action>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 滑动菜单
        options1: [{
          text: '置顶',
          style: {
            backgroundColor: '#FFA726'
          }
        }]
      }
    }
  }
</script>
```



### 设置多按钮

在`options`参数中添加多个对象就可配置多个菜单按钮。

```vue
<template>
  <view class="components-index-list">
    <tn-swipe-action>
      <tn-swipe-action-item :options="options2">
        <view class="swipe-action__item tn-flex tn-flex-direction-row tn-flex-col-top tn-flex-row-left">
          <view class="swipe-action__item__image">
            <image src="https://tnuiimage.tnkjapp.com/shop/card.jpg" mode="scaleToFill"></image>
          </view>
          <view class="swipe-action__item__info tn-flex tn-flex-direction-column tn-flex-col-top tn-flex-row-right">
            <view class="swipe-action__item__info__title">
              多菜单
            </view>
            <view class="swipe-action__item__info__desc">
              向左滑动即可看到
            </view>
          </view>
        </view>
      </tn-swipe-action-item>
    </tn-swipe-action>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 滑动菜单
        options2: [{
            text: '置顶',
            style: {
              backgroundColor: '#FFA726'
            }
          },
          {
            text: '删除',
            style: {
              backgroundColor: '#E83A30'
            }
          }
        ],
      }
    }
  }
</script>

```



### 自定义按钮样式

可以通过`options`参数的`style`属性来设置菜单按钮的样式。

```vue
<template>
  <view class="components-index-list">
    <tn-swipe-action>
      <tn-swipe-action-item :options="options4">
        <view class="swipe-action__item tn-flex tn-flex-direction-row tn-flex-col-top tn-flex-row-left">
          <view class="swipe-action__item__image">
            <image src="https://tnuiimage.tnkjapp.com/shop/card.jpg" mode="scaleToFill"></image>
          </view>
          <view class="swipe-action__item__info tn-flex tn-flex-direction-column tn-flex-col-top tn-flex-row-right">
            <view class="swipe-action__item__info__title">
              单图标菜单
            </view>
            <view class="swipe-action__item__info__desc">
              向左滑动即可看到
            </view>
          </view>
        </view>
      </tn-swipe-action-item>
    </tn-swipe-action>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 滑动菜单
        options4: [{
            icon: 'star',
            style: {
              backgroundColor: '#FFA726',
              width: '80rpx',
              height: '80rpx',
              margin: '0 12rpx',
              borderRadius: '100rpx'
            }
          },
          {
            icon: 'delete',
            style: {
              backgroundColor: '#E83A30',
              width: '80rpx',
              height: '80rpx',
              margin: '0 12rpx',
              borderRadius: '100rpx'
            }
          }
        ]
      }
    }
  }
</script>

```





### API

### SwipeAction Props

|  属性名   |         说明         |  类型   | 默认值 | 可选值 |
| :-------: | :------------------: | :-----: | :----: | :----: |
| autoClose | 自动关闭其他选项菜单 | Boolean |  true  | false  |



### SwipeAction Slots

|  名称   |         说明         |
| :-----: | :------------------: |
| default | 存放滑动菜单列表内容 |



### SwipeAction Event

none



### SwipeActionItem Props

|  属性名   |                     说明                     |      类型      | 默认值 | 可选值 |
| :-------: | :------------------------------------------: | :------------: | :----: | :----: |
|   show    |                 显示滑动菜单                 |    Boolean     | false  |  true  |
|   name    |     标识符，，如果是`v-for`可用`index`的     | String\|Number |   -    |   -    |
|  options  |   右侧滑动菜单选项，详细参数说明可以看上面   |     Array      |   -    |   -    |
| disabled  |                 禁用滑动菜单                 |    Boolean     | false  |  true  |
| autoClose |             自动关闭其他选项菜单             |    Boolean     |  true  | false  |
| threshold | 滑动距离的阈值，只有大于此值才认为是打开菜单 |     Number     |   20   |   -    |
| duration  |            动画过渡时间，单位`ms`            |     Number     |  300   |   -    |



### SwipeActionItem Slots

|  名称   |       说明       |
| :-----: | :--------------: |
| default | 存放要显示的内容 |



### SwipeActionItem Event

| 事件名称 | 说明                 | 回调参数                                                     |
| -------- | -------------------- | ------------------------------------------------------------ |
| click    | 菜单按钮被点击时触发 | index: 当前是第几个按钮被点击，name: `props`参数中的`name`属性 |

