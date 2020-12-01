//只保留2位小数 
import http from "@/utils/http"
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

