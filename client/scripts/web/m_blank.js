;$(document).ready(function () {
    var system = getQueryString('system');
    var userAgent = navigator.userAgent;
    if (system === 'download_mt4') {
        if(/MicroMessenger/gi.test(userAgent)) {
            // 微信浏览器中
            $(".weixinTip").css("display", "block");
            return;
        } else {
            window.location.href = "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/metatrader4.apk?utm_campaign=www.metatrader4.com";
        }
    } else {
        var isCn = system === 'cn' ? true : false;
        var search_source = checkUserSource();
        // console.log(search_source);
        publicRequest('setUserSource', 'POST', {
            source: JSON.stringify(search_source)
        }).then(function () {
            if (isAndriod() || isWindows()) {
                if(/MicroMessenger/gi.test(userAgent)) {
                    // 微信浏览器中
                    $(".weixinTip").css("display", "block");
                    return;
                }
                if (isCn) {
                    publicRequest('getVersionCheck', 'GET', {
                        type: 3,
                        version: '1.0.0',
                        lang: 'cn'
                    }).then(function (data) {
                        if (data.is_succ) {
                            window.location.href = data.data.url;
                        }
                    });
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
    }
});