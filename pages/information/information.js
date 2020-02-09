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
    userName:'',
    usersex:'',
    userage:'',
    userphone:'',
    usertext:''
  },
  
  //#region 保存input里的内容

  
  Save:function () {
    //获取姓名
    let Component_Name = this.selectComponent('#Name'); // 页面获取自定义组件实例
    // 通过实例调用组件事件
    var userName =Component_Name.data.value;
    console.log(userName);

    //获取性别
    let Component_Sex = this.selectComponent('#Sex'); // 页面获取自定义组件实例
    // 通过实例调用组件事件
    var usersex =Component_Sex.data.value;
    console.log(usersex);

    //获取年龄
    let Component_Age = this.selectComponent('#Age'); // 页面获取自定义组件实例
    // 通过实例调用组件事件
    var userage =Component_Age.data.value;
    console.log(userage);

    //获取电话
    let Component_Phone = this.selectComponent('#Phone'); // 页面获取自定义组件实例
    // 通过实例调用组件事件
    var userphone =Component_Phone.data.value;
    console.log(userphone);

    //获取个性签名
    let Component_Text = this.selectComponent('#Text'); // 页面获取自定义组件实例
    // 通过实例调用组件事件
    var usertext =Component_Text.data.value;
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