<template>
  <div>
    <meta name="referrer" content="never">
    <div class="container-app" style="margin-top: 40px;margin-bottom: 40px">
      <h3>合作伙伴 {{ WorkList.length + 1}} 位</h3>
      <h4>感恩合作伙伴的喜欢、信任与支持，因为有你们，让图鸟走得更远。</h4>
      <div style="margin: 0 auto">
        <el-row :gutter="20" style="margin-top: 20px;">
          <el-col :xl="8" :lg="8" :md="12" :sm="12"  :xs="24">
            <div class="box-card">
              <a href="https://www.seafox.cc/" target="_blank" @click.stop>
                <span class="site-card-tag3 speed">赞赏金主<i class="light"></i></span>
                <!-- <span class="site-card-tag3 speed">推荐<i class="light"></i></span> -->
                <!-- <span  class="site-card-tag2 speed">群友<i class="light"></i></span> -->
                <div style="display: flex;flex-direction: column;">
                  <div>
                    <el-image
                        src="https://cdn.nlark.com/yuque/0/2025/jpeg/280373/1737022192554-assets/web-upload/94a150f0-deca-414a-a28c-8d14ad876dce.jpeg"
                        class="Star-img"
                        fit="fill"
                        style="width: 90px; height: 90px;border:1px #dedede solid;"></el-image>
                    <div>
                      <div style="font-size: 16px;font-weight: bold;margin: 14px 0px 12px 12px;text-align: center;line-clamp: 1;display: -webkit-box;-webkit-box-orient: vertical;text-overflow: ellipsis;overflow: hidden;">
                        海狐外卖跑腿系统
                        <span class="vp-external-link-icon"></span>
                      </div>
                      <!-- <div style="display: flex">
                        <div v-for="(item2,index2) in item.tag"
                            style="margin: 0px 0px 0px 15px; border:1px #dedede80 solid;border-radius: 6px;padding: 0px 8px 0px 8px;font-size: 12px;">
                          {{ item2 }}
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </el-col>
          <el-col v-for="(item,index) in WorkList" :key="index" :xl="8" :lg="8" :md="12" :sm="12"  :xs="24">
            <div class="box-card">
              <a :href="item.link" target="_blank" @click.stop>
                <!-- <span v-if="item.openSource" class="site-card-tag speed">开源<i class="light"></i></span>
                <span v-if="item.recommend" class="site-card-tag3 speed">推荐<i class="light"></i></span>
                <span v-else-if="!item.openSource" class="site-card-tag2 speed">群友<i class="light"></i></span> -->
                <div style="display: flex;flex-direction: column;">
                  <div>
                    <el-image
                        :src="item.indexImg"
                        class="Star-img"
                        fit="fill"
                        style="width: 90px; height: 90px;border:1px #dedede solid;"></el-image>
                    <div>
                      <div style="font-size: 16px;font-weight: bold;margin: 14px 0px 12px 12px;text-align: center;line-clamp: 1;display: -webkit-box;-webkit-box-orient: vertical;text-overflow: ellipsis;overflow: hidden;">
                        {{ item.name }} 
                        <span class="vp-external-link-icon"></span>
                      </div>
                      <!-- <div style="display: flex">
                        <div v-for="(item2,index2) in item.tag"
                            style="margin: 0px 0px 0px 15px; border:1px #dedede80 solid;border-radius: 6px;padding: 0px 8px 0px 8px;font-size: 12px;">
                          {{ item2 }}
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
@font-face {
  font-family: 'doc-iconfont'; /* project id 1839347 */
  src: url('//at.alicdn.com/t/font_1839347_q72yio5zage.ttf') format('truetype');
}

.container-app {
  width: 1200px !important;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .container-app {
    width: 95% !important;
    margin: 0 auto;
  }
}

.Star-img {
  border-radius: 50px;
}

