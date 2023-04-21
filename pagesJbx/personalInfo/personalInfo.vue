<template>
	<view class="wrapper">
		<pageBar info="个人资料修改" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
			<oneSetting title="头像" :imgSrc.sync="imgSrc" :click="'修改头像'"></oneSetting>
			<view @tap="nickName()">
				<oneSetting title="昵称" info="这里是昵称"></oneSetting>
			</view>
			<oneSetting title="手机号码" :info="phone" url="/pagesJbx/findPassword/findPassword?type=2&info=绑定手机号"></oneSetting>
			<oneSetting title="密码" :info="'修改密码'" url="/pagesJbx/findPassword/findPassword?info=修改密码"></oneSetting>
			<oneSetting title="保存图片到手机" :info="'保存图片到手机'" :click="'保存图片到手机'"></oneSetting>
			<oneSetting title="拨打电话" :info="'13277433802'" :click="'拨打电话'"></oneSetting>
			<oneSetting title="扫二维码" :info="'扫描二维码'" :click="'扫二维码'"></oneSetting>
	</view>
</template>

<script>
import oneSetting from '../../pagesJbx/components/oneSetting/oneSetting.vue'
	export default {
		components:{
			oneSetting
		},
		data() {
			return {
				phone:132774338002,
				imgSrc:{is:true,src:'/static/image/u25.png'},
				
			};
		},
		methods:{
			nickName(){
				uni.navigateTo({
					url:'/pagesJbx/modifyNickname/modifyNickname'
				})
			}
		}
	}
</script>

