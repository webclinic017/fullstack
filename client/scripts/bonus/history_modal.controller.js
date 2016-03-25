;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('BonusModalController', BonusModalController);

    BonusModalController.$inject = ['$scope', '$modalInstance', 'asset',
            'passedScope'];

    function BonusModalController($scope, $modalInstance, asset, passedScope) {
        $scope.bonusDetails = [];
        $scope.closeModal = closeModal;
        var copierUsercode = passedScope.copierUsercode;
        var date = passedScope.date;
        
        asset.getBonusDetail(copierUsercode, date).then(function (data) {
            $scope.bonusDetails = data.data;
            $scope.$broadcast('hideLoadingImg');
        });

        function closeModal() {
            $modalInstance.dismiss();
        }
    }    
})();