;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RedbagOwnController', RedbagOwnController);

    RedbagOwnController.$inject = ['$scope', 'redbag'];

    function RedbagOwnController($scope, redbag) {

        var pagesize = 9;
        $scope.tabType = 1;             // 1 or 2 -> 可用，3 -> 已兑换，4 -> 已过期, 5 红包记录
        $scope.success = false;         // true -> 请求数据成功
        $scope.exchangeLoading = false; // true -> 红包兑换中
        $scope.page = 1;
        $scope.bags = [];
        $scope.pagebar = {
            config: {
                // total: , // 总页数
                page: 1
            },
            pages: [],
            pagesBtn: [],
            // selectPage: , bind to pagination.selectPage
            getList: getRedbagList
        };
        $scope.changeTabType = changeTabType;
        $scope.exchangeRedbag = exchangeRedbag;
        
        getRedbagList();

        function getRedbagList (page) {
            page = page ? page : 1;
            $scope.page = page;
            // $scope.$broadcast('showLoadingImg');
            $scope.success = false;

            redbag.getRedbagList({
                page: page,
                pagesize: pagesize,
                type: $scope.tabType
            }).then(function (data) {
                $scope.success = true;
                // $scope.$broadcast('hideLoadingImg');
                // console.info(data);
                if (data.is_succ) {
                    $scope.bags = data.data;

                    angular.extend($scope.pagebar.config, {
                        total: getTotal(data.sum, pagesize),
                        page: page
                    });
                }
            });
        }

        function changeTabType (type) {
            if (type !== $scope.tabType) {
                $scope.tabType = type;
                getRedbagList();
            }
        }

        function exchangeRedbag (o) {

            if ($scope.exchangeLoading) return;
            console.log(o);
            $scope.exchangeLoading = true;
            o.exchangeLoading = true;
            
            redbag.exchangeRedbag(o.user_bonus_id).then(function (data) {
                console.info(data);
                $scope.exchangeLoading = false;
                o.exchangeLoading = false;
                if (data.is_succ) {
                    layer.msg('红包兑换成功', {
                        time: 2000
                    });
                    getRedbagList($scope.page);
                } else {
                    layer.msg(data.error_msg, {
                        time: 2000
                    });
                }
            });
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
