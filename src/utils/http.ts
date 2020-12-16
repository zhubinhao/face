// import { httpUrl } from './path'
import { Iobj, Tmethod } from '@/Interfaces/Icommon'
import { toast } from '@/utils/api'

class Http {
	private httpUrl: string
	constructor(url?: string) {
		this.httpUrl = url || process.env.VUE_APP_URL
	}
	// get
	get(url: string, data: Iobj = {}) {
		return this.axios(url, data, 'GET')
	}
	// post
	post(url: string, data: Iobj = {}) {
		return this.axios(url, data, 'POST')
	}
	// post 枷锁lock
	postLock(url: string, data: Iobj = {}, that: any) {
		if (that.lock) {
			return new Promise((resolve, reject)=>reject())
		} else {
			that.lock = true
			return this.axios(url, data, 'POST', that)
		}
	}
	// 上传附件
	uploadFile(url: string, filePath: string, corpcode: string) {
		return new Promise((resolve, reject) => uni.uploadFile({
			url: this.httpUrl + url,
			filePath: filePath,
			name: 'file',
			formData: {
				'token': uni.getStorageSync('token'),
				'corpcode': corpcode
			},
			success: (res: any) => {
				resolve(JSON.parse(res.data))
			}, fail: (res: any) => {
				uni.hideLoading()
				reject(res.data)
			}
		})
		)
	}


	private axios(url: string, data: Iobj, method: Tmethod, that?: any) {
		return new Promise((resolve, reject) => uni.request({
			url: this.httpUrl + url,
			data: this.getData(data),
			method: method,
			header: this.getHeader(),
			success: (res: any) => {
				uni.hideLoading()
				if (res.data.code == 0) {
						resolve(res.data)
				} else {
					res.data.msg && toast(res.data.msg)
					reject(res.data)
				}
				if (that) { that.lock = false }
			}
		}))
	}

	private getData(data: Iobj): Iobj {
		const token = uni.getStorageSync('token') || '';
		if (token && !data.token) {
			data.token = token
		}
		return data
	}

	private getHeader(): Iobj {
		return {
			"content-type": "application/json",
		}
	}
}
export default new Http()
export const http = Http