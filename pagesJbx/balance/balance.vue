<template>
	<view class="wrapper">
		<pageBar info="余额" :navHeightValue="50" navBackgroundColor="#fff" container-titleColor="#000"></pageBar>
		<view class="header">
			<view class="header-label">
				可用余额
			</view>
			<view class="header-num fz48">
				{{balance}}
			</view>
		</view>
		<view class="container" @tap="balanceRecharge()">
			<view class="container-title fz36">
				<image  class="invoice-icon" src="/static/image/u63.png" mode=""></image>
				余额充值
			</view>
			<view class="container-invoice-invoice fz28" @tap="nextPage()">
				<image class="invoice-icon" src="/static/image/u96.png" mode=""></image>
			</view>
		</view>
		<view class="container">
			<view class="container-title fz36">
				<image  class="invoice-icon" src="/static/image/u63.png" mode=""></image>
				余额明细
			</view>
			<view class="container-invoice fz28" @tap="nextPage()">
				<image class="invoice-icon" src="/static/image/u96.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				balance:2132,
			}
		},
		methods: {
			balanceRecharge(){
				uni.navigateTo({
					url:'/pagesJbx/balanceRecharge/balanceRecharge'
				})
			},
			nextPage(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.header{
	width: 750rpx;
	height: 300rpx;
	background: url('/static/image/u25.png') no-repeat center;
	background-size:750rpx 300rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	.num{
		margin-top: 10rpx;
	}
}

.container{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 30rpx;
	background-color: #fff;
	padding: 30rpx 40rpx;
	.invoice-icon{
		width: 32rpx;
		height: 32rpx;
		margin-right: 20rpx;
	}
	.container-title{
		display: flex;
		align-items: center;
	}
	.container-invoice{
		color: #AAAAAA;
		display: flex;
		align-items: center;
		.avatar{
			width: 80rpx;
			height: 80rpx;
		}
	}
}
</style>
