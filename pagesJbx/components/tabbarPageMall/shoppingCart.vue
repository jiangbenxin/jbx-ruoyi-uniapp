<template>
	<view>
		<view class="header">
			<view class="header-all-num fz28">
				全部共（{{allNum}}）件产品
			</view>
			<view class="header-delete-product fz28" @tap="deleteProduct()">
				删除（{{deleteNum}}）
			</view>
		</view>
		<scroll-view scroll-y="true" :style="{height: `calc(100vh - ${theScrollerHeight}rpx - 300rpx)`}">
			<view class="products">
				<view class="product" v-for="(item,index) in list">
						<radio class="product-radio" @tap="checked(index)" value="" :checked="item.checked"/><text></text>
					<image class="product-img" :src="item.imgSrc" mode=""></image>
					<view class="product-info">
						<view class="product-name fz32">
							{{item.productName}}
						</view>
						<view class="product-num fz28">
							规格：{{item.num}}盒
						</view>
						<view class="product-price fz28">
							￥{{item.productPrice}}
						</view>
					</view>
					<numBox :productNum.sync="item.productNum"></numBox>
				</view>
			</view>
		</scroll-view>
		<view class="footer">
			<view class="footer-left" @tap="allCheckedFn()">
				<radio :checked="allChecked" />
				<text>全选</text>
			</view>
			<text class="footer-all-price">合计：<text >￥{{allPrice}}</text></text>
			<text class="footer-settlement">
				结算
			</text>
		</view>
	</view>
</template>

<script>
	import numBox from '../../components/numBox/numBox.vue'
	export default {
		components:{
			numBox
		},
		data() {
			return {
				theScrollerHeight:getApp().globalData.navHeight,
				selected:2,
				value:{num:2},
				allChecked:false,
				list:[
					{checked:true,imgSrc:'/static/image/u25.png',productName:'产品名称',productNum:23,num:4,productPrice:169},
					{checked:true,imgSrc:'/static/image/u25.png',productName:'产品名称',productNum:23,num:4,productPrice:169},
					{checked:true,imgSrc:'/static/image/u25.png',productName:'产品名称',productNum:23,num:4,productPrice:169},
					{checked:true,imgSrc:'/static/image/u25.png',productName:'产品名称',productNum:23,num:4,productPrice:169},
					{checked:false,imgSrc:'/static/image/u25.png',productName:'产品名称',productNum:34,num:2,productPrice:168},
					{checked:false,imgSrc:'/static/image/u25.png',productName:'产品名称',productNum:34,num:2,productPrice:168},
					{checked:false,imgSrc:'/static/image/u25.png',productName:'产品名称',productNum:34,num:2,productPrice:168},
					{checked:false,imgSrc:'/static/image/u25.png',productName:'产品名称',productNum:34,num:2,productPrice:168},
					{checked:false,imgSrc:'/static/image/u25.png',productName:'产品名称',productNum:34,num:2,productPrice:168},
				]
			}
		},
		computed:{
			deleteNum(){
				let num=0
				this.list.forEach((item,index)=>{
					if(item.checked){
						num++
					}
				})
				return num
			},
			allNum(){
				return this.list.length
			},
			allPrice(){
				let allPrice = 0
				this.list.forEach((item,index)=>{
					if(item.checked){
					allPrice = allPrice+item.productNum *item.productPrice * item.num	
					}
				})
				return allPrice
			}
		},
		onLoad() {
			this.list.forEach((item,index)=>{
				console.log(item);
			})
		},
		methods: {
			checked(index){
				this.list[index].checked = !this.list[index].checked
				this.allChecked=this.list.every((item,index)=>{
					return item.checked===true
				})
			},
			deleteProduct(){
				this.list = this.list.filter((item,index)=>{
					return item.checked==false
				})
			},
	
			allCheckedFn(){
				console.log(this.allChecked);
				this.allChecked = !this.allChecked
				this.list.forEach((item,index)=>{
					item.checked = this.allChecked
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.header{
	display: flex;
	justify-content: space-between;
	height: 60rpx;
	align-items: center;
	padding:20rpx;
}
.footer{
	border-bottom: 4rpx solid #e4e4e4;
	box-sizing: border-box;
	position: fixed;
	bottom: 120rpx;
	width: 100%;
	height: 120rpx;
	background-color: #fff;
	display: flex;
	align-items: center;
	.footer-left{
		margin-left: 40rpx;
	}
	.footer-all-price{
		flex:1;
		text-align: right;
		text{
			color: #d9001b;
		}
		margin-right: 40rpx;
	}
	.footer-settlement{
		width: 200rpx;
		height: 100%;
		background-color: #d9001b;
		text-align: center;
		line-height: 120rpx;
		color: #fff;
	}
}
.products{
	background-color: #fff;
	border-radius: 40rpx;
	// height: 100%;
	margin-left: 40rpx;
	margin-right: 40rpx;
	.product{
		height: 200rpx;
		display: flex;
		align-items: center;
		radio{
			padding-left: 30rpx;
		}
		.product-img{
			width: 140rpx;
			height: 140rpx;
		}
		.product-info{
			margin-left: 20rpx;
			width: 200rpx;
			.product-num{
				margin-top: 15rpx;
				margin-bottom: 15rpx;
			}
			.product-price{
				color: #D9001B;
			}
		}
			
	}
}
.minus {
		width: 22px;
		height: 22px;
		border-width: 1px;
		border-color: #E6E6E6;
		border-style: solid;
		border-top-left-radius: 100px;
		border-top-right-radius: 100px;
		border-bottom-left-radius: 100px;
		border-bottom-right-radius: 100px;
		display: flex;
		justify-content: space-between;
		justify-content: center;
		align-items: center;
	}
.input {
	padding: 0 10px;
}
.plus {
	width: 22px;
	height: 22px;
	background-color: #FF0000;
	border-radius: 50%;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	justify-content: center;
	align-items: center;
}

</style>
