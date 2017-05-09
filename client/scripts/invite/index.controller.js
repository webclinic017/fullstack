;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InviteIndexController', InviteIndexController);

    InviteIndexController.$inject = ['$scope', '$document', '$location', 'invite', 'utils', 'account', 'config'];

    function InviteIndexController($scope, $document, $location, invite, utils, account, config) {

        $scope.invitation = {
            // usercode: 3303,
            // link: 'https://www.tigerwit.com/personal/#/invite/come?usercode=3303'
        };
        $scope.pagebar = {
            config: {
                // total: , 总页数
                size: 3,
                page: 1
            },
            pages: [],
            //selectPage: , bind to pagination.selectPage
            getList: getInviteFriendsInfo
        }
        $scope.friends = {};
        $scope.friendsNum = 0;
        $scope.bonusList = [];
        $scope.selectTxt = selectTxt;
        var pagesize = 10;

        getInfo();
        getInviteFriendsInfo(1);

        function getInviteFriendsInfo (page) {
            invite.getInviteFriendsInfo(page, pagesize).then(function (data) {
                console.info(data);
                if (data.is_succ) {
                    $scope.friends = data;
                    $scope.bonusList = data.data;
                    $scope.friendsNum = data.sum;
                }
                angular.extend($scope.pagebar.config, {
                    total: utils.getTotal(data.sum, pagesize),
                    page: page
                });
            });
        }

        function getInfo () {
            account.getPersonalInfo().then(function (data) {
                console.log(data);
                $scope.invitation.usercode = data.usercode;
                $scope.invitation.link = $location.protocol() + '://' + $location.host() + '/space/#/space/invite/come?usercode=' + data.usercode;
            });
        }


        function selectTxt() {
            var $input = $document.find('input[name="link"]');
            $input.focus();
            $input.select();
            if (document.execCommand("Copy")) {
                console.log("已复制到剪贴板");
            } else {
                consoel.log("浏览器不支持复制到剪贴板");
            }
            
        }
    }
})();
