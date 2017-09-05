;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebAgentController', WebAgentController);

    WebAgentController.$inject = ['$scope', 'validator', '$modal', 'market', '$location'];

    function WebAgentController ($scope, validator, $modal, market, $location) {

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

        var sources = getQueryString('q') || 1;
        var ad_position = getQueryString('w') || 3;

        function submitForm () {
            showErr('phone');
            console.log(sources, ad_position);
            if ($scope.agentForm.$invalid) {
                return;
            }
            
            market.checkPhone({
                phone: $scope.becomeAgent.phone,
                sources: sources,
                ad_position: ad_position
            }).then(function (data) {
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
                templateUrl: '/views/web/agent/modal.html',
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

        function getQueryString(name){
             var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
             var r = window.location.search.substr(1).match(reg);
             if(r!=null)return  unescape(r[2]); return null;
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