;(function () {
    var key = $(".m_calendar_box").attr("data-key");
    var details = {};
    var options = {
        chart: {
            type: 'spline',
            backgroundColor: 'transparent',
            height: 240
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            categories: [],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            visible: true,
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            split: true,
            valueSuffix: ''
        },
        series: []
    };

    $.get('https://api-prod.wallstreetcn.com/apiv1/finfo/calendars/keys?keys='+key).then(function (data) {
        // console.log(data);
        details.digest = data.data.items[0];
        details.digest.tw_time = getTwTime(details.digest.timestamp);

        getDetails();
        getChartsData();
    });


    function getDetails () {
        $.get('https://api-prod.wallstreetcn.com/apiv1/finfo/ticker/detail?ticker='+details.digest.ticker).then(function (data) {
            // console.log(data);
            details.detail = data.data;
            details.detail.next_fab_time_transfer = getDetailTime(details.detail.next_fab_time);
        });
    }

    function getChartsData () {
        var t = details.digest.ticker.replace(' ', '+');
        $.get('https://api-prod.wallstreetcn.com/apiv1/finfo/ticker/calendar/history?ticker='+t).then(function (data) {
            // console.log(data);
            details.items = data.data.items;
            dealCahrtsDetails();
        });
    }







    // $.get('https://api-sit.wallstreetcn.com/apiv1/finfo/'+key+'/detail').then(function (data) {
    //     // console.log(data);
    //     if (data.code !== 20000) {
    //         $(".m_calendar_box .m_calendar_msg").html(data.message);
    //     } else {
    //     	details = data.data;

    //     	data.data.detail.next_fab_time_transfer = getDetailTime(data.data.detail.next_fab_time);
    //     	data.data.digest.tw_time = getTwTime(data.data.digest.timestamp);
    //     	dealCahrtsDetails();
    //     }
    // });

    function dealCahrtsDetails () {
    	var xOptions = [];
        var dataOptions = [
            {
                name: '预测值',
                data: []
            },
            {
                name: '公布值',
                data: []
            }
        ];
        $.each(details.items, function (index, value) {
            xOptions.unshift(value.human_date.slice(0,10));
            var o = value.forecast ? parseFloat(value.forecast) : null;
            var t = value.actual ? parseFloat(value.actual) : null;
            dataOptions[0].data.unshift(o);
            dataOptions[1].data.unshift(t);
        });

    	options.xAxis.categories = xOptions;
        options.series = dataOptions;

        insertTemplate($('.m_calendar_box'), 'template_calendar_list', {
        	details: details
        });

        $(".m_calendar_box .m_calendar_charts").highcharts(options);
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

    function getDetailTime (timestamp) {
        if (!timestamp) return '';
        var oD = new Date(timestamp*1000);

        return toDou(oD.getMonth()+1) + '-' + toDou(oD.getDate()) + ' ' + toDou(oD.getHours())+':'+toDou(oD.getMinutes());
    }

    function toDou (num) {
        return num < 10 ? '0'+num : ''+num;
    }
})();