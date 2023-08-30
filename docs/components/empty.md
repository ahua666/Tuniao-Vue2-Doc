## Empty 内容为空 <to-api/>

<demo-model url="/componentsPage/empty/empty"></demo-model>


该组件用于需要加载内容，但是加载的第一页数据就为空，提示一个"没有内容"的场景，
我们精心挑选了十几个场景的图标，方便您使用。

### 平台差异说明

| App | H5 | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
|:---:|:--:|:-----:|:------:|:-----:|:-----:|:-----:|
|  √  | √  |   √   |  兼容中   |  兼容中  |  兼容中  |  兼容中  |


### 基本使用

:::tip 提示
我们的专业设计师精心为您准备了一套精美默认图，带有图片和`Sketch`文件，您可以下载或修改后再使用：[资源下载](resource.md)
:::

- 通过`text`参数配置提示的文字内容
- 通过`mode`(默认为`data`)参数配置要显示的图标

```html
 <tn-empty mode="cart"></tn-empty>
```

### 内置图标

这些图标已内置，直接通过`mode`参数引用即可


| 名称		       | 说明					   |
|:-----------|:----------|
| cart		     | 购物车为空				 |
| page		     | 页面不存在				 |
| search	    | 搜索结果为空			 |
| address	   | 地址为空			   |
| network	   | 网络不通				  |
| order		    | 订单为空				  |
| order	     | 订单为空				  |
| coupon	    | 优惠券为空				 |
| favor      | 暂无收藏				  |
| permission | 无权限				   |
| history	   | 历史记录为空			 |
| message	   | 暂无消息			   |
| list		     | 列表为空			   |
| data		     | 暂无数据	     |
| comment    | 暂无评论	     |


### API

### Props

| 参数		        | 说明			                  | 类型					     | 默认值		  | 可选值	    |
|:------------|:-----------------------|:------------|:-------|:--------|
| icon		      | 内置图标名称，或图片路径，建议绝对路径	   | String				  | -			   | -			    |
| text		      | 提示文字								           | String				  | -			   | -			    |
| textColor	  | 文字颜色								           | String				  | -	     | -			    |
| textSize	   | 文字大小，单位rpx						       | Number	     | 0		    | -			    |
| iconColor	  | 图标的颜色								          | String				  | -	     | -			    |
| iconSize	   | 图标的大小,单位rpx						      | Number	     | 0		    | -			    |
| mode		      | 预置图标类型，见上方说明					      | String				  | data		 | -			    |
| imgWidth	   | 图片宽度（当图标为图片时生效）单位rpx		 | Number	     | 0		    | -			    |
| imgHeight	  | 图片高度（当图标为图片时生效）单位rpx   | Number	     | 0		    | -			    |
| show		      | 显示空白页         						   | Boolean				 | true		 | false		 |
| customStyle | 自定义组件样式	    	          | Object	     | -		    | -			    |
### Slot

| 名称 | 说明              |
|----|-----------------|
| -  | 给组件底部传入`slot`内容 |


<style scoped>
h3[id=内置图标] + p + table thead tr th:nth-child(2){
	width: 50%;
}
</style>
