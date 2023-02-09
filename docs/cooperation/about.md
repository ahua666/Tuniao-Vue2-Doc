### 交流反馈

Tuniao为采用[apache](https://baike.baidu.com/item/apache/6848636?fromModule=search-result_lemma)许可证的开源项目，使用完全免费。欢迎加微信群交流反馈，一起学习，共同进步。

<qq-group></qq-group>

### 图鸟负责人
<team-member-item v-for="(item, index) in TitleList" :key="index+20" :list="item"></team-member-item>


### 研发团队
以下为TuniaoUI研发团队，排名不分先后：

<team-member-item v-for="(item, index) in memberList" :key="index" :list="item"></team-member-item>



### Github贡献名单

<br>
<github-contribution-list repo="tuniaoUI"></github-contribution-list>


### 文档

TuniaoUI的文档，力求不留死角，把所有可能需要注意的地方，都详细列出。TuniaoUI的文档经得起推敲，受得住考验。
::: tip 鸣谢
感谢所有小伙伴们的付出，感谢所有TuniaoUI使用者对Tuniao提出的每一个宝贵意见帮助我们更加完善，更加符合用户需求。
:::
<br>

### 捐赠TuniaoUI的研发

[//]: # (<donation></donation>)

<br>

### 赞助商

TuniaoUI拥有众多用户，且文档详尽，经得起推敲，受得住考验，官方网站每天有数万IP访问量，如果您认为这些有助于您公司的业务推广，可以成为TuniaoUI的赞助商， 我们会在适当的位置展示您的推广内容。

赞助请联系微信(注明赞助)：tnkewo



<script>
	export default {
		data() {
			return {
                TitleList:[
                    {
                        avatar: '/common/kewohuixiang.jpg',
						name: '可我会像',
						job: '全栈开发',
						addr: '广东广州',
						duty: '负责产品经理、前端开发等工作',
						intro: '图鸟背锅侠',
                        gitee: 'https://gitee.com/kewohuixiang'
                    }
                ],
				memberList: [
					{
						avatar: '/common/xxstar.jpg',
						name: '星星Star',
						job: '全栈开发',
						addr: '湖南常德',
						duty: '负责TuniaoUI核心组件研发，维护与升级，文档维护等工作',
						intro: '丰富的开发经验:物联网、B端等。技术栈：PHP、node.js、java、C#、vue、逆向，渗透等',
                        link:  'https://blog.ahuaaa.cn/',
                        github: 'https://github.com/ahua666',
                        gitee: 'https://gitee.com/ahuaaa'
					},
					{
						avatar: '/common/Jaylen.jpg',
						name: 'Jaylen',
						job: '全栈开发',
						addr: '广东广州',
						duty: '负责TuniaoUI技术架构与实施，组织架构设计与升级优化等工作',
						intro: '丰富的嵌入式、C端开发经验。Java、PHP、C、vue2/3、uniapp等'
					},{
						avatar: '/common/yuanyuan.jpg',
						name: '圆圆',
						job: '高级设计师',
						addr: '广东广州',
						duty: '负责UI设计、客户咨询',
						intro: '肥姑妈、sketch、即时设计、PS、Ai、Axure、墨刀、xiaopiu等'
					},{
						avatar: '/common/buxuxiongwo.jpg',
						name: '不许凶我',
						job: '高级设计师',
						addr: '浙江杭州',
						duty: '负责UI设计、与产品经理沟通交互体验设计',
						intro: '设计工具：PS、Ai、肥姑妈、AE、搅拌机、C4D等'
					},{
						avatar: '/common/LEELAA.jpg',
						name: 'LEELAA',
						job: '高级前端开发',
						addr: '江苏苏州',
						duty: '负责前端开发、云开发',
						intro: '8年前端开发经验。丰富的B端C端开发经验。vue2/3、react、svelte、vite、uniapp、trao、node.js等'
					},{
						avatar: '/common/hanlele.jpg',
						name: '韩乐乐',
						job: '高级项目经理',
						addr: '广东佛山',
						duty: '负责项目实施统筹、运营推广等工作',
						intro: '互联网连续创业者，拥有丰富的saas系统、erp系统、外卖点餐商业项目运营经验，资源整合能力强'
					},{
						avatar: '/common/tu.jpg',
						name: '弃续',
						job: '前端开发',
						addr: '广东广州',
						duty: '负责TuniaoUI核心组件研发，维护与升级，技术支持等工作',
						intro: '后端转前端、有一定的开发逻辑经验。PHP、vue、uniapp、uniCloud等'
					}
				],
                
			}
		}
	}
</script>


<style scoped>
.page {
	width: 500px;
}

.col-box {
	text-align: center;
}

</style>

