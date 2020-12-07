const urlObj: any = {
	development: 'http://120.24.92.135:9010', //本地
	test: 'http://120.24.92.135:9010',//测试
	pro: 'http://120.24.92.135:9010', //生产
}

const imgObj: any = {
	development: 'http://120.24.92.135:9009/firewebv/Image/', //本地
	test: 'http://app.juncoax.com:8080/firewebv/Image/',//测试
	pro: 'http://app.juncoax.com:8080/firewebv/Image/', //生产
}

console.log(process.env.NODE_ENV)
export const httpUrl = urlObj[process.env.NODE_ENV]


