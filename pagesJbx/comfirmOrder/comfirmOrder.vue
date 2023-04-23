<template>
	<view class="wrapper">
		<pageBar info="确认订单" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000" :fontSize="13"></pageBar>
		<scroll-view scroll-y="true" :style="{height: `calc(100vh - ${theScrollerHeight}rpx - 120rpx)`}">
			<view class="header">
				<view class="header-red-border">
				</view>
				<view class="header-address">
					<text>我的收货地址</text>
					<text class="modify-address fz26" @tap="goPage()">修改地址</text>
				</view>
				<view class="header-personal-address fz28">
					<image class="personal-img" src="/static/image/u25.png" mode=""></image>
					<text>
						此处为认证时所上传药品经营许可证地址，不支持修改
					</text>
				</view>
				<view class="header-personal-address fz28">
					<image class="personal-img" src="/static/image/u25.png" mode=""></image>
					<text class="">
						李某某/15555555555
					</text>
				</view>
			</view>
			<view class="main">
				<view class="main-title">
					<image class="main-title-img" src="/static/image/u25.png" mode=""></image>
					<text class="main-title-name">
						中正方达
					</text>
				</view>
				<view class="main-product">
						<image class="main-product-left" src="/static/image/u25.png" mode=""></image>
						<view class="main-product-center">
							<view class="product-name">
								产品名称
							</view>
							<view class="specification fz28A">
								规格：1盒
							</view>
						</view>
						<view class="main-product-right">
							<view class="price  fz28A">
								￥196
							</view>
							<view class="num  fz28A">
								X 1
							</view>
						</view>
				</view>
				<view class="product-info fz26">
					<view class="">
						商品金额
					</view>
					<view class="fz26A">
						￥169
					</view>
				</view>
				<view class="product-info fz26">
					<view class="">
						优惠券
					</view>
					<view class="fz26A" @tap="show = !show">
						{{cheap===false?'未选择':cheap}}<image class="img" src="/static/image/u96.png" mode=""></image>
					</view>
				</view>
				<view class="product-info fz26">
					<view class="">
						运费
					</view>
					<view class="fz26A">
						￥0
					</view>
				</view>
				<view class="product-info fz26">
					<view class="">
						买家留言
					</view>
					<input placeholder-class="pcs" class="buyer-ipt" type="text" value="" placeholder="请输入留言" />
				</view>
				<view class="product-info fz26">
					<view class="">
						开局发票
					</view>
						<switch class="invoice-switch" checked="true" @change="" />
				</view>
				<view class="all fz36">
					共1件商品<text class="all-text1">合计： <text class="all-text2"> <text class="fz22">￥</text>169 </text> </text>
				</view>
			</view>
			<view class="footer">
				<view class="red-border">
				</view>
				<view class="address">
					支付方式
				</view>
			<radio-group>
				<label class="mode-item" v-for="(item,index) in list2">
					<image class="mode-img" :src="item.imgSrc" mode=""></image>
					<view class="fz26 mode-title">{{item.title}}</view>
					<radio :checked="checked===item.checked"/>
				</label>
			</radio-group>
			</view>
			<view class="tab-height" ></view>
			<u-popup v-model="show" mode="bottom" :round="20">
			   <view class="pop-title">选择优惠券</view>
			   <view class="pop-info fz36">优惠券名称</view>
			   <view class="pop-price fz26">￥10</view>
			   <view class="pop-footer">
					<view class="pop-btn" @tap="takeTheap(false)">
						不选择优惠券
					</view>
					<view class="pop-btn pop-btn-bgc" @tap="takeTheap()">
						选择该优惠券
					</view>
			   </view>
			</u-popup>
		</scroll-view>
		<view class="confirm">
			<view class="right">
				支付
			</view>
		</view>
	</view>
</template>

