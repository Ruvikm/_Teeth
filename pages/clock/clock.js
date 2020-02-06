
//#region 乱七八糟的全局变量

var intervalT;
var IntervalT;
var context = wx.createCanvasContext('canvass');
var Context = wx.createCanvasContext('Can');
const AudioContext = wx.createInnerAudioContext();
const audioContext = wx.createInnerAudioContext();
var current_choice=999;
var Current_choice=999;
var current_choice2 = 999;
var Current_choice2 = 999;
var src_child=["https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E5%88%B7%E7%89%99%E6%AD%8C.mp3?sign=44867cf32870ca6575456c6340d9bf05&t=1580609786","https://7275-ruvik-333-1301153827.tcb.qcloud.la/Crazy%20Bucket%2C%E6%B5%AE%E4%BA%91%E5%BF%83%E4%B8%B6%2Cwarma%20-%20%E6%B8%A9%E8%BD%AF%E5%AE%87%E5%AE%99.mp3?sign=5284de95b9865504fcd7a96e296d6260&t=1580980709","https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E7%88%B1%E4%B8%8D%E4%BC%9A%E7%BB%9D%E8%BF%B9.mp3?sign=a531c334061d64c4c47638e00d4b6ced&t=1580980727"];
var src_man=["https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E6%B5%85%E9%87%8E%E9%9A%BC%E4%BA%BA%20-%20%E3%81%99%E3%81%90%E3%81%9D%E3%81%B0%E3%81%AE%E5%BD%BC%E6%96%B9.mp3?sign=9d985cb5cb735998c73882b5f873f3a6&t=1580985681","https://7275-ruvik-333-1301153827.tcb.qcloud.la/%E8%8B%8D%E5%B0%8F%E5%A4%A9%2C%E9%99%88%E6%99%A8%20-%20%E6%84%9B%E3%81%AB%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E3%81%BE%E3%81%A0%E3%81%82%E3%82%8B%E3%81%8B%E3%81%84%EF%BC%88Cover%EF%BC%9ARADWIMPS%EF%BC%89.mp3?sign=1ef0eb66c27d90b02ec1f6841bc6e91e&t=1580982357","https://7275-ruvik-333-1301153827.tcb.qcloud.la/MoreanP%20-%20Under%C2%A0The%C2%A0Welkin.mp3?sign=5b3db9314e9239368de59dc35dd7ede0&t=1580982372"];
var flag=true;
var Flag=true;
var current_location;
//判断是否选择了牙刷类型的标志位
var type_flag=false;
var Type_flag=false;

//#endregion

Page({

  //#region 页面初始数据
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
  },
//#endregion


  //#region 跳页函数
    toast: function() {
      wx.navigateTo({
        url: '../Sign_in/Sign_in'
      })
    },
    //#endregion


  //#region 分页滑块实现
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
//#endregion


  //#region 页面初始化函数
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
//#endregion


  //#region 获取当前选择的牙刷的类型
  item_change:function(e){
    current_choice=e.detail.text;
    type_flag=true;
  },

  Item_change:function(e){
    Current_choice=e.detail.text;
    Type_flag=true;
  },
//#endregion


  //#region 播放音乐函数
  playmusic:function() {
    var s;
    s = Math.floor(Math.random() * 3);//Math.floor(X) =X的整数位，Math.random()的取值范围是：0 <= Math.random() < 1  随机小数
    current_location=this.data.currentData;
    if(current_location==0)
    {
      AudioContext.stop();
      AudioContext.src=src_child[s];
      AudioContext.play();
    }
    else{
      audioContext.stop();
      audioContext.src=src_man[s];
      audioContext.play();
    }
  },
//#endregion


  //#region 点击刷牙开始计时和播放背景音乐
  but:function(e){
    

    var n,m,x;
    if(current_choice=="电动牙刷")
      {
          n = 120;
          m = 120;
          x = 30;
      }
    else if(current_choice=="普通牙刷")
      {
          n = 180;
          m = 180;
          x = 45;
      }
    else{
      wx.showModal({
        title: '温馨提示',
        content: '请选择牙刷类型',
        showCancel:false,
        success: function (res) {
            if (res.confirm) {
                console.log('用户点击确定')
            }
        }
    })
    }
    if(type_flag)
    {
      // 播放背景音乐
      if(flag)
      this.playmusic();
      flag=false;

      clearInterval(intervalT);//重新清空开始画圆
      this.setData({
        text:'重新开始'
      });

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
    }
  },

  But:function(e){
    
    var n,m,x;// 倒计时圈中的文字显示
    if(Current_choice=="电动牙刷")
      {
          n = 120;
          m = 120;
          x = 30;
      }
    else if(Current_choice=="普通牙刷")
      {
          n = 180;
          m = 180;
          x = 45;
      }
    else{
      wx.showModal({
        title: '温馨提示',
        content: '请选择牙刷类型',
        showCancel:false,
        success: function (res) {
            if (res.confirm) {
                console.log('用户点击确定')
            }
        }
    })
    }
    if(Type_flag)
    {
      // 播放背景音乐
      if(Flag)
        this.playmusic();
      Flag=false;

      clearInterval(IntervalT);//重新清空开始画圆
      this.setData({
        _text:'重新开始'
      })

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
    }
  },

//#endregion


  //#region 静音按钮
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
},
//#endregion


  //#region 切换音乐按钮
  next_song:function() {
    this.playmusic();
  },
  Next_song:function() {
    this.playmusic();
  }
  //#endregion

})
