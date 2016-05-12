;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderHistoryController', TraderHistoryController);

    TraderHistoryController.$inject = ['$scope', '$location', '$state', 'trader'];

    function TraderHistoryController($scope, $location, $state, trader) {
        $scope.orders = [];
        $scope.pagebar = {
            config: {
                // total: , // 总页数
                page: 1    
            },
            pages: [],
            pagesBtn: [],
            // selectPage: , bind to pagination.selectPage
            getList: getList           
        };

        var pagesize = 8;
        var usercode;
        var absUrl = $location.absUrl();
        var regUsercode = /trader\/(\d+)\/#/;

        usercode = absUrl.match(regUsercode)[1];

        getList(1);

        function getList (page) {
            trader.getMasterHistory(usercode, page, pagesize).then(function (data) {
                // console.info(data);
                $scope.orders = data.data;

                $scope.$broadcast('hideLoadingImg');

                if ($scope.orders.length <= 0) return;

                angular.forEach($scope.orders, function(order, index){
                    order.close_type_name = formatCloseTypeName(order.close_type);
                });
                angular.extend($scope.pagebar.config, {
                    total: getTotal(data.sum, pagesize),
                    page: page
                }); 
            });
        }
        function formatCloseTypeName(type){
            var type_name = "手动平仓";
            if(type == "sl"){
                type_name = "止损平仓";
            }
            if(type == "tp"){
                type_name = "止盈平仓";
            }
            if(type == "so"){
                type_name = "强制平仓";
            }
            return type_name;
        }
        function getTotal(sum, pagesize) {
            var total;
            sum = parseInt(sum, 10); // list item 总个数
            pagesize = parseInt(pagesize, 10); // 单页显示数

            if (sum % pagesize > 0) {
                total = parseInt(sum / pagesize) + 1;
            } else {
                total = parseInt(sum / pagesize);
            }
            return total;
        }

    }
})();

;
