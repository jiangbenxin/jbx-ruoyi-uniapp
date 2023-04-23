<template>
	<view>
		<scroll-view scroll-y="true" :style="{height: `calc(100vh - ${theScrollerHeight}rpx - 120rpx)`}">
			<view v-for="item in list" class="message" @tap="orderDetail()">
				<image class="left" src="/static/image/u25.png" mode=""></image>
				<view class="center">
					<view class="message-title fz28">
						发货通知
					</view>
					<view class="message-title-detail fz24">
						您的订单：1231231242，已经发货，点击查看
					</view>
				</view>
				<view class="right">
					<view class="message-detail fz24">
						12：00
					</view>
					<view class="message-num fz24">
						10
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
		},
		data() {
			return {
				theScrollerHeight:getApp().globalData.navHeight,
				selected:1,
				status: 'loadmore',
                loadingText: '正在加载',
                loadmoreText: '轻轻上拉',
                nomoreText: '实在没有了',
				list:[1,2,3,4,5,6,7,8,9,5,6,7,8,9,0],
			}
		},
		methods:{
			orderDetail(){
				uni.navigateTo({
					url:'/pagesJbx/orderDetail/orderDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.message{
		display: flex;
		background-color: #fff;
		border-bottom: 2px solid rgba(249, 249, 249, 1);
		image{
			padding: 15px;
			width: 40px;
			height: 40px;
		}
		.center{
			margin-right: 10rpx;
			.message-title{
				font-weight: 700;
				color: #666666;
				height: 30px;
				line-height: 40px;
			}
			.message-title-detail{
				font-weight: 400;
				color: #999999;
				line-height: 20px;
			}
		}
		.right{
			width: 64px;
			text-align: center;
			.message-detail{
				height: 30px;
				line-height: 40px;
				font-weight: 400;
				color: #999999;
			}
			.message-num{
				display: inline-block;
				background-color: red;
				border-radius: 10px;
				color: #fff;
				width: 25px;
				height: 16px;
			}
		}
		
	}

</style>
