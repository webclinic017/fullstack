; $(document).ready(function () {
    if (isWX()) {
        // 微信浏览器中
        $(".weixinTip").css("display", "block");
        return;
    }
    var system = getQueryString('system');
    var platform = getQueryString('platform');




    if (system === 'download_mt4') {
        window.location.href = "//twdl.oss-cn-beijing.aliyuncs.com/metatrader4.apk";
    } else {
        setTimeout(function () {
            if (platform) {
                if (platform == 'android') {
                    downloadAndroid()
                } else if (platform == 'ios') {
                    downloadIos()
                } else if (platform == 'pc') {
                    window.location.href = nodeResponseInfo.pc;
                } else {
                    alert('未知的平台')
                }
            } else {
                if (isAndriod()) {
                    downloadAndroid()
                } else if (isIOS()) {
                    downloadIos()
                } else {
                    // pc
                    window.location.href = nodeResponseInfo.pc;
                }
            }
        }, 100)
    }


    function isCnFun(trueFun, falseFun) {
        // var isCn = false;
        if (system) {
            if (system === 'cn') {
                // isCn = true;
                trueFun();
            } else {
                falseFun();
            }
            // system === 'global'
        } else {
            getEmailPhone('', '', function (data) {
                if (data.ip_country_code === 'CN') {
                    // isCn = true;
                    trueFun();
                } else {
                    falseFun();
                }
            })
        }
    }
    function downloadAndroid() {
        isCnFun(function () {
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
        }, function () {
            window.location.href = nodeResponseInfo.androidGlobal;
        })
    }
    function downloadIos() {
        isCnFun(function () {
            window.location.href = nodeResponseInfo.iosCn;
        }, function () {
            window.location.href = nodeResponseInfo.ios;
        })
    }
});