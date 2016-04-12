;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('StudyVideoController', StudyVideoController);

    StudyVideoController.$inject = ['$scope', 'market', '$modal'];

    function StudyVideoController ($scope, market, $modal) {
        $scope.videos = [
            {
                "title": "第二十二期 2015-11-10",
                "src": "http://bd.tigerwit.com/files/video/20151110.flv"
            },
            {
                "title": "第二十一期 2015-11-03",
                "src": "http://bd.tigerwit.com/files/video/20151103.flv"
            },
            {
                "title": "第二十期 2015-10-27",
                "src": "http://bd.tigerwit.com/files/video/20151027.flv"
            },
            {
                "title": "第十九期 2015-10-20",
                "src": "http://bd.tigerwit.com/files/video/20151020.flv"
            },
            {
                "title": "第十八期 2015-10-13",
                "src": "http://bd.tigerwit.com/files/video/20151013.flv"
            },
            {
                "title": "第十七期 2015-09-29",
                "src": "http://bd.tigerwit.com/files/video/20150929.flv"
            },
            {
                "title": "第十六期 2015-09-22",
                "src": "http://bd.tigerwit.com/files/video/20150922.flv"
            },
            {
                "title": "第十五期 2015-09-15",
                "src": "http://bd.tigerwit.com/files/video/20150915.flv"
            },
            {
                "title": "第十四期 2015-09-08",
                "src": "http://bd.tigerwit.com/files/video/20150908.flv"
            },
            {
                "title": "第十三期 2015-09-01",
                "src": "http://bd.tigerwit.com/files/video/20150901.flv"
            },
            {
                "title": "第十二期 2015-08-25",
                "src": "http://bd.tigerwit.com/files/video/20150825.flv"
            },
            {
                "title": "第十一期 2015-08-18",
                "src": "http://bd.tigerwit.com/files/video/20150818.flv"
            },
            {
                "title": "第十期 2015-08-11",
                "src": "http://bd.tigerwit.com/files/video/20150811.flv"
            },
            {
                "title": "第九期 2015-08-04",
                "src": "http://bd.tigerwit.com/files/video/20150804.flv"
            },
            {
                "title": "第八期 2015-07-28",
                "src": "http://bd.tigerwit.com/files/video/20150728.flv"
            },
            {
                "title": "第七期 2015-07-21",
                "src": "http://bd.tigerwit.com/files/video/20150721.flv"
            },
            {
                "title": "第六期 2015-07-14",
                "src": "http://bd.tigerwit.com/files/video/20150714.flv"
            },
            {
                "title": "第五期 2015-07-07",
                "src": "http://bd.tigerwit.com/files/video/20150707.flv"
            },
            {
                "title": "第四期 2015-06-30",
                "src": "http://bd.tigerwit.com/files/video/20150630.flv"
            },
            {
                "title": "第三期 2015-06-23",
                "src": "http://bd.tigerwit.com/files/video/20150623.flv"
            },
            {
                "title": "第二期 2015-06-16",
                "src": "http://bd.tigerwit.com/files/video/20150616.flv"
            },
            {
                "title": "第一期 2015-06-09",
                "src": "http://bd.tigerwit.com/files/video/20150609.flv"
            }
        ];

        $scope.openVideoMdl = openVideoMdl;

        // market.getVideoList().then(function (data) {
        //     $scope.videos = data;
        // });

        function openVideoMdl (video) {
            $modal.open({
                templateUrl: '/views/study/video_modal.html',
                size: 'lg',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    // console.info(video);

                    $scope.modal = {
                        title: video.title,
                        src: video.src
                    };
                    $scope.closeModal = closeModal;

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }
    }
})();