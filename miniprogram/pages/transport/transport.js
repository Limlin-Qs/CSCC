// pages/transport/transport.js
Page({
  data: {
    flag: true,
    setoff:'',
    aim:'',
    way:'',
    price:'',

    latitude: 39.12348,
    longitude: 117.29724,
    markers:[
      {
        id:1,
        latitude: 39.12348,
        longitude: 117.29724,
        iconPath:'/pic/01.png',
        label: {
          content: '我的位置',
          color:'#ffff00',
          bgColor:'#00ffff',
          fontSize:10
        }
      },
      {
        latitude: 39.12348,
        longitude: 118.29714,
        iconPath:'/pic/01.png',
      }
    ]
  },

  input0:function(e){
    this.setData({
      setoff: e.detail.value
    });
  },

  input1: function (e) {
    this.aim({
      setoff: e.detail.value
    });
  },

  input2: function (e) {
    this.way({
      setoff: e.detail.value
    });
  },

  mysubmit: function(){
    if(this.data.setoff == '' || this.data.aim == '' || this.data.way == ''){
      return;
    } else {
      var p = 100;
      this.setData({
        flag: false,
        average: p,
      }); 
    }
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

  }
})