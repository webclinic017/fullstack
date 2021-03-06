;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestRecordController', InvestRecordController);

    InvestRecordController.$inject = ['$scope', 'asset', 'lang'];

    function InvestRecordController($scope, asset, lang) {
        $scope.records = [];
        $scope.historyList = [];
        var mt4Id = '';
        $scope.showdetails = showdetails
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

        $scope.$watch(lang.isThird() ? 'main.trade_account.mt4_id' : 'investSelect.id', function(n){
            if(!n) return;
            mt4Id = n;
            getList(1);
        })

        // 获取交易历史
        function getList(page) {
            $scope.$emit('showLoadingImg');
            var offset = (page - 1) * pagesize;
            asset.getHistory(mt4Id, offset, pagesize).then(function (data) {
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

        // 查看详情
        function showdetails(item) {
          if (item.details_type) {
            item.details_type = false;
          } else {
            item.details_type = true;
          }
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
