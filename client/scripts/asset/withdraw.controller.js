;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetWithdrawController', AssetWithdrawController);

    AssetWithdrawController.$inject = ['$rootScope', '$scope', '$modal', '$state', 'asset', 'validator', 'forex'];

    function AssetWithdrawController($rootScope, $scope, $modal, $state, asset, validator, forex) {

        $scope.withdraw = {
            // amount: ,
            // succAmount: ,
            card: {
                //id: ,             // 银行卡 id
                //number: ,         // 卡号
                //bank: ,           // 银行名
                // address:         // 开户行
                // banken:          // 银行英文名
            },
            success: false,
            minAmount: 0,
            maxAmount: 0
        };
        $scope.frontErr = {
            amount: {
                show: false,
                reg: validator.regType.amount.reg
            }
        };

        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.toWithdraw = toWithdraw;
        $scope.openWithdrawMdl = openWithdrawMdl;
        $scope.openCardMdl = openCardMdl;


        getCard();

        //绑定银行卡后获取银行卡信息
        $rootScope.$on('bindCardSuccess', function() {
            getCard();
        });

        // 获取可提取的最大金额
        forex.getAsset().then(function(data) {
            $scope.withdraw.maxAmount = data.data.balance;
        });

        // 获取银行卡信息
        function getCard() {
            asset.getCard().then(function(data) {
                if (data.is_succ) {
                    $scope.withdraw.card.id = data.id;
                    $scope.withdraw.card.number = data.card_id;
                    $scope.withdraw.card.bank = data.bank_name;
                    $scope.withdraw.card.address = data.bank_addr;

                }
            });
        }

        function openCardMdl() {
            var personal = {
                verified: $scope.personal.verified,
                realname: $scope.personal.realname
            };

            $modal.open({
                templateUrl: '/views/asset/card_modal.html',
                size: 'md',
                controller: 'AssetCardController',
                resolve: {
                    passedScope: function () {
                        return {
                            personal: personal,
                            card: $scope.withdraw.card
                        };
                    }
                }
            });
        }


        // 提现相关的各种弹窗提示
        function openWithdrawMdl() {
            var withdraw = $scope.withdraw;

            $modal.open({
                templateUrl: '/views/asset/withdraw_modal.html',
                size: 'sm',
                controller: function ($scope, $modalInstance, $state) {
                    $scope.isWithdrawSucc = withdraw.success;
                    $scope.withdrawAmount = withdraw.amount;
                    $scope.closeModal = closeModal;
                    $scope.bindCard = bindCard;

                    // 绑定银行卡
                    function bindCard() {
                        closeModal();
                        openCardMdl();
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }

        // 提现
        function toWithdraw() {
            if ($scope.withdraw.card.id === 'undefined') {
                openWithdrawMdl();
                return;
            }
            showErr('amount');
            // if ($scope.withdrawForm.$invalid) {
            //     return;
            // }

            asset.withdraw($scope.withdraw.amount, $scope.withdraw.card.id).
                    then(function (data) {

                if (data.is_succ) {
                    $scope.withdraw.success = true;
                    openWithdrawMdl();

                    $state.go('space.asset.subpage', {
                        subpage: 'withdraw'
                    }, {reload: true});
                }
            });

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
