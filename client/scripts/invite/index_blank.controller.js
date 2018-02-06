;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('InviteIndexBlankController', InviteIndexBlankController);

    InviteIndexBlankController.$inject = ['$scope', '$location', 'config', 'invite', '$window'];

    function InviteIndexBlankController ($scope, $location, config, invite, $window) {
        var usercode = $location.search().usercode;

        // alert(1);
        setInviteFriendsLink();

        function setInviteFriendsLink () {
            invite.setInviteFriendsLink(usercode).then(function (data) {

                console.info($location.url());
                if ($scope.userstatus.logined) {
                    $location.url("/space/invest/current");
                } else {
                    $location.url("/account/login");
                }
            });
        }
    }
})();
