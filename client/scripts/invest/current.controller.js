;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestCurrentController', InvestCurrentController);

    InvestCurrentController.$inject = ['$scope', 'invest', 'trader', '$timeout', '$modal', '$state'];

    function InvestCurrentController($scope, invest, trader, $timeout, $modal, $state) {
        $scope.orderCurrent = {};
        $scope.orders = [];
        $scope.from_data = [];
        $scope.traders = [];
        $scope.modal = {};
        $scope.showOrders = showOrders;
        $scope.showFromOrders = showFromOrders;
        $scope.showDetails = showDetails;
        $scope.from_orders_profit = 0;
        $scope.fromDetailsShow = false;
        $scope.openCopyMdl = openCopyMdl;
        $scope.openCancelCopyMdl = openCancelCopyMdl;
        $scope.openInvestCopyDetailMdl = openInvestCopyDetailMdl;
        $scope.openInvestOwnDetailMdl = openInvestOwnDetailMdl;

        var dataId;
        var tradersId;
        var detailsId;
        // var avaCopyAmount;

        getData();
        getTraders();
        // getAvaCopyAmount();

        // 只要当前投资的所对应的 state 变cancelCopy化就要 cancel 轮询
        $scope.$on('$stateChangeStart', function (event, toState, toParams) {
            $timeout.cancel(dataId);
            $timeout.cancel(tradersId);
            angular.forEach($scope.traders, function (value, key) {
                $timeout.cancel(value.detailsId);
            });
        });

        // 获取自主交易持仓订单和订单概况
        function getData() {
            invest.getInvestCurrentData().then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    data = data.data;
                    $scope.orders = data.self_trades.records;
                    $scope.from_data = angular.extend(data.uncopy_trades);
                    angular.extend($scope.orderCurrent, data.self_trades);
                    $scope.from_orders_profit = 0;
                    var nProfit = 0;
                    angular.forEach($scope.from_data, function (oData, index) {
                        nProfit += (+oData.profit) || 0;
                    });
                    $scope.from_orders_profit = nProfit.toFixed(2);

                    // $scope.$broadcast('hideLoadingImg');
                }
            });

            dataId = $timeout(function () {
                getData();
            }, 5000);
        }

        function getTraders() {
            invest.getInvestCurrentTraders().then(function (data) {
                $scope.$broadcast('hideLoadingImg');
                if (!data) return;
                // console.info(data);
                if (data.is_succ) {
                    if (data.data.length <= 0) {
                        $scope.traders = [];
                        return;
                    }

                    $scope.traders = data.data;
                    console.log($scope.traders);
                }
            });

            tradersId = $timeout(function () {
                getTraders();
            }, 5000);
        }

        // 显示/隐藏自主交易历史订单
        function showOrders() {
            if ($scope.orderCurrent.detailsShow) {
                $scope.orderCurrent.detailsShow = false;
            } else {
                $scope.orderCurrent.detailsShow = true;
            }
        }
        function showFromOrders() {
            $scope.fromDetailsShow = !$scope.fromDetailsShow;
        }

        // 显示或者隐藏 copied trader 的详情（复制交易持仓订单）
        function showDetails(trader) {
            if (trader.detailsShow) {
                trader.detailsShow = false;
                $timeout.cancel(trader.detailsId);
            } else {
                // $scope.$emit('showLoadingImg');
                trader.detailsShow = true;
                getDetails(trader);
            }
        }

        // 获取 copied traders 列表的详情（复制交易持仓订单）
        function getDetails(trader) {
            invest.getInvestCurrentDetails(trader.user_code).then(function (data) {
                trader.notFirstLoad = true;
                trader.orders = data.data || [];
            });

            trader.detailsId = $timeout(function () {
                getDetails(trader);
            }, 5000);
        }

        // 获取可用复制金额
        // function getAvaCopyAmount() {
        //     trader.getAvaCopyAmount().then(function (data) {
        //         // 本人可用复制金额
        //         avaCopyAmount = data.data.total_available;
        //     });
        // }

        function openCopyMdl(trader, event) {
            event.stopPropagation();
            event.stopImmediatePropagation();
            // console.log(trader);
            // 为了和高手主页复制高手公用一个controller，字段名做统一处理
            trader.copied = trader.copy_amount;
            trader.usercode = trader.user_code;
            $modal.open({
                templateUrl: '/views/invest/copy_modal.html',
                controller: 'TraderCopyController',
                size: 'sm',
                backdrop: true,
                resolve: {
                    passedScope: function () {
                        trader.copied = trader.copy_asset;
                        trader.minCopyAmount = trader.min_copy_amount;
                        return {
                            copiedTrader: trader,
                            // avaCopyAmount: avaCopyAmount
                        }
                    }
                }
            });
        }

        function openCancelCopyMdl(trader, event) {
            var usercode = trader.user_code;
            var username = trader.username;
            event.stopPropagation();
            event.stopImmediatePropagation();

            $modal.open({
                templateUrl: '/views/invest/cancel_copy_modal.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, trader, $modalInstance) {
                    $scope.copyCancel = {
                        username: username,
                        success: false,     // 是否取消复制成功
                        fail: false,
                        failMsg: ''
                    };
                    $scope.clickable = true;
                    $scope.cancelCopy = cancelCopy;
                    $scope.closeModal = closeModal;

                    function cancelCopy(auto_delete) {
                        $scope.clickable = false;

                        trader.cancelCopy(usercode, auto_delete).then(function (data) {
                            // console.info(data);
                            if (data.is_succ) {
                                $scope.copyCancel.success = true;
                                $scope.clickable = true;

                                // $state.go('space.invest.subpage', {
                                //     subpage: 'current'
                                // }, { reload: true });
                            } else {
                                $scope.clickable = true;
                                $scope.copyCancel.fail = true;
                                $scope.copyCancel.failMsg = data.error_msg;

                                $timeout(function () {
                                    $scope.copyCancel.fail = false;
                                    $scope.copyCancel.failMsg = '';
                                }, 3000);
                            }
                        }, function (err) {
                            $scope.clickable = true;
                            $scope.copyCancel.fail = true;
                            $scope.copyCancel.failMsg = '';
                            console.info(err);

                            $timeout(function () {
                                $scope.copyCancel.fail = false;
                            }, 3000);
                        });
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }

        function openInvestOwnDetailMdl(type, event) {
            event.stopPropagation();
            event.stopImmediatePropagation();

            $modal.open({
                templateUrl: '/views/invest/invest_detail_modal.html',
                size: 'lg',
                backdrop: true,
                controller: function ($scope, invest, $modalInstance) {

                    $scope.details = [];        // 交易详情 弹窗数据
                    $scope.modal = {
                        price: '现价',
                        asset: '资金占用'
                    };
                    $scope.follow_master = type === 'own' ? false : true;
                    $scope.closeModal = closeModal;

                    invest.getInvestCurrentData().then(function (data) {
                        console.info(data);
                        $scope.$broadcast('hideLoadingImg');
                        $scope.details = type === 'own' ? data.data.self_trades.records : data.uncopy_trades;
                        $scope.modal.show = true;
                    });

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }

        function openInvestCopyDetailMdl(trader, event) {
            var usercode = trader.user_code;
            event.stopPropagation();
            event.stopImmediatePropagation();

            $modal.open({
                templateUrl: '/views/invest/invest_detail_modal.html',
                size: 'lg',
                backdrop: true,
                controller: function ($scope, invest, $modalInstance) {

                    $scope.details = [];        // 交易详情 弹窗数据
                    $scope.modal = {
                        price: '现价',
                        asset: '资金占用'
                    };
                    $scope.closeModal = closeModal;

                    invest.getInvestCurrentDetails(usercode).then(function (data) {
                        // console.info(data);
                        $scope.$broadcast('hideLoadingImg');
                        $scope.details = data.data;
                        $scope.modal.show = true;
                    });

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }
    }
})();