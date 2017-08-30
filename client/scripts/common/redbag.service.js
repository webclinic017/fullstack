;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('redbag', redbag);

    redbag.$inject = ['$http', 'api', 'publicHttp', '$cookies'];

    function redbag($http, api, publicHttp, $cookies) {
        var o = api.redbag;
        var service = {
            getRedbagPool: getRedbagPool,
            getRedbagList: getRedbagList,
            receiveRedbag: receiveRedbag,
            exchangeRedbag: exchangeRedbag,
            getRedbagNum: getRedbagNum,
            setRedbagReaded: setRedbagReaded,
            checkHonorStatus: checkHonorStatus,
            receiveHonor: receiveHonor,
            exchangeHonor: exchangeHonor
        };
        return service;

        /**
         * Redbag Service 获取红包中心红包
         *
         * @method getRedbagPool
         * @param {Number} page 
         * @param {Number} pagesize
         * @param {Number} group  条件分组
         */
        function getRedbagPool(offset, limit, group) {

            return publicHttp.dealPublicRequest(o.getRedbagPoolApi, 'GET', {
                offset: offset,
                limit: limit,
                group: group
            });
        }

        /**
         * Redbag Service 获取我的红包列表
         *
         * @method getRedbagList
         * @param {Number} offset 
         * @param {Number} limit
         * @param {string} type     红包类型：不传是拿全部， 1 => '可用红包',2 => '红包记录'
         */
        function getRedbagList(params) {

            return publicHttp.dealPublicRequest(o.getRedbagListApi, 'GET', params);
        }

        /**
         * Redbag Service 领取红包
         *
         * @method receiveRedbag
         *
         * @param {Number} id   红包ID 
         */
        function receiveRedbag(id) {
            return publicHttp.dealPublicRequest(o.receiveRedbagApi, 'PUT', {
                id: id
            });
        }

        /**
         * Redbag Service 兑换红包
         *
         * @method exchangeRedbag
         *
         * @param {Number} user_bonus_id   用户领取的红包列表id 
         */
        function exchangeRedbag(user_bonus_id) {
            return publicHttp.dealPublicRequest(o.exchangeRedbagApi, 'POST', {
                id: user_bonus_id
            });
        }

        /**
         * Redbag Service 获取新收到红包数量
         *
         * @method getRedbagNum
         * 
         */
        function getRedbagNum() {
            return publicHttp.dealPublicRequest(o.getRedbagNumApi, 'GET');
        }

        /**
         * Redbag Service 设置红包已读
         *
         * @method setRedbagReaded
         * 
         */
        function setRedbagReaded() {

            return publicHttp.dealPublicRequest(o.setRedbagReadedApi, 'PUT');
        }

        // 荣耀王者活动接口
        function checkHonorStatus () {
            var token = $cookies["token"] || '';
            var $url = o.checkHonorStatusApi+"?token="+token;
            return $http.get($url)
        }
        function receiveHonor () {
            var token = $cookies["token"] || '';
            var $url = o.receiveHonorApi+"?token="+token;
            return $http.post($url);
        }
        function exchangeHonor (address) {
            var token = $cookies["token"] || '';
            var $url = o.exchangeHonorApi+"?token="+token;
            return $http.post($url, {
                address: address
            });
        }
    }
})();
