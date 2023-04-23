<template>
	<view>
		<pageBar info="兑换记录" backImageUrl="/static/image/u6.png" backTextColor="#fff" :navHeightValue="50" navBackgroundColor="#009b4c" titleColor="#fff"></pageBar>
		<scroll-view scroll-y="true" :style="{height: `calc(100vh - ${theScrollerHeight}rpx)`}">
			<myOrder :type.sync="type"></myOrder>
		</scroll-view>
	</view>
</template>

<script>
	import myOrder from '../../pagesJbx/components/myOrder/myOrder.vue'
	export default {
		components:{
			myOrder
		},
		data() {
			return {
				theScrollerHeight:getApp().globalData.navHeight,
				type:0,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
</style>
