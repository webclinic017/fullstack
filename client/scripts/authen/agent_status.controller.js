;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AgentStatusController', AgentStatusController);

    AgentStatusController.$inject = ['$rootScope','$scope', 'account'];

    /**
     * @name AgentStatusController
     * @desc
     */
    function AgentStatusController($rootScope, $scope, account) {

        getAgentStatus()
        function getAgentStatus() {
            account.getAgentAuthStatus().then(function (data) {
                if (!data) return;
                // console.log(data);
                if (data.is_succ) {
                    console.log(data.data)
                }
            });
        }
    }
})();
