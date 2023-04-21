<template>
	<view>
		<pageBar info="商家信息" :navHeightValue="50" navBackgroundColor="#fff" container-titleColor="#000" :fontSize="13"></pageBar>
		<view class="container first">
			<view class="container-red-border">
			</view>
			<view class="container-title fz36">
				商家名称
			</view>
			<view class="container-company-name fz28">
				云南中正方达药业有限公司
			</view>
		</view>
		<view class="container">
			<view class="container-red-border">
			</view>
			<view class="container-title fz36">
				商家地址
			</view>
			<view class="container-company-name fz28">
				这里是商家的地址，这里是商家的地址，这里是商家的地址，这里是商家的地址，
			</view>
		</view>
		<view class="container">
			<view class="container-red-border">
			</view>
			<view class="container-title fz36">
				经营范围
			</view>
			<view class="business-scope fz26A">
				这里展示商家的经营范围
			</view>
		</view>
		<view class="container">
			<view class="container-red-border">
			</view>
			<view class="container-title fz36">
				商家资质
			</view>
			<view class="container-company-name">
				<view class="qualifications">
					<image v-for="(item,index) in list" class="qualification-img" src="/static/image/u25.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{imgSrc:"/static/image/u25.png"},
					{imgSrc:"/static/image/u25.png"},
					{imgSrc:"/static/image/u25.png"},
					{imgSrc:"/static/image/u25.png"},
					{imgSrc:"/static/image/u25.png"},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.first{
		border-top: 2rpx solid #f5f5f5;
	}
	.qualifications{
		display: flex;
		flex-wrap: wrap;
		.qualification-img{
			margin-right: 23rpx;
			margin-bottom: 23rpx;
			width: 210rpx;
			height: 288rpx;
		}
		.qualification-img:nth-child(3n){
			margin-right: 0rpx;
		}
	}
	
	.business-scope{
		border-top: 2rpx solid #f5f5f5;
		margin-top: 20rpx;
	}
	.container{
		margin-bottom: 30rpx;
		background-color: #fff;
		position: relative;
		padding: 30rpx 40rpx;
		.container-red-border{
			width: 4rpx;
			height: 30rpx;
			position: absolute;
			left: 30rpx;
			top:35rpx;
			background-color: #d9001b;
		}
		.container-title{
		}
		.container-company-name{
			margin-top: 20rpx;
		}
		.personal-address{
			display: flex;
			color: #333333;
			margin-top: 20rpx;
			.personal-img{
				width: 36rpx;
				height: 36rpx;
				margin-right: 20rpx;
			}
		}
	}
</style>
