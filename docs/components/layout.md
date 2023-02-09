## Flex布局 
<demo-model url="/basicPage/flex-layout/flex-layout"></demo-model>
::: warning 注意
如需实现类似宫格的布局，请使用TuniaoUI的[Grid宫格组件](/components/grid.html)，可以设置点击效果、列数、对齐方式等，功能更完善和灵活
:::
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
