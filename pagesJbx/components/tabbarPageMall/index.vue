<template>
	<view>
		<scroll-view scroll-y="true" class="my-scroll-view">
			<search></search>
			<view class="" >
				<u-swiper
				        :list="list5"
				        @change="e => current = e.current"
				        :autoplay="false"
						circular
						@click="click"
						height="250"
				>
				    <view
				            slot="indicator"
				            class="indicator"
				    >
				        <view
							class="indicator__dot"
							v-for="(item, index) in list5"
							:key="index"
							:class="[index === current && 'indicator__dot--active']"
				        >
				        </view>
				    </view>
				</u-swiper>
				<u-gap
					bgColor="transparent"
					height="3"
				></u-gap>
			</view>
			<view class="introduce">
				<view class="introduce-item" v-for="(item,index) in list" @tap="clickIntro(index)">
					<image class="introduce-icon" :src="item.imgSrc" alt="" srcset=""></image>
					<view class="introduce-title fz32" >
						{{item.title}}
					</view>
				</view>
			</view>
			<view class="product-area">
				<view class="product-title">
					<text>产品专区</text>
					<view class="more-product" @tap="pruductList">更多
					<image class="more-product-img" src="/static/image/u25.png" mode=""></image>
					</view>
				</view>
				<view class="products" >
					<view class="product" v-for="(item,index) in 8" @tap="productDetail(index)">
						<image class="product-img" src="/static/image/u25.png" mode=""></image>
						<view class="product-name fz24700">
							产品名称
						</view>
						<view class="product-footer">
							<text class="product-footer-price fz32">￥169</text>
							<button class="product-footer-pay fz22">立即购买</button>
						</view>
					</view>
				</view>
			</view>
			<u-popup  v-model="show" mode="center" :round="20" @close="close" @open="open">
			   <view class="pop-container">
					<view class="pop-title">温馨提示</view>
					<view class="pop-info">您的资质已临期，请尽快上传更新</view>
					<view class="pop-footer">
						<view class="pop-btn">
							<button class="pop-btn-style cancel-btn fz26" @tap="cancel()">暂不加入</button>
							<button class="pop-btn-style fz26" @tap="goPage()">立即加入</button>
						</view>
					</view>
			   </view>
			</u-popup>
		</scroll-view>
	</view>
</template>

<script>
	import search from '../search/search.vue'
	export default {
		components:{
			search
		},
		data() {
			return {
				current:0,
				show: this.$store.state.qualificationPeriod,
				selected:0,
				list5: [
				    '/static/image/u25.png',
				    '/static/image/u25.png',
				    '/static/image/u25.png',
				],
				list:[
					{imgSrc:'/static/image/u25.png',title:'公司简介'},
					{imgSrc:'/static/image/u25.png',title:'企业文化'},
					{imgSrc:'/static/image/u25.png',title:'团队介绍'},
					{imgSrc:'/static/image/u25.png',title:'药采购'},
					{imgSrc:'/static/image/u25.png',title:'团队介绍'},
					{imgSrc:'/static/image/u25.png',title:'企业文化'},
					{imgSrc:'/static/image/u25.png',title:'药采购'},
					{imgSrc:'/static/image/u25.png',title:'公司简介'},
					{imgSrc:'/static/image/u25.png',title:'药采购'},
					{imgSrc:'/static/image/u25.png',title:'公司简介'},
				],
			}
		},
		methods: {
			pruductList(){
				uni.navigateTo({
					url:'/pagesJbx/pruductList/pruductList'
				})
			},
			productDetail(index){
				uni.navigateTo({
					url:'/pagesJbx/productDetail/productDetail'
				})
			},
			goPage(){
				uni.navigateTo({
					url:"/pagesJbx/qualificationPeriod/qualificationPeriod"
				})
			},
			cancel(){
				this.show = false
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
				},
			click(e){
				console.log(e);
			},
			clickIntro(index){
				if(index===3&&this.flag==true){
					this.show=true
					// uni.navigateTo({
					// 	url:'../../'
					// })
				}else{
					uni.navigateTo({
						url:'/pagesJbx/purchase/purchase'
					})
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep .u-mode-center-box{
		border-radius: 20px;
	}
	.pop-container{
		width: 600rpx;
		border-radius: 100rpx;
		.pop-title{
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 36rpx;
		}
		.pop-info{
			border-top: 4rpx solid #f2f2f2;
			border-bottom: 4rpx solid #f2f2f2;
			height: 120rpx;line-height: 120rpx;
			text-align: center;
			font-size: 30rpx;
		}
		.pop-footer{
			display: flex;
			justify-content: space-around;
			align-items: center;
			.pop-btn{
				margin-top: 20rpx;
				display: flex;
				.pop-btn-style{
					background-color: #009b4c;
					color: #fff;
					width: 200rpx;
					height: 80rpx;
					line-height: 80rpx;
					margin-bottom: 40rpx;
				}
					
				.cancel-btn{
					margin-right: 40rpx;
					background-color: #aaaaaa;
				}
			}
		}
	}
	.product-area{
		background-color: #fff;
		padding-left: 20rpx;
		padding-right: 20rpx;
		.product-title{
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-weight: 400;
			border-bottom: 2rpx solid #f2f2f2;
			.more-product{
				color: #999;
			}
			.more-product-img{
				display: inline-block;
				width: 24rpx;
				height: 24rpx;
			}
		}
		.products{
			display: flex;
			flex-wrap: wrap;
			.product{
				border: 2rpx solid #f2f2f2;
				box-sizing: border-box;
				width: 50%;
				.product-img{
					width: 100%;
					height: 324rpx;
				}
				.product-name{
					text-align: left;
					padding-left: 20rpx;
				}
				.product-footer{
					padding: 10rpx;
					display: flex;
					justify-content: space-between;
					.product-footer-price{
						color: red;
					}
					.product-footer-pay{
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
	}
	.introduce{
		margin-top: 20px;
		margin-bottom: 20px;
		display: flex;
		background-color: #fff;
		flex-wrap: wrap;
		.introduce-item{
			width: 20%;
			height: 93px;
			text-align: center;
			.introduce-icon{
				display: inline-block;
				width: 49px;
				height: 49px;
				margin-top: 10px;
			}
			.introduce-title{
				margin-top: 5px;
				line-height: 16px;
			}
		}
	}
	
	.indicator {
		display: flex;
		justify-content: space-between;
	    justify-content: center;
	
	    &__dot {
	         height: 10px;
	         width: 10px;
	         border-radius: 100px;
	         background-color: rgba(255, 255, 255, 0.35);
	         margin: 0 5px;
	         transition: background-color 0.3s;
	
	        &--active {
	             background-color: #ffffff;
	         }
	    }
	}
</style>
