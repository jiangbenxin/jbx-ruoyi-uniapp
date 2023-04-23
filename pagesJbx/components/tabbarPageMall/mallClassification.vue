<template>
	<view class="classification">
		<view class="classifications">
			<view class="left-item fz28A700" :style="{boxSizing: 'border-box',color:classification===index?letfItemStyleColor:'',borderLeft:classification===index?letfItemStyleBorder:'',width:classification===index?letfItemStyleWidth:''}" v-for="(item,index) in list" @tap="checkClassification(index)">
				{{item.title}}
			</view>
		</view>	
		<scroll-view scroll-y="true" :style="{height: `calc(100vh - ${theScrollerHeight}rpx - 120rpx)`}">
			<view class="classification-info">
				<image class="classification-img" src="/static/image/u25.png" mode=""></image>
				<view class="classification-item" v-for="(item,index) in list3">
					<view class="classification-item-item" v-for="(item,index) in list2" v-if="classification==item.classification">
						<view class="classification-item-item-title">
							{{item.title}}
						</view>
						<view class="classification-item-item-info-body">
							<view class="item-item-title-info fz24" v-for="(item2,index2) in item.classificationInfo">
								<image class="item-item-img" src="/static/image/u25.png" mode=""></image>
								<view>
									标题文字
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				theScrollerHeight:getApp().globalData.navHeight,
				selected:1,
				classification:0,
				list:[
					{title:'推荐',classification:0},
					{title:'分类2',classification:1},
					{title:'分类3',classification:2},
					{title:'分类4',classification:3},
					{title:'分类5',classification:4},
				],
				list3:[
					2,3,4
				],
				list2:[
					{title:'分类标题1',classification:0,classificationInfo:[
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
					]},
					{title:'分类标题102',classification:1,classificationInfo:[
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
					]},
					{title:'分类标题103',classification:2,classificationInfo:[
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
					]},
					{title:'分类标题104',classification:3,classificationInfo:[
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
					]},
					{title:'分类标题105',classification:4,classificationInfo:[
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
						{imgSrc:'/static/image/u25.png',title:'小标题文字'},
					]},
				]
			}
		},
		computed:{
			letfItemStyleColor(){
				if(this.classification===0) return '#009b4c'
				if(this.classification!==0) return '#0079fe'
			},
			letfItemStyleBorder(){
				if(this.classification===0) return '8rpx solid #009b4c'
				if(this.classification!==0) return '8rpx solid #0079fe'
			},
			letfItemStyleWidth(){
				if(this.classification===0) return '152rpx'
				if(this.classification!==0) return '152rpx'
			},
		},
		methods: {
			checkClassification(index){
				this.classification = index
				console.log(this.classification,index);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.classification{
		position: relative;
		text-align: right;

		.classifications{
			// z-index: 999;
			height: 1400rpx;
			position: fixed;	
			left: 0;
			border-right: 4rpx solid #e9e9e9;
			.left-item{
				box-sizing: border-box;
				width: 160rpx;
				height: 100rpx;
				line-height: 100rpx;
				color: #999999;
				text-align: center;
			}
		}
		.classification-info{
			width: 600rpx;
			display: inline-block;
			padding: 20rpx;
			.classification-img{
				width: 554rpx;
				height: 200rpx;
				.classification-item{
					.classification-item-item{
						margin-bottom: 60rpx;
					}
				}
			}
			.classification-item-item-title{
				height: 100rpx;
				line-height: 100rpx;
				padding-left: 20rpx;
				font-weight: 700;
				text-align: left;
				border-bottom: 4rpx solid #e4e4e4;
			}
			.classification-item-item-info-body{
				display: flex;

				flex-wrap: wrap;
				.item-item-title-info{
					width: 182rpx;
					height: 200rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: #666666;
					.item-item-img{
						width: 60rpx;
						height: 60rpx;
						margin-bottom: 10rpx;
					}
				}
			}
			
		}
		
	}

</style>
