;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderHistoryController', TraderHistoryController);

    TraderHistoryController.$inject = ['$scope', '$location', '$state', 'trader', 'utils'];

    function TraderHistoryController($scope, $location, $state, trader, utils) {
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
            console.log(page)
            var offset = (page - 1) * 8
            var limit = 8;
            trader.getMasterPastTrade(usercode, offset, limit).then(function (data) {
                console.info(data);
                $scope.orders = data.data.records;

                $scope.$broadcast('hideLoadingImg');

                if ($scope.orders.length <= 0) return;
                angular.extend($scope.pagebar.config, {
                    total: utils.getTotal(data.data.record_count, pagesize),
                    page: page
                }); 
            });
        }

    }
})();

;
