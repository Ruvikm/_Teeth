// pages/movie/movie.js

Page({

  
  //#region 页面初始数据
  data: {
    videoPlay: null,
    dataList: [],
    fullScreen:false
  },
  //#endregion

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
    wx.hideShareMenu();
  },


  //#region  播放视频
  videoPlay: function (e) {
    var _index = e.currentTarget.dataset.id
    this.setData({
        _index: _index
    })
    //停止正在播放的视频
    var videoContextPrev = wx.createVideoContext(_index + "")
    videoContextPrev.stop();

    setTimeout(function () {
        //将点击视频进行播放
        var videoContext = wx.createVideoContext(_index + "")
        videoContext.play();
    }, 500)
  },

  play(e) {
    //执行全屏方法  
    var videoContext = wx.createVideoContext('myvideo', this);
    videoContext.requestFullScreen();
    this.setData({
      fullScreen: true
    })
    
  },
  /**关闭视屏 */
  closeVideo() {
    //执行退出全屏方法
    var videoContext = wx.createVideoContext('myvideo', this);
    videoContext.exitFullScreen();
    this.setData({
      fullScreen: false
    })
  },
  /**视屏进入、退出全屏 */
  fullScreen(e) {
    var isFull = e.detail.fullScreen;
    //视屏全屏时显示加载video，非全屏时，不显示加载video
    this.setData({
      fullScreen: isFull
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  getData: function () {
    this.setData({
        dataList: [
            { "id": 6193654, "title": "1.有效刷牙", "content": "https://7275-ruvik-333-1301153827.tcb.qcloud.la/001%E6%9C%89%E6%95%88%E5%88%B7%E7%89%99.mp4?sign=34f7678f33a4099fdd367a8088e47ec3&t=1580548878", "cover": "https://wx4.sinaimg.cn/mw690/007RARhYly1gbawhhqqd3j313y0m6nhg.jpg" },
            { "id": 6193729, "title": "2.牙线的使用", "content": "https://7275-ruvik-333-1301153827.tcb.qcloud.la/002%E7%89%99%E7%BA%BF%E7%9A%84%E4%BD%BF%E7%94%A8.mp4?sign=5f83ad1307dd76b511718c7fe957c46e&t=1580548920", "cover": "https://wx1.sinaimg.cn/mw690/007RARhYly1gbawhhpjnaj313w0max0k.jpg" },
            { "id": 6193504, "title": "3.牙间刷的使用", "content": "https://7275-ruvik-333-1301153827.tcb.qcloud.la/003%E7%89%99%E9%97%B4%E5%88%B7%E7%9A%84%E4%BD%BF%E7%94%A8.mp4?sign=9df378cfbd4daaa8faf541f34849915e&t=1580548943","cover": "https://wx3.sinaimg.cn/mw690/007RARhYly1gbawhhri5cj313t0m7dzo.jpg" }
        ]
    });

},
//#endregion


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