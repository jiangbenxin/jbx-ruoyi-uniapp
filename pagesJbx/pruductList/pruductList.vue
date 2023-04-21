<template>
	<view>
		<pageBar info="产品列表" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<scroll-view scroll-y="true" class="it-scroll-view">
			<view class="search" >
				<image class="search-img" src="/static/image/u25.png" mode=""></image> 
				<input class="search-inp" type="text" placeholder="请输入商品名称查询">
			</view>
			<view class="product-tab">
				<view :style="{color:switchTab==index?'#0079fe':''}" class="product-type" v-for="(item,index) in list" @tap="switchFn(index)">
					{{item.title}}
				</view>
				<image @tap="active=!active" class="the-icon" :src="active?'/static/image/u25.png':''" mode=""></image>
			</view>
			<!-- 1 -->
			<view v-if="active">
				<view @tap="productDetail(index)" class="product-list" v-for="(item,index) in 10">
					<image class="product-img" src="/static/image/u25.png" mode=""></image>
					<view class="product-info fz32">
						<view class="product-name">产品名称</view>
						<view class="product-price">
							<text>￥</text><text>169</text>
						</view>
					</view>
					<view class="add-cart">
						<text>加入购物车</text>
					</view>
				</view>
			</view>
			<!-- 2 -->
			<view v-else class="products" >
				<view  class="product" v-for="(item,index) in 20" @tap="productDetail(index)">
					<image class="product-img" src="/static/image/u25.png" mode=""></image>
					<view class="productName fz24700">
						产品名称
					</view>
					<view class="productFooter">
						<text class="price fz32">￥169</text>
						<button class="pay fz22">立即购买</button>
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
				switchTab:0,
				list:[
					{title:'默认'},
					{title:'人气'},
					{title:'销量'},
					{title:'价格'},
				],
				active:true
			};
		},

		methods:{
			productDetail(index){
				uni.navigateTo({
					url:'/pagesJbx/productDetail/productDetail'
				})
			},
			switchFn(index){
				this.switchTab=index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.it-scroll-view{
		height: 1200rpx;
	}
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
		}d
		.search-inp{
			flex: 1;
		}
	}
	
	.product-tab{
		display: flex;
		height: 100rpx;
		background-color: #fff;
		justify-content: center;
		align-items: center;
		.product-type{
			width: 20%;
		}
	}
	.product-list{
		display: flex;
		height: 200rpx;
		padding: 30rpx;
		border-top: 4rpx solid #fff;
		.product-img{
			width: 200rpx;
			height: 200rpx;
		}
		.product-info{
			padding-left: 50rpx;
			padding-right: 50rpx;
			.product-name{
				padding-top: 40rpx;
			}
			.product-price{
				padding-top: 60rpx;
				color: red;
			}
		}
		.add-cart{
			display: flex;
			justify-content: center;
			padding-top: 130rpx;
			flex: 1;
			text{
				border: 2rpx solid #009b4c;
				width: 200rpx;
				height: 60rpx;
				color: #009b4c;
				line-height: 60rpx;
				text-align: center;
				border-radius: 30rpx;
				background-color: #fff;
			}
		}
	}
	.products{
		display: flex;
		flex-wrap: wrap;
		margin: 23rpx;
		.product{
			border: 2rpx solid #f2f2f2;
			box-sizing: border-box;
			width: 324rpx;
			height: 464rpx;
			background-color: #fff;
			margin: 14rpx;
			.product-img{
				width: 324rpx;
				height: 324rpx;
			}
			.productName{
				text-align: left;
				padding-left: 20rpx;
			}
			.productFooter{
				padding: 10rpx;
				display: flex;
				justify-content: space-between;
				.price{
					color: red;
				}
				.pay{
					width: 120rpx;
					height: 40rpx;
					text-align: center;
					line-height: 40rpx;
					color: #fff;
					background-color: #009b4c;
					padding: 0;
				}
			}
		}
	}
</style>
