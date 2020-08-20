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
	let url = ''

	if(proxy.url.split('http').length > 1) {
		url = proxy.url
	} else {
		url = `${ baseUrl }/${proxy.url}`
	}
	

	Object.keys(urlParams).forEach((k: string) => {
		const reg = new RegExp(`:${k}`)

		url = url.replace(reg, urlParams[k])
	})

	return new Promise(function (resolve: any, reject: any): void {
		wx.request({
			url,
			method: proxy.method,
			data: params,
			header: header,
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