;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetThirdController', AssetThirdController);

        AssetThirdController.$inject = ['$scope', 'config', '$state', '$modalInstance', 'validator', 'account', 'asset', 'passedScope', 'lang'];

    function AssetThirdController($scope, config, $state, $modalInstance, validator, account, asset, passedScope, lang) {
        $scope.third = {
            //platform: ,         // 平台ID
            //account: ,           // 第三方平台账号{id, name}
            binding: false,
        };
        $scope.lang = lang;
        $scope.clickable = true;
        $scope.thirdAccounts = undefined;
        $scope.frontErr = {
            platform: {
                show: false,
            },
            account: {
                show: false,
            },
        };

        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.closeModal = closeModal;
        $scope.submitForm = submitForm;

        getThirdAccount();
        function getThirdAccount() {
            asset.getThirdPlatforms().then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    $scope.thirdPlatforms = data.data;
                }
            });
        }
        function submitForm() {
            showErr('platform');
            showErr('account');

            if ($scope.thirdForm.$invalid) {
                return;
            }

            var params = {
                platform: $scope.third.platform.id,
                account: $scope.third.account,
            };
            
            $scope.clickable = false;
            asset.setThirdBindAccount(params).then(function (data) {
                $scope.clickable = true
                if (!data) return;
                if (data.is_succ) {
                    $scope.third.binding = true;
                    $scope.$emit('bindThirdSuccess');
                } else {
                    // $scope.$emit('bindCardFail');
                    alert(data.message);
                }
            });
            // 如果是第一次绑卡
            // if (typeof passedScope.third.id === 'undefined') {
            // }
        }

        function closeModal() {
            $modalInstance.dismiss();
        }

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
    }
})();