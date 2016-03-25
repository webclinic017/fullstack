;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingKycController', SettingKycController);

    SettingKycController.$inject = ['$scope', '$state', '$timeout', 'account'];

    function SettingKycController($scope, $state, $timeout, account) {
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

        $scope.tip = {
            questions: {
                show: false,
                msg: undefined,
            },
            system: {
                show: false,
                status: 0
            }
        };
        $scope.clickable = true;
        $scope.selectOption = selectOption;
        $scope.submitForm = submitForm;
        $scope.goNextStep = goNextStep;
        var results = [];

        if ($state.current.name === 'space.setting.subpage') {
            $scope.type = 'setting';
        }

        if ($scope.type === 'setting') {
            getKyc();
        }

        angular.forEach($scope.questions, function (question) {
            results.push({
                id: question.id,
                answer: question.answer
            });
        });

        function selectOption(question) {
            $scope.tip.questions.show = false;
            $scope.tip.questions.msg = undefined;

            angular.forEach(results, function (result) {
                if (result.id === question.id) {
                    result.answer = question.answer;
                }
            });
        }

        function submitForm() {
            var isBreak = false;
            angular.forEach(results, function (result, index) {
                if (isBreak) {
                    return;
                } 
                
                if (!result.answer) {
                    $scope.tip.questions.show = true;
                    $scope.tip.questions.msg = '请完成第 ' + (index + 1) + ' 题';
                    isBreak = true;
                } else {
                    $scope.tip.questions.show = false;
                    $scope.tip.questions.msg = undefined;
                }
            });

            if ($scope.tip.questions.msg) {
                return;
            }
            console.log(results);

            $scope.clickable = false;
            $timeout(function () {
                $scope.tip.system.show = true;
                $scope.tip.system.status = 1;
                
                if ($scope.type === 'setting') {
                    $scope.clickable = true;
                    $timeout(function () {
                        $scope.tip.system.show = false;
                        $scope.tip.system.status = 0;
                    }, 3000);
                } else {
                    goNextStep();
                }
            }, 3000);
        }

        function getKyc() {
        }

        function goNextStep() {
            if ($scope.progress) {
                $scope.progress.step++;    
            }
        }
    }
})();