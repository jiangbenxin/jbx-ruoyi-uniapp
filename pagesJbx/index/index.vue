<template>
    <view class="wrapper">
		<pageBar :info="info" navBackgroundColor="#009b4c" :navHeightValue="50" :textPaddingLeft="50" :isBackShow="false"></pageBar>
		<view class="container">
			<tabbarOneIndex v-if="selected===0"></tabbarOneIndex>
			<tabbarOneMessage v-if="selected===1"  :onReachBottom.sync="onReachBottom"></tabbarOneMessage>
			<tabbarOneMy v-if="selected===2"></tabbarOneMy>
		</view>
		<view style="height: 120rpx;">
			<tabBar :selected.sync="selected"  :tabbarType='0'></tabBar>
		</view>
    </view>
</template>

<script>
	import tabBar from '../../pagesJbx/components/tabbar/tabbar.vue';
	import tabbarOneIndex from'../../pagesJbx/components/tabbarPageOne/index.vue'
	import tabbarOneMessage from'../../pagesJbx/components/tabbarPageOne/message.vue'
	import tabbarOneMy from'../../pagesJbx/components/tabbarPageOne/my.vue'
    export default {
		name:'index',
		components:{
			tabbarOneIndex,
			tabbarOneMessage,
			tabbarOneMy,
			tabBar,
		},
        data() {
            return {
				selected:0,
				onReachBottom:false
			}
        },
		onReachBottom(e){
			this.onReachBottom=true
		},
		computed:{
			info(){
				if(this.selected==0){
					return '首页'
				}
				if(this.selected==1){
					return '消息'
				}
				if(this.selected==2){
					return '我的'
				}
				// return ['首页','消息','我的'][this.selected]
			}
		},
		// watch: {
		//     selected: {
		//         handler(newName, oldName) {
		// 			console.log(newName);
		// 			console.log(this.textContent);
		//             this.textContent=['首页','消息','我的'][newName]
		// 			console.log(this.textContent);
		//         },
		//         // immediate: true,
		//         // deep: true
		//     }
		// },
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