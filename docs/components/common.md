## 内置样式
<demo-model url="/"></demo-model>

### 说明

TuniaoUI组件的实现并不依赖全局样式，内置的一些类名，只是提供一些基础且常用的样式，仅此而已。

注意：请根据[快速上手](./get_started_quickly.md/#快速上手)的说明，引入TuniaoUI提供的scss文件

::: warning  温馨提示
由于TuniaoUI的内置样式均写在scss文件中，所以在使用的时候，请确保给页面的`style`标签加上`lang="scss"`属性
:::

### 字体

#### 1.字体大小

为了更加形象和方便记忆，TuniaoUI提供了一套断点基准值，分别为`xs`、`sm`、`md`、`lg`、`xl`、`xxl`、`xl-xxl`、`xxl-xxl`最为后缀

```css
.tn-text-xs {
  font-size: 20rpx;
}

.tn-text-sm {
  font-size: 24rpx;
}

.tn-text-md {
  font-size: 28rpx;
}

.tn-text-lg {
  font-size: 32rpx;
}

.tn-text-xl {
  font-size: 36rpx;
}

.tn-text-xxl {
  font-size: 40rpx;
}

.tn-text-xl-xxl {
  font-size: 80rpx;
}

.tn-text-xxl-xxl {
  font-size: 120rpx;
}
```

#### 2.字体状态

```css
/* 全部大写 */
.tn-text-upper {
  text-transform: uppercase;
}
/* 首字母大写 */
.tn-text-cap {
  text-transform: capitalize;
}
/* 全部小写 */
.tn-text-lower {
  text-transform: lowercase;
}
/* 加粗 */
.tn-text-bold {
  font-weight: bold;
}
```

#### 3.字体对齐方式

通过组合位置对应的单词组成`tn-text-[位置]`

```css
.tn-text-center {
  text-align: center;
}

.tn-text-left {
	text-align: left;
}

.tn-text-right {
	text-align: right;
}
```

#### 4.段落省略方式

超出对于的行数后使用`省略号`代替

```css
/* 显示一行 */
.tn-text-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 显示两行 */
.tn-text-ellipsis-2 {
	display: -webkit-box;
	overflow: hidden;
	white-space: normal !important;
	text-overflow: ellipsis;
	word-wrap: break-word;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
```



### Flex布局

TuniaoUI定义了一个常用的类，命名为`tn-flex`

```css
.tn-flex {
  display: -webkit-flex;
  display: flex;
}
```

#### 1.子元素是否换行

```css
/* 换行 */
.tn-flex-wrap {
  flex-wrap: wrap;
}
/* 不换行 */
.tn-flex-nowrap {
  flex-wrap: nowrap;
}
```

#### 2.设置布局的方向

```css
/* 垂直布局 */
.tn-flex-direction-column {
  flex-direction: column;
}
/* 水平布局 */
.tn-flex-direction-row {
  flex-direction: row;
}
/* 反向垂直布局 */
.tn-flex-direction-column-reverse {
  flex-direction: column-reverse;
}
/* 反向水平布局 */
.tn-flex-direction-row-reverse {
  flex-direction: row-reverse;
}
```

#### 3.容器自身垂直方向的对齐方式

```css
.tn-flex-center {
  align-self: center;
}

.tn-flex-top {
  align-self: flex-start;
}

.tn-flex-end {
  align-self: flex-end;
}

.tn-flex-stretch {
  align-self: stretch;
}
```

#### 4.子元素垂直方向的对齐方式

用`col`来表示垂直方向，通过组合位置对应的单词组成`tn-flex-col-[位置]`

```css
.tn-flex-col-center {
  align-items: center;
}

.tn-flex-col-top {
  align-items: flex-start;
}

.tn-flex-col-bottom {
  align-items: flex-end;
}
```

#### 5.子元素水平方向的对齐方式

用`row`来表示水平方向，通过组合位置对应的单词组成`tn-flex-row-[位置]`

```css
.tn-flex-row-center {
  justify-content: center;
}

.tn-flex-row-left {
  justify-content: flex-start;
}

.tn-flex-row-right {
  justify-content: flex-end;
}

.tn-flex-row-between {
  justify-content: space-between;
}

.tn-flex-row-around {
  justify-content: space-around;
}
```

#### 6.子元素控件分布

用于决定子元素占父元素的控件大小，组合`tn-col-x`，x的取值范围为[1-12]

```css
.tn-flex-1 {
  flex: 1
}
......
.tn-flex-12 {
  flex: 12
}
```

#### 7.设置flex盒子的基准值

用于设置或检索弹性盒伸缩基准值，为了更加形象和方便记忆，TuniaoUI提供了一套断点基准值，分别为`xs`、`sm`、`md`、`lg`、`xl`、`full`最为后缀

```css
.tn-flex-basic-xs {
  flex-basis: 20%;
}

.tn-flex-basic-sm {
  flex-basis: 40%;
}

.tn-flex-basic-md {
  flex-basis: 50%;
}

.tn-flex-basic-lg {
  flex-basis: 60%;
}

.tn-flex-basic-xl {
  flex-basis: 80%;
}

.tn-flex-basic-full {
  flex-basis: 100%;
}
```



### 内外边距

TuniaoUI定义一套内外边距的规则类名，方便用户的使用。

规则如下：

`tn-[padding/margin]-[方向]-[基准点]`

如果`方向`不填写则在所有方向都生效

如果取消内外边距可以使用：tn-no-[padding/margin]-[方向]

##### 1.方向取值如下：

| 方向   | 说明   |
| ------ | ------ |
| left   | 左边距 |
| right  | 右边距 |
| top    | 上边距 |
| bottom | 下边距 |

##### 2.基准值取值如下：

| 基准值 | 说明  |
| ------ | ----- |
| 不填写 | 30rpx |
| xs     | 10rpx |
| sm     | 20rpx |
| lg     | 40rpx |
| xl     | 50rpx |

#### 示例

设置内边距为lg，并且将右内边距设置为0

```html
<view class="tn-padding-lg tn-no-padding-right"></view>
```



### 边框

TuniaoUI为了方便用户，提供一套边框类。

边框的默认宽度为1rpx，加粗的宽度为6rpx。

`tn-border-solid[s]`表示为四周添加边框，`tn-border-solid[s]-top`表示添加上边框，`tn-border-solid[s]-bottom`表示添加下边框，`tn-border-solid[s]-left`表示添加左边框，`tn-border-solid[s]-right`表示添加右边框。

使用`solids`表示使用更加深颜色的边框。

使用`dashed`替换了`solid`表示边框使用虚线代替实线。

如果想隐藏边框可以使用`tn-none-border`隐藏全部边框，`tn-none-border-top`隐藏上边框，`tn-none-border-bottom`隐藏下边框，`tn-none-border-left`隐藏左边框，`tn-none-border-right`隐藏右边框。

#### 示例

为view标签添加边框，并将左边框设置为深颜色，下边框设置为虚线，并取消上边框

```css
<view class="tn-border-solid tn-border-solids-left tn-border-dashed-bottom tn-none-border-top"></view>
```



### 默认样式

#### 点击效果

```css
.tn-hover {
  opacity: 0.6;
}
```

#### 圆角设置

```css
.tn-round {
	border-radius: 5000rpx !important;
}

.tn-radius {
	border-radius: 6rpx;
}
```



### 修改uni-app默认样式

```css
view,
scroll-view,
swiper,
button,
input,
textarea,
label,
navigator,
image {
	box-sizing: border-box;
}

button::after {
	border: none;
}
```

