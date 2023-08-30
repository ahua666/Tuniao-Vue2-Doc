## ScrollList 横向滚动 <to-api/>

<demo-model url="/componentsPage/scroll-list/scroll-list"></demo-model>
::: danger 特别提示
在由于右侧的演示是通过iframe引入的，PC端无法正常操作，请在真机演示中查看效果。
:::


### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

通过`slot`传入。

```vue
<tn-scroll-list>
  <view class="tn-flex tn-margin-sm">
    <block v-for="(item, index) in 14" :key="index">
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon3__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur"
            :class="[$tn.colorUtils.getRandomCoolBgClass(index)]">
            <view class="tn-icon-gloves-fill"></view>
          </view>
          <view class="tn-color-black tn-text-lg tn-text-center">
            <text class="tn-text-ellipsis">小图鸟</text>
          </view>
        </view>
      </view>
    </block>
  </view>
</tn-scroll-list>
```



### API

### Props

|        属性名        |           说明            |      类型      | 默认值  | 可选值 |
| :------------------: | :-----------------------: | :------------: | :-----: | :----: |
|      indicator       |        显示指示器         |    Boolean     |  true   | false  |
|    indicatorWidth    |   指示器宽度，单位`rpx`   | String\|Number |   50    |   -    |
|  indicatorBarWidth   | 指示器滑块宽度，单位`rpx` | String\|Number |   20    |   -    |
|    indicatorColor    |      指示器背景颜色       |     String     | #E6E6E6 |   -    |
| indicatorActiveColor |      指示器滑块颜色       |     String     | #01BEFF |   -    |
|    indicatorStyle    |     自定义指示器样式      |     Object     |    -    |   -    |



### Slots

|  名称   |             说明             |
| :-----: | :--------------------------: |
| default | 显示的内容，可自定义内容展示 |



### Event

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| left     | 滑动到最左边时触发 | -        |
| right    | 滑动到最右边时触发 | -        |

