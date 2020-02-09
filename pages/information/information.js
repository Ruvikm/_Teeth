// pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  //#region 保存input里的内容

  userNameInput: function (e) {
   console.log(e.value)
    this.setData({
    userName: e.value
    })
  },
  userSexInput: function (e) {
    console.log(e.detail.value)
    this.setData({
    usersex: e.detail.value
    })
  },
  userAgeInput: function (e) {
    console.log(e.detail.value)
    this.setData({
    userage: e.detail.value
    })
  },
  userPhoneInput: function (e) {
    console.log(e.detail.value)
    this.setData({
    userphone: e.detail.value
    })
  },
  userTextInput: function (e) {
    console.log(e.detail.value)
    this.setData({
    usertext: e.detail.value
    })
  },
  
  Save:function () {
    var userName = this.data.userName;
    console.log(userName);
    var usersex = this.data.usersex;
    console.log(usersex);
    var userage = this.data.userage;
    console.log(userage);
    var userphone = this.data.userphone;
    console.log(userphone);
    var usertext = this.data.usertext;
    console.log(usertext);

  },






  //#endregion
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