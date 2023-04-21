<template>
	<view>
		<view class="num-box">
			<view class="reduce" @tap="reduce()">
				-
			</view>
			<view class="num">
				{{productNum}}
			</view>
			<view class="add" @tap="add()">
				+
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			productNum:{
				type:Number,
				default:0
			}
		},
		name:"numBox",
		data() {
			return {
				
			};
		},
		methods:{
			reduce(){
				let newProductNum = this.productNum-1
				if(this.productNum>1){
					this.$emit('update:productNum',newProductNum)
				}
			},
			add(){
				let newProductNum = this.productNum+1
				this.$emit('update:productNum',newProductNum)
			},
		}
	}
</script>

<style lang="scss" scoped>
.num-box{
	margin: 20rpx;
	width: 200rpx;
	height: 50rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 2rpx solid #000;
	border-radius: 25rpx;
	.reduce{
		margin: 5rpx;
		width: 42rpx;
		height: 42rpx;
		border-radius: 50%;
		text-align: center;
		line-height: 38rpx;
		background-color: #d7d7d7;
	}
	.add{
		margin: 5rpx;
		color: #fff;
		width: 42rpx;
		height: 42rpx;
		border-radius: 50%;
		text-align: center;
		line-height: 38rpx;
		background-color: red;
	}
}
</style>