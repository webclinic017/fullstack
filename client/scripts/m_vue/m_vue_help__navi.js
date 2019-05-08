if ($(".m_vue").attr("data-type") === "helpNavi") {
    var helpSelfApp = new Vue({
        el: '#helpNavi',
        data: {
            forex: [],
            cfd: [],
            oil: []
        },
        ready: function () {
            // 配置参数
            var TRIGGLE_EVENT = 'click';
            var TRIGGLE_ORIGIN = $('.help1-navi-title');
            var TOP_BAR = TRIGGLE_ORIGIN.find('.help1-navi-title__back_top');
            var DESP_ITEM = TRIGGLE_ORIGIN.find('.help1-navi-title__item-desp');
            var TOP_BAR_SHOWED = false;
            var DESP_CLASS = '.help1-navi-title__item-desp';
            var WAIT_TIME = 500;
            var ANIMATE_BSR = 'jswing';
            var VM = this;

            function getAction($target) {
                var actionCommand = $target.attr('data-action');
                actionCommand = actionCommand ? actionCommand.split('-') : [-1, -1]
                return {
                    actionName: actionCommand[0],
                    actionEle: actionCommand[1]
                }
            }

            if ($(".m_vue").attr("data-patch") === "getProductInfo") {
                getProductInfo();
            }
            // 展开第一个标题， 告诉用户可以展开
            DESP_ITEM.eq(0).delay(WAIT_TIME).slideDown(WAIT_TIME);

            TRIGGLE_ORIGIN.on(TRIGGLE_EVENT, function (e) {
                var $curTarget = $(e.target);
                var oAction = getAction($curTarget);
                if (oAction.actionName == 'openDetail') {
                    $curTarget.parent().find(DESP_CLASS).slideToggle();
                }
                if (oAction.actionName == 'backTop') {
                    $("body,html").animate({ scrollTop: 0 }, WAIT_TIME, ANIMATE_BSR, function () {
                        TOP_BAR.stop().fadeOut(WAIT_TIME);
                        TOP_BAR_SHOWED = false;
                    });
                    // 防止事件击穿
                    return false;
                }
            });

            $(document).scroll(function () {
                // 节流
                if (!TOP_BAR_SHOWED) {
                    TOP_BAR.stop().fadeIn(WAIT_TIME);
                }
            })

            function getProductInfo() {
                var url = window.getVueApi()['getWebProductInfoApi'];
                var products = 'forex_oil_cfd'.split('_');
                $.each(products, function (index, item) {
                    (function (item) {
                        $.ajax({
                            url: url + '&product_type=' + item,
                            type: 'get'
                        }).then(function (res) {
                            if (res.is_succ) {
                                VM.$data[item] = res.data['zh'];
                                console.log(item, res.data['zh'])
                            }
                        });
                    }(item))
                });
            }
        }
    });
}
