;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('WebHonorController', WebHonorController);

    WebHonorController.$inject = ['$scope', 'redbag', 'account', '$modal'];

    function WebHonorController($scope, redbag, account, $modal) {

        $scope.bagList = [];
        $scope.honorStatus = 0;
        $scope.logined = false;
        $scope.recevieStatus = false;

        account.checkLogined().then(function (logined) {
            $scope.logined = logined;

            if (logined) {
                getBagList();
                getHonorStatus();
            } else {
                $scope.bagList = [
                    {
                        amount: 1000,
                        front_desc_fir: "活动期间完成",
                        front_desc_sec: "180手交易",
                        front_recevie_status: "立即领取"
                    },
                    {
                        amount: 500,
                        front_desc_fir: "活动期间完成",
                        front_desc_sec: "90手交易",
                        front_recevie_status: "立即领取"
                    },
                    {
                        amount: 200,
                        front_desc_fir: "活动期间完成",
                        front_desc_sec: "40手交易",
                        front_recevie_status: "立即领取"
                    },
                    {
                        amount: 100,
                        front_desc_fir: "活动期间完成",
                        front_desc_sec: "25手交易",
                        front_recevie_status: "立即领取"
                    }
                ];
            }
        });
    
        //领取红包
        $scope.getHonorBag = function (bag) {
            if ($scope.logined) {
                layer.load(2);
                redbag.receiveRedbag(bag.id).then(function (data) {
                    // console.log(data);
                    layer.closeAll();
                    if (data.is_succ) {
                        getBagList();
                    } else {
                        layer.msg(data.message);
                    }
                });
            } else {
                layer.msg('请先登录！');
            }
        };

        //领取手柄
        $scope.recevieHonor = function () {
            if ($scope.logined) {
                layer.load(2);
                redbag.receiveHonor().then(function (data) {
                    layer.closeAll();
                    if (data.is_succ) {
                        getHonorStatus();
                    } else {
                        layer.msg(data.message);
                    }
                });
            } else {
                layer.msg('请先登录！');
            }
        };
        //兑换手柄
        $scope.openExchangeHonorMdl = function () {
            $modal.open({
                templateUrl: '/views/bd/honor/honor_modal.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance) {

                    $scope.modal = {
                        isComplete: false,
                        type: undefined,
                        message: undefined
                    };
                    $scope.address = "";

                    $scope.closeModal = closeModal;
                    $scope.closeModalSucc = closeModalSucc;

                    $scope.exchangeHonor = function () {
                        layer.load(2);
                        redbag.exchangeHonor($scope.address).then(function (data) {
                            layer.closeAll();
                            $scope.modal.isComplete = true;
                            if (data.is_succ) {
                                $scope.modal.type = 'success';
                            } else {
                                $scope.modal.type = 'fail';
                                $scope.modal.message = data.message;
                            }
                        });
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                    function closeModalSucc() {
                        getHonorStatus();
                        $modalInstance.dismiss();
                    }
                }
            });
        };

        function getBagList () {
            redbag.getRedbagPool(0, 1000, 'honorBag').then(function (data) {
                $scope.success = true;
                // console.log(data);
                if (data.is_succ) {
                    angular.forEach(data.data.records, function (value, index) {
                        value.front_desc_fir = doDesc(value.pay_condition_desc).r1;
                        value.front_desc_sec = doDesc(value.pay_condition_desc).r2;
                        value.front_recevie_status = "立即领取";

                        if (value.is_receive == 1) {
                            value.front_recevie_status = "已领取";
                            $scope.recevieStatus = true;
                        }
                    });
                    $scope.bagList = data.data.records;
                }
            });
        }

        function getHonorStatus () {
            redbag.checkHonorStatus().then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    $scope.honorStatus = data.data.status;
                }
            });
        }
         
        function doDesc (desc) {
            var str = desc.split('(')[0];
            return {
                r1: str.substring(0, 6),
                r2: str.substring(6)
            };
        }
    }
})();