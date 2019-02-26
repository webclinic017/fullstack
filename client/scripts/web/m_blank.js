;$(document).ready(function () {

    var isCn = getQueryString('system') === 'cn' ? true : false;
    if (isAndriod()) {
        var userAgent = navigator.userAgent;
        if(/MicroMessenger/gi.test(userAgent)) {
            // 微信浏览器中
            $(".weixinTip").css("display", "block");
            return;
        }
        window.location.href = nodeResponseInfo.android;
        // if (isCn) {
            
        // } else {
        //     window.location.href = nodeResponseInfo.androidGlobal;
        // }
        
    } else {
        // if (isCn) {
        //     window.location.href = "https://itunes.apple.com/cn/app/id1091437876";
        // } else {
        //     window.location.href = nodeResponseInfo.ios;
        // }
    }
});