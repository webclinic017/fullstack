;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingKycController', SettingKycController);

    SettingKycController.$inject = ['$scope'];

    function SettingKycController($scope) {
        $scope.questions = [
            {
                id: '01',
                title: '您的交易经验如何？',
                options: ['少于 1 年', '1-3 年', '3-6 年', '6 年以上'],
                answer: undefined
            }, {
                id: '02',
                title: '您在哪些市场进行过交易？',
                options: ['股票', '期货', '银行理财', '衍生品'],
                answer: undefined
            }, {
                id: '03',
                title: '对于每年在此的投资，哪个风险/获利情景最符合您的期望？',
                options: ['高风险，高收益', '中风险，中收益', '低风险，低收益'],
                answer: undefined
            }
        ];

        $scope.option = {}
    }
})();