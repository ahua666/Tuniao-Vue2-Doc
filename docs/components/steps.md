## Steps 步骤条 <to-api/>

<demo-model url="/componentsPage/steps/steps"></demo-model>

该组件一般用于完成一个任务要分几个步骤，标识目前处于第几步的场景。


### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

- 通过`list`参数传入一个数组，标识步骤的总数。
- 在`list`数组中`name`属性设置步骤条对应步骤的名称，`icon`属性设置步骤条对应步骤的图标，`selectIcon`设置步骤条对应步骤显示的图标(在`mode`为`icon`和`dotIcon`模式下生效)。
- 通过`current`参数标识目前处于第几步，从0开始，传入1为第一步。

```vue
<template>
  <tn-steps :list="list"></tn-steps>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            name: '第一步'
          },
          {
            name: '第二步',
            icon: 'trusty',
            selectIcon: 'trusty-fill'
          },
          {
            name: '第三步',
            icon: 'safe',
            selectIcon: 'safe-fill'
          },
          {
            name: '第四步',
            icon: 'vip',
            selectIcon: 'vip-fill'
          }
        ]
      }
    }

  }
</script>
```



### 设置步骤条模式

该组件一共提供了4中步骤条模式，通过`mode`属性修改步骤条的模式：

- `dot`：点模式，在该模式下步骤条显示为一个点。
- `number`：数值模式，在该模式下步骤条会显示当前步骤的数字并在已完成的步骤显示自定义的图标。
- `icon`：图标模式，在该模式下步骤条会显示配置的图标。
- `dotIcon`：点图标模式，在该模式下步骤条在未完成的步骤显示为一个点，已完成的步骤显示为设置好的图标。

```vue
<tn-steps mode="number"></tn-steps>
```



### 设置自定义图标

该组件提供了两种方式供用户设置步骤条上的图标：

- 设置`icon`参数。
- 设置list数组中的`icon`和`selectIcon`(`mode`为`icon`和`dotIcon`下生效)属性，这中方式设置的图标优先级比设置`icon`参数高。

```vue
<template>
  <tn-steps :list="list" icon="error"></tn-steps>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            name: '第一步'
          },
          {
            name: '第二步',
            icon: 'trusty',
            selectIcon: 'trusty-fill'
          },
          {
            name: '第三步',
            icon: 'safe',
            selectIcon: 'safe-fill'
          },
          {
            name: '第四步',
            icon: 'vip',
            selectIcon: 'vip-fill'
          }
        ]
      }
    }

  }
</script>
```



### 自定义颜色

通过设置`activeColor`和`inActiveColor`属性设置已完成步骤的颜色和未完成步骤的颜色。

```vue
<tn-steps mode="number" activeColor="#01BEFF" inactiveColor="#E6E6E6"></tn-steps>
```



### API

### Props

|    属性名     |                            说明                             |  类型   | 默认值  |       可选值        |
| :-----------: | :---------------------------------------------------------: | :-----: | :-----: | :-----------------: |
|     mode      |                  模式，说明请参考上面示例                   | String  |   dot   | number/icon/dotIcon |
|     list      |       步骤条的数据，数据对象的属性说明请参考上面示例        |  Array  |    -    |          -          |
|   direction   |                        步骤条的方向                         | String  |   row   |       column        |
|    current    |                       当前激活的步骤                        | Number  |    0    |          -          |
|  activeColor  |                      已完成步骤的颜色                       | String  | #01BEFF |          -          |
| inActiveColor |                      未完成步骤的颜色                       | String  | #AAAAAA |          -          |
|     icon      | 自定义图标，在`mode`为`number`、`icon`、`dotIcon`模式下有效 | String  | success |          -          |
|   showTitle   |                      是否显示底部标题                       | Boolean |  true   |        false        |



### Slots

none



### Event

none
