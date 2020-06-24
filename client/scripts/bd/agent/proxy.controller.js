;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AgentProxyController', AgentProxyController);

    AgentProxyController.$inject = ['$scope', "$location", "account", "fun"];

    function AgentProxyController($scope, $location, account, fun) {
        $scope.spread = false;
        // 使用$location会导致跳转问题

        var searchString = fun.getSearch('string');
        var ib_pid = fun.getSearch().ib_pid;
        var link = '/m/h5_register/reg' + searchString;
        if (ib_pid) {
            link += ('&origin=proxy')   // 兼容对已有用户的推广
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
        // $scope.goInto = function() {
        //     window.scrollTo(0, 2000)
        // }
    }

})();