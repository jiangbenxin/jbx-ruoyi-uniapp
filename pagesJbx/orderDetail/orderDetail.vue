<template>
	<view>
		<view>
			<pageBar info="订单详情" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
			<scroll-view scroll-y="true" :style="{height: `calc(100vh - ${theScrollerHeight}rpx)`}">
				<view class="header">
						<image class="header-logo" src="/static/image/u25.png" mode=""></image>
						<view class="header-main" >
							<view class="header-main-title">
								云南中正方达药业有限公司
							</view>
							<view class="header-main-info" @tap="infoSetting()">
								<text>商家地址/证件资质/经营范围</text>
								<image class="header-main-info-icon" src="/static/image/u25.png" mode=""></image>
							</view>
						</view>
					</view>
					
					<view class="container">
						<view class="address">
								<view class="address-title">
									<view class="title">
										<view class="red-border"></view>
										收获地址
									</view>
								</view>
								<view class="address-info">
									<image class="address-img" src="/static/image/u25.png" mode=""></image>
									<view class="user-info">
										<view class="name-and-phone">
											<text class="fz26">李某某</text>
											<text class="fz22A">13277433802</text>
											<view class="fz26 dtl">
												云南省昆明市西山区某某街道66号
											</view>
										</view>
									</view>
								</view>
							</view>
						<view class="logistics">
							<view class="hd">
								<view class="hd-top" >
									<image class="logistics-img" src="/static/image/u25.png" mode=""></image>
									<text class="left-info">{{type==2?'包裹已寄出':'包裹未寄出'}}</text>
									<view class="right-info" @click="pop2()">
										<text class="info2">{{type==2?'查看物流':'待支付'}}</text>
										<image v-if="type===2" class="img" src="/static/image/u25.png" mode=""></image>
									</view>
								</view>
								<view class="hd-bottom fz22A">
									(中通快递) 单号：49494646464 <text class="copy">复制</text>
								</view>
							</view>
							<view class="bd">
								<image class="left" src="/static/image/u25.png" mode=""></image>
								<view class="center">
									<view class="product-name">
										产品名称
									</view>
									<view class="specification fz28A">
										规格：1盒
									</view>
								</view>
								<view class="right">
									<view class="price  fz28A">
										￥196
									</view>
									<view class="num  fz28A">
										X 1
									</view>
								</view>
							</view>
							<view class="ft fz26A">
								<view class="ft-btn" @tap="goPage()">
									申请售后
								</view>
							</view>
						</view>
						<view class="order-amount">
							<view class="address-title">
								<view class="title">
									<view class="red-border"></view>
									订单金额
								</view>
							</view>
							<view class="amounts">
								<view class="amount" v-for="(item,index) in list">
									<text class="name fz22">
										{{item.title}}
									</text>
									<text class="num fz22">
										￥{{item.num}}
									</text>
								</view>
							</view>
							
						</view>
						<view class="footer">
							<view class="address-title">
								<view class="title">
									<view class="red-border"></view>
									订单信息
								</view>
							</view>
							<view class="order-info">
								<view class="info" v-for="(item,index) in list2"> 
									<text class="fz22" style="margin-right: 20rpx;">{{item.title}}:</text>   
									<text class="fz22A"> &nbsp; {{item.info}}</text>
								</view>
							</view>
						</view>
						<button v-if="type===0" class="login-btn danger">
							立即支付
						</button>
						<button v-if="type===0||type===1" class="login-btn">
							电话联系
						</button>
					</view>
			</scroll-view>
			<logisticsDetails :show.sync="show"></logisticsDetails>
			</view>
	</view>
</template>

