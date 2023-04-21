<template>
	<view class="search" >
		<image class="search-img" src="/static/image/u25.png" mode=""></image> 
		<input class="search-ipt" type="text" placeholder="请输入手机号/订单号/姓名查询">
	</view>
</template>

<script>
	export default {
		name:"search",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.search{
		height: 80rpx;
		display: flex;
		align-items: center;
		background-color: #fff;
		border: 2rpx solid #000;
		border-radius: 10rpx;
		margin: 15rpx;
		.search-img{
			width: 30rpx;
			height: 30rpx;
			margin-left: 30rpx;
			margin-right: 30rpx;
		}
		.search-ipt{
			flex: 1;
		}
	}
</style>