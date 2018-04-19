$(document).ready(function () {
    var $payList = $(".m_deposit_pay");
    // var $payBtn = $("#m_deposit_test a");
    var order_no, real_id;

    var search = location.search;
    //使用baidu.template命名空间
    var bt=baidu.template;
    var banksInfoLst = {
        bankList: []
    };

    $payList.addClass(platform);
    getBankList();

    function getBankList () {
        $.get('/napi', {
            action: 'get_deposit_bank'
        }).then(function (data) {
            // console.log(data);
            if (platform === 'pc') {
                banksInfoLst.bankList = data.data;
            } else {
                $.each(data.data, function (index, value) {
                    if (value.select === 'all') {
                        banksInfoLst.bankList.push(value);
                    }
                });
            }
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
                urlPath = 'https://cn.tigerwit.com';
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