;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RegularController', RegularController);

    RegularController.$inject = ['$scope', '$location', 'ranklist','$http'];

    function RegularController($scope, $location, ranklist, $http) {

        //登录
        $scope.submitOrder = submitOrder;

        function submitOrder () {
            
            if ($scope.name == '') {
                alert("请填写姓名或电话");
            } else {
                $scope.product_title = angular.element('.hy-detail__title-span1').text();
                ranklist.getOrderInfo($scope.tel, $scope.product_title, $scope.name).then(function (data) {
                    if (data && data.error_code == 0) {
                        alert("预约成功！稍后会有工作人员联系您！");
                        $scope.submit = "预约成功";
                    } else {
                        alert((data && data.error_msg) || "预约失败，请联系客服。");
                    }
                });
            }
        }

        //更新用户名  
        //@TODO  需要根据cookie和登录状态判断是否发请求
        $http.get('/action/public/v4/get_info?type=Profile').then(function(result){
            result = result.data;
            $scope.name = result.realname;
            $scope.tel = result.phone;
        });
    }
})();
