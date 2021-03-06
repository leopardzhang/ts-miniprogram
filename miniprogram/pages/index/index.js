"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var _require_1 = require("../../config/$request/$require");
var api_1 = require("../../config/api/api");
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true,
                    });
                },
            });
        }
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
    handleTap: function () {
        _require_1.default({
            proxy: api_1.default.demo,
            params: {
                userName: 'John',
                password: '230103'
            },
            urlParams: {
                a: 12,
                b: 5
            }
        }).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRWhDLDJEQUFxRDtBQUNyRCw0Q0FBc0M7QUFHdEMsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztLQUNuRDtJQUVELFdBQVc7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLGNBQWM7U0FDbkIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUNELE1BQU07UUFBTixpQkEyQkM7UUExQkEsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVE7Z0JBQ2pDLFdBQVcsRUFBRSxJQUFJO2FBQ2pCLENBQUMsQ0FBQTtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUc3QixHQUFHLENBQUMscUJBQXFCLEdBQUcsVUFBQSxHQUFHO2dCQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtvQkFDdEIsV0FBVyxFQUFFLElBQUk7aUJBQ2pCLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQTtTQUNEO2FBQU07WUFFTixFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNkLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1gsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUE7Z0JBQ0gsQ0FBQzthQUNELENBQUMsQ0FBQTtTQUNGO0lBQ0YsQ0FBQztJQUNELFdBQVcsWUFBQyxDQUFNO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNSLGtCQUFRLENBQUM7WUFDUixLQUFLLEVBQUcsYUFBRyxDQUFDLElBQW9CO1lBQ2hDLE1BQU0sRUFBRTtnQkFDUCxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLFFBQVE7YUFDbEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1YsQ0FBQyxFQUFFLEVBQUU7Z0JBQ0wsQ0FBQyxFQUFFLENBQUM7YUFDSjtTQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFhO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBVTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcblxuY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcblxuaW1wb3J0ICRyZXF1ZXN0IGZyb20gJy4uLy4uL2NvbmZpZy8kcmVxdWVzdC8kcmVxdWlyZSdcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vY29uZmlnL2FwaS9hcGknXG5pbXBvcnQgeyBjb25maWdQcm94eSwgcmVzcG9uc2UgfSBmcm9tICcuLi8uLi90eXBlcy9hcGkvYXBpJ1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdG1vdHRvOiAnSGVsbG8gV29ybGQnLFxuXHRcdHVzZXJJbmZvOiB7fSxcblx0XHRoYXNVc2VySW5mbzogZmFsc2UsXG5cdFx0Y2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuXHR9LFxuXHQvLyDkuovku7blpITnkIblh73mlbBcblx0YmluZFZpZXdUYXAoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi9sb2dzL2xvZ3MnLFxuXHRcdH0pXG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHRpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcblx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcblx0XHRcdFx0aGFzVXNlckluZm86IHRydWUsXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcblx0XHRcdC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG5cdFx0XHQvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG5cdFx0XHRhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gcmVzID0+IHtcblx0XHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0XHR1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuXHRcdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlLFxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuXHRcdFx0d3guZ2V0VXNlckluZm8oe1xuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xuXHRcdFx0XHRcdGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0XHRcdHVzZXJJbmZvOiByZXMudXNlckluZm8sXG5cdFx0XHRcdFx0XHRoYXNVc2VySW5mbzogdHJ1ZSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9LFxuXHRcdFx0fSlcblx0XHR9XG5cdH0sXG5cdGdldFVzZXJJbmZvKGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpXG5cdFx0YXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xuXHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHR1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG5cdFx0XHRoYXNVc2VySW5mbzogdHJ1ZSxcblx0XHR9KVxuXHR9LFxuXG5cdGhhbmRsZVRhcCgpIHtcblx0XHQkcmVxdWVzdCh7XG5cdFx0XHRwcm94eTogKGFwaS5kZW1vIGFzIGNvbmZpZ1Byb3h5KSxcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHR1c2VyTmFtZTogJ0pvaG4nLFxuXHRcdFx0XHRwYXNzd29yZDogJzIzMDEwMydcblx0XHRcdH0sXG5cdFx0XHR1cmxQYXJhbXM6IHtcblx0XHRcdFx0YTogMTIsXG5cdFx0XHRcdGI6IDVcblx0XHRcdH1cblx0XHR9KS50aGVuKChyZXM6IHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0fSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGVycilcblx0XHR9KVxuXHR9XG59KVxuIl19