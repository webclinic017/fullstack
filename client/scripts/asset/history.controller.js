;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetHistoryController', AssetHistoryController);

    AssetHistoryController.$inject = ['$scope', 'asset', 'utils'];

    function AssetHistoryController($scope, asset, utils) {
        $scope.records = [];
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

        var pagesize = 10; // 单页显示数

        $scope.cancelWithdraw = cancelWithdraw;

        getList(1);

        // 获取交易历史
        function getList(page) {


            asset.getHistory(page, pagesize).then(function (data) {
                //console.log(data,1);
                $scope.historyList = data.records;
                //console.log(data.records);
                $scope.$emit('showLoadingImg');

                angular.extend($scope.pagebar.config, {
                    total: utils.getTotal(data.sum, pagesize),
                    page: page
                });
                $scope.$broadcast('hideLoadingImg');

            });


        }

        function cancelWithdraw(code) {
            asset.cancelWithdraw(code).then(function (data) {
                //console.log(data);
                if (!data.is_succ) {
                    console.log(data.error_msg);
                    return;
                }

                angular.forEach($scope.historyList, function (record) {
                    if (record.code === code) {
                        record.status = -2;
                    }
                });

            });


        }
    }
})();