<script>
	import myRadio from '../../pagesJbx/components/myRadio/myRadio.vue'
	export default {
		components:{
			myRadio
		},
		data() {
			return {
				theScrollerHeight:getApp().globalData.navHeight,
				cheap:false,
				show:false,
				checked:'0',
				list2:[
					{title:'微信支付',imgSrc:'/static/image/u35.png',checked:'0'},
					{title:'支付宝支付',imgSrc:'/static/image/u37.png',checked:'1'},
					{title:'余额支付',imgSrc:'/static/image/u59.png',checked:'2'},
					{title:'线下支付',imgSrc:'/static/image/u63.png',checked:'3'},
				]
			};
		},
		methods:{
			goPage(){
				let arr =[]
				arr.forEach((item,index)=>{
					
				})
				uni.navigateTo({
					url:'/pagesJbx/harvestAddress/harvestAddress'
				})
			},
			takeTheap(status){
				if(status==false){
						this.cheap = status
				}else{
					this.cheap = 2	
				}
				this.show = !this.show
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab-height{
		height: 120rpx;
	}
	.all-text1{
		margin-left: 40rpx;
	}
	.all-text1{
		color: crimson;
	}
	.my-scroll-view{
		height: 1200rpx;
	}
.pop-title{
	height: 100rpx;
	 line-height: 100rpx;
	 text-align: center;
	 font-size: 36rpx;
	 border-bottom: 2rpx solid #f2f2f2;
	}
	.pop-info{
		margin: 20rpx 40rpx;
		font-size: 30rpx;
	}
	.pop-price{
		margin: 0rpx 40rpx;
		color: #d9001b;
	}
	.pop-footer{
		display: flex;
		.pop-btn{
			flex: 1;
			height: 120rpx;
			text-align: center;
			line-height: 120rpx;
		}
		.pop-btn-bgc{
			background-color: #d9001b;color: #fff;
		}
		
	}
	.confirm{
		position: absolute;
		bottom: 0;
		width: 750rpx;
		background-color: #fff;
		height: 120rpx;
		text-align: right;
		color: #fff;
		.right{
			display: inline-block;
			width: 220rpx;
			height: 120rpx;
			text-align: center;
			line-height: 120rpx;
			background-color: #d9001b;
		}
	}
.pcs{
	font-size: 26rpx;
}
.header{
	margin-bottom: 30rpx;
	background-color: #fff;
	position: relative;
	padding: 30rpx 40rpx;
	.header-red-border{
		width: 4rpx;
		height: 30rpx;
		position: absolute;
		left: 30rpx;
		top:35rpx;
		background-color: #d9001b;
	}
	.header-address{
		display: flex;
		justify-content: space-between;
		.modify-address{
			color: #fff;
			background-color: #009b4c;
			width: 140rpx;
			height: 42rpx;
			line-height: 42rpx;
			text-align: center;
			border-radius: 10rpx;
		}
	}
	.title{
	}
	.company-name{
		margin-top: 20rpx;
	}
	.header-personal-address{
		display: flex;
		color: #333333;
		margin-top: 20rpx;
		.personal-img{
			width: 36rpx;
			height: 36rpx;
			margin-right: 20rpx;
		}
	}
}
.main{
	padding: 20rpx 40rpx;
	background-color: #fff;
	.main-title{
		display: flex;
		align-items: center;
		padding-bottom: 20rpx;
		.main-title-img{
			width: 42rpx;
			height: 42rpx;
			margin-right: 10rpx;
		}
		.main-title-name{
		}
	}
	.main-product{
		border-bottom: 4rpx solid #f5f5f5;
		border-top: 4rpx solid #f5f5f5;
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		margin-bottom: 20rpx;
		.main-product-left{
			width: 120rpx;
			height: 120rpx;
		}
		.main-product-center{
			flex: 1;
			.product-name{
				
			}
			.specification{
				margin-top: 40RPX;
			}
		}
		.main-product-right{
			.price{
				
			}
			.num{
				margin-top: 40RPX;
			}
		}
	}
}
.product-info{
	display: flex;
	height: 60rpx;
	justify-content: space-between;
	align-items: center;
	.img{
		width: 32rpx;
		height: 32rpx;
	}
	.buyer-ipt{
		margin-left: 20rpx;
		flex: 1;
	}
	.invoice-switch{
	}
	
}
.all{
	text-align: right;
	margin-top: 40rpx;
}
.footer{
	margin-bottom: 30rpx;
	margin-top: 30rpx;
	background-color: #fff;
	padding: 30rpx 40rpx;
	.red-border{
		width: 4rpx;
		height: 30rpx;
		position: absolute;
		left: 30rpx;
		top:35rpx;
		background-color: #d9001b;
	}
	.title{
	}
	.company-name{
		margin-top: 20rpx;
	}
	.header-personal-address{
		display: flex;
		color: #333333;
		margin-top: 20rpx;
		.personal-img{
			width: 36rpx;
			height: 36rpx;
			margin-right: 20rpx;
		}
	}
	.mode-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80rpx;
		border-top: 2rpx solid #f5f5f5;
		.mode-img{
			width: 32rpx;
			height: 32rpx;
		}
		.mode-title{
			margin-left: 20rpx;
			flex: 1;
		}
	}
}
</style>
