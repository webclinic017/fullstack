;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingVerifyController', SettingVerifyController);

    SettingVerifyController.$inject = ['$scope', '$state', '$modal', 'validator', 'account'];

    function SettingVerifyController($scope, $state, $modal, validator, account) {
        $scope.verification = {
            realname: undefined,
            status: 0,           // 实名认证状态
            id: {
                number: undefined,
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

        // 实名认证功能的位置：注册或者 setting
        if ($state.current.name === 'space.setting.subpage') {
            $scope.type = 'setting';
        }

        getVerifyStatus($scope.type);

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

        function getVerifyStatus(type) {
            if (type === 'setting') {
                account.getVerifyStatus().then(function (data) {
                    $scope.verification.status = data.status;
                    // $scope.verification.status = 1;
                    $scope.verification.realname = data.realname || undefined;
                    $scope.verification.id.number = data.idNumber;
                });    
            }
        }

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

                    getVerifyStatus($scope.type);
                    goNextStep($scope.type);
                    
                } else {
                    $scope.clickable = true;
                }
            });
        }

        function goNextStep(type) {
            if (!type && $scope.progress) {
                $scope.progress.step++;    
            }
        }
    }
})();