import { http } from "@/utils/http";

// x 为底 y 的对数（即logx y）：
export const getBaseLog = function (y: number, x: number = 10) {
	return Math.log(y) / Math.log(x);
}
export const clearNoNum = function (str: string) {
	str = (str || '').toString();
	str = str.replace(".", "$#$")//把第一个字符'.'替换成'$#$'
		.replace(/\./g, "")//把其余的字符'.'替换为空
		.replace("$#$", ".")//把字符'$#$'替换回原来的'.'
		.replace(/[^\d.]/g, "")//只能输入数字和'.'
		.replace(/^\./g, "")//不能以'.'开头
	str = str.replace(/([0-9]+\.[0-9]{2})[0-9]*/, "$1")//只保留2位小数 
	return str;
}
export const float = function(e:any,key:string,_this:any){
	const v = clearNoNum(e.detail.value);
	const obj = JSON.parse(JSON.stringify(_this.obj));
	_this.$nextTick(() => {
		obj[key] = v;
		_this.obj = obj;
	});
}

export const getOpenIds = function(){
	return new Promise((resolve,reject) => uni.login({
		provider: "weixin",
		success: function(loginRes) {
			http({ url: "/JY/WX_Openid",data:{code:loginRes.code}}).then(res=>{
				resolve(res)
			}).catch(res=>{
				reject(res)
			})
		}
	})
	)
}