<script>
	import logisticsDetails from '../components/logisticsDetails/logisticsDetails'
	export default {
		components:{
			logisticsDetails
		},
		data() {
			return {
				theScrollerHeight:getApp().globalData.navHeight,
				show:false,
				list:[
					{title:'商品金额',num:169},
					{title:'运费',num:0},
					{title:'订单总价',num:169},
					{title:'实付款',num:169},
				],
				list2:[
					{title:'配送方式',info:' 快递配送'},
					{title:'付款方式',info:' 微信支付'},
					{title:'订单编号',info:12651564895125612},
					{title:'创建时间',info:' 2022-11-20  16:20:19'},
				],
				type:2,
				list3:[
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，'},
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，'},
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，'},
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，'},
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，'},
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，'},
				]
			}
		},
		methods: {
			infoSetting(){
				
			},
			pop2(){
				if(this.type ===2){
					this.show = !this.show
				}
			},
			goPage(){
				uni.navigateTo({
					url:'/pagesJbx/applySaleService/applySaleService'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pop-title{
		height: 80rpx;
		text-align: center;
		color: #fff;
		background-color: #009b4c;
		line-height: 80rpx;
		margin-bottom: 40rpx;
	}
	.logistics-msg{
		display: flex;
		.logistics-right{
			height: 150rpx;
			.message{
				flex: 1;
				padding: 10rpx;
			}
		}
		.logistics-left{
			.date{
				width: 160rpx;
				text-align: center;
				height: 150rpx;
				line-height: 150rpx;
				padding: 0 20rpx;
				position: relative;
				border-right: 4rpx solid #f2f2f2;
				.red-round{
					width: 16rpx;
					height: 16rpx;
					background-color: #ec808d;
					position: absolute;
					top: 0rpx;
					right: -10rpx;
					border-radius: 8rpx;
				}
			}
		}
		
		
	}
	.danger{
		background-color: #ec808d;
	}
	.address-title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10rpx;
		padding: 20rpx 40rpx;
		border-bottom: 4rpx solid #f5f5f5;
		.title{
			position: relative;
			font-size: 36rpx;
			.red-border{
				width: 4rpx;
				height: 30rpx;
				position: absolute;
				left:-10rpx;
				top:4rpx;
				background-color: #d9001b;
			}
		}
	}
.header{
		display: flex;
		align-items: center;
		background-color: #009b4c;
		color: #fff;
		.header-logo{
			margin: 30rpx;
			width: 120rpx;
			height: 120rpx;
		}
		.header-main{
			flex: 1;
			padding-right: 40rpx;
			.header-main-title{
				font-size: 36rpx;
				margin-bottom: 10rpx;
			}
			.header-main-info{
				flex: 1;
				display: flex;
				justify-content: space-between;
				font-size: 26rpx;
				.header-main-info-icon{
						width: 28rpx;
						height: 28rpx;
				}
			}
		}
		
	}
.container{
	padding: 20rpx;
	.address{
		border-radius: 40rpx;
		background-color: #fff;
		.address-info{
			display: flex;
			padding: 10rpx 20rpx;
			align-items: center;
			.address-img{
				width: 40rpx;
				height: 40rpx;
				margin-right: 20rpx;
			}
			.user-info{
				.name-and-phone{
					.dtl{
						margin-top: 20rpx;
						margin-bottom: 20rpx;
					}
				}
			}
		}
	}
	.logistics{
		background-color: #fff;
		border-radius: 40rpx;
		padding: 30rpx;
		margin-top: 20rpx;
		.hd{
			border-bottom: 2rpx solid #f5f5f5;
			padding-bottom: 10rpx;
			.hd-top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.logistics-img{
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
				}
				.left-info{
					flex: 1;
				}
				.right-info{
					display: flex;
					align-items: center;
					.info2{
						color: #009B4C;
						margin-right: 20rpx;
						margin-top: rpx;
					}
					.img{
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
			.hd-bottom{
				margin-left: 60rpx;
				margin-top: 10rpx;
				.copy{
					color: #009B4C;
					margin-left: 20rpx;
				}
			}
		}
		.bd{
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			.left{
				width: 120rpx;
				height: 120rpx;
			}
			.center{
				flex: 1;
				margin-left: 20rpx;
				.product-name{
					
				}
				.specification{
					margin-top: 40rpx;
				}
			}
			.right{
				.price{
					
				}
				.num{
					margin-top: 40rpx;
				}
			}
		}
		.ft{
			text-align: right;
			.ft-btn{
				display: inline-block;
				width: 160rpx;
				height: 60rpx;
				border-radius: 60rpx;
				border: 2rpx solid #aaaaa7;
				text-align: center;
				line-height: 60rpx;
			}
		}
	}
	.order-amount{
		background-color: #fff;
		border-radius: 40rpx;
		margin-top: 20rpx;
		.amounts{
			padding: 15rpx 40rpx;
			.amount{
				display: flex;
				justify-content: space-between;
				.name{
					margin-bottom: 10rpx;
				}
			}
			.amount:last-child{
				.num{
					color: #d9001b;
				}
			}
		}
		
	}
	.footer{
		background-color: #fff;
		border-radius: 40rpx;
		margin-top: 20rpx;
		.order-info{
			padding: 0rpx 40rpx 20rpx 40rpx;
			.info{
				
			}
		}
	}
	
}
</style>

