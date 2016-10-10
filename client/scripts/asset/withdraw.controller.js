;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetWithdrawController', AssetWithdrawController);

    AssetWithdrawController.$inject = ['$rootScope', '$scope', '$modal', '$state', 'asset', 'validator', 'forex'];

    function AssetWithdrawController($rootScope, $scope, $modal, $state, asset, validator, forex) {
        $scope.message = {};
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
            FXRate: {
                // value: ,     // 汇率值
                // timestamp: ,
                // RMB:         // 折合人民币
            },
            success: false,
            minAmount: 20,
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
        // 汇率
        asset.getFXRate().then(function(data) {
            $scope.withdraw.FXRate.value = data.outparity;

        });
        
        // 获取可提取的最大金额
        // forex.getAsset().then(function(data) {
        //     $scope.withdraw.maxAmount = data.data.balance;
        // });

        // 判断出金状态, 获取可提取的最大金额
        asset.getIsWithdraw().then(function (data) {
            console.info(data);
            $scope.message = data;
            $scope.withdraw.maxAmount = data.balance < 0 ? 0 : data.balance;

        });
        

        // 获取银行卡信息
        function getCard() {
            asset.getCard().then(function(data) {

                if (data.is_succ) {
                    $scope.withdraw.card.id = data.data.id;
                    $scope.withdraw.card.number = data.data.card_no;
                    $scope.withdraw.card.bank = data.data.bank_name;
                    $scope.withdraw.card.address = data.data.bank_addr;

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
            // var isMessage = $scope.message;

            $modal.open({
                templateUrl: '/views/asset/withdraw_modal.html',
                size: 'sm',
                backdrop: 'static',
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

        function openMessageMdl() {
            var message = $scope.message;

            $modal.open({
                templateUrl: '/views/asset/withdraw_modal2.html',
                size: 'sm',
                backdrop: 'static',
                controller: function ($scope, $modalInstance, $state) {
                    $scope.closeModal = closeModal;
                    $scope.message = message; 
                    console.info(message);

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }

        // 提现
        $scope.clickable = true;
        function toWithdraw() {
            if ($scope.withdraw.card.id === 'undefined') {
                openWithdrawMdl("withdrawCard");
                return;
            }
            showErr('amount');
            console.info($scope.withdrawForm.$invalid);
            if($scope.withdrawForm.$invalid){
              return;
            }
            if($scope.clickable == false){
              return;
            }
            console.log('toWithdraw is click');
            $scope.clickable = false;
            // 判断是否可以出金
            asset.getIsWithdraw($scope.withdraw.amount).then(function(data) {
                $scope.message = data;
                // console.info(data);
                if ($scope.message.error_code != 0) {
                    console.info($scope.message);
                    openMessageMdl(); 
                    $scope.clickable = true;
                } else {
                    asset.withdraw($scope.withdraw.amount, $scope.withdraw.card.id).
                    then(function (data) {
                      $scope.clickable = true;

                        if (data.is_succ) {
                            $scope.withdraw.success = true;
                            openWithdrawMdl("withdrawEnd");

                            $state.go('space.asset.subpage', {
                                subpage: 'withdraw'
                            }, {reload: true});
                        }else{
                            alert((data && data.error_msg) || "提现失败，请联系客服。");//TODO 需正确提示。这是临时方案。
                        }
                    });
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
