;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingVerifyController', SettingVerifyController);

    SettingVerifyController.$inject = ['$scope', '$modal', 'validator', 'account'];

    function SettingVerifyController($scope, $modal, validator, account) {
        $scope.step = 1;
        $scope.verification = {
            //realname: ,
            id: {
                //number: ,
                frontImgStatus: 0,
                backImgStatus: 0
            }
        };
        $scope.frontErr = {
            realname: {
                show: false,
                reg: validator.regType.realname.reg
            },
            idFrontImg: {
                show: false
            },
            idBackImg: {
                show: false
            }
        };
        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.submitForm = submitForm;
        $scope.clickable = {
            submit: true
        };

        $scope.$on('uploadImageStart', function (event, data) {
            $scope.$apply(function () {
                $scope.verification.id[data.face + 'ImgStatus'] = 1;
            });
        });

        $scope.$on('uploadImageSuccess', function (event, data) {
            $scope.$apply(function () {
                $scope.verification.id[data.face + 'ImgStatus'] = 2;
            });
        });

        $scope.$on('uploadImageFail', function (event, data) {
            $scope.$apply(function () {
                $scope.verification.id[data.face + 'ImgStatus'] = 3;
            });
        });

        function hideErr(name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name].show = false;
            }
        }

        function showErr(name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name].show = true;
            }
        }

        function submitForm() {
            showErr('realname');
            showErr('idFrontImg');
            showErr('idBackImg');

            if ($scope.verifyForm.$invalid || 
                    $scope.verification.id.frontImgStatus !== 2 ||
                    $scope.verification.id.backImgStatus !== 2) {
                return;
            }

            $scope.clickable.submit = false;
            account.verify($scope.verification.realname).then(function (data) {

                if (data.is_succ) {
                    goNextStep();
                } else {
                    $scope.clickable.submit = true;
                }
            });
        }

        function goNextStep() {
            $scope.step++;
        }
    }

})();