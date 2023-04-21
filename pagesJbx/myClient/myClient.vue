<template>
	<view>
		<pageBar info="我的客户" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<view class="container">
			<view class="container-client" v-for="(item,index) in list">
				<image class="container-client-left" :src="item.imgSrc" mode=""></image>
				<view class="container-client-center">
					<view class="fz26">
						用户名称：<text class="container-client-center-name">{{item.clientName}}</text>
					</view>
					<view class="container-client-center-phone fz26">
						手机号码：<text>{{item.phone}}</text>
					</view>
				</view>
				<view class="container-client-right fz24">
					{{item.date}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{imgSrc:'/static/image/u25.png',clientName:'客户1',phone:'13277433802',date:'2022-11-20  16:15'},
					{imgSrc:'/static/image/u25.png',clientName:'客户1',phone:'13277433802',date:'2022-11-20  16:15'},
					{imgSrc:'/static/image/u25.png',clientName:'客户1',phone:'13277433802',date:'2022-11-20  16:15'},
					{imgSrc:'/static/image/u25.png',clientName:'客户1',phone:'13277433802',date:'2022-11-20  16:15'},
					{imgSrc:'/static/image/u25.png',clientName:'客户1',phone:'13277433802',date:'2022-11-20  16:15'},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		margin: 30rpx 30rpx 0rpx 30rpx;
		padding: 30rpx;
		border-radius: 20rpx;
		background-color: #fff;
		.container-client:nth-child(1){
			border: none;
		}
		.container-client{
			display: flex;
			align-items: center;
			background-color: #fff;
			border-top: 4rpx solid #f5f5f5;
			padding: 10rpx;
			.container-client-left{
				width: 80rpx;
				height: 80rpx;
				margin: 10rpx 0rpx 10rpx 0rpx;
			}
			.container-client-center{
				margin-left: 20rpx;
				flex: 1;
				.container-client-center-name{
					color: #7F7F7F;
				}
				.container-client-center-phone{
					margin-top: 20rpx;
					text{
						color: #7F7F7F;
					}
				}
			}
			.container-client-right{
				color: #7F7F7F;
				margin-top: 50rpx;
			}
		}
	}
</style>
