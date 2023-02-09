## ReadMore 查看更多<to-api/>

<demo-model url="/componentsPage/read-more/read-more"></demo-model>

该组件一般用于内容较长，预先收起一部分，点击展开全部内容的场景。

### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

内容通过`slot`传入。

由于部分的小程序平台的渲染能力问题，再解析比较耗费时间的内容时，会导致`tn-read-more`组件无法获取内容的高度，从而出现计算错误的情况，这时候我们需要手动的调用`tn-read-more`组件内部的`init`方法重新初始化。

```vue
<template>
  <tn-read-more ref="readMore">
    <rich-text :nodes="content"></rich-text>
  </tn-read-more>
</template>

<script>
  export default {
    data() {
      return {
        content: `噫吁嚱，危乎高哉！
                  蜀道之难，难于上青天！
                  蚕丛及鱼凫，开国何茫然！
                  尔来四万八千岁，不与秦塞通人烟。
                  西当太白有鸟道，可以横绝峨眉巅。
                  地崩山摧壮士死，然后天梯石栈相钩连。
                  上有六龙回日之高标，下有冲波逆折之回川。
                  黄鹤之飞尚不得过，猿猱欲度愁攀援。
                  青泥何盘盘，百步九折萦岩峦。
                  扪参历井仰胁息，以手抚膺坐长叹。

                  问君西游何时还？畏途巉岩不可攀。
                  但见悲鸟号古木，雄飞雌从绕林间。
                  又闻子规啼夜月，愁空山。
                  蜀道之难，难于上青天，使人听此凋朱颜！
                  连峰去天不盈尺，枯松倒挂倚绝壁。
                  飞湍瀑流争喧豗，砯崖转石万壑雷。
                  其险也如此，嗟尔远道之人胡为乎来哉！(也如此 一作：也若此)

                  剑阁峥嵘而崔嵬，一夫当关，万夫莫开。
                  所守或匪亲，化为狼与豺。
                  朝避猛虎，夕避长蛇，磨牙吮血，杀人如麻。
                  锦城虽云乐，不如早还家。
                  蜀道之难，难于上青天，侧身西望长咨嗟！`,

      }
    },
    onReady() {
      this.$nextTick(() => {
        this.$refs.readMore.init()
      })
    }

  }
</script>
```



### 设置收起时的高度

可以通过配置`showHeight`属性来设置组件收起来时默认高度，只有传入内容的高度比这个高度高才会显示`openText`属性的值。

```vue
<tn-read-more :showHeight="600">
  <rich-text :nodes="content"></rich-text>
</tn-read-more>
```



### 自定义样式

组件可以通过配置来修改提示文字和图标的信息、底部阴影的样式。

- 通过设置`openText`、`closeText`、`openIcon`、`closeIcon`来配置收起和关闭时的提示文字和图标，图标如果为空值则不显示。
- 在收起时组件在底部有一个默认的白色虚化阴影，如果需要修改当前阴影可以设置`shadowStyle`属性，默认值如下：

```css
{
  backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
  paddingTop: "300rpx",
  marginTop: "-300rpx"
}
```



```vue
<tn-read-more :showHeight="600" openText="付费后解锁剩余内容" openIcon="money">
  <rich-text :nodes="content"></rich-text>
</tn-read-more>
```



### API

### Props

|   属性名    |                             说明                             |      类型      |    默认值    |                        可选值                         |
| :---------: | :----------------------------------------------------------: | :------------: | :----------: | :---------------------------------------------------: |
| showHeight  | 内容显示的默认高度，待显示的内容只有超过这个高度才会显示全文按钮，单位rpx |     Number     |     400      |                           -                           |
|  fontColor  |                           字体颜色                           |     String     |   #01BEFF    | 颜色的十六进制值，rgba(),rgb(),TuniaoUI内置的颜色类名 |
|  fontSize   |                           字体大小                           |     Number     |      28      |                           -                           |
|  fontUnit   |                        字体大小的单位                        |     String     |     rpx      |                           -                           |
|  closeBtn   |                      显示收起(关闭)按钮                      |    Boolean     |    false     |                         true                          |
|  openText   |                       展开文本提示文字                       |     String     | 展开阅读全文 |                           -                           |
|  closeText  |                      收起(关闭)提示文字                      |     String     |     收起     |                           -                           |
|  openIcon   |         展开文本显示的图标，使用TuniaoUI内置的图标库         |     String     |     down     |                           -                           |
|  closeIcon  |        收起(关闭)显示的图标，使用TuniaoUI内置的图标库        |     String     |      up      |                           -                           |
| shadowStyle |                   收起文本时底部的阴影样式                   |     Object     |  见上方说明  |                           -                           |
|    index    |               组件标识，用于标记多个组件下点击               | String\|Number |      -       |                           -                           |



### Slots

|  名称   |     说明     |
| :-----: | :----------: |
| default | 待展开的内容 |



### Event

| 事件名称 | 说明           | 回调参数            |
| -------- | -------------- | ------------------- |
| open     | 内容展开时触发 | index: 组件唯一标识 |
| closed   | 内容收起时触发 | index: 组件唯一标识 |



### Method

| 名称 |                             说明                             |
| :--: | :----------------------------------------------------------: |
| init | 重新初始化内部内容的高度，用于异步修改了内容（内容需要耗费时间解析的情况） |

