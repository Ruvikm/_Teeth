// pages/Sign_in/Sign_in.js
var util = require('../../utils/util.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectId: '',
    days: [],//每月的空格+日期格
    signUp: [],
    curr_year: ' ',
    curr_month:  ' ',
    thisYear: ' ',
    thisMonth: ' ',
    thisDay: ' '

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.setData({objectId: options.objectId});

    const date = new Date();
    const curr_year = date.getFullYear();
    const curr_month = date.getMonth() + 1;
    const weeks_ch = ["日", "一", "二", "三", "四", "五", "六"];
    const thisYear = date.getFullYear();//年
    const thisMonth = date.getMonth() + 1;//月
    const thisDay = date.getDate();//日
    
    //let day = today.getDay();//周
    console.log(thisYear, thisMonth, thisDay);


    this.calculateEmptyGrids(curr_year, curr_month);
    this.calculateDays(curr_year, curr_month);
    this.getToday();
   // this.onGetSignUp();
    this.setData({
      curr_year: curr_year,
      curr_month: curr_month,
      weeks_ch,
      thisYear,
      thisMonth,
      thisDay

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
            isSign: false
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
    //console.log('thisMonthDays: ' + thisMonthDays);
    for (let i = 1; i <= thisMonthDays; i++) {
      var obj = {
        date: i,
        isSign: false
      };
     // console.log('obj.date: ' + obj.date);
      that.data.days.push(obj);
    }
    this.setData({
      days: that.data.days
    });
    //console.log('days: ' + this.data.days);
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

  //获取今天并标记
  getToday: function() {
    const today = new Date();

    let year = today.getFullYear();//年
    let month = today.getMonth() + 1;//月
    let date = today.getDate();//日
    let day = today.getDay();//周

    console.log('today: ' + year + '年' + month + '月' + date + '日，第' + day + '周');
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
   
  }
})