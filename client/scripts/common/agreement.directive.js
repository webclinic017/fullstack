;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twAgreementTab', twAgreementTab);

    twAgreementTab.$inject = ['$timeout', 'lang'];

    // 条件与条款 导航
    function twAgreementTab($timeout, lang) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                tabList: '='
            },
            template: 
                '<div class="sign">'+
                    '<span><i class="fa fa-list" aria-hidden="true"></i></span>'+
                    '<ul class="lst">'+
                        '<li ng-repeat="tab in tabList">'+
                            '<a href="" ng-click="toTab(tab)" target="_parent">{{tab.title}}</a>'+
                        '</li>'+
                    '</ul>'+
                '</div>',
            link: function (scope, element, attrs) {
                $(".sign span").on('click', function (e) {
                    e.stopPropagation();
                    $(".sign .lst").slideToggle(200);
                });

                $(document).on('click', function () {
                    $(".sign .lst").slideUp(200);
                });

                scope.toTab = function (tab) {
                    $(".sign .lst").slideUp(200);
                    var t = $(document).find("[data-action="+tab.link+"]").offset().top - 69;
                    $("body,html").animate({ scrollTop: t }, 200);
                };
                
            }
        };
    }
})();