;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderIndexController', TraderIndexController);

    TraderIndexController.$inject = ['$scope', '$state', 'trader'];

    function TraderIndexController($scope, $state, trader) {
        $scope.master = {};
        var usercode;

        usercode = $state.params.usercode;
        // console.info(usercode);     // undefined  ?

        trader.getMasterDetail(usercode).then(function (data) {
            $scope.master = data;
        });
    }
})();