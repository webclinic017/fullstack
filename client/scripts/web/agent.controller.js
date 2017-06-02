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
                if (!data) return;
                if (data.is_succ) {
                    openSystemMdl('success');
                } else {
                    openSystemMdl('fail', data.message);
                }
            });

        }

        function openSystemMdl(type, message) {
            $modal.open({
                templateUrl: '/views/web/agent_modal.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    $scope.modal = {
                        type: type,
                        message: message || ''
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