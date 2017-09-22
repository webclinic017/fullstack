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
                page: 1
            },
            pages: [],
            pagesBtn: [],
            //selectPage: , bind to pagination.selectPage
            getList: getNoticeList
        };
        var pagesize = 5;

        $scope.page = 1;
        $scope.noticeList = {
            trade: [],
            system: []
        }
        $scope.currentMsg = 'trade';
        $scope.openNotice = openNotice;
        $scope.chooseMsg = chooseMsg;
        $scope.unreadMsg = {
            trade: 0,
            system: 0,
        }

        // 获取消息
        getNoticeList(1, 'trade');
        getNoticeList(1, 'system');

        function chooseMsg(type) {
            $scope.currentMsg = type;
            getNoticeList(1, type)
            if ($scope.unreadMsg[type] > 0) {
                readNotice(type)
            }
        }

        // 获取消息列表
        function getNoticeList(page, type) {
            type = type ? type : $scope.currentMsg; 
            $scope.$broadcast('showLoadingImg');
            $scope.page = page;
            var offset = (page - 1) * pagesize;
            account.getNoticeList(offset, pagesize, type == 'trade' ? 2 : 1).then(function (data) {
                // console.log(data);
                $scope.$broadcast('hideLoadingImg');
                if (!data) return;
                if (data.is_succ) {
                    $scope.noticeList[type] = data.data.records;
                    angular.forEach($scope.noticeList[type], function (value, index) {
                        value.openOrClose = 'open';
                        if (value.content.length > 150) {
                            value.contentOmit = value.content.substring(0, 150) + '...';
                        } else {
                            value.contentOmit = value.content;
                        }
                    });
                    angular.extend($scope.pagebar.config, {
                        total: data.data.page_count,
                        page: page
                    });
                }
            });
        }

        // 获取未读消息
        getUnreadMsg()
        function getUnreadMsg() {
            account.getUnreadLength().then(function (data) {
                if (!data) return;
                var res = data.data
                if (data.is_succ) {
                    $scope.unreadMsg = {
                        trade: ~~res.trade,
                        system: ~~res.system
                    }
                }
            });
        }

        // 展开/收起 消息 status-> 0 收起 1 展开
        function openNotice(notice, status) {
            if (status) {
                notice.contentOmit = notice.content;
                notice.openOrClose = 'close';
            } else {
                notice.contentOmit = notice.content.substring(0, 150) + '...';
                notice.openOrClose = 'open';
            }
        }

        // 所有消息设置为已读
        function readNotice(type) {
            account.getAllRead(type == 'trade' ? 2 : 1).then(function (data) {
                // 读完消息刷新未读
                getUnreadMsg()
            });
        }

        // 格式化文本
        $scope.formatText = function (text, type) {
            var splitor1 = '\：';
            var splitor2 = '\:';
            if (type) {
                var taggedStr = ''
                var textArr = text.split('\n')
                if (textArr.length > 1) {
                    angular.forEach(textArr, function (item, index) {
                        // console.log(item)
                        if (item.indexOf(splitor1) != -1) {
                            var splitedStr = item.split(splitor1);
                            taggedStr += "<span class='info_desp'>" + splitedStr[0] + splitor1 + "</span>" + splitedStr[1] + "</br>"
                        } 
                        // else if (item.indexOf(splitor2) != -1) {
                        //     var splitedStr = item.split(splitor2);
                        //     taggedStr += "<span class='info_desp'>" + splitedStr[0] + splitor2 + "</span>" + splitedStr[1] + "</br>"
                        // } 
                        else {
                            taggedStr += item + "</br>"
                        }
                    })
                    return taggedStr
                } else {
                    return text
                }
            } else {
                return text.replace(/\n/g, '<br>');
            }
        }
    }
})();
