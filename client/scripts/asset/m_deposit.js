$(document).ready(function () {
    var $payList = $("#m_deposit_pay");

    var order_no;

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
            $(value).attr("href", urlPath+"/action/public/v4/pay_order/"+order_no+"?pmode="+pMode);
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