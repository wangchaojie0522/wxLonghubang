import {GetData} from '../API/api.js'
import {getNowDate} from '../../utils/util.js'
Page({
  data: {
    date: '2023-07-04',
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
        let arr = res.data.map(item=>{
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
  onLoad: function(options) {
    this.setData({
      date: getNowDate()
    })
    this.getUserLog()
  },
  onUnload: function() {
  
  },
})