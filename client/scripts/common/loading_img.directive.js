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
                '<div style="position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background-image:url(ngsrc/bg.png)">' +
                    '<img src="/ngsrc/loading.gif" style="position:absolute;top:50%;left:50%;' +
                            'width:60px;height:60px;margin-top:-30px;margin-left:-30px;">' +
                '</div>',
            link: function (scope, element, attrs) {

                if (attrs.color === 'dark') {
                    element.css({
                        background: 'none'
                    });
                } else {
                }

                scope.$on('showLoadingImg', function () {
                    element.css({
                        display: 'block',
                        opacity: 1
                    });
                });

                scope.$on('hideLoadingImg', function () {
                    element.animate({
                        opacity: 0
                    }, 500 ,function () {
                        $(this).css('display','none');
                    });
                });
            }
        };
    }
})();
