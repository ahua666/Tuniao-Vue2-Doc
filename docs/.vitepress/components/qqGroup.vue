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
          name: '官方1群 (已满)',
          groupID: '955598602',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=phAZYOaK'
        },
        {
          name: '官方2群 (已满)',
          groupID: '765208290',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=8WlATIbR'
        },
        {
          name: '官方3群 (已满)',
          groupID: '313825364',
          groupLink: 'https://qm.qq.com/q/OxcPTpZKmK'
        },
        {
          name: '官方4群',
          groupID: '336176833',
          groupLink: 'https://qm.qq.com/q/rjObGY9QrK'
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
