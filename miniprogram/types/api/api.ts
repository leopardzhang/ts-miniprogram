export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'CONNECT' | 'TRACE'

export interface requestConfig {
	proxy: configProxy
	params?: any
	header?: any
	urlParams?: any
}

export interface configProxy {
	url: string
	method?: Method
}

export interface response {
	code: number
	data: any
}