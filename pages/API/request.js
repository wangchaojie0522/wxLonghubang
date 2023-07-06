const baseUrl = "https://dgiot.nemoface.com"
// 参数 "options" 从接口函数传递过来
const request = (options) => {
    return new Promise((resolve,reject) => {
    	// 拼接请求地址
        wx.request({
        	// 配置 "wx.request" 请求参数
            url:  baseUrl + options.url,
            data:  options.data,
            method: options.method,
            header: {
                // 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                // 'Cookie':wx.getStorageSync('cookieKey'),       // 配置传递Cookie（微信小程序默认没有cookie，如有需要可以自己储存下来再从请求头传递给后端）
                'Authorization': wx.getStorageSync('token')                           
            },
            success: function (res) {
                // console.log("api-res=>", res);
                // 返回成功信息
            
                resolve(res.data)    
            },
            fail: function (error) {
                console.log("api-err=>", error);
                // 返回错误信息
                reject(error)
            }
        })
    })
}
export default request
