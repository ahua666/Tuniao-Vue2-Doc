## ImageUpload 图片上传 <to-api/>

<demo-model url="/componentsPage/image-upload/image-upload"></demo-model>
该组件用于图片上传。
### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |



### 基本使用

- 可以通过设置`fileList`参数(对象数组)，显示预置的图片。其中元素的`url`属性为图片路径。
- 设置`action`参数为后端服务器地址，注意H5在浏览器可能会有跨域限制。

```vue
<template>
  <tn-image-upload :action="action" :fileList="fileList"></tn-image-upload>
</template>

<script>
  export default {
    data() {
      return {
        // 演示地址，请勿直接使用
        action: 'http://www.example.com/upload_image',
        fileList: [{
          url: 'http://www.example.com/tuniao.jpg',
        }]
      }
    }
  }
</script>
```



### 设置为手动上传

组件默认为自动上传，可以设置`autoUpload`为`false`，然后通过`ref`调用组件的`upload`方法，手动上传图片。

```vue
<template>
  <tn-image-upload ref="imageUpload" :action="action" :autoUpload="false"></tn-image-upload>
  <tn-button @click="upload">上传</tn-button>
</template>

<script>
  export default {
    data() {
      return {
        // 演示地址，请勿直接使用
        action: 'http://www.example.com/upload_image',
      }
    },
    methods: {
      upload() {
        this.$refs.imageUpload.upload()
      }
    }
  }
</script>
```



### 获取上传的图片列表

图片选择或者上传成功后，会保存在组件内部的`lists`数组中，数组元素为对象，有如下属性：

- url: 图片地址
- error：组件内部使用，不应根据此值判断上传是否成功，而应根据`progress`属性
- progress：如果值为100，表示图片上传成功
- response：上传成功后，服务器返回的数据，这是最有用的了

为了获得上传的文件列表，可以在提交表单时，通过`ref`获取组件内部的`lists`文件数组，历遍元素筛选出`progress`为100的文件

```vue
<template>
  <tn-image-upload ref="imageUpload" :action="action" :autoUpload="false"></tn-image-upload>
  <tn-button @click="upload">上传</tn-button>
  <tn-button @click="submit">提交</tn-button>
</template>

<script>
  export default {
    data() {
      return {
        // 演示地址，请勿直接使用
        action: 'http://www.example.com/upload_image',
      }
    },
    methods: {
      upload() {
        this.$refs.imageUpload.upload()
      },
      submit() {
        let files = [];
        // 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
        files = this.$refs.imageUpload.lists.filter(val => {
          return val.progress == 100
        })
        // 如果您不需要进行太多的处理，直接如下即可
        // files = this.$refs.uUpload.lists
        console.log(files)
      }
    }
  }
</script>
```



### 限制图片数量和大小

- 通过`maxCount`可以设置最多可以选择的图片的数量，默认限制9张。
- 通过`maxSize`设置单张图片最大的大小，单位为B(byte)，默认10MB。

```vue
<tn-image-upload :maxSize="5 * 1024 * 1024" maxCount="6"></tn-image-upload>
```



### 报错提示

在以下几种情况，组件会默认通过`toast`提示用户信息，可以把`showTips`设置为`false`取消默认的提示，这时可以通过API 中的各种事件，进行自定义的个性化提示

- 超出允许的最大上传数量
- 图片大小超出最大允许大小
- 上传图片出错
- 移除图片

```vue
<tn-image-upload :showTips="false"></tn-image-upload>
```



### 上传前的钩子

通过设置`beforeUpload`的参数来设置上传前的钩子函数(参数不需要加括号)，回调方法会返回两个参数：

- `index`——即当前上传文件在上传列表中的索引
- `lists`——当前所有的文件列表

此回调可以返回一个`promise`、`true`，或者`false`，下面分别阐述三者的处理情况：

- `false`——如果返回`false`，将会跳过当前文件，继续上传下一张图片(如果有)，并且再次执行`beforeUpload`钩子
- `true`——如果返回`true`，会随即上传当前文件，上传成功后，继续上传下一张图片(如果有)，并且再次执行`beforeUpload`钩子
- `promise`——如果返回的是一个`promise`，如果进入`then`回调，就会和返回`true`的情况一样，如果进入`catch`回调，就会和返回`false`的情况一样

### 移除前的钩子

通过设置`beforeRemove`的参数来设置上传前的钩子函数(参数不需要加括号)，回调方法会返回两个参数：

- `index`——即当前上传文件在上传列表中的索引
- `lists`——当前所有的文件列表

此回调可以返回一个`promise`、`true`，或者`false`，下面分别阐述三者的处理情况：

- `false`——如果返回`false`，会终止移除操作
- `true`——如果返回`true`，会执行移除操作
- `promise`——如果返回的是一个`promise`，如果进入`then`回调，就会和返回`true`的情况一样，如果进入`catch`回调，就会和返回`false`的情况一样

