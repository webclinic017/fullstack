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
        $scope.bonusList = [];
        $scope.selectTxt = selectTxt;
        var pagesize = 10;


        getInfo();
        getInviteFriendsInfo(1);

        function getInviteFriendsInfo (page) {
            invite.getInviteFriendsInfo(page, pagesize).then(function (data) {
                if (data.is_succ) {
                    $scope.friends = data;
                    $scope.bonusList = data.data;
                }
                angular.extend($scope.pagebar.config, {
                    total: utils.getTotal(data.sum, pagesize),
                    page: page
                });
            });
        }



        function getInfo () {
            account.getPersonalInfo().then(function (data) {
                $scope.invitation.usercode = data.usercode;
                $scope.invitation.link = $location.protocol() + '://' + $location.host() + '/space/#/space/invite/come?usercode=' + data.usercode;
            });
        }


        function selectTxt() {
            var $input = $document.find('input[name="link"]');
            $input.focus();
            $input.select();
        }
    }
})();
