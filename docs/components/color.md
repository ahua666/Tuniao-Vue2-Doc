## Color 色彩

<demo-model url="/basicPage/color/color"></demo-model>

TuniaoUI进过大量的调试和研究，得出一套专有的调色板，在各个组件内部，使用统一的配色，可以为产品带来统一又鲜明的视觉效果。

::: tip 注意
TuniaoUI为了更好编写css，使用了scss预处理器，使用TuniaoUI之前，请确认您的Hbuilder X已经安装了scss预处理器，
一般情况下，相信您已经安装了。如果没有安装， 请在 Hbuilder X->工具->插件安装 中找到找到"scss/sass编译"安装即可，
安装完毕如果不生效，请重启Hbuilder X。
:::

### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |

### 主色调

TuniaoUI的主题色是`#01BEFF`，然后还有以下的配色供用户参考

<Colors type="1"></Colors>

我们在全局样式中，通过scss提供了对应的颜色变量，方便您在任何可以编写`scss`的地方进行调用。

``` css
/* 变量的定义，该部分TuniaoUI已全局引入，无需您编写 */
$tn-main-color: #01BEFF;
$tn-match-color: #00FFC6;
$tn-reverse-main-color: #FFF00D;
$tn-female-color: #FF71D2;
$tn-male-color: #82B2FF;
$tn-main-orange: #FBBD12;
$tn-bg-color: #FFFFFF;
$tn-space-color: #F8F7F8;

/* 在您编写css的地方使用这些变量 */
.wrap {
	color: $tn-main-color;
	// ......
}
```

### 内置颜色

TuniaoUI为了方便用户进行配色，提供了一套常用的配色供用户选择。

<Colors type="2"></Colors>

以上的颜色值TuniaoUI也提供了对应的颜色变量，方便您在任何可以编写`scss`的地方进行调用。

```scss
$tn-color-red: #E83A30  ;
$tn-color-red-dark: #BA3027  ;
$tn-color-red-disabled: #F9CDCB  ;
$tn-color-red-light: #FAD8D6  ;
//  ......
$tn-color-gray: #AAAAAA  ;
$tn-color-gray-dark: #838383  ;  
$tn-color-gray-disabled: #E6E6E6;
$tn-color-gray-light: #F8F7F8;

/* 在您编写css的地方使用这些变量 */
.wrap {
    color: $tn-color-red;
//......
}
```

上述列出来的颜色值TuniaoUI提供了对于的类供用户进行直接使用。

使用规则如下：

- 作为字体颜色：tn-color-[颜色标识]--[类型]
- 作为背景颜色：tn-bg-[颜色标识]--[类型]
- 作为边框颜色：tn-border-[颜色标识]--[类型]
- 作为阴影颜色：tn-shadow-[颜色标识]
- 作为文字阴影颜色：tn-text-shadow-[颜色标识]

#### 颜色标识包含

`white`,`red`,`purplered`,`purple`,`bluepurple`,`aquablue`,`blue`,`indigo`,

`cyan`,`teal`,`green`,`yellowgreen`,`lime`,`yellow`,`orangeyellow`,`orange`,

`orangered`,`brown`,`gray`,`grey`

#### 类型包含

`dark`,`disabled`,`light`

#### 使用示例

```vue

<view class="tn-bg-cyan tn-color-white tn-border tn-border-red--disabled"></view>
```

### 内置渐变色

TuniaoUI为了方便用户提供了一系列的渐变色，供用户进行使用。

使用规则如下：

- 普通渐变色：tn-main-gradient-[颜色标识]--[类型]

#### 颜色标识包含

`white`,`red`,`purplered`,`purple`,`bluepurple`,`aquablue`,`blue`,`indigo`,

`cyan`,`teal`,`green`,`yellowgreen`,`lime`,`yellow`,`orangeyellow`,`orange`,

`orangered`。

#### 类型包含

`light(浅色渐变)`,`reverse(颜色反转)`,`single(单色渐变)`

#### 效果演示

- 不加类型值

<Colors type="3"></Colors>

- 加 reverse

<Colors type="4"></Colors>

- 加 light

<Colors type="5"></Colors>

- 加 single 

<Colors type="6"></Colors>


#### 使用示例

```vue
<view class="tn-main-gradient-red"></view>
<view class="tn-main-gradient-red--reverse"></view>
<view class="tn-main-gradient-red--light"></view>
<view class="tn-main-gradient-red--light--reverse"></view>
<view class="tn-main-gradient-red--single"></view>
<view class="tn-main-gradient-red--single--reverse"></view>
<view class="tn-cool-bg-color-1"></view>
```

#### 使用示例

- 酷炫渐变色：tn-cool-bg-color-[1~16]

<Colors type="7"></Colors>

#### 使用示例

```vue
<view class="tn-cool-bg-color-1"></view>
```