#### 1.普通返回

```vue
<template>
  <tn-image-upload :beforeUpload="beforeUpload"></tn-image-upload>
</template>

<script>
  export default {
    methods: {
      beforeUpload(index, list) {
        // 只上传偶数索引的文件
        if (index % 2 == 0) return true
        else return false
      }
    }
  }
</script>
```

#### 2.返回Promise

```vue
<template>
  <tn-image-upload :beforeUpload="beforeUpload"></tn-image-upload>
</template>

<script>
  export default {
    methods: {
      beforeUpload(index, list) {
        return new Promise((resolve, reject) => {
          // 只上传偶数索引的文件
          if (index % 2 == 0) resolve()
          else reject()
        })
      }
    }
  }
</script>
```



### 自定义图片列表和上传按钮

- ##### 自定义上传图片按钮

配置`customBtn`为`true`，并将自定义按钮的插槽名称设置为`addBtn`。

```vue
<template>
  <tn-image-upload :customBtn="true">
    <view slot="addBtn" class="tn-image-upload__custom-btn" hover-class="tn-hover-class" hover-stay-time="150">
      <view>选择图片</view>
    </view>
  </tn-image-upload>
</template>

<style lang="scss" scoped="">
  .tn-image-upload__custom-btn {
    background-color: #E6E6E6;
    width: 100%;
    height: 180rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30rpx;
  }
</style>
```

- ##### 自定义上传图片列表

配置`showUploadList`为`false`来去除内置的默认图片预览列表。然后通过事件来获取上传文件的列表。

**注意**：这里需要区分H5和其他端的情况，在**H5**下可以通过插槽来传递数据。

```vue
<template>
  <tn-image-upload ref="imageUpload" :showUploadList="false" @on-list-change="listChange">
    <!-- #ifdef MP-WEIXIN -->
    <view>
      <view v-for="(item,index) in lists" :key="index" class="tn-image-upload__item">
        <image class="tn-image-upload__item__image" :src="item.url || item.path" mode="aspectFill"></image>
      </view>
    </view>
    <!-- #endif -->
    <!-- #ifdef H5 -->
    <template v-slot:file="data">
      <view v-for="(item,index) in data.file" :key="index" class="tn-image-upload__item">
        <image class="tn-image-upload__item__image" :src="item.url || item.path" mode="aspectFill"></image>
      </view>
    </template>
    <!-- #endif -->
  </tn-image-upload>
</template>

<script>
  export default {
    data() {
      return {
        lists: []
      }
    },
    methods: {
      listChange(lists, index) {
        console.log('上传文件列表发生改变', lists, index);
        this.lists = lists
      }
    }
  }
</script>

<style lang="scss" scoped="">
  .tn-image-upload__item {
    width: 100%;
    height: 180rpx;
    border-radius: 30rpx;
    margin-bottom: 20rpx;

    &__image {
      width: 100%;
      height: 180rpx;
      border-radius: 30rpx;
    }
  }
</style>

```



### API

### Props

|          属性名          |                                   说明                                    |       类型       |                      默认值                       |  可选值  |
|:---------------------:|:-----------------------------------------------------------------------:|:--------------:|:----------------------------------------------:|:-----:|
|         index         |                              标记多个图片上传组件的标识                              | Number\|String |                       -                        |   -   |
|        action         |                                 上传图片地址                                  |     String     |                       -                        |   -   |
|        isUniCloud         |                               UniCloud上传                                |    Boolean     |                     false                      | true  |
|       fileList        |                          默认显示的上传列表，必须有`url`属性                           |     Array      |                       -                        |   -   |
|       disabled        |                                  禁止上传                                   |    Boolean     |                     false                      | true  |
|      autoUpload       |                              自动上传，选择完图片后触发                              |    Boolean     |                      true                      | false |
|       multiple        |                                允许选择多张图片                                 |    Boolean     |                      true                      | false |
|       maxCount        |                                最大允许上传数量                                 |     Number     |                       9                        |   -   |
|        maxSize        |                             单张图片的最大大小(byte)                             |     Number     |                10 * 1024 * 1024                |   -   |
|         name          |                                上传文件的字段名                                 |     String     |                      file                      |   -   |
|        header         |                              上传图片时携带的头部信息                               |     Object     |                       -                        |   -   |
|       formData        |                               上传图片时携带的参数                                |     Object     |                       -                        |   -   |
|       sizeType        |     选择上传图片的尺寸，[具体参考uni文档](https://uniapp.dcloud.io/api/media/image)     |     Array      |           ['original','compressed']            |   -   |
|      sourceType       |     选择上传图片的来源，[具体参考uni文档](https://uniapp.dcloud.io/api/media/image)     |     Array      |               ['album','camera']               |   -   |
|    showUploadList     |                              显示组件自带的图片预览功能                              |    Boolean     |                      true                      | false |
|       imageMode       | 预览图片的裁剪模式，可选值请参考[uni的image属性](https://uniapp.dcloud.io/component/image) |     String     |                   aspectFill                   |   -   |
|   previewFullImage    |                               点击图片时进行全屏预览                               |    Boolean     |                      true                      | false |
|     showProgress      |                                 显示上传进度                                  |    Boolean     |                      true                      | false |
|      deleteable       |                                 显示删除按钮                                  |    Boolean     |                      true                      | false |
|      deleteIcon       |                       删除按钮的图标，仅可以使用TuniaoUI内置的图标                        |     String     |                     close                      |   -   |
| deleteBackgroundColor |                                删除按钮的背景颜色                                |     String     |                       -                        |   -   |
|      deleteColor      |                                 删除按钮的颜色                                 |     String     |                       -                        |   -   |
|      uploadText       |                                上传按钮的提示文字                                |     String     |                      选择图片                      |   -   |
|       showTips        |                                显示toast提示                                |    Boolean     |                      true                      | false |
|       customBtn       |                                 自定义上传按钮                                 |    Boolean     |                     false                      | true  |
|         width         |                             预览图片区域的宽度，单位rpx                             |     Number     |                      200                       |   -   |
|        height         |                             预览图片区域的高度，单位rpx                             |     Number     |                      200                       |   -   |
|       limitType       |                                允许上传的文件类型                                |     Array      | ['png','jpg','jpeg',<br/>'webp','gif','image'] |   -   |
|        toJson         |                         自动将服务器返回的结果转换为json格式数组                          |    Boolean     |                      true                      | false |
|     beforeUpload      |                                上传文件前钩子函数                                |    Function    |                       -                        |   -   |
|     beforeRemove      |                                移除文件前钩子函数                                |    Function    |                       -                        |   -   |



### Slots

|   名称   |         说明         |
|:------:|:------------------:|
| addBtn |    自定义上传图片按钮内容     |
|  file  | 自定义上传文件列表，在`H5`下有效 |



### Methods

此方法要通过`ref`手动调用。

|      名称       |               说明                |
|:-------------:|:-------------------------------:|
|    upload     |             手动上传图片              |
|     clear     |           清空已上传的图片列表            |
|   reUpload    |        重新上传上传失败或者尚未上传的图片        |
| remove(index) | 移除列表中某一张图片，`index`为`lists`数组的索引 |



### Event

| 事件名称               | 说明                      | 回调参数                                                                                            |
|--------------------|-------------------------|-------------------------------------------------------------------------------------------------|
| on-list-change     | 当列表文件发生改变时触发，添加、移除文件    | (lists, name) `lists`上传文件列表数组，`name`当前组件的`index`标识                                              |
| on-oversize        | 当所选图片的大小操作允许上传大小的最大值时触发 | (file, lists, name) `file`当前选择的图片信息，`lists`上传文件列表数组，`name`当前组件的`index`标识                        |
| on-exceed          | 当选择的图片超过最大选择数时触发        | (file, lists, name) `file`当前选择的图片信息，`lists`上传文件列表数组，`name`当前组件的`index`标识                        |
| on-choose-complete | 每次选择图片后触发               | (lists, name) `lists`上传文件列表数组，`name`当前组件的`index`标识                                              |
| on-choose-fail     | 选择文件出错时触发               | (err)`err`错误信息                                                                                  |
| on-uploaded        | 所有图片上传完毕时触发             | (lists, name) `lists`上传文件列表数组，`name`当前组件的`index`标识                                              |
| on-success         | 图片上传成功时触发               | (data, index, lists, name)`data`服务器返回的数据，`index`当前操作图片的索引， `lists`上传文件列表数组，`name`当前组件的`index`标识 |
| on-change          | 图片上传后触发，不区分成功与失败        | (res, index, lists, name)`res`上传后的消息，`index`当前操作图片的索引， `lists`上传文件列表数组，`name`当前组件的`index`标识     |
| on-progress        | 图片上传过程中进度变化时触发          | (res, index, lists, name)`res`上传图片的进度信息，`index`当前操作图片的索引， `lists`上传文件列表数组，`name`当前组件的`index`标识  |
| on-error           | 上传图片失败时触发               | (err, index, lists, name)`err`上传出错信息，`index`当前操作图片的索引， `lists`上传文件列表数组，`name`当前组件的`index`标识     |
| on-remove          | 图片移除时触发                 | (index, lists, name)`index`当前操作图片的索引， `lists`上传文件列表数组，`name`当前组件的`index`标识                      |
| on-preview         | 全屏预览图片时触发               | (url, lists, name)`url`当前选择图片的`url`地址， `lists`上传文件列表数组，`name`当前组件的`index`标识                     |

