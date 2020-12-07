import { httpUrl } from './path'
import { Iobj, Tmethod } from '@/Interfaces/Icommon'
import { toast } from '@/utils/api'

class Http {
	constructor() { }

	get(url: string, data: Iobj = {}) {
		return this.axios(url, data, 'GET')
	}

	post(url: string, data: Iobj = {}) {
		return this.axios(url, data, 'POST')
	}
	uploadFile(url: string, filePath: string,corpcode:string) {
		uni.showLoading({title:"图片上传中..."})
		return new Promise((resolve, reject) =>uni.uploadFile({
			url: httpUrl + url,
			filePath: filePath,
			name: 'file',
			formData: {
				'token':uni.getStorageSync('token'),
				'corpcode':corpcode
			},
			success: (res: any) => {
				uni.hideLoading()
				resolve(JSON.parse(res.data))
			},fail:(res: any)=>{
				uni.hideLoading()
				reject(res.data)
			}
		})
		)
	}


	private axios(url: string, data: Iobj, method: Tmethod) {
		return new Promise((resolve, reject) => uni.request({
			url: httpUrl + url,
			data: this.getData(data),
			method: method,
			header: this.getHeader(),
			success: (res: any) => {
				if (res.data.code == 0) {
					resolve(res.data)
				} else {
					toast(res.data.msg)
					reject(res.data)
				}
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