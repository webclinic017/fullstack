;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebDownloadController', WebDownloadController);

    WebDownloadController.$inject = ['$scope'];

    function WebDownloadController ($scope) {

        $(".img_box").qrcode({
            text: "http://192.168.1.61/m/blank",
            width: 114,
            height: 114
        });
    }
})();