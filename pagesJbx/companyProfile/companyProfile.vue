<template>
	<view class="wrapper">
		<pageBar :info="page" :navHeightValue="50" navBackgroundColor="#fff" titleColor="#000" :fontSize="13"></pageBar>
		<scroll-view scroll-y="true" class="my-scroll-view">
			<view class="container">
				<view>
					<video 
					class="container-video"
					id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
						@error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
				</view>
			<view>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
			</view>
			<image class="container-img" src="/static/image/u25.png" mode=""></image>
			<view>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
			</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			url:{
				type:String,
				default:'https://vd7.bdstatic.com/mda-pd3p6d9m00zvu3vh/sc/cae_h264/1680629641582488552/mda-pd3p6d9m00zvu3vh.mp4?v_from_s=hkapp-haokan-hbf&auth_key=1680858128-0-0-54de84e1a6914b67468368a5a3d6f55c&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=1928288347&vid=4304471815004166939&abtest=107353_1-109133_1&klogid=1928288347&sdk_xcdn=1'
			}
		},
		data() {
			return {
				page:'团队介绍'
			};
		},
		onLoad(options) {
			if(options.page){
				this.page = options.page
			}
		},
		methods:{
			// 播放时进入全屏
			play(index) {
				let videoContext = uni.createVideoContext('videoId', this)
				videoContext.requestFullScreen()
			},
			 
			//退出全屏时暂停
			fullscreenchange(e) {
				if (!e.detail.fullScreen) {
					uni.createVideoContext('videoId', this).pause();
				} 
			},
			//退出全屏时停止
			fullscreenchange (e){
				if(!e.detail.fullScreen){
					this.videoContext.stop()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-scroll-view{
		height:1200rpx;
	}
.container{
	padding: 20rpx 40rpx;
	.container-video{
		width: 680rpx;
		height: 380rpx;
	}
	.container-img{
		width: 650rpx;
		height: 340rpx;
		margin: 10rpx;
	}
}
</style>
