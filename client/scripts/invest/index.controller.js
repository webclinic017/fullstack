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
        // $scope.authenAsset = false; // 是否为真实账户
        // $scope.$on('quack.result', function(e, resolve){
        //     $scope.authenAsset = true;
        // })
        $scope.quackUnknow = true;  // 是否为新注册账户
        $scope.$on('quack.unknow', function(e, resolve){
            // console.log(resolve)
            $scope.quackUnknow = resolve.quackUnknow;
        })
    }
})();
