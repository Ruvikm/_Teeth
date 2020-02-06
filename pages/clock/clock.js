var intervalT;
var IntervalT;
var context = wx.createCanvasContext('canvass');
var Context = wx.createCanvasContext('Can');
const AudioContext = wx.createInnerAudioContext();
const audioContext = wx.createInnerAudioContext();
var current_choice=999;
var Current_choice=999;
var Flag = 1;
var Flag = 1;

Page({

  /**
   * 页面的初始数据
   */
  data: {
      currentData : 0,
      text:'开始刷牙',
      innerText:120,
      _Text:120,
      _text:'开始刷牙',
      selectShow: false,
      selectArray: [{
        "id": "0",
        "text": "电动牙刷"
      }, {
        "id": "1",
        "text": "普通牙刷"
      }],
      selectArray2: [{
        "id": "1",
        "text": "刷牙歌"
      }, {
        "id": "2",
        "text": "刷牙歌"
      },{
        "id": "3",
        "text": "刷牙歌"
      }],
      // poster: 'http://p1.music.126.net/GlV130UzFe2hEofOpo9k2g==/109951163314358137.jpg?param=130y130',
      // name: '刷牙歌',
      // author: '宝宝巴士',
      // src: 'https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786',

      // poster: 'http://p1.music.126.net/GlV130UzFe2hEofOpo9k2g==/109951163314358137.jpg?param=130y130',
      // name: '刷牙歌',
      // author: '宝宝巴士',
      // src: 'https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786',
  },
    //事件处理函数 点击text
    toast: function() {
      wx.navigateTo({
        url: '../Sign_in/Sign_in'
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
  },
  
  //获取当前滑块的index
  bindchange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;
    if (that.data.currentData === e.target.dataset.current){
        return false;
    }else{

      that.setData({
        currentData: e.target.dataset.current

      })
    }
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (){
  //  第一页
    context.setLineWidth(4);
    context.moveTo(180, 100);
    context.arc(100, 100, 80, 0, -Math.PI * 2 / 120 * 120, true);
    context.setStrokeStyle("#49f");
    context.stroke();
    context.restore();
    context.draw();
  // 第二页
    Context.setLineWidth(4);
    Context.moveTo(180, 100);
    Context.arc(100, 100, 80, 0, -Math.PI * 2 / 120 * 120, true);
    Context.setStrokeStyle("#49f");
    Context.stroke();
    Context.restore();
    Context.draw();
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')

},

  item_change:function(e){
    current_choice=e.detail.text;
  },

  Item_change:function(e){
    Current_choice=e.detail.text;
  },

  item_change2: function (e) {
    current_choice2 = e.detail.text;
  },

  Item_change2: function (e) {
    Current_choice2 = e.detail.text;
  },

  but:function(e){
    // 播放背景音乐
    var s;
    //随机数
    s = Math.floor(Math.random() * 3);//Math.floor(X) =X的整数位，Math.random()的取值范围是：0 <= Math.random() < 1  随机小数
    if(s=0)
    {
      AudioContext.src = "https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786";
      AudioContext.play();
    }
    else if(s=1)
    {
      AudioContext.src = "https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786";
      AudioContext.play();
    }
    else
    {
      AudioContext.src = "https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786";
      AudioContext.play();
    }
    if (current_choice2 == "1") {
      AudioContext.src = "https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786";
      AudioContext.play();
    }
    if (current_choice2 == "2") {
      AudioContext.src = "https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786";
      AudioContext.play();
    }
    if (current_choice2 == "3") {
      AudioContext.src = "https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786";
      AudioContext.play();
    }
    clearInterval(intervalT);//重新清空开始画圆
    this.setData({
      text:'重新开始'
     })
   
    // var flag=getApp().globalData.flag;
    // console.log(flag);
    // if(flag==true)
    // {
    //   return;
    // }
    // getApp().globalData.flag=true;
    // console.log(flag);


    // 使用 wx.createContext 获取绘图上下文 context
    var n;
    var m;
    var x;
    if(current_choice=="电动牙刷")
      {
          n = 120;
          m = 120;
          x = 30;
      }
    if(current_choice=="普通牙刷")
      {
          n = 180;
          m = 180;
          x = 45;
      }   
    this.setData({ "innerText": n });// 倒计时圈中的文字显示
    var _this = this;
    function drawInnerCircle() {    // 绘制固定内圈圆
      context.save();              // save-保存绘图上下文
      context.setLineWidth(1);     // setLineWidth-设置线条宽度；参数-setLineWidth(线条宽度，单位px)
      context.moveTo(180, 100);    // moveTo-把路径移动到画布中的制定点，不创建线条；参数-moveTo(目标位置的x坐标，目标位置的y坐标)
      context.arc(100, 100, 80, 0, 2 * Math.PI, true);  // arc-创建一条弧线；参数-arc(圆心x坐标，圆心y坐标，圆半径，起始弧度，终止弧度，弧度方向是否是逆时针)
      context.stroke();            // stroke-画出当前路径的边框，默认颜色为黑色
      context.restore();           // restore-恢复之前保存的绘图上下文
      context.draw();    // draw-将之前在绘图上下文中的描述(路径，变形，样式)画到canvas中
    }
    function drawOutCircle(n) {    // 绘制倒计时外圈圆
      
      context.save();
      context.setLineWidth(4);
      context.moveTo(180, 100);
      context.arc(100, 100, 80, 0, -Math.PI * 2 / m * n, true);
      context.stroke();
      context.restore();
    }
      intervalT = setInterval(function () {
      context.setStrokeStyle("#49f");    // setStrokeStyle-设置描边颜色；参数-setStrokeStyle(描边的颜色，默认颜色为black)
      if (n >= 0) {
        _this.setData({ "innerText": n });
        drawOutCircle(n);
        n -= 1;
        if(n%x==0)
        {
          const innerAudioContext = wx.createInnerAudioContext();//新建一个createInnerAudioContext();
          innerAudioContext.autoplay = true;//音频自动播放设置
          innerAudioContext.src = 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11827.mp3';//链接到音频的地址
          innerAudioContext.onPlay(() => {});//播放音效
          innerAudioContext.onError((res) => {//打印错误
          console.log(res.errMsg);//错误信息
          console.log(res.errCode);//错误码
})
        }
      } else {
        clearInterval(intervalT);     // 倒计时一次停止
        context.clearRect(0,0,200,200);
      }
      drawInnerCircle();
    }, 1000);
  },
  But:function(e){
    // 播放背景音乐
    var s2;
    //随机数
    s2 = Math.floor(Math.random() * 3);//Math.floor(X) =X的整数位，Math.random()的取值范围是：0 <= Math.random() < 1  随机小数
    if (s2 = 0) {
      AudioContext.src = "https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786";
      AudioContext.play();
    }
    else if (s2 = 1) {
      AudioContext.src = "https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786";
      AudioContext.play();
    }
    else {
      AudioContext.src = "https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786";
      AudioContext.play();
    }
    if (Current_choice2 == "1") {
      AudioContext.src = "https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786";
      AudioContext.play();
    }
    if (Current_choice2 == "2") {
      AudioContext.src = "https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786";
      AudioContext.play();
    }
    if (Current_choice2 == "3") {
      AudioContext.src = "https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786";
      AudioContext.play();
    }
    clearInterval(IntervalT);//重新清空开始画圆
    this.setData({
      _text:'重新开始'
     })
   
    // var flag=getApp().globalData.flag;
    // console.log(flag);
    // if(flag==true)
    // {
    //   return;
    // }
    // getApp().globalData.flag=true;
    // console.log(flag);


    // 使用 wx.createContext 获取绘图上下文 context
    
    var n;// 倒计时圈中的文字显示
    var m;
    var x;
    if(Current_choice=="电动牙刷")
      {
          n = 120;
          m = 120;
          x = 30;
      }
    if(Current_choice=="普通牙刷")
      {
          n = 180;
          m = 180;
          x = 45;
      }    
    this.setData({ "_Text": n });
    var _this = this;
    function drawInnerCircle() {    // 绘制固定内圈圆
      Context.save();              // save-保存绘图上下文
      Context.setLineWidth(1);     // setLineWidth-设置线条宽度；参数-setLineWidth(线条宽度，单位px)
      Context.moveTo(180, 100);    // moveTo-把路径移动到画布中的制定点，不创建线条；参数-moveTo(目标位置的x坐标，目标位置的y坐标)
      Context.arc(100, 100, 80, 0, 2 * Math.PI, true);  // arc-创建一条弧线；参数-arc(圆心x坐标，圆心y坐标，圆半径，起始弧度，终止弧度，弧度方向是否是逆时针)
      Context.stroke();            // stroke-画出当前路径的边框，默认颜色为黑色
      Context.restore();           // restore-恢复之前保存的绘图上下文
      Context.draw();    // draw-将之前在绘图上下文中的描述(路径，变形，样式)画到canvas中
    }
    function drawOutCircle(n) {    // 绘制倒计时外圈圆
      
      Context.save();
      Context.setLineWidth(4)
      Context.moveTo(180, 100)
      Context.arc(100, 100, 80, 0, -Math.PI * 2 / m * n, true)
      Context.stroke()
      Context.restore();
    }
      IntervalT = setInterval(function () {
      Context.setStrokeStyle("#49f");    // setStrokeStyle-设置描边颜色；参数-setStrokeStyle(描边的颜色，默认颜色为black)
      if (n >= 0) {
        _this.setData({ "_Text": n });
        drawOutCircle(n);
        n -= 1;
        if(n%x==0)
        {
          const innerAudioContext = wx.createInnerAudioContext();//新建一个createInnerAudioContext();
          innerAudioContext.autoplay = true;//音频自动播放设置
          innerAudioContext.src = "http://downsc.chinaz.net/Files/DownLoad/sound1/201706/8858.mp3";//链接到音频的地址
          innerAudioContext.onPlay(() => { });//播放音效
          innerAudioContext.onError((res) => {//打印错误
            console.log(res.errMsg);//错误信息
            console.log(res.errCode);//错误码
          })
        }
      } else {
        clearInterval(IntervalT);     // 倒计时一次停止
      }
      drawInnerCircle();
    }, 1000);
  },
begin:function(){
  if(AudioContext.paused==true)
    AudioContext.play();
  else
    AudioContext.pause();
},

Begin:function(){
  if(audioContext.paused==true)
    audioContext.play();
  else
    audioContext.pause();
}

})
