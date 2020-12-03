//只保留2位小数 
import http from "@/utils/http"
import { Ticon } from "@/Interfaces/Icommon"

export const clearNoNum = function (str: string) {
	str = (str || '').toString();
	str = str.replace(".", "$#$")
		.replace(/\./g, "")
		.replace("$#$", ".")
		.replace(/[^\d.]/g, "")
		.replace(/^\./g, "")
	str = str.replace(/([0-9]+\.[0-9]{2})[0-9]*/, "$1")
	return str;
}
export const float = function (e: any, key: string, _this: any) {
	const v = clearNoNum(e.detail.value);
	const obj = JSON.parse(JSON.stringify(_this.obj));
	_this.$nextTick(() => {
		obj[key] = v;
		_this.obj = obj;
	});
}
// 获取openid
export const getOpenIds = function () {
	return new Promise((resolve, reject) => uni.login({
		provider: "weixin",
		success: function (loginRes) {
			http.post("/JY/WX_Openid", { code: loginRes.code }).then(res => {
				resolve(res)
			}).catch(res => {
				reject(res)
			})
		}
	}))
}
// toast
export const toast = function (title: string, icon?: Ticon) {
	uni.showToast({
		title,
		icon: icon || 'none'
	})
}

export const getDetes = function(time?:string):string{
	let date = time?new Date(time):new Date()
	const y = date.getFullYear()
	const m = date.getMonth() + 1
	const d = date.getDate()
	return `${y}-${m > 9 ? m : '0' + m}-${d > 9 ? d : '0' + d}`

}

