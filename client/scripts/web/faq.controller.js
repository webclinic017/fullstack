;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebFaqController', WebFaqController);

    WebFaqController.$inject = ['$scope'];

    function WebFaqController ($scope) {
        $scope.toggleNav = function($event){
            var target = angular.element($event.target).find(".fa");
            $scope.show_faq = !$scope.show_faq;
            if(target.hasClass('fa-angle-down')){
                target.removeClass('fa-angle-down');
            }else{
                target.addClass('fa-angle-down');
            }
        };
    }

})();