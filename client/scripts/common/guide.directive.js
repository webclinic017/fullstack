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
                '<div ng-if="guideShow" ng-click="nextGuide()" style="position: fixed;top: 0;left: 0;z-index: 100000;">'+
                    '<img style="width: 100%;height: 100%;" src="{{src}}">'+
                '</div>',
            link: function (scope, element, attrs) {
              var ind = 0;
              if (localStorage[scope.guideType]) return;
              localStorage[scope.guideType] = true;
              
              if (scope.srcList.length) {
                scope.guideShow = true;
                scope.src = scope.srcList[ind];
              }
                
              scope.nextGuide = function () {
                ind++;
                if (ind <= scope.srcList.length -1) {
                  scope.src = scope.srcList[ind];
                } else {
                  scope.guideShow = false;
                }
              };
            }
        };
    }
})();