;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestIndexController', InvestIndexController);

        InvestIndexController.$inject = ['$scope'];

    /**
     * @name InvestIndexController
     * @desc
     */
    function InvestIndexController($scope) {
        $scope.authenAsset = false;
        $scope.$on('quack.result', function(e, resolve){
            $scope.authenAsset = true;
        })
    }
})();
