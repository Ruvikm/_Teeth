// pages/information/information.js

//#region 数据的初始化

const APP_ID ='wxcfcae2873cc82924';//输入小程序appid  
const APP_SECRET ='a29bc7c43657e6ecddf66518ac47aa3f';//输入小程序app_secret  
var OPEN_ID=''//储存获取到openid  
var SESSION_KEY=''//储存获取到session_key 
const db = wx.cloud.database();
const CaseCollection = db.collection('Information');
var userName;
var usersex;
var userage;
var userphone;
var usertext;
var flag = true;

//#endregion


Page({


//#region 获取openid

  getOpenIdTap:function(){  
    var that=this;  
    wx.login({  
      success:function(res){  
        wx.request({  
            //获取openid接口  
          url: 'https://api.weixin.qq.com/sns/jscode2session',  
          data:{  
            appid:APP_ID,  
            secret:APP_SECRET,  
            js_code:res.code,  
            grant_type:'authorization_code'  
          },  
          method:'GET',  
          success:function(res){  
            console.log(res.data)  
            OPEN_ID = res.data.openid;//获取到的openid  
            SESSION_KEY = res.data.session_key;//获取到session_key  
            console.log(OPEN_ID.length)  
            console.log(SESSION_KEY.length)  
            that.setData({  
              openid: res.data.openid.substr(0, 10) + '********' + res.data.openid.substr(res.data.openid.length - 8, res.data.openid.length),  
              session_key: res.data.session_key.substr(0, 8) + '********' + res.data.session_key.substr(res.data.session_key.length - 6, res.data.session_key.length)  
            })  
          }  
        })  
      }  
    })  
  },

  //#endregion

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
  
  //#region 保存input里的内容并上传到服务器的数据库里，如果用户只是修改数据，则单独修改数据库里变化的数据

  
  Save:function () {

    
    //#region 获取用户的输入信息

    //获取姓名
    let Component_Name = this.selectComponent('#Name'); // 页面获取自定义组件实例
    // 通过实例调用组件事件
    userName =Component_Name.data.value;
    console.log(userName);

    //获取性别
    let Component_Sex = this.selectComponent('#Sex'); // 页面获取自定义组件实例
    // 通过实例调用组件事件
    usersex =Component_Sex.data.value;
    console.log(usersex);

    //获取年龄
    let Component_Age = this.selectComponent('#Age'); // 页面获取自定义组件实例
    // 通过实例调用组件事件
    userage =Component_Age.data.value;
    console.log(userage);

    //获取电话
    let Component_Phone = this.selectComponent('#Phone'); // 页面获取自定义组件实例
    // 通过实例调用组件事件
    userphone =Component_Phone.data.value;
    console.log(userphone);

    //获取个性签名
    let Component_Text = this.selectComponent('#Text'); // 页面获取自定义组件实例
    // 通过实例调用组件事件
    usertext =Component_Text.data.value;
    console.log(usertext);

    //#endregion

    //上传到数据库，前提是用户之前在数据库里没有记录

    if(flag)
    {
        db.collection('Information').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          _id: "", // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
          Name: userName,
          Age: userage,
          Sex:usersex,
          Phone:userphone,
          Sign:usertext
        },
        success: function (res) {
          // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          console.log("添加成功")
        }
      })
    }

    //否则就修改那个人的更改的信息

    else{
      db.collection('Information').where({
        _openid: OPEN_ID,
      }).update({
        // data 传入需要局部更新的数据
        data: {
          Name: userName,
          Age: userage,
          Sex:usersex,
          Phone:userphone,
          Sign:usertext
        },
        success: function(res) {
          console.log("修改成功")
        }
      })
    }

  },



  //#endregion



  //#region 页面加载时用数据库获取当前用户的数据

  onLoad: function (options) {
    console.log(OPEN_ID);
    db.collection('Information').where({
      _openid: OPEN_ID,
    })
    .get({
      success: function(res) {
        // res.data 是包含以上定义的两条记录的数组
        console.log(res.data);
        userName=res.data[0].Name;
        usersex=res.data[0].Sex;
        userage=res.data[0].Age;
        userphone=res.data[0].Phone;
        usertext=res.data[0].Sign;
        flag = false;
      }
    })
    
  },

  //#endregion



  //#region 刷新按钮

  refresh:function () {
    this.setData({
      userName: userName,
      usersex:usersex,
      userage:userage,
      userphone:userphone,
      usertext:usertext
    })
  },

//#endregion
  


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