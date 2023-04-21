/*
* 注意：
* 1、在传入宽度或者高度时，如果是Number数据，传入的值为px大小,无需带单位，组件自动计算
* 2、在使用此导航栏时，建议传入UI规定的导航栏高度，此高度只针对除微信小程序的其他平台有效，微信小程序的导航栏高度，组件自计算
*/
<template>
	<view>
		<!-- 微信小程序头部导航栏 -->
		<!-- #ifdef MP-WEIXIN -->
		<view :style="{height:navHeight+'rpx',backgroundColor:navBackgroundColor}">
		<view class="wx-head-mod" :style="{height:navHeight+'rpx',backgroundColor:navBackgroundColor}">
			<view class="wx-head-mod-nav" :style="{height:navigationBarHeight+'rpx',top:statusBarHeight+'rpx'}">
				<view class="wx-head-mod-nav-content"
					:style="{height:customHeight+'rpx',justifyContent:textAlign === 'center'?'center':'left'}">
					<!-- 文本区 -->
					<view class="wx-head-mod-nav-content-mian"
						:style="{width:navTextWidth,lineHeight:customHeight + 'rpx',paddingLeft:textPaddingLeft*scaleFactor+'rpx',fontSize:fontSize*scaleFactor+'rpx',fontWeight:fontWeight,color:titleColor}">
						{{info}}
					</view>
					<!-- 返回按钮 -->
					<view class="wx-head-mod-nav-content-back" :style="{display:isBackShow?'flex':'none'}"
						@click="backEvent">
						<view class="wx-head-mod-nav-content-back-img"
							:style="{height:backImageHeight*scaleFactor+'rpx',color:backTextColor}">
							<image :src="backImageUrl" mode="" style="width: 28rpx;height: 28rpx;"></image>{{backText}}
						</view>
					</view>
					<!-- 编辑 -->
					<view v-if="edit" class="wx-head-mod-nav-content-right" :style="{display:isBackShow?'flex':'none'}"
						@click="isEdit2()">
						<view class="wx-head-mod-nav-content-back-img"
							:style="{height:backImageHeight*scaleFactor+'rpx',color:backTextColor}">
							{{isEdit?'完成':'编辑'}}
						</view>
					</view>
				</view>
			</view>
		</view>
		</view>
		<!-- #endif -->
 
		<!-- 除微信小程序之外的其他设备 -->
		<!-- #ifndef MP-WEIXIN -->
		<view class="" :style="{height:navHeightValue*scaleFactor+statusBarHeight+'rpx',backgroundColor:navBackgroundColor}">
		<view class="other-head-mod"
			:style="{height:navHeightValue*scaleFactor+statusBarHeight+'rpx',backgroundColor:navBackgroundColor}">
			<view class="other-head-mod-mian"
				:style="{height:navHeightValue*scaleFactor+'rpx',justifyContent:textAlign === 'center'?'center':'left'}">
				<!-- 返回按钮 -->
				<view class="other-head-mod-mian-back" v-show="isBackShow" @click="backEvent">
					<view class="other-head-mod-mian-back-img"
						:style="{height:backImageHeight*scaleFactor+'rpx',color:backTextColor}">
						<image :src="backImageUrl" mode="" style="width: 28rpx;height: 28rpx;"></image>{{backText}}
					</view>
				</view>
				<!-- 编辑 -->
				<view v-if="edit" class="other-head-mod-mian-right" v-show="isBackShow" @click="isEdit2()">
					<view class="other-head-mod-mian-back-img"
						:style="{height:backImageHeight*scaleFactor+'rpx',color:backTextColor}">
						{{isEdit?'完成':'编辑'}}
					</view>
				</view>
				<!-- 标题 -->
				<view class="other-head-mod-mian-title" :style="{width:windowWidth - 184+'rpx',lineHeight:navHeightValue*scaleFactor+'rpx',
					paddingLeft:textPaddingLeft*scaleFactor+'rpx',fontSize:fontSize*scaleFactor+'rpx',
					fontWeight:fontWeight,color:titleColor}">
					{{info}}
				</view>
			</view>
		</view>
		</view>
		<!-- #endif -->
	</view>
</template>
 
