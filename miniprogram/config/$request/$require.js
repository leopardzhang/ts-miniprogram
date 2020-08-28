"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseUrl_1 = require("../baseUrl/baseUrl");
function $request(fetchData) {
    var proxy = fetchData.proxy, _a = fetchData.params, params = _a === void 0 ? {} : _a, _b = fetchData.header, header = _b === void 0 ? {} : _b, _c = fetchData.urlParams, urlParams = _c === void 0 ? {} : _c;
    var url = '';
    if (proxy.url.split('http').length > 1) {
        url = proxy.url;
    }
    else {
        url = baseUrl_1.default + "/" + proxy.url;
    }
    Object.keys(urlParams).forEach(function (k) {
        var reg = new RegExp(":" + k);
        url = url.replace(reg, urlParams[k]);
    });
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            method: proxy.method,
            data: params,
            header: header,
            success: function (res) {
                if (res.code == 200) {
                    resolve(res);
                }
                else {
                    reject('请求错误');
                }
            },
            fail: function (err) {
                reject(err);
            }
        });
    });
}
exports.default = $request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiJHJlcXVpcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIkcmVxdWlyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDhDQUF3QztBQUV4QyxTQUF3QixRQUFRLENBQUMsU0FBd0I7SUFFdkQsSUFBQSx1QkFBSyxFQUNMLHFCQUFXLEVBQVgsZ0NBQVcsRUFDWCxxQkFBVyxFQUFYLGdDQUFXLEVBQ1gsd0JBQWMsRUFBZCxtQ0FBYyxDQUNGO0lBQ2IsSUFBSSxHQUFHLEdBQVcsRUFBRSxDQUFBO0lBR3BCLElBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN0QyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQTtLQUNmO1NBQU07UUFDTixHQUFHLEdBQU8saUJBQU8sU0FBSyxLQUFLLENBQUMsR0FBSyxDQUFBO0tBQ2pDO0lBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFTO1FBQ3hDLElBQU0sR0FBRyxHQUFXLElBQUksTUFBTSxDQUFDLE1BQUksQ0FBRyxDQUFDLENBQUE7UUFFdkMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JDLENBQUMsQ0FBQyxDQUFBO0lBRUYsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQVksRUFBRSxNQUFXO1FBQ3JELEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVixHQUFHLEtBQUE7WUFDSCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLFFBQUE7WUFDTixPQUFPLFlBQUMsR0FBUTtnQkFDZixJQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQ1o7cUJBQU07b0JBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUNkO1lBQ0YsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNaLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUM7QUF6Q0QsMkJBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcblxuaW1wb3J0IHsgcmVxdWVzdENvbmZpZyB9IGZyb20gJy4uLy4uL3R5cGVzL2FwaS9hcGknXG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi9iYXNlVXJsL2Jhc2VVcmwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICRyZXF1ZXN0KGZldGNoRGF0YTogcmVxdWVzdENvbmZpZyk6IGFueSB7XG5cdGNvbnN0IHtcblx0XHRwcm94eSxcblx0XHRwYXJhbXMgPSB7fSxcblx0XHRoZWFkZXIgPSB7fSxcblx0XHR1cmxQYXJhbXMgPSB7fVxuXHR9ID0gZmV0Y2hEYXRhXG5cdGxldCB1cmw6IHN0cmluZyA9ICcnXG5cblx0Ly9cdOagueaNrnVybOaYr+WQpuaciWh0dHDmnaXliKTmlq3mmK/lkKbmt7vliqBiYXNldXJsXG5cdGlmKHByb3h5LnVybC5zcGxpdCgnaHR0cCcpLmxlbmd0aCA+IDEpIHtcblx0XHR1cmwgPSBwcm94eS51cmxcblx0fSBlbHNlIHtcblx0XHR1cmwgPSBgJHsgYmFzZVVybCB9LyR7cHJveHkudXJsfWBcblx0fVxuXHRcblx0Ly9cdOWwhnVybOS4iueahOWPguaVsOagueaNruWPguaVsOWQjeaLvOaOpeWIsHVybOS4ilxuXHRPYmplY3Qua2V5cyh1cmxQYXJhbXMpLmZvckVhY2goKGs6IHN0cmluZykgPT4ge1xuXHRcdGNvbnN0IHJlZzogUmVnRXhwID0gbmV3IFJlZ0V4cChgOiR7a31gKVxuXG5cdFx0dXJsID0gdXJsLnJlcGxhY2UocmVnLCB1cmxQYXJhbXNba10pXG5cdH0pXG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KTogdm9pZCB7XG5cdFx0d3gucmVxdWVzdCh7XG5cdFx0XHR1cmwsXG5cdFx0XHRtZXRob2Q6IHByb3h5Lm1ldGhvZCxcblx0XHRcdGRhdGE6IHBhcmFtcyxcblx0XHRcdGhlYWRlcixcblx0XHRcdHN1Y2Nlc3MocmVzOiBhbnkpIHtcblx0XHRcdFx0aWYocmVzLmNvZGUgPT0gMjAwKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXMpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVqZWN0KCfor7fmsYLplJnor68nKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZmFpbChlcnIpIHtcblx0XHRcdFx0cmVqZWN0KGVycilcblx0XHRcdH1cblx0XHR9KVxuXHR9KVxufSJdfQ==