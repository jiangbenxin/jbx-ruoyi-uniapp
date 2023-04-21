<template>
	<view>
		<view class="container">
			<view class="container-title">
				<view class="red-border"></view>
				{{title}}
			</view>
			<view class="container-invoice" @tap="clickType()">
				<image class="container-invoice-avatar" v-if="imgSrc&&imgSrc.is||false" :src="imgSrc.src||''" mode=""></image>
				<text>{{info}}</text>
				<image class="container-invoice-icon" src="/static/image/u25.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'oneSetting',
		props:{
			title:{
				type:String,
				default:''
			},
			click:{
				type:String,
				default:''
			},
			info:{
				type:String|Number,
				default:0
			},
			url:{
				type:String,
				default:''
			},
			imgSrc:{
				type:Object,
				default:()=>{src:'/static/image/u25.png'}
			},
		},
		name:"oneSetting",
		data() {
			return {
			};
		},
		methods:{
			clickType(){
				let that = this
				console.log(this.click)
				if(this.click=='保存图片到手机'){
					uni.authorize({
					    scope: 'scope.userLocation',
					    success() {
					        uni.downloadFile({
					        	url: 'https://files.axshare.com/gsc/6885KM/4e/c9/9f/4ec99f9030624406990ffc5ef044988b/images/%E5%90%AF%E5%8A%A8%E9%A1%B5/u6.png?pageId=7652b2f2-23cc-40bf-b184-ad9ac8ab3a53',
					        	success: res => {
					        		if (res.statusCode === 200) {
					        			uni.saveImageToPhotosAlbum({
					        				filePath: res.tempFilePath,
					        				success: function() {
					        					uni.showToast({
					        						title: '保存成功',
					        						duration: 2000
					        					})
					        
					        				},
					        				fail: function() {
					        					uni.showToast({
					        						title: '保存失败',
					        						duration: 2000
					        					})
					        
					        				}
					        			})
					        		} else {
					        			uni.showToast({
					        				title: '保存失败',
					        				duration: 2000
					        			})
					        		}
					        	}
					        })
					    }
					})
				}else if(this.click=='修改头像'){
					uni.chooseImage({
						count: 1, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], //从相册选择
						success: function(res) {
							that.imgUrl1 = res.tempFilePaths[0];
							let imgSrc22 = {is:true,src:that.imgUrl1}
							that.$emit('update:imgSrc',imgSrc22)
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
				}else if(this.click=='拨打电话'){
					console.log(this.info);
					uni.makePhoneCall({
						phoneNumber: this.info //仅为示例
					});
				}else if(this.click=='扫二维码'){
					uni.scanCode({
						success:function(res){
							console.log(JSON.stringify(res));
						}
					})
				}else if(this.click==''){
					uni.navigateTo({
						url:this.url,
					})
				}else if(this.click==''){
					uni.navigateTo({
						url:this.url,
					})
				}
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10rpx;
		background-color: #fff;
		padding: 30rpx 40rpx;
		.container-title{
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
		.container-invoice{
			font-size: 28rpx;
			color: #AAAAAA;
			display: flex;
			align-items: center;
			.container-invoice-avatar{
				width: 80rpx;
				height: 80rpx;
			}
			.container-invoice-icon{
				width: 32rpx;
				height: 32rpx;
			}
		}
	}
</style>