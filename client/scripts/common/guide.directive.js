;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twGuide', twGuide);

    twGuide.$inject = ['$timeout', 'lang'];

    // 条件与条款 导航
    function twGuide($timeout, lang) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                srcList: '=',
                guideType: '@'
            },
            template: 
                '<div ng-if="guideShow" ng-click="nextGuide()" style="position: fixed;top: 0;z-index: 100000;width:2560px;height:1285px;left: 50%;margin-left: -1280px;" ng-style="src">'+
                '</div>',
            link: function (scope, element, attrs) {
              var ind = 0;
            //   if (localStorage[scope.guideType]) return;
            //   localStorage[scope.guideType] = true;
              
              if (scope.srcList.length) {
                scope.guideShow = true;
                scope.src = {
                    background: "url("+scope.srcList[ind]+") #444 no-repeat"
                };
              }
                
              scope.nextGuide = function () {
                ind++;
                if (ind <= scope.srcList.length -1) {
                  scope.src = {
                    background: "url("+scope.srcList[ind]+") #444 no-repeat"
                  };
                } else {
                  scope.guideShow = false;
                }
              };
            }
        };
    }
})();