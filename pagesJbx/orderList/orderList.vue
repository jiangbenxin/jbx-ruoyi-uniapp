<template>
	<view>
		<pageBar info="订单列表" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<scroll-view scroll-y="true" :style="{height: `calc(100vh - ${theScrollerHeight}rpx)`}">
			<view class="search" >
				<image class="search-img" src="/static/image/u25.png" mode=""></image> 
				<input class="search-inp" type="text" placeholder="请输入手机号/订单号/姓名查询">
			</view>
			<myOrder :type.sync="type"></myOrder>
		</scroll-view>
	</view>
</template>

<script>
	import myOrder from '../../pagesJbx/components/myOrder/myOrder.vue'
	export default {
		components:{
			myOrder
		},
		data() {
			return {
				theScrollerHeight:getApp().globalData.navHeight,
				type:0,
			}
		},
		onLoad(option) {
			if(option.type){
				this.type = option.type
			}
		},
	}
</script>

<style lang="scss" scoped>
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
		.search-inp{
			flex: 1;
		}
	}
</style>
