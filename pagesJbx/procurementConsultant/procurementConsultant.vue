<template>
	<view>
		<pageBar info="我的采购顾问" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000" :fontSize="13"></pageBar>
		<view class="container">
			<image class="container-left" src="/static/image/u25.png" mode=""></image>
			<view class="container-center">
				<view class="container-center-name fz26">
					王某某（昆明）
				</view>
				<view class="container-center-phone fz24A">
					电话：{{phone}}
				</view>
			</view>
			<view class="container-right fz28" @click="call()">
				电话联系
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:13277433802
			}
		},
		methods: {
			call(){
				uni.makePhoneCall({
					phoneNumber: '13277433802' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		margin: 40rpx 30rpx;
		display: flex;
		align-items: center;
		padding-right: 30rpx;
		border-radius: 40rpx;
		background-color: #fff;
		.container-left{
			width: 200rpx;
			height: 200rpx;
			border-radius: 40rpx;
		}
		.container-center{
			flex: 1;
			margin-left: 40rpx;
			.container-center-name{
				
			}
			.container-center-phone{
				margin-top: 80rpx;
			}
		}
		.container-right{
			width: 160rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			border: 2rpx solid #009B4C;
			border-radius: 30rpx;
			color: #009B4C;
			background-color: #fff;
		}
	}

</style>
