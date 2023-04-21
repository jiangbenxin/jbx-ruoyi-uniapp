<template>
	<view class="wrapper">
		<pageBar info="申请售后服务" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000" :fontSize="13"></pageBar>
		<view class="container">
			<view class="left">
				<view class="title">
					<view class="red-border"></view>
					订单信息
				</view>
			</view>
			<view class="right">
				<view class="right-info" v-for="(item,index) in list2"> 
					<text class="fz22 right-info-title">{{item.title}}:</text>   
					<text class="fz22A"> &nbsp; {{item.info}}</text>
				</view>
			</view>
		</view>
		<view class="container">
			<view class="left">
				<view class="title">
					<view class="red-border"></view>
					订单信息
				</view>
			</view>
			<view class="right">
				<view class="right-selected">
					<text class="selected-title">售后方式</text>
					<view class="the-selected" @tap="openSelection()">
						<view class="fz26 selected-info" >
							{{selectInfo}}
						</view>
						<view  v-if="show" class="selected-info-options" >
							<view class="option fz26" v-for="(item,index) in list" @tap="select(index)">
								{{item.title}}
							</view>
						</view>
					</view>
				
				</view>
			</view>
		</view>
		<view class="container">
			<view class="left">
				<view class="title">
					<view class="red-border"></view>
					售后原因
				</view>
			</view>
			<view class="right">
				<textarea class="right-ipt" name="" id="" cols="30" rows="10" placeholder="请输入您的售后原因"></textarea>
			</view>
		</view>
		<view class="container"><button class="comfirm-btn">提交</button></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list2:[
					{title:'商品名称',info:' 配送'},
					{title:'配送方式',info:' 快递配送'},
					{title:'支付方式',info:' 微信支付'},
					{title:'订单编号',info:12651564895125612},
					{title:'创建时间',info:' 2022-11-20  16:20:19'},
				],
				list:[
					{title:''},
					{title:'已收到货退货退款'},
					{title:'未收到货退款'},
				],
				show:false,
				selectInfo:''
			};
		},
		methods:{
			openSelection(){
				this.show = !this.show
			},
			select(index){
				this.selectInfo = this.list[index].title
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	background-color: #fff;
	border-radius: 40rpx;
	margin-top: 20rpx;
	margin-left: 40rpx;margin-right: 40rpx;
	.left{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10rpx;
		padding: 20rpx 40rpx;
		border-bottom: 4rpx solid #f5f5f5;
		.title{
			position: relative;
			font-size: 36rpx;
			.red-border{
				width: 4rpx;
				height: 30rpx;
				position: absolute;
				left:-10rpx;
				top:4rpx;
				background-color: #d9001b;
			}
		}
	}
	.right{
		padding: 0rpx 40rpx 20rpx 40rpx;
		.right-info{
			.right-info-title{
				margin-right: 20rpx;
			}
		}
		.right-ipt{
			width: 100%;
			height: 200rpx;
			margin-top: 20rpx;
		}
		.right-selected{
			display: flex;
			.the-selected{
				flex: 1;
				border: 2rpx solid #000;
				box-sizing: border-box;
				margin-left: 40rpx;
				height: 40rpx;
				.option{
					height: 40rpx;
				}
				.selected-info{
					height: 40rpx;
					line-height: 40rpx;
				}
				.selected-info-options{
					border: 2rpx solid #000;
					box-sizing: border-box;
				}
			}
		}
	}
}
</style>
