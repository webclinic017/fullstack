;(function () {

    var countryList = [
        {
            key: '中国',
            value: 'CNY',
            select: false
        },
        {
            key: '美国',
            value: 'USD',
            select: false
        },
        {
            key: '加拿大',
            value: 'CAD',
            select: false
        },
        {
            key: '英国',
            value: 'GBP',
            select: false
        },
        {
            key: '澳大利亚',
            value: 'AUD',
            select: false
        },
        {
            key: '瑞士',
            value: 'CHF',
            select: false
        },
        {
            key: '日本',
            value: 'JPY',
            select: false
        },
        {
            key: '欧元区',
            value: 'EUR',
            select: false
        }
    ];
    var starList = [
        {
            stars: 1,
            select: false
        },
        {
            stars: 2,
            select: false
        },
        {
            stars: 3,
            select: false
        }
    ];
	var weekList = ['日','一','二','三','四','五','六'];
    var weekLayerList = ['周日','周一','周二','周三','周四','周五','周六'];
    var monthList = ['一月','二月','三月','四月','五月','六月','七月', '八月','九月','十月','十一月','十二月'];
	var dateList = [];
    var currentMonth = '';
	var nowDate = {};
    var currentSelDate = {};
    var targetMonth = {};
    var newsList = [];
    var newsListTemp = [];
    var dateOneMonthList = [];
    
	var oDate = new Date();
	nowDate.year = oDate.getFullYear();
	nowDate.month = oDate.getMonth();
	nowDate.date = oDate.getDate();
	nowDate.day = oDate.getDay();

	setDateList(nowDate);

    $(document).on('tap', '.date_list_box .date', function () {
        var target = dateList[$(this).attr("data-order")];
        // console.log(target);
        if (!$(this).hasClass('active')) {
            setDateList(target);
            return false;
        }
    });

    $(document).on('tap', '.calendar_layer', function (e) {
        
        $(".calendar_layer").css("left", "100%");
        return false;
    });
    $(document).on('tap', '.select_layer_box, .date_layer_box', function (e) {
        
        return false;
    });
    $(document).on('tap', '.select_date, .select_star', function () {
        $(".calendar_layer").css("left", "0");

        if ($(this).attr("data-type") == 'star') {
            insertTemplate($(".calendar_layer"), 'template_calendar_star_layer', {
                countryList: countryList,
                starList: starList
            });
        }
        if ($(this).attr("data-type") == 'date') {
            setCalendarList(currentSelDate);
        }
        return false;
    });

    $(document).on('tap', '.select_layer_box .sele_country', function () {
        var order = $(this).attr("data-order");
        if (countryList[order].select) {
            countryList[order].select = false;
            $(this).removeClass('active');
        } else {
            countryList[order].select = true;
            $(this).addClass('active');
        }
        return false;
    });
    $(document).on('tap', '.select_layer_box .sele_star', function () {
        var order = $(this).attr("data-order");
        if (starList[order].select) {
            starList[order].select = false;
            $(this).removeClass('active');
        } else {
            starList[order].select = true;
            $(this).addClass('active');
        }
        return false;
    });
    $(document).on('tap', '.select_layer_box .select_layer_btn_box .btn-success', function () {
        dealNewsInfo();
        $(".calendar_layer").css("left", "100%");
        return false;
    });
    $(document).on('tap', '.select_layer_box .select_layer_btn_box .btn-init', function () {
        $.each(countryList, function (index, value) {
            value.select = false;
        });
        $.each(starList, function (index, value) {
            value.select = false;
        });
        insertTemplate($(".calendar_layer"), 'template_calendar_star_layer', {
            countryList: countryList,
            starList: starList
        });
        // dealNewsInfo();
        // $(".calendar_layer").css("left", "100%");
        return false;
    });
    $(document).on('tap', '.date_layer_box .fa-chevron-left', function (e) {
        
        currentMonth.month--;
        setCalendarList(currentMonth);
        return false;
    });
    $(document).on('tap', '.date_layer_box .fa-chevron-right', function (e) {
        
        currentMonth.month++;
        setCalendarList(currentMonth);
        return false;
    });
    $(document).on('tap', '.date_layer_btn_box .btn', function (e) {
        
        setDateList(nowDate);
        $(".calendar_layer").css("left", "100%");
        return false;
    });
    $(document).on('tap', '.date_layer_box .date_item', function (e) {
        var order = $(this).attr("data-order");
        setDateList(dateOneMonthList[order]);
        $(".calendar_layer").css("left", "100%");
        return false;
    });

    $(document).on('tap', '.news_list_box .news_item', function () {
        var key = $(this).attr("data-key");
        var action_address = window.location.origin + "/bd/calendar/" + key;
        // console.info(key, action_address);
        callNative({
            type: "openUrl",
            url: action_address
        });
        return false;
    });

    function setCalendarList (target) {
        dateOneMonthList = [];

        var currentMonthStart = getWeekDate(target.year,target.month,1);
        var currentMonthEnd = getWeekDate(target.year,target.month+1,0);
        // console.log(currentMonthStart, currentMonthEnd);
        currentMonth = getWeekDate(target.year,target.month,target.date);

        //获取当月列表
        for (var i=1; i<=currentMonthEnd.date; i++) {
            var single = getWeekDate(target.year, target.month, i);
            single.dateStr = toDou(single.date);

            if ((single.year == currentSelDate.year) && (single.month == currentSelDate.month) && (single.date == currentSelDate.date)) {
                single.select = true;
            }
            dateOneMonthList.push(single);
        }
        //获取上下俩月部分列表
        for (var i=currentMonthStart.day; i>0;i--) {
            var single = getWeekDate(currentMonthStart.year, currentMonthStart.month, i-currentMonthStart.day);
            single.prevOrNext = true;
            single.dateStr = toDou(single.date);
            dateOneMonthList.unshift(single);
        }
        for (var i=1; i<7-currentMonthEnd.day;i++) {
            var single = getWeekDate(currentMonthEnd.year, currentMonthEnd.month, currentMonthEnd.date+i);
            single.prevOrNext = true;
            single.dateStr = toDou(single.date);
            dateOneMonthList.push(single);
        }

        insertTemplate($(".calendar_layer"), 'template_calendar_date_layer', {
            weekList: weekLayerList,
            dateOneMonthList: dateOneMonthList
        });
        $(".calendar_layer .date_layer_box .date_layer_title .month").html(monthList[currentMonth.month]+' '+currentMonth.year);
    }

    function getInfo (target) {
        var start = new Date(target.year,target.month,target.date,0,0,0).getTime()/1000;
        var end = new Date(target.year,target.month,target.date,23,59,59).getTime()/1000;
        // console.log(start, end);

        $.get('https://api-prod.wallstreetcn.com/apiv1/finfo/calendars', {
            start: start,
            end: end
        }).then(function (data) {
            // console.log(data);
            newsListTemp = data.data.items;

            $.each(newsListTemp, function (index, value) {
                value.tw_time = getTwTime(value.timestamp);
            });

            dealNewsInfo();
        });   
    }

    function dealNewsInfo () {
        var country = [], star = [];
        newsList = [];

        $.each(countryList, function (index, value) {
            if (value.select) {
                country.push(value.value);
            }
        });
        $.each(starList, function (index, value) {
            if (value.select) {
                star.push(value.stars);
            }
        });

        $.each(newsListTemp, function (index, value) {
            if (country.length && star.length) {
                if ((country.join(',').indexOf(value.currency) !== -1) && (star.join(',').indexOf(value.importance) !== -1)) {
                    newsList.push(value);
                }
            } else if (country.length) {
                if (country.join(',').indexOf(value.currency) !== -1) {
                    newsList.push(value);
                }
            } else if (star.length) {
                if (star.join(',').indexOf(value.importance) !== -1) {
                    newsList.push(value);
                }
            } else {
                newsList = newsListTemp;
            }
        });

        insertTemplate($(".m_calendar_list_box .news_list_box"), 'template_calendar_list', {
            newsList: newsList
        });
    }

    function setDateList (target) {
        if (!target) return;

        currentMonth = target.year+'年'+toDou(target.month+1)+'月';

        dateList = [];
        var startDate = target.date - target.day;

        for (var i=0; i<7; i++) {
            var single = getWeekDate(target.year, target.month, startDate+i);
            single.dateStr = toDou(single.date);
            if (i == target.day) {
            	single.select = true;
                currentSelDate = single;
            }

            if ((single.year == nowDate.year) && (single.month == nowDate.month) && (single.date == nowDate.date)) {
                single.today = true;
            }

            dateList.push(single);
        }

        $('.m_calendar_list_box .date_list_total').html(currentMonth);
        insertTemplate($(".m_calendar_list_box .date_list"), 'template_calendar_date_list', {
        	dateList: dateList,
        	weekList: weekList
        });

        getInfo(target);
    }

    function getWeekDate(year,month,date) {
        var weekDate = new Date(year,month,date);
        
        return {
            year: weekDate.getFullYear(),
            month: weekDate.getMonth(),
            date: weekDate.getDate(),
            day: weekDate.getDay()
        };
    }

    function insertTemplate (oBox, tempId, data) {
        
        //使用template模版
        var html=baidu.template(tempId, data);
        //渲染
        oBox.html(html);
    }

    function getTwTime (timestamp) {
        var oD = new Date(timestamp*1000);

        return toDou(oD.getHours())+':'+toDou(oD.getMinutes());
    } 

    function toDou (num) {
        return num < 10 ? '0'+num : ''+num;
    }
})();