;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twWindowHeight', twWindowHeight);

    function twWindowHeight($document) {
        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                sizeIt()

                window.addEventListener('resize', function(){
                    sizeIt()
                })

                function sizeIt(){
                    var width = window.innerWidth
                    var height = window.innerHeight
                    
                    if (attrs.hasNavbar) {
                        height -= 69
                    }
                    if(attrs.minHeight && height <= Number(attrs.minHeight)){
                        height = Number(attrs.minHeight)
                    }
                    if (attrs.fullWidth) {
                        if(attrs.minWidth && width <= Number(attrs.minWidth)){
                            width = Number(attrs.minWidth)
                        }
                        element.width(width + 'px')
                    }
                    element.height(height + 'px')
                    // console.log('size:', width, 'x' ,height)
                }
            }
        }
    }
})();