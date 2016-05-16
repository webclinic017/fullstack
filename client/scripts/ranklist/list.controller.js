;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RanklistListController', RanklistListController);

    RanklistListController.$inject = ['$scope', '$location', 'ranklist'];

    function RanklistListController($scope, $location, ranklist) {


        $scope.name = $location.search().name || '';
        $scope.tel = '';
        $scope.submit = '';
        $scope.title = $location.search().title || '';
        var $title = $.trim($(".hy-detail__title-span1").text());

        $scope.submitOrder = submitOrder;

        // 若显示交易中、已结束 表单禁用
        if ($("input[name=submit]").hasClass("hy-detail__con-btn-trade") || $("input[name=submit]").hasClass("hy-detail__con-btn-end")) {
            $("input[name=submit]").attr("disabled", true);
            $(".order-info-name").attr("disabled", true);
            $(".order-info-tel").attr("disabled", true);
        }
        if(!$scope.title){
            if ($title.indexOf("汇赢季盈") != -1) {
                $scope.title = "赵海峰(主操盘手)";
            } else {
                $scope.title = "张伟(主操盘手)";

            }
        }
        

        function submitOrder () {

            if ($scope.name == '') {

                alert("请填写姓名或电话");
            } else {
                ranklist.getOrderInfo($scope.tel, $scope.name, $title).then(function (data) {
                    if (data && data.error_code == 0) {
                        alert("预约成功！稍后会有工作人员联系您！");
                        $scope.submit = "预约成功";
                    } else {
                        alert("预约失败，请联系客服。");
                    }
                });
            }


        }

    }
})();
