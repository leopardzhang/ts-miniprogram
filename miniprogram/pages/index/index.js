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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRWhDLDJEQUFxRDtBQUNyRCw0Q0FBc0M7QUFHdEMsSUFBSSxDQUFDO0lBQ0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztLQUNuRDtJQUVELFdBQVc7UUFDVixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLGNBQWM7U0FDbkIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUNELE1BQU07UUFBTixpQkEyQkM7UUExQkEsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVE7Z0JBQ2pDLFdBQVcsRUFBRSxJQUFJO2FBQ2pCLENBQUMsQ0FBQTtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUc3QixHQUFHLENBQUMscUJBQXFCLEdBQUcsVUFBQSxHQUFHO2dCQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtvQkFDdEIsV0FBVyxFQUFFLElBQUk7aUJBQ2pCLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQTtTQUNEO2FBQU07WUFFTixFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNkLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1gsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUE7Z0JBQ0gsQ0FBQzthQUNELENBQUMsQ0FBQTtTQUNGO0lBQ0YsQ0FBQztJQUNELFdBQVcsWUFBQyxDQUFNO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNSLGtCQUFRLENBQUM7WUFDUixLQUFLLEVBQUcsYUFBRyxDQUFDLElBQW9CO1lBQ2hDLE1BQU0sRUFBRTtnQkFDUCxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLFFBQVE7YUFDbEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1YsQ0FBQyxFQUFFLEVBQUU7Z0JBQ0wsQ0FBQyxFQUFFLENBQUM7YUFDSjtTQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFtQjtZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQVU7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNqQixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cbmltcG9ydCAkcmVxdWVzdCBmcm9tICcuLi8uLi9jb25maWcvJHJlcXVlc3QvJHJlcXVpcmUnXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2NvbmZpZy9hcGkvYXBpJ1xuaW1wb3J0IHsgY29uZmlnUHJveHksIHJlc3BvbnNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdHlwZXMvYXBpL2FwaSdcblxuUGFnZSh7XG5cdGRhdGE6IHtcblx0XHRtb3R0bzogJ0hlbGxvIFdvcmxkJyxcblx0XHR1c2VySW5mbzoge30sXG5cdFx0aGFzVXNlckluZm86IGZhbHNlLFxuXHRcdGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcblx0fSxcblx0Ly8g5LqL5Lu25aSE55CG5Ye95pWwXG5cdGJpbmRWaWV3VGFwKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnLi4vbG9ncy9sb2dzJyxcblx0XHR9KVxuXHR9LFxuXHRvbkxvYWQoKSB7XG5cdFx0aWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG5cdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHR1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG5cdFx0XHRcdGhhc1VzZXJJbmZvOiB0cnVlLFxuXHRcdFx0fSlcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XG5cdFx0XHQvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuXHRcdFx0Ly8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuXHRcdFx0YXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdFx0dXNlckluZm86IHJlcy51c2VySW5mbyxcblx0XHRcdFx0XHRoYXNVc2VySW5mbzogdHJ1ZSxcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcblx0XHRcdHd4LmdldFVzZXJJbmZvKHtcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcblx0XHRcdFx0XHRhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuXHRcdFx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdFx0XHR1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuXHRcdFx0XHRcdFx0aGFzVXNlckluZm86IHRydWUsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSxcblx0XHRcdH0pXG5cdFx0fVxuXHR9LFxuXHRnZXRVc2VySW5mbyhlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKVxuXHRcdGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cblx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0dXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuXHRcdFx0aGFzVXNlckluZm86IHRydWUsXG5cdFx0fSlcblx0fSxcblxuXHRoYW5kbGVUYXAoKSB7XG5cdFx0JHJlcXVlc3Qoe1xuXHRcdFx0cHJveHk6IChhcGkuZGVtbyBhcyBjb25maWdQcm94eSksXG5cdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0dXNlck5hbWU6ICdKb2huJyxcblx0XHRcdFx0cGFzc3dvcmQ6ICcyMzAxMDMnXG5cdFx0XHR9LFxuXHRcdFx0dXJsUGFyYW1zOiB7XG5cdFx0XHRcdGE6IDEyLFxuXHRcdFx0XHRiOiA1XG5cdFx0XHR9XG5cdFx0fSkudGhlbigocmVzOiByZXNwb25zZUNvbmZpZykgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdH0pLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpXG5cdFx0fSlcblx0fVxufSlcbiJdfQ==