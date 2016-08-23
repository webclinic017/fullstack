;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('BonusIndexController', BonusIndexController);

    BonusIndexController.$inject = ['$scope', 'asset'];

    function BonusIndexController($scope, asset) {

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
        
        getMasterBonusSummary();
        getCopierBonusSummary();
        // getMasterBonusList();
        
        function getMasterBonusSummary () {
            asset.getMasterBonusSummary().then(function (data) {
                // console.info(data);
                if (data.is_succ) {
                    $scope.masterSummary = data.data;
                }
            });
        }

        function getCopierBonusSummary () {
            asset.getCopierBonusSummary().then(function (data) {
                // console.info(data);
                if (data.is_succ) {
                    $scope.copierSummary = data.data;
                }
            });
        }

        function getMasterBonusList () {
            asset.getMasterBonusList($scope.datepicker.date).then(function (data) {
                console.info(data);
            });
        }
    }
})();
