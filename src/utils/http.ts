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

	private axios(url: string, data: Iobj, method: Tmethod) {
		return new Promise((resolve, reject) => uni.request({
			url: httpUrl + url,
			data: this.getData(data),
			method: method,
			header: this.getHeader(),
			success: (res: any) => {
				if (res.data.flag == 1 || res.data.flag === undefined) {
					resolve(res.data)
				} else {
					// toast("")
					reject(res.data)
				}
			}
		}))
	}

	private getData(data: Iobj): Iobj {
		const token = uni.getStorageSync('token') || '';
		if (token) {
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