## Swiper 轮播图 <to-api/>

<demo-model url="/componentsPage/swiper/swiper"></demo-model>

该组件一般用于导航轮播，广告展示等场景,可开箱即用，具有如下特点：
- 自定义指示器模式，可配置指示器样式
- 3D轮播图效果，满足不同的开发需求
- 可配置显示标题，涵盖不同的应用场景

### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

通过`list`参数传入轮播图列表值，该值为一个数组，元素为对象，也可以是图片路径字符串，见如下：

- `list`的`name`参数对应的值为属性轮播图的图片路径
- `list`的`titleName`参数对应的值为属性为需要显示的标题，需要显示标题需要将`title`设置为true

```vue
<template>
  <tn-swiper :list="list"></tn-swiper>
</template>

<script>
  export default {
    data() {
      list: [
        {image: 'xxx.jpg', title: 'xxx'},
        {image: 'xxx.jpg', title: 'xxx'},
      ]
    }
  }
</script>
```



### 设置指示器类型

通过配置`mode`参数即可，有如下：

- `rect`-指示器为方块状
- `dot`-指示器为圆点
- `number`-指示器为数字
- `round`-激活的指示器为块状，未激活的未点状，为默认值
- `none`或者为空-不显示指示器

通过`indicatorPosition`参数配置指示器的位置，有如下值：

- `topLeft`-指示器位于左上角
- `topCenter`-指示器位于上方中间位置
- `topRight`-指示器位于右上角
- `bottomLeft`-指示器位于左下角
- `bottomCenter`-指示器位于底部中间位置，为默认值
- `bottomRight`-指示器位于右下角

```vue
<tn-swiper :list="list" mode="rect" indicatorPosition="bottomLeft"></tn-swiper>
```



### 设置3D轮播效果

配置`effect3d`为`true`即可，此时左右两边以缩略形式预览前后一个swiper-item的一部分。

```vue
<tn-swiper :list="list" :effect3d="true"></tn-swiper>
```



### API

### Props

|         属性名          |                             说明                             |  类型   |    默认值    |                        可选值                         |
| :---------------------: | :----------------------------------------------------------: | :-----: | :----------: | :---------------------------------------------------: |
|          list           |                          轮播图数据                          |  Array  |      -       |                           -                           |
|         current         |                 初始化时默认显示第几张轮播图                 | Number  |      0       |                           -                           |
|         height          |                   轮播图的高度，单位`rpx`                    | Number  |     250      |                           -                           |
|     backgroundColor     |                           背景颜色                           | String  | transparent  | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|          name           |                    轮播数据中图片的属性名                    | String  |    image     |                           -                           |
|          title          |                           显示标题                           | Boolean |    false     |                         true                          |
|        titleName        |                   轮播图数据中标题的属性名                   | String  |    title     |                           -                           |
|       titleStyle        |                        自定义标题样式                        | Object  |      -       |                           -                           |
|         radius          |                     圆角的值，单位`rpx`                      | Number  |      8       |                           -                           |
|          mode           |                       指示器的显示模式                       | String  |    round     |                 rect/dot/number/none                  |
|    indicatorPosition    |                         指示器的位置                         | String  | bottomCenter |   topLeft/topCenter/topRight/bottomLeft/bottomRight   |
|        effect3d         |                          显示3D模式                          | Boolean |    false     |                         true                          |
| effect3dPreviousSpacing | 当`effect3d`为`true`时有效，激活项与前后项之间的距离，单位`rpx` | Number  |      50      |                           -                           |
|        autoplay         |                           自动播放                           | Boolean |     true     |                         false                         |
|        interval         |                   自动轮播时间间隔，单位ms                   | Number  |     3000     |                           -                           |
|        duration         |                      切换选项之间的时间                      | Number  |     500      |                           -                           |
|        circular         |                         是否衔接播放                         | Boolean |     true     |                         false                         |
|        imageMode        | 图片裁剪模式，详细参数见[uni-app图片裁剪参数](https://uniapp.dcloud.io/component/image) | String  |  aspectFill  |                           -                           |



### Slots

| 名称 | 说明 |
| :--: | :--: |



### Event

| 事件名称 | 说明               | 回调参数                          |
| -------- | ------------------ | --------------------------------- |
| click    | 点击轮播内容时触发 | index: 返回当前点击轮播项的序号   |
| change   | 轮播内容切换时触发 | current: 当前切换到的轮播项的序号 |

