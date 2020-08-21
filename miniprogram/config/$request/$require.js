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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiJHJlcXVpcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIkcmVxdWlyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDhDQUF3QztBQUV4QyxTQUF3QixRQUFRLENBQUMsU0FBd0I7SUFFdkQsSUFBQSx1QkFBSyxFQUNMLHFCQUFXLEVBQVgsZ0NBQVcsRUFDWCxxQkFBVyxFQUFYLGdDQUFXLEVBQ1gsd0JBQWMsRUFBZCxtQ0FBYyxDQUNGO0lBQ2IsSUFBSSxHQUFHLEdBQVcsRUFBRSxDQUFBO0lBRXBCLElBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN0QyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQTtLQUNmO1NBQU07UUFDTixHQUFHLEdBQU8saUJBQU8sU0FBSyxLQUFLLENBQUMsR0FBSyxDQUFBO0tBQ2pDO0lBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFTO1FBQ3hDLElBQU0sR0FBRyxHQUFXLElBQUksTUFBTSxDQUFDLE1BQUksQ0FBRyxDQUFDLENBQUE7UUFFdkMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JDLENBQUMsQ0FBQyxDQUFBO0lBRUYsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQVksRUFBRSxNQUFXO1FBQ3JELEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVixHQUFHLEtBQUE7WUFDSCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLFFBQUE7WUFDTixPQUFPLFlBQUMsR0FBUTtnQkFDZixJQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQ1o7cUJBQU07b0JBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUNkO1lBQ0YsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNaLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNILENBQUM7QUF4Q0QsMkJBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcblxuaW1wb3J0IHsgcmVxdWVzdENvbmZpZyB9IGZyb20gJy4uLy4uL3R5cGVzL2FwaS9hcGknXG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi9iYXNlVXJsL2Jhc2VVcmwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICRyZXF1ZXN0KGZldGNoRGF0YTogcmVxdWVzdENvbmZpZyk6IGFueSB7XG5cdGNvbnN0IHtcblx0XHRwcm94eSxcblx0XHRwYXJhbXMgPSB7fSxcblx0XHRoZWFkZXIgPSB7fSxcblx0XHR1cmxQYXJhbXMgPSB7fVxuXHR9ID0gZmV0Y2hEYXRhXG5cdGxldCB1cmw6IHN0cmluZyA9ICcnXG5cblx0aWYocHJveHkudXJsLnNwbGl0KCdodHRwJykubGVuZ3RoID4gMSkge1xuXHRcdHVybCA9IHByb3h5LnVybFxuXHR9IGVsc2Uge1xuXHRcdHVybCA9IGAkeyBiYXNlVXJsIH0vJHtwcm94eS51cmx9YFxuXHR9XG5cdFxuXG5cdE9iamVjdC5rZXlzKHVybFBhcmFtcykuZm9yRWFjaCgoazogc3RyaW5nKSA9PiB7XG5cdFx0Y29uc3QgcmVnOiBSZWdFeHAgPSBuZXcgUmVnRXhwKGA6JHtrfWApXG5cblx0XHR1cmwgPSB1cmwucmVwbGFjZShyZWcsIHVybFBhcmFtc1trXSlcblx0fSlcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpOiB2b2lkIHtcblx0XHR3eC5yZXF1ZXN0KHtcblx0XHRcdHVybCxcblx0XHRcdG1ldGhvZDogcHJveHkubWV0aG9kLFxuXHRcdFx0ZGF0YTogcGFyYW1zLFxuXHRcdFx0aGVhZGVyLFxuXHRcdFx0c3VjY2VzcyhyZXM6IGFueSkge1xuXHRcdFx0XHRpZihyZXMuY29kZSA9PSAyMDApIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJlcylcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZWplY3QoJ+ivt+axgumUmeivrycpXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRmYWlsKGVycikge1xuXHRcdFx0XHRyZWplY3QoZXJyKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0pXG59Il19