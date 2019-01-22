;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('ManageCardController', ManageCardController);

    ManageCardController.$inject = ['$scope', '$modal'];

    function ManageCardController($scope, $modal) {
      $scope.openManageCardMdl = openManageCardMdl;
      $scope.openCardMdl = openCardMdl;
      // 管理银行账号
      function openManageCardMdl(params) {
        /**
         * params
         *    type: switch, manage, delete
         *    card: card
         *    page: deposit, withdraw
         *    parentScope: parentScope,
         *    getCard: getCard
         *  */
        $modal.open({
            templateUrl: '/views/asset/manage_card_modal.html',
            size: 'md',
            backdrop: 'true',
            controller: ['$scope', '$modalInstance', '$state', 'asset', '$timeout', 'lang', function ($scope, $modalInstance, $state, asset, $timeout, lang) {
                console.log(params);
                params.parentScope.manageCardModalInstance = $modalInstance
                $timeout(function () {
                    $scope.$broadcast('hideLoadingImg');
                }, 0)
                $scope.closeModal = closeModal;
                $scope.manageType = params.type;
                $scope.lang = lang;
                $scope.openAddCardModal = openCardMdl
                $scope.parentScope = params.parentScope
                $scope.page = params.page
                //刷新列表 
                getCardList();

                $scope.chooseCard = function (card) {
                    // console.log(card)
                    params.parentScope[params.page].card.id = card.id;
                    params.parentScope[params.page].card.number = card.card_no;
                    params.parentScope[params.page].card.address = card.bank_addr;
                    params.parentScope[params.page].card.province = card.province;
                    params.parentScope[params.page].card.bank_name = card.bank_name;
                    params.parentScope[params.page].card.bank_name_cn = card.bank_name_cn;
                    params.parentScope[params.page].card.city = card.city;
                    params.parentScope[params.page].card.bank_code = card.bank_code;
                    params.parentScope[params.page].card.bank_img = card.bank_img;
                    params.parentScope[params.page].card.phone = card.phone;
                    params.parentScope[params.page].card.country = card.country_code;
                    // 更改选中状态
                    params.parentScope.hasChooseedCard = true;
                    closeModal()
                }

                $scope.confirmDeleteCard = function (card) {
                    closeModal()
                    openManageCardMdl({type: 'delete', card: card, page: params.page, parentScope: params.parentScope, getCard: params.getCard})
                }

                $scope.deleteCard = function () {
                    asset.deleteCard(params.card.id).then(function (data) {
                        if (data.is_succ) {
                            getCardList().then(function () {
                                if ($scope.cardList.length == 0) {
                                    params.parentScope[params.page].card = {}
                                }
                            })
                            params.getCard()
                            closeModal()
                        }
                    })
                }

                function getCardList() {
                  $scope.$emit('showLoadingImg');
                  return asset.getCardList().then(function (data) {
                      $scope.$broadcast('hideLoadingImg');
                      if (!data) {
                          console.info('获取银行卡列表失败！')
                          return
                      }
                      $scope.cardList = data.data
                  })
                }

                function closeModal() {
                    $modalInstance.dismiss();
                }
            }]
        });
      }

      // 添加银行卡
      function openCardMdl(page, parentScope) {
        if (parentScope && parentScope.manageCardModalInstance) {
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
                                personal: $scope.lang.isThird() ? $scope.main : $scope.personal,
                                card: $scope[page].card
                            };
                        }
                    }
                });
            }
        })
      }
    }
})();