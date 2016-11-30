;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('invite', invite);

    invite.$inject = ['$http', 'api'];

    function invite($http, api) {
        var o = api.invite;
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
            return $http.get(o.getInviteFriendsInfoApi, {
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
            return $http.post(o.setInviteFriendsLinkApi, {
                usercode: usercode
            });
        }

    }
})();
