;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twLoadingImg', twLoadingImg);

    function twLoadingImg() {
        return {
            restrict: 'A',
            replace: true,
            template: 
                '<div class="loading_img active">' + 
                    '<img src="/ngsrc/loading.gif">' + 
                '</div>',
            link: function (scope, element, attrs) {

                scope.$on('showLoadingImg', function () {
                    element.addClass('active');
                });

                scope.$on('hideLoadingImg', function () {
                    element.removeClass('active');
                });
            }
        };
    }
})();
