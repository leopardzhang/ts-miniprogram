"use strict";
App({
    globalData: {},
    onLaunch: function () {
        var _this = this;
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (res) {
                console.log(res.code);
            },
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res);
                            }
                        }
                    });
                }
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQWE7SUFDZixVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVE7UUFBUixpQkFpQ0M7UUEvQkEsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUN4QixFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUcvQixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1IsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV0QixDQUFDO1NBQ0QsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1gsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBRXRDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ2QsT0FBTyxFQUFFLFVBQUEsR0FBRzs0QkFFWCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBOzRCQUl2QyxJQUFJLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQ0FDL0IsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFBOzZCQUMvQjt3QkFDRixDQUFDO3FCQUNELENBQUMsQ0FBQTtpQkFDRjtZQUNGLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXG5BcHA8SUFwcE9wdGlvbj4oe1xuXHRnbG9iYWxEYXRhOiB7fSxcblx0b25MYXVuY2goKSB7XG5cdFx0Ly8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXG5cdFx0Y29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cblx0XHRsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcblx0XHR3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXG5cblx0XHQvLyDnmbvlvZVcblx0XHR3eC5sb2dpbih7XG5cdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuY29kZSlcblx0XHRcdFx0Ly8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcblx0XHRcdH0sXG5cdFx0fSlcblx0XHQvLyDojrflj5bnlKjmiLfkv6Hmga9cblx0XHR3eC5nZXRTZXR0aW5nKHtcblx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcblx0XHRcdFx0XHQvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXG5cdFx0XHRcdFx0d3guZ2V0VXNlckluZm8oe1xuXHRcdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcblx0XHRcdFx0XHRcdFx0Ly8g5Y+v5Lul5bCGIHJlcyDlj5HpgIHnu5nlkI7lj7Dop6PnoIHlh7ogdW5pb25JZFxuXHRcdFx0XHRcdFx0XHR0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cblxuXHRcdFx0XHRcdFx0XHQvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuXHRcdFx0XHRcdFx0XHQvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcylcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHR9LFxufSkiXX0=