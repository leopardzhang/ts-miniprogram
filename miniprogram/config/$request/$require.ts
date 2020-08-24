// index.ts

import { requestConfig } from '../../types/api/api'
import baseUrl from '../baseUrl/baseUrl'

export default function $request(fetchData: requestConfig): any {
	const {
		proxy,
		params = {},
		header = {},
		urlParams = {}
	} = fetchData
	let url: string = ''

	//	根据url是否有http来判断是否添加baseurl
	if(proxy.url.split('http').length > 1) {
		url = proxy.url
	} else {
		url = `${ baseUrl }/${proxy.url}`
	}
	
	//	将url上的参数根据参数名拼接到url上
	Object.keys(urlParams).forEach((k: string) => {
		const reg: RegExp = new RegExp(`:${k}`)

		url = url.replace(reg, urlParams[k])
	})

	return new Promise(function (resolve: any, reject: any): void {
		wx.request({
			url,
			method: proxy.method,
			data: params,
			header,
			success(res: any) {
				if(res.code == 200) {
					resolve(res)
				} else {
					reject('请求错误')
				}
			},
			fail(err) {
				reject(err)
			}
		})
	})
}