<template>
	<view class="the-container">
		<pageBar info="我的收藏" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000" :edit="true" :isEdit.sync="isEdit"></pageBar>
		<view class="container" v-for="(item,index) in list">
			<view class="date">
				今天
			</view>
			<view class="product" v-for="(item2,index2) in item.product">
				<myRaido v-if="isEdit" :checked.sync="item2.checked"></myRaido>
				<image class="left" src="/static/image/u25.png" mode=""></image>
				<view class="center">
					<view class="product-name">
						{{item2.productName}}
					</view>
					<view class="product-price">
						￥{{item2.price}}
					</view>
				</view>
				<view v-if="!isEdit" class="right">
					立即查看
				</view>
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
				isEdit:false,
				list:[
					{date:'11月20日',product:[
						{imgSrc:'',productName:'产品名称',price:169},
						]
					},
					{date:'11月20日',product:[
						{imgSrc:'',productName:'产品名称',price:169},
						{imgSrc:'',productName:'产品名称',price:169},
						]
					},
					{date:'11月20日',product:[
						{imgSrc:'',productName:'产品名称',price:169},
						{imgSrc:'',productName:'产品名称',price:169},
						{imgSrc:'',productName:'产品名称',price:169},
						]
					},
					
				]
			}
		},
		watch: {
		    isEdit: {
		        handler(newName, oldName) {
		            this.list.forEach((item,index)=>{
						item.checked = false
					})
		        },
		        immediate: true,
		        deep: true
		    }
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.the-container{
		width: 100%;
	}
	.container{
		margin-top: 40rpx;
		padding: 30rpx;
		background-color: #fff;
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
				.product-name{
					
				}
				.product-price{
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
