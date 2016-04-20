;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingKycController', SettingKycController);

    SettingKycController.$inject = ['$scope', '$state', '$timeout', 'account'];

    function SettingKycController($scope, $state, $timeout, account) {
        $scope.questions = [];

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
        var kycInfo = {};

        if ($state.current.name === 'space.setting.subpage') {
            $scope.type = 'setting';
        }

        getKyc();
        
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
            // console.log(results);

            if ($scope.tip.questions.msg) {
                return;
            }
            angular.forEach(results, function (data, index) {
                kycInfo[data["id"]] = data.answer;
            });
            $scope.clickable = false;

            account.setKyc(kycInfo).then(function (data) {
                // console.info(data);
                if (data.error_code === 0) {
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
                } else if (data.error_code === 1) {
                    $scope.tip.system.show = true;
                    $scope.tip.system.status = 2;
                    
                    if ($scope.type === 'setting') {
                        $scope.clickable = true;
                        $timeout(function () {
                            $scope.tip.system.show = false;
                            $scope.tip.system.status = 0;
                        }, 3000);
                    } else {
                        goNextStep();
                    }
                } else if (data.error_code === 2) {
                    $scope.tip.system.show = true;
                    $scope.tip.system.status = 3;
                    
                    if ($scope.type === 'setting') {
                        $scope.clickable = true;
                        $timeout(function () {
                            $scope.tip.system.show = false;
                            $scope.tip.system.status = 0;
                        }, 3000);
                    } else {
                        goNextStep();
                    }
                }
            });
            
        }

        function getKyc() {
            account.getKyc().then(function (data){
                $scope.$broadcast("hideLoadingImg");
                // console.info(data);
                angular.forEach(data.data, function (data, index, array) {
                    var json = {};
                    json["id"] = index;
                    json["data"] = data;
                    json["answer"] = undefined;
                    json["title"] = data["title"];
                    $scope.questions.push(json);
                });

                angular.forEach($scope.questions, function (question) {
                    results.push({
                        id: question.id,
                        answer: question.answer
                    });
                });
            });
        }

        function goNextStep() {
            if ($scope.progress) {
                $scope.progress.step++;    
            }
        }
    }
})();