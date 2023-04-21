<template>
	<view>
		<pageBar info="商品结算" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000" :fontSize="13"></pageBar>
		<view class="container">
			<image class="container-success-img" src="/static/image/u25.png" mode=""></image>
			<view class="container-success-title">
				订单支付成功
			</view>
			<view class="container-success-price fz22">
				￥<text class="fz36">169</text>
			</view>
		</view>
		<view class="invoice">
			<view class="invoice-title fz26A">
				支付方式
			</view>
			<view class="the-invoice fz26">
				微信支付
			</view>
		</view>
		<view class="btn">
			<button class="back-btn" @tap="goPage('index')"> 返回首页</button>
			<button class="review-order" @tap="goPage()"> 查看订单</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goPage(page){
				if(page=='index'){
					uni.navigateTo({
						url:'/pagesJbx/mall/mall'
					})
				}else{
					uni.navigateTo({
						url:'/pagesJbx/orderDetail/orderDetail'
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	background-color: #fff;
	text-align: center;
	padding-bottom: 40rpx;
	.container-success-img{
		margin-top: 80rpx;
		margin-bottom: 20rpx;
		width: 160rpx;
		height: 160rpx;
	}
	.container-success-title{
		font-weight: 700;
		font-style: normal;
		font-size: 32rpx;
		color: #009B4C;
		margin-bottom: 10rpx;
	}
	.container-success-price{
		color: #D9001B;
	}
}

.invoice{
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	padding: 10rpx 30rpx;
	border-bottom: 2rpx solid #f5f5f5;
	.invoice-title{
		
		
	}
	.the-invoice{
		
	}
}
.btn{
	height: 500rpx;
	padding: 40rpx;
	background-color: #fff;
	display: flex;
	justify-content: space-around;
	.back-btn,.review-order{
		width: 300rpx;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		border: 2rpx solid #009b4c;
		background-color: #fff;
		color: #009b4c;
	}
	.review-order{
		color: #fff;
		background-color: #009b4c;
	}
}
</style>
