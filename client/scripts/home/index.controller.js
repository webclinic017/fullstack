;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('HomeIndexController', HomeIndexController);

    HomeIndexController.$inject = ['$scope', 'product','ranklist', '$cookies'];

    function HomeIndexController($scope, product, ranklist, $cookies) {
        var company = $cookies["company_name"];

        //if (company && company === 'tigerwit') {
        //    layer.open({
        //        type: 1,
        //        skin: 'home_layer', //加上边框
        //        title: '',
        //        shade: 0.6,
        //        area: ['800px', '567px'], //宽高
        //        content: '<div class="content"><h4><span>老虎外汇杠杆水平调整公告</span></h4><p class="info"><span>尊敬的用户:</span><br>面临即将到来的美国大选,英国退欧公投后的不确定因素,老虎外汇基于对公司和客户负责的态度,在经过风险评估后,将采取以下必要措施:</p><p class="detail">2016年11月07日开市(北京时间11月07日凌晨5点)至11月12日休市,所有外汇货币对杠杆水平将调整为50:1;贵金属,大宗商品和CFD将调整为33:1<br>2016年11月14日开市(北京时间11月14日凌晨5点)至12月31日休市,所有GBP货币对,贵金属,大宗商品和CFD杠杆水平将调整为50:1</p><p class="end">老虎外汇保留因未来市场走向再度调整杠杆的权利。<br>请监测您在老虎外汇账户的保证金水平，并作出必要的更改。<br>感谢您对此次调整的理解。</p></div>',
        //        btn: '知道了'
        //    });
        //}

        $scope.indexMasters = [];// 首页 第二模块的高手

        // 此为index2 首页的高手信息
        ranklist.getMastersList().then(function (data) {
            // console.info(data);
            $scope.indexMasters = data.data.slice(0, 3);
        });
    }
})();
