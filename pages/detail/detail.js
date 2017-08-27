var api = require('../../utils/api.js')
Page({
	data:{
    list:{}
  },
  onLoad: function(options){
    var id = options.id
    api.getDetail(id)
    .then(res=>{
      console.log(res)
      this.setData({
        list: res
      })
      wx.setNavigationBarTitle({
        title: res.title,
      })
    })

    
  }
})