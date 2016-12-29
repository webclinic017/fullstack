;(function () {

    window.wxShareConfig = wxShareConfig;
    function wxShareConfig(config) {
        console.log('wx_config:',config);
        config = config || {};
        var shareTitle = config.title;
        var shareSubTitle = config.subTitle;
        var shareLink = config.shareLink;
        var shareDesc = config.desc;
        var shareImg = config.img;
        var shareTrack = config.trackPage;
        var shareDebug = config.debug;

        /*检测微信环境*/
        var isWeiXin = navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1;
        if (isWeiXin && isTigerCo()) {
            console.log('当前公司名为tigerwit -- 微信分享配置中...');
            /*获取微信SDK权限*/
            $(function () {
                $.ajax({
                    type: "post",
                    url: "/action/public/wx/get_jssdk",
                    data: {
                        url: window.location.href
                    },
                    success: function (data) {
                        //console.log('jssdkInfo'+ data);
                        var json = JSON.parse(data).data;
                        wx.config({
                            debug: shareDebug,
                            appId: json.appId,
                            timestamp: json.timestamp,
                            nonceStr: json.nonceStr,
                            signature: json.signature,
                            jsApiList: [
                                'onMenuShareTimeline',
                                'onMenuShareAppMessage',
                                'onMenuShareQQ'
                            ]
                        });
                    }
                });
            });

            /*配置微信分享信息*/
            wx.ready(function () {
                /*console.log("wx_is_ready and hitDone event is binded");*/
                console.log("wechat share is ready");
                /*获取“分享给朋友”按钮点击状态及自定义分享内容接口*/
                wx.onMenuShareAppMessage({
                    title: shareTitle,
                    desc: shareDesc,
                    link: shareLink,
                    /*imgUrl: window.location.protocol + "//" + window.location.hostname + "/activity/t31_game/share_pic_other.jpg",*/
                    imgUrl: shareImg,
                    trigger: function (res) {

                    },
                    success: function (res) {
                        /*umeng*/ 
                        _czc.push(["_trackEvent", shareTrack, "分享给朋友按钮"]);
                    },
                    cancel: function (res) {

                    },
                    fail: function (res) {

                    }
                });

                /*获取“分享到朋友圈”按钮点击状态及自定义分享内容接口*/
                wx.onMenuShareTimeline({
                    title: shareDesc,
                    desc: shareTitle,
                    link: shareLink,
                    imgUrl: shareImg,
                    trigger: function (res) {

                    },
                    success: function (res) {
                        /*umeng*/ 
                        _czc.push(["_trackEvent", shareTrack, "分享到朋友圈"]);
                    },
                    cancel: function (res) {

                    },
                    fail: function (res) {
                    }
                });

                wx.onMenuShareQQ({
                    title: shareTitle,
                    desc: shareDesc,
                    link: shareLink,
                    imgUrl: shareImg,
                    trigger: function (res) {
                    },
                    complete: function (res) {
                    },
                    success: function (res) {
                        /*umeng*/ 
                        _czc.push(["_trackEvent", shareTrack, "分享给QQ好友"]);
                    },
                    cancel: function (res) {
                    },
                    fail: function (res) {
                        alert(JSON.stringify(res));
                    }
                });
            });
        }
    }
}());