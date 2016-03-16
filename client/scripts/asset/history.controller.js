;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetHistoryController', AssetHistoryController);

    AssetHistoryController.$inject = ['$scope', 'asset', 'utils'];

    function AssetHistoryController($scope, asset, utils) {

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
            getList: getList
        };

        var pagesize = 20; // 单页显示数


        getList(1);

        // 获取交易历史
        function getList(page) {
            asset.getHistory(page, pagesize).then(function (data) {
                $scope.historyList = data.records;
                angular.extend($scope.pagebar.config, {
                    total: utils.getTotal(data.sum, pagesize),
                    page: page
                });
                // $scope.$broadcast('hideLoadingImg');

            });

        }

        function cancelWithdraw(code) {
            asset.cancelWithdraw(code).then(function (data) {
                if (!data.is_succ) {
                    console.log(data.error_msg);
                    return;
                }

                angular.forEach($scope.records, function (record) {

                    if (record.code === code) {
                        record.status = -2;
                    }
                });
                angular.forEach($scope.recordsFinance, function (record) {

                    if (record.code === code) {
                        record.status = -2;
                    }
                });

            });
        }
    }
})();