.grid-content {
  background: #0FD850;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

h4 {
  font-size: 17px;
  font-weight: 400;
}

a {
  color: #03a9f4;
}


.iconfont {
  font-family: 'doc-iconfont', serif !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.star-dialog {
  border-radius: 10px !important;
}

.member-item {
  background-color: rgb(242, 242, 242);
  display: flex;
  padding: 20px;
  border-radius: 5px;
  margin-top: 25px;
  max-width: 1200px;

  &__avatar {
    height: 100px;
    flex: 0 0 100px;
    width: 100px;

    img {
      width: 100%;
      border-radius: 4px;
    }
  }

  &__info {
    margin-left: 20px;
  }

  &__name {
    color: #333;
    font-weight: bold;
    font-size: 16px;
    margin-top: 5px;
  }

  &__tag {
    display: flex;
    color: #999;
    font-size: 15px;
    margin-top: 5px;
    align-items: center;

    &__split {
      font-size: 20px;
      margin: 0 7px;
      color: #000;
    }
  }

  &__job {
    color: #555;
    font-size: 15px;
    margin-top: 7px;
  }

  &__intro {
    color: #666;
    font-size: 14px;
    margin-top: 7px;
  }
}


.box-card {
  height: 180px;
  text-align: center;
	border: 1px solid #eaeefb;
	border-radius: 10px;
	-webkit-transition: bottom 0.4s;
	transition: bottom 0.4s;
	position: relative;
	bottom: 0;
	margin: 10px 10px 10px 0;
  padding: 20px;
}

.box-card:hover {
  bottom: 6px;
	box-shadow: 0 6px 18px 0 rgba(232, 237, 250, .5);
}

.box-card:hover .mask {
  bottom: -1.5rem;
}

.box-card:hover .mask-c-1 {
  bottom: -2.5rem;
}

.site-card-tag {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 4px 8px;
  background-color: #57bd6a;
  color: #fff;
  z-index: 1;
  border-radius: 0 12px 0 12px;
  transition: 0.3s;
  font-size: 0.6rem;
  line-height: 1rem;
  opacity: 0.8;
}

.site-card-tag2 {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 4px 8px;
  background-color: #425aef;
  color: #fff;
  z-index: 1;
  border-radius: 0 12px 0 12px;
  transition: 0.3s;
  font-size: 0.6rem;
  line-height: 1rem;
  opacity: 0.8;
}
.site-card-tag3 {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 4px 8px;
  background-color: #d52b2b;
  color: #fff;
  z-index: 1;
  border-radius: 0 12px 0 12px;
  transition: 0.3s;
  font-size: 0.6rem;
  line-height: 1rem;
  opacity: 0.8;
}

.light {
  //cursor: pointer;
  position: absolute;
  //top: 0;
  width: 100px;
  height: 35px;
  background-image: -moz-linear-gradient(0deg, var(--vp--works-card-light-color-one), var(--vp--works-card-light-color-two), var(--vp--works-card-light-color-one));
  background-image: -webkit-linear-gradient(0deg, var(--vp--works-card-light-color-one), var(--vp--works-card-light-color-two), var(--vp--works-card-light-color-one));
  -webkit-animation: light_tag 4s both infinite;
  -moz-animation: light_tag 4s both infinite;
  -ms-animation: light_tag 4s both infinite;
  animation: light_tag 4s both infinite;
}

@keyframes light_tag {
  0% {
    transform: skewx(0deg);
    -o-transform: skewx(0deg);
    -moz-transform: skewx(0deg);
    -webkit-transform: skewx(0deg);
    left: -150px;
  }

  99% {
    transform: skewx(-25deg);
    -o-transform: skewx(-25deg);
    -moz-transform: skewx(-25deg);
    -webkit-transform: skewx(-25deg);
    left: 50px;
  }
}
</style>
<script lang="ts" setup>
import {onMounted, ref} from 'vue';

let dialogModel = ref({
  name: '小满社圈',
  indexImg: 'https://pans.ahuaaa.cn/docsimg/works/xiaomantongcheng-wx.jpg',
  desc: '随时随地发现本地新鲜事。社区圈子论坛系统',
  img: [
    'https://pans.ahuaaa.cn/docsimg/works/xiaomantongcheng-wx.jpg'
  ],
  tag: ['同城', '社区', '圈子'],
  openSource: false,
  github: '',
  gitee: '',
  uniapp: '',
  link: '',
});
const openDialog = (item) => {
  dialogModel = item;
  console.log(dialogModel)
  dialogVisible.value = true;
};

function shuffleArray(array) {
  const firstFive = array.slice(0, 7);
  const remaining = array.slice(6);

  for (let i = firstFive.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [firstFive[i], firstFive[j]] = [firstFive[j], firstFive[i]];
  }

  for (let i = remaining.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
  }

  return firstFive.concat(remaining);
}

onMounted(() => {
  WorkList.value = shuffleArray(WorkList.value);
});
const dialogVisible = ref(false);
const WorkList = ref([{
  name: '黑点云DIY商城',
  indexImg: 'https://cdn.nlark.com/yuque/0/2025/png/280373/1737019652652-assets/web-upload/76653a50-d783-48a4-bbfd-c6d7d5747023.png',
  link: 'https://www.heiedvip.cn/',
},{
  name: '小满社圈',
  indexImg: 'https://cdn.nlark.com/yuque/0/2025/jpeg/280373/1737018360779-assets/web-upload/6a0af511-3427-4e2d-bed1-9559b9e6d2de.jpeg',
  link: 'https://modules.buildadmin.com/xmsns',
},{
  name: '曹哈哈',
  indexImg: 'https://cdn.nlark.com/yuque/0/2025/png/280373/1737018832829-assets/web-upload/f6d8d6c3-e2e9-457b-af58-ef063d67bfba.png',
  link: 'https://usky.icu/',
},{
  name: '兔兔答题智慧教育',
  indexImg: 'https://cdn.nlark.com/yuque/0/2025/png/280373/1737019147275-assets/web-upload/4b8ae213-154e-4247-bd0c-efbff49df463.png',
  link: 'https://www.tutudati.com/',
},{
  name: '云晨科技',
  indexImg: 'https://cdn.nlark.com/yuque/0/2025/png/280373/1737118654575-assets/web-upload/8c6c88f5-0dd1-431d-9866-e00111758a04.png',
  link: 'https://yunchencloud.cn',
},{
  name: '敬请期待',
  indexImg: 'https://cdn.nlark.com/yuque/0/2022/png/280373/1650775204656-assets/web-upload/5eb9b0a9-19a6-4ecd-a380-177433e134a6.png',
  link: 'https://vue2.tuniaokj.com/',
},]);
</script>