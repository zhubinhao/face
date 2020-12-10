import { Ticon } from "@/Interfaces/Icommon"

// 判断是手机号
export const isPhone = function (phone: string): boolean {
	return !(/^1[3456789]\d{9}$/.test(phone))
}

// 判断是否是身份证
export const isIdCard = function (idCard: string): boolean {
	return !(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/.test(idCard))
}

//只保留2位小数 
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

// toast
export const toast = function (title: string, icon?: Ticon) {
	uni.showToast({
		title,
		icon: icon || 'none'
	})
}
// 获取时间
export const getDetes = function (time?: string): string {
	let date = time ? new Date(time) : new Date()
	const y = date.getFullYear()
	const m = date.getMonth() + 1
	const d = date.getDate()
	return `${y}-${m > 9 ? m : '0' + m}-${d > 9 ? d : '0' + d}`
}

//画布转图片
export const canvasToTempFilePath = function (canvasId: string, w: number, h: number) {
	return new Promise((resolve, reject) => wx.canvasToTempFilePath({
		x: 0,
		y: 0,
		width: w,
		height: h,
		destWidth: w,
		destHeight: h,
		canvasId,
		success: (res) => {
			resolve(res.tempFilePath)
		},
		fail: (res) => {
			console.log(res);
			reject()
		},
	}))
}
