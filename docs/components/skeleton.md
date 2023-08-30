## Skeleton 骨架屏 <to-api/>

<demo-model url="/componentsPage/skeleton/skeleton"></demo-model>


骨架屏一般用于页面在请求远程数据尚未完成时，页面用灰色块预显示本来的页面结构，给用户更好的体验。  


### 平台差异说明

|  App   |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :----: | :--: | :--------: | :----------: | :--------: | :--------: | :------: |
| √ |  √   |     √      |    兼容中    |   兼容中   |   兼容中   |  兼容中  |


### 基本使用 
```vue

<template>
  <view class="news tn-skeleton">
    <block v-for="(item, index) in list" :key="index">
      <view class="news__item tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-top">
        <view class="news__item__info tn-flex tn-flex-direction-row tn-flex-row-center tn-flex-col-center">
          <view class="news__item__avatar tn-skeleton-circle">
            <image :src="item.userInfo.avatar"></image>
          </view>
          <view class="news__item__outline tn-flex tn-flex-direction-column tn-flex-col-top tn-flex-row-around">
            <view class="news__item__nick-name tn-skeleton-fillet">{{ item.userInfo.nickName}}</view>
            <view class="news__item__release-date tn-skeleton-fillet">{{ item.content.releaseDate }}</view>
          </view>
        </view>
        <view class="news__item__content tn-flex tn-flex-direction-row tn-flex-col-top tn-flex-row-center">
          <view class="news__item__content__data">
            <view class="news__item__title tn-text-ellipsis tn-skeleton-fillet">{{ item.content.title }}</view>
            <view class="news__item__desc tn-text-ellipsis-2 tn-skeleton-fillet">{{ item.content.desc }}</view>
          </view>
          <view class="news__item__main-image tn-skeleton-rect">
            <image :src="item.content.mainImage" mode="aspectFill"></image>
          </view>
        </view>
      </view>
    </block>
  </view>
  <!-- 引用组件 -->
  <tn-skeleton :show="showSkeleton"></tn-skeleton>

</template>
<script>
  export default {
    data() {
      return {
        showSkeleton: true,
        list: [
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          },
          {
            userInfo: {
              avatar: 'https://tnuiimage.tnkjapp.com/avatar/xiaomai1.jpg',
              nickName: '图鸟科技-北北'
            },
            content: {
              title: '全新UI框架，tuniaoUI正式发布',
              desc: '基于uniapp开发的UI框架，tuniaoUI现已正式发布，该UI最大的特点就是酷炫，相对于传统的UI框架，不仅仅提供了组件方便用户进行使用同时提供了酷炫的页面模板，让用户直接使用模板就可以做出精美的页面',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              releaseDate: '2020年12月30日'
            }
          }
        ],
      }
    },
    onLoad() {
      // 模拟加载数据完毕
      setTimeout(() => {
        this.showSkeleton = false
      }, 3000)
    }
  }
</script>
```
