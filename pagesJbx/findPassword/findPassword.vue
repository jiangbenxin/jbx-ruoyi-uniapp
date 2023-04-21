<template>
	<view class="">
		<pageBar :info="info" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<view class="container">
			<view class="container-plan">
				<view :class="['plan1',plan===1?'active-plan':'','fz26']">
					1.验证手机号码
				</view>
				<view :class="['plan2',plan===2?'active-plan':'','fz26A']">
					{{type==1?'2.设置新密码':'2.绑定新的手机号码'}}
				</view>
			</view>
			<view class="login-input" v-if="plan===1">
				<image class="the-icon"  src="/static/image/u25.png" mode=""></image>
				<u-input class="login-ipt" placeholder="请输入注册的手机号码" v-model="form.phone" border="false"/>
			</view>
			<view class="login-input" v-if="plan===1">
				<image class="the-icon"  src="/static/image/u25.png" mode=""></image>
				<u-input class="login-ipt" placeholder="请输入短信验证码"  v-model="form.code" border="false"/>
				<button class="get-code-btn" @tap="getCode()">{{ phoneCodeTime }}</button>
			</view>
			<view class="login-input" v-if="plan===2&&type==2">
				<image class="the-icon"  src="/static/image/u25.png" mode=""></image>
				<u-input class="login-ipt" placeholder="请输入注册的手机号码" v-model="form.phone" border="false"/>
			</view>
			<view class="login-input" v-if="plan===2&&type==2">
				<image class="the-icon"  src="/static/image/u25.png" mode=""></image>
				<u-input class="login-ipt" placeholder="请输入短信验证码"  v-model="form.code" border="false"/>
				<button class="get-code-btn" @tap="getCode()">{{ phoneCodeTime }}</button>
			</view>
			<!-- 新的密码 -->
			<view class="login-input" v-if="plan===2&&type==1">
				<image class="the-icon"  src="/static/image/u25.png" mode=""></image>
				<u-input class="login-ipt" type="password" placeholder="请输入6-20位新的登录密码" v-model="form.password" border="false"/>
			</view>
			<view class="login-input" v-if="plan===2&&type==1">
				<image class="the-icon"  src="/static/image/u25.png" mode=""></image>
				<u-input class="login-ipt" type="password" placeholder="请再次输入新的登录密码" v-model="form.repassword" border="false"/>
			</view>
			<button class="comfirm-btn" @tap="register(plan)">{{plan===1?'下一步':'提交'}}</button>
			<u-toast ref="uToast"></u-toast>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneCodeTime:'发送验证码',
				form:{
					phone:'',
					code:'',
					password:'',
					repassword:'',
				},
				plan:1,
				type:1,
				info:'找回密码'
			}
		},
		onLoad(options) {
			if(options.type){
				this.type = options.type
			}
			if(options.info){
				this.info = options.info
			}
		},
		methods: {
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
			register(plan){
				if(plan===1){
					if(this.form.phone.trim()===''){
						this.theuToast('error','默认主题','手机号不能为空')
					}else if(!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.form.phone)){
						this.theuToast('error','默认主题','手机号格式不对')
					}else if(this.form.code.trim()===''){
						this.theuToast('error','默认主题','验证码不能为空')
					}else if(false){
						this.theuToast('error','默认主题','验证码获取失败')
					}
					this.plan=2
				}else{
					if(this.form.password.trim()===''){
						this.theuToast('error','默认主题','密码不能为空')
					}else if(!/^(?=.{6,20}$)([^a-z\r\n]*[a-z][^a-z\r\n]*){2,}/.test(this.form.password)){
						this.theuToast('error','默认主题','密码格式应该为6-20位，且至少两个字母')
					}else if(this.form.repassword.trim()===''){
						this.theuToast('error','默认主题','请再次输入密码')
					}else if(this.form.repassword!==this.form.password){
						this.theuToast('error','默认主题','两次密码输入不一样')
					}else{
						this.theuToast('success','默认主题','正确')
					}
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		position: relative;
		padding: 20rpx;
		background-color: rgba(249, 249, 249, 1);
		text-align: center;
		height: 100%;
		.container-plan{
			height: 100rpx;
			background-color: #fff;
			margin-bottom: 100rpx;
			display: flex;
			.plan1{
				width: 50%;
				height: 100rpx;
				text-align: center;
				line-height: 100rpx;
			}
			.plan2{
				width: 50%;
				height: 100rpx;
				text-align: center;
				line-height: 100rpx;
			}
			.active-plan{
				color: green;
			}
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
	}
	
</style>
