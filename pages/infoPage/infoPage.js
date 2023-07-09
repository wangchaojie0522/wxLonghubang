import {GetData} from '../API/api.js'
import {getNowDate} from '../../utils/util.js'
const util = require('../../utils/util.js')
Page({
  data: {
    date: '2023-07-04',
    infoId:'',
    dataList: [
    ],
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
    this.getUserLog()
  },
  getUserLog(){
    var thiz = this
    thiz.setData({
      dataList: []
    })
    GetData({
      date: thiz.data.date
    }).then(res=>{
      if (res.code == 20000) {
        let arr1 =util.filterArr(res.data, 'thsCode')
        let arr = arr1.map(item=>{
          return {
            ...item
          }
        })
        console.log(arr)
        thiz.setData({
          dataList: arr || []
        })
      } 
    })
    
  },
  // 跳转详情页码
  onLinkInfo() {
    wx.navigateTo({
      url: '../deviceInfo/deviceInfo?id=' + e.currentTarget.dataset.item.type
    })   
  },
  onLoad: function(options) {
    this.setData({
      date: getNowDate(),
      infoId: options.thsCode
    })
    this.getUserLog()
  },
  onUnload: function() {
  
  },
})