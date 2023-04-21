<template>
	<view>
		<pageBar info="积分" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<view class="header">
			<view>
				可用积分
			</view>
			<view class="header-num fz48">
				{{integral}}
			</view>
		</view>
		<view class="container">
			<view class="container-item" @tap="pointsMall('pointsMall')">
				<image class="container-item-img" src="/static/image/u25.png" mode=""></image>
				<view>积分兑换</view>
			</view>
			<view class="container-item" @tap="pointsMall('exchangeRecords')">
				<image class="container-item-img" src="/static/image/u25.png" mode=""></image>
				<view>兑换记录</view>
			</view>
		</view>
		<view class="footer">
			<oneSetting title="积分变更记录" info="查看更多"></oneSetting>
			<view class="footer-bottom">
				<view class="footer-bottom-left">
					<view class="">
						<view class="fz22">
							2022-11-01  订单完成送积分
						</view>
						<view class="fz22">
							订单号
						</view>
						<view class="fz22">
							2022-11-01  12:16:15
						</view>
					</view>
				</view>
				<view class="footer-bottom-right">
					+100
				</view>
			</view>
		</view>
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
				integral:334
			}
		},
		methods: {
			pointsMall(url){
				uni.navigateTo({
					url:`/pagesJbx/${url}/${url}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header{
		width: 750rpx;
		height: 300rpx;
		background: url('/static/image/u25.png') no-repeat center;
		background-size:750rpx 300rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #fff;
		.header-num{
			margin-top: 10rpx;
		}
	}
	.container{
		display: flex;
		justify-content: space-around;
		height: 160rpx;
		background-color: #fff;
		align-items: center;
		padding: 10rpx 80rpx;
		margin-bottom: 40rpx;
		.container-item{
			text-align: center;
			.container-item-img{
				width: 70rpx;
				height: 70rpx;
			}
		}
	}
	.footer{
		background-color: #fff;
		.footer-bottom{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 30rpx;
			.footer-bottom-left{
				
			}
			.footer-bottom-right{
				color: #009b4c;
			}
		}
		
	}
</style>
