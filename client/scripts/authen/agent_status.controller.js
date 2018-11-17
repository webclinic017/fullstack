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
        $scope.kycAuthStatus = ['(待审核)', '(已通过)', '(已拒绝)'];
        $scope.idcardAuthStatus = ['(未认证)', '(已拒绝)', '(需要审核)', '(已通过)', '(未知状态)'];

        $scope.$emit('gloabl.agentAuthStatus')
    }
})();
