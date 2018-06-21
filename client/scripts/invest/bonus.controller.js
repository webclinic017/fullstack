;
(function() {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestBonusController', InvestBonusController);

        InvestBonusController.$inject = ['$scope', 'asset', '$modal', '$timeout'];

    function InvestBonusController($scope, asset, $modal, $timeout) {

        $scope.success = false;
        $scope.backErr = {
            msg: ''
        };
        $scope.masterSummary = {};  // 高手分成总计
        $scope.copierSummary = {};
        $scope.masterList = [];   // 高手复制列表
        $scope.copierList = [];
        $scope.pagebar = {
            config: {
                // total: , // 总页数
                page: 1    
            },
            pages: [],
            pagesBtn: []    
        };

        var date = new Date();
        var year = date.getFullYear();
        var lastMonth = date.getMonth();
        var month = date.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        // console.log(lastMonth);
        if (lastMonth == 0) {
            year--;
            lastMonth = 12;
        } else if (lastMonth < 10) {
            lastMonth = '0' + lastMonth;
        }
        var dateString = year + '-' + month;
        var lastDateString = year + '-' + lastMonth;
        var pagesize = 10;
        $scope.datepickerMaster = {
            date: lastDateString,
            options: {
                format: 'YYYY-MM',
                date: lastDateString,
                // endDate: endDateString,
            }
        };
        $scope.datepickerCopier = {
            date: lastDateString,
            options: {
                format: 'YYYY-MM',
                date: lastDateString,
                // endDate: endDateString,
            }
        };
        // 不是高手或跟单账号跳转
        $scope.$watch('investSelect.type',function(n){
            if(n === '') return;
            if(n != 3 && n != 2){
                $state.go('space.center.invest.subpage', {subpage: 'current'})
            }

        })
        // 监听账号类型
        $scope.$watch('investSelect.id', function(n){
            if(n === '') return;
            if($scope.investSelect.type == 3){
                getMasterBonusList();
                getMasterBonusSummary();
            }else if($scope.investSelect.type == 2){
                getCopierBonusList();
                getCopierBonusSummary();
            }

        })

        $scope.getMasterBonusList = getMasterBonusList;
        $scope.getCopierBonusList = getCopierBonusList;
        $scope.openBonusDetailMdl = openBonusDetailMdl;

        function getMasterBonusSummary() {
            asset.getMasterBonusSummary($scope.investSelect.id).then(function(data) {
                // console.log(data);
                if (data && data.is_succ) {
                    $scope.masterSummary = data.data;
                }
            });
        }

        function getCopierBonusSummary() {
            asset.getCopierBonusSummary($scope.investSelect.id).then(function(data) {
                // console.log(data);
                if (data && data.is_succ) {
                    $scope.copierSummary = data.data;
                }
            });
        }

        function getMasterBonusList(page) {
            page = page ? page : 1;
            var offset = (page - 1)*pagesize;
            $scope.masterList = [];
            $scope.success = false;
            $scope.backErr = {
                msg: ''
            };
            asset.getMasterBonusList($scope.investSelect.id,$scope.datepickerMaster.date, offset, pagesize).then(function(data) {
                // console.info(2, data);
                $scope.success = true;
                if (!data) return;
                if (data && data.is_succ) {
                    $scope.masterList = data.data.records;

                    angular.extend($scope.pagebar.config, {
                        total: data.data.page_count,
                        page: page
                    });
                } else {
                    $scope.backErr.msg = data.message;
                }
            });
        }

        function getCopierBonusList(page) {
            page = page ? page : 1;
            var offset = (page - 1)*pagesize;
            $scope.copierList = [];
            $scope.success = false;
            $scope.backErr = {
                msg: ''
            };
            asset.getCopierBonusList($scope.investSelect.id,$scope.datepickerCopier.date, offset, pagesize).then(function(data) {
                // console.info(1, data);
                $scope.success = true;
                if (!data) return;
                if (data && data.is_succ) {
                    $scope.copierList = data.data.records;

                    angular.extend($scope.pagebar.config, {
                        total: data.data.page_count,
                        page: page
                    });
                } else {
                    $scope.backErr.msg = data.message;
                }
            });
        }

        function openBonusDetailMdl(trader) {
            $modal.open({
                templateUrl: '/views/bonus/detail_modal.html',
                size: 'lg',
                backdrop: true,
                controller: function($scope, $modalInstance) {

                    $scope.success = false;
                    $scope.username = trader.username;
                    $scope.details = [];

                    $scope.closeModal = closeModal;

                    getBonusDetailList();

                    function closeModal() {
                        $modalInstance.dismiss();
                    }

                    function getBonusDetailList() {
                        asset.getBonusDetailList(trader.ticket_noob, trader.mt4_from, trader.mt4_to).then(function(data) {
                            // console.info(data);
                            $scope.success = true;
                            if (data.is_succ && data.data) {
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
