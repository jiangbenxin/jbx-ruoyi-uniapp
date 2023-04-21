<template>
	<view class="wrapper">
		<view class="order-tab">
			<view class="tab-item fz28" v-for="(item,index) in tabList" @tap="checkTab(index)">
				{{item.title}}
				<view v-if="type==index" class="active-line"></view>
			</view>
		</view>
		<view class="orders" v-for="(item,index) in typeList">
			<view class="order-header fz28">
				<text>{{item.date}}</text>
				<text :class="[item.status==3?'status3':'unstatus3']">{{headInfo(item.status,item.refund)}}</text>
			</view>
			<view class="info1 fz28"  v-if="item.status===0">
				下单成功待支付中
			</view>
			<view class="order-body" v-for="(item2,index2) in item.products">
				<image :src="item2.imgSrc" mode=""></image>
				<view class="info2">
					<view class="product-name">
						{{item2.productName}}
					</view>
					<view class="specification fz28">
						规格：1{{item2.specification}}盒
					</view>
				</view>
				<view class="right fz28">
					<view class="price">
						￥{{item2.price}}
					</view>
					<view class="num">
						X{{item2.num}}
					</view>
				</view>
			</view>
			<view class="order-footer fz32">
				<view>
					{{logistics(item.getGoods,item.status)}}
				</view>
				<text class="all-num">共{{item.allNum}}件商品</text>
				<text class="all-price">实际支付金额： ￥{{item.allPrice}}</text>
			</view>
			<view class="order-pay">
				<view @tap="clickBtn(item.status)" class="cancel fz26" v-if="item.status==1||item.status==2||item.status==0">
					{{typeButton1(item.status)}}
				</view>
				<view @tap="show2 = !show2" class="cancel fz26 cancel-width" v-if="item.status==1">
					上传支付凭证
				</view>
				<view @tap="clickBtn2(item.status)" class="pay fz26" v-if="item.status!==4" :style="{color:typeButtonStyleColor(item.status),border:`2rpx solid  ${typeButtonStyleColor(item.status)}`}">
					{{typeButton2(item.status)}}
				</view>
			</view>
		</view>
		<!-- </scroll-view> -->
		<logisticsDetails :show.sync="show"></logisticsDetails>
	</view>
</template>

<script>
	import logisticsDetails from '../../components/logisticsDetails/logisticsDetails.vue'
	export default {
		name:'myOrder',
		props:{
			type:{
				type:Number|String,
				default:0
			}
		},
		components:{
			logisticsDetails
		},
		data() {
			return {
				show:false,
				show2:false,
				tabList:[
					{title:'待付款'},
					{title:'待收货'},
					{title:'待评价'},
					{title:'退款/售后'},
					{title:'已评价'},
					{title:'全部订单'},
				],
				list:[
					{date:'2022-11-01  19:25',status:0,getGoods:false,products:[
						{productName:'产品名称',specification:'1',num:1,price:'169',imgSrc:'/static/image/u25.png'},
						{productName:'产品名称',specification:'1',num:1,price:'169',imgSrc:'/static/image/u25.png'},
					],allNum:23,allPrice:'269'},
					{date:'2022-11-01  19:25',status:1,getGoods:false,products:[
						{productName:'产品名称',specification:'1',num:1,price:'169',imgSrc:'/static/image/u25.png'},
						{productName:'产品名称',specification:'1',num:1,price:'169',imgSrc:'/static/image/u25.png'},
					],allNum:12,allPrice:'1we69'},
					{date:'2022-11-01  19:25',status:2,getGoods:true,products:[
						{productName:'产品名称',specification:'1',num:1,price:'169',imgSrc:'/static/image/u25.png'},
						{productName:'产品名称',specification:'1',num:1,price:'169',imgSrc:'/static/image/u25.png'},
					],allNum:12,allPrice:'1we69'},
					{date:'2022-11-01  19:25',status:3,getGoods:true,refund:false,products:[
						{productName:'产品名称',specification:'1',num:1,price:'169',imgSrc:'/static/image/u25.png'},
						{productName:'产品名称',specification:'1',num:1,price:'169',imgSrc:'/static/image/u25.png'},
					],allNum:12,allPrice:'1we69'},
					{date:'2022-11-01  19:25',status:4,getGoods:false,products:[
						{productName:'产品名称',specification:'1',num:1,price:'169',imgSrc:'/static/image/u25.png'},
						{productName:'产品名称',specification:'1',num:1,price:'169',imgSrc:'/static/image/u25.png'},
					],allNum:12,allPrice:'1we69'},
				]
			}
		},

		computed:{
			typeList(){
				if(this.type!=5){
					return this.list.filter((item,index)=>{
						return item.status == this.type
					})
				}else{
					return this.list
				}
			},
			
		},
		methods: {
			clickBtn(status){
				if(status===0){
					// 取消订单
					// uni.navigateTo({
					// 	url:'/pagesJbx/comfirmOrder/comfirmOrder'
					// })
				}else if(status==1){
					// 物流详情
					this.show = !this.show
				}else if(status==2){
					// 查看详情
					uni.navigateTo({
						url:'/pagesJbx/orderDetail/orderDetail'
					})
				}
			},
			clickBtn2(status){
				if(status===0){
					uni.navigateTo({
						url:'/pagesJbx/comfirmOrder/comfirmOrder'
					})
				}else if(status==1){
					// 确认收货
					// uni.navigateTo({
					// 	url:'/pagesJbx/comfirmOrder/comfirmOrder'
					// })
				}else if(status==2){
					// 发表评价
					uni.navigateTo({
						url:'/pagesJbx/evaluation/evaluation'
					})
				}
			},
			checkTab(index){
				this.$emit('update:type',index)
			},
			typeButton1(status){
				return ['取消订单','物流详情','查看详情'][status]
			},
			typeButton2(status){
				return ['立即支付','确认收货','立即评价','维权处理中'][status]
			},
			typeButtonStyleColor(status){
				return ['#009B4C','#f59a23','#f59a23','#d9001b'][status]
			},
			headInfo(status,refund){
				if(status ===3&&refund){
					return '已退款'
				}else if(status ===3&&!refund){
					return '未退款'
				}
				return ['待付款','商家已发货','待评价','退款/售后','已评价','全部订单'][status]
			},
			logistics(getGoods,status){
				if(status ===3&&getGoods){
					return '已收货'
				}else if(status ===3&&!getGoods){
					return '未收货'
				}
				return	['','已发货','已收货','','已收货'][status]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.status3{
		color:#D9001B;
		fontSize: 32rpx;
	}
	.unstatus3{
		color:#F59A23;
		fontSize: 32rpx;
	}
	.order-tab{
		display: flex;
		height: 120rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		justify-content: space-around;
		background-color: #fff;
		.tab-item{
			position: relative;
			height: 120rpx;
			line-height: 120rpx;
			.active-line{
				width: 100%;
				height: 14rpx;
				position: absolute;
				bottom: 0;
				background-color: #009b4c;
				border-radius: 14rpx;
			}
		}
	}
	.orders{
		border-radius: 20rpx;
		background-color: #fff;
		padding: 20rpx;
		margin-top: 20rpx;
		.order-header{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 40rpx;
			border-bottom: 6rpx solid #f9f9f9;
			padding-bottom: 10rpx;
		}
		.info1{
			text-align: right;
			margin-top: 15rpx;
			margin-bottom: 10rpx;
			color: #AAAAAA;
		}
		.order-body{
			height: 200rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			image{
				width: 120rpx;
				height: 120rpx;
			}
			.info2{
				flex: 1;
				padding-left: 40rpx;
				.product-name{
					margin-bottom: 20rpx;
				}
				.specification{
					color: #7F7F7F;
				}
			}
			.right{
				text-align: right;
				.price{
					margin-bottom: 20rpx;
				}
				.num{
					
				}
			}
			
		}
		.order-footer{
			text-align: right;
			border-top: 6rpx solid #f9f9f9;
			// height: 80rpx;
			padding-top: 20rpx;
			.all-num{
				line-height: 80rpx;
			}
			.all-price{
				margin-left: 30rpx;
			}
			
		}
		.order-pay{
			text-align: right;
			.cancel,.pay{
				display: inline-block;
				color: #333333;
				border: 2rpx solid #333333;
				border-radius: 50rpx;
				text-align: center;
				width: 160rpx;
				height: 50rpx;
				line-height: 50rpx;
				margin-left: 30rpx;
			}
			.cancel-width{
				width: 200rpx;
			}
		}
	}
	
</style>
