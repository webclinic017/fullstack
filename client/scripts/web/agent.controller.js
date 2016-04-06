;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebAgentController', WebAgentController);

    WebAgentController.$inject = ['$scope', 'validator', '$modal', 'market'];

    function WebAgentController ($scope, validator, $modal, market) {

        $scope.becomeAgent = {
            phone: undefined
        };
        $scope.error = {
            phone: {
                show: false,
                reg: validator.regType.phone.reg
            }
        };

        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        $scope.submitForm = submitForm;

        function submitForm () {
            showErr('phone');

            if ($scope.agentForm.$invalid) {
                return;
            }
            
            market.checkPhone($scope.becomeAgent.phone).then(function (data) {
                // console.info(data);
                if (data.error_code === 0) {
                    openSystemMdl('success');
                } else if (data.error_code === 1) {
                    openSystemMdl('repeat');
                } else if (data.error_code === 2) {
                    openSystemMdl('frequent');
                }
            });

        }

        function openSystemMdl(type) {
            $modal.open({
                templateUrl: '/views/web/agent_modal.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    $scope.modal = {
                        type: type
                    };
                    $scope.closeModal = closeModal;

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }

        function hideErr(name) {
            if ($scope.error[name]) {
                $scope.error[name].show = false;
            }
        }

        function showErr(name) {
            if ($scope.error[name]) {
                $scope.error[name].show = true;
            }
        }
    }
})();