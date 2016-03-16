;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('invite', invite);

    invite.$inject = ['$http'];

    function invite($http) {
        var service = {
            getInviteFriendsInfo: getInviteFriendsInfo
        };
        return service;

        /*
         * Invite Service 获取邀请信息
         * 需要登录
         *
         * @method getInviteFriendsInfo
         * @param {Number} page 当前页
         * @param {Number} pagesize 单页显示数
         */
        function getInviteFriendsInfo (page, pagesize) {
            return $http.get('/action/public/v3/get_invite_friends_info', {
                params: {
                    page: page,
                    pagesize: pagesize
                }
            });
        }
       
    }
})();