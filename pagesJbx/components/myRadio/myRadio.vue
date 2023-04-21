<template>
	<view class="radio" @tap="click2()">
		<image v-if="checked" class="img" src="/static/image/u25.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		props:{
			checked:{
				type:Boolean,
				default:false
			}
		},
		name:"myRadio",
		data() {
			return {
				
			};
		},
		methods:{
			click2(){
				this.$emit('update:checked',!this.checked)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.radio{
		// background-color: #9e9e9e;
		border-radius: 15rpx;
		border: 2rpx solid #9e9e9e;
		width: 30rpx;
		height: 30rpx;
		
		.img{
			width: 30rpx;
			height: 30rpx;
		}
	}
</style>