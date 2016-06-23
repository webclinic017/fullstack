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

        $scope.openNotice = openNotice;

        getNoticeList(1);

        if ($location.path() === '/space/notice') {
            readAllNotice();
            // console.info("readAll");
        }

        // 获取消息列表
        function getNoticeList(page) {
            $scope.page = page;
            account.getNoticeList(page, pagesize).then(function(data) {
                
                $scope.noticeList = data.data;

                angular.forEach($scope.noticeList, function (value, index) {
                    value.openOrClose = 'open';

                    if (value.content.length > 150) {
                        value.contentOmit = value.content.substring(0, 150) + '...';
                    } else {
                        value.contentOmit = value.content;
                    }
                });

                $scope.$emit('showLoadingImg');

                angular.extend($scope.pagebar.config, {
                    total: utils.getTotal(data.num, pagesize),
                    page: page
                });

                $scope.$broadcast('hideLoadingImg');
            });
        }

        // 展开/收起 消息 status-> 0 收起 1 展开
        function openNotice (notice, status) {
            if (status) {
                notice.contentOmit = notice.content;
                notice.openOrClose = 'close';
            } else {
                notice.contentOmit = notice.content.substring(0, 150) + '...';
                notice.openOrClose = 'open';
            }
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
