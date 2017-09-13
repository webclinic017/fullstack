;$(document).ready(function () {

    if (isAndriod()) {
        var userAgent = navigator.userAgent;
        if(/MicroMessenger/gi.test(userAgent)) {
            // 微信浏览器中
            $(".weixinTip").css("display", "block");
            return;
        }
        
        window.location.href = nodeResponseInfo.android;
    } else {
        window.location.href = "https://itunes.apple.com/app/id1091437876";
    }
});