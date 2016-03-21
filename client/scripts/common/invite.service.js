;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('invite', invite);

    invite.$inject = ['$http'];

    function invite($http) {
        var service = {
            getInviteFriendsInfo: getInviteFriendsInfo,
            setInviteFriendsLink: setInviteFriendsLink
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

        /*
         *  邀请好友链接请求接口
         */
        function setInviteFriendsLink (usercode) {
            return $http.post('/action/public/v3/set_invite_code', {
                usercode: usercode
            });
        }

    }
})();
