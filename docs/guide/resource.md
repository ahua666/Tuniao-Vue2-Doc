### 图片资源

我们会在这里为您提供一些跟Tuniao UI设计相关的资源和设计工具的下载，更多设计资源正在整理和完善中。

### 资源下载

这里我们提供素材文档，您可以根据需要进行下载。

<div class="cards">
    <ul class="container">   
        <li >
            <div class="card">
                <img src="../.vitepress/public/common/logo/logo.png" alt="">
                <h3>Tuniao</h3>
                <p>点击前往语雀素材库</p>
                <a href="https://www.yuque.com/tuniao/sucai" target="_blank">前 往</a>
            </div>
        </li>
    </ul>
</div>


<style lang="scss">
	.card {
		background: #fbfcfd;
		height: 204px;
		text-align: center;
        width: 308px;
	}

	.card h4 {
		font-size: 18px;
		color: #1f2d3d;
		font-weight: 400;
		margin: 0
	}

	.card span {
		font-size: 14px;
		color: #99a9bf
    }
    
    .card {
		height: 394px;
		width: 100%;
		background: var(--vp-resource-card-bg);
		border: 1px solid #eaeefb;
		border-radius: 5px;
		box-sizing: border-box;
		text-align: center;
		position: relative;
		transition: bottom .3s;
        bottom: 0;
        transition: box-shadow .3s;
    }
    
    .card:hover {
        box-shadow: 0 3px 5px -4px rgba(0,0,0,.12), 0 4px 12px 0 rgba(0,0,0,.08), 0 9px 24px 6px rgba(0,0,0,.05);
    }

	.card img {
		margin: 40px auto 35px;
        height: 100px;
        width: 100px
	}

	.card h3 {
		margin: 0 0 10px;
		font-size: 18px;
		color: var(--vp-resource-card-h3);
		font-weight: 400;
		height: 22px
	}

	.card p {
		font-size: 14px;
		color: #99a9bf;
		padding: 0 30px;
		margin: 0;
		word-break: break-all;
		line-height: 1.8
	}

	.card a {
		height: 42px;
		width: 190px;
		display: inline-block;
		line-height: 42px;
		font-size: 14px;
		background-color: #409eff;
		color: #fff;
		text-align: center;
		border: 0;
		padding: 0;
		cursor: pointer;
		border-radius: 2px;
		transition: all .3s;
		text-decoration: none;
        margin-top: 20px;
        transition: opacity 0.3s;
    }

    .card a:hover {
        opacity: 0.75;
    }
    
    .cards {
		margin: 0px 0 70px
        
	}

	.cards .container {
		padding: 0;
		margin: 0 -11px;
		width: auto
	}

	.cards .container:after,
	.cards .container:before {
		display: table;
		content: ""
	}

	.cards .container:after {
		clear: both
	}

	.cards li {
        width: 308px;
		/*width: 28%;*/
		padding: 0 19px;
		box-sizing: border-box;
		float: left;
		list-style: none;
        margin-top: 30px;
	}

	@media (max-width:850px) {
		.cards li {
			max-width: 500px;
			float: none;
			margin: 10px auto 30px;
			width: 80%
		}

		.cards li .card {
			height: auto;
			padding-bottom: 20px
		}

		.cards h3 {
			height: auto
		}
	}
</style>
