<template>
    <view>
		<u-swiper
		        :list="list5"
		        @change="e => current = e.current"
		        :autoplay="false"
				circular
				@click="click"
				height="211"
		>
		    <view
		            slot="indicator"
		            class="indicator"
		    >
		        <view
					class="indicator__dot"
					v-for="(item, index) in list5"
					:key="index"
					:class="[index === current && 'indicator__dot--active']"
		        >
		        </view>
		    </view>
		</u-swiper>
		<u-gap bgColor="transparent" height="3"></u-gap>
       <view class="introduce">
       	<view class="introduce-item" v-for="(item,index) in list" @tap="clickIntro(index)">
			<image class="introduce-icon" :src="item.imgSrc" alt="" srcset=""></image>
			<view class="introduce-title fz24">
				{{item.title}}
			</view>
       	</view>
       </view>
	   <u-swiper
		   :list="list5"
		   @change="e => current = e.current"
		   :autoplay="false"
	   		circular
	   		@click="click"
	   		height="211"
	   >
	       <view slot="indicator" class="indicator" >
	           <view
	   			class="indicator__dot"
	   			v-for="(item, index) in list5"
	   			:key="index"
	   			:class="[index === current && 'indicator__dot--active']"
	           >
	           </view>
	       </view>
	   </u-swiper>
	   <u-gap bgColor="transparent" height="3"
	   ></u-gap>
	   <!--  -->
	   <u-popup :customStyle="customStyle" v-model="show" mode="center" :round="20" @close="close" @open="open">
		   <text class="pop-title">温馨提示</text>
		   <text class="pop-info">该功能属于药店服务</text>
		   <view class="pop-footer">
				<view class="pop-btn">
					<u-button class="customStyle" @tap="cancel()" color="#aaaaaa" >暂不加入</u-button>
				</view>
				<view class="pop-btn">
					<u-button class="customStyle" @tap="goPage()" color="#009b4c" >立即加入</u-button>
				</view>
		   </view>
	   	</u-popup>
    </view>
</template>

<script>
    export default {
		name:'',
		components:{
		},
        data() {
            return {
				customStyle:{width:'600rpx',height:'350rpx'},
				show: false,
				selected:0,
				value6:0,
				list:[
					{imgSrc:'/static/image/u25.png',title:'公司简介'},
					{imgSrc:'/static/image/u25.png',title:'企业文化'},
					{imgSrc:'/static/image/u25.png',title:'团队介绍'},
					{imgSrc:'/static/image/u25.png',title:'药采购'},
				],
				current:0,
                list5: [
                    '/static/image/u25.png',
                    '/static/image/u25.png',
                    '/static/image/u25.png',
                ],
				flag:false
            }
        },
		methods:{
			goPage(){
				uni.navigateTo({
					url:"/pagesJbx/drugstoreType/drugstoreType?type=2"
				})
			},
			cancel(){
				this.show = false
			},
			clickIntro(index){
				let page = ['公司简介','企业文化','团队介绍'][index]
				if(index===3&&this.flag==true){
					this.show=true
				}else if(index===3){
					uni.navigateTo({
						url:`/pagesJbx/mall/mall`
					})
				}else if(index===0||index===1||index===2){
					uni.navigateTo({
						url:`/pagesJbx/companyProfile/companyProfile?page=${page}`
					})
				}
			},
			click(e){
				console.log(e);
			},
			open() {
				// console.log('open');
			},
			close() {
			this.show = false
			// console.log('close');
			}
	}
    }
</script>

<style lang="scss">
	.pop-title{
		 height: 100rpx;
		 line-height: 100rpx;
		 text-align: center;
		 font-size: 36rpx;
	}
	.pop-info{
		border-top: 4rpx solid #f2f2f2;
		border-bottom: 4rpx solid #f2f2f2;
		height: 120rpx;line-height: 120rpx;
		text-align: center;
		font-size: 30rpx;
	}
	.pop-footer{
		display: flex;
		justify-content: space-around;
		align-items: center;
		.pop-btn{
			width: 250rpx;
			margin-top: 20rpx;
			.customStyle{
				width: 220rpx;
				height: 80rpx;
			}
		}
	}
	.introduce{
		margin-top: 40rpx;
		margin-bottom: 40rpx;
		display: flex;
		background-color: #fff;
		.introduce-item{
			width: 25%;
			height: 266rpx;
			text-align: center;
			.introduce-icon{
				display: inline-block;
				width: 138rpx;
				height: 138rpx;
				margin-top: 40rpx;
			}
			.introduce-title{
				margin-top: 20rpx;
				line-height: 32rpx;
			}
		}
	}
	 .indicator {
		display: flex;
		justify-content: space-between;
		justify-content: center;

		&__dot {
			 height: 6px;
			 width: 6px;
			 border-radius: 100px;
			 background-color: rgba(255, 255, 255, 0.35);
			 margin: 0 5px;
			 transition: background-color 0.3s;
	
			&--active {
				 background-color: #ffffff;
			 }
		}
	}

</style>