$(document).ready(function () {
    var $payList = $(".m_deposit_pay");
    // var $payBtn = $("#m_deposit_test a");
    var order_no, real_id;

    var search = location.search;
    //使用baidu.template命名空间
    var bt=baidu.template;
    var banksInfoLst = {
        bankList: [
            {
                bank_id: 'ICBC',
                bank_name: '工商银行',
                select: platform === 'pc' ? true : false
            },
            {
                bank_id: 'ABC',
                bank_name: '农业银行',
                select: platform === 'pc' ? true : false
            },
            {
                bank_id: 'BOC',
                bank_name: '中国银行',
                select: platform === 'pc' ? true : false
            },
            {
                bank_id: 'CCB',
                bank_name: '建设银行',
                select: true
            },
            {
                bank_id: 'BOCM',
                bank_name: '交通银行',
                select: platform === 'pc' ? true : false
            },
            {
                bank_id: 'CMB',
                bank_name: '招商银行',
                select: true
            },
            {
                bank_id: 'CITIC',
                bank_name: '中信银行',
                select: platform === 'pc' ? true : false
            },
            {
                bank_id: 'CMBC',
                bank_name: '民生银行',
                select: platform === 'pc' ? true : false
            },
            {
                bank_id: 'CEB',
                bank_name: '光大银行',
                select: platform === 'pc' ? true : false
            },
            {
                bank_id: 'PABC',
                bank_name: '平安银行',
                select: platform === 'pc' ? true : false
            },
            {
                bank_id: 'SPDB',
                bank_name: '上海浦东发展银行',
                select: platform === 'pc' ? true : false
            },
            {
                bank_id: 'PSBC',
                bank_name: '中国邮政储蓄银行',
                select: platform === 'pc' ? true : false
            },
            {
                bank_id: 'HXB',
                bank_name: '华夏银行',
                select: platform === 'pc' ? true : false
            },
            {
                bank_id: 'CIB',
                bank_name: '兴业银行',
                select: platform === 'pc' ? true : false
            },
            {
                bank_id: 'BOB',
                bank_name: '北京银行',
                select: platform === 'pc' ? true : false
            },
            {
                bank_id: 'BOS',
                bank_name: '上海银行',
                select: platform === 'pc' ? true : false
            }
        ]
    };

    //使用template模版
    var html=bt('template_banklist',banksInfoLst);
    $("#m_deposit_pay").html(html);

    // 兼容IE
    if (location.origin) {
        urlPath = location.origin;
    } else {
        urlPath = location.protocol + "//" + location.hostname;
    }
    // console.info(urlPath);
    // 临时处理安卓入金问题
    if (location.hostname === 'proxy.tigerwit.com') {
        urlPath = 'https://www.tigerwit.com';
    }

    if (search) {
        var $pay = $payList.find(".m_deposit_pay__bank");
        order_no = doSearch(search, 'order_no');
        var token = $.cookie("token") || '';
        // console.info($pay);
        $.each($pay, function (index, value) {
            // console.log(index, value);
            var pMode = $(value).attr("data-pmode");
            $(value).attr("href", urlPath+"/api/app/payment/deposit/dispatch?order_no="+order_no+"&pmode="+pMode+"&token="+token);
        });
    }

    function doSearch (str, i) {
        var arr = str.substring(1).split('&');
        var s;

        $.each(arr, function (index, value) {
            if (value.split('=')[0] === i) {
                s = value.split('=')[1];
            }
        });
        return s;
    }

});