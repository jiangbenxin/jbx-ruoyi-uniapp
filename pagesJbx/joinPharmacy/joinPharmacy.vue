<template>
	<view class="">
		<pageBar info="加入药店" navHeightValue="50" navBackgroundColor="#fff" titleColor="#000"></pageBar>
		<view class="join">
			<view class="header fz26">
				您仅需要提交相关证件资质，中正方达在一个工作日内完成审核后为您开通采购资质，您即可享受专业、高效、优惠的采购服务。
			</view>
			<view class="container">
				<view class="container-title">
					<text class="container-title-hd fz36" >基础信息</text>
					<button class="container-title-button"  @tap="disabled = !disabled">{{disabled?'修改信息':'保存信息'}}</button>
				</view>
				<view class="container-info" v-for="(item,index) in list">
					<view class="info-item-title fz28">{{item.cardName}}:</view>
					<input class="info-item-info fz26A" :style="{backgroundColor:disabled?'':'#fff'}" :disabled="disabled" :placeholder="item.cardPlaceh"></input>
				</view>`
				<view v-if="theType === 2" class="warning fz30">
					<view class="require">*</view>
					请核对信息是否正确，信息有误请手动修改信息
				</view>
			</view>
			<view class="content">
				<view class="content-title">
					<text class="content-title-info">类型</text>
				</view>
				<view class="content-btn">
					<button class="company-type1" :style="{color:isPrivate? '#000':'#fff',backgroundColor:isPrivate?'#fff':'#009b4c',border:isPrivate?'2rpx solid #000':''}" @tap="isPrivate=false">公立</button>
					<button class="company-type2" :style="{color:!isPrivate? '#000':'#fff',backgroundColor:!isPrivate?'#fff':'#009b4c',border:!isPrivate?'2rpx solid #000':''}" @tap="isPrivate=true">私立</button>
				</view>
			</view>
			<view class="footer">
				<text class="footer-title">资质信息</text>
				<image class="footer-warning-pic" src="/static/image/u25.png"></image>
				<view class="footer-message fz26">如下标*的为必传证件，如果为多证合一，多个证件位置上传相同的证件即可，新客户申请可向中正方达采购顾问索取法人授权采购委托书模板。委托书需填写本中正方达账号注册手机号码实名认证的采购人基本信息、有法定代表人印章/签字、并加盖企业公章方有法律效力，且需与所传身份证图片信息—致。
				</view >
				<button class="footer-btn fz26" @tap="example()">查看委托书和身份证件示例</button>
				<view v-if="theType !== 2&&!isPrivate"  class="certificate" >
					<view class="footer-certificates" v-for="(item,index) in list2">
						<text class="require">{{item.required===true?"*":''}}</text>
						<view>
							<text  class="footer-certificate-item-title fz267006">{{item.title}}:</text>
							<view class="footer-certificate-content">
								<image class="footer-certificate-content-pic" src="/static/image/u25.png" mode=""></image>
								<view class="footer-certificate-info">
									{{item.picInfo}}
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="theType !== 2" class="certificate" >
					<view class="footer-certificates" v-for="(item,index) in list3">
						<text class="require">{{item.required===true?"*":''}}</text>
						<view class="">
							<text  class="footer-certificate-item-title fz267006">{{item.title}}:</text>
							<view class="footer-certificate-content">
								<image class="footer-certificate-content-pic" src="/static/image/u25.png" mode=""></image>
								<view class="footer-certificate-info">
									{{item.picInfo}}
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="theType == '2'" class="certificate" >
					<view class="footer-certificates" v-for="(item,index) in list5">
						<text class="require">{{item.required===true?"*":''}}</text>
						<view class="">
							<text  class="footer-certificate-item-title fz267006">{{item.title}}:</text>
							<view class="footer-certificate-content">
								<image class="footer-certificate-content-pic" src="/static/image/u25.png" mode=""></image>
								<view class="footer-certificate-info">
									{{item.picInfo}}
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="certificate" >
					<view class="footer-certificates" v-for="(item,index) in list4">
						<text class="require">{{item.required===true?"*":''}}</text>
						<view class="">
							<text  class="footer-certificate-item-title fz267006">{{item.title}}:</text>
							<view class="footer-certificate-content">
								<image class="footer-certificate-content-pic" src="/static/image/u25.png" mode=""></image>
								<view class="footer-certificate-info" style="color: #000;font-weight: normal;">请上传身份证
									<text style="color: red;">{{item.picInfo==='请上传身份证(正面)'?'(正面)':'(反面)'}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<text class="invitation-code">邀请码</text>
				<input class="invitation-code-inp" placeholder-style="font-size:28rpx;" type="text" value="" placeholder="请填写商业顾问的邀请码" />
				<button class="comfirm-btn" >提交审核</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isPrivate:false,
				disabled:true,
				list:[
					{cardName:'证件名称',cardPlaceh:'系统会自动识别回填',required:true},
					{cardName:'注册地址',cardPlaceh:'系统会自动识别回填',required:true},
					{cardName:'公司类型',cardPlaceh:'按照类型选择',required:true},
				],
				list2:[
					{title:'营业执照',picInfo:'立即上传',required:true},
					{title:'药品经营许可证',picInfo:'立即上传',required:true},
					{title:'采购委托书扫描件',picInfo:'立即上传',required:true},
				],
				list3:[
					{title:'医疗器械备案证',picInfo:'立即上传',required:false},
					{title:'医疗器械经营证',picInfo:'立即上传',required:false},
				],
				list4:[	
					{title:'身份证正面',picInfo:'请上传身份证(正面)',required:true},
					{title:'身份证反面',picInfo:'请上传身份证（反面）',required:true},
				],
				list5:[
					{title:'医疗机构执业许可证',picInfo:'立即上传',required:true},
					{title:'采购委托书扫描件',picInfo:'立即上传',required:true},
				],
				theType:2
			}
		},
		onLoad(option) {
			var type=option.type
			this.theType=Number(type)
			console.log(this.theType);
			if(this.theType===2){
				this.list=[
					{cardName:'证件名称',cardPlaceh:'系统会自动识别回填',required:true},
					{cardName:'注册地址',cardPlaceh:'系统会自动识别回填',required:true},
				]
			}
		},
		methods: {
			example(){
				uni.navigateTo({
					url:'/pagesJbx/example/example'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.require{
		color: red;
		margin-right: 20rpx;
		width:14rpx; 
	}
	.join{
		border-top: 6rpx solid #f2f2f2;
		.header{
			background-color: #fff;
			padding: 30rpx;
		}	
	}
	.content{
		background-color: #fff;
		padding: 30rpx 30rpx 30rpx 30rpx;
		margin-top: 30rpx;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		.content-title{
			display: flex;
			justify-content: space-between;
			.content-title-info{
				font-size: 36rpx;
				border-left:5rpx solid red;
				padding-left: 15rpx;
				width: 300rpx;
			}
		}
		.content-btn{
			display: flex;
			justify-content: left;
			.company-type1,.company-type2{
				width: 180rpx;
				height: 70rpx;
				line-height: 70rpx;
				font-size: 26rpx;
				margin: 0;
				margin-right: 50rpx;
				margin-top: 20rpx;
			}
		}
	}
	.container{
		background-color: #fff;
		padding:  30rpx 30rpx 0rpx 30rpx;
		margin-top: 30rpx;
		.container-title{
			display: flex;
			justify-content: space-between;
			.container-title-hd{
				border-left:5rpx solid red;
				padding-left: 15rpx;
				width: 300rpx;
			}
			.container-title-button{
				width: 200rpx;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 26rpx;
				margin: 0;
				background-color: #009b4c;
				color: #fff;
			}
		}
		.container-info{
			margin-top: 20rpx;
			line-height: 42rpx;
			margin-left: 20rpx;
			display: flex;
			.info-item-title{
			}
			.info-item-info{
				flex: 1;
				background-color: #f0f0f0;
				margin-left: 20rpx;
			}
		}
		.warning{
			display: flex;
			color: #D9001B;
			padding-bottom: 30rpx;
		}
	}
	.footer{
		background-color: #fff;
		padding: 30rpx;
		.footer-title{
			font-size: 42rpx;
			border-left:5rpx solid red;
			padding-left: 15rpx;
		}
		.footer-warning-pic{
			width: 670rpx;
			height: 120rpx;
			margin-top: 10rpx;
			margin-bottom: 10rpx;
		}
		.footer-message{
		}
		.footer-btn{
			width:670rpx;
			height: 60rpx;
			line-height: 60rpx;
			margin-top: 40rpx;
			margin-bottom: 40rpx;
			color: #009B4C;
			border: 2rpx solid #009B4C;
		}
		.certificate{
			display: flex;
			flex-wrap: wrap;
			.footer-certificates{
				display: flex;
				width: 50%;
				.footer-certificate-item-title{
				}
				.footer-certificate-content{
					margin-top: 40rpx;
					margin-bottom: 40rpx;
					width: 260rpx;
					height: 183rpx;
					border: 2rpx solid #000;
					text-align: center;
					.footer-certificate-content-pic{
						display: inline-block;
						width:92rpx;
						height:92rpx;
					}
					.footer-certificate-info{
						font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
						    font-weight: 700;
						    font-style: normal;
						    font-size: 26rpx;
						    color: #666666;
					}
				}
			}
		}
		.invitation-code{
			color: #666666;
			margin-left: 20rpx;
		}
		.invitation-code-inp{
			border:3rpx solid #666666;
			width: 400rpx;
			margin-left: 20rpx;
			margin-top: 20rpx;
			padding: 10rpx;
		}
	}

</style>
