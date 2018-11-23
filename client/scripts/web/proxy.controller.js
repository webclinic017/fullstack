;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AgentProxyController', AgentProxyController);

    AgentProxyController.$inject = ['$scope', "$location", "account", "fun"];

    function AgentProxyController ($scope, $location, account, fun) {
        $scope.spread = false;
        var ib_pid = fun.getSearch().ib_pid;
        if(ib_pid) {
            $scope.spread = true;
            setAgentPromotion();
        }
        // 跳转注册
        $scope.agentPromotion = function() {
            window.location.href = '/space/#/account/register';
        }
        // 转到当前页面底部
        $scope.goInto = function() {
            window.scrollTo(0, 2000)
        }
        // 设置代理商推广
        function setAgentPromotion() {
            account.setAgentPromotion(ib_pid);
        }
    }

})();