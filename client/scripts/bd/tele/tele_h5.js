;
(function () {
    // twH5Loader('img_detect_container', 1, allLoaded)
    allLoaded()
    function allLoaded() {
        function toNativeTele() {
            if (isInTiger()) {
                var teleVersion = ~~'304'
                var version = ~~getVersionName().replace(/\./gi, '')
                alert('当前版本：' + version, "目标版本：", teleVersion)
                callNative({
                    type: version >= teleVersion ? "teleDeposit" : "deposit"
                })
            } else {
                layer.open({
                    content: '请在APP中打开此页面',
                    skin: 'msg',
                    anim: false,
                    time: 2 /*1.2秒后自动关闭*/
                });
            }
        }

        $('[on-tap]').on('click', function (e) {
            var action = $(e.target).attr('on-tap')
            console.log(action)
            var handlers = {
                toNativeTele: function() {
                    toNativeTele()
                }
            }
            handlers[action]()

            return false
        })
    }
}());
