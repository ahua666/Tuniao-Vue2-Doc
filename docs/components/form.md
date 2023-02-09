## Form 表单 <to-api/>

此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。

<demo-model url="/componentsPage/form/form"></demo-model>


### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

此组件一般是用于表单验证使用，每一个表单域由一个`tn-form-item`组成，表单域中可以放置`tn-input`、`tn-checkbox`、`tn-radio`、`tn-switch`等。

在表单组件中，通过`model`参数绑定一个对象，这个对象的属性为各个`tn-form-item`内组件的对应变量。

由于表单验证和绑定表单规则时，需要通过`ref`操作，故这里需要给`tn-form`组件声明`ref="form"`属性。

下方为一个经典表单的示例，包含`tn-input`、`tn-radio`、`tn-checkbox`、`tn-switch`的组合使用：

```vue
<template>
  <tn-form :model="form" ref="uForm" :errorType="['message']">
    <tn-form-item label="姓名" prop="name">
      <tn-input v-model="form.name" />
    </tn-form-item>
    <tn-form-item label="简介" prop="intro">
      <tn-input v-model="form.intro" />
    </tn-form-item>
    <tn-form-item label="性别" prop="sex">
      <tn-input v-model="form.sex" type="select" />
    </tn-form-item>
    <tn-form-item label="爱好" prop="hobby">
      <tn-checkbox-group v-model="form.hobby">
        <tn-checkbox v-model="item.checked" v-for="(item, index) in checkboxList" :key="index" :name="item.name">
          {{ item.name }}
        </tn-checkbox>
      </tn-checkbox-group>
    </tn-form-item>
    <tn-form-item label="学历" prop="radio">
      <tn-radio-group v-model="form.radio">
        <tn-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
          {{ item.name }}
        </tn-radio>
      </tn-radio-group>
    </tn-form-item>
    <tn-form-item label="保密" prop="security">
      <tn-switch slot="right" v-model="form.security"></tn-switch>
    </tn-form-item>
  </tn-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          intro: '',
          sex: '',
          hobby: [],
          radio: '',
          security: false
        },
        checkboxList: [{
            name: '编程',
            checked: false,
            disabled: false
          },
          {
            name: '羽毛球',
            checked: false,
            disabled: false
          },
          {
            name: '篮球',
            checked: false,
            disabled: false
          }
        ],
        radioList: [{
            name: '小学',
            disabled: false
          },
          {
            name: '大学',
            disabled: false
          }
        ]
      }
    }
  }
</script>

```



### Form-item组件说明

此组件一般需要搭配`tn-form`组件使用，也可以单独搭配`tn-input`等组件使用，由于此组件参数较多，这里只对其中参数最简要介绍，其余请见底部的API说明：

- `prop`为传入`tn-form`组件的`model`中的属性字段，如果需要表单验证，此属性是必填的。

- `labelPosition`可以配置左侧"label"的对齐方式，可选为`left`和`top`。

- `borderBottom`是否显示表单域的下划线，如果给`tn-input`组件配置了边框，可以将此属性设置为`false`，从而隐藏默认的下划线。

- 如果想在表单域配置左右的图标，可以通过`leftIcon`和`rightIcon`参数实现。



### Form表单验证

TuniaoUI的表单验证具备完整的验证功能，在开始之前，需要了解如下几个注意事项，可以让你事半功倍：

#### `tn-form`组件绑定`model`参数

- `model`参数为一个对象，对象属性为需要验证的变量名。

- 通过`ref`，在`onReady`生命周期调用组件的`setRules`方法绑定验证规则，无法通过`props`传递变量，是因为`微信小程序`会过滤掉对象中的方法，导致自定义验证规则无效。

#### `tn-form-item`绑定`label`和`prop`

此组件最大的作用是与`tn-form`和`tn-input`等组件进行交互，在表单验证时，需要绑定`prop`参数，此参数为`tn-form`组件的`model`对象中的属性名， 目的是在验证时，通过这个`prop`属性名将父组件`tn-form`的`model`和`rules`规则关联起来。

注意点：

- 通过`prop`绑定对应的属性名，这里是字符串，而不是一个变量。
- 通过`lable`参数设置左边显示的提示文字，另外通过`labelPosition`可以配置`label`在左边还是上方。

#### 验证规则

组件验证部分采用了[async-validator](https://github.com/yiminghe/async-validator)，一个字段可以设置多个内置规则，以及自定义规则，触发方式等， 每个字段的验证规则为一个数组，数组的每一个元素对象为其中一条规则(一个字段的验证可以配置多个规则)。

```vue
<template>
  <tn-form :model="form" ref="uForm">
    <tn-form-item label="姓名" prop="name">
      <tn-input v-model="form.name" />
    </tn-form-item>
    <tn-form-item label="简介" prop="intro">
      <tn-input v-model="form.intro" />
    </tn-form-item>
    <tn-form-item label="性别" prop="sex">
      <tn-input v-model="form.sex" type="select" />
    </tn-form-item>
  </tn-form>
  <tn-button @click="submit">提交</tn-button>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          intro: '',
          sex: ''
        },
        rules: {
          name: [{
            required: true,
            message: '请输入姓名',
            // 可以单个或者同时写两个触发验证方式 
            trigger: ['change', 'blur'],
          }],
          intro: [{
            min: 5,
            message: '简介不能少于5个字',
            trigger: 'change'
          }]
        }
      }
    },
    // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
    onReady() {
      this.$refs.form.setRules(this.rules);
    },
    methods: {
      submit() {
        this.$refs.form.validate(valid => {
          if (valid) {
            console.log('验证通过');
          } else {
            console.log('验证失败');
          }
        });
      }
    }
  }
</script>
```

从上面的示例我们可以看到，`rules`中的属性名和`tn-form`的属性名是一致的，同时传递给`tn-form-item`的`prop`参数绑定的也是相同的属性名，注意这里`prop`参数绑定的是 字符串(属性名)，而不是一个变量。

#### 规则验证属性

每一个验证规则中，可以配置多个属性，下面对常用的属性进行讲解，更具体的可以查看[async-validator](https://github.com/yiminghe/async-validator)的文档说明：

- `trigger`{String | Array}：触发校验的方式有2种：
	- change：字段值发生变化时校验
	- blur：输入框失去焦点时触发
	- 如果同时监听两种方式，需要写成数组形式：`['change', 'blur']`
- `type`{String}
  内置校验规则，如这些规则无法满足需求，可以使用正则匹配、或者使用`validator`自定义方法并结合TuniaoUI自带验证规则。
	- string：必须是 `string` 类型，默认类型
	- number：必须是 `number` 类型
	- boolean：必须是 `boolean` 类型
	- method：必须是 `function` 类型
	- regexp：必须是 `regexp` 类型，这里的正则，指的是判断字段的内容是否一个正则表达式，而不是用这个正则去匹配字段值
	- integer：必须是`整数`类型
	- float：必须是`浮点数`类型
	- array：必须是 `array` 类型
	- object：必须是 `object` 类型
	- enum：必须出现在 `enmu` 指定的值中
	- date：必须是 `date` 类型
	- url：必须是 `url` 类型
	- hex：必须是 `16` 进制类型
	- email：必须是 `email` 类型
	- any：任意类型
- `required`
  布尔值，是否必填，配置此参数不会显示输入框左边的必填星号，如需要，请配置`tn-form-item`的`required`为`true`
- `pattern`
  要求此参数值为一个正则表达式，如： /\d+/，**不能**带引号，如："/\d+/"，组件会对字段进行正则判断，返回结果。
- `min`
  最小值，如果字段类型为字符串和数组，会取字符串长度与数组长度(length)与`min`比较，如果字段是数值，则直接与`min`比较。
- `max`
  最大值，规则同`min`参数
- `len`
  指定长度，规则同`min`，优先级高于`min`和`max`
- `enum`{Array} 指定的值，配合 type: 'enum' 使用
- `whitespace`{Boolean}
  如果字段值内容都为空格，默认无法通过`required: true`校验，如果要允许通过，需要将此参数设置为`true`
- `transform`{Function}，校验前对值进行转换，函数的参数为当前值，返回值为改变后的值，参数如如下：
	- `value`：当前校验字段的值
- `message`
  校验不通过时的提示信息
- `validator`{Function}：自定义**同步**校验函数，参数如下：
	- `rule`：当前校验字段在 rules 中所对应的校验规则
	- `value`：当前校验字段的值
	- `callback`：校验完成时的回调，一般无需执行callback，返回`true`(校验通过)或者`false`(校验失败)即可
- `asyncValidator`{Function}：自定义**异步**校验函数，参数如下：
	- `rule`：当前校验字段在 rules 中所对应的校验规则
	- `value`：当前校验字段的值
	- `callback`：校验完成时的回调，执行完异步操作(比如向后端请求数据验证)，如果不通过，需要callback(new Error('提示错误信息'))，如果校验通过，执行callback()即可

#### 使用TuniaoUI内置的验证规则

TuniaoUI中有大量内置的验证规则，这些规则对表单验证来说，属于**自定义规则**，故需要用到上方规则属性的 `validator`自定义验证函数，这里做一个详细说明。

```js
rules: {
	// 字段名称
	mobile: [
		{
			required: true, 
			message: '请输入手机号',
			trigger: ['change','blur'],
		},
		{
			// 自定义验证函数，见上说明
			validator: (rule, value, callback) => {
				// 上面有说，返回true表示校验通过，返回false表示不通过
				// this.$tn.test.mobile()就是返回true或者false的
				return this.$tn.test.mobile(value);
			},
			message: '手机号码不正确',
			// 触发器可以同时用blur和change
			trigger: ['change','blur'],
		}
	]
}
```

#### 验证规则示例

```js
rules: {
	name: [
		// 必填规则
		{
			required: true,
			message: '此为必填字段'，
			// blur和change事件触发检验
			trigger: ['blur', 'change'],
		},
		// 正则判断为字母或数字
		{
			pattern: /^[0-9a-zA-Z]*$/g,
			// 正则检验前先将值转为字符串
			transform(value) {
				return String(value);
			},
			message: '只能包含字母或数字'
		},
		// 6-8个字符之间的判断
		{
			min: 6,
			max: 8,
			message: '长度在6-8个字符之间'
		},
		// 自定义规则判断是否包含字母"A"
		{
			validator: (rule, value, callback) => {
				return this.$tn.test.contains(value, "A");
			},
			message: '必须包含字母"A"'
		},
		// 校验用户是否已存在
		{
			asyncValidator: (rule, value, callback) => {
				setTimeout(() => {
          if (value === '图鸟') {
            callback(new Error('姓名重复'))
          } else {
            // 如果校验通过，也要执行callback()回调
            callback();
          }
        }, 1000)
			},
			// 如果是异步校验，无需写message属性，错误的信息通过Error抛出即可
			// message: 'xxx'
		}
	]
}
```

#### 错误提示方式

`tn-form`提供了多种验证的错误方式，这些值需要包含在数组中（可以填写多个值，同时进行多种提示），通过设置errorType参数进行配置。

- `message`：默认为输入框下方用文字进行提示
- `none`：只要包含此值，将不会进行任何提示
- `border-bottom`：配置作用域底部的下划线显示为红色
- `border`：配置输入框的边框为红色进行提示 -- 如果有配置显示`tn-input`组件显示边框的话
- `toast`：以"toast"提示的方式弹出错误信息，每次只弹出最前面的那个表单域的错误信息

#### 校验

通过ref调用`tn-form`组件的`validate`方法，该方法回调函数的参数为一个`Boolean`类型的值，验证通过为true，否则反之。



### API

### Form Props

|    属性名     |           说明           |  类型   |       默认值        |                 可选值                 |
| :-----------: | :----------------------: | :-----: | :-----------------: | :------------------------------------: |
|     model     |       表单数据对象       | Object  |          -          |                   -                    |
|   errorType   |      错误的提示方式      |  Array  | ['message','toast'] | message/none/border/border-bottom/none |
| borderBottom  |    显示表单域的下边框    | Boolean |        true         |                 false                  |
| labelPosition |     label标签的位置      | String  |        left         |                  top                   |
|  labelWidth   | label标签的宽度，单位rpx | Number  |         90          |                   -                    |
|  labelAlign   |   label标签的对齐方式    | String  |        left         |              center/right              |
|  labelStyle   |    自定义label的样式     | Object  |          -          |                   -                    |



### Form Slots

|  名称   |            说明            |
| :-----: | :------------------------: |
| default | 存放`tn-form-item`组件内容 |



### Form Event

none



### Form Methods

需要通过`ref`手动调用

|    名称     |                       说明                       |                 参数                  |
| :---------: | :----------------------------------------------: | :-----------------------------------: |
|  setRules   |                   设置校验规则                   |            Function(rules)            |
| resetFields | 对表单进行重置，将字段重置为初始值并移除校验结果 |                   -                   |
|  validate   |                  对表单进行校验                  | Function(callback: Function(boolean)) |



### Form-item Props

|      参数      |                             说明                             |  类型   | 默认值 |      可选值       |
| :------------: | :----------------------------------------------------------: | :-----: | :----: | :---------------: |
|     label      |                         左侧提示文字                         | String  |   -    |         -         |
|      prop      | 表单域`model`对象属性名，在`validate`、`resetFields`方法情况下，该属性为必填 | String  |   -    |         -         |
|    required     |       是否显示左边的'*'号，仅起到显示作用，不参与验证        | Boolean | false  |       true        |
|  borderBottom  | 显示下边框，如果不需要下边框需要设置`tn-form`的`borderBottom`为`false` | Boolean |  true  |       false       |
| labelPosition  |      label标签的位置，会覆盖`tn-form`的同名参数设置的值      | String  |   -    |     left/top      |
|   labelWidth   | label标签的宽度，单位rpx，会覆盖`tn-form`的同名参数设置的值  | Number  |   0    |         -         |
|   labelAlign   |    label标签的对齐方式，会覆盖`tn-form`的同名参数设置的值    | String  |   -    | left/center/right |
|   labelStyle   |     自定义label的样式，会覆盖`tn-form`的同名参数设置的值     | Object  |   -    |         -         |
|    leftIcon    |           左侧自定义图标名称（TuniaoUI内置的图标）           | String  |   -    |         -         |
| leftIconStyle  |                     左侧自定义图标的样式                     | Object  |   -    |         -         |
|   rightIcon    |           右侧自定义图标名称（TuniaoUI内置的图标）           | String  |   -    |         -         |
| rightIconStyle |                     右侧自定义图标的样式                     | Object  |   -    |         -         |

### Form-item Slots

|  名称   |        说明        |
| :-----: | :----------------: |
| default | 存放用户自定义内容 |
|  right  |   右侧自定义内容   |



### Form-item Event

none
