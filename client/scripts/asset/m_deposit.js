$(document).ready(function () {
    var $payList = $(".m_deposit_pay");
    // var $payBtn = $("#m_deposit_test a");
    var order_no, real_id;

    var $pay = $payList.find(".m_deposit_pay__bank");
    var search = location.search;

    // 兼容IE
    if (location.origin) {
        urlPath = location.origin;
    } else {
        urlPath = location.protocol + "//" + location.hostname;
    }
    // console.info(urlPath);

    // $.get('/action/public/v4/get_info').then(function (data) {
    //     data = JSON.parse(data);
    //     console.log(data);
    //     real_id = data.data.real_id;
    // });

    // $payBtn.on('click', function () {
    //     var num = $("#m_deposit_test .number").val();
    //     if (real_id) {
    //         $.get('/action/public/v4/pay', {
    //             mt4_id: real_id,
    //             amount: num
    //         }).then(function (data) {
    //             data = JSON.parse(data);
    //             order_no = data.data.order_no;
    //             if (order_no) {
    //                 window.open('/m/deposit/pay?order_no='+order_no);
    //             }
    //         });
    //     }
    // });

    if (search) {
        order_no = doSearch(search, 'order_no');
        var token = $.cookie("token") || '';
        // console.info($pay);
        $.each($pay, function (index, value) {
            // console.log(index, value);
            var pMode = $(value).attr("data-pmode");
            $(value).attr("href", urlPath+"/api/payment/deposit/dispatch?order_no="+order_no+"&pmode="+pMode+"&token="+token);
        });
    }

    // $pay.on('click', function () {
        
    //     if (order_no) {
    //         var pMode = $(this).attr("data-pmode");
    //         var action_address = urlPath+"/action/public/app/pay_order/"+order_no+"?pmode="+pMode;
    //         callNative({
    //             type: "openUrlOnce",
    //             url: action_address
    //         });
            
    //     } else {
    //         layer.open({
    //             content: '系统错误，请联系管理员'
    //             ,skin: 'msg'
    //             ,time: 2 //2秒后自动关闭
    //           });
    //     }
        
    // });

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