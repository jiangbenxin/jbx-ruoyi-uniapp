<template>
	<view>
		<pageBar info="客户订单" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<scroll-view scroll-y="true" class="it-scroll-view">
			<view class="container" v-for="(item,index) in list">
				<view class="container-header fz24">
					<view class="container-header-info1">
						<text >订单号：{{item.orderNumber}}</text>
						<text >{{['待卖家发货','商家已发货','维权/退货处理中','交易完成'][item.status]}}</text>
					</view>
					<view class="container-header-info2">
						<text >订单号：{{item.date}}</text>
						<text class="nick">昵称：{{item.nick}}</text>
					</view>
				</view>
				<view class="container-bd" v-for="(item2,index2) in item.product">
					<image class="container-bd-left" :src="item2.imgSrc" mode=""></image>
					<view class="container-bd-center">
						{{item2.productName}}
					</view>
					<view class="container-bd-right">
						<view class="container-bd-right-price">
							￥{{item2.price}}
						</view>
						<view class="container-bd-right-num">
							X{{item2.num}}
						</view>
					</view>
				</view>
				<view class="footer">
					<view class="footer-all">
						<text>共{{item.allNum}}件商品</text>
						<text>实付金额：￥{{item.allPrice}}</text>
					</view>
					<view class="footer-detail fz26">
						<view class="footer-details" @tap="goPage()">
							查看详情
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{orderNumber:1561561591561,status:0,date:'2022-11-20',nick:'客户昵称',product:[
						{imgSrc:'/static/image/u25.png',productName:'产品名称',num:4,price:169},{imgSrc:'/static/image/u25.png',productName:'产品名称',num:4,price:169},],allPrice:0,allNum:3},
						{orderNumber:1561561591561,status:1,date:'2022-11-20',nick:'客户昵称',product:[
							{imgSrc:'/static/image/u25.png',productName:'产品名称',num:4,price:169},{imgSrc:'/static/image/u25.png',productName:'产品名称',num:4,price:169},],allPrice:0,allNum:3},
							{orderNumber:1561561591561,status:2,date:'2022-11-20',nick:'客户昵称',product:[
								{imgSrc:'/static/image/u25.png',productName:'产品名称',num:4,price:169},{imgSrc:'/static/image/u25.png',productName:'产品名称',num:4,price:169},],allPrice:0,allNum:3},
							{orderNumber:1561561591561,status:3,date:'2022-11-20',nick:'客户昵称',product:[
								{imgSrc:'/static/image/u25.png',productName:'产品名称',num:4,price:169},{imgSrc:'/static/image/u25.png',productName:'产品名称',num:4,price:169},],allPrice:0,allNum:3},
				]
			}
		},
		methods: {
			goPage(){
				uni.navigateTo({
					url:'/pagesJbx/orderDetail/orderDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.it-scroll-view{
		height: 1200rpx;
	}
	.container{
		border-radius: 30rpx;
		background-color: #fff;
		margin: 40rpx 30rpx 30rpx 30rpx;
		padding: 20rpx;
		.container-header{
			border-bottom: 4rpx solid #f5f5f5;
			padding-bottom: 20rpx;
			.container-header-info1{
				display: flex;
				justify-content: space-between;
				margin-bottom: 10rpx;
			}
			.container-header-info2{
				display: flex;
				justify-content: space-between;
				.nick{
					color: #D9001B;
				}
			}
		}
		.container-bd{
			padding: 20rpx;
			border-bottom: 4rpx solid #f5f5f5;
			display: flex;
			.container-bd-left{
				width: 120rpx;
				height: 120rpx;
			}
			.container-bd-center{
				margin-left: 10rpx;
				margin-top: 10rpx;
				font-size: 32rpx;
			}
			.container-bd-right{
				flex: 1;
				text-align: right;
				color: #7F7F7F;
				font-size: 28rpx;
				.container-bd-right-price{
					margin-top: 10rpx;
				}
				.container-bd-right-num{
					margin-top: 30rpx;
				}
			}
		}
		.footer{
			.footer-all{
				margin: 10rpx 20rpx 10rpx 20rpx;
				display: flex;
				justify-content: space-between;
			}
			.footer-detail{
				text-align: right;
				.footer-details{
					display: inline-block;
					border: 2rpx solid #AAAAAA;
					color: #AAAAAA;
					width: 160rpx;
					height: 60rpx;
					border-radius: 30rpx;
					line-height: 60rpx;
					text-align: center;
				}
			}
		}
	}
</style>
