<template>
	<view>
		<view class="head">
			<view class="person-message">
					<image  class="avatar" src="/static/image/u25.png" mode=""></image>
				<view class="nick-name" >
					<view class="nick fz32">
						会员昵称
					</view>
					<view class="member fz28">
						普通会员
					</view>
					<view class="ID fz24">
						ID：668
					</view>
				</view>
				<view class="setting" @tap="personalSetting()">
					<image src="/static/image/u25.png" mode=""></image>
					<view style="color: #fff;">
						设置
					</view>
				</view>
			</view>
			<view class="power">
				<view v-for="(item,index) in list4" :class="item.class" @tap="power(item.class)">
					<view>
						{{item.title}}
					</view>
					<view>
						{{item.num}}
					</view>
				</view>
			</view>
			<view class="order">
				<view @tap="orderList(index)"  class="order-item" v-for="(item,index) in list">
					<image :src="item.imgSrc" mode=""></image>
					<view class="order-item-title fz28">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
		<view class="my-service">
			<view class="my-service-title">
				我的服务
			</view>
			<view class="my-services">
			<view class="order-item" v-for="(item,index) in list2" @tap="takeService(index)">
					<view class="order-item-img">
						<image :src="item.imgSrc" mode=""></image>
					</view>
				<view class="order-item-title fz28">
					{{item.title}}
				</view>
			</view>
			</view>
		</view>
		<view class="my-service">
			<view class="my-service-title">
				帮助中心
			</view>
			<view class="help"  v-for="(item, index) in list3" @tap="helpCenter(index)">
				<image :src="item.imgSrc" mode=""></image>
				<view class="help-item">
					{{item.title}}
				</view>
				<image class="help-img" src="/static/image/u96.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected:2,
				list:[
					{imgSrc:"/static/image/u25.png",title:"待付款"},
					{imgSrc:"/static/image/u64.png",title:"代发货"},
					{imgSrc:"/static/image/u25.png",title:"待收货"},
					{imgSrc:"/static/image/u64.png",title:"退款/售后"},
					{imgSrc:"/static/image/u25.png",title:"已完成"},
				],
				list2:[
					{imgSrc:"/static/image/u60.png",title:"我的收藏"},
					{imgSrc:"/static/image/u64.png",title:"浏览历史"},
					{imgSrc:"/static/image/u60.png",title:"我的评论"},
					{imgSrc:"/static/image/u64.png",title:"我的资质"},
					{imgSrc:"/static/image/u60.png",title:"收货地址"},
					{imgSrc:"/static/image/u64.png",title:"开发票"},
					{imgSrc:"/static/image/u60.png",title:"客服联系"},
					{imgSrc:"/static/image/u64.png",title:"商务顾问"},
				],
				list3:[
					{imgSrc:'/static/image/u25.png',title:"我的采购与顾问"},
					{imgSrc:'/static/image/u25.png',title:"帮助与反馈"},
					{imgSrc:'/static/image/u25.png',title:"新手与指引"}
				],
				list4:[
					{class:'coupon',num:2,title:'优惠券'},
					{class:'integral',num:5,title:'积分'},
					{class:'balance',num:1,title:'余额'},
					]
			}
		},
		methods: {
			orderList(index){
				console.log(index);
				uni.navigateTo({
					url:`/pagesJbx/orderList/orderList?type=${index}`
				})
			},
			personalSetting(){
				uni.navigateTo({
					url:'/pagesJbx/personalInfo/personalInfo'
				})
			},
			takeService(index){
				let arr = [
					'/pagesJbx/browsingHistory/browsingHistory?type=0',
					'/pagesJbx/browsingHistory/browsingHistory?type=1',
					'/pagesJbx/myAssessment/myAssessment',
					'/pagesJbx/qualificationPeriod/qualificationPeriod',
					'/pagesJbx/harvestAddress/harvestAddress',
					'/pagesJbx/invoiceSetting/invoiceSetting',
					'/pagesJbx/invoiceSetting/invoiceSetting',
					'/pagesJbx/businessConsultant/businessConsultant',
				]
				uni.navigateTo({
					url:arr[index]
				})
			},
			power(info){
				uni.navigateTo({
					url:`/pagesJbx/${info}/${info}`
				})
			},
			helpCenter(index){
				console.log(index);
				let arr = [
					'/pagesJbx/procurementConsultant/procurementConsultant',
					'/pagesJbx/suggestion/suggestion',
					'/pagesJbx/companyProfile/companyProfile?page=帮助与指引',
				]
				uni.navigateTo({
					url:arr[index]
				})
				
			}
		}
	}
</script>

<style lang="scss">
	.help{
		display: flex;
		image{
			width: 15px;
			height: 15px;
			margin-top: 10px;
			margin-left: 25px;
			margin-bottom: 10px;
			margin-right: 10px;
		}
		.help-item{
			border-bottom: 2px solid rgba(249, 249, 249, 1);
			line-height: 35px;
			height: 45px;
			text-align: left;
			flex:1;
		}
		.help-img{
			
		}
	}
	.head{
		background-color: #009b4c;
		.person-message{
			display: flex;
			justify-content: space-between;
			.avatar{
				margin: 20px;
				width: 70px;
				height: 70px;	
			}
			.nick-name{
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				color: #fff;
				.nick{
					margin-bottom: 5px;
				}
				.member{
					margin-bottom: 5px;
				}
				.ID{
				}
			}
			.setting{
				margin-right: 40rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-left: 200rpx;
				image{
					width: 22px;
					height: 22px;
				}
			}
		}
		.power{
			display: flex;
			color: #fff;
			text-align: center;
			height: 60px;
			margin-bottom: 10px;
			.coupon{
				border-right: 2px solid #fff;
				flex:1;
				view{
					margin-bottom: 10px;
				}
			}
			.integral{
				border-right: 2px solid #fff;
				flex:1;
				view{
					margin-bottom: 10px;
				}
			}
			.balance{
				flex:1;
				view{
					margin-bottom: 10px;
				}
			}
		}
		.order{
			background-color: #fff;
			border-top-right-radius: 30px;
			border-top-left-radius: 30px;
			display: flex;
			height: 102px;
			.order-item{
				width: 20%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				image{

					width: 40px;
					height: 40px;
				}
				view{
					margin-top: 10px;
				}
			}
		}
		
	}
	.my-service{
		margin-top: 20px;
		background-color: #fff;
		padding-bottom: 20px;
		margin-bottom: 20px;
		.my-service-title{
			font-weight: 700;
			height: 30px;
			line-height: 35px;
			margin-left: 22px;
		}
		.my-services{
			display: flex;
			flex-wrap: wrap;
			height: 173px;
			.order-item{
				width: 20%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.order-item-img{
					background-color: #009b4c;
					border-radius: 50%;
					width: 40px;
					height: 40px;
					text-align: center;
					image{
						display: inline-block;
						width: 30px;
						height: 30px;
						margin-top: 5px;
					}
				}
				
				view{
					margin-top: 10px;
				}
			}
		}
	}
	

</style>
