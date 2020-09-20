import {httpUrl} from './path'
export const http =function(obj:any){
	const token = uni.getStorageSync('token')||'';
	obj.data = obj.data?obj.data:{}
	if(token){
		obj.data.token = token
	}
	return new Promise((resolve,reject) => uni.request({
			url: httpUrl+obj.url, 
			data: obj.data||{},
			method:obj.method||"POST",
			header: {
				"content-type": "application/json",
			},
			success: (res:any)=>{
			  if(res.data.flag==1||res.data.flag===undefined){
				  resolve(res.data) 
			  }else{ 
				  reject(res.data)
			  }
			} 
		})
	)
}