;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('BrandAgentController', BrandAgentController);

    BrandAgentController.$inject = ['$scope', 'validator', 'account', '$modal', 'market', '$location', '$cookies', '$interval'];

    function BrandAgentController ($scope, validator, account, $modal, market, $location, $cookies, $interval) {
        
        $scope.phone = undefined;
        $scope.code = undefined;
        $scope.isCount = false;
        $scope.countNum = 60;

        $scope.submitForm = submitForm;
        $scope.openSystemMdl = openSystemMdl;
        $scope.getPhoneCode = getPhoneCode;

        var loading = false;
        var channel = getQueryString('channel') ? getQueryString('channel') : '';
        var token;

        setToken();
        $interval(function () {
            setToken();
        }, 300000);

        function submitForm () {
            if (loading) return;
            if (validator.regType.phone.reg.test($scope.phone) && $scope.code) {
                loading = true;
                market.checkPhone($scope.phone, $scope.code, channel).then(function (data) {
                    loading = false;
                    if (!data) return;
                    if (data.is_succ) {
                        openSystemMdl('success');
                        $scope.phone = undefined;
                        $scope.code = undefined;
                    } else {
                        openSystemMdl('fail', data.message);
                    }
                });
            } else {
                layer.msg('请填写正确信息');
            }
        }

        function setToken () {
            account.setToken().then(function (data) {
                if (data.is_succ) {
                    token = $cookies['code_token'];
                }
            });
        }

        function getPhoneCode () {
            if (!validator.regType.phone.reg.test($scope.phone)) {
                layer.msg('请填写正确的手机号码');
                return;
            }
            account.getRCaptcha($scope.phone, token, 5, 1).then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    $scope.isCount = true;
                    var timer = $interval(function () {
                        $scope.countNum--;
                        if ($scope.countNum <= 0) {
                            $scope.isCount = false;
                            $scope.countNum = 60;
                            $interval.cancel(timer);
                        }
                    }, 1000);
                } else {
                    layer.msg(data.message);
                }
            });
        }

        function openSystemMdl(type, message) {
            if (loading) return;
            $modal.open({
                templateUrl: '/views/bd/brand/brand_modal.html',
                size: 'sm',
                backdrop: true,
                resolve: {
                    passedScope: function () {
                        return {
                            phone: $scope.phone,
                            code: $scope.code
                        };
                    }
                },
                controller: function ($scope, $modalInstance, passedScope) {
                    
                    $scope.modal = {
                        isComplete: type ? true : false,
                        type: type,
                        message: message || ''
                    };
                    $scope.phone = passedScope.phone || undefined;
                    $scope.code = passedScope.code || undefined;
                    $scope.isCount = false;
                    $scope.countNum = 60;

                    $scope.closeModal = closeModal;
                    $scope.submitMdlForm = submitMdlForm;
                    $scope.getMdlPhoneCode = getMdlPhoneCode;


                    function getMdlPhoneCode () {
                        if (!validator.regType.phone.reg.test($scope.phone)) {
                            layer.msg('请填写正确的手机号码');
                            return;
                        }
                        account.getRCaptcha($scope.phone, token, 5, 1).then(function (data) {
                            // console.log(data);
                            if (data.is_succ) {
                                $scope.isCount = true;
                                var timer = $interval(function () {
                                    $scope.countNum--;
                                    if ($scope.countNum <= 0) {
                                        $scope.isCount = false;
                                        $scope.countNum = 60;
                                        $interval.cancel(timer);
                                    }
                                }, 1000);
                            } else {
                                layer.msg(data.message);
                            }
                        });
                    }

                    function submitMdlForm () {
                        if (loading) return;
                        if (validator.regType.phone.reg.test($scope.phone) && $scope.code) {
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
                            layer.msg('请填写正确信息');
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