<template>
	<view>
		<pageBar info="发票设置" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<scroll-view scroll-y="true" :style="{height: `calc(100vh - ${theScrollerHeight}rpx)`}">
			<view class="header fz26">
				<text class="require">*</text>
				<text>
					注意事项：
				</text>
				<view v-for="(item,index) in list">
					{{index+1}})  {{item.info}}
				</view>
			</view>
			<view class="container">
				<view class="container-title fz36">
					<view class="red-border"></view>
					发票类型
				</view>
				<view class="container-btn">
					<button :class="[checked2?'first-btn':'second-btn','fz26']" @click="checked2=!checked2">普通发票</button>
					<button :class="[!checked2?'first-btn':'second-btn','fz26']" @click="checked2=!checked2">专用发票</button>
				</view>
				<checkbox class="the-check" :checked="checked" /><text class="fz26">可以接受电子发票</text>
				<view class="description">
					<view class="fz26700 description-title">
						*电子发票：
					</view>
					<view class="fz26700">
						功效等同于普通纸质发票。增值税电子普通发票的开票方和受票方需要纸质发票的，可以自行打印增值税电子普通发票的版式文件，其法律效力、基本用途、基本使用规定等与税务机关监制的增值税普通发票相同。
					</view>
				</view>
			</view>
			<view class="footer">
				<view class="">
					<view class="footer-label">
						<view class="require">*</view>
							<text class="fz267006">公司名称</text>
							<text class="fz24A" style="margin-left:10rpx;">(公司执照上的“统公司名称”)</text>
							</view>
					<input class="the-input" placeholder="这里是公司名称" placeholder-class="pcs" type="text" value="" />
				</view>
				<view class="">
					<view class="footer-label">
						<view class="require">*</view>
							<text class="fz267006">纳税人识别号</text>
							<text class="fz24A" style="margin-left:10rpx;">(营业执照上的“统一社会信用代码”)</text>
							</view>
					<input class="the-input" placeholder="请输入营业执照上的公司名称" placeholder-class="pcs" type="text" value="" />
				</view>
				<view class="">
					<view class="footer-label">
						<view class="require">*</view>
							<text class="fz267006">地址</text>
							<text class="fz24A" style="margin-left:10rpx;"></text>
							</view>
					<input class="the-input" placeholder="请输入营业执照上的统一社会信用代码" placeholder-class="pcs" type="text" value="" />
				</view>
				<view class="">
					<view class="footer-label">
						<view class="require"></view>
							<text class="fz267006">姓名</text>
							<text class="fz24A" style="margin-left:10rpx;"></text>
							</view>
					<input class="the-input" placeholder="请输入姓名" placeholder-class="pcs" type="text" value="" />
				</view>
				<view class="">
					<view class="footer-label">
						<view class="require"></view>
							<text class="fz267006">手机号</text>
							<text class="fz24A" style="margin-left:10rpx;"></text>
							</view>
					<input class="the-input" placeholder="请输入手机号" placeholder-class="pcs" type="text" value="" />
				</view>
				<view class="">
					<view class="footer-label">
						<view class="require"></view>
							<text class="fz267006">银行卡号</text>
							<text class="fz24A" style="margin-left:10rpx;"></text>
							</view>
					<input class="the-input" placeholder="请输入银行卡号" placeholder-class="pcs" type="text" value="" />
				</view>
				<view class="">
					<view class="footer-label">
						<view class="require"></view>
							<text class="fz267006">开户行地址</text>
							<text class="fz24A" style="margin-left:10rpx;"></text>
							</view>
					<input class="the-input" placeholder="请输入开户行地址" placeholder-class="pcs" type="text" value="" />
				</view>
				<view class="">
					<view class="footer-label">
						<view class="require"></view>
							<text class="fz26700">一般纳税人证明</text>
							<text class="fz24A" style="margin-left:10rpx;">(实务证明委托书)</text>
							</view>
					<view class="certificate-pic">
						<image class="certificate-img" src="/static/image/u25.png" mode=""></image>
						<view class="certificate-info fz26700">
							立即上传
						</view>
					</view>
				</view>
				<button class="comfirm-btn" @tap="login()">提交审核</button>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				theScrollerHeight:getApp().globalData.navHeight,
				checked:true,
				checked2:true,
				list:[
					{info:'您修改发票信息后，我们将在1个工作日内完成审核，发票信息审核期间不影响下单。'},
					{info:'如您提供的信息有误，将影响及时发货,请务必认真校对开票信息。'},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.pcs{
		margin-left: 10rpx;
		font-size: 24rpx;
	}
	.require{
		width: 15rpx;
		height: 40rpx;
		color: #d9001b;
		margin-right: 10rpx;
	}
	.header{
		background-color: #fff;
		border-top: 4rpx solid #f5f5f5;
		padding: 20rpx 20rpx;
		margin: 10rpx 0 20rpx 0;
		view,text{
			margin-top: 8rpx;
		}
	}
	.container{
		margin: 40rpx 0;
		background-color: #fff;
		padding: 20rpx 20rpx;
		.container-btn{
			display: flex;
			.first-btn,.second-btn{
				width: 180rpx;
				height: 70rpx;
				text-align: center;
				line-height: 70rpx;
				margin: 20rpx 40rpx 20rpx 10rpx;
			}
			.first-btn{
				background-color: #009b4c;
				color: #fff;
			}
			.second-btn{
				background-color: #fff;
				border: 2rpx solid #000;
			}
		}
		.the-check{
			width: 30rpx;
			height: 30rpx;
			margin-right: 40rpx;
		}
		.description{
			background-color: #469efe;
			border-radius: 20rpx;
			margin-top: 30rpx;
			padding: 20rpx;
			color:#fff;
			.description-title{
				text-align-last: left;
			}
		}
		.container-title{
			padding-left: 10rpx;
			position: relative;
			.red-border{
				width: 4rpx;
				height: 30rpx;
				position: absolute;
				left:-4rpx;
				top:4rpx;
				background-color: #d9001b;
			}
		}
	}
	.footer{
		padding: 20rpx 30rpx;
		background-color: #fff;
		padding-bottom: 60rpx;
		.footer-label{
			display: flex;
		}
		.the-input{
			height: 80rpx;
			background-color: rgba(255, 255, 255, 1);
			box-sizing: border-box;
			border-width: 1px;
			border-style: solid;
			border-color: rgba(170, 170, 170, 1);
			border-radius: 5px;
			margin: 20rpx;
			padding: 20rpx;
		}
		.certificate-pic{
			margin-left: 20rpx;
			padding-top: 20rpx;
			margin-top: 40rpx;
			margin-bottom: 40rpx;
			width: 260rpx;
			height: 163rpx;
			border: 2rpx solid #000;
			text-align: center;
			.certificate-img{
				display: inline-block;
				width:92rpx;
				height:92rpx;
			}
			.certificate-info{
				color: #AAA;
			}
		}
	}
</style>
