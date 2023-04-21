<template>
    <!-- <view class="wrapper"> -->
    <view>
			<pageBar backText="返回主页面" backImageUrl="/static/image/u6.png" backTextColor="#fff" :info="info" navBackgroundColor="#009b4c" :navHeightValue="50"></pageBar>
			<!-- <view class="container"> -->
				<mallClassification v-if="selected===1"></mallClassification>
				<shoppingCart v-if="selected===2"></shoppingCart>
				<myOrder v-if="selected===3"></myOrder>
				<index v-if="selected===0"></index>
			<!-- </view> -->
			<tabBar :selected.sync="selected"  :tabbarType='1'></tabBar>
    </view>
</template>

<script>
	import tabBar from '../../pagesJbx/components/tabbar/tabbar.vue';
	import index from'../../pagesJbx/components/tabbarPageMall/index.vue'
	import mallClassification from '../../pagesJbx/components/tabbarPageMall/mallClassification.vue'
	import shoppingCart from'../../pagesJbx/components/tabbarPageMall/shoppingCart.vue'
	import myOrder from'../../pagesJbx/components/tabbarPageMall/myOrder.vue'
    export default {
		components:{
			index,
			mallClassification,
			shoppingCart,
			myOrder,
			tabBar,
		},
        data() {
            return {
				selected:0
			}
        },
		computed:{
			info(){
				if(this.selected==0){
					return '药采购'
				}
				if(this.selected==1){
					return '分类'
				}
				if(this.selected==2){
					return '购物车'
				}
				if(this.selected==3){
					return '我的订单'
				}
				// return ['药采购','分类','购物车',"我的订单"][this.selected]
			}
		},
		methods:{

		}
    }
</script>

<style lang="scss" scoped>
	.wrapper{
		display: flex;
		flex-direction: column;
		.container{
			flex: 1;
		}
	}
</style>