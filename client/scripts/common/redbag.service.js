;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('redbag', redbag);

    redbag.$inject = ['$http', 'api'];

    function redbag($http, api) {
        var o = api.redbag;
        var service = {
            getRedbagPool: getRedbagPool,
            getRedbagList: getRedbagList,
            receiveRedbag: receiveRedbag,
            exchangeRedbag: exchangeRedbag
        };
        return service;

        /**
         * Redbag Service 获取红包中心红包
         *
         * @method getRedbagPool
         * @param {Number} limit 
         * @param {Number} offset
         */
        function getRedbagPool(offset, limit) {

            return $http.get(o.getRedbagPoolApi, {
                params: {
                    limit: limit,
                    offset: offset
                }
            });
        }

        /**
         * Redbag Service 获取我的红包列表
         *
         * @method getRedbagList
         * @param {Number} page 
         * @param {Number} pagesize
         * @param {string} type     红包类型：不传是拿全部， 1 or 2 => '可用红包',3 => '已兑换',4 => '已过期'
         * @param {string} sort     排序 desc降序 asc升序 默认时间降序
         */
        function getRedbagList(params) {

            return $http.get(o.getRedbagListApi, {
                params: params
            });
        }

        /**
         * Redbag Service 领取红包
         *
         * @method receiveRedbag
         *
         * @param {Number} id   红包ID 
         */
        function receiveRedbag(id) {

            return $http.post(o.receiveRedbagApi, {
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

            return $http.post(o.exchangeRedbagApi, {
                user_bonus_id: user_bonus_id
            });
        }
    }
})();
