;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RedbagPoolController', RedbagPoolController);

    RedbagPoolController.$inject = ['$scope', 'redbag', '$interval'];

    function RedbagPoolController($scope, redbag, $interval) {

        var pagesize = 9;
        $scope.success = false;         // true -> 请求数据成功
        $scope.receiveLoading = false;  // true -> 红包领取中
        $scope.page = 1;
        $scope.pools = [];
        $scope.pagebar = {
            config: {
                // total: , // 总页数
                page: 1    
            },
            pages: [],
            pagesBtn: [],
            // selectPage: , bind to pagination.selectPage
            getList: getRedbagPool           
        };
        $scope.receiveRedbag = receiveRedbag;

        getRedbagPool();

        function getRedbagPool (page) {
            page = page ? page : 1;
            $scope.page = page;
            // var offset = (page - 1) * pagesize;
            // $scope.$broadcast('showLoadingImg');
            $scope.success = false;

            redbag.getRedbagPool(page, pagesize).then(function (data) {
                $scope.success = true;
                // $scope.$broadcast('hideLoadingImg');
                // console.log(data);
                if (data.is_succ) {
                    $scope.pools = data.data;

                    angular.forEach($scope.pools, function (value, index) {
                        // console.info(value, index);
                        if (value.is_receive == 4) {
                            setCountDownTimer(value, value.second);
                            // setCountDownTimer(value, parseInt(Math.random()*10));
                        }
                        
                    });

                    angular.extend($scope.pagebar.config, {
                        total: getTotal(data.total_count, pagesize),
                        page: page
                    });
                }
            });
        }

        function receiveRedbag (o) {
            if ($scope.receiveLoading) return;
            // console.log(o);
            $scope.receiveLoading = true;
            o.receiveLoading = true;
            
            redbag.receiveRedbag(o.id).then(function (data) {
                // console.info(data);
                $scope.receiveLoading = false;
                o.receiveLoading = false;
                if (data.is_succ) {
                    layer.msg('红包领取成功', {
                        time: 2000
                    });
                    getRedbagPool($scope.page);
                } else {
                    layer.msg(data.error_msg, {
                        time: 2000
                    });
                }
            });
        }

        function getTotal(sum, pagesize) {
            var total;
            sum = parseInt(sum, 10); // list item 总个数
            pagesize = parseInt(pagesize, 10); // 单页显示数

            if (sum % pagesize > 0) {
                total = parseInt(sum / pagesize) + 1;
            } else {
                total = parseInt(sum / pagesize);
            }
            return total;
        }

        function setCountDownTimer (obj, time) {
            setCountdown(obj, time);

            obj.timer = $interval(function () {
                if (time <= 0) $interval.cancel(obj.timer);
                time --;
                setCountdown(obj, time);
            }, 1000);
        }

        function setCountdown (obj, time) {

            if (time <= 0) {
                obj.is_receive = 2;     // 已到领取时间
                return;
            }

            obj.countdownTime = {
                day: '00',
                hour: '00',
                minute: '00',
                second: '00'
            };
            obj.countdownTime.day = todou(parseInt(time / (3600 * 24)));
            time = time % (3600 * 24);
            obj.countdownTime.hour = todou(parseInt(time / 3600));
            time = time % 3600;
            obj.countdownTime.minute = todou(parseInt(time / 60));
            obj.countdownTime.second = todou(time % 60);
        }

        function todou (n) {
            return n >= 10 ? ''+n : '0'+n;
        }
    }
})();