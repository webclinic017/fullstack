;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('BrandAgentController', BrandAgentController);

    BrandAgentController.$inject = ['$scope', 'validator', '$modal', 'market', '$location'];

    function BrandAgentController ($scope, validator, $modal, market, $location) {
        
        $scope.phone = undefined;

        $scope.submitForm = submitForm;
        $scope.openSystemMdl = openSystemMdl;

        var loading = false;
        var channel = getQueryString('channel') ? getQueryString('channel') : '';

        function submitForm () {
            if (loading) return;
            if (validator.regType.phone.reg.test($scope.phone)) {
                loading = true;
                market.checkPhone($scope.phone, channel).then(function (data) {
                    loading = false;
                    if (!data) return;
                    if (data.is_succ) {
                        openSystemMdl('success');
                        $scope.phone = undefined;
                    } else {
                        openSystemMdl('fail', data.message);
                    }
                });
            } else {
                layer.msg('请填写正确的手机号码');
            }
        }

        function openSystemMdl(type, message) {
            if (loading) return;
            $modal.open({
                templateUrl: '/views/bd/brand/brand_modal.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    
                    $scope.modal = {
                        isComplete: type ? true : false,
                        type: type,
                        message: message || ''
                    };
                    $scope.phone = undefined;
                    $scope.closeModal = closeModal;
                    $scope.submitMdlForm = submitMdlForm;


                    function submitMdlForm () {
                        if (loading) return;
                        if (validator.regType.phone.reg.test($scope.phone)) {
                            loading = true;
                            market.checkPhone($scope.phone, channel).then(function (data) {
                                loading = false;
                                if (!data) return;
                                if (data.is_succ) {
                                    $scope.modal = {
                                        isComplete: true,
                                        type: 'success',
                                        message:''
                                    };
                                } else {
                                    $scope.modal = {
                                        isComplete: true,
                                        type: 'fail',
                                        message: data.message
                                    };
                                }
                            });
                        } else {
                            layer.msg('请填写正确的手机号码');
                        }
                    }

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
        
    }
})();