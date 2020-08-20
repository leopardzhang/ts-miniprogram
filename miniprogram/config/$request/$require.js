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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiJHJlcXVpcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIkcmVxdWlyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDhDQUF3QztBQUV4QyxTQUF3QixRQUFRLENBQUMsU0FBd0I7SUFFdkQsSUFBQSx1QkFBSyxFQUNMLHFCQUFXLEVBQVgsZ0NBQVcsRUFDWCxxQkFBVyxFQUFYLGdDQUFXLEVBQ1gsd0JBQWMsRUFBZCxtQ0FBYyxDQUNGO0lBQ2IsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFBO0lBRVosSUFBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3RDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFBO0tBQ2Y7U0FBTTtRQUNOLEdBQUcsR0FBTyxpQkFBTyxTQUFLLEtBQUssQ0FBQyxHQUFLLENBQUE7S0FDakM7SUFHRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQVM7UUFDeEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBSSxDQUFHLENBQUMsQ0FBQTtRQUUvQixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckMsQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBWSxFQUFFLE1BQVc7UUFDckQsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNWLEdBQUcsS0FBQTtZQUNILE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxZQUFDLEdBQVE7Z0JBQ2YsSUFBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUNaO3FCQUFNO29CQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtpQkFDZDtZQUNGLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDWixDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDO0FBeENELDJCQXdDQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG5cbmltcG9ydCB7IHJlcXVlc3RDb25maWcgfSBmcm9tICcuLi8uLi90eXBlcy9hcGkvYXBpJ1xuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi4vYmFzZVVybC9iYXNlVXJsJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAkcmVxdWVzdChmZXRjaERhdGE6IHJlcXVlc3RDb25maWcpOiBhbnkge1xuXHRjb25zdCB7XG5cdFx0cHJveHksXG5cdFx0cGFyYW1zID0ge30sXG5cdFx0aGVhZGVyID0ge30sXG5cdFx0dXJsUGFyYW1zID0ge31cblx0fSA9IGZldGNoRGF0YVxuXHRsZXQgdXJsID0gJydcblxuXHRpZihwcm94eS51cmwuc3BsaXQoJ2h0dHAnKS5sZW5ndGggPiAxKSB7XG5cdFx0dXJsID0gcHJveHkudXJsXG5cdH0gZWxzZSB7XG5cdFx0dXJsID0gYCR7IGJhc2VVcmwgfS8ke3Byb3h5LnVybH1gXG5cdH1cblx0XG5cblx0T2JqZWN0LmtleXModXJsUGFyYW1zKS5mb3JFYWNoKChrOiBzdHJpbmcpID0+IHtcblx0XHRjb25zdCByZWcgPSBuZXcgUmVnRXhwKGA6JHtrfWApXG5cblx0XHR1cmwgPSB1cmwucmVwbGFjZShyZWcsIHVybFBhcmFtc1trXSlcblx0fSlcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpOiB2b2lkIHtcblx0XHR3eC5yZXF1ZXN0KHtcblx0XHRcdHVybCxcblx0XHRcdG1ldGhvZDogcHJveHkubWV0aG9kLFxuXHRcdFx0ZGF0YTogcGFyYW1zLFxuXHRcdFx0aGVhZGVyOiBoZWFkZXIsXG5cdFx0XHRzdWNjZXNzKHJlczogYW55KSB7XG5cdFx0XHRcdGlmKHJlcy5jb2RlID09IDIwMCkge1xuXHRcdFx0XHRcdHJlc29sdmUocmVzKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlamVjdCgn6K+35rGC6ZSZ6K+vJylcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGZhaWwoZXJyKSB7XG5cdFx0XHRcdHJlamVjdChlcnIpXG5cdFx0XHR9XG5cdFx0fSlcblx0fSlcbn0iXX0=