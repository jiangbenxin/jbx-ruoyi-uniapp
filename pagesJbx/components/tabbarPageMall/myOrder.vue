<template>
	<view class="wrapper">
		<scroll-view scroll-y="true" :style="{height: `calc(100vh - ${theScrollerHeight}rpx - 120rpx)`}">
			<view class="container">
				<view class="person-message">
						<image class="avatar" src="/static/image/u25.png" mode=""></image>
					<view class="nick-name">
						<view class="nick fz40">
							认证名称
						</view>
						<view class="member fz24" @tap="manyMessage()">
							收货地址/发票信息/证件资质/经营范围
						</view>
					</view>
					<view class="setting">
						<image src="/static/image/u25.png" mode=""></image>
					</view>
				</view>
				<view class="power">
					<view v-for="(item,index) in list" :class="item.class" @tap="goPage(index)">
						<view>{{item.title}}</view>
						<view>{{item.num}}</view>
					</view>
				</view>
			</view>
			<myOrder :type.sync="type"></myOrder>
		</scroll-view>
	</view>
</template>

<script>
	import myOrder from '../myOrder/myOrder.vue'
	export default {
		components:{
			myOrder
		},
		data() {
			return {
				theScrollerHeight:getApp().globalData.navHeight,
				type:0,
				selected:3,
				list:[
					{class:'coupon',title:'收藏商品',num:3},
					{class:'balance',title:'浏览商品',num:3},
				]
			}
		},
		methods: {
			manyMessage(){
				uni.navigateTo({
					url:'/pagesJbx/harvestAddress/harvestAddress'
				})
			},
			goPage(index){
				let arr = [
					'/pagesJbx/collect/collect',
					'/pagesJbx/browsingHistory/browsingHistory',
				]
				uni.navigateTo({
					url:arr[index]
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
		height: 328rpx;
		background-color: #009b4c;
		.person-message{
			display: flex;
			.avatar{
				margin: 40rpx;
				width: 140rpx;
				height: 140rpx;	
			}
			.nick-name{
				display: flex;
				flex-direction: column;
				justify-content: center;
				color: #fff;
				.nick{
					margin-bottom: 20rpx;
				}
				.member{
					margin-bottom: 5rpx;
				}
			}
			.setting{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-left: 50rpx;
				margin-right: 50rpx;
				image{
					width: 44rpx;
					height: 44rpx;
				}
			}
		}
		.power{
			display: flex;
			color: #fff;
			text-align: center;
			height: 90rpx;
			padding-bottom: 10px;
			.coupon{
				border-right: 2px solid #fff;
				flex:1;
			}
			.balance{
				flex:1;
			}
		}
	}
</style>
