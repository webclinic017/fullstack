;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebDownloadController', WebDownloadController);

    WebDownloadController.$inject = ['$scope', '$location'];

    function WebDownloadController ($scope, $location) {
        console.log($location.host());
        $scope.androidImg = "/images/web/download_m_blank_cn_20190226.png";
        if ($location.host() === 'globaldemo.tigerwit.com' || $location.host() === 'w.dev.tigerwit.com') {
            $scope.androidImg = "/images/web/download_m_blank_cn_demo.png";
        }
        // $(".img_box").qrcode({
        //     text: "http://192.168.1.61/m/blank",
        //     width: 114,
        //     height: 114
        // });
    }
})();