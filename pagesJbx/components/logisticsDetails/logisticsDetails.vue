<template>
	<view v-if="show">
		<u-popup v-model="show" mode="center" :round="10" >
			<view class="the-pop">
				<view class="pop-title">
					圆通物流
				</view>
				<scroll-view scroll-y="true" :style="{height: `calc(100vh - ${theScrollerHeight}rpx - 320rpx)`}">
					<view class="logistics-msg">
						<view class="logistics-left">
							<view class="date fz26"  v-for="(item,index) in list3">
								<view class="red-round">
								</view>
								{{item.date}}
							</view>
						</view>
						<view class="logistics-right">
							<view class="message fz26"  v-for="(item,index) in list3">
								{{item.message}}
							</view>
						</view>
					</view>
				</scroll-view>
				<!-- <button class="comfirm" @tap="comfirm()">确定</button> -->
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props:{
			show:{
				type:Boolean,
				default:true
			}
		},
		name:"logisticsDetails",
		data() {
			return {
				theScrollerHeight:getApp().globalData.navHeight,
				list3:[
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息'},
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息'},
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息'},
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息'},
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息'},
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息'},
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息'},
					{date:'11-20  10:20',message:' 这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息，，这里面是物流信息'},
				]
			};
		},
		methods:{
			comfirm(){
				this.$emit('update:show',false)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.the-pop{
		.comfirm{
			background-color: #009b4c;
			color: #fff;
			width: 80%;
			position: fixed;
			left: 10%;
			bottom: 100rpx;
		}
		.pop-title{
			height: 80rpx;
			text-align: center;
			color: #fff;
			background-color: #009b4c;
			line-height: 80rpx;
			margin-bottom: 40rpx;
		}
		.logistics-msg{
			display: flex;
			height: 800rpx;
			.logistics-right{
				.message{
					height:200rpx;
					width: 400rpx;
					padding: 10rpx;
					padding-right: 30rpx;
					margin-left: 20rpx;
					overflow: hidden;
				}
			}
			.logistics-left{
				.date{
					width: 200rpx;
					text-align: center;
					height: 200rpx;
					line-height: 200rpx;
					padding: 0 20rpx;
					position: relative;
					border-right: 4rpx solid #f2f2f2;
					.red-round{
						width: 16rpx;
						height: 16rpx;
						background-color: #ec808d;
						position: absolute;
						top: 0rpx;
						right: -10rpx;
						border-radius: 8rpx;
					}
				}
			}
		}
	}
	.my-scroll-view{
		width:600rpx;
	}
	
</style>