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

        // 获取分成上方概况
        asset.getBonus().then(function (data) {
            $scope.bonusSummary = data.data;
            // console.info(data);
        });


        getBonusList();

        // 获取我的分成列表
        function getBonusList (date) {
            asset.getBonusList($scope.datepicker.date).then(function (data) {
                $scope.$broadcast('showLoadingImg');

                $scope.bonusList = data.data;
                // console.info(data.data.length);
                
                $scope.$broadcast('hideLoadingImg');

            });
        }

        function search() {
            getBonusList($scope.datepicker.date);
        }


        // open detail modal
        function openDetailMdl(usercode) {
            $modal.open({
                templateUrl: '/views/bonus/history_modal.html',
                size: 'lg',
                controller: 'BonusModalController',
                resolve: {
                    passedScope: function () {
                        return {
                            usercode: usercode,
                            date: $scope.datepicker.date
                        }
                    }
                }
            });
        }

    }
})();
