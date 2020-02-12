;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AgentProxyController', AgentProxyController);

    AgentProxyController.$inject = ['$scope', "$location", "account", "fun"];

    function AgentProxyController ($scope, $location, account, fun) {
        $scope.spread = false;
        // 使用$location会导致跳转问题
        var ib_pid = fun.getSearch().ib_pid;
        var link = '/m/h5_register/reg';
        if(ib_pid) {
            link += '?action=quick_login'   // 兼容对已有用户的推广
            $scope.spread = true;
            var d = new Date();
            var overExpires = 'Thu, 01 Jan 1970 00:00:01 GMT;' // 过去时间
            d.setTime(d.getTime() + (1*24*60*60*1000));
            document.cookie = 'pid=' + null + '; path=/; domain='+getDomain()+'; expires=' + overExpires;
            document.cookie = 'ib_pid=' + ib_pid + '; path=/; domain='+getDomain()+'; expires=' + d.toUTCString();
            document.cookie = 'invite_status=0; path=/; domain='+getDomain()+'; expires=' + d.toUTCString();
            account.checkLogined().then(function (logined) {
                if (logined) {
                    account.setAgentPromotion(ib_pid).then(function (data) {
                        if (!data) return;
                        if (data.is_succ) {
                            link = '/space/#/center';
                        }
                    })
                }
            })
        }
        // 跳转注册
        $scope.agentPromotion = function() {
            window.location.href = link;
        }
        // 转到当前页面底部
        // $scope.goInto = function() {
        //     window.scrollTo(0, 2000)
        // }
    }

})();