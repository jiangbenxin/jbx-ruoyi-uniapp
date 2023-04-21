<template>
	<view>
		<pageBar info="修改昵称" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<view class="modify-nickname">
			<input class="modify-nickname-ipt" placeholder="请输入昵称" type="text" value="" />
			<button class="comfirm-btn">提交</button>
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
			}
	}
</script>

<style lang="scss" scoped>
	.modify-nickname{
		background-color: #fff;
		padding: 40rpx 50rpx ;
		.modify-nickname-ipt{
			height: 80rpx;
			margin-bottom: 80rpx;
			border-bottom: 2rpx solid #f2f2f2;
		}
	}
</style>