<template>
  <div>
    <div class="custom-block-for-no-api">
      <div class="custom-block tip">
        <p class="custom-block-title">提示</p>
        <p>
          <span style="font-weight: bold">炫酷模板源码免费开源</span>，在uni-app的插件市场
          <a style="color: #409eff!important;" target="_blank" href="https://ext.dcloud.net.cn/publisher?id=356088">图鸟UI</a>
          所发布的插件中选择你想要的模板，在右上角选择"使用 HBuilderX 导入示例项目" 或者 "下载示例项目ZIP"，
          在HBX运行项目即可看到和使用模板。
        </p>
      </div>

    </div>
    <div class="custom-block-for-no-api">
      <div class="custom-block tip">
        <p class="custom-block-title">提示</p>
        <p>
          会员模板获取赞助请联系微信(注明赞助)：tnkewo
        </p>
      </div>

    </div>
    <div class="custom-block-for-no-api">
      <div class="custom-block tip warning ">
        <p class="custom-block-title">注意</p>
        <p>
          这些布局都依赖TuniaoUI框架，请确保在使用TuniaoUI的情况下使用相关的功能，否则，需要自行调试修改。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ``
    }
  }
}
</script>

<style scoped>
.custom-block.tip {
  /* background-color: #f3f5f7;
  border-color: #42b983; */
}

.custom-block.tip.warning {
  background-color: rgba(255,229,100,0.3);
  border-color: #e7c000;
}

.custom-block .custom-block-title {
  margin-bottom: -0.5rem !important;
}

.custom-block .custom-block-title {
  font-weight: 600;
  margin-bottom: -0.4rem;
}


</style>