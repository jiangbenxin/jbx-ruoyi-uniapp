<template>
	<view class="wrapper">
		<pageBar info="商务顾问" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<view class="header">
			<image class="logo" src="/static/image/u25.png" mode=""></image>
			<view class="">
				<view class="user-name fz36">
					用户昵称
				</view>
				<view class="info fz26">
					商务顾问
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="consultant" v-for="(item,index) in list" @tap="goPage(index)">
				<image class="icon" :src="item.imgSrc" mode=""></image>
				<view class="title fz26">
					{{item.title}}
				</view>
			</view>
		</view>
		<u-popup  v-model="show" mode="center" :round="20">
		   <view class="pop-container">
				<view class="pop-title">我的邀请码</view>
				<view class="pop-info">5485613851351</view>
				<view class="pop-footer">
					<view class="pop-btn">
						<button class="pop-btn-style fz26" @tap="show = !show">复制邀请码</button>
					</view>
				</view>
		   </view>
		</u-popup>
		<u-popup v-model="show2" mode="center" :round="10" >
			<view class="pop2">
				<image class="img" src="/static/image/u25.png" mode=""></image>
				<button class="comfirm fz26" @tap="saveImg()">保存图片</button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				show2:false,
				list:[
					{imgSrc:'/static/image/u25.png',title:'我的客户'},
					{imgSrc:'/static/image/u25.png',title:'客户订单'},
					{imgSrc:'/static/image/u25.png',title:'要求名片'},
					{imgSrc:'/static/image/u25.png',title:'邀请码'},
				]
			};
		},
		methods:{
			goPage(index){
				if(index==0||index==1){
					let arr = [
						'/pagesJbx/myClient/myClient',
						'/pagesJbx/customerOrder/customerOrder',
					]
					uni.navigateTo({
						url:arr[index]
					})
				}else if(index==2){
					this.show2 = !this.show2
				}else if(index==3){
					this.show = !this.show
				}
				
			},
			
			
			 //点击保存
			    saveImg() {
			      let that = this;
			      // 向用户发起授权请求
			      uni.authorize({
			        scope: 'scope.writePhotosAlbum',
			        success: () => {
			          // 已授权
			          that.downLoadImg();
			        },
			        fail: () => {
			          // 拒绝授权，获取当前设置
			          uni.getSetting({
			            success: (result) => {
			              if (!result.authSetting['scope.writePhotosAlbum']) {
			                that.isAuth()
			              }
			            }
			          });
			        }
			      })
			    },
			    downLoadImg(){
			      //下载图片资源至本地，返回文件的本地临时路径
			      uni.downloadFile({
			        url:'http://img.daimg.com/uploads/allimg/210114/1-210114151951.jpg',
			        success: (res) =>{
			          if (res.statusCode === 200){
			            //保存图片至相册
			            uni.saveImageToPhotosAlbum({
			              filePath: res.tempFilePath,
			              success: function() {
			                uni.showToast({
			                  title: "保存成功",
			                  icon: "none"
			                });
			              },
			              fail: function() {
			                uni.showToast({
			                  title: "保存失败，请稍后重试",
			                  icon: "none"
			                });
			              }
			            });
			          }
			        }
			      })
			    },
			  //引导用户开启权限
			    isAuth() {
			      uni.showModal({
			        content: '由于您还没有允许保存图片到您相册里,无法进行保存,请点击确定允许授权',
			        success: (res) => {
			          if (res.confirm) {
			            uni.openSetting({
			              success: (result) => {
			                console.log(result.authSetting);
			              }
			            });
			          }
			        }
			      });
			    },
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep .u-mode-center-box{
		border-radius: 20px;
	}
	.pop2{
		.img{
			width: 600rpx;
			height: 1000rpx;
		}
		.comfirm{
			position: fixed;
			bottom: 60rpx;
			left: 50%;
			width: 400rpx;
			line-height: 80rpx;
			height: 80rpx;
			transform: translate(-50%,0);
			background-color: #00964a;
			color: #fff;
		}
	}
	.pop-container{
		width: 600rpx;
		border-radius: 100rpx;
		.pop-title{
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 36rpx;
		}
		.pop-info{
			border-top: 4rpx solid #f2f2f2;
			border-bottom: 4rpx solid #f2f2f2;
			height: 120rpx;line-height: 120rpx;
			text-align: center;
			font-size: 30rpx;
		}
		.pop-footer{
			display: flex;
			justify-content: space-around;
			align-items: center;
			.pop-btn{
				margin-top: 20rpx;
				.pop-btn-style{
					background-color: #009b4c;
					color: #fff;
					width: 400rpx;
					height: 80rpx;
					line-height: 80rpx;
					margin-bottom: 40rpx;
				}
			}
		}
	}
	
	.header{
		display: flex;
		align-items: center;
		background-color: #009b4c;
		color: #fff;
		.logo{
			margin: 30rpx;
			width: 120rpx;
			height: 120rpx;
		}
		.user-name{
			margin-bottom: 10rpx;
		}
		.info{
		}
	}
	.footer{
		display: flex;
		align-items: center;
		
		.consultant{
			text-align: center;
			background-color: #fff;
			height: 180rpx;
			flex: 1;
			border-right: 4rpx solid #f5f5f5;
			.icon{
				margin-top: 20rpx;
				width: 64rpx;
				height: 64rpx;
			}
			.title{
				margin-top: 10rpx;
			}
		}
		.consultant:nth-child(4){
			border: none;
		}
	}

</style>
