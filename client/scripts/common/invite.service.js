;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('invite', invite);

    invite.$inject = ['$rootScope', 'api', 'publicHttp'];

    function invite($rootScope, api, publicHttp) {
        var o = api.invite;
        var service = {
            getInviteFriendsInfo: getInviteFriendsInfo,
            setInviteFriendsLink: setInviteFriendsLink,
            setUserSource: setUserSource,
            getInviteRules: getInviteRules,
            getModuleManagerment: getModuleManagerment,
            getAdvertiseRecords: getAdvertiseRecords,
            getSymbolQuoteStatus: getSymbolQuoteStatus
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
            return publicHttp.dealPublicRequest(o.getInviteFriendsInfoApi, 'GET', {
                page: page,
                pagesize: pagesize
            });
        }

        /*
         *  邀请好友链接请求接口
         */
        function setInviteFriendsLink (usercode) {
            return publicHttp.dealPublicRequest(o.setInviteFriendsLinkApi, 'POST', {
                user_code: usercode
            });
        }

        function setUserSource (params) {
            return publicHttp.dealPublicRequest(o.setUserSourceApi, 'POST', params);
        }

        function getInviteRules () {
            return publicHttp.dealPublicRequest(o.getInviteRulesApi, 'GET');
        }

        function getModuleManagerment (direction) {
            return publicHttp.dealPublicRequest(o.getModuleManagermentApi, 'GET', {
                direction: direction
            });
        }

        /**
         * Account Service 获取首页轮播图信息
         *
         * @method getAdvertiseRecords
         *      @params identifier    wheel 首页轮播图，popup 首页弹窗
         *
         */
        function getAdvertiseRecords(identifier, world_code) {
            return publicHttp.dealPublicRequest(o.getAdvertiseRecords, 'GET', {
                identifier: identifier,
                world_code: world_code
            });
        }

        // 首页报价开／停盘状态
        function getSymbolQuoteStatus (symbols) {
            return publicHttp.dealPublicRequest(o.getSymbolQuoteStatusApi, 'GET', {
                symbols: symbols
            })
        }

    }
})();
