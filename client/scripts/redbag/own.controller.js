;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RedbagOwnController', RedbagOwnController);

    RedbagOwnController.$inject = ['$scope', 'redbag', '$modal'];

    function RedbagOwnController($scope, redbag, $modal) {
        
        if ($scope.personal.verify_status < 6) {
            openSystemMdl('redbag');
            return;
        }

        function openSystemMdl(type) {
            $modal.open({
                templateUrl: '/views/asset/verify_modal.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    $scope.type = type;
                    $scope.closeModal = closeModal;

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }

        var pagesize = 9;
        $scope.tabType = 1;             // 1 可用， 2 红包记录
        $scope.success = false;         // true -> 请求数据成功
        $scope.exchangeLoading = false; // true -> 红包兑换中
        $scope.page = 1;
        $scope.bags = [];
        $scope.pagebar = {
            config: {
                // total: , // 总页数
                page: 1
            },
            pages: [],
            pagesBtn: [],
            // selectPage: , bind to pagination.selectPage
            getList: getRedbagList
        };
        $scope.changeTabType = changeTabType;
        $scope.exchangeRedbag = exchangeRedbag;

        getRedbagList();

        if ($scope.personal.redbagUnreadNum > 0) {
            redbag.setRedbagReaded().then(function (data) {
                if (!data) return;
                // console.log(data);
                if (data.is_succ) {
                    $scope.personal.redbagUnreadNum = 0;
                }
            })
        }

        function getRedbagList(page) {
            page = page ? page : 1;
            $scope.page = page;
            var offset = (page - 1) * pagesize;
            // $scope.$broadcast('showLoadingImg');
            $scope.success = false;

            redbag.getRedbagList({
                offset: offset,
                limit: pagesize,
                type: $scope.tabType
            }).then(function (data) {
                $scope.success = true;
                // $scope.$broadcast('hideLoadingImg');
                // console.info(data);
                if (data.is_succ) {
                    $scope.bags = data.data.records;

                    angular.forEach($scope.bags, function (value, index) {
                        if (value.valid_end) {
                            value.valid_end = changeTimestamp(value.valid_end);
                        }
                        if (value.pay_time) {
                            value.pay_time = changeTimestamp(value.pay_time);
                        }
                        if (value.acquire_time) {
                            value.acquire_time = changeTimestamp(value.acquire_time);
                        }
                    });

                    angular.extend($scope.pagebar.config, {
                        total: data.data.page_count,
                        page: page
                    });
                }
            });
        }

        function changeTimestamp (timestamp) {
            var time = new Date(timestamp*1000);
            // console.log(start, end);
            var date = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();

            return date;
        }

        function changeTabType (type) {
            if (type !== $scope.tabType) {
                $scope.tabType = type;
                getRedbagList();
            }
        }

        function exchangeRedbag(o) {

            if ($scope.exchangeLoading) return;
            // console.log(o);
            $scope.exchangeLoading = true;
            o.exchangeLoading = true;
            
            redbag.exchangeRedbag(o.bonus_id).then(function (data) {
                $scope.exchangeLoading = false;
                o.exchangeLoading = false;
                if (data.is_succ) {
                    layer.msg('红包兑换成功', {
                        time: 2000
                    });
                    getRedbagList($scope.page);
                } else {
                    layer.msg(data.message, {
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
    }
})();
