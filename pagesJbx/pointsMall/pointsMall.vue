<template>
	<view>
		<pageBar info="积分商城" backImageUrl="/static/image/u6.png" backTextColor="#fff" :navHeightValue="50" navBackgroundColor="#009b4c" titleColor="#fff"></pageBar>
			<scroll-view scroll-y="true" style="height: 1200rpx;">
				<search></search>
				<view class="container" >
					<view class="container-product" v-for="(item,index) in 10" @tap="productDetail(index)">
						<image  class="container-product-img" src="/static/image/u25.png" mode=""></image>
						<view class="container-product-name fz24700">
							产品名称
						</view>
						<view class="container-product-footer">
							<text class="container-product-footer-price fz32">￥169</text>
							<cover-view><button class="container-product-footer-pay fz22">立即购买</button></cover-view>
						</view>
					</view>
				</view>
			</scroll-view>
	</view>
</template>

<script>
	import search from '../components/search/search.vue'
	export default {
		components:{
			search
		},
		data() {
			return {
				
			}
		},
		methods: {
			productDetail(){
				uni.navigateTo({
					url:'/pagesJbx/productDetail/productDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		padding: 20rpx;
		display: flex;
		flex-wrap: wrap;
		.container-product{
			border: 8rpx solid #f2f2f2;
			box-sizing: border-box;
			width: 50%;
			background-color: #fff;
			.container-product-img{
				width: 100%;
				height: 324rpx;
			}
			.container-product-name{
				text-align: left;
				padding-left: 20rpx;
			}
			.container-product-footer{
				padding: 10rpx;
				display: flex;
				justify-content: space-between;
				.container-product-footer-price{
					color: red;
				}
				.container-product-footer-pay{
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
