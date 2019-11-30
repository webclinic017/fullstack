;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestCurrentController', InvestCurrentController);

    InvestCurrentController.$inject = ['$scope', 'invest', 'trader', '$timeout', '$modal', '$state'];

    function InvestCurrentController($scope, invest, trader, $timeout, $modal, $state) {
        $scope.orderCurrent = {}; // 当前自主交易订单
        $scope.orders = [];  // 自主交易持仓订单详情
        $scope.from_data = [];  // 复制持仓单
        $scope.traders = [];   // 复制交易持仓订单
        $scope.modal = {};
        $scope.showOrders = showOrders;
        $scope.showDetails = showDetails;
        $scope.openCopyMdl = openCopyMdl;
        $scope.openCancelCopyMdl = openCancelCopyMdl;
        $scope.openInvestCopyDetailMdl = openInvestCopyDetailMdl;
        $scope.openInvestOwnDetailMdl = openInvestOwnDetailMdl;
        // var avaCopyAmount;
        $scope.$watch('investSelect.id', function(n){
            if(!n) return;
            typeGetList();
        })
        function typeGetList(){
            $scope.$broadcast('showLoadingImg');
            if($scope.investSelect.type == 2){
                $scope.orderCurrent = {}; // 当前自主交易订单
                $scope.orders = [];  // 自主交易持仓订单详情
                getTraders();
            }else{
                $scope.from_data = [];  // 复制持仓单
                $scope.traders = [];   // 复制交易持仓订单
                getData();
            }
        }
        // getAvaCopyAmount();

        // 获取自主交易持仓订单和订单概况
        function getData() {
            invest.getInvestCurrentData($scope.investSelect.id).then(function (data) {
                // console.log(data);
                if (!data) return;
                if (data.is_succ) {
                    data = data.data;
                    $scope.orders = data.records;
                    angular.extend($scope.orderCurrent, data);

                    $scope.$broadcast('hideLoadingImg');
                }
            });
        }

        function getTraders() {
            invest.getInvestCurrentTraders($scope.investSelect.id).then(function (data) {
                $scope.$broadcast('hideLoadingImg');
                if (!data) return;
                // console.info(data);
                if (data.is_succ) {
                    if (data.data.length <= 0) {
                        $scope.traders = [];
                        return;
                    }

                    $scope.from_data = data.data.uncopy_masters;
                    $scope.traders = data.data.copying_masters;
                    // console.log($scope.traders);
                }
            });
        }

        // 显示/隐藏自主交易历史订单
        function showOrders() {
            if ($scope.orderCurrent.detailsShow) {
                $scope.orderCurrent.detailsShow = false;
            } else {
                $scope.orderCurrent.detailsShow = true;
            }
        }

        // 显示或者隐藏 copied trader 的详情（复制交易持仓订单）
        function showDetails(trader) {
            if (trader.detailsShow) {
                trader.detailsShow = false;
            } else {
                // $scope.$emit('showLoadingImg');
                trader.detailsShow = true;
                getDetails(trader);
            }
        }

        // 获取 copied traders 列表的详情（复制交易持仓订单）
        function getDetails(trader) {
            invest.getInvestCurrentDetails(trader.account_code, $scope.investSelect.id).then(function (data) {
                trader.notFirstLoad = true;
                trader.orders = data.data || [];
            });
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
                        // trader.copied = trader.copy_asset;
                        trader.minCopyAmount = trader.min_copy_amount;
                        // console.log(trader)
                        return {
                            copiedTrader: trader,
                            title: 'modify',
                            callBack: function(amount){
                                trader.copy_amount = amount;
                            }
                        }
                    }
                }
            });
        }

        function openCancelCopyMdl(trader, event) {
            event.stopPropagation();
            event.stopImmediatePropagation();

            $modal.open({
                templateUrl: '/views/invest/cancel_copy_modal.html',
                controller: 'TraderCopyCancelController',
                size: 'sm',
                backdrop: true,
                resolve: {
                    passedScope: function () {
                        return {
                            account_code: trader.account_code,
                            username: trader.username,
                            callBack: function(){
                                typeGetList()
                            }
                        }
                    }
                }
            });
        }

        function openInvestOwnDetailMdl(type, event) {
            event.stopPropagation();
            event.stopImmediatePropagation();
            var mt4_id = $scope.investSelect.id;

            $modal.open({
                templateUrl: '/views/invest/invest_detail_modal.html',
                size: 'lg',
                backdrop: true,
                controller: function ($scope, invest, $modalInstance, lang) {
                    $scope.lang = lang;

                    $scope.details = [];        // 交易详情 弹窗数据
                    $scope.modal = {
                        price: lang.text("tigerWitID.details.currentPrice"),
                        asset: lang.text("tigerWitID.details.fundsOccupying")
                    };
                    $scope.follow_master = type === 'own' ? false : true;
                    $scope.closeModal = closeModal;

                    invest.getInvestCurrentData(mt4_id).then(function (data) {
                        console.info(data);
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

        function openInvestCopyDetailMdl(trader, event) {
            var account_code = trader.account_code;
            var mt4_id = $scope.investSelect.id;
            event.stopPropagation();
            event.stopImmediatePropagation();

            $modal.open({
                templateUrl: '/views/invest/invest_detail_modal.html',
                size: 'lg',
                backdrop: true,
                controller: function ($scope, invest, $modalInstance, lang) {
                    $scope.lang = lang;

                    $scope.details = [];        // 交易详情 弹窗数据
                    $scope.modal = {
                        price: lang.text("tigerWitID.details.currentPrice"),
                        asset: lang.text("tigerWitID.details.fundsOccupying")
                    };
                    $scope.closeModal = closeModal;

                    invest.getInvestCurrentDetails(account_code, mt4_id).then(function (data) {
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