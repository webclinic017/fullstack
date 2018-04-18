; $(function () {
    window['lottery_native_share_succ'] = function(type) {
        $('#share_succ').html("分享成功！当前type：" + type || '未回传type')
    }
    window['lottery_native_share_fail'] = function(type) {
        $('#share_fail').html("分享失败！当前type：" + type || '未回传type')
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
            succ: 'lottery_native_share_succ',
            fail: 'lottery_native_share_fail',
        })
        return false
    })
})