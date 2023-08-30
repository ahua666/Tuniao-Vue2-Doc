## SignBoard 签名板<to-api/>
<demo-model url="/componentsPage/sign-board/sign-board"></demo-model>

该组件会显示在当前页面上，不需要开发者再次编写多一个页面。
::: danger 特别提示
在由于右侧的演示是通过iframe引入的，PC端无法正常操作，请在真机演示中查看效果。
:::


### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |



### 基本使用

通过给`show`传递一个`Boolean`类型变量来控制组件是否打开。

如果是使用了自定义导航栏需要设置`customBarHeight`，否则可能会出现顶部导航栏被遮挡的情况。

```vue
<tn-sign-board :show="show" :customBarHeight="45"></tn-sign-board>
```



### 设置画笔的颜色

可以通过`signSelectColor`设置画笔的可选颜色信息

```vue
<tn-sign-board :show="show" :signSelectColor="['#080808', '#E83A30']"></tn-sign-board>
```



### 设置生成的图片是否旋转到正常角度

可以通过设置`rotate`的属性为`true`生成的图片可以变成正常显示的图片。

```vue
<tn-sign-board :show="show" :rotate="true"></tn-sign-board>
```



### API

### Props

|       属性名       |    说明    |   类型    |         默认值          |  可选值  |
|:---------------:|:--------:|:-------:|:--------------------:|:-----:|
|      show       |  显示签名板   | Boolean |        false         | true  |
| signSelectColor |  画笔可选颜色  |  Array  | ['#080808','#83A30’] |   -   |
|     rotate      | 旋转生成的图片  | Boolean |         true         | false |
| customBarHeight | 顶部导航栏的高度 | Number  |          -           |   -   |



### Slots

none



### Event

| 事件名称   | 说明        | 回调参数         |
|--------|-----------|--------------|
| closed | 关闭签名板时触发  | -            |
| save   | 点击保存签名时触发 | res: 图片的临时地址 |

