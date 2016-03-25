;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingVerifyController', SettingVerifyController);

    SettingVerifyController.$inject = ['$scope', '$modal', 'validator', 'account'];

    function SettingVerifyController($scope, $modal, validator, account) {
        $scope.verification = {
            realname: undefined,
            id: {
                // number: ,
                frontStatus: 0,
                backStatus: 0
            }
        };
        $scope.frontErr = {
            realname: {
                show: false,
                reg: validator.regType.realname.reg
            },
            idFront: {
                show: false
            },
            idBack: {
                show: false
            }
        };

        $scope.backErr = {
            system: {
                show: false,
                status: 0
            }
        }
        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.submitForm = submitForm;
        $scope.goNextStep = goNextStep;
        $scope.clickable = true;

        var parentScope = $scope.$parent;

        $scope.$on('uploadIdCardStart', function (event, data) {
            $scope.$apply(function () {
                $scope.verification.id[data.face + 'Status'] = 1;
            });
        });

        $scope.$on('uploadIdCardSuccess', function (event, data) {
            $scope.$apply(function () {
                $scope.verification.id[data.face + 'Status'] = 2;
            });
        });

        $scope.$on('uploadIdCardFail', function (event, data) {
            $scope.$apply(function () {
                $scope.verification.id[data.face + 'Status'] = 3;
            });
        });

        function hideErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = false;
            }
        }

        function showErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = true;
            }
        }

        function submitForm(formName) {
            console.info($scope.$$childHead[formName]);
            showErr(formName, 'realname');
            showErr(formName, 'idFront');
            showErr(formName, 'idBack');

            
            if ($scope[formName].$invalid || 
                    $scope.verification.id.frontStatus !== 2 ||
                    $scope.verification.id.backStatus !== 2) {
                return;
            }

            $scope.clickable = false;
            account.verify($scope.verification.realname).then(function (data) {

                if (data.is_succ) {
                    // if (typeof $scope.step !== 'undefined') {
                    //     goNextStep();
                    // }
                    $scope.backErr.system.status = 1;
                    $scope.backErr.system.show = true;
                    $scope.clickable = true;
                } else {
                    $scope.clickable = true;
                }
            });
        }

        function goNextStep() {
            parentScope.step++;
        }
    }
})();