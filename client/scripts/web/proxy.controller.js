;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AgentProxyController', AgentProxyController);

    AgentProxyController.$inject = ['$scope', "$location", "account", "fun"];

    function AgentProxyController($scope, $location, account, fun) {
        // console.log($scope.getDomain());
        $scope.spread = false;
        // 使用$location会导致跳转问题

        var searchString = fun.getSearch('string');
        var ib_pid = fun.getSearch().ib_pid;
        var link = '/space/#/account/register' + searchString;
        if (ib_pid) {
            $scope.spread = true;
            setSource('IB');

            account.checkLogined().then(function (logined) {
                if (logined) {
                    account.setAgentPromotion(ib_pid).then(function (data) {
                        if (!data) return;
                        if (data.is_succ) {
                            link = '/space/#/center' + searchString;
                        }
                    })
                }
            })

        }
        // 跳转注册
        $scope.agentPromotion = function () {
            window.location.href = link;
        }
        // 转到当前页面底部
        $scope.goInto = function () {
            window.scrollTo(0, (angular.element('#positionDom').offset().top-69))
        }

    }

})();