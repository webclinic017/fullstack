;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('market', market);

    market.$inject = ['$http', 'api', 'publicHttp'];

    function market ($http, api, publicHttp) {
        var o = api.market;
        var service = {
            getVideoList: getVideoList,
            checkPhone: checkPhone
        };
        return service;

        /*
         *  Market Service 获取视频列表
         *
         *  method getVideoList   
         */
         function getVideoList () {
            return $http.get(o.getVideoListApi);
         }

         /**
          * Market Service 申请成为代理商
          *
          * @method checkPhone
          * 
          * @param {Number} phone
          * @param {Number} code   品牌部推广页（/bd/brand_proxy） 渠道
          * @param {Number} sources  渠道—就是他们提供的q  不为空
          * @param {Number} ad_position  广告合作商和位置他们提供的w  不为空
          */
         function checkPhone (params) {
            return publicHttp.dealPublicRequest(o.checkPhoneApi, 'POST', params);
         }
    }
})();