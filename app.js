//app.js

App({

  globalData:{
      global_openid: '',
      evn: 'ruvik-333',
  },
  onLaunch: function () {
    var that=this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //小程序端初始化
    wx.cloud.init({
      env:'ruvik-333',
    });
    this.getOpenid();
  },
  getOpenid() {
    let that = this;
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        // console.log('openid: ', res.result.openid)
        // console.log('appid: ', res.result.appid)
        var openid = res.result.openid;
        //console.log(openid);
        that.globalData.global_openid=openid;
        console.log( that.globalData.global_openid);
      }
    })
  },
})