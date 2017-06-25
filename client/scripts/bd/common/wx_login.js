;(function () {

    window.wxLongin = function () {
        var redirect_uri = window.location.protocol + "//" + window.location.hostname + '/action/public/wechat?redirect_url=' + encodeURIComponent(window.location.href);
        // var redirect_uri = 'https://proxy.tigerwit.com/action/public/wechat?redirect_url=' + encodeURIComponent(window.location.href);
        var href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6bbeaa275661873a&redirect_uri=" + encodeURIComponent(redirect_uri) + "&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect";
        window.location.href = href;
    };
})();