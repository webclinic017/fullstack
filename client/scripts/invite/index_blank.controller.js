;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('InviteIndexBlankController', InviteIndexBlankController);

    InviteIndexBlankController.$inject = ['$scope', 'config', 'invite', '$location', '$window'];

    function InviteIndexBlankController ($scope, config, invite, $location, $window) {
        var usercode = $location.search().usercode;

        setInviteFriendsLink();
        function setInviteFriendsLink () {
            invite.setInviteFriendsLink(usercode).then(function (data) {
                if (data.status === 0) {
                    $window.location.replace(config.getUrlPrefix(config.server).main);
                } else {
                    console.log('记录邀请者的 usercode 失败');
                    $window.location.replace(config.getUrlPrefix(config.server).main);
                }
            });
        }
    }
})();
