## 演示
Tuniao UI会将各个版本的演示在此展示，目前演示的版本有H5，微信小程序，其他版本的演示将会陆续添加。  
<br>

## 使用方法

- H5版本可以用微信或者手机浏览器扫描二维码即可
- 微信小程序只能通过微信扫码查看

<br>

## 说明

文档中也有相应的演示示例，但它是通过`iframe`嵌入到网页的，所以可能会造成某些uni-appAPI在网页上(
浏览器F12手机调试模式无问题)无法使用，造成组件有BUG的错觉。

**注意：** 建议您只在浏览文档时使用文档右侧的演示功能，电脑示例由于分辨率和uni-app用`rpx`
单位的问题，显示可能会不够细致，请通过微信扫码小程序体验最佳的效果。

<br>
<br>
<br>

## 扫码

<div class="demo-wrap row">
    <div class="col-md-12 col-sm-6 col-xs-12">
		<div class="demo-item">
			<img src="../.vitepress/public/common/tuniao_h5.png" />
			<div class="platform-name">
				TuniaoUI H5
				<p class="platform-tips">微信或浏览器扫码</p>
			</div>
		</div>
	</div>
    <div class="col-md-3 col-sm-6 col-xs-12">
		<div class="demo-item">
			<img src="../.vitepress/public/common/xcx2.jpg" />
			<div class="platform-name">
				Tuniao圈子
				<p class="platform-tips">只能微信扫码</p>
			</div>
		</div>
	</div>
    <div class="col-md-3 col-sm-6 col-xs-12">
		<div class="demo-item">
			<img src="../.vitepress/public/common/xcx3.jpg" />
			<div class="platform-name">
				Tuniao Vue3
				<p class="platform-tips">只能微信扫码</p>
			</div>
		</div>
	</div>
    <div class="col-md-3 col-sm-6 col-xs-12">
		<div class="demo-item">
			<img src="../.vitepress/public/common/xcx4.jpg" />
			<div class="platform-name">
				Tuniao 商圈
				<p class="platform-tips">只能微信扫码</p>
			</div>
		</div>
	</div>
    <div class="col-md-3 col-sm-6 col-xs-12">
		<div class="demo-item">
			<img src="../.vitepress/public/common/weixin_qrcode.jpg" />
			<div class="platform-name">
				TuniaoUI
				<p class="platform-tips">只能微信扫码</p>
			</div>
		</div>
	</div>
    <div class="col-md-3 col-sm-6 col-xs-12">
		<div class="demo-item">
			<img src="../.vitepress/public/common/xcx6.jpg" />
			<div class="platform-name">
				Tuniao 壁纸
				<p class="platform-tips">只能微信扫码</p>
			</div>
		</div>
	</div>
<div class="col-md-3 col-sm-6 col-xs-12">
		<div class="demo-item">
			<img src="../.vitepress/public/common/xcx7.jpg" />
			<div class="platform-name">
				Tuniao 奶茶
				<p class="platform-tips">只能微信扫码</p>
			</div>
		</div>
	</div>
<div class="col-md-3 col-sm-6 col-xs-12">
		<div class="demo-item">
			<img src="../.vitepress/public/common/xcx8.jpg" />
			<div class="platform-name">
				Tuniao 官网
				<p class="platform-tips">只能微信扫码</p>
			</div>
		</div>
	</div>
<div class="col-md-3 col-sm-6 col-xs-12">
		<div class="demo-item">
			<img src="../.vitepress/public/common/xcx9.jpg" />
			<div class="platform-name">
				Tuniao 小商店
				<p class="platform-tips">只能微信扫码</p>
			</div>
		</div>
	</div>

</div>


<style scoped>
	.demo-item {
		text-align: center;
		border: 1px solid #eaeefb;
		border-radius: 5px;
		-webkit-transition: bottom 0.4s;
		transition: bottom 0.4s;
		position: relative;
		bottom: 0;
		margin: 1.5rem;
		padding: 2rem 0;
	}
	
	.demo-item:hover {
	    bottom: 6px;
	    box-shadow: 0 6px 18px 0 rgba(232, 237, 250, .5);
	}
	
	.demo-item img {
		width: 160px;
		margin: auto;
	}
	
	.demo-item .platform-name {
		color: #606266;
		font-size: 18px;
		position: relative;
		margin: 20px 0;
	}
	
	.demo-item .platform-tips {
		text-align: center;
		position: absolute;
		font-size: 14px;
		bottom: -50px;
		left: auto;
		width: 100%;
		right: auto;
		color: #909399;
	}
</style>
