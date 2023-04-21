<template>
	<view>
		<pageBar info="注册新用户" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<view class="register">
			<image class="logo" src="/static/image/u25.png" mode=""></image>
			<view class="login-input" >
				<image class="the-icon" src="/static/image/u25.png" mode=""></image>
				<u-input class="login-ipt"  placeholder="请输入注册的手机号码" v-model="form.phone" border="false" />
			</view>
			<view class="login-input" >
				<image class="the-icon" src="/static/image/u25.png" mode=""></image>
				<u-input class="login-ipt" placeholder="请输入短信验证码"  v-model="form.code" border="false" />
				<button class="get-code-btn" @tap="getCode()">{{phoneCodeTime}}</button>
			</view>
			<view class="login-input">
				<image class="the-icon" src="/static/image/u25.png" mode=""></image>
				<u-input class="login-ipt" placeholder="请输入6-20位密码"  v-model="form.password" border="false" />
			</view>
			<view class="login-input" >
				<image class="the-icon" src="/static/image/u25.png" mode=""></image>
				<u-input class="login-ipt" placeholder="请再次确认登录密码"  v-model="form.repassword" border="false" />
			</view>
			<view class="footer">
				<radio class="single-radio" :checked="value2" @tap="value2=!value2"/>
				<text class="fz26A">已阅读并同意</text>
				<text class="fz26 agreement" @tap="serviceAgreement">《用户服务协议》</text>、
				<text class="fz26 agreement" @tap="privacyAgreement">《用户隐私政策》</text>
			</view>
			<button class="comfirm-btn" @tap="register()">注册</button>
			<view @tap="goLogin()" class="go-login">已有账号立即登录</view>
			<u-toast ref="uToast"></u-toast>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					phone:'',
					code:'',
					password:'',
					repassword:''
				},
				phoneCodeTime:'发送验证码',
				value2:false,
			}
		},
		methods: {
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
			goLogin(){
				uni.navigateTo({
					url:'/pagesJbx/login/login',
				})
			},
			theuToast(type,title,message){
				this.$refs.uToast.show({
					type: type,
					title: title,
					message: message
				})
			},
			getCode(){
				if(this.form.phone.trim()===''){
					this.theuToast('error','默认主题','手机号不能为空')
				}else if(!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.form.phone)){
					this.theuToast('error','默认主题','手机号格式不对')
				}else if(typeof this.phoneCodeTime =='string'){
					this.phoneCodeTime = 60
					const that = this
					let timer = setInterval(()=>{
						if(this.phoneCodeTime!==0){
							this.phoneCodeTime--
						}else{
							this.phoneCodeTime = '重新发送验证码'
							clearInterval(timer)
						}
					},1000)
					this.theuToast('success','默认主题','验证码发送成功')
				}
			},
			register() {
				if(this.value2===false){
					this.theuToast('error','默认主题','请先同意服务协议才能注册登录')
				}else if(this.form.phone.trim()===''){
					this.theuToast('error','默认主题','手机号不能为空')
				}else if(!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.form.phone)){
					this.theuToast('error','默认主题','手机号格式不对')
				}else if(this.form.code.trim()===''){
					this.theuToast('error','默认主题','验证码不能为空')
				}else if(this.form.password.trim()===''){
					this.theuToast('error','默认主题','密码不能为空')
				}else if(!/^(?=.{6,20}$)([^a-z\r\n]*[a-z][^a-z\r\n]*){2,}/.test(this.form.password)){
					this.theuToast('error','默认主题','密码格式应该为6-20位，且至少两个字母')
				}else if(this.form.repassword.trim()===''){
					this.theuToast('error','默认主题','请再次输入密码')
				}else if(this.form.repassword!==this.form.password){
					this.theuToast('error','默认主题','两次密码输入不一样')
				}else{
					this.theuToast('success','默认主题','注册成功')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.register{
	position: relative;
	padding: 20rpx;
	background-color: rgba(249, 249, 249, 1);
	text-align: center;
	.logo{
		display: inline-block;
		width: 200rpx;
		height: 200rpx;
		padding-top: 60rpx;
		padding-bottom: 60rpx;
	}
	.login-input{
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2rpx solid rgba(228, 228, 228, 1);
		box-sizing: border-box;
		background-color: #fff;
		height: 110rpx;
		padding-right: 20rpx;
		.login-ipt{
			flex: 1;
			margin-right: 10rpx;
		}
	}
	.agreement{
		color: #0079fe;
	}
	.go-login{
		color: #009b4c;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		font-size: 32rpx;
	}
	.footer{
		margin-top: 30rpx;
		font-size: 28rpx;
		padding: 20rpx;
	}
}	
</style>
