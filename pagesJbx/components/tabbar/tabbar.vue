<template>
	<view class="wrapper">
		<view class="tabbar">
				<view class="tabbar-list">
					<view class="tabbar-lists">
						<view v-for="(item,index) in tabbarType==0?tabBaar.list:tabBaar.list2" :key="index" class="tabbar-list-item" @tap="setSelected(index)">
							<view class="tabbar-list-item-icon">
								<image class="tabIcon" :src="selected==index?item.iconPath:item.selectedIconPath" alt=""></image>
							</view>
								<view :class="selected==index?'tabbar-list-item-name active':'tabbar-list-item-name '">
								{{item.text}}
							</view>
						</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		name:'myTabBar',	
		props:{
			selected:{
				default:0,
				type:Number
			},
			tabbar:{
				default:0,
				type:Number
			},
			tabbarType:{
				default:0,
				type:Number
			},
		},
		data() {
			return {
				tabBaar:{
					list:[
						{	pagePath:'/pagesJbx/index/index',
							iconPath:'/static/image/u54.png',
							selectedIconPath:'/static/image/u29.png',
							text:'首页',
						},
						{	pagePath:'/pagesJbx/message/message',
							iconPath:'/static/image/u36.png',
							selectedIconPath:'/static/image/u61.png',
							text:'消息',
						},
						{	pagePath:'/pagesJbx/my/my',
							iconPath:'/static/image/u120.png',
							selectedIconPath:'/static/image/u33.png',
							text:'我的',
						},
					],
					list2:[
						{	pagePath:'/pagesJbx/mallIndex/mallIndex',
							iconPath:'/static/image/u54.png',
							selectedIconPath:'/static/image/u29.png',
							text:'商城首页',
						},
						{	pagePath:'/pagesJbx/mallClassification/mallClassification',
							iconPath:'/static/image/u250.png',
							selectedIconPath:'/static/image/u17.png',
							text:'商品分类',
						},
						{	pagePath:'/pagesJbx/shoppingCart/shoppingCart',
							iconPath:'/static/image/u53.png',
							selectedIconPath:'/static/image/u14.png',
							text:'购物车',
						},
						{	pagePath:'/pagesJbx/myOrder/myOrder',
							iconPath:'/static/image/u311.png',
							selectedIconPath:'/static/image/u17.png',
							text:'我的订单',
						},
					],
				}
			}
		},
		methods: {
			setSelected(index){
				this.$emit('update:selected',index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabbar{
		width: 100%;
		position: fixed;
		box-sizing: border-box;
		.tabbar-list{
			width: 100%;
			color: #344356;
			background-color: #fff;
			position: fixed;
			left: 0;
			bottom: 0;
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;
			box-sizing: border-box;
			.tabbar-lists{
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				box-sizing: border-box;
				.tabbar-list-item{
					flex:1;
					.tabbar-list-item-icon{
						width: 100%;
						height: 100%;
						margin: 0 auto;
						padding: 10rpx 0;
						text-align: center;
						.tabIcon{
							display: inline-block;
							width: 60rpx;
							height: 60rpx;
						}
					}
					.tabbar-list-item-name{
							width: 100%;
							height: 40rpx;
							text-align: center;
							line-height: 25rpx;
							font-size: 38rpx;
							font-family: Microsoft YaHei;
							font-size: 32rpx;
					}
					.active{
						color: #009b4c;
					}
				}
			}
		}
	}
</style>
