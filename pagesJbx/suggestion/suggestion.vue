<template>
	<view>
		<pageBar info="反馈余建议" :navHeightValue="50" navBackgroundColor="#fff" container-titleColor="#000" :fontSize="13"></pageBar>
		<view class="container">
			<view class="fz36 container-title">
				反馈与建议
			</view>
			<textarea class="container-suggestion" name="" id="" cols="30" rows="10" placeholder="请输入反馈建议,或者遇到的问题"></textarea>
			<view class="container-img-box">
				<image src="" mode=""></image>
			</view>
		</view>
		<view class="btn">
			<button class="comfirm-btn">反馈</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.container{
	margin-top: 20rpx;
	background-color: #fff;
	padding: 20rpx 40rpx 40rpx 40rpx;
	.container-title{
		margin-bottom: 20rpx;
	}
	.container-suggestion{
		width: 100%;
		height: 285rpx;
		background-color: #f2f2f2;
	}
	.container-img-box{
		margin-top: 40rpx;
		width: 160rpx;
		height: 160rpx;
		border: 2rpx solid #000;
	}
}
.btn{
	padding: 20rpx 20rpx;
}

</style>
