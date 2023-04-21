<template>
	<view class="container">
		<pageBar info="用户隐私协议" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<view class="container-agreement-title">
			用户隐私协议
		</view>
		<view class="container-agreement" v-for="(item,index) in list">
			<view class="container-agreement-item-title">
				{{item.title}}
			</view>
			<view class="container-agreement-info" v-for="(item2,index2) in item.infos">
				{{item2.info}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{title:'一、总则',infos:[
						{info:' 1.1　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。'},
						{info:' 1.2　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。'},
						{info:' 1.3　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。'},
						{info:' 1.4　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。'},
					]},
					{title:'一、总则',infos:[
						{info:' 1.1　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。'},
						{info:' 1.2　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。'},
						{info:' 1.3　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。'},
						{info:' 1.4　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。'},
					]},
					{title:'一、总则',infos:[
						{info:' 1.1　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。'},
						{info:' 1.2　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。'},
						{info:' 1.3　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。'},
						{info:' 1.4　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中勾选"我已阅读并接受"模块即表示用户与产品名称达成协议，完全接受本协议项下的全部条款。'},
					]},
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		margin: 10rpx 40rpx;
		.container-agreement-title{
			font-weight: 700;
			font-style: normal;
			font-size: 40rpx;
			line-height: 160rpx;
			text-align: center;
		}
		.container-agreement{
			font-style: normal;
			text-align: left;
			color: #333333;
			font-size: 32rpx;
		    line-height: 64rpx;
			.container-agreement-item-title{
				
			}
			.container-agreement-info{
				font-size: 28rpx;
				line-height: 48rpx;
				padding-bottom: 20rpx;
			}
		}
	}
</style>
