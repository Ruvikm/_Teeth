
Page({
  
  data: {
    objectId: '',
    days: [],//每月的空格+日期格
    signUp: [],
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

    this.calculateEmptyGrids(curr_year, curr_month);
    this.calculateDays(curr_year, curr_month);

    this.setData({
      curr_year: curr_year,
      curr_month: curr_month,
      weeks_ch,
      
    });

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
          console.log('temp=' + i);
        }
        // console.log('istoday: ' + that.data.days[i].isToday);
      }
    }
    
    this.setData({
      days: that.data.days
    });
    
},

  //匹配判断当月那些日子有签到
  // onJudgrSign: function() {
  //   var that = this;
  //   var signs = that.data.signUp;
  //   var daysArr = that.data. days;

  //   for (let i = 0; i< signs.length; i++) {
  //     var current = new Date(signs[i].date.replace())
  //     ...
  //   }
  // }

  // 签到
  onGetSignUp: function() {
    var that = this;
    var Task_User;
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
    //点击后当前日期变色，表示打卡成功
    // for (let i = 0; i < this.data.days.length; i++)
    //   console.log(this.data.days[i].date);
    for (let i = 0; i < this.data.days.length; i++){
      if (this.data.days[i].isToday) {
        this.data.days[i].isSign = true;
      }
      console.log(this.data.days[i].isSign);

    }
    this.setData({
      days:this.data.days
      });
    wx.showToast({
      title: '今日打卡成功', 
    })
  }
})