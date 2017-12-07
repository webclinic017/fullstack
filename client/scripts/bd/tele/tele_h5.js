;
(function () {
    // twH5Loader('img_detect_container', 1, allLoaded)
    $(allLoaded)
    function allLoaded() {
        var tapHandlers = {
            toNativeTele: function() {
                if (isInTiger()) {
                    var teleVersion = ~~'304'
                    var version = ~~getVersionName().replace(/\./gi, '')
                    // alert('当前版本：' + version + "目标版本：" + teleVersion)
                    callNative({
                        type: version >= teleVersion ? "teleDeposit" : "deposit"
                    })
                } else {
                    layer.open({
                        content: '请在App中打开此页面',
                        skin: 'msg',
                        anim: false,
                        time: 2
                    });
                    setTimeout(function(){
                        openInApp(window.location.hostname + "/bd/tele?toTele=1")
                    }, 200)
                }
            },
            openRule: function($target){
                layer.open({
                    shadeClose: true,
                    content: $("#"+ $target.attr("rule")).html(),
                    style: 'padding:0;width:85%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
                });
                $('.layui-m-layercont').css('padding', 0)
                $('.layui-m-layershade').css('background-color', 'rgba(0,0,0,0)')
            }
        }

        if(getSearch().toTele == "1"){
            tapHandlers.toNativeTele()
        }

        $('[on-tap]').on('click', function (e) {
            var $target = $(e.target)
            var action = $target.attr('on-tap')
            tapHandlers[action]($target)
            return false
        })
    }
}());
