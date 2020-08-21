// index.ts
// 获取应用实例

const app = getApp<IAppOption>()

import $request from '../../config/$request/$require'
import api from '../../config/api/api'
import { configProxy, response } from '../../types/api/api'

Page({
	data: {
		motto: 'Hello World',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
	},
	// 事件处理函数
	bindViewTap() {
		wx.navigateTo({
			url: '../logs/logs',
		})
	},
	onLoad() {
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true,
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true,
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true,
					})
				},
			})
		}
	},
	getUserInfo(e: any) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true,
		})
	},

	handleTap() {
		$request({
			proxy: (api.demo as configProxy),
			params: {
				userName: 'John',
				password: '230103'
			},
			urlParams: {
				a: 12,
				b: 5
			}
		}).then((res: response) => {
			console.log(res)
		}).catch((err: Error) => {
			console.log(err)
		})
	}
})
