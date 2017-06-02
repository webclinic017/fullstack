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
          */
         function checkPhone (phone) {
            return publicHttp.dealPublicRequest(o.checkPhoneApi, 'POST', {
                phone: phone
            });
         }
    }
})();