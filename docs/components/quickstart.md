## 快速上手
<demo-model url="/"></demo-model>

### 如何使用

通过下载方式配置好之后，在某个页面中可以直接使用组件，无需通过`import`来引入组件。

```vue
<template>
  <tn-button backgroundColor="#01BEFF" :plain="true">
    点击进行登录
  </tn-button>
</template>

<script>
  export default {
    name: 'button',
    data() {
      return {
        
      }
    }
  }
</script>
```



### 不使用easycom单独引用某一个组件

某些情况下，您可能不想通过easycom引用组件，那么您可以使用`import`这个常规的引入方式，如下：

```vue
<template>
  <tn-button backgroundColor="#01BEFF" :plain="true">
    点击进行登录
  </tn-button>
</template>

<script>
  import tn-button from 'tuniao-ui/components/tn-button/tn-button.vue'
  export default {
    name: 'button',
    components: {
      tn-button
    },
    data() {
      return {
        
      }
    }
  }
</script>
```

