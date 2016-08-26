;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('BonusIndexController', BonusIndexController);

    BonusIndexController.$inject = ['$scope', 'asset', '$modal'];

    function BonusIndexController($scope, asset, $modal) {

        $scope.success = false;
        $scope.backErr = {
            msg: ''
        };
        $scope.masterSummary = {};
        $scope.copierSummary = {};
        $scope.masterList = [];
        $scope.copierList = [];
        
        var date = new Date();
        var year = date.getFullYear();
        var lastMonth = date.getMonth();
        var month = date.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        if (lastMonth < 10) {
            lastMonth = '0' + lastMonth;
        }
        var endDateString = year + '-' + month;
        var dateString = year + '-' + lastMonth;
        
        $scope.datepicker = {
            date: dateString,
            options: {
                format: 'YYYY-MM',
                date: dateString,
                // endDate: endDateString,
            }
        };

        $scope.getBonusList = getBonusList;
        $scope.openBonusDetailMdl = openBonusDetailMdl;
        
        function getMasterBonusSummary () {
            asset.getMasterBonusSummary().then(function (data) {
                console.info(22, data);
                if (data && data.is_succ) {
                    $scope.masterSummary = data.data;
                }
            });
        }

        function getCopierBonusSummary () {
            asset.getCopierBonusSummary().then(function (data) {
                console.info(11, data);
                if (data && data.is_succ) {
                    $scope.copierSummary = data.data;
                }
            });
        }

        function getBonusList () {
            var watch = $scope.$watch('personal.master', function (newVal, oldVal, scope) {
                console.info(333);
                if (newVal !== oldVal) {
                    if (newVal) {
                        console.info(4444);
                        getMasterBonusSummary();
                        getMasterBonusList();
                        $scope.getBonusList = getMasterBonusList;
                    } else {
                        console.info(555);
                        getCopierBonusSummary();
                        getCopierBonusList();
                        $scope.getBonusList = getCopierBonusList;
                    }
                    watch();
                }
            });
            
        }

        function getMasterBonusList () {
            asset.getMasterBonusList($scope.datepicker.date).then(function (data) {
                console.info(2, data);
            });
        }

        function getCopierBonusList () {
            $scope.copierList = [];
            $scope.success = false;
            $scope.backErr = {
                msg: ''
            };
            asset.getCopierBonusList($scope.datepicker.date).then(function (data) {
                console.info(1, data);
                $scope.success = true;
                if (data && data.is_succ) {
                    $scope.copierList = data.data;

                    var total = 0;
                    angular.forEach($scope.copierList, function (value, index) {
                        total += value.pay_noob;
                    });
                    $scope.totalPay = total;
                } else {
                    $scope.backErr.msg = data.error_msg;
                }
            });
        }

        function openBonusDetailMdl (trader) {
            $modal.open({
                templateUrl: '/views/bonus/detail_modal.html',
                size: 'lg',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    
                    $scope.success = false;
                    $scope.username = trader.username;
                    $scope.details = [];

                    $scope.closeModal = closeModal;

                    getBonusDetailList();

                    function closeModal() {
                        $modalInstance.dismiss();
                    }

                    function getBonusDetailList () {
                        asset.getBonusDetailList(trader.ticket_noob, trader.mt4_from, trader.mt4_to).then(function (data) {
                            console.info(data);
                            $scope.success = true;
                            if (data.is_succ) {
                                $scope.details = data.data.trade_list;
                                $scope.total = {
                                    sum_profit: data.data.sum_profit,
                                    pay_noob: data.data.pay_noob
                                };
                            }
                        });
                    }
                }
            });
        }

        
    }
})();
