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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRWhDLDJEQUFxRDtBQUNyRCw0Q0FBc0M7QUFFdEMsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztLQUNuRDtJQUVELFdBQVc7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLGNBQWM7U0FDbkIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUNELE1BQU07UUFBTixpQkEyQkM7UUExQkEsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVE7Z0JBQ2pDLFdBQVcsRUFBRSxJQUFJO2FBQ2pCLENBQUMsQ0FBQTtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUc3QixHQUFHLENBQUMscUJBQXFCLEdBQUcsVUFBQSxHQUFHO2dCQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtvQkFDdEIsV0FBVyxFQUFFLElBQUk7aUJBQ2pCLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQTtTQUNEO2FBQU07WUFFTixFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNkLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1gsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUE7Z0JBQ0gsQ0FBQzthQUNELENBQUMsQ0FBQTtTQUNGO0lBQ0YsQ0FBQztJQUNELFdBQVcsWUFBQyxDQUFNO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNSLGtCQUFRLENBQUM7WUFDUixLQUFLLEVBQUUsYUFBRyxDQUFDLElBQUk7WUFDZixNQUFNLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxRQUFRO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFO2dCQUNWLENBQUMsRUFBRSxFQUFFO2dCQUNMLENBQUMsRUFBRSxDQUFDO2FBQ0o7U0FDRCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQVU7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNqQixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cbmltcG9ydCAkcmVxdWVzdCBmcm9tICcuLi8uLi9jb25maWcvJHJlcXVlc3QvJHJlcXVpcmUnXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2NvbmZpZy9hcGkvYXBpJ1xuXG5QYWdlKHtcblx0ZGF0YToge1xuXHRcdG1vdHRvOiAnSGVsbG8gV29ybGQnLFxuXHRcdHVzZXJJbmZvOiB7fSxcblx0XHRoYXNVc2VySW5mbzogZmFsc2UsXG5cdFx0Y2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuXHR9LFxuXHQvLyDkuovku7blpITnkIblh73mlbBcblx0YmluZFZpZXdUYXAoKSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcuLi9sb2dzL2xvZ3MnLFxuXHRcdH0pXG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHRpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcblx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcblx0XHRcdFx0aGFzVXNlckluZm86IHRydWUsXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcblx0XHRcdC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG5cdFx0XHQvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG5cdFx0XHRhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gcmVzID0+IHtcblx0XHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0XHR1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuXHRcdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlLFxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuXHRcdFx0d3guZ2V0VXNlckluZm8oe1xuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xuXHRcdFx0XHRcdGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0XHRcdHVzZXJJbmZvOiByZXMudXNlckluZm8sXG5cdFx0XHRcdFx0XHRoYXNVc2VySW5mbzogdHJ1ZSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9LFxuXHRcdFx0fSlcblx0XHR9XG5cdH0sXG5cdGdldFVzZXJJbmZvKGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpXG5cdFx0YXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xuXHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHR1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG5cdFx0XHRoYXNVc2VySW5mbzogdHJ1ZSxcblx0XHR9KVxuXHR9LFxuXG5cdGhhbmRsZVRhcCgpIHtcblx0XHQkcmVxdWVzdCh7XG5cdFx0XHRwcm94eTogYXBpLmRlbW8sXG5cdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0dXNlck5hbWU6ICdKb2huJyxcblx0XHRcdFx0cGFzc3dvcmQ6ICcyMzAxMDMnXG5cdFx0XHR9LFxuXHRcdFx0dXJsUGFyYW1zOiB7XG5cdFx0XHRcdGE6IDEyLFxuXHRcdFx0XHRiOiA1XG5cdFx0XHR9XG5cdFx0fSkudGhlbigocmVzOiBhbnkpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHR9KS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKVxuXHRcdH0pXG5cdH1cbn0pXG4iXX0=