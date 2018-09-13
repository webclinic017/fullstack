;(function (w) {
    var url = {
      openIos: 'tigerwitGlobal://',
      openAndriod: 'tigerwit://',
      down: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.tigerwit.forex'
    };
    var iframe = document.createElement('iframe');
    var body = document.body;
    iframe.style.cssText='display:none;width=0;height=0';
    var timer = null;

    w.openInApp = function (page) {
        // console.log(w.location.hostname);
        if (w.location.hostname === 'global.tigerwit.com' || w.location.hostname === 'globaldemo.tigerwit.com') {
            url.down = isAndriod() ? 'https://play.google.com/store/apps/details?id=com.tigerwit.forex' : 'https://itunes.apple.com/cn/app/id1091437876?mt=8';
        }
        var userAgent = navigator.userAgent;
        if(/MicroMessenger/gi.test(userAgent)) {
            // 微信浏览器中
            window.location.href = url.down;
        } else{
            if (userAgent.indexOf("Safari") != -1) {
                if (isAndriod()) {
                    body.appendChild(iframe);
                    iframe.src = url.openAndriod+page;

                    timer = setTimeout(function() {
                      window.location.href = url.down;
                    }, 500);
                } else {
                   window.location.href = url.openIos+page; 
                }
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