<template>
	<view class="wrapper">
		<view class="wrapper-init">
			<image v-if="flag1" class="init-logo" src="/static/image/u25.png" mode=""></image>
			<image v-if="flag1" class="init-img"  src="/static/image/u3.svg" mode=""></image>
			<button v-if="flag3" class="init-btn" @tap="goLogin()">立即体验</button>
			<image v-if="flag3" class="init-logo-big" src="/static/image/u25.png" mode=""></image>
		</view>
		<view v-if="!flag2" class="login">
				<image class="logo" src="/static/image/u25.png" mode=""></image>
			<view class="logo-name">
				中正方达
			</view>
			<view class="login-ipt" >
				<image class="the-icon" src="/static/image/u25.png"></image>
				<u-input class="ipt" placeholder="手机号码"  v-model="form.name" :border="false" />
			</view>
			<view class="login-ipt" >
				<image class="the-icon" src="/static/image/u25.png"></image>
				<u-input class="ipt" placeholder="登录密码" type="password" v-model="form.intro" :border="false" />
			</view>
			<!-- <button class="comfirm-btn" open-type="share" @tap="login()">登录</button> -->
			<button class="comfirm-btn"  @tap="login()">登录</button>
			<view class="container">
				<view @tap="register">注册新用户</view>
				<view @tap="findPassword">找回密码</view>
			</view>
			<view class="footer">
				<radio class="single-radio" :checked="value2" @tap="value2=!value2"/>
				<text class="fz26A">已阅读并同意</text>
				<text class="fz26 agreement" @tap="serviceAgreement">《用户服务协议》</text>、
				<text class="fz26 agreement" @tap="privacyAgreement">《用户隐私政策》</text>
			</view>
			<u-toast ref="uToast"></u-toast>
		</view>
		<u-popup  mode="bottom" v-model="getNickShow" @close="getNickShow = false" round='16rpx'>
			<view class="get-nick-box">
				<view class="flex-align-center">
					<image :src="project.logo" class="get-nick-box-logo-img" mode="aspectFit"></image>
					<view class="get-nick-box-name">
						{{project.name}}
						<text>申请</text>
					</view>
				</view>
				<view class="get-nick-box-msg1 mt30">获取你的头像、昵称</view>
				<view class="get-nick-box-msg2">展示个人信息</view>
				<view class="get-nick-box-info10">
					<button type="default" class="flex_spacebetween get-nick-box-button-css" open-type="chooseAvatar"  @chooseavatar="chooseavatar">
						<view class="flex-align-center toubox">
							<view class="t1">头像</view>
							<view v-if="avatar == ''" class="avatarbox">
								<u-icon name="account-fill" size="100" color="#999"></u-icon>
							</view>
							<image v-else :src="avatar" class="avatarimg"></image>
							<u-icon name="arrow-right" size="50" color="#999"></u-icon>
						</view>
					</button>
				</view>
				<view class="nick">
					<view class="nick-title">昵称:</view>
					<input type="nickname"  placeholder="请输入昵称">
				</view>
				<view class="fixed-btn wan">
					<button size="mini" open-type="getUserInfo"  @click="getUserInfo" :plain='true' class="btn">完成</button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		components:{
		},
		data() {
			return {
				toast:false,
				border:false,
				value:22,
				form:{
					name:'',
					intro:''
				},
				data:{pageSize:2,pageNum:2},
				value2:true,
				flag1:false,
				flag2:false,
				flag3:false,
				project:{
					name:'111',
					logo:'/static/image/u25.png'
				},
				getNickShow:true,
				avatar:'',
				nickName:'nick'
			}
		},
		onLoad() {
			// this.initFirst()
			// this.getClassList()
			// console.log(this.$store.state.token);
			// this.$store.commit('setToken')
			// this.$store.dispatch('getData',1232)
			// console.log(this.$store.state.token);
			// console.log(this.$store.getters.getOpenId);
			// console.log(this.$store.state.shop.shop);
			// this.$store.dispatch('cart/setUsername',1232)
			// this.$store.dispatch('shop/setUsername',1232)
			// 银联支付
			// apiChargePay(chargeData).then(res => {
			//     uni.hideLoading()
			//         let orderId = res.data.orderId
			//         let orderPayId = res.data.orderPayId
			//         let timeStamp = res.data.timeStamp
			//         let nonceStr = res.data.nonceStr
			//         let pk = res.data.package
			//         let paySign = res.data.paySign
			//         let signType = res.data.signType
			//         let _this = this
			
			//         if (nonceStr == null) {
			//             //	跳转到充电中页面
			//             this.redirectToChargeingPage(orderId, orderPayId)
			//                 return
			//             }
			
			//     //用户微信端确认支付，执行支付操作
			//     uni.requestPayment({
			//         "timeStamp": timeStamp,
			//         "nonceStr": nonceStr,
			//         "signType": signType,
			//         "package": pk,
			//         "paySign": paySign,
			//         success: (res) => {
			//             //	用户支付后，跳转到充电中的页面O
			//             this.redirectToChargeingPage(orderId, orderPayId)
			//             },
			//         fail: (err) => {
			//             uni.showToast({
			//                 icon: 'none',
			//                 title: "支付失败"
			//                 })
			//                 //	取消订单的问题。
			//                 apiDeleteChargeOrder(orderId)
			//             }
			//     })
			// })
			// 支付宝支付
			 // if (this.payType == "支付宝支付") {
			 //          userpay({//首先 调用后端的支付接口 换取订单信息 把后端需要的字段传过去
			 //            uid: this.userInfo.id,
			 //            bill_orderSn: this.bill_orderSn,
			 //            pay_type: this.userInfo.pay_type,
			 //            gate_id: this.userInfo.gate_id,
			 //            amount: this.jine,
			 //            mer_cust_id: this.userInfo.bank_card
			 //          }).then(res => {
			 //            if (res.code == 1) {
			 //              //订单对象，从服务器获取 // 注意 如果是 支付宝支付provider固定值就是alipay
			 //              uni.requestPayment({ //拿到订单信息后 调用 uniapp的支付接口 唤起支付
			 //                provider: 'alipay', //微信就是 wxpay
			 //                orderInfo: res.data, //支付宝订单数据 从后端拿到的数据
			 //                success: function(res) {
			 //                  this.show1 = false
			 //                  uni.showToast({
			 //                    title: "支付成功",
			 //                    icon: 'success',
			 //                    success: () => {
			 //                      setTimeout(() => {
			 //                        uni.switchTab({
			 //                          url: '/pagesJbx/index/index'
			 //                        })
			 //                      }, 500)
			 //                    }
			 //                  })
			 //                },
			 //                fail: function(err) {
			 //                  uni.showToast({
			 //                    title: "支付失败请稍后再试",
			 //                    icon: 'none',
			 //                    success: () => {
			 //                      setTimeout(() => {
			 //                        uni.switchTab({
			 //                          url: '/pagesJbx/my/my'
			 //                        })
			 //                      }, 500)
			 //                    }
			 //                  })
			 //                  console.log('fail:' + JSON.stringify(err));
			 //                }
			 //              });
			 //            }
			 
			 //          })
			 //        }
		},
		methods: {
			wexinzhifu(){
			// uni.requestPayment({
			// 		provider: 'wxpay',
			// 		orderInfo: '',
			// 		// appId: appId,//小程序的appid
			// 		timeStamp: res_a.data.Data[0].TimeStamp,//时间戳，要字符串类型的
			// 		nonceStr: res_a.data.Data[0].NonceStr,//随机字符串，长度为32个字符以下。
			// 		package: res_a.data.Data[0].Package,//prepay_id 参数值，提交格式如：prepay_id=xx
			// 		signType: res_a.data.Data[0].SignType, //MD5类型
			// 		paySign: res_a.data.Data[0].PaySign,//签名
			// 		success: function (res) {
			// 			//支付成功的回调    成功之后你想做什么在这里操作  比如弹窗一个提示:支付成功等
			// 			uni.showToast({
			// 				title: '支付成功！',
			// 				icon: 'success'
			// 			})
			// 		},
			// 		fail: function (err) {
			// 			//支付失败的回调   失败之后你想做什么在这里操作  比如弹窗一个提示:支付失败等
			// 			console.log(err);
		 
			// 		}
			// })
			},
			getPhoneNumber(e){
			// 	console.log(e);
			},
			initFirst(){
			// 	const value = uni.getStorageInfoSync('flag')
			// 	if(!value){
			// 		this.flag2 = !this.flag2
			// 		// this.flag2 = !this.flag2
			// 	}else{
			// 		this.flag1 = !this.flag1
			// 		uni.setStorage({
			// 			key:'flag',
			// 			data:true
			// 		})
			// 		setTimeout(()=>{
			// 			this.flag3 = !this.flag3
			// 			this.flag1 = !this.flag1
			// 		},1000)
			// 	}
				
			},
			goLogin(){
				this.flag2 =!this.flag2
				this.flag3 =!this.flag3
			},
			async getClassList(){
				// const data = await getClassList(this.data)
				// console.log(data);
			},
			serviceAgreement(){
				uni.navigateTo({
					url:'/pagesJbx/useServiceAgreement/useServiceAgreement',
				})
			},
			privacyAgreement(){
				uni.navigateTo({
					url:'/pagesJbx/userPrivacyProtocol/userPrivacyProtocol',
				})
			},
			register(){
				uni.navigateTo({
					url:'/pagesJbx/register/register',
				})
			},
			findPassword(){
				uni.navigateTo({
					url:'/pagesJbx/findPassword/findPassword?type=1',
				})
			},
			theuToast(type,title,message){
			// 	this.$refs.uToast.show({
			// 		type:type,
			// 		title:title,
			// 		message:message
			// 	})
			},
			login() {
				// uni.login({
				//   provider: 'weixin', //使用微信登录
				//   success:  res =>{
				//     console.log(res);
				// 	// 获取了openid
				//   }
				// })
				// uni.share({
				// 	provider: "weixin",
				// 	scene: "WXSceneSession",
				// 	type: 0,
				// 	href: "http://uniapp.dcloud.io/",
				// 	title: "uni-app分享",
				// 	summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				// 	imageUrl: "https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png",
				// 	success: function (res) {
				// 		console.log("success:" + JSON.stringify(res));
				// 	},
				// 	fail: function (err) {
				// 		console.log("fail:" + JSON.stringify(err));
				// 	}
				// })
				// if(this.value2===false){
				// 	this.theuToast('error','默认主题','请阅读并同意用户协议')
				// }else if(this.form.name.trim()===''){
				// 	this.theuToast('error','默认主题','手机号不能为空')
				// }else if(this.form.intro.trim()===''){
				// 	this.theuToast('error','默认主题','密码不能为空')
				// }else{
				// 	this.theuToast('success','默认主题','登录成功')
				// }
				uni.redirectTo({
					url:'/pagesJbx/index/index'
				})
			},
			chooseavatar(e){
			// 	this.avatar = e.detail.avatarUrl
					// uni.uploadFile({
					// 	url: baseUrl + 'api/common/upload',
					// 	filePath: e.detail.avatarUrl,
					// 	name: 'file',
					// 	formData: {
					// 		is_wxhead: 1
					// 	},
					// 	header: {
					// 		// Authorization: uni.getStorageSync("token")
					// 	},
					// 	success: r => {
					// 		let imgData = JSON.parse(r.data)
					// 		console.log(imgData)
					// 		this.avatar = imgData.data.fullurl;
					// 	}
					// });
				},
			async getUserInfo(){
				// let that = this;
				// if(this.avatar == ""){
				// 	uni.showToast({
				// 		title: '请选择头像',
				// 		icon: 'none'
				// 	})
				// 	return
				// }
				// // 坑，，，点击昵称后，开发者工具上 一直提示 昵称是空，但是 真机上 是正常的
				// if(this.nickname == ""){
				// 	uni.showToast({
				// 		title: '请编辑用户昵称或昵称不能使用特殊字符',
				// 		icon: 'none'
				// 	})
				// 	return
				// }
				// that.rawData = {
				// 	language: "zh_CN",
				// 	nickName: that.nickname,
				// 	avatarUrl: that.avatar
				// }
				// that.wxlogin();
				this.getNickShow = !this.getNickShow
			},
		}
	}
</script>

<style lang="scss" scoped>
.wrapper-init{
		.init-btn{
			width: 400rpx;
			height: 100rpx;
			position: absolute;
			bottom: 100rpx;
			text-align: center;
			background-color: green;
			color: #fff;
			line-height: 100rpx;
			left: 50%;
			transform: translate(-50%,0);
		}
		.init-logo{
			width: 300rpx;
			height: 300rpx;
			position: absolute;
			bottom: 500rpx;
			left: 50%;
			transform: translate(-50%,0);
		}
		.init-img{
			width: 60rpx;
			height: 60rpx;
			position: absolute;
			bottom: 300rpx;
			left: 50%;
			transform: translate(-50%,0);
		}
		.init-logo-big{
			width: 500rpx;
			height: 500rpx;
			position: absolute;
			bottom: 500rpx;
			left: 50%;
			transform: translate(-50%,0);
		}
	}
	.get-nick-box{
		padding: 40rpx 20rpx;
		.flex-align-center{
				display: flex;
		}
		.get-nick-box-logo-img{
			width:50rpx;
			height:50rpx;
		}
		.get-nick-box-name{
			margin-left:20rpx;
			text{
				margin-left:10rpx;
			}
		}
		.get-nick-box-msg1{
			font-weight: 500;
		}
		.get-nick-box-msg2{
			padding-bottom: 30rpx;
			border-bottom: 1rpx solid #f2f2f2;
			color:#999;
			padding-top: 10rpx;
			font-size: 24rpx;
		}
		.get-nick-box-info10{
				border-bottom: 1rpx solid #f2f2f2;
				margin-bottom: 30rpx;
				.toubox{
					padding: 10rpx 0;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.t1{
						font-size: 28rpx;
						margin-right: 30rpx;
					}
					.avatarbox{
						display: flex;
						align-items: center;
						width: 100rpx;
						height: 100rpx;
						border-radius: 20rpx;
						flex: 1;
					}
					.avatarimg{
						width: 100rpx;
						height: 100rpx;
						border-radius: 20rpx;
						flex: 1;
						display: flex;
						align-items: center;
					}
				}
		}
		.get-nick-box-button-css{
			background-color: #fff;
			border-radius: 0px;
			border: 0rpx solid transparent;
		}
		button::after{
			    border: 0px solid rgba(0,0,0,.2);
		}
		.nick{
			padding-bottom: 30rpx;
			border-bottom:2rpx solid #f2f2f2;
			display: flex;
			align-items: center;
			padding-left: 14px;
			padding-right: 14px;
			.nick-title{
				font-size: 28rpx;
				margin-right: 30rpx;
			}
		}
		.wan{
			position: relative;
			height: 100rpx;
			box-shadow: 0rpx 0rpx 0rpx 0rpx;
			margin-top: 30rpx;
			text-align: center;
			.btn{
				width: 400rpx;
				height: 60rpx;
				line-height: 60rpx;
				background-color: #000001;
				color: #fff;
			}
		}
		.mt30{
			margin-top: 30rpx;
		}
	}
	
.login{
	position: relative;
	padding: 20rpx;
	background-color: #f9f9f9;
	text-align: center;
	.logo{
		display: inline-block;
		width: 200rpx;
		height: 200rpx;
		padding-top: 60rpx;
	}
	.logo-name{
		font-weight: 700;
		color: green;
		padding-top: 30rpx;
		margin-bottom: 30rpx;
		font-size: 36rpx;
	}
	.login-ipt{
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2rpx solid rgba(228, 228, 228, 1);
		box-sizing: border-box;
		background-color: #fff;
		height: 110rpx;
		padding-right: 20rpx;
		.ipt{
			flex: 1;
		}
	}

	.container{
		margin-top: 40rpx;
		padding: 10rpx;
		display: flex;
		justify-content: space-around;
		color: green;
		font-size: 28rpx;
	}
	.footer{
		margin-top: 30rpx;
		font-size: 28rpx;padding: 20rpx;
		.agreement{
			color: #0079fe;
		}
	}
	
}

</style>
