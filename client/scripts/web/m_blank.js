; $(document).ready(function () {
    var system = getQueryString('system');
    var platform = getQueryString('platform');
    var isCn = system === 'cn' ? true : false;
    if (isWX()) {
        // 微信浏览器中
        $(".weixinTip").css("display", "block");
        return;
    }
    if (system === 'download_mt4') {
        window.location.href = "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/metatrader4.apk?utm_campaign=www.metatrader4.com";
    } else {
        var search_source = checkUserSource();
        // console.log(search_source);
        publicRequest('setUserSource', 'POST', {
            source: JSON.stringify(search_source)
        }).then(function () {
            if (platform) {
                if (platform == 'android') {
                    downloadAndroid()
                } else if (platform == 'ios') {
                    downloadIos()
                }else{
                    alert('未知的平台')
                }
            } else if (isAndriod() || isWindows()) {
                downloadAndroid()
            } else {
                downloadIos()
            }
        });
    }
    function downloadAndroid() {
        if (isCn) {
        // if (isDemo() || isCn) {
            // window.location.href = 'http://dltw.oss-cn-beijing.aliyuncs.com/apk/tigerwit_v4.3.1.apk';
            publicRequest('getVersionCheck', 'GET', {
                type: 3,
                version: '1.0.0',
                lang: 'cn'
            }).then(function (data) {
                if (data.is_succ) {
                    // console.log(data.data.url);
                    window.location.href = data.data.url;
                }
            });
        } else {
            window.location.href = nodeResponseInfo.androidGlobal;
        }
    }
    function downloadIos() {
        if (isCn) {
            window.location.href = nodeResponseInfo.iosCn;
        } else {
            window.location.href = nodeResponseInfo.ios;
        }
    }
});