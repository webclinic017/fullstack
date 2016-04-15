;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('BonusHistoryController', BonusHistoryController);

    BonusHistoryController.$inject = ['$scope', '$modal', 'utils', 'asset'];

    function BonusHistoryController($scope, $modal, utils, asset) {

        $scope.datepicker = {
            // date: ,
            options: {
                format: 'YYYY-MM'
            }
        };
        $scope.bonusSummary = {};
        $scope.bonusList = [];
        $scope.pagebar = {
            config: {
                // total: , 总页数
                size: 3,
                page: 1
            },
            pages: [],
            //selectPage: , bind to pagination.selectPage
            getList: getList
        };

        $scope.search = search;
        $scope.openDetailMdl = openDetailMdl;

        var pagesize = 10;

        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        var dateString = year + '-' + month;
        $scope.datepicker.date = dateString;

        asset.getBonus().then(function (data) {
            $scope.bonusSummary = data;
            // console.info(data);
            $scope.bonusSummary.history_bonus = (($scope.bonusSummary.all_bonus * 100 -
                    $scope.bonusSummary.month_bonus * 100) / 100).toFixed(2);
        });


        getList(1);
        // 获取分成列表
        function getList(page) {
            $scope.$broadcast('showLoadingImg');

            asset.getBonusList(page, pagesize, $scope.datepicker.date).then(function (data) {
                $scope.bonusList = data.data;

                angular.extend($scope.pagebar.config, {
                    total: utils.getTotal(data.data.length, pagesize),
                    page: page
                });

                $scope.$broadcast('hideLoadingImg');
            });
        }

        // 根据日期查询分成信息
        function search() {
            getList(1);
        }

        // open detail modal
        function openDetailMdl(copierUsercode) {
            $modal.open({
                templateUrl: '/views/bonus/history_modal.html',
                size: 'lg',
                controller: 'BonusModalController',
                resolve: {
                    passedScope: function () {
                        return {
                            copierUsercode: copierUsercode,
                            date: $scope.datepicker.date
                        }
                    }
                }
            });
        }

    }
})();
