;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twTabs', twTabs);

    function twTabs($document) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                
                $(".hy-tabs-ul li").each(function(index){
                    var liCurrent = $(this);
                    var liIndex = index;

                    liCurrent.click(function(){
                        // console.info(index);
                        liCurrent.addClass("hy-tabs-ul-active").siblings().removeClass("hy-tabs-ul-active");
                        $(".hy-tabs-con .hy-tabs-con1:eq(" + liIndex +")").addClass("div-block").siblings().removeClass("div-block");

                    });

                });
            }
        }
    }
})();