;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('market', market);

    market.$inject = ['$http'];

    function market ($http) {
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
            return $http.get('/data/video_list.json');
         }

         /**
          * Market Service 申请成为代理商
          *
          * @method checkPhone
          * 
          * @param {Number} phone
          */
         function checkPhone (phone) {
            return $.post('/action/public/v3/agent', {
                phone: phone
            });
         }
    }
})();