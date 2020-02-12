//app.js
App({

  globalData:{
      global_openid: '',
      evn: 'ruvik-333',
  },

  onLaunch: function () {
    var that=this;
    // 展示本地存储能力
    this.globalData = {
      
    }
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //小程序端初始化
    wx.cloud.init({
      env:'ruvik-333',
    });
    // 登录
    wx.login({
      //获取code
      success: function(res) {
         var code = res.code //返回code
         wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code='+ code +'&grant_type=authorization_code',
          data: {
            appid:'wxcfcae2873cc82924',  
            secret:'a29bc7c43657e6ecddf66518ac47aa3f',  
            js_code:res.code,  
          },
          success: function(res) {
            var Openid = res.data.openid; //返回openid
            //console.log(Openid)
            that.globalData.global_openid=Openid;
            console.log(that.globalData.global_openid);
          }
        })
      }
    })
  },
  
})