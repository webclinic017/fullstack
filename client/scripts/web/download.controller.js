;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebDownloadController', WebDownloadController);

    WebDownloadController.$inject = ['$scope', '$location', 'invite'];

    function WebDownloadController($scope, $location, invite) {
        $scope.androidLiveImg = true;
        if ($location.host() === 'globaldemo.tigerwit.com' || $location.host() === 'w.dev.tigerwit.com') {
            $scope.androidLiveImg = false;
        }

        // 显示二维码
        function qrcode(system, platform) {
            QrCodeWithLogo.toImage({
                image: document.getElementById('qrcode-img__' + platform + '__' + system), // 换成你的canvas节点
                content: $location.host() + '/m/blank?system=' + system + '&platform=' + platform,
                width: 180,
                nodeQrCodeOptions: {
                    margin: 1
                },
                logo: {
                    src: './images/logo@2x.png',
                    radius: 8,
                    logoSize: 0.22
                }
            })
        }
        function showQrcode() {
            var qrcodeImg = $('.qrcode-img');
            for (var i = 0; i < qrcodeImg.length; i++) {
                var ele = qrcodeImg[i];
                qrcode($(ele).attr('system'), $(ele).attr('platform'))
            }
        }
        showQrcode()

        $scope.client = 0;  // 0是安卓，1是ios
        $scope.clientClick = function (num) {
            $scope.client = num;
        };

        var source = $scope.checkUserSource();

        invite.setUserSource({
            source: JSON.stringify(source)
        });
    }
})();