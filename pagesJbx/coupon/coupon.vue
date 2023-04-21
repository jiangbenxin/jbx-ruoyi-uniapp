<template>
	<view>
		<pageBar info="我的优惠券" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<view class="order-tab">
			<view class="tab-item fz32" :style="{color:type==index?'#009b4c':''}" v-for="(item,index) in tabList" @tap="checkTab(index)">
				{{item.title}}({{num}})
				<view v-if="type==index" class="active-line"></view>
			</view>
		</view>
		<view class="coupons" v-for="(item,index) in typeList">
			<view class="coupon-left" :style="{backgroundColor:item.status==0?'#ec808d':'#d7d7d7'}">
				<view class="coupon-num fz40">
					<text class="fz28">￥</text>
					<text>{{item.couponNum}}</text>
				</view>
				<view class="coupon-use fz22">
					满{{item.couponUse}}元可用
				</view>
			</view>
			<view class="coupon-center">
				<view class="coupon-name">
					{{item.couponName}}
				</view>
				<view class="coupon-time fz22">
					{{item.couponTime}}
				</view>
			</view>
			<view class="coupon-right" >
				<text class="coupon-btn fz26" :style="{backgroundColor:item.status==0?'#ec808d':'#d7d7d7'}">{{['去使用','已使用','已过期'][item.status]}}</text>
			</view>
		</view>
	</view>
</template>`

<script>
	export default {
		data() {
			return {
				type:0,
				tabList:[
					{title:'未使用'},
					{title:'已使用'},
					{title:'已过期'},
				],
				num:2,
				list:[
					{couponNum:1000,couponUse:2000,couponName:'药品优惠名字',couponTime:'2022.11.01-2022.12.31',status:0},
					{couponNum:10020,couponUse:200,couponName:'药品优惠名字2',couponTime:'2022.11.01-2022.12.31',status:1},
					{couponNum:10020,couponUse:200,couponName:'药品优惠名字2',couponTime:'2022.11.01-2022.12.31',status:1},
					{couponNum:1100,couponUse:200,couponName:'药品优惠名字3',couponTime:'2022.11.01-2022.12.31',status:2},
					{couponNum:1100,couponUse:200,couponName:'药品优惠名字3',couponTime:'2022.11.01-2022.12.31',status:2},
					{couponNum:1100,couponUse:200,couponName:'药品优惠名字3',couponTime:'2022.11.01-2022.12.31',status:2},
				]
			}
		},
		computed:{
			typeList(){
				return this.list.filter((item)=>this.type==item.status)
			}
		},
		methods: {
			checkTab(index){
				this.type=index
			},
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
	.coupons{
		margin:40rpx;
		height: 200rpx;
		display: flex;
		align-items: center;
		.coupon-left{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 200rpx;
			height: 200rpx;
			color:#fff;
			.coupon-num{
				margin-bottom: 10rpx;
			}
			.coupon-use{
			}
		}
		.coupon-center{
			flex: 1;
			height: 200rpx;
			background-color: #fff;
			.coupon-name{
				margin-bottom: 50rpx;
				padding: 20rpx;
			}
			.coupon-time{
				color: #7F7F7F;
				padding: 20rpx;
			}
		}
		.coupon-right{
			width: 180rpx;
			height: 200rpx;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			.coupon-btn{
				width: 144rpx;
				height: 52rpx;
				border-radius: 52rpx;
				text-align: center;
				line-height: 52rpx;
				color: #fff;
			}
		}
	}
</style>
