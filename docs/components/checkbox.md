## Checkbox 复选框 <to-api/>

<demo-model url="/componentsPage/check-box/check-box"></demo-model>


复选框组件一般用于需要多个选择的场景。该组件功能完整，使用方便。



### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

该组件无需强制搭配`tn-checkbox-group`组件使用(视情况而定)，可以单个独立使用`tn-checkbox`组件。

复选框设置对应值的方式有两种：

- 通过`v-model`给`tn-checkbox`绑定一个变量，这个绑定的变量是双向的(初始值只能是`true`或者`false`)。
- 通过`v-model`给`tn-checkbox-group`绑定一个数组，该数组的变量时双向的(数组中的值是被选中选项的名称)。

```vue
<template>
  <view class="">
    <tn-checkbox-group @change="checkboxGroupChange">
      <tn-checkbox @change="checkboxChange" v-model="item.checked" v-for="(item, index) in list" :key="index"
        :name="item.name">{{item.name}}</tn-checkbox>
    </tn-checkbox-group>
    <tn-checkbox-group v-model="defaultCheckValue" @change="checkboxGroupChange">
      <tn-checkbox @change="checkboxChange" v-for="(item, index) in list" :key="index"
        :name="item.name">{{item.name}}</tn-checkbox>
    </tn-checkbox-group>
    <tn-button @click="checkedAll">全选</tn-button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            name: 'apple',
            checked: true,
            disabled: false
          },
          {
            name: 'banner',
            checked: false,
            disabled: false
          },
          {
            name: 'orange',
            checked: true,
            disabled: false
          }
        ],
        defaultCheckValue: ['apple','orange']
      }
    },
    methods: {
      // 选中某个复选框时，由checkbox时触发
      checkboxChange(e) {
        //console.log(e);
      },
      // 选中任一checkbox时，由checkbox-group触发
      checkboxGroupChange(e) {
        // console.log(e);
      },
      // 全选
      checkedAll() {
        this.list.map(val => {
          val.checked = true
        })
        this.defaultCheckValue = this.list.map(val => {
          return val.name
        })
      }
    }
  };
</script>

```



### 自定义选框形状

通过设置`shape`为`square`或者`circle`，将复选框设置为方形或者圆形。

```vue
<tn-checkbox-group>
	<tn-checkbox v-model="checked" shape="circle">圆形</tn-checkbox>
    <tn-checkbox v-model="checked" shape="square">方形</tn-checkbox>
</tn-checkbox-group>
```



### 自定义选中颜色

这里设置的是`tn-checkbox`的选框的背景颜色，设置`activeColor`参数进行配置。

```vue
<tn-checkbox-group>
	<tn-checkbox v-model="checked" activeColor="#AAAAAA">图鸟科技</tn-checkbox>
</tn-checkbox-group>
```



### 文本是否可以点击

通过设置`disabledLabel`可以配置点击文本是否。

```vue
<tn-checkbox-group>
	<tn-checkbox v-model="checked" :disabledLabel="true">文本不可以点击</tn-checkbox>
</tn-checkbox-group>
```



### 禁用Checkbox

设置`disabled`为`true`，即可禁用某个组件，让用户无法点击，禁用分为两种状态，一是未勾选前禁用，这时只显示一个灰色的区域。二是已勾选后 再禁用，会有灰色的已勾选的图标，但此时依然是不可操作的。

```vue
<tn-checkbox-group>
	<tn-checkbox v-model="checked" :disabled="true">不可被选中</tn-checkbox>
</tn-checkbox-group>
```



### API

### Checkbox-group Props

|    属性名     |                             说明                             |  类型   | 默认值  | 可选值 |
| :-----------: | :----------------------------------------------------------: | :-----: | :-----: | :----: |
|    v-model    | 用于双向绑定复选框被选中的值，数组中的值为`checkbox`对应的名称 |  Array  |    -    |   -    |
|      max      |                 最多允许选中的`checkbox`数量                 | Number  |   999   |   -    |
|     name      |                      表单提交时的标识符                      | String  |    -    |   -    |
|   disabled    |                        禁用选择可选框                        | Boolean |  false  |  true  |
| disabledLabel |                     禁止点击标签选择选项                     | Boolean |  false  |  true  |
|     shape     |                         可选框的形状                         | String  | square  | circle |
|  activeColor  |                     选中后选框的背景颜色                     | String  | #01BEFF |   -    |
|     size      |                `checkbox`的整体大小，单位rpx                 | Number  |   34    |   -    |
|     width     |                   每个`checkbox`占用的宽度                   | String  |  auto   |   -    |
|     wrap      |                      换行显示`checkbox`                      | Boolean |  false  |  true  |
|   iconSize    |                      图标大小，单位rpx                       | Number  |   20    |   -    |



### Checkbox-group Slots

|  名称   |          说明          |
| :-----: | :--------------------: |
| default | 用于存放`checkbox`组件 |



### Checkbox-group Event

| 事件名称 | 说明                             | 回调参数                                 |
| -------- | -------------------------------- | ---------------------------------------- |
| input    | `checkbox`选择状态发生改变时触发 | Array:[元素为被选中的`checkbox`的`name`] |
| change   | 任意`checkbox`的状态发生改变触发 | Array:[元素为被选中的`checkbox`的`name`] |



### Checkbox Props

**注意**：`tn-checkbox`和`tn-checkbox-group`二者同名参数中，`tn-checkbox`的参数优先级比较高。

|    属性名     |                             说明                             |      类型      | 默认值  | 可选值 |
| :-----------: | :----------------------------------------------------------: | :------------: | :-----: | :----: |
|    v-model    | 用于双向绑定复选框被选状态，如果将该变量设置为`true`，将会被选中 |    Boolean     |  false  |  true  |
|     name      |                    `checkbox`组件标识名称                    | String\|Number |    -    |   -    |
|   disabled    |                        禁用选择可选框                        |    Boolean     |  false  |  true  |
| disabledLabel |                     禁止点击标签选择选项                     |    Boolean     |  false  |  true  |
|     shape     |                         可选框的形状                         |     String     | square  | circle |
|  activeColor  |                     选中后选框的背景颜色                     |     String     | #01BEFF |   -    |
|     size      |                `checkbox`的整体大小，单位rpx                 |     Number     |   34    |   -    |
|   labelSize   |                 label标签的字体大小，单位rpx                 |     Number     |   30    |   -    |
|     wrap      |                      换行显示`checkbox`                      |    Boolean     |  false  |  true  |
|   iconName    |         选框中的图标名称，使用TuniaoUI内置的图标名称         |     String     | success |   -    |
|   iconSize    |                      图标大小，单位rpx                       |     Number     |   20    |   -    |



### Checkbox Slots

|  名称   |         说明          |
| :-----: | :-------------------: |
| default | `checkbox`Label的名称 |



### Checkbox Event

| 事件名称 | 说明                             | 回调参数                                                     |
| -------- | -------------------------------- | ------------------------------------------------------------ |
| change   | 任意`checkbox`的状态发生改变触发 | Object: {value: [true或者false，true为被选中，否则反之], name: [通过props传递的`name`参数] } |
