;(function (w) {
    var url = {
      openIos: 'tigerwitiOS://',
      openAndriod: 'tigerwit://',
      down: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.tigerwit.forex'
    };
    var iframe = document.createElement('iframe');
    var body = document.body;
    iframe.style.cssText='display:none;width=0;height=0';
    var timer = null;

    w.openInApp = function (page) {
        console.log(page);
        var userAgent = navigator.userAgent;
        if(/MicroMessenger/gi.test(userAgent)) {
            // 微信浏览器中
            layer.open({
                content: '请到老虎外汇APP中打开页面'
                ,skin: 'msg'
                ,time: 2 //2秒后自动关闭
            });
        } else{
            if (userAgent.indexOf("Safari") != -1) {
                window.location.href = url.openIos+page;
            } else {
                body.appendChild(iframe);
                if (isAndriod()) {
                    iframe.src = url.openAndriod+page;
                } else {
                    iframe.src = url.openIos+page;
                }
                timer = setTimeout(function() {
                  window.location.href = url.down;
                }, 500);
            }
        }

        $(document).on('visibilitychange webkitvisibilitychange', function() {
            var tag = document.hidden || document.webkitHidden;
            if (tag) {
                clearTimeout(timer);
            }
        });
         
        $(window).on('pagehide', function() {
            clearTimeout(timer);
        });
    };
})(window);