<template>
	<view>
		<pageBar info="商品详情" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<scroll-view scroll-y="true" style="height: 1200rpx;">
			<view class="product-detail">
				<u-swiper
				        :list="list5"
				        @change="e => current = e.current"
				        :autoplay="false"
						circular
						@click="click"
						height="750"
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
				<view class="product-name">
					产品名称
				</view>
				<view class="product-price">
					<text class="fz24" style="color: red">￥</text>
					<text class="fz36" style="color: red;margin-right: 30rpx;">196</text>
					<text class="fz22A" style="text-decoration: line-through;">原价￥296</text>
				</view>	
				<view class="pruduct-number fz22A">
					<text>运费：免运费</text>
					<text>库存：9544</text>
					<text>销量：9544</text>
				</view>
				<view class="product-choose">
					<text class="fz28">选择：规格</text>
					<image @tap="pay(0)" class="choose-img" src="/static/image/u25.png" mode=""></image>
				</view>	
				<view class="footer">
				</view>
			</view>
			<view class="product-service">
				<view class="service-item fz28" >
					<image class="service-img" src="/static/image/u25.png"  mode=""></image>
					<view>
						客服
					</view>
				</view>
				<view class="service-item fz28" @tap="collect2()">
					<image class="service-img" :src="collect?'/static/image/u25.png':''" mode=""></image>
					<view :style="{color:!collect?'#000':'#009b4c'}">
						收藏
					</view>
				</view>
				<view class="add-cart fz26">加入购物车</view>
				<view class="pay fz26" style="background-color: #d9001b;" @tap="pay(1)">立即购买</view>
			</view>
			<u-popup v-model="show" mode="bottom"  @close="close" @open="open">
			        <view class="the-pop">
						<view class="hd">
							<image class="img" src="/static/image/u25.png" mode=""></image>
							<view class="pruduct-info">
								<view class="product-name">
									产品名称
								</view>
								<view class="price">
									￥<text>169</text>
								</view>
							</view>
							<image @tap="close()" class="close-img"  src="/static/image/u25.png" mode=""></image>
						</view>
						<view class="bd">
							<view class="" v-if="buy">
								<view class="bd-title" >
									规格：
								</view>
								<view class="bd-item fz26" v-for="(item,index) in list3">
									{{item.specification}}
								</view>
							</view>
							<view class="num">
								<view class="">
									<view class="num-title fz26">
										购买数量
									</view>
									<view class="surplus-num fz26A">
										剩余126件
									</view>
								</view>
								<view class="">
									<numBox :productNum.sync="productNum"></numBox>
								</view>
							</view>
						</view>
						<view class="ft">
							<view class="add-cart">
								加入购物车
							</view>
							<view class="pay" >
								立即购买
							</view>
						</view>
			        </view>
				</u-popup>
		</scroll-view>
	</view>
</template>

<script>
	import numBox from '../../pagesJbx/components/numBox/numBox.vue'
	export default {
		name:'productDetail',
		components:{
			numBox
		},
		data() {
			return {
				current:0,
				buy:true,
				productNum:1,
				show:false,
				list3:[
					{specification:'1盒'},
					{specification:'1件(12盒)'}
				],
				list5: [
				    '/static/image/u25.png',
				    '/static/image/u25.png',
				    '/static/image/u25.png',
				],
				collect:true
			}
		},
		methods: {
			collect2(){
				this.collect = !this.collect
			},
			click(e){
				console.log(e);
			},
			close(){
				this.show = false
				this.buy = true
			},
			open(){
				
			},
			pay(index){
				console.log(index);
				if(index===0){
					this.show = !this.show
				}else{
					this.show = !this.show
					this.buy = !this.buy
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.the-pop{
		.hd{
			display: flex;
			justify-content: space-around;
			padding: 20rpx;
			border-bottom: 2rpx solid #f2f2f2;
			.img{
				width: 160rpx;
				height: 160rpx;
			}
			.pruduct-info{
				flex: 1;margin-left: 40rpx;
				.product-name{
					margin-top: 20rpx;
				}
				.price{
					color: #d9001b;
					margin-top: 50rpx;
				}
			}
			.close-img{
				width: 34rpx;
				height: 34rpx;
			}
		}
		.bd{
			padding: 20rpx;
			.bd-title{
				
			}
			.bd-item{
				display: inline-block;
				border: 2rpx solid #000;
				border-radius: 10rpx;
				text-align: center;
				width: 160rpx;
				height: 60rpx;
				line-height: 60rpx;
				margin: 10rpx;
			}
			.num{
				display: flex;
				justify-content: space-between;
				.num-title{
				}
				.surplus-num{
					margin-top: 20rpx;
				}
			}
		}
		.ft{
			display: flex;
			.add-cart,.pay{
				flex: 1;
				height: 120rpx;
				line-height: 120rpx;
				text-align: center;
				color: #fff;
				background-color: #f59a23;
			}
			.pay{
				background-color: #d9001b;
			}
		}
	}
	
	.product-detail{
		border-top: 2rpx solid #f5f5f5;
		.product-name{
			background-color: #fff;
			padding: 30rpx;
		}
		.product-price{
			background-color: #fff;
			padding: 30rpx;
		}
		.pruduct-number{
			background-color: #fff;
			padding: 20rpx;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			margin-top: 5rpx;
		}
		.product-choose{
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			padding: 30rpx;
			margin-top: 20rpx;
			margin-bottom: 20rpx;
			.choose-img{
				width: 40rpx;
				height: 40rpx;
			}
		}
		.footer{
			height: 370rpx;
			background-color: #000;
			margin: 30rpx;
		}
	}
	.product-service{
		position: fixed;
		bottom: 0;
		display: flex;
		height: 120rpx;
		background-color: #fff;
		.service-item{
			width: 160rpx;
			text-align: center;
			.service-img{
				margin-top: 10rpx;
				width: 58rpx;
				height: 58rpx;
				display: inline-block;
				
			}
		}
		.add-cart,.pay{
			width: 216rpx;
			text-align: center;
			line-height: 120rpx;
			color: #fff;
			background-color: #f59a23;
		}
	}
	.indicator {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			&__dot {
				 height: 6px;
				 width: 6px;
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
