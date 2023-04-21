<template>
	<view>
		<pageBar info="兑换记录" backImageUrl="/static/image/u6.png" backTextColor="#fff" :navHeightValue="50" navBackgroundColor="#009b4c" titleColor="#fff"></pageBar>
		<scroll-view scroll-y="true" class="it-scroll-view">
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
				type:0,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.it-scroll-view{
	height: 1200rpx;
}
</style>
