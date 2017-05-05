;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('WalletSummaryController', WalletSummaryController);

    WalletSummaryController.$inject = ['$scope', 'invest', 'utils'];

    function WalletSummaryController($scope, invest, utils) {

        $scope.historyList = [];

        $scope.pagebar = {
            config: {
                // total: , 总页数
                page: 1
            },
            pages: [],
            pagesBtn: [],
            // isShow: false,
            // selectPage: , bind to pagination.selectPage
            getList: getWalletHistory
        };

        var pagesize = 10; // 单页显示数

        getWalletHistory(1);

        function getWalletHistory (page) {
            var offset = page ? (page-1)*pagesize : 0;
            invest.getWalletHistory(offset, pagesize).then(function (data) {
                // console.log(data);
                $scope.$broadcast('hideLoadingImg');
                if (!data) return;
                if (data.is_succ) {
                    $scope.historyList = data.data.records;

                    angular.extend($scope.pagebar.config, {
                        total: utils.getTotal(data.data.record_count, pagesize),
                        page: page
                    });
                }
            });
        }
    }
}());