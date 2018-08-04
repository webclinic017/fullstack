;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('ThirdRecordController', ThirdRecordController);

    ThirdRecordController.$inject = ['$scope', 'asset'];

    function ThirdRecordController($scope, asset) {
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

        // $scope.cancelWithdraw = cancelWithdraw;

        getList(1);

        // 获取交易历史
        function getList(page) {
            $scope.$emit('showLoadingImg');
            var offset = (page - 1) * pagesize;
            asset.getHistory($scope.main.trade_account.mt4_id, offset, pagesize).then(function (data) {
                // console.info(data);
                $scope.$broadcast('hideLoadingImg');
                if (!data) return;
                if (data.is_succ) {
                    $scope.historyList = data.data.records;

                    angular.extend($scope.pagebar.config, {
                        total: data.data.page_count,
                        page: page
                    });
                }
            });
        }

        // function cancelWithdraw(code) {
        //     asset.cancelWithdraw(code).then(function (data) {
        //         if (!data) return;
        //         //console.log(data);
        //         if (!data.is_succ) {
        //             // console.log(data.message);
        //             layer.msg(data.message);
        //             return;
        //         }
        //         getList(1);
        //     });
        // }
    }
})();
