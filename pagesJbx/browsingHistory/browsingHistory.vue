<template>
	<view class="wrapper">
		<pageBar :info="type==='0'?'我的收藏':'浏览历史'" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000" :edit="true" :isEdit.sync="isEdit"></pageBar>
		<scroll-view scroll-y="true" :class="[isEdit?'height1080':'height1200']">
			<view class="container" v-for="(item,index) in list">
				<view class="date">
					今天
				</view>
				<view class="product" v-for="(item2,index2) in item.product">
					<myRaido v-if="isEdit" :checked.sync="item2.checked"></myRaido>
					<image class="left" src="/static/image/u25.png" mode=""></image>
					<view class="center">
						<view class="center-product-name">
							{{item2.productName}}
						</view>
						<view class="center-product-price">
							￥{{item2.price}}
						</view>
					</view>
					<view v-if="!isEdit" class="right">
						立即查看
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="all-checked" v-if="isEdit">
			<view class="the-radio" @tap="allChecked2()">
				<myRaido :checked.sync="allChecked"></myRaido>
				<text class="fz26">全选所有记录</text>
			</view>
			、<view class="delete" @tap="delete2()">
				删除
			</view>
		</view>
	</view>
</template>

<script>
	import myRaido from '../../pagesJbx/components/myRadio/myRadio.vue'
	export default {
		components:{
			myRaido		
		},
		data() {
			return {
				allChecked:false,
				type:'1',
				isEdit:false,
				list:[
					{date:'11月20日',product:[
						{imgSrc:'',productName:'产品名称',price:169},
						]
					},
					{date:'11月20日',product:[
						{imgSrc:'',productName:'产品名称',price:169,checked:false},
						{imgSrc:'',productName:'产品名称',price:169,checked:false},
						]
					},
					{date:'11月20日',product:[
						{imgSrc:'',productName:'产品名称',price:169,checked:false},
						{imgSrc:'',productName:'产品名称',price:169,checked:false},
						{imgSrc:'',productName:'产品名称',price:169,checked:false},
						]
					},
					
				]
			}
		},
		onLoad(options) {
			this.type = options.type
			console.log(options.type);
		},
		watch: {
		    list: {
		        handler(newName, oldName) {
		            let checked22 = false
					this.allChecked =  this.list.every((item,index)=>{
							checked22 = item.product.every((item2,index2)=>{
								return item2.checked === true
							})
							return checked22
						})
		        },
		        immediate: true,
		        deep: true
		    },
		},
		// computed:{
		// 	allChecked3(){
		// 		let checked22 = false
		// 			this.allChecked = this.list.every((item,index)=>{
		// 				checked22 = item.product.every((item2,index2)=>{
		// 					return item2.checked === true
		// 				})
		// 				return checked22
		// 			})
		// 		return 
		// 	}
		// },
		methods: {
			allChecked2(){
				this.list.forEach((item,index)=>{
					item.product.forEach((item2,index2)=>{
						item2.checked = this.allChecked
					})
				})
			},
			delete2(){
				this.list = this.list.filter((item,index)=>{
					this.list[index].product = item.product.filter((item2,index2)=>{
						return !item2.checked
					})
					console.log(item.product.length);
					return item.product.length!==0
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.height1080{
		height: 1080rpx;
	}
	.height1200{
		height: 1080rpx;
	}
	.all-checked{
		width: 100%;
		height: 120rpx;
		background-color: #fff;
		display: flex;
		position: absolute;
		bottom: 0rpx;
		.the-radio{
			width: 450rpx;
			flex: 1;
			display: flex;
			align-items: center;padding-left: 60rpx;
			text{
				margin-left: 20rpx;
			}
		}
		.delete{
			width: 200rpx;
			background-color: #d9001b;
			color: #fff;
			text-align: center;
			line-height: 120rpx;
		}
	}
	.container{
		margin-top: 40rpx;
		padding: 30rpx;
		background-color: #fff;
		margin-bottom: 40rpx;
		.date{
			border-bottom: 4rpx solid #f5f5f5;
			padding-left: 30rpx;
			padding-bottom: 20rpx;
		}
		.product{
			display: flex;
			align-items: center;
			.left{
				width: 160rpx;
				height: 160rpx;
				margin: 30rpx;
			}
			.center{
				margin-right: 180rpx;
				.center-product-name{
					
				}
				.center-product-price{
					margin-top: 60rpx;
					color: #D9001B;
				}
			}
			.right{
				margin-top: 100rpx;
				color: #009B4C;
				border: 2rpx solid #009B4C;
				border-radius: 60rpx;
				width: 160rpx;
				height: 60rpx;
				text-align: center;
				line-height: 60rpx;
			}
		}
	}

</style>
