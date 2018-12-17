;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('WalletSummaryController', WalletSummaryController);

    WalletSummaryController.$inject = ['$scope', 'invest', 'utils', 'asset'];

    function WalletSummaryController($scope, invest, utils, asset) {

        $scope.historyList = [];
        $scope.backout = backout;

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
            $scope.$emit('showLoadingImg');
            var offset = page ? (page-1)*pagesize : 0;
            invest.getWalletHistory(offset, pagesize, 0).then(function (data) {
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

        function backout(id){
            asset.cancelWithdraw(id).then(function (data) {
                if (!data) return;
                //console.log(data);
                if (!data.is_succ) {
                    // console.log(data.message);
                    layer.msg(data.message);
                    return;
                }
                getWalletHistory(1);
            });
        }
    }
}());