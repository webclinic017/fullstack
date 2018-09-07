;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('WalletBankcardController', WalletBankcardController);

    WalletBankcardController.$inject = ['$rootScope', '$scope', '$modal', '$state', 'asset', 'validator', 'forex', '$cookies', '$layer'];

    function WalletBankcardController($rootScope, $scope, $modal, $state, asset, validator, forex, $cookies, $layer) {
        // 缓存当前父scope 给弹窗控制器使用
        var parentScope = $scope;
        parentScope.hasChooseedCard = false;
        parentScope.cardList = undefined;   // 银行卡列表
        parentScope.openAddCardModal = openCardMdl

        //刷新列表 
        getCardList($scope)
        function getCardList(_scope) {
            _scope.$emit('showLoadingImg');
            return asset.getCardList().then(function (data) {
                _scope.$broadcast('hideLoadingImg');
                if (!data) {
                    console.info('获取银行卡列表失败！')
                    return
                }
                parentScope.cardList = data.data
            })
        }
        //绑定银行卡后获取银行卡信息
        $rootScope.$on('bindCardSuccess', function () {
            // 通知所有子控器 
            if (!parentScope.hasChooseedCard) {
                getCardList(parentScope)
            }
        });

        $scope.confirmDeleteCard = function (card) {
            openManageCardMdl(card)
        }
        function openManageCardMdl(card) {
            $modal.open({
                templateUrl: '/views/wallet/delete_card.html',
                size: 'md',
                backdrop: 'true',
                controller: ['$scope', '$modalInstance', '$state', 'asset', '$timeout', 'lang', function ($scope, $modalInstance, $state, asset, $timeout, lang) {
                    parentScope.manageCardModalInstance = $modalInstance;
                    $scope.lang = lang;
                    $timeout(function () {
                        $scope.$broadcast('hideLoadingImg');
                    }, 0)
                    $scope.closeModal = closeModal;

                    $scope.deleteCard = function () {
                        asset.deleteCard(card.id).then(function (data) {
                            if (data.is_succ) {
                                getCardList(parentScope).then(function () {
                                    $scope.cardList = parentScope.cardList
                                    if ($scope.cardList.length == 0) {
                                        // 没有绑定银行卡
                                        parentScope.cardList = undefined;   
                                    }
                                })
                                closeModal()
                            }
                        })
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }]
            });
        }

        function openCardMdl(card) {
            if (parentScope.manageCardModalInstance) {
                parentScope.manageCardModalInstance.dismiss()
            }
            // 检测认证状态
            $scope.$emit('global.checkAuthenFlow', {
                ctrlName: 'AssetWithdrawController',
                callback: function () {
                    // var personal = {
                    //     verified: $scope.personal.verified,
                    //     realname: $scope.personal.realname,
                    //     profile_check: $scope.personal.profile_check,
                    // };
                    $modal.open({
                        templateUrl: '/views/asset/card_modal.html',
                        size: 'md',
                        controller: 'AssetCardController',
                        resolve: {
                            passedScope: function () {
                                return {
                                    personal: $scope.personal,
                                    card: card     // 用于修改银行卡
                                };
                            }
                        }
                    });
                }
            })
        }
    }
}());