;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('BonusIndexController', BonusIndexController);

    BonusIndexController.$inject = ['$scope', 'asset'];

    function BonusIndexController($scope, asset) {
        
        $scope.bonusInfo = {
            bonus: {
                key: undefined,
                value: undefined
            }
        };
        $scope.bonusList = [
            {
                key: "上月分成",
                value: "current"
            },
            {
                key: "历史明细",
                value: "history"
            }
        ];
        $scope.currentList = [
            {
                username: "哈哈哈啦啦",
                bonus: 11112.22,
                date: "2016/07/01 07:22:10",
                detail: {}
            }
        ];
        $scope.historyList = [
            {
                bonus: 412.22,
                date: "2016年8月"
            },
            {
                bonus: 11112.22,
                date: "2016年7月"
            }
        ];

        getData();
        
        function getData (value) {
            value = value ? value : 'current';
            var key = value == 'current' ? '上月分成' : '历史明细';

            $scope.bonusInfo = {
                bonus: {
                    key: key,
                    value: value
                }
            };
        }
    }
})();
