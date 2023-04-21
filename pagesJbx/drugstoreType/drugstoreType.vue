<template>
	<view class="wrapper">
		<pageBar info="药店类型" navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<view class="drugstore" >
			<view class="drugstore-title" >
				<text class="require">*</text>请选择药店类型:
			</view>
			<view class="drugstore-item" v-for="(item,index) in list" @tap="goDrugstore(index)">
				<image class="item-pic" :src="item.imgSrc" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:1,
				list:[
					{imgSrc:"/static/image/u25.png"},
					{imgSrc:"/static/image/u25.png"},
					{imgSrc:"/static/image/u25.png"},
					{imgSrc:"/static/image/u25.png"},
				]
			}
		},
		methods: {
			goDrugstore(index){
				console.log(index);
				uni.navigateTo({
					url:`/pagesJbx/joinPharmacy/joinPharmacy?type=${index}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.drugstore{
		background-color: #fff;
		border-top:4rpx solid #e4e4e4;
		height: 100%;
		.drugstore-title{
			height: 100rpx;
			line-height: 100rpx;
			font-weight: 700;
			font-style: normal;
			color: #666666;
			text-align: left;
			padding-left: 30rpx;
			.require{
				color: red;
				margin-right: 10rpx;
			}
		}
		.drugstore-item{
			text-align: center;
			.item-pic{
				width: 650rpx;
				height: 250rpx;
			}
		}
	}
	
</style>
