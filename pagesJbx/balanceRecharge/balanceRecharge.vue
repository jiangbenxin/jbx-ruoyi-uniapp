<template>
	<view class="wrapper">
		<pageBar info="余额充值" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<view class="top-up-amount">
			<view>
				充值金额
			</view>
			<input class="amount-ipt" type="text" value="" v-model.number="umber" placeholder="请输入充值金额"/>
		</view>
		<view class="amount-mode">
			<view class="amount-mode-title fz36">
				<view class="red-border"></view>
				支付方式
			</view>
			<view class="amount-check">
				<view>
					<image class="amount-img" src="/static/image/u35.png" mode=""></image>
					<text>微信支付</text>
				</view>
				<radio :checked="checked" @tap="checked=!checked"/>
			</view>
			<view class="amount-check">
				<view>
					<image class="amount-img" src="/static/image/u37.png" mode=""></image>
					<text>支付宝支付</text>
				</view>
				<radio :checked="!checked" @tap="checked=checked"/>
			</view>
		</view>
		<button class="comfirm-btn btn-margin" >立即充值</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked:false,
				umber:23
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.btn-margin{
		margin: 40rpx 30rpx 0 30rpx;
	}
	.top-up-amount{
		background-color: #fff;
		border-radius: 40rpx;
		margin: 20rpx;
		padding: 20rpx 40rpx;
		.amount-ipt{
			margin-top: 20rpx;
		}
	}
	.amount-mode{
		margin: 20rpx;
		border-radius: 40rpx;
		margin-bottom: 10rpx;
		background-color: #fff;
		padding: 30rpx 40rpx;
		.amount-check{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20rpx;
		}
		.amount-mode-title{
			position: relative;
			.red-border{
				width: 4rpx;
				height: 30rpx;
				position: absolute;
				left:-10rpx;
				top:4rpx;
				background-color: #d9001b;
			}
		}
		.amount-img{
			width: 32rpx;
			height: 32rpx;
			margin-right: 20rpx;
		}
	}
</style>
