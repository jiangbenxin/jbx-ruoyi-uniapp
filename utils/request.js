export default {
	common:{
		baseUrl:'https://fawnuat.xuexiluxian.cn',
		data:{},
		header:{
			"content-Type":"application/json",
			// "content-Type":"application/x-www-form-urlencoded"
		},
		method:'get',
		dataType:'json'
	},
	request(options={}){
		options.url = this.common.baseUrl + options.url
		options.data = options.data||this.common.data
		options.header = options.header||this.common.header
		options.datType = options.datType||this.common.datType
		return new Promise((res,rej)=>{
			uni.showLoading({
				title:'加载中'
			})
			uni.request({
				...options,
				success:(res2)=>{
					if(res2.data.resultCode !=200 ){
						setTimeout(function() {
							uni.hideLoading()
						}, 300)
					}
					setTimeout(function() {
						uni.hideLoading()
					}, 300);
					let data = res2.data.data
					if(data){
						res(data)
					}else{
						res(res2.data)
					}
				}
			})
		})
	}
}
