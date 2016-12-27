/** README
 * 此模块封装网站常用工具类方法
 * 以Tools的Prototype对象分类
 */
; (function () {
  function Tools() {

  }
  Tools.prototype = {
    date: {
      getDateShort: function () {
        var shorts = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
        var date = new Date();
        var month = date.getMonth();
        return shorts[month - 1]
      },
      getCurrentMonthFirst: function () {
        var date = new Date();
        date.setDate(1);
        return date.toString().split(' ');
      },
      getCurrentMonthLast: function () {
        var date = new Date();
        var currentMonth = date.getMonth();
        var nextMonth = ++currentMonth;
        var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
        var oneDay = 1000 * 60 * 60 * 24;
        var lastDay = new Date(nextMonthFirstDay - oneDay);
        return lastDay.toString().split(' ');
      },
      during: function (type) {
        //2016.12.1到2016.12.31
        var stDate = this.getCurrentMonthFirst();
        var endDate = this.getCurrentMonthLast();
        console.log(stDate);
        var month = (new Date()).getMonth() + 1;
        var startZh = stDate[3] + '.' + month + '.' + stDate[2];
        var endZh = endDate[3] + '.' + month + '.' + endDate[2];
        var duringEn = stDate[1] + ' 1st To ' + stDate[1] + ' ' + endDate[2] + 'st';
        //Dec 1st to Dec 31st
        if (type == 'zh') {
          return startZh + ' 到 ' + endZh
        }
        else if (type == 'en') {
          return duringEn;
        }

      }
    }
  }
  module.exports = new Tools();
} ())