<template>
  <div class="qq-group">
    <div class="qq-group__item" v-for="item in groupList" :key="item.groupID">
      {{item.name}}：
      <a :href="item.groupLink" target="_blank">{{item.groupID}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qqGroup',
  data() {
    return {
      groupList: [
        {
          name: 'TuniaoUI QQ 频道',
          groupID: '点击进入',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=phAZYOaK'
        },
        {
          name: '官方1群 (已满)',
          groupID: '955598602',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=phAZYOaK'
        },
        {
          name: '官方2群',
          groupID: '765208290',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=8WlATIbR'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.qq-group {
  &__item {
    margin-top: 12px;
    font-size: 14px;
    color: #5e6d82;
  }
}
</style>
