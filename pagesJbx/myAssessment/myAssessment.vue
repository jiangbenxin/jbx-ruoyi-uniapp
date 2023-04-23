<template>
	<view>
		<pageBar info="我的评价" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<scroll-view scroll-y="true" :style="{height: `calc(100vh - ${theScrollerHeight}rpx)`}">
			<view class="order-tab">
				<view class="tab-item fz32" :style="{color:type==index?'#009b4c':''}" v-for="(item,index) in tabList" @tap="checkTab(index)">
					{{item.title}}
					<view v-if="type==index" class="active-line"></view>
				</view>
			</view>
			<view class="agreement" v-for="(item,index) in list2">
				<view class="agreement-hd fz26">
					订单号：{{item.orderNumber}}
				</view>
				<view class="agreement-bd">
					<image class="agreement-bd-left" src="/static/image/u25.png" mode=""></image>
					<view class="agreement-bd-center">
						<view class="agreement-bd-center-product-name">
							{{item.productName}}
						</view>
						<view class="agreement-bd-center-specification">
							规格：{{	item.specification}}盒
						</view>
					</view>
					<view class="agreement-bd-right">
						<view class="agreement-bd-right-price">
							￥{{item.price}}
						</view>
						<view class="agreement-bd-right-num">
							X{{item.num}}
						</view>
					</view>
				</view>
				<view class="agreement-ft">
					<view :class="item.status?'agreement-ft-agreed':'agreement-ft-agree'" @tap="goPage(item.status)">
						{{item.status?'评价':'已评价'}}
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>`

<script>
	export default {
		data() {
			return {
				theScrollerHeight:getApp().globalData.navHeight,
				type:0,
				tabList:[
					{title:'全部评价'},
					{title:'待评价'},
					{title:'已评价'},
				],
				list:[
					{orderNumber:1111111,productName:'产品名称',specification:1,price:169,num:23,status:0},
					{orderNumber:1111111,productName:'产品名称',specification:1,price:169,num:23,status:1},
					{orderNumber:1111111,productName:'产品名称',specification:1,price:169,num:23,status:0},
					{orderNumber:1111111,productName:'产品名称',specification:1,price:169,num:23,status:1},
				],
			}
		},
		computed:{
			list2(){
				if(this.type==0){
					return this.list
				}else if(this.type===1){
					return this.list2 = this.list.filter((item,index)=>{
						return item.status ===0
					})
				}else{
					return this.list2 = this.list.filter((item,index)=>{
						return item.status ===1
					})
				}
			}
		},
		methods: {
			checkTab(index){
				this.type=index
			},
			goPage(status){
				if(status==1){
					uni.navigateTo({
						url:'/pagesJbx/evaluation/evaluation'
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-tab{
		display: flex;
		height: 120rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		justify-content: space-around;
		background-color: #fff;
		.tab-item{
			position: relative;
			height: 120rpx;
			line-height: 120rpx;
			color: #AAAAAA;
			text-align: center;
			.active-line{
				width: 100%;
				height: 14rpx;
				position: absolute;
				bottom: 0;
				background-color: #009b4c;
				border-radius: 14rpx;
			}
		}
	}
	
	.agreement{
		margin: 30rpx 30rpx;
		border-radius: 30rpx;
		background-color: #fff;
		padding: 20rpx;
		.agreement-hd{
			border-bottom: 6rpx solid #f5f5f5;
			padding-bottom: 20rpx;
		}
		.agreement-bd{
			display: flex;
			align-items: center;
			padding: 20rpx 0;
			.agreement-bd-left{
				width: 120rpx;
				height: 120rpx;
				margin-right: 30rpx;
			}
			.agreement-bd-center{
				margin-right: 270rpx;
				.agreement-bd-center-product-name{
					
				}
				.agreement-bd-center-specification{
					margin-top: 30rpx;
					color: #7F7F7F;
				}
			}
			.agreement-bd-right{
				text-align: right;
				.agreement-bd-right-price{
					color: #7F7F7F;
				}
				.agreement-bd-right-num{
					margin-top: 30rpx;
					color: #7F7F7F;
				}
			}
		}
		.agreement-ft{
			text-align: right;
			.agreement-ft-agreed,.agreement-ft-agree{
				display: inline-block;
				width: 160rpx;
				height: 60rpx;
				text-align: center;
				line-height: 60rpx;
				border-radius: 60rpx;
				border: 2rpx solid #009b4c;
				color: #009b4c;
			}
			.agreement-ft-agree{
				color: #aaaaaa;
				border: 2rpx solid #aaaaaa;
			}
			.agreement-ft-agreed{
				border: 2rpx solid #009b4c;
				color: #009b4c;
			}
		}
	}
	
</style>
