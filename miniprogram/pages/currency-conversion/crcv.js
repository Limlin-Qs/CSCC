// pages/currency-conversion/crcv.js
var C, start, end, sum;
Page({
  data: {

  },
  //事件处理函数
  calc: function(e) {
    C = parseInt(e.detail.value.cels);
    this.setData({
      M: (C / 6.8801).toFixed(4),
      Y: (C / 8.7873).toFixed(4),
      G: (C / 0.8805).toFixed(4),
      O: (C / 7.8234).toFixed(4),
      H: (C / 0.0061).toFixed(4),
      R: (C / 0.0610).toFixed(4),
    })
  },
  reset: function(){
    this.setData({
      M: '',
      Y: '',
      G: '',
      O: '',
      H: '',
      R: '',
    })
  },
  StartNum: function(e){
    start = parseInt(e.detail.value);
  },

  EndNum: function (e) {
    end = parseInt(e.detail.value);
  },

  calc1:function(){
    sum = 0;
    for (var i = start; i <= end; i++) {
      sum = sum + i;
    }
    this.setData({
      sum: sum
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

})