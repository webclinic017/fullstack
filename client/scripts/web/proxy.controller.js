;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AgentProxyController', AgentProxyController);

    AgentProxyController.$inject = ['$scope', "$location", "account", "fun"];

    function AgentProxyController ($scope, $location, account, fun) {
        // console.log($scope.getDomain());
        $scope.spread = false;
        var ib_pid = fun.getSearch().ib_pid;
        var link = '/space/#/account/register';
        if(ib_pid) {
            $scope.spread = true;
            // var d = new Date();
            // d.setTime(d.getTime() + (1*24*60*60*1000));
            // document.cookie = 'ib_pid=' + ib_pid + '; path=/; domain='+$scope.getDomain()+'; expires=' + d.toUTCString();
            // document.cookie = 'invite_status=0; path=/; domain='+$scope.getDomain()+'; expires=' + d.toUTCString();

            $scope.writeCookie({nameKey: 'ib_pid', nameValue: ib_pid, expires: 1});
            $scope.writeCookie({nameKey: 'invite_status', nameValue: 0, expires: 1});

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
        $scope.goInto = function() {
            window.scrollTo(0, 2000)
        }

    }

})();