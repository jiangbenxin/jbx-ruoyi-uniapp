<template>
	<view>
		<pageBar info="收获地址/发票信息" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000" :fontSize="13"></pageBar>
		<view class="container">
			<view class="container-red-border">
			</view>
			<view class="container-title fz36">
				当前所在药店
			</view>
			<view class="container-company-name fz28">
				此处为资质上传的公司名
			</view>
		</view>
		<view class="container">
			<view class="container-red-border">
			</view>
			<view class="container-address">
				我的收货地址
			</view>
			<view class="container-personal-address fz28">
				<image class="container-personal-img" src="/static/image/u25.png" mode=""></image>
				<text>
					此处为认证时所上传药品经营许可证地址，不支持修改
				</text>
			</view>
			<view class="container-personal-address fz28">
				<image class="container-personal-img" src="/static/image/u25.png" mode=""></image>
				<text>
					李某某/15555555555
				</text>
			</view>
		</view>
		<oneSetting title="我的发票设置" info="请选择发票类型" url="/pagesJbx/invoiceSetting/invoiceSetting"></oneSetting>
		<oneSetting title="我的资质信息" info="点击上传资质" url="/pagesJbx/qualificationPeriod/qualificationPeriod"></oneSetting>
		<oneSetting title="我的经营范围" info="请开通经营范围，完善资料"></oneSetting>
	</view>
</template>

<script>
	import oneSetting from '../../pagesJbx/components/oneSetting/oneSetting.vue'
	export default {
		components:{
			oneSetting
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
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
		.container-personal-address{
			display: flex;
			color: #333333;
			margin-top: 20rpx;
			.container-personal-img{
				width: 36rpx;
				height: 36rpx;
				margin-right: 20rpx;
			}
		}
		.invoice{
			color: #AAAAAA;
			image{
				width: 32rpx;
				height: 32rpx;
			}
		}
	}

</style>
