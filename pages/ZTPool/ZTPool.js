import {GetZTBData} from '../API/api.js'
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
    GetZTBData({
      date: thiz.data.date
    }).then(res=>{
      if (res.code == 20000) {
        let arr = res.data.map(item=>{
          let num = Number(item.ceilingAmount)/10000
          return {
            code: item.code ,
            name: item.name,
            firstCeilingTime: util.formatTimeStr(item.firstCeilingTime),
            industry:item.industry,
            ceilingAmount: ((num>10000 || num < -10000) ? (num/10000).toFixed(2) + '亿' : num.toFixed(1) + '万')
          }
        })
        thiz.setData({
          dataList: arr || []
        })
      } 
    })
    
  },
  // 跳转详情页码
  onLinkInfo(e) {
    wx.navigateTo({
      url: '../infoPage/infoPage?thsCode=' + e.currentTarget.dataset.item.thsCode
    })   
  },
  onLoad: function(options) {
    this.setData({
      date: getNowDate(),
    })
    this.getUserLog()
  },
  onUnload: function() {
  
  },
})