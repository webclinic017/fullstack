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
                        amount: 2000,
                        front_desc_fir: "完成500手交易",
                        front_recevie_status: "立即领取"
                    },
                    {
                        amount: 1000,
                        front_desc_fir: "完成250手交易",
                        front_recevie_status: "立即领取"
                    },
                    {
                        amount: 500,
                        front_desc_fir: "完成125手交易",
                        front_recevie_status: "立即领取"
                    },
                    {
                        amount: 200,
                        front_desc_fir: "完成50手交易",
                        front_recevie_status: "立即领取"
                    }
                ];
            }
        });
    
        //领取红包
        $scope.getHonorBag = function (bag) {
            if ($scope.logined) {
                layer.confirm('本活动红包仅可4选1，确定选择'+bag.amount+'美元红包吗？', {
                    btn: ['确定','取消'],
                    title: "领取红包"
                }, function(){
                    layer.closeAll();
                    layer.load(2);
                    redbag.receiveRedbag(bag.id).then(function (data) {
                        // console.log(data);
                        layer.closeAll();
                        if (data.is_succ) {
                            getBagList();
                            layer.alert('恭喜你已成功领取'+bag.amount+'美元红包，赶紧去完成条件兑换把！');
                        } else {
                            layer.msg(data.message);
                        }
                    });
                });
                
            } else {

                layer.msg('请先登录！');
            }
        };

        function getBagList () {
            redbag.getRedbagPool(0, 1000, 'xyzj').then(function (data) {
                $scope.success = true;
                // console.log(data);
                if (data.is_succ) {
                    angular.forEach(data.data.records, function (value, index) {
                        value.front_desc_fir = doDesc(value.pay_condition_desc);
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
            return str;
        }
    }
})();