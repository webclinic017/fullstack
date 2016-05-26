;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('NoticeIndexController', NoticeIndexController);

    NoticeIndexController.$inject = ['$scope', '$location', '$interval', '$state', 'utils', 'account'];

    function NoticeIndexController($scope, $location, $interval, $state, utils, account) {

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

        if ($location.path() === '/space/notice') {
            readAllNotice();
            // console.info("readAll");
        }

        // 获取消息列表
        function getNoticeList(page) {
            $scope.page = page;
            account.getNoticeList(page, pagesize).then(function(data) {
                // console.info(data.data);
                $scope.noticeList = data.data;

                $scope.$emit('showLoadingImg');

                angular.extend($scope.pagebar.config, {
                    total: utils.getTotal(data.num, pagesize),
                    page: page
                });

                $scope.$broadcast('hideLoadingImg');
            });
        }

        // 所有消息设置为已读
        function readAllNotice() {
            account.getAllRead().then(function(data) {});
        }
        $scope.formatText = function(text){
            var newText = text.replace(/\n/g,'<br>');
            return newText;
        }
    }
})();
