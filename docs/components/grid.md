## Grid 宫格布局 <to-api/>

<demo-model url="/basicPage/grid-layout/grid-layout"></demo-model>


宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽标组件([badge](badge.md))，或者图标等，也可以扩展为左右滑动的轮播形式。

## Grid 宫格布局

通过基础的12分栏，简单便捷的实现布局。

::: tip 说明
宫格布局的外层盒子，结合组件`tn-grid-item`使用
:::

::: warning 注意
由于微信小程序的特殊性，在使用本组件的时候，需要设置`tn-grid-item`的`style`中的`width`属性
:::
::: danger 注意
如果你发现预览框是划不动的话，可以把你的鼠标放到 预览框 “对齐方式”这个标题上了再去滚动鼠标(手动狗头)
::: 
### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

设置`每行3列`，`居中显示`的布局。

```vue
<template>
    <tn-grid align="center" :col="col">
      <block v-for="(item, index) in 14" :key="index">
        <!-- H5 -->
        <!-- #ifndef MP-WEIXIN -->
        <tn-grid-item>
          <view style="padding: 30rpx;">{{ item }}</view>
        </tn-grid-item>
        <!-- #endif-->
        
        <!-- 微信小程序 -->
        <!-- #ifdef MP-WEIXIN -->
        <tn-grid-item :style="{width: gridItemWidth}">
          <view style="padding: 30rpx;">{{ item }}</view>
        </tn-grid-item>
        <!-- #endif-->
      </block>
    </tn-grid>
</template>

<script>
	export default {
        data() {
          col: 3
        },
        computed: {
          // 兼容小程序
          gridItemWidth() {
            return 100 / this.col + '%'
          }
        }
    }
</script>
```



### API

### Grid Props

|   属性名   |                             说明                             |      类型      |  默认值  |    可选值    |
| :--------: | :----------------------------------------------------------: | :------------: | :------: | :----------: |
|    col     |                    布局每一列放多少个元素                    | Number\|String |    3     |      -       |
|   align    | 对齐方式（兼容小程序，需要设置`tn-grid-item`的`style`中的`width`属性） |     String     |   left   | center/right |
| hoverClass |                     点击时的效果的class                      |     String     | tn-hover |      -       |



### Grid Slots

|  名称   |            说明            |
| :-----: | :------------------------: |
| default | 用户存放`tn-grid-item`组件 |



### Grid Event

none



### Grid-item Props

| 属性名 |     说明     |      类型      | 默认值 | 可选值 |
| :----: | :----------: | :------------: | :----: | :----: |
| index  | 当前组件序号 | Number\|String |   -    |   -    |



### Grid-item Slots

|  名称   |        说明        |
| :-----: | :----------------: |
| default | 用户自定义显示内容 |



### Grid-item Event

| 事件名称 |     说明     | 回调参数 |
| :------: | :----------: | :------: |
|  click   | 按钮点击事件 |  index   |
