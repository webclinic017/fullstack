;$(document).ready(function () {

    var isCn = getQueryString('system') === 'cn' ? true : false;
    if (isAndriod()) {
        var userAgent = navigator.userAgent;
        if(/MicroMessenger/gi.test(userAgent)) {
            // 微信浏览器中
            $(".weixinTip").css("display", "block");
            return;
        }
        if (isCn) {
            window.location.href = nodeResponseInfo.android;
        } else {
            window.location.href = nodeResponseInfo.androidGlobal;
        }
        
    } else {
        if (isCn) {
            window.location.href = nodeResponseInfo.iosCn;
        } else {
            window.location.href = nodeResponseInfo.ios;
        }
    }
});