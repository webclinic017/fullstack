;$(document).ready(function () {
    var isCn = getQueryString('system') === 'cn' ? true : false;
    var search_source = checkUserSource();
    // console.log(search_source);
    publicRequest('setUserSource', 'POST', {
        source: JSON.stringify(search_source)
    }).then(function () {
        if (isAndriod() || isWindows()) {
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
    
});