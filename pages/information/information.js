// pages/information/information.js
const db = wx.cloud.database()
const CaseCollection = db.collection('Case')
db.collection('Case').add({
  // data 字段表示需新增的 JSON 数据
  data: {
    // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
    ID: "",
    Record: ""
  },
  success: function (res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
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