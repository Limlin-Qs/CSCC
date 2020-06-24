// pages/account/signup/signup.js
function User(name, sex, location, birthDay, number, email) {  //定义构造函数，用于创建对象
  this.name = name;  //将函数参数赋值给对象属性
  this.sex = sex;
  this.location = location;
  this.birthDay = birthDay;
  this.number = number;
  this.email = email;
}
Page({
  data: {  //初始数据
    flag: true,  //登录标志
    gender: ["男","女"],
    myFontSize: 25,

    getEmail: '',
    getPwd: '',
    getPwdConfirm: '',
  },
  //账号注册
  formSubmit: function(e){
    if(e.detail.value.email.length==0||e.detail.value.password.length==0){
      this.setData({
        showMsg01: '输入密码不能为空！'
      })
    } else if (e.detail.value.password != e.detail.value.confirm) {
      this.setData({
        showMsg02:'两次输入密码不一致！',
        getPwd: '',
        getPwdConfirm: ''
      })
    } else {
      wx.navigateTo({
        url: '/pages/account',
      })
    }
  },
  inputemail:function(e){
    var email = e.detail.value
    var checkedNum = this.checkEmail(email)
  },
  checkEmail:function(email){
    let str = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/  //正则表达式
    if(str.test(email)){
      return true
    }else{
      wx.showToast({  //显示消息提示框
        title: '邮箱格式错误',
        icon: 'loading'
      })
      this.setData({
        getEmail: ''
      })
      return false
    }
  },
  //详细信息填写
  nameInput: function(e){
    this.name = e.detail.value
  },
  pickerSex: function(e){
    this.sex = this.data.gender[e.detail.value]
    this.setData({
      sex: this.sex
    })
  },
  pickerRegion: function(e){
    this.location = e.detail.value;
    this.setData({
      location:this.location
    })
  },  
  pickerDate: function(e){
    this.birthDay = e.detail.value
    this.setData({
      birthDay: this.birthDay
    })
  },  
  numInput: function(e){
    this.number = e.detail.value
  },
  emailInput: function(e){
    this.email = e.detail.value
  },
  SaveNewUser: function(){
    var p = new  User(this.name, this.sex, this.location, this.birthDay, this.number, this.email)
    this.setData({
      
    })
  },
  checkboxChange: function(e) {
    var text = [];
    var male = '';
    var female = '';
    text = e.detail.value;
    for (var i=0; i<text.length; i++){
      if(text[i] == 'male'){
        male = 'male';
      }
      if(text[i] == 'female'){
        female = 'female';
      }
    }
    this.setData({
      Male: male,
      Female: female,
    })
  },

  radioChange: function(e){

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