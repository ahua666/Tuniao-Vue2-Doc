## Color 色彩

<demo-model url="/basicPage/color/color"></demo-model>

TuniaoUI进过大量的调试和研究，得出一套专有的调色板，在各个组件内部，使用同一的配色，可以为产品带来同意又鲜明的视觉效果。

::: tip 注意
TuniaoUI为了更好编写css，使用了scss预处理器，使用TuniaoUI之前，请确认您的Hbuilder X已经安装了scss预处理器，
一般情况下，相信您已经安装了。如果没有安装， 请在 Hbuilder X->工具->插件安装 中找到找到"scss/sass编译"安装即可，
安装完毕如果不生效，请重启Hbuilder X。
:::

### 平台差异说明

| App  |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :--: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
|  √   |  √   |     √      |      兼容中       |     兼容中      |     兼容中      |    兼容中     |



### 主色调

TuniaoUI的主题色是`#01BEFF`，然后还有以下的配色供用户参考
<div class="tn-color__wrap">
    <div class="tn-color__item tn-color__item--no-child" style="background-color: #01BEFF;">
        <div class="tn-color__item--main">
            <div class="tn-color__item--main__info">
                <div class="tn-color__item--main__info__title">主题色</div>
                <div class="tn-color__item--main__info__color-value">#01BEFF</div>
            </div>
        </div>
    </div>
    <div class="tn-color__item tn-color__item--no-child" style="background-color: #FBBD12;">
        <div class="tn-color__item--main">
            <div class="tn-color__item--main__info">
                <div class="tn-color__item--main__info__title">图鸟橙</div>
                <div class="tn-color__item--main__info__color-value">#FBBD12</div>
            </div>
        </div>
    </div>
    <div class="tn-color__item tn-color__item--no-child" style="background-color: #00FFC8;">
        <div class="tn-color__item--main">
            <div class="tn-color__item--main__info">
                <div class="tn-color__item--main__info__title">子配色</div>
                <div class="tn-color__item--main__info__color-value">#00FFC8</div>
            </div>
        </div>
    </div>
    <div class="tn-color__item tn-color__item--no-child" style="background-color: #FFF00D;">
        <div class="tn-color__item--main">
            <div class="tn-color__item--main__info">
                <div class="tn-color__item--main__info__title">反色调</div>
                <div class="tn-color__item--main__info__color-value">#FFF00D</div>
            </div>
        </div>
    </div>
    <div class="tn-color__item tn-color__item--no-child" style="background-color: #080808;">
        <div class="tn-color__item--main">
            <div class="tn-color__item--main__info">
                <div class="tn-color__item--main__info__title">文本</div>
                <div class="tn-color__item--main__info__color-value">#080808</div>
            </div>
        </div>
    </div>
    <div class="tn-color__item tn-color__item--no-child" style="background-color: #F4F4F4;">
        <div class="tn-color__item--main">
            <div class="tn-color__item--main__info" style="color: #080808;">
                <div class="tn-color__item--main__info__title">背景</div>
                <div class="tn-color__item--main__info__color-value">#F4F4F4</div>
            </div>
        </div>
    </div>
    <div class="tn-color__item tn-color__item--no-child" style="background-color: #FF71D2;">
        <div class="tn-color__item--main">
            <div class="tn-color__item--main__info">
                <div class="tn-color__item--main__info__title">辅助粉</div>
                <div class="tn-color__item--main__info__color-value">#FF71D2</div>
            </div>
        </div>
    </div>
    <div class="tn-color__item tn-color__item--no-child" style="background-color: #82B2FF;">
        <div class="tn-color__item--main">
            <div class="tn-color__item--main__info">
                <div class="tn-color__item--main__info__title">辅助蓝</div>
                <div class="tn-color__item--main__info__color-value">#82B2FF</div>
            </div>
        </div>
    </div>
</div>

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
<div class="tn-color__wrap">
    <template v-for="(item, index) in colorList">
        <div class="tn-color__item" :class="['tn-bg-' + item.color]" :key="index">
            <div class="tn-color__item--main">
                <div class="tn-color__item--main__info">
                    <div class="tn-color__item--main__info__title">{{ item.name }}({{ item.color }})</div>
                    <div class="tn-color__item--main__info__color-value">{{ item.value.normal }}</div>
                </div>
            </div>
            <div class="tn-color__item--children">
                <div class="tn-color__item--children--item" :class="['tn-bg-' + item.color + '--dark']">
                    <div class="tn-color__item--children--item__info">
                        <div class="tn-color__item--children--item__info__title">dark</div>
                        <div class="tn-color__item--children--item__info__color-value">{{ item.value.dark }}</div>
                    </div>
                </div>
                <div class="tn-color__item--children--item" :class="['tn-bg-' + item.color + '--disabled']">
                    <div class="tn-color__item--children--item__info">
                        <div class="tn-color__item--children--item__info__title">disabled</div>
                        <div class="tn-color__item--children--item__info__color-value">{{ item.value.disabled }}</div>
                    </div>
                </div>
                <div class="tn-color__item--children--item" :class="['tn-bg-' + item.color + '--light']">
                    <div class="tn-color__item--children--item__info">
                        <div class="tn-color__item--children--item__info__title">light</div>
                        <div class="tn-color__item--children--item__info__color-value">{{ item.value.light }}</div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</div>

以上的颜色值TuniaoUI也提供了对应的颜色变量，方便您在任何可以编写`scss`的地方进行调用。
```css
$tn-color-red: #E83A30;
$tn-color-red-dark: #BA3027;
$tn-color-red-disabled: #F9CDCB;
$tn-color-red-light: #FAD8D6;

// ......

$tn-color-gray: #AAAAAA;
$tn-color-gray-dark: #838383;
$tn-color-gray-disabled: #E6E6E6;
$tn-color-gray-light: #F8F7F8;

/* 在您编写css的地方使用这些变量 */
.wrap {
	color: $tn-color-red;
	// ......
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

`light`,`disabled`,`light`

#### 使用示例

```css
<view class="tn-bg-cyan tn-color-white tn-border tn-border-red--disabled"></view>
```

### 内置渐变色

TuniaoUI为了方便用户提供了一系列的渐变色，供用户进行使用。

使用规则如下：

- 普通渐变色：tn-main-gradient-[颜色标识]--[类型]
- 酷炫渐变色：tn-cool-bg-color-[1~16]

#### 颜色标识包含

`white`,`red`,`purplered`,`purple`,`bluepurple`,`aquablue`,`blue`,`indigo`,

`cyan`,`teal`,`green`,`yellowgreen`,`lime`,`yellow`,`orangeyellow`,`orange`,

`orangered`,`brown`,`gray`,`grey`

#### 类型包含

`light(浅色渐变)`,`reserve(颜色反转)`,`single(单色渐变)`

#### 使用示例

```css
<view class="tn-main-gradient-red"></view>
<view class="tn-main-gradient-red--reverse"></view>
<view class="tn-main-gradient-red--light"></view>
<view class="tn-main-gradient-red--light--reverse"></view>
<view class="tn-main-gradient-red--single"></view>
<view class="tn-main-gradient-red--single--reverse"></view>
<view class="tn-cool-bg-color-1"></view>
```


<script>
  export default {
    data() {
      return {
        colorList: [{
            name: '红色',
            color: 'red',
            value: {
              normal: '#E83A30',
              dark: '#BA2E26',
              disabled: '#F39C97',
              light: '#FAD8D6'
            }
          },
          {
            name: '紫红色',
            color: 'purplered',
            value: {
              normal: '#E72F8C',
              dark: '#B9276F',
              disabled: '#F397C5',
              light: '#FAD5E8'
            }
          },
          {
            name: '紫色',
            color: 'purple',
            value: {
              normal: '#892FE8',
              dark: '#6E27BA',
              disabled: '#C497F3',
              light: '#E7D5FA'
            }
          },
          {
            name: '蓝紫色',
            color: 'bluepurple',
            value: {
              normal: '#5F4FD9',
              dark: '#4C3FAE',
              disabled: '#AFA7EC',
              light: '#DFDCF7'
            }
          },
          {
            name: '海蓝色',
            color: 'aquablue',
            value: {
              normal: '#3646FF',
              dark: '#2B38CC',
              disabled: '#9AA2FF',
              light: '#D7DAFF'
            }
          },
          {
            name: '蓝色',
            color: 'blue',
            value: {
              normal: '#3D7EFF',
              dark: '#3465CC',
              disabled: '#9EBEFF',
              light: '#D8E5FF'
            }
          },
          {
            name: '靛蓝色',
            color: 'indigo',
            value: {
              normal: '#31C9E8',
              dark: '#28A1BA',
              disabled: '#98E4F3',
              light: '#D6F4FA'
            }
          },
          {
            name: '青色',
            color: 'cyan',
            value: {
              normal: '#2DE88D',
              dark: '#24BA97',
              disabled: '#96F3DE',
              light: '#D5FAF2'
            }
          },
          {
            name: '青绿色',
            color: 'teal',
            value: {
              normal: '#24F083',
              dark: '#1DC069',
              disabled: '#91F7C1',
              light: '#D3FCE6'
            }
          },
          {
            name: '绿色',
            color: 'green',
            value: {
              normal: '#31E749',
              dark: '#28B93D',
              disabled: '#98F3A4',
              light: '#D6FADB'
            }
          },
          {
            name: '黄绿色',
            color: 'yellowgreen',
            value: {
              normal: '#A4E82F',
              dark: '#82BA27',
              disabled: '#D1F397',
              light: '#EDFAD5'
            }
          },
          {
            name: '酸橙色',
            color: 'lime',
            value: {
              normal: '#D5EB00',
              dark: '#AABC00',
              disabled: '#E9F57F',
              light: '#F7FBCC'
            }
          },
          {
            name: '黄色',
            color: 'yellow',
            value: {
              normal: '#FFF420',
              dark: '#CCC21A',
              disabled: '#FFF88F',
              light: '#FFFDD2'
            }
          },
          {
            name: '橘黄色',
            color: 'orangeyellow',
            value: {
              normal: '#FFCA28',
              dark: '#CCA220',
              disabled: '#FFE493',
              light: '#FFF4D4'
            }
          },
          {
            name: '橙色',
            color: 'orange',
            value: {
              normal: '#FFA726',
              dark: '#CC851E',
              disabled: '#FFD392',
              light: '#FFEDD4'
            }
          },
          {
            name: '橘红色',
            color: 'orangered',
            value: {
              normal: '#FF7043',
              dark: '#CC5A36',
              disabled: '#FFB7A1',
              light: '#FFE2D9'
            }
          },
          {
            name: '棕色',
            color: 'brown',
            value: {
              normal: '#914F2C',
              dark: '#743F23',
              disabled: '#C8A795',
              light: '#E9DCD5'
            }
          },
          {
            name: '玄灰色',
            color: 'grey',
            value: {
              normal: '#78909C',
              dark: '#5F7E8B',
              disabled: '#C6D1D8',
              light: '#E4E9EC'
            }
          },
          {
            name: '灰色',
            color: 'gray',
            value: {
              normal: '#AAAAAA',
              dark: '#838383',
              disabled: '#E6E6E6',
              light: '#F8F7F8'
            }
          }
        ]
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
    @import '../.vuepress/public/scss/theme.scss';
    @import '../.vuepress/public/scss/color.scss';

    .tn-color__wrap {
        display: flex;
        flex-wrap: wrap;
    
        .tn-color__item {
            position: relative;
            flex: 0 0 28.5%;
            height: 120px;
            min-width: 300px;
            padding: 5px 25px;
            border-radius: 5px;
            overflow: hidden;
            margin-left: 2%;
            margin-bottom: 35px;
    
            &--no-child {
                padding: 20px 25px !important;
                height: 80px !important;
            }
    
            &--main {
                &__info {
                    color: #FFFFFFDD;
    
                    &__title {
                        font-size: 18px;
                    }
    
                    &__color-value {
                        font-size: 12px;
                        margin-top: 5px;
                    }
                }
            }
    
            &--children {
                display: flex;
                flex-direction: row;
                position: absolute;
                width: 100%;
                left: 0;
                bottom: 0;
    
                &--item {
                    flex: 1;
                    padding: 10px 0;
    
                    &__info {
                        color: #080808DD;
                        margin-left: 10px;
    
                        &__title {
                        font-size: 14px;
                        }
    
                        &__color-value {
                            font-size: 12px;
                        }
                    }
    
                    &:first-of-type {
                        .tn-color__item--children--item__info {
                            color: #FFFFFFDD !important;
                        }
                    }
                }
            }
            
        }
    }
</style>
