;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('StudyVideoController', StudyVideoController);

    StudyVideoController.$inject = ['$scope', 'market', '$modal'];

    function StudyVideoController ($scope, market, $modal) {
        $scope.videos = [];

        $scope.openVideoMdl = openVideoMdl;

        market.getVideoList().then(function (data) {
            $scope.videos = data;
        });

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