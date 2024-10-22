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
          name: '官方2群 (已满)',
          groupID: '765208290',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=8WlATIbR'
        },
        {
          name: '官方3群',
          groupID: '313825364',
          groupLink: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=G9X9hC1C_RhE5J0xb6JisPc5W1xqcOFI&authKey=jG%2FCwCXna6eAe3VjYDV%2FlBeaAzF9aYnrZOKDSD12LzT%2FyXXdDrLmTVsWVlNOjKKk&noverify=0&group_code=313825364'
        },{
          name: '官方4群',
          groupID: '336176833',
          groupLink: 'https://qm.qq.com/q/3ySZT93Hsk'
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
