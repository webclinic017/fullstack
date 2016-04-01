;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('market', market);

    market.$inject = ['$http'];

    function market ($http) {
        var service = {
            getVideoList: getVideoList
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
    }
})();