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
            $.each(data.data, function (index, value) {
                var arrType = value.bank_status.split('_');
                $.each(arrType, function (index2, value2) {
                    if (bankStatus === 'static') {
                        if (value2 === 'static') {
                            if (platform === 'pc' || platform === 'all') {
                                banksInfoLst.bankList.push(value);
                            }
                            if (platform === 'phone' || value.select === 'all') {
                                banksInfoLst.bankList.push(value);
                            }
                        }
                    } else {
                        if (value2 === bankStatus) {
                            // 由于 selectV2 个别银行code码不同，在这里临时做下兼容
                            if (bankStatus === 'selectV2') {
                                if (value.bank_id === 'BOCM') value.bank_id = 'BCM';
                                if (value.bank_id === 'PABC') value.bank_id = 'PAB';
                                if (value.bank_id === 'BOS') value.bank_id = 'SHBANK';
                            }
                            banksInfoLst.bankList.push(value);
                        }
                    }
                });
            });
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