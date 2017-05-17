;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('HomeIndexController', HomeIndexController);

    HomeIndexController.$inject = ['$scope', 'product', 'ranklist', '$cookies', '$location'];

    function HomeIndexController($scope, product, ranklist, $cookies, $location) {
        var company = $cookies["company_name"];
        var userCode = $cookies["user_code"];

        // if (company && company === 'tigerwit') {
        //    layer.open({
        //        type: 1,
        //        skin: 'home_layer', //加上边框
        //        title: '',
        //        shade: 0.6,
        //        area: ['800px', '567px'], //宽高
        //        content: '<div class="content"><h4><span>老虎外汇杠杆水平调整公告</span></h4><p class="info"><span>尊敬的用户:</span><br>面临即将到来的美国大选,英国退欧公投后的不确定因素,老虎外汇基于对公司和客户负责的态度,在经过风险评估后,将采取以下必要措施:</p><p class="detail">2016年11月07日开市(北京时间11月07日凌晨5点)至11月12日休市,所有外汇货币对杠杆水平将调整为50:1;贵金属,大宗商品和CFD将调整为33:1<br>2016年11月14日开市(北京时间11月14日凌晨5点)至12月31日休市,所有GBP货币对,贵金属,大宗商品和CFD杠杆水平将调整为50:1</p><p class="end">老虎外汇保留因未来市场走向再度调整杠杆的权利。<br>请监测您在老虎外汇账户的保证金水平，并作出必要的更改。<br>感谢您对此次调整的理解。</p></div>',
        //        btn: '知道了'
        //    });
        // }

        if (!userCode && company && company === 'tigerwit') {
            layer.open({
                type: 1,
                skin: 'home_redbag_layer', //加上边框
                closeBtn: 0,
                title: '',
                shade: 0.6,
                area: ['800px', '600px'], //宽高
                content: '<div class="content"><a href="/bd/t35" class="btn"></a><div class="close" onclick="layer.closeAll();"></div></div>'
            });
        }

        $scope.indexMasters = [];// 首页 第二模块的高手

        // 此为index2 首页的高手信息
        ranklist.getMastersList().then(function (data) {
            // console.info(data);
            $scope.indexMasters = data.data.slice(0, 3);
        });

        function getUserParam() {
            var hostnameUrl = window.location.hostname;
            var href = window.location.href;
            var originUrl = window.location.origin;
            var domainUrl = hostnameUrl.substring(hostnameUrl.indexOf('.') + 1) || "tigerwit.com";
            var pid = '', lp = '', unit = '', key = '', aGET = {};
            var lp = window.location.pathname.replace(/[\/:]/g, "").toLowerCase();

            if (lp != "") {
                document.cookie = 'lp=' + lp + ';path=/;domain=' + domainUrl;
            }

            if (href.indexOf('?') != -1) {
                var aQuery = href.split('?')[1];
                if (aQuery.length > 0) {
                    var aBuf = aQuery.split("&");
                    for (var i = 0, iLoop = aBuf.length; i < iLoop; i++) {
                        var aTmp = aBuf[i].split("=");
                        aGET[aTmp[0]] = aTmp[1];
                    }
                };
                pid = aGET['pid'] ? aGET['pid'] : "";
                unit = aGET['unit'] ? aGET['unit'] : "";
                key = aGET['key'] ? aGET['key'] : "";

                if (pid != '') {
                    // 清空重写
                    // console.log(domainUrl);
                    document.cookie = 'pid=' + null + ';path=/;domain=' + null;
                    document.cookie = 'unit=' + null + ';path=/;domain=' + null;
                    document.cookie = 'key=' + null + ';path=/;domain=' + null;

                    document.cookie = 'pid=' + pid + ';path=/;domain=' + domainUrl;

                    if (unit) {
                        document.cookie = 'unit=' + unit + ';path=/;domain=' + domainUrl;
                    }
                    if (key) {
                        document.cookie = 'key=' + key + ';path=/;domain=' + domainUrl;
                    }
                }
            }
        } getUserParam();

    }
})();
