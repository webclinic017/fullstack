;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('redbag', redbag);

    redbag.$inject = ['$http', 'api', 'publicHttp'];

    function redbag($http, api, publicHttp) {
        var o = api.redbag;
        var service = {
            getRedbagPool: getRedbagPool,
            getRedbagList: getRedbagList,
            receiveRedbag: receiveRedbag,
            exchangeRedbag: exchangeRedbag,
            getRedbagNum: getRedbagNum,
            setRedbagReaded: setRedbagReaded
        };
        return service;

        /**
         * Redbag Service 获取红包中心红包
         *
         * @method getRedbagPool
         * @param {Number} page 
         * @param {Number} pagesize
         */
        function getRedbagPool(offset, limit) {

            return publicHttp.dealPublicRequest(o.getRedbagPoolApi, 'GET', {
                offset: offset,
                limit: limit
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

            return $http.get(o.getRedbagNumApi);
        }

        /**
         * Redbag Service 设置红包已读
         *
         * @method setRedbagReaded
         * 
         */
        function setRedbagReaded() {

            return $http.put(o.setRedbagReadedApi);
        }
    }
})();
