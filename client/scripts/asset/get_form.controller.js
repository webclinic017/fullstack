;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('GetFormController', GetFormController);

        GetFormController.$inject = ['$scope'];

    function GetFormController($scope) {
        // 兼容ng-include作用域，返回form
        $scope.$on('getwithdrawForm', function(e, withdrawForm) {
            if(!$scope.withdrawForm.$invalid) {
                withdrawForm.amount = false;
            }
        });
    }
})();