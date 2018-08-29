;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestHistoryController', InvestHistoryController);

    InvestHistoryController.$inject = ['$scope', 'invest', '$modal', '$state'];

    function InvestHistoryController($scope, invest, $modal, $state) {
        $scope.orderHistory = {};      // 自主交易历史订单概况
        $scope.orders = [];             // 自主交易历史订单
        $scope.traders = [];            // copied traders 列表
        $scope.showOrders = showOrders;
        $scope.showDetails = showDetails;
        $scope.openInvestOwnDetailMdl = openInvestOwnDetailMdl;
        $scope.openInvestCopyDetailMdl = openInvestCopyDetailMdl;

        $scope.$watch('investSelect.id', function(n){
            if(!n) return;
            $scope.$broadcast('showLoadingImg');
            if($scope.investSelect.type == 2){
                $scope.orderHistory = {}; // 当前自主交易订单
                $scope.orders = [];  // 自主交易持仓订单详情
                getInvestHistoryTraders();
            }else{
                $scope.traders = [];   // 复制交易持仓订单
                getInvestHistoryData();
            }
        })
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


        function getInvestHistoryData () {
            invest.getInvestHistoryData($scope.investSelect.id).then(function (data) {
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
            invest.getInvestHistoryTraders($scope.investSelect.id).then(function (data) {
                if (!data) return;
                // console.info(data);
                $scope.traders = data.data;
                angular.forEach($scope.traders, function (value, key) {
                    $scope.traders[key].detailsShow = false;
                });
                $scope.$broadcast('hideLoadingImg');
            });
        }

        // 显示/隐藏 copied traders 列表的详情（复制交易历史订单）
        function showDetails(trader) {

            if (nowTrader.account_code && nowTrader.account_code !== trader.account_code) {
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

            invest.getInvestHistoryDetails(nowTrader.account_code, offset, pagesize, $scope.investSelect.id).then(function (data) {
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
                resolve: {
                    mt4_id: function() { return $scope.investSelect.id }
                },
                controller: function ($scope, invest, $modalInstance, mt4_id, lang) {
                    
                    $scope.lang = lang;
                    $scope.details = [];        // 交易详情 弹窗数据
                    $scope.modal = {
                        price: lang.text("tigerWitID.historyTransactions.closePrice"),
                        asset: lang.text("tigerWitID.historyTransactions.margin"),
                        usage : "history", //历史要做一些细节修改：平仓类型，时间
                    };
                    $scope.closeModal = closeModal;
                    
                    invest.getInvestHistoryData(mt4_id).then(function (data) {
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
            var account_code = trader.account_code;
            event.stopPropagation();
            event.stopImmediatePropagation();

            nowTrader.detailsShow = false;

            $modal.open({
                templateUrl: '/views/invest/invest_detail_modal.html',
                size: 'lg',
                backdrop: true,
                resolve: {
                    mt4_id: function() { return $scope.investSelect.id }
                },
                controller: function ($scope, invest, $modalInstance, mt4_id, lang) {

                    $scope.lang = lang;
                    $scope.details = [];        // 交易详情 弹窗数据
                    $scope.modal = {
                        price: lang.text("tigerWitID.historyTransactions.closePrice"),
                        asset: lang.text("tigerWitID.historyTransactions.margin"),
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

                        invest.getInvestHistoryDetails(trader.account_code, offset, pagesize, mt4_id).then(function (data) {
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