<script>
	const app = getApp()
	import {systemInfo} from './system-info.js'
	export default {
		name: "HeadView",
		props: {
			edit:{
				type: Boolean,
				default:false
			},
			isEdit:{
				type: Boolean,
				default:false
			},
			info: {
				type: String,
				default: '我失误的'
			},
			// 文本区域位置 left：左  center：中  
			textAlign: {
				type: String,
				default: 'center'
			},
			// 文本区内容
			textContent: {
				type: String,
				default: '我失误的'
			},
			// 文本区离左边的距离
			textPaddingLeft: {
				type: Number,
				default: 16
			},
			// 是否需要返回按钮
			isBackShow: {
				type: Boolean,
				default: true
			},
			backText: {
				type: String,
				default: '返回'
			},
			// 文本区字体大小
			fontSize: {
				type: Number,
				default: 16 //px
			},
			// 文本区字体粗细
			fontWeight: {
				type: Number,
				default: 400
			},
			// 文本区返回按钮图片宽
			backImageWidth: {
				type: Number,
				default: 12 //px
			},
			// 文本区返回按钮图片高
			backImageHeight: {
				type: Number,
				default: 24 //px
			},
			// 返回按钮图标路径
			backImageUrl: {
				type: String,
				default: '/static/image/u287.png'
			},
			backTextColor: {
				type: String,
				default: '#009b4c'
			},
			// 导航栏整体背景颜色
			navBackgroundColor: {
				type: String,
				default: '#fff'
			},
			// 标题字体颜色
			titleColor: {
				type: String,
				default: '#ffffff',
			},
 
			/******** h5端，app端需要传入自定义导航栏高度 *******/
			navHeightValue: {
				type: Number,
				default: 44 //px
			}
		},
		// watch: {
		//     textContent: {
		//         handler(newName, oldName) {
		// 			console.log(this.textContent,12);
		//         },
		//         immediate: true,
		//         deep: true
		//     }
		// },
		computed: {
			// 文本区宽度
			navTextWidth() {
				if (this.textAlign === 'center') {
					return (this.windowWidth - (this.windowWidth - this.menubarLeft) * 2) + 'rpx'
				} else {
					return this.menubarLeft + 'rpx'
				}
			},
			// 文本区paddingLeft
			textPaddingleft() {
				if (this.textAlign === 'center') {
					return '0'
				} else {
					return this.textPaddingLeft + 'rpx'
				}
			}
		},
		data() {
			return {
				statusBarHeight: app.globalData?.statusBarHeight, //状态栏高度
				navHeight: app.globalData?.navHeight, //头部导航栏总体高度
				navigationBarHeight: app.globalData?.navigationBarHeight, //导航栏高度
				customHeight: app.globalData?.customHeight, //胶囊高度
				scaleFactor: app.globalData?.scaleFactor, //比例系数
				menubarLeft: app.globalData?.menubarLeft, //胶囊定位的左边left
				windowWidth: app.globalData?.windowWidth * app.globalData?.scaleFactor
			};
		},
		methods: {
			backEvent() {
				uni.navigateBack({
					delta: 1
				})
			},
			isEdit2(){
				this.$emit('update:isEdit',!this.isEdit)
			}
		},
		created() {
			/* 获取设备信息 */
			const SystemInfomations = systemInfo()
			/* 通用平台 */
			this.statusBarHeight = SystemInfomations?.statusBarHeight //状态栏高度
			this.scaleFactor = SystemInfomations?.scaleFactor||1 //比例系数
			this.windowWidth = SystemInfomations?.windowWidth //当前设备的屏幕宽度
			/* 微信小程序平台 */
			// #ifdef MP-WEIXIN
			this.navHeight = SystemInfomations?.navHeight + SystemInfomations?.statusBarHeight //头部导航栏总高度
			this.navigationBarHeight = SystemInfomations?.navHeight //头部导航栏高度
			this.customHeight = SystemInfomations?.menuButtonHeight //胶囊高度
			this.menubarLeft = SystemInfomations?.menuButtonLeft //胶囊左边界距离左上角的距离
			// #endif
			
		}
	}
</script>
 
<style lang="scss">
	/* #ifdef MP-WEIXIN */
		.wx-head-mod {
			box-sizing: border-box;
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
		}
 
	.wx-head-mod-nav {
		box-sizing: border-box;
		width: 100%;
		position: absolute;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
 
	}
 
	.wx-head-mod-nav-content {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		justify-content: left;
		align-items: center;
		position: relative;
	}
 
	/* 文本区 */
	.wx-head-mod-nav-content-mian {
		box-sizing: border-box;
		height: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
 
	/* 返回按钮 */
	.wx-head-mod-nav-content-back {
		box-sizing: border-box;
		// width: 60rpx;
		// height: 100%;
		/* background-color: aqua; */
		position: absolute;
		top: 50%;
		transform: translate(0,-20%);
		left: 32rpx;
		display: flex;
		align-items: center;
		justify-content: left;
	}
	.wx-head-mod-nav-content-right {
		box-sizing: border-box;
		// width: 60rpx;
		// height: 100%;
		/* background-color: aqua; */
		position: absolute;
		top: 50%;
		transform: translate(0,-20%);
		right: 32rpx;
		display: flex;
		align-items: center;
		justify-content: left;
	}
 
	.wx-head-mod-nav-content-back-img {
		box-sizing: border-box;
		color: #009b4c;
		font-weight: 300;
	}
 
	/* #endif */
 
	/* #ifndef MP-WEIXIN */
	.other-head-mod {
		box-sizing: border-box;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
	}
 
	.other-head-mod-mian {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: left;
		position: absolute;
		left: 0;
		bottom: 0;
		padding-top: 16rpx;
	}
 
	/* 返回按钮 */
	.other-head-mod-mian-back {
		box-sizing: border-box;
		// height: 100%;
		// width: 100rpx;
		position: absolute;
		left: 32rpx;
		top: 50%;
		transform: translate(0,-20%);
		display: flex;
		align-items: center;
		font-weight: 300;
		.other-head-mod-mian-back-img{
			// width: 300rpx;
			margin-bottom: -20rpx;
			// color: #009b4c;
		}
	}
	.other-head-mod-mian-right {
		box-sizing: border-box;
		// height: 100%;
		// width: 100rpx;
		position: absolute;
		right:32rpx;
		top: 50%;
		transform: translate(0,-20%);
		display: flex;
		align-items: center;
	}
 
	/* 标题 */
	.other-head-mod-mian-title {
		box-sizing: border-box;
		height: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		text-align: center;
		padding-right: 50rpx;
		padding-bottom: 110rpx;
		font-weight: 400;
		font-style: normal;
		font-size: 32rpx;
		color: #FFFFFF;
	}
 
	/* #endif */
</style>
