import request from './request.js'
// 接口测试
 const GetData = (data) => {
  return request({
    url: `/api/v2/wechat/log/search`,
    method: 'POST',
    data: data
  })
}
module.exports = {
  GetData
}