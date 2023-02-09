## Collapse 折叠面板 <to-api/>

<demo-model url="/componentsPage/collapse/collapse"></demo-model>


通过折叠面板收纳内容区域
## Collapse 折叠面板



### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

折叠面板默认为手风琴模式，即打开一个其他会关闭，可以通过设置`accordion`设置为`false`关闭手风琴模式。

- 通过设置`tn-collapse-item`的`open`属性设置面板初始化时是否为打开。
- 通过设置`tn-collapse-item`的`disabled`属性设置面板是否允许操作，当前会保持上一次打开关闭状态。

展开后的内容是通过`slot`插槽传入的，我们可以在外层包裹一个`view`元素，然后即可给内容添加对应的样式。

```vue
<template>
  <tn-collapse>
    <tn-collapse-item v-for="(item, index) in list" :key="index" :title="item.title" :disabled="item.disabled">
      <view class="collapse-item-content">
        {{ item.content }}
      </view>
    </tn-collapse-item>
  </tn-collapse>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            title: '关雎',
            content: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。悠哉悠哉，辗转反侧。参差荇菜，左右采之。窈窕淑女，琴瑟友之。参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。',
            disabled: false
          },
          {
            title: '长歌行',
            content: '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？少壮不努力，老大徒伤悲！',
            disabled: false
          },
          {
            title: '秋风辞',
            content: '秋风起兮白云飞，草木黄落兮雁南归。兰有秀兮菊有芳，怀佳人兮不能忘。泛楼船兮济汾河，横中流兮扬素波。少壮几时兮奈老何！',
            disabled: false
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .collapse-item-content {
    word-wrap: break-word;
  }
</style>
```



### API

### Collapse Props

|   属性名   |                             说明                             |  类型   |  默认值  | 可选值 |
| :--------: | :----------------------------------------------------------: | :-----: | :------: | :----: |
| accordion  |                          手风琴模式                          | Boolean |   true   | false  |
| headStyle  |                    自定义`item`的头部样式                    | Object  |    -     |   -    |
| bodyStyle  |                     自定义item的主体样式                     | Object  |    -     |   -    |
| itemStyle  |                     自定义item的整个样式                     | Object  |    -     |   -    |
|   arrow    |                        显示右边的箭头                        | Boolean |   true   | false  |
| arrowColor |             箭头的颜色，当`arrow`为`true`时有效              | String  | #AAAAAA  |   -    |
| hoverClass | 点击时样式类名，按下时有效，样式必须写在根目录的`App.vue`或通过其引入的全局样式中才有效，`none`或者空为无效果，作用于头部标题区域 | String  | tn-hover |   -    |



### Collapse Slots

none



### Collapse Event

| 事件名称 | 说明                                                         | 回调参数                              |
| -------- | ------------------------------------------------------------ | ------------------------------------- |
| change   | 当前折叠面板展开时触发，(如果为手风琴模式，返回的参数为String，否则为Array) | activeNames: 当前激活标签的唯一标识名 |



### Collapse Method

| 方法 |                            说明                            |
| :--: | :--------------------------------------------------------: |
| init | 重新初始化内部内容的高度，当异步获取数据时可以使用当前函数 |



### CollapseItem Props

|   属性名    |                             说明                             |      类型      | 默认值 |    可选值    |
| :---------: | :----------------------------------------------------------: | :------------: | :----: | :----------: |
|    open     |                     初始化时是否打开面板                     |    Boolean     | false  |     true     |
|    name     |       面板唯一标识，如果没有填写则以当前`item`的索引值       | Number\|String |   -    |      -       |
|    title    |                          面板的标题                          |     String     |   -    |      -       |
|    align    |                      面板标题的对齐方式                      |     String     |  left  | center/right |
|  disabled   |                        面板不允许操作                        |    Boolean     | false  |     true     |
| activeStyle | 当`tn-collapse`的`arrow`属性为`false`时，自定义当前选中的`item`的样式 |     Object     |   -    |      -       |
|    index    |      `tn-collapse-item`标识，标记当前点击的是哪一个item      | String\|Number |   -    |      -       |



### CollapseItem Slots

|   名称    |               说明               |
| :-------: | :------------------------------: |
|  default  |            主体的内容            |
|   title   |  头部内容，不包含右边的箭头区域  |
| title-all | 整个头部内容，包含右边的箭头区域 |



### CollapseItem Event

| 事件名称 | 说明                       | 回调参数                                                     |
| -------- | -------------------------- | ------------------------------------------------------------ |
| change   | 折叠面板打开或者关闭时触发 | index: 传入的`index`属性，show: 当前面板打开关闭状态，true为打开，false为关闭 |
