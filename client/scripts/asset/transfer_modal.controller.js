;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetTransferController', AssetTransferController);

    AssetTransferController.$inject = ['$scope', 'config', '$state', '$modalInstance', 'validator', 'account', 'asset', 'passedScope', 'lang'];

    function AssetTransferController($scope, config, $state, $modalInstance, validator, account, asset, passedScope, lang) {
        $scope.personal = passedScope.personal;
        $scope.card = {
            //number: ,         // 卡号
            binding: false,
            realname: $scope.personal.realname,
            world: ''
        };
        $scope.lang = lang;
        $scope.clickable = true;

        $scope.worlds = [];

        $scope.frontErr = {
            number: {
                show: false,
            },
            swift_code: {
                show: false
            },
            bankOther: {
                show: false
            },
            world: {
                show: false
            },
            realname: {
                show: false
            }
        };

        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.closeModal = closeModal;
        $scope.submitForm = submitForm;

        getWorlds();

        function getWorlds() {
            account.getWorlds().then(function (data) {
                if (data.is_succ) {
                    $scope.worlds = data.data;
                    for (var index = 0; index < $scope.worlds.length; index++) {
                        if ($scope.worlds[index].code == 'CN') {
                            $scope.card.world = $scope.worlds[index];
                            break;
                        };

                    }
                }
            });
        }
        function submitForm() {
            console.log($scope.card);
            showErr('world');
            showErr('realname');
            showErr('number');
            showErr('bankOther');
            showErr('swift_code');

            if ($scope.cardForm.$invalid) {
                return;
            }

            var oParams = {
                card_no: $scope.card.number,
                country: $scope.card.world.code,
                bank_name: $scope.card.bankOther,
                cardholder_name: $scope.card.realname,
                swift_code: $scope.card.swift_code,
                type: 2
            };

            $scope.clickable = false;

            // 如果是第一次绑卡()
            // if (typeof $scope.card.id === 'undefined') {
            asset.bindCard(oParams).then(function (data) {
                $scope.clickable = true
                if (!data) return;
                if (data.is_succ) {
                    $scope.card.binding = true;
                    $scope.$emit('bindTransferSuccess');
                } else {
                    // $scope.$emit('bindCardFail');
                    alert(data.message);
                }
            });
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