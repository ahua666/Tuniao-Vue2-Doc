## Picker 选择器 <to-api/>

<demo-model url="/componentsPage/picker/picker"></demo-model>
该组件有四种弹出模式：

- 时间模式，可以配置年、月、日、时、分、秒
- 地区模式，可以配置省、市、区
- 单列模式（**后续版本会移除**）
- 多列模式（**后续版本会移除**）

::: warning 说明
不建议使用当前组件的单列和多列模式，如果需要使用可以使用[tn-select列选择器](select.md)。

以后当前组件会专注于时间和地区模式。

:::

### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |

### 基本使用

- 通过`v-model`绑定一个布尔值变量，用于控制组件的弹出与收起。
- 组件共有4种模式，通过配置`mode`参数实现，如下：

1. mode = selector，为单列选择模式。
2. mode = multiSelector，为多列选择模式。
3. mode = region，为地区模式。
4. mode=time，为时间模式。

### 时间和地区模式

1. #### 设置默认值

- 如果`mode`为`time`，可以通过`defaultTime`参数设置打开时的默认时间，格式如"2021-10-01 13:00:00"、"2021-10-01 13:00"。
- 如果`mode`为`region`，可以通过`defaultRegin`(Array格式)中文的省市区名称，如：`["广东省", "广州市", "天河区"]`，或者代号的
  省市区，如：`["44", "4401", "440106"]`。

**注意**：这些省市区的名称和代码，须是TuniaoUI的`tn-picker`组件自身提供的，否则可能无法匹配。

```vue

<template>
  <tn-picker mode="time" v-model="show"></tn-picker>

  <tn-picker mode="region" v-model="show" :areaCode='["44", "4401", "440106"]'></tn-picker>
</template>
```

#### 设置需要显示的参数

- 时间模式时：通过`params`参数传入一个对象给组件，给需要显示的参数属性置为`true`
  ，可选的参数有：`year`、`month`、`day`、`hour`、`minute`、`second`。 其中，`hour`、`minute`、`second`值默认为`false`
  ，其他值默认为`true`。
- 地区模式时：可选的参数有：`province`、`city`、`area`，默认都为`true`。

```vue

<template>
  <tn-picker mode="time" v-model="show" :params="params"></tn-picker>
</template>

<script>
  export default {
    data() {
      return {
        // 只显示年月日
        params: {
          year: true,
          month: true,
          day: true,
          hour: false,
          minute: false,
          second: false
        },
        show: false
      }
    }
  }
</script>
```

#### 回调函数

当点击`tn-picker`的"取消"或者"确定"按钮时，会分别产生回调事件`cancel`和`confirm`
，均为会返回组件内部的当前值。回调的参数为一个对象，属性和传递给`tn-picker`组件的`params`对象为`true`的属性一致。

**注意**：`mode`为`time`时，如果设置了取出`timestamp`的值，`timestamp`的单位为秒。`mode`为`region`
时，回调对象属性为一个对象，分别有`label`和`value`属性，见如下说明：

```js
// 组件内部parmas参数默认值：
let params = {
    year: true,
    month: true,
    day: true,
    hour: false,
    minute: false,
    second: false,
    province: true,
    city: true,
    area: true,
    timestamp: true
}

// 那么回调的参数可能如下：
{
    year:'2021', 
    month : '10',
    day:'01',
    timestamp:1633017600
}


// 如果params值如下(地区选择模式)：
let params = {
    province: true,
    city: true,
    area: true
}

// 那么回调的参数可能如下：
{
    area: {
        label: "天河区", value:"440106"
    },
    city: {
        label: "广州市", value:"4401"
    },
    province: {label: "广东省", value:"44"},
}
```

### 单列和多列模式

不建议使用当前组件的单列和多列模式，不排除将来会移除当前模式。推荐使用[tn-select](select.md)实现单列和多列。

#### 设置默认值

- 如果`mode`为`selector`(单列)，可以通过设置`defaultSelector`为单元素的数组，表示选中单列中的第几个(索引从0开始)，如: `[1]`
  表示选中单列的第二个。
- 如果`mode`为`multiSelector`(多列)，可以通过设置`defaultSelector`为多元素的数组(元素数量等于列数)
  ，分别表示选中每一列的第几个(索引从0开始)，如`[0, 1, 2]` 表示共有3列，分别选中第一列的第一个，第二列的第二个，第三列的第三个。

```vue

<template>
  <tn-picker mode="selector" v-model="show" :defaultSelector="[0]"></tn-picker>

  <tn-picker mode="multiSelector" v-model="show" :defaultSelector='[0, 1, 3]'></tn-picker>
</template>
```

#### 设置数据

由于单列和多列模式不像时间和地区模式，没有内置数据，故需要您手动传入可选值，通过`range`参数(数组)传入对应的数据，单列时为一维数组，多列时为二维数组。

