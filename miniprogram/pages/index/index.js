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
    },
    getWeather: function () {
        _require_1.default({
            proxy: api_1.default.weather,
            params: {
                u: 'c',
                w: 2502265
            }
        }).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRWhDLDJEQUFxRDtBQUNyRCw0Q0FBc0M7QUFFdEMsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztLQUNuRDtJQUVELFdBQVc7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLGNBQWM7U0FDbkIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUNELE1BQU07UUFBTixpQkEyQkM7UUExQkEsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVE7Z0JBQ2pDLFdBQVcsRUFBRSxJQUFJO2FBQ2pCLENBQUMsQ0FBQTtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUc3QixHQUFHLENBQUMscUJBQXFCLEdBQUcsVUFBQSxHQUFHO2dCQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtvQkFDdEIsV0FBVyxFQUFFLElBQUk7aUJBQ2pCLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQTtTQUNEO2FBQU07WUFFTixFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNkLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1gsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUE7Z0JBQ0gsQ0FBQzthQUNELENBQUMsQ0FBQTtTQUNGO0lBQ0YsQ0FBQztJQUNELFdBQVcsWUFBQyxDQUFNO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNSLGtCQUFRLENBQUM7WUFDUixLQUFLLEVBQUUsYUFBRyxDQUFDLElBQUk7WUFDZixNQUFNLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxRQUFRO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFO2dCQUNWLENBQUMsRUFBRSxFQUFFO2dCQUNMLENBQUMsRUFBRSxDQUFDO2FBQ0o7U0FDRCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQVU7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNqQixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1Qsa0JBQVEsQ0FBQztZQUNSLEtBQUssRUFBRSxhQUFHLENBQUMsT0FBTztZQUNsQixNQUFNLEVBQUU7Z0JBQ1AsQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sQ0FBQyxFQUFFLE9BQU87YUFDVjtTQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBVTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcblxuY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcblxuaW1wb3J0ICRyZXF1ZXN0IGZyb20gJy4uLy4uL2NvbmZpZy8kcmVxdWVzdC8kcmVxdWlyZSdcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vY29uZmlnL2FwaS9hcGknXG5cblBhZ2Uoe1xuXHRkYXRhOiB7XG5cdFx0bW90dG86ICdIZWxsbyBXb3JsZCcsXG5cdFx0dXNlckluZm86IHt9LFxuXHRcdGhhc1VzZXJJbmZvOiBmYWxzZSxcblx0XHRjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG5cdH0sXG5cdC8vIOS6i+S7tuWkhOeQhuWHveaVsFxuXHRiaW5kVmlld1RhcCgpIHtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy4uL2xvZ3MvbG9ncycsXG5cdFx0fSlcblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0dXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxuXHRcdFx0XHRoYXNVc2VySW5mbzogdHJ1ZSxcblx0XHRcdH0pXG5cdFx0fSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xuXHRcdFx0Ly8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cblx0XHRcdC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcblx0XHRcdGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSByZXMgPT4ge1xuXHRcdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHRcdHVzZXJJbmZvOiByZXMudXNlckluZm8sXG5cdFx0XHRcdFx0aGFzVXNlckluZm86IHRydWUsXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXG5cdFx0XHR3eC5nZXRVc2VySW5mbyh7XG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0YXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cblx0XHRcdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHRcdFx0dXNlckluZm86IHJlcy51c2VySW5mbyxcblx0XHRcdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0sXG5cdFx0XHR9KVxuXHRcdH1cblx0fSxcblx0Z2V0VXNlckluZm8oZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSlcblx0XHRhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG5cdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcblx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlLFxuXHRcdH0pXG5cdH0sXG5cblx0aGFuZGxlVGFwKCkge1xuXHRcdCRyZXF1ZXN0KHtcblx0XHRcdHByb3h5OiBhcGkuZGVtbyxcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHR1c2VyTmFtZTogJ0pvaG4nLFxuXHRcdFx0XHRwYXNzd29yZDogJzIzMDEwMydcblx0XHRcdH0sXG5cdFx0XHR1cmxQYXJhbXM6IHtcblx0XHRcdFx0YTogMTIsXG5cdFx0XHRcdGI6IDVcblx0XHRcdH1cblx0XHR9KS50aGVuKChyZXM6IGFueSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdH0pLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpXG5cdFx0fSlcblx0fSxcblxuXHRnZXRXZWF0aGVyKCkge1xuXHRcdCRyZXF1ZXN0KHtcblx0XHRcdHByb3h5OiBhcGkud2VhdGhlcixcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHR1OiAnYycsXG5cdFx0XHRcdHc6IDI1MDIyNjVcblx0XHRcdH1cblx0XHR9KS50aGVuKChyZXM6IGFueSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdH0pLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpXG5cdFx0fSlcblx0fVxufSlcbiJdfQ==