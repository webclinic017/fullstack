;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RegularController', RegularController);

    RegularController.$inject = ['$scope', '$location', 'ranklist','$http', '$interval'];

    function RegularController($scope, $location, ranklist, $http, $interval) {

        //登录
        $scope.frontErr = {
            name: {
                show: false,
                msg: ''
            },
            tel: {
                show: false,
                msg: ''
            },
            amount: {
                show: false,
                msg: ''
            }
        };
        $scope.submitOrder = submitOrder;
        $scope.countdownTime = {
            type: countdownInfo.type
        };
        
        $scope.showErr = showErr;
        $scope.hideErr = hideErr;

        var isAppoint = false;

        var countdownTime = parseInt(countdownInfo["time"] / 1000);

        var timer = $interval(function () {
            if (countdownTime <= 0) $interval.cancel(timer);

            countdownTime --;
            setCountdown(countdownTime);
        }, 1000);

        function submitOrder () {
            isAppoint = false;

            checkForm();
            
            if (isAppoint) {
                $scope.product_title = angular.element('.hy-detail__title-span1').text();
                ranklist.getOrderInfo($scope.tel, $scope.product_title, $scope.name, $scope.amount).then(function (data) {
                    if (data && data.error_code == 0) {
                        alert("预约成功！稍后会有工作人员联系您！");
                        $scope.submit = "预约成功";
                    } else {
                        alert((data && data.error_msg) || "预约失败，请联系客服。");
                    }
                });
            }
        }

        function checkForm () {
            var count = 0;
            if (! $scope.name) {
                count++;
                showErr('name');
            }
            if (! $scope.tel) {
                count++;
                showErr('tel');
            }
            if (!$scope.amount || $scope.amount < appointAmount.min || $scope.amount > appointAmount.max) {
                count++;
                showErr('amount');
            }

            if (count === 0) {
                isAppoint = true;
            }
        }

        function showErr (name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name].show = true;
            }
        }

        function hideErr (name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name].show = false;
            }
        }

        function setCountdown (time) {

            if (time <= 0) return;
            
            $scope.countdownTime.day = todou(parseInt(time / (3600 * 24)));
            time = time % (3600 * 24);
            $scope.countdownTime.hour = todou(parseInt(time / 3600));
            time = time % 3600;
            $scope.countdownTime.minute = todou(parseInt(time / 60));
            $scope.countdownTime.second = todou(time % 60);
        }

        function todou (n) {
            return n >= 10 ? ''+n : '0'+n;
        }
        //更新用户名  
        //@TODO  需要根据cookie和登录状态判断是否发请求
        $http.get('/action/public/v4/get_info?type=Profile').then(function(result){
            // console.info(result);
            if (result.is_succ) {
                result = result.data;
                $scope.name = result.realname;
                $scope.tel = result.phone;
            }
        });
    }
})();
