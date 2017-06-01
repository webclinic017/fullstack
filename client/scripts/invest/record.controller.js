;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestRecordController', InvestRecordController);

    InvestRecordController.$inject = ['$scope', 'asset', 'utils'];

    function InvestRecordController($scope, asset, utils) {
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
                // console.info(data.records[0]);
                $scope.historyList = data.records;
                // console.log(data.records);
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

                getList(1);

            });


        }
    }
})();
