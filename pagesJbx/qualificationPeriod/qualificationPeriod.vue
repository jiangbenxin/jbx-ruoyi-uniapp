<template>
	<view>
		<pageBar info="资质上传" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<view class="container">
			<view class="header">
				您仅需要提交相关证件资质，中正方达在一个工作日内完成审核后为您开通采购资质，您即可享受专业、高效、优惠的采购服务。
			</view>
			<view class="footer">
				<text class="footer-title">资质信息</text>
				<image class="footer-img" src="/static/image/u25.png"></image>
				<view class="footer-msg">质保协议为一年一次，临期请尽快上传，以免到期无法采购。
				</view >
				<view v-if="theType !== 2"  class="footer-certificate" >
					<view class="footer-certificates" v-for="(item,index) in list2">
						<text class="footer-certificates-require"  >{{item.required===true?"*":''}}</text>
						<view>
							<text class="footer-certificates-title">{{item.title}}</text>
							<view class="footer-certificate-img" @click="takeImg()">
								<image  v-if="src==''" class="footer-certificate-img-pic" src="/static/image/u25.png" mode=""></image>
								<view  v-if="src==''" class="footer-certificate-info">
									{{item.picInfo}}
								</view>
								<u-image v-if="src!==''" :showLoading="true" :src="src" width="100%" height="100%"></u-image>
							</view>
						</view>
					</view>
				</view>
				<view v-if="theType !== 2" class="footer-certificate" >
					<view class="footer-certificates" v-for="(item,index) in list3">
						<text class="footer-certificates-require"  >{{item.required===true?"*":''}}</text>
						<view>
							<text class="footer-certificates-title">{{item.title}}</text>
							<view class="footer-certificate-img" @click="takeImg()">
								<image  v-if="src==''" class="footer-certificate-img-pic" src="/static/image/u25.png" mode=""></image>
								<view  v-if="src==''" class="footer-certificate-info">
									{{item.picInfo}}
								</view>
								<u-image v-if="src!==''" :showLoading="true" :src="src" width="100%" height="100%"></u-image>
							</view>
						</view>
					</view>
				</view>
				<view v-if="theType == '2'" class="footer-certificate" >
					<view class="footer-certificates" v-for="(item,index) in list5">
						<text class="footer-certificates-require"  >{{item.required===true?"*":''}}</text>
						<view>
							<text class="footer-certificates-title">{{item.title}}</text>
							<view class="footer-certificate-img" @click="takeImg()">
								<image  v-if="src==''" class="footer-certificate-img-pic" src="/static/image/u25.png" mode=""></image>
								<view  v-if="src==''" class="footer-certificate-info">
									{{item.picInfo}}
								</view>
								<u-image v-if="src!==''" :showLoading="true" :src="src" width="100%" height="100%"></u-image>
							</view>
						</view>
					</view>
				</view>
				<button class="submit-button" >提交审核</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list5:[
					{title:'质保协议::',picInfo:'立即上传',required:true},
					{title:'购置合同:',picInfo:'立即上传',required:true},
				],
				theType:2,
				src:''
			}
		},
		methods: {
			example(){
				uni.navigateTo({
					url:'/pagesJbx/example/example'
				})
			},
			takeImg(){
				let that = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						that.src = res.tempFilePaths[0];
						// 图片base64
						// uni.getFileSystemManager().readFile({
						// filePath: that.imgUrl1,
						// encoding: 'base64',
						// success: r => {
						// 	console.log('r.data', r.data);
						// 	that.imgUrl1 = 'data:image/jpeg;base64,' + r.data;
						// 	// 'data:image/jpeg;base64,'  这个代码是我后加上去的，要不然就渲染不到页面上去
						// 	console.log('that.imgUrl1', that.imgUrl1)
						// }
						
						// })
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		border-top: 6rpx solid #f2f2f2;
		height: 100%;
		.header{
			font-family: 'Arial Normal', 'Arial', sans-serif;
			font-weight: 400;
			font-style: normal;
			font-size: 26rpx;
			background-color: #fff;
			padding: 30rpx;
		}
		.footer{
			background-color: #fff;
			padding: 30rpx;
			.footer-title{
				font-size: 42rpx;
				border-left:5rpx solid red;
				padding-left: 15rpx;
			}
			.footer-img{
				width: 670rpx;
				height: 120rpx;
				margin-top: 10rpx;
				margin-bottom: 10rpx;
			}
			.footer-msg{
				font-family: 'Arial Normal', 'Arial', sans-serif;
				font-weight: 400;
				font-style: normal;
				font-size: 26rpx;
			}
			.footer-certificate{
				display: flex;
				flex-wrap: wrap;
				.footer-certificates{
					display: flex;
					width: 50%;
					.footer-certificates-require{
						color: red;
						margin-right: 20rpx;
						width:14rpx;
					}
					.footer-certificates-title{
						color: #666666;
						font-size: 26rpx;
					}
					.footer-certificate-img{
						margin-top: 40rpx;
						margin-bottom: 40rpx;
						width: 260rpx;
						height: 183rpx;
						border: 2rpx solid #000;
						text-align: center;
						.footer-certificate-img-pic{
							display: inline-block;
							width:92rpx;
							height:92rpx;
						}
						.footer-certificate-info{
							font-weight: 700;
							font-style: normal;
							font-size: 26rpx;
							color: #666666;
						}
					}
				}
			}
			.submit-button{
				font-weight: 400;
				font-style: normal;
				font-size: 26rpx;
				color: #FFFFFF;
				line-height: 100rpx;
				color: #fff;margin-top: 30rpx;background-color: #009b4c;
				border-radius: 20rpx;
				height: 100rpx;
			}
		}
	}
</style>
