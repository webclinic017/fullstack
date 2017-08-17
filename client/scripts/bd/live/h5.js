; (function () {
    $(function () {
        // 微信分享配置
        if (wx) {
            wxShareConfig({
                title: '《外汇早知道》YY直播',
                subTitle: '《外汇早知道》YY直播',
                shareLink: window.location.href,
                desc: '【老虎外汇】每日早8：45《外汇早知道》YY直播与您相约。',
                img: window.location.origin + '/activity/logo.png',
                trackPage: window.location.pathname.replace(/\//gi, ''),
                debug: false
            });
        } else {
            console.log("微信配置错误")
        }

        var liveLocation = 'http://t.cn/RiM1bjm';
        $('.desp_redirect_url').on('tap', function () {
            if (isInTiger()) {
                callNative({
                    type: "openUrl",
                    url: liveLocation
                });
            } else {
                window.location.href = liveLocation;
            }
            return false;
        });
    })
}())