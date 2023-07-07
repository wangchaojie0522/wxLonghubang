import request from './request.js'
// 接口测试
 const GetData = (data) => {
  return request({
    url: `/v1/base/dragonTiger?date=${data.date}`,
    method: 'GET',
    data: data
  })
}
module.exports = {
  GetData
}