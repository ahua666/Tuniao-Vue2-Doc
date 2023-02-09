## Radio 单选框 <to-api/>

<demo-model url="/componentsPage/radio/radio"></demo-model>

单选框组件一般用于只有一个选择的场景。



### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

- 该组件需要搭配`tn-radio-group`组件使用，以便用户进行操作时，获得当前单选框组的选中情况，当然，您也可以单独对某个`tn-radio`进行事件监听
- 通过`v-model`给`tn-radio-group`组件绑定一个变量，这个绑定的变量是双向的(初始值只能是待选选项的值)，也就是说，您可以无需监听`tn-radio`或者`tn-radio-group`组件的`change`事件，也能知道哪个 被勾选了。

**注意：** 由于`tn-radio`组件需要由`tn-radio-group`组件提供参数值，这些父子组件间通过Vue的"provide/inject"特性注入依赖， 所以您必须使用`tn-radio-group`包裹`tn-radio`组件才能正常使用。

```vue
<template>
  <view class="">
    <tn-radio-group v-model="value" @change="radioGroupChange">
      <tn-radio @change="radioChange" v-for="(item, index) in list" :key="index" :name="item.name"
        :disabled="item.disabled">
        {{item.name}}
      </tn-radio>
    </tn-radio-group>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            name: 'apple',
            disabled: false
          },
          {
            name: 'banner',
            disabled: false
          },
          {
            name: 'orange',
            disabled: false
          }
        ],
        // tn-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
        value: 'orange',
      }
    },
    methods: {
      // 选中某个单选框时，由radio时触发
      radioChange(e) {
        // console.log(e);
      },
      // 选中任一radio时，由radio-group触发
      radioGroupChange(e) {
        // console.log(e);
      }
    }
  }
</script>

```



### 自定义选框形状

通过设置`shape`为`square`或者`circle`，将选框设置为方形或者圆形。

```vue
<tn-radio-group v-model="value">
	<tn-radio shape="circle">圆形</tn-radio>
    <tn-radio shape="square">方形</tn-radio>
</tn-radio-group>
```



### 自定义选中颜色

这里设置的是`tn-radio`的选框的背景颜色，设置`activeColor`参数进行配置。

```vue
<tn-radio-group v-model="value">
	<tn-radio activeColor="#AAAAAA">图鸟科技</tn-radio>
</tn-radio-group>
```



### 文本是否可以点击

通过设置`disabledLabel`可以配置点击文本是否。

```vue
<tn-radio-group v-model="value">
	<tn-radio :disabledLabel="true">文本不可以点击</tn-radio>
</tn-radio-group>
```



### 禁用Radio

设置`disabled`为`true`，即可禁用某个组件，让用户无法点击，禁用分为两种状态，一是未勾选前禁用，这时只显示一个灰色的区域。二是已勾选后 再禁用，会有灰色的已勾选的图标，但此时依然是不可操作的。

```vue
<tn-radio-group v-model="value">
	<tn-radio :disabled="true">不可被选中</tn-radio>
</tn-radio-group>
```



### API

### Radio-group Props

|    属性名     |                        说明                         |  类型   | 默认值  | 可选值 |
| :-----------: | :-------------------------------------------------: | :-----: | :-----: | :----: |
|    v-model    | 用于双向绑定单选框被选中的值，值为`radio`对应的名称 | String  |    -    |   -    |
|   disabled    |                   禁用选择可选框                    | Boolean |  false  |  true  |
| disabledLabel |                禁止点击标签选择选项                 | Boolean |  false  |  true  |
|     shape     |                    可选框的形状                     | String  | circle  | square |
|  activeColor  |                选中后选框的背景颜色                 | String  | #01BEFF |   -    |
|     size      |             `radio`的整体大小，单位rpx              | Number  |   34    |   -    |
|     width     |                每个`radio`占用的宽度                | String  |  auto   |   -    |
|     wrap      |                   换行显示`radio`                   | Boolean |  false  |  true  |
|   iconSize    |                  图标大小，单位rpx                  | Number  |   20    |   -    |



### Radio-group Slots

|  名称   |        说明         |
| :-----: | :-----------------: |
| default | 用于存放`radio`组件 |



### Radio-group Event

| 事件名称 | 说明                          | 回调参数                               |
| -------- | ----------------------------- | -------------------------------------- |
| input    | `radio`选择状态发生改变时触发 | String:[元素为被选中的`radio`的`name`] |
| change   | 任意`radio`的状态发生改变触发 | String:[元素为被选中的`radio`的`name`] |



### Radio Props

**注意**：`tn-radio`和`tn-radio-group`二者同名参数中，`tn-radio`的参数优先级比较高。

|    属性名     |                             说明                             |      类型      | 默认值  | 可选值 |
| :-----------: | :----------------------------------------------------------: | :------------: | :-----: | :----: |
|    v-model    | 用于双向绑定单选框被选状态，如果将该变量设置为`true`，将会被选中 |    Boolean     |  false  |  true  |
|     name      |                     `radio`组件标识名称                      | String\|Number |    -    |   -    |
|   disabled    |                        禁用选择可选框                        |    Boolean     |  false  |  true  |
| disabledLabel |                     禁止点击标签选择选项                     |    Boolean     |  false  |  true  |
|     shape     |                         可选框的形状                         |     String     | circle  | square |
|  activeColor  |                     选中后选框的背景颜色                     |     String     | #01BEFF |   -    |
|     size      |                `checkbox`的整体大小，单位rpx                 |     Number     |   34    |   -    |
|   labelSize   |                 label标签的字体大小，单位rpx                 |     Number     |   30    |   -    |
|     wrap      |                      换行显示`checkbox`                      |    Boolean     |  false  |  true  |
|   iconName    |         选框中的图标名称，使用TuniaoUI内置的图标名称         |     String     | success |   -    |
|   iconSize    |                      图标大小，单位rpx                       |     Number     |   20    |   -    |



### Radio Slots

|  名称   |        说明        |
| :-----: | :----------------: |
| default | `radio`Label的名称 |



### Radio Event

| 事件名称 | 说明                          | 回调参数                               |
| -------- | ----------------------------- | -------------------------------------- |
| change   | 任意`radio`的状态发生改变触发 | String:[元素为被选中的`radio`的`name`] |