如果您数组中的元素为对象的话，可以通过指定`rangeKey`参数，让组件内部知道您想把对象的哪个属性当做要显示的值。

```vue

<template>
  <view class="">
    <tn-picker mode="selector" v-model="show" :defaultSelector="[0]" :range="selector"></tn-picker>

    <tn-picker mode="selector" v-model="show" :defaultSelector="[0]" :range="selectorObj" rangeKey="name"></tn-picker>

    <tn-picker mode="multiSelector" v-model="show" :defaultSelector='[0, 1]' :range="multiSelector"></tn-picker>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        selector: [1, 2, 3],
        multiSelector: [
          [1, 2, 3],
          [4, 5, 6]
        ],
        // 这种情况需要指定rangeKey为name，否则组件不知道该显示对象的哪个属性
        selectorObj: [
          {
            name: 'A',
            id: 1
          },
          {
            name: 'B',
            id: 2
          }
        ]
      }
    }
  }
</script>
```

#### 回调参数

当点击`tn-picker`的"取消"或者"确定"按钮时，会分别产生回调事件`cancel`和`confirm`，均为会返回组件内部的当前值。回调的参数为一个数组，分别表示
当前各列选中的列索引值(从0开始)。

- 单列模式

回调参数可能为`[3]`，表示选中传入数组的第四个值(从0开始)

- 多列模式

回调参数可能为`[1, 0, 3]`，表示3列中，第一列选中了第二个值，第二列选中了第一个值，第三列选中了第四个值。

其中，我们使用多列模式，一般都需要联动选择，在多列模式下，有一个`columnchange`
事件，任意列改变都会触发该事件，回调参数为`{column: column, index: index}`， `column`表示第几列发生了变化(从0开始)，`index`
表示当前的下标值，如`{column: 1, index: 2}`表示第二列(从0开始)发生了变化，下标变成了`2`。

### API

### Props

|         属性名         |                                说明                                |       类型       |  默认值  |              可选值              |
|:-------------------:|:----------------------------------------------------------------:|:--------------:|:-----:|:-----------------------------:|
|       v-model       |                          用于控制选择器的弹出与收起                           |    Boolean     | false |             true              |
|        title        |                             弹出框顶部标题                              |     String     |   -   |               -               |
|       params        |                       需要显示的参数，在时间和地区模式下有效                        |     Object     |   -   |               -               |
|        mode         |                              选择器模式                               |     String     | time  | region/selector/multiSelector |
|        range        |                      自定义选择列的数据，在单列和多列的模式下有效                      |     Array      |   -   |               -               |
|   defaultSelector   |                      默认选择的列数据，在单列和多列的模式下有效                       |     Array      |   -   |               -               |
|      rangeKey       |        当`range`是一个`Array<Object>`时，指定Object中key的值作为显示的内容         |     String     |   -   |               -               |
|     showTimeTag     |                         显示时间单位，在时间模式下有效                          |    Boolean     | true  |             false             |
|      startYear      |                          开始年份，在时间模式下有效                           | String\|Number | 1950  |               -               |
|       endYear       |                          结束年份，在时间模式下有效                           | String\|Number | 2050  |               -               |
|     defaultTime     |                         默认显示的时间，在时间模式下有效                         |     String     |   -   |               -               |
|    defaultRegin     |                         默认显示的地区，在地区模式下有效                         |     Array      |   -   |               -               |
|      areaCode       |     默认显示的地区编码，如果与`defaultRegin`同时设置，优先使用`areaCode`，在地区模式下有效      |     Array      |   -   |               -               |
|     cancelText      |                             取消按钮的文字                              |     String     |  取消   |               -               |
|     cancelColor     |                             取消按钮的颜色                              |     String     |   -   |               -               |
|     confirmText     |                             确认按钮的文字                              |     String     |  确认   |               -               |
|    confirmColor     |                             确认按钮的颜色                              |     String     |   -   |               -               |
| safeAreaInsetBottom |                            开启底部安全区适配                             |    Boolean     | false |             true              |
|    maskCloseable    |                           点击遮罩层可关闭选择器                            |    Boolean     | true  |             false             |
|       zIndex        |                           弹窗的`zIndex`值                           |     Number     | 20075 |               -               |

### Slots

none

### Event

|     事件名称     |         说明         |               回调参数               |
|:------------:|:------------------:|:--------------------------------:|
|   confirm    |     点击确认按钮时触发      |     Object：用户选择的数据，详细见上方回调说明     |
|    cancel    |     点击取消按钮时触发      |     Object：用户选择的数据，详细见上方回调说明     |
| columnchange | 列发生改变时触发，只在多列模式下生效 | `{column: column, index: index}` |
