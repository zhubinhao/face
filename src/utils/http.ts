import { httpUrl } from './path'
class http {
	constructor() {
	}
	get(url: string, data: any) {
		return new Promise((resolve, reject) => uni.request({
			url: httpUrl + url,
			data: this.getData(data),
			method: "POST",
			header: this.getHeader(),
			success: (res: any) => {
				if (res.data.flag == 1 || res.data.flag === undefined) {
					resolve(res.data)
				} else {
					reject(res.data)
				}
			}
		}))
	}
	post(url: string, data: any) {
		return new Promise((resolve, reject) => uni.request({
			url: httpUrl + url,
			data: this.getData(data),
			method: "POST",
			header: this.getHeader(),
			success: (res: any) => {
				if (res.data.flag == 1 || res.data.flag === undefined) {
					resolve(res.data)
				} else {
					reject(res.data)
				}
			}
		}))
	}
	getData(data: any): any {
		let obj = data || {}
		const token = uni.getStorageSync('token') || '';
		if (token) {
			obj.token = token
		}
		return obj
	}
	getHeader(): any {
		return {
			"content-type": "application/json",
		}
	}
}
export default new http()