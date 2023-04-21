
import $http from './request.js'

const request = ((data,method,url)=>$http.request({data,method,url}))

export const getClassList = data=>request(data,'post','/wechat/class/list')
