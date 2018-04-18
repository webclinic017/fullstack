; $(function () {
    window['__lottery_native_share_succ__'] = function(type) {
        alert("分享成功！当前type：", type)
    }
    window['__lottery_native_share_fail__'] = function(type) {
        alert("分享失败！当前type：", type)
    }

    var shareDesp = "test callback";
    var shareTitle = "test callback";
    var shareLink = "https://www.tigerwit.com";
    $('#share_test').on('tap', function () {
        console.log(123)
        openH5ShareModal({
            modalTitle: shareTitle,
            shareTitle: shareTitle,
            desp: shareDesp,
            url: shareLink,
            // fn: function () {
            //     _czc.push(["_trackEvent", loca.pathname, "mon_report_share_btn"]);
            // }
            succ: '__lottery_native_share_succ__',
            fail: '__lottery_native_share_fail__',
        })
        return false
    })
})