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
        $scope.kycAuthStatus = [$scope.lang.text('tigerWitID.partner.pending'), $scope.lang.text('tigerWitID.partner.approved'), $scope.lang.text('tigerWitID.partner.rejected'), $scope.lang.text('tigerWitID.partner.unverified')];
        $scope.idcardAuthStatus = [$scope.lang.text('tigerWitID.partner.unverified'), $scope.lang.text('tigerWitID.partner.rejected'), $scope.lang.text('tigerWitID.partner.pending'), $scope.lang.text('tigerWitID.partner.approved'), $scope.lang.text('tigerWitID.partner.certificateExpired')];
        $scope.protocolAuthStatus = [$scope.lang.text('tigerWitID.partner.unverified'), $scope.lang.text('tigerWitID.partner.pending'), $scope.lang.text('tigerWitID.partner.rejected'), $scope.lang.text('tigerWitID.partner.approved')];


        $scope.$emit('gloabl.agentAuthStatus')
    }
})();
