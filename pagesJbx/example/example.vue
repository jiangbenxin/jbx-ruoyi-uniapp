<template>
	<view class="">
		<pageBar info="证件示例" navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<view class="container">
			<view class="container-title" >
				委托书示例
			</view>
			<image class="container-pic1" src="/static/image/u25.png" mode=""></image>
			<view class="container-title">
				身份证正面示例
			</view>
			<image class="container-pic2" src="/static/image/u25.png" mode=""></image>
			<view class="container-title">
				身份证反面示例
			</view>
			<image class="container-pic2" src="/static/image/u25.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		display: flex;flex-direction: column;justify-content: center;align-items: center;
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
		font-weight: 700;
		font-style: normal;
		text-align: center;
		font-size: 36rpx;
		.container-title{
			margin-top: 30rpx;
			margin-bottom: 30rpx;
		}
		.container-pic1{
			width: 700rpx;
			height: 1000rpx;
		}
		.container-pic2{
			width: 700rpx;
			height: 400rpx;
		}
	}

</style>
