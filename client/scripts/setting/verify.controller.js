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
            status: 0, // 实名认证状态
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
        };
        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.submitForm = submitForm;
        $scope.goNextStep = goNextStep;
        $scope.readyToUpload = {};
        $scope.uploadFinish = {};
        $scope.clickable = true;

        // 实名认证功能的位置：注册或者 setting
        if ($state.current.name === 'space.setting.subpage') {
            $scope.type = 'setting';
        }

        getVerifyStatus();

        $scope.$on('saveFile', function (event, data) {
            $scope.$apply(function () {
                $scope.verification.id[data.target.face + 'Status'] = 0;
                hideErr('', 'idFront');
                hideErr('', 'idBack');
                /*去重*/
                if (data.target.face == 'front') {
                    $scope.readyToUpload.front = data.target
                } else {
                    $scope.readyToUpload.back = data.target
                }
                console.log($scope.readyToUpload);
            });
        });

        $scope.$on('uploadIdCardStart', function (event, data) {
            $scope.verification.id[data.face + 'Status'] = 1;
            // $scope.$apply(function () {
            //     $scope.verification.id[data.face + 'Status'] = 1;
            // });
        });

        $scope.$on('uploadIdCardSuccess', function (event, data) {
            $scope.uploadFinish[data.face] = true;
            $scope.$apply(function () {
                $scope.verification.id[data.face + 'Status'] = 2;
            });
            if ($scope.uploadFinish.hasOwnProperty('front') &&
                $scope.uploadFinish.hasOwnProperty('back') &&
                ($scope.backErr.system.status != 3)
            ) {
                // 上传名字  
                account.verify($scope.verification.realname).then(function (data) {
                    if (data.is_succ) {
                        $scope.backErr.system.status = 1;
                        $scope.backErr.system.show = true;

                        // 神策数据统计
                        sa.track('btn_verify');

                        if ($scope.type === 'setting') {
                            getVerifyStatus();
                        } else {
                            goNextStep();
                        }

                    } else {
                        $scope.backErr.system.show = true;
                        $scope.clickable = true;
                        $scope.backErr.system.status = 3;
                        $scope.backErr.system.error_msg = data.error_msg;
                    }
                });


            }
        });

        function goNextStep() {
            if ($scope.progress) {
                $scope.progress.step++;
            }
        }

        $scope.$on('uploadIdCardFail', function (event, data) {
            $scope.$apply(function () {
                $scope.verification.id[data.face + 'Status'] = 3;
            });
        });

        function getVerifyStatus() {
            account.getVerifyStatus().then(function (data) {
                $scope.$broadcast("hideLoadingImg");
                if (!data) return;
                if (data.is_succ) {
                    data = data.data;

                    $scope.verification.status = data.profile_check || 0;
                    $scope.verification.realname = data.realname || undefined;
                    $scope.verification.id.number = data.id_no;
                }
            });
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
            console.log($scope.readyToUpload);
            if (!$scope.verification.realname) {
                showErr(formName, 'realname');
                return
            }

            if (!$scope.readyToUpload.hasOwnProperty('front')) {
                showErr(formName, 'idFront');
                return
            }
            if (!$scope.readyToUpload.hasOwnProperty('back')) {
                showErr(formName, 'idBack');
                return
            }

            /*遍历对象上传图片*/
            angular.forEach($scope.readyToUpload, function (data, index, array) {
                data.submit();
            });

            $scope.clickable = false;

        }


    }
})();