
const app = getApp();

Page({
  
  data: {
    objectId: '',
    days: [],//每月的空格+日期格
    signUp: [],//签到的日期
    queryResult: ' ',
    curr_year: ' ',
    curr_month:  ' ',
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const date = new Date();
    const curr_year = date.getFullYear();
    const curr_month = date.getMonth() + 1;
    const weeks_ch = ["日", "一", "二", "三", "四", "五", "六"];
    const now_year = date.getFullYear();
    const now_month = date.getMonth() + 1;

    this.calculateEmptyGrids(curr_year, curr_month);
    this.calculateDays(curr_year, curr_month);

    this.setData({
      curr_year: curr_year,
      curr_month: curr_month,
      weeks_ch,
      now_year,
      now_month
      
    });

    if (app.globalData.openid){
      this.setData({
        openid: app.globalData.openid
      })
      console.log('【获取openid成功】' + app.globalData.openid)
    }else {
      console.log('【获取openid失败】')
    }

   // console.log('year: ' + curr_year + ' month: ' + curr_month);
  },

  //获取当月的天数
  getThisMonthDays: function(year, month) {
    var totalDays = new Date(year, month, 0).getDate();
    return totalDays;
  },

  //获取当月第一天是星期几
  getFirstDayofWeek: function(year, month) {
    var firstDate = new Date(Date.UTC(year, month - 1, 1)).getDay();
    return firstDate;
  },

  //计算当月1号前面的空格数，把它填在days数组前面
  calculateEmptyGrids: function(year, month) {
      var that = this;
      //计算时每月都要清零
      that.setData({
        days:[]
      });
      const firstDayofWeek =  this.getFirstDayofWeek(year, month);

      //若第一天不是周日
      if (firstDayofWeek > 0) {
        for (let i = 0; i < firstDayofWeek; i++) {
          var obj = {
            date: null,
            isSign: false,
            isToday: false
          }
          that.data.days.push(obj);
        }
        this.setData({
          days: that.data.days
        }); 

      } else {//清空
        this.setData({
          days:[]
        });
      }
  },

  //计算当月的天数占的格子，并放入days数组中
  calculateDays: function(year, month){
    var that = this;
    const thisMonthDays = this.getThisMonthDays(year, month);

    const today = new Date();
    let this_year = today.getFullYear();//年
    let this_month = today.getMonth() + 1;//月
    let date = today.getDate();//日
    //console.log('thisMonthDays: ' + thisMonthDays);
    for (let i = 1; i <= thisMonthDays; i++) {
      var obj = {
        date: i,
        isSign: false,
        isToday: false
      };
     // console.log('obj.date: ' + obj.date);
      that.data.days.push(obj);
    }
    this.setData({
      days: that.data.days
    });

    if (year == this_year && month == this_month){
      for (let i = 0; i < that.data.days.length; i++) {
        if (that.data.days[i].date == date) {
          that.data.days[i].isToday = true;
          //console.log('temp=' + i);
        }
        // console.log('istoday: ' + that.data.days[i].isToday);
      }
    }
    
    this.setData({
      days: that.data.days
    });

    this.onGetSignUp(); // 获取当前用户签到数组signUp[]
    
},

  // 匹配判断当月哪些日子有签到
  onJudgeSign: function() {
    var that = this;
    var signs = that.data.signUp; //所有打卡了的日期[]
    var daysArr = that.data.days; //当月的日子[]

    for (let i = 0; i< signs.length; i++) {
      var current = signs[i];
      var sign_year = current.getFullYear();
      var sign_month = current.getMonth()+1;
      var sign_day = current.getDate();

      for (let j = 0; j < daysArr.length; j++){
        if (sign_year == this.data.curr_year && sign_month == this.data.curr_month){
          //console.log(sign_year, this.data.curr_year, sign_month, this.data.curr_month);
          //console.log('daysArr: ' + daysArr[j].date);
          if (daysArr[j].date == sign_day){
            daysArr[j].isSign = true;
            console.log('daysArr: ' + j , daysArr[j].isSign);//正确 7 10 16 8 14 4
           }
          //console.log('daysArr.issign: ' + daysArr[j].isSign);
        }
      }
      that.setData({
        days: daysArr
      })
     
    }
  },

  // 获取当前用户签到数组signUp[]
  onGetSignUp: function() {
    var that = this;
    var clock_user;

    // const db=wx.cloud.database({env: 'test-dw7nb'});
    const db = wx.cloud.database({ env: 'ruvik-333' });
    db.collection('clock').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        
        for(let i = 0; i< res.data.length; i++){
          // console.log(this.data.signUp);
          var obj = res.data[i].signUp;
          that.data.signUp.push(obj);
        }
        
        that.setData({
          signUp: that.data.signUp
        })
        // for (let i = 0; i < res.data.length; i++)
        //   console.log('signUp arry22: ' + this.data.signUp[i]);

        //获取成功后判断签到情况
        this.onJudgeSign();

    },
      error: error => {
        console.log('【数组signUp查询失败】' + error)
      }
    })

  },

  //控制年月，上、下月
  handleCalendar: function(e) {
    const handle = e.currentTarget.dataset.handle;
    const curr_year = this.data.curr_year;
    const curr_month = this.data.curr_month;
    console.log('current year, Month: ' + curr_year + ',' + curr_month);
    
    if (handle === "prev" ) {
      let newMonth = curr_month - 1;
      let newYear = curr_year;

      if (newMonth <= 0) {
        newMonth = 12;
        newYear = curr_year - 1;
      }
      this.calculateEmptyGrids(newYear, newMonth);
      this.calculateDays(newYear, newMonth);

      this.setData({
        curr_year: newYear,
        curr_month: newMonth
      });
      console.log('new year, month: ' + newYear + ',' + newMonth);

    } else {
      let newMonth = curr_month + 1;
      let newYear = curr_year;

      if (newMonth > 12) {
        newMonth = 1;
        newYear = curr_year + 1;
      }
      this.calculateEmptyGrids(newYear, newMonth);
      this.calculateDays(newYear, newMonth);

      this.setData({
        curr_year: newYear,
        curr_month: newMonth
      });
      console.log('new year, month: ' + newYear + ',' + newMonth);

    }
   
  },

  //打卡按钮
  bindclockin: function() {
    for (let i = 0; i < this.data.days.length; i++) {
      if (this.data.days[i].isToday && this.data.days[i].isSign ===false) {//如果是今天且未打卡
        this.data.days[i].isSign = true;
        this.setData({
          days: this.data.days
        });
        this.onAdd();
        wx.showToast({
          title: '今日打卡成功'
        });
      } else{
        wx.showToast({
          title: '今日已打卡'
        });
      }

    }
    // console.log(this.data.days[i].isSign);
  },

  //打卡成功，添加打卡日期
  onAdd: function (){
    const db = wx.cloud.database({ env: 'ruvik-333' });
    // const db = wx.cloud.database({ env: 'test-dw7nb' });
    db.collection('clock').add({
      data: {
        signUp: new Date()
      },

    success: res=> {
      this.setData({
        signUp
      })
      console.log('【新增记录成功】' + res_id)
    },

    fail: error => {
      console.log('【新建记录失败】' + error)
    }
    })
    this.onGetSignUp();
  }

 


})