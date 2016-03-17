;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('NoticeIndexController', NoticeIndexController);

    NoticeIndexController.$inject = ['$scope', '$interval', '$state', 'utils', 'account'];

    function NoticeIndexController($scope, $interval, $state, utils, account) {

        $scope.pagebar = {
            config: {
                // total: , 总页数
                size: 3,
                page: 1
            },
            pages: [],
            //selectPage: , bind to pagination.selectPage
            getList: getNoticeList
        };
        $scope.page = 1;
        $scope.noticeList = [];

        var pagesize = 10;

        getNoticeList(1);


        // 获取消息列表
        function getNoticeList(page) {
            $scope.page = page;
            account.getNoticeList(page, pagesize).then(function(data) {
                console.info(data.data);
                $scope.noticeList = data.data;

                // $scope.$emit('showLoadingImg');

                angular.extend($scope.pagebar.config, {
                    total: utils.getTotal(data.num, pagesize),
                    page: page
                });

                angular.forEach($scope.noticeList, function(value, key) {
                    $scope.noticeList[key].show = true;
                });

                // $scope.$broadcast('hideLoadingImg');
            });
        }

    }
})();