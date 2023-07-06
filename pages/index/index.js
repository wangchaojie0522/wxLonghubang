import {GetData} from '../API/api.js'
Page({
  data: {
    date: '2016-09-01',
    dataList: [
    ],
    allpage:0,//总页数
    page1:1,//第一页
    page2:2,//第二页
    page3:3,//‘'‘'
    pageNum: 1,
    pageSize: 10,
    countNum: 0,
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  getUserLog(){
    var thiz = this
    GetData({
      pageNum: thiz.data.pageNum,
      pageSize: thiz.data.pageSize
    }).then(res=>{
      if (res.code == 200) {
        let arr = res.data.map(item=>{
          return {
            ...item
          }
        })
        console.log(arr)
        thiz.setData({
          dataList: arr || [],
          allpage: res.pageCount
        })
      } 
    })
    
  },
  /**
   * 上一页
   */
  onPrevious:function(){
    if(this.data.pageNum==1){
        wx.showToast({
            title: '已为第一页',
            icon: 'none',
            duration: 1000
        })
    }else{
        if(this.data.pageNum<=this.data.page1) {
            this.setData({
              pageNum: this.data.pageNum - 1,
              page1: this.data.page1 - 1,
              page2: this.data.page2 - 1,
              page3: this.data.page3 - 1,
            });
          } else {
            this.setData({
              pageNum: this.data.pageNum - 1,
            });
          }
          this.getUserLog()
          
    }
  },
  /**
   * 下一页
   */
  onNext:function(){
    if (this.data.pageNum == this.data.allpage) {
        wx.showToast({
            title: '已为最后一页',
            icon: 'none',
            duration: 1000
        })
    } else {
        if(this.data.pageNum>=this.data.page3) {
            this.setData({
                pageNum: this.data.pageNum + 1,
                page1: this.data.page1 + 1,
                page2: this.data.page2 + 1,
                page3: this.data.page3 + 1,
            });
        } else {
            this.setData({
                pageNum: this.data.pageNum + 1,
            });
        }
          this.getUserLog()
    }
  },
  // 当前页
  onQueryData(e){
    console.log(e.currentTarget.dataset.id)
    this.setData({
      pageNum: e.currentTarget.dataset.id
    })
    this.getUserLog()
  },
  onLoad: function(options) {
  
    this.getUserLog()
  },
  onUnload: function() {
  
  },
})