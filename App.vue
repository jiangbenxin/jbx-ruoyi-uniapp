<script>
/**
 * Copyright (c) 2013-Now http://aidex.vip All rights reserved.
 */
export default {
	// data(){
	// 	clientHeight:null
	// },
	onLaunch() {
		// 国际化，设置当前语言
		if (this.vuex_locale){
			this.$i18n.locale = this.vuex_locale;
			this.$u.api.lang({lang: this.vuex_locale});
		}
		// 设置底部导航栏角标
		uni.setTabBarBadge({
		  index: 0,
		  text: '3'
		});
		// uni.removeTabBarBadge({
		//   index: 0
		// });
	},
	globalData:{
		statusBarHeight:2,
		navHeight:2,
		navigationBarHeight:2,
		customHeight:2,
		scaleFactor:2,
		menubarLeft:2,
		windowWidth:2,
		scaleFactor:2,
	},
	methods:{
		theScrollerHeight(navHeight){
			getApp().globalData.navHeight =navHeight
		}
	}
}
</script>
<style lang="scss">
@import "uview-ui/index.scss";
@import "pages/common/aidex.scss";
@import url("~@/static/iconfont/iconfont.css");
// .my-scroll-view{
// 	height: calc(100vh - 250rpx - 120rpx);
// }
// </style>