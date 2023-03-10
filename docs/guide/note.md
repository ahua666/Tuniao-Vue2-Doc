## 注意事项

由于uni-app支持多端开发，而各端，特别是各小程序平台，没有统一的标准，加重了开发者和企业的成本，幸好uni-app使用Vue标准，对各端进行了写法的统一， 推动了生态的发展，但是由于某些小程序平台自身的原因，仍然会出现某些兼容性问题，我们会将制作TuniaoUI过程中遇到，和平时收集的兼容性问题呈现在本专题，希望能 帮助到uni-app开发者。



### 关于TuniaoUI组件的easycom规则可能和其他组件引入名称发生冲突问题

TuniaoUI的组件引入是通过easycom形式的，写在`page.json`中，以`tn-`开头，这个可能跟其他UI组件，或者是uni-app插件市场中的组件名冲突。

原因是：即使您在页面中显式地配置了组件引入，但uni-app仍认为easycom配置的规则优先级比页面引入的组件规则高。

解决的方法是：在import引入组件和在components中给组件起一个别名即可

```vue
<template>
  <tuniao-button backgroundColor="#01BEFF" :plain="true">
    点击进行登录
  </tuniao-button>
</template>

<script>
  import tuniao-button from 'tuniao-ui/components/tn-button/tn-button.vue'
  export default {
    name: 'button',
    components: {
      tuniao-button
    },
    data() {
      return {
        
      }
    }
  }
</script>
```



### 小程序主包太大无法预览和发布

我们都知道微信小程序预览和发布的主包大小都不能超过`2M`，否则无法真机预览和上传发布，经常有同学反馈刚使用TuniaoUI，调试时候主包就超过了`2M`而无法真机预览， 我们在这里做一个说明，TuniaoUI是`按需引入`的，在发行时，HX会自动剔除您没有使用组件，即使您使用了TuniaoUI的全部组件，整个TuniaoUI的大小也只有500K左右，但是有如下两点前提：

- **调试**
  在调试阶段，为了调试的友好效果和编译速度等，HBuilder X默认是没有对JS进行压缩和去除注释，也没有进行组件按需引入的，所以会导致JS文件都很大，我们需要在 HBuilder X进行如下操作，再重新编译即可：

```
运行->运行到小程序模拟器->勾选 运行时是否压缩代码
```

- **发布**

  在HBuilder X中进行发布时，TuniaoUI的组件会按需引入(使用TuniaoUI所有组件的情况下，占用空间500k左右)，如果主包依然超出`2M`，您需要从多个方面着手：

1. [小程序分包](https://uniapp.dcloud.io/collocation/pages?id=subpackages)
2. 将静态资源放到服务器进行引用
3. 取消"ES6转ES5"设置



### uni.scss的优缺点

`uni.scss`为uni-app新建项目自带工程文件，使用的预处理器为`sass/scss`，由此可见，uni-app官方推荐的是`scss`，同时TuniaoUI也是`scss`的坚定推崇者，不建议在 uni-app中使用`less`、`stylus`等。

`uni.scss`具有如下一些特点：

- 无需引入，uni-app在编译时，会自动引入此文件
- 在此中定义的`scss`变量，可以全局使用，可以在此定义一些颜色，主题，尺寸等变量
- **`uni.scss`会编译到每个`scss`文件中**(请着重理解这一句话)

综上所述，我们可以得知，`uni.scss`主要是利用`scss`的特性，定义一些全局变量，供各个写了`lang=scss`的style标签引用，但是这引出了一个重要的问题：
`uni.scss`中所写的一切内容，都会注入到每个声明了`scss`的文件中，这意味着，如果您的`uni.scss`如果有几百行，大小10k左右，那么这个10k都会被注入所有的 其他`scss`文件(页面)中，如果您的应用有50个页面，那么有可能因此导致整体的包体积多了50 * 10 = 500k的大小，这可能会导致小程序包太大而无法预览和发布， 所以，我们建议您只将`scss`变量相关的内容放到`uni.scss`中。



### 样式覆盖兼容性

为了避免样式被用户覆盖，或者被污染，一般组件或者页面都会给`style`标签加上`scoped`属性，如下演示为一个组件的内部构造：

```vue
/* item.vue */
<template>
	<view class="item"></view>
</template>

<style scoped>
	.item {
		border: 1px solid red;
	}
</style>
```

在APP和H5下，可以使用`v-deep`或`/deep/`指令修改：

```vue
<template>
	<item></item>
</template>

<style scoped>
::v-deep .item {
	border: 1px solid blue;
}
</style>
```

在微信小程序中要求有父元素的类名存在：

```vue
<template>
	<view class="wrap">
		<item></item>
	</view>
</template>

<style scoped>
.wrap ::v-deep .item {
	border: 1px solid blue;
}
</style>
```

在支付宝小程序中，写在组件上的类名和内联样式都是无效的：

```vue
<template>
	/* 在支付宝小程序，组件标签上的任何class和style都会被剔除，不会添加到组件内部的根元素中 */
	<item style="border: 1px solid blue" class="item"></item>
</template>
```

