;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestHistoryController', InvestHistoryController);

    InvestHistoryController.$inject = ['$scope', 'invest', '$modal'];

    function InvestHistoryController($scope, invest, $modal) {
        $scope.orderHistory = {};      // 自主交易历史订单概况
        $scope.orders = [];             // 自主交易历史订单
        $scope.traders = [];            // copied traders 列表
        $scope.showOrders = showOrders;
        $scope.showDetails = showDetails;
        $scope.openInvestOwnDetailMdl = openInvestOwnDetailMdl;
        $scope.openInvestCopyDetailMdl = openInvestCopyDetailMdl;

        $scope.pagebar = {
            config: {
                // total: , // 总页数
                page: 1    
            },
            pages: [],
            pagesBtn: [],
            // selectPage: , bind to pagination.selectPage
            getList: getInvestHistoryDetails          
        };

        var pagesize = 10;
        var nowTrader = {};          // 当前打开的copied trader

        getInvestHistoryData();
        getInvestHistoryTraders();

        function getInvestHistoryData () {
            invest.getInvestHistoryData().then(function (data) {
                // console.log(data);
                $scope.orderHistory = data.data;
                $scope.orders = data.data.records;

                $scope.$broadcast('hideLoadingImg');
            });
            
        }

        // 显示/隐藏自主交易历史订单
        function showOrders() {
            if ($scope.orderHistory.detailsShow) {
                $scope.orderHistory.detailsShow = false;
            } else {
                $scope.orderHistory.detailsShow = true;
            }
        }

        // 获取 copied traders 列表
        function getInvestHistoryTraders() {
            invest.getInvestHistoryTraders().then(function (data) {
                if (!data) return;
                // console.info(data);
                $scope.traders = data.data;
                angular.forEach($scope.traders, function (value, key) {
                    $scope.traders[key].detailsShow = false;
                });
            });
        }

        // 显示/隐藏 copied traders 列表的详情（复制交易历史订单）
        function showDetails(trader) {

            if (nowTrader.usercode && nowTrader.usercode !== trader.usercode) {
                nowTrader.detailsShow = false;
            }
            nowTrader = trader;

            if (trader.detailsShow) {
                trader.detailsShow = false;
            } else {
                trader.detailsShow = true;
                nowTrader.notFirstLoad = false;
                getInvestHistoryDetails();
            }
        }

        function getInvestHistoryDetails (page) {
            page = page ? page : 1;
            var offset = (page-1)*pagesize;

            invest.getInvestHistoryDetails(nowTrader.user_code, offset, pagesize).then(function (data) {
                nowTrader.notFirstLoad = true;
                // console.info(data);
                nowTrader.orders = data.data.records;

                angular.extend($scope.pagebar.config, {
                    total: getTotal(data.data.record_count, pagesize),
                    page: page
                });
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

        function openInvestOwnDetailMdl (event) {
            event.stopPropagation();
            event.stopImmediatePropagation();

            $modal.open({
                templateUrl: '/views/invest/invest_detail_modal.html',
                size: 'lg',
                backdrop: true,
                controller: function ($scope, invest, $modalInstance) {
                    
                    $scope.details = [];        // 交易详情 弹窗数据
                    $scope.modal = {
                        price: '平仓价',
                        asset: '投入资金',
                        usage : "history", //历史要做一些细节修改：平仓类型，时间
                    };
                    $scope.closeModal = closeModal;
                    
                    invest.getInvestHistoryData().then(function (data) {
                        // console.info(data);
                        $scope.$broadcast('hideLoadingImg');
                        $scope.details = data.data.records;
                        $scope.modal.show = true;
                    });
                    
                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }

        function openInvestCopyDetailMdl (trader, event) {
            var usercode = trader.usercode;
            event.stopPropagation();
            event.stopImmediatePropagation();

            nowTrader.detailsShow = false;

            $modal.open({
                templateUrl: '/views/invest/invest_detail_modal.html',
                size: 'lg',
                backdrop: true,
                controller: function ($scope, invest, $modalInstance) {

                    $scope.details = [];        // 交易详情 弹窗数据
                    $scope.modal = {
                        price: '平仓价',
                        asset: '投入资金',
                        usage : "history", //历史要做一些细节修改：平仓类型，时间
                        pageBar: true
                    };
                    $scope.pagebar = {
                        config: {
                            total: 1, // 总页数
                            page: 1    
                        },
                        pages: [],
                        pagesBtn: [],
                        // selectPage: , bind to pagination.selectPage
                        getList: getInvestHistoryDetailsMdl          
                    };

                    $scope.closeModal = closeModal;

                    getInvestHistoryDetailsMdl();
                    
                    function getInvestHistoryDetailsMdl (page) {
                        page = page ? page : 1;
                        var offset = (page-1)*pagesize;
                        $scope.$broadcast('showLoadingImg');

                        invest.getInvestHistoryDetails(trader.user_code, offset, pagesize).then(function (data) {
                            // console.info(data);
                            $scope.$broadcast('hideLoadingImg');
                            $scope.details = data.data.records;
                            $scope.modal.show = true;

                            angular.extend($scope.pagebar.config, {
                                total: getTotal(data.data.record_count, pagesize),
                                page: page
                            });
                        }); 
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }
    }
})();