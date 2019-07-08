;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebDownloadController', WebDownloadController);

    WebDownloadController.$inject = ['$scope', '$location'];

    function WebDownloadController ($scope, $location) {
        $scope.androidLiveImg = true;
        if ($location.host() === 'globaldemo.tigerwit.com' || $location.host() === 'w.dev.tigerwit.com') {
            $scope.androidLiveImg = false;
        }
        // $(".img_box").qrcode({
        //     text: "http://192.168.1.61/m/blank",
        //     width: 114,
        //     height: 114
        // });
    }
})();