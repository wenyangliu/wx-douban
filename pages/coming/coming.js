var api = require('../../utils/api.js');

Page({
  data: {
    pn: 0,
    list: [],
    showLoading: true,
    showMore: true
  },
  redirect(e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  },
  scrolltoLower(e) {
    if (!this.data.showMore) return;
    this.loadData(this.data.pn)
  },
  loadData(pn) {
    api.getList('coming_soon', pn)
      .then(res => {
        console.log(res)
        if (res.subjects.length > 0) {
          this.setData({
            list: this.data.list.concat(res.subjects),
            showLoading: false,
            pn: pn + 1
          })
        } else {
          this.setData({
            showMore: false
          })
        }

      })
  },
  onLoad: function (options) {
    this.loadData(this.data.pn)
  }
})