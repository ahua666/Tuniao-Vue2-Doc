## Input 输入框 <to-api/>

<demo-model url="/componentsPage/input/input"></demo-model>

此组件为一个输入框，默认没有边框和样式，是专门为配合表单组件[tn-form](forms.md)而设计的，利用它可以快速实现表单验证，输入内容，下拉选择等功能。



### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |



### 基本使用

通过`v-model`来绑定输入框的值。

```vue
<template>
  <tn-input v-model="value" />
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>
```



### 输入框类型

`tn-input`通过配置`type`可以修改输入框的类型，输入框的类型有以下两种：

- textarea类型，用于输入长文本
- text类型，普通输入框，由于HTML5或者小程序等一些特殊场景，此 `type`参数又可以设置为`text`、`number`、`idcard`、`digit`等值， 这些参数跟各个平台的兼容性有关，详见uni-app文档：[Input 组件](https://uniapp.dcloud.io/component/input)。

#### Textarea模式

将`type`参数设置为`textarea`，有如下两个需要注意的参数：

- `autoHeight`参数可以配置为`textarea`输入框的高度是否随着行数增加，而自动增加输入框的高度。
- `height`参数可以配置输入框的初始高度。

```vue
<template>
	<tn-input v-model="value" :type="type" :border="border" :height="height" :autoHeight="autoHeight" />
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'textarea',
				border: true,
				height: 100,
				autoHeight: true,
			}
		}
	}
</script>
```

#### Text模式

将`type`设置为`text`，此种情况为一个单纯的输入框，但是还可以将其设置为`number`、`idcard`、`digit`等值，需要考虑兼容性，[见上方说明](#输入框类型)。

在**Text模式**下可以设置输入框右边显示图标，通过设置`showRightIcon`和`rightIcon`参数去设置右边显示的图标。

```vue
<template>
	<tn-input v-model="value" :type="type" :border="border" :showRightIcon="true" rightIcon="search" />
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'text',
				border: true
			}
		}
	}
</script>
```

#### Password模式

将`type`设置为`password`，此时输入的内容将会用点代替：

- 如果设置了passwordIcon为true，右侧将出现一个用户切换密码显示和普通字符显示的图标。

```vue
<template>
	<tn-input v-model="value" :type="type" :border="border" :passwordIcon="passwordIcon" />
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'password',
				passwordIcon: true,
				border: true,
			}
		}
	}
</script>
```

#### Select下拉选择模式

将`type`设置为`select`，此时组件将会在外观上呈现出Select选择器的形态，主要体现在右侧多了一个下三角图标，但是此时组件并没有内置下拉的功能， 主要是考虑到移动端的特殊性和TuniaoUI内置组件的关联性，因为想实现下拉选择，不同场景可能会使用不同的组件，比如TuniaoUI的[Picker 选择器](./picker.md)、 [ActionSheet 操作菜单](./actionsheet.md)、[Select 列选择器](./select.md)等，您可以根据情况自由选择合适的组件做搭配。

- 以上说的可以配合的组件，它们都有一个共同的通过`v-model`绑定弹出与收起的参数，可以同时将此参数赋值给`tn-input`组件的`selectOpen`参数， 当此参数为`true`(也即`Select`选择器打开时)，右侧的下三角图标会翻转，为`false`时，恢复原位。
- 监听组件的`@click`事件，在此将绑定选择器的参数修改为`true`即可。

```vue
<template>
	<view class="">
		<tn-input v-model="value" :type="type" :border="border" @click="show = true" />
		<tn-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></tn-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'select',
				show: false,
				border: true,
				actionSheetList: [
					{
						text: '男'
					},
					{
						text: '女'
					},
					{
						text: '保密'
					}
				],
			}
		},
		methods: {
			// 点击actionSheet回调
			actionSheetCallback(index) {
				this.value = this.actionSheetList[index].text;
			}
		}
	}
</script>
```



### API

### Props

|       属性名        |                   说明                    |       类型       |      默认值       |                 可选值                  |
|:----------------:|:---------------------------------------:|:--------------:|:--------------:|:------------------------------------:|
|     v-model      |               用于双向绑定输入框的值               | String\|Number |       -        |                  -                   |
|       type       |                 输入框的类型                  |     String     |      text      | textarea/password/<br/>select/number |
|    inputAlign    |                输入框文字对齐方式                |     String     |      left      |             center/right             |
|   placeholder    |              输入框为空时显示的提示信息              |     String     |       -        |                  -                   |
| placeholderStyle |             placeholder的样式              |     String     | color: #AAAAAA |                  -                   |
|     disabled     |                  禁用输入框                  |    Boolean     |     false      |                 true                 |
|    maxLength     |               输入框最大可输入的长度               |     Number     |      255       |                  -                   |
|      height      |                  输入框高度                  |     Number     |       0        |                  -                   |
|    autoHeight    |               根据内容自动调整高度                |    Boolean     |      true      |                false                 |
|   confirmType    |      键盘右下角按钮的文字，在`type`为`text`时生效       |     String     |      done      |                  -                   |
|   customStyle    |                自定义输入框样式                 |     Object     |       -        |                  -                   |
|      fixed       |                  固定输入框                  |    Boolean     |     false      |                 true                 |
|      focus       |                 自动聚焦输入框                 |    Boolean     |     false      |                 true                 |
|   passwordIcon   |    显示右侧显示密码图标，在`type`为`password`时生效     |    Boolean     |      true      |                false                 |
|      border      |    显示边框，在`type`为`text`、`textarea`时生效    |    Boolean     |     false      |                 true                 |
|   borderColor    |    边框颜色，在`type`为`text`、`textarea`时生效    |     String     |    #dcdfe6     |                  -                   |
|    selectOpen    | 旋转右侧图标，标记当前是否开打可选项，在`type`为`select`时生效  |    Boolean     |     false      |                 true                 |
|    clearable     |                 是否可以清空                  |    Boolean     |      true      |                false                 |
|  cursorSpacing   |             光标与键盘之间的距离，单位px             |     Number     |       0        |                  -                   |
|  selectionStart  |     光标起始位置，自动聚焦时生效，搭配selectionEnd使用     |     Number     |       -1       |                  -                   |
|   selectionEnd   |    光标结束位置，自动聚焦时生效，搭配selectionStart使用    |     Number     |       -1       |                  -                   |
|       trim       |                自定去除两端空格                 |    Boolean     |      true      |                false                 |
|  showConfirmBar  |               显示键盘上方的完成按钮               |    Boolean     |      true      |                false                 |
|  showRightIcon   |               显示输入框最右边的图标               |    Boolean     |     false      |                 true                 |
|    rightIcon     | 输入框最右边图标的名称，设置`showRightIcon`为`true`时有效 |     String     |       -        |                  -                   |



### Slots

none



### Event

| 事件名称    | 说明         | 回调参数   |
|---------|------------|--------|
| input   | 输入内容时触发    | 输入框中的值 |
| blur    | 输入框失去焦点时触发 | 输入框中的值 |
| focus   | 输入框聚焦时触发   | -      |
| confirm | 点击完成按钮时触发  | 输入框中的值 |
| click   | 输入框点击事件    | -      |

