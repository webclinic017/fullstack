$(document).ready(function () {
    var $test = $("#m_deposit_test");
    var $testInp = $("#m_deposit_test_inp");
    var $payList = $("#m_deposit_pay");

    var real_id, order_no;

    if ($test.length) {
        $.get('/action/public/v4/get_info').then(function (data) {
            data = JSON.parse(data);
            // console.info(data);
            if (data.is_succ) {
                real_id = data.data.real_id;
            }
        });
    }

    $test.on('click', function () {
        if (real_id) {
            $.get('/action/public/v4/pay', {
                mt4_id: real_id,
                amount: $testInp.val()
            }).then(function (data) {
                data = JSON.parse(data);
                if (data.is_succ) {
                    order_no = data.data.order_no;
                    window.open('/m/deposit/pay?order_no='+order_no);
                }
            });
        }
    });

    if ($payList.length) {
        var $pay = $payList.find("li a");
        var search = location.search;

        // 兼容IE
        if (location.origin) {
            urlPath = location.origin;
        } else {
            urlPath = location.protocol + "//" + location.hostname;
        }
        // console.info(urlPath);

        if (search) {
            order_no = doSearch(search, 'order_no');
            // console.info(order_no);
            $.each($pay, function (index, value) {
                var pMode = $(value).attr("data-pmode")
                $(value).attr("href", urlPath+"/action/public/v4/pay_order/"+order_no+"?v_pmode="+pMode);
            });
        }
        
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