;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('BonusModalController', BonusModalController);

    BonusModalController.$inject = ['$scope', '$modalInstance', 'utils', 'asset',
            'passedScope'];

    function BonusModalController($scope, $modalInstance, utils, asset, passedScope) {
        $scope.bonusDetails = [];

        $scope.closeModal = closeModal;

        $scope.pagebar = {
            config: {
                // total: , 总页数
                size: 3,
                page: 1
            },
            pages: [],
            getList: getList
        };

        var pagesize = 10;


        var copierUsercode = passedScope.usercode;
        var date = passedScope.date;

        getList(1);

        function getList(page) {
            $scope.$broadcast('showLoadingImg');

            asset.getBonusDetail(date, copierUsercode, page, pagesize).then(function (data) {
                $scope.bonusDetails = data.data;
                console.info(data.data);

                angular.extend($scope.pagebar.config, {
                    total: utils.getTotal(data.data.length, pagesize),
                    page: page
                });
                $scope.$broadcast('hideLoadingImg');
            });
        }


        function closeModal() {
            $modalInstance.dismiss();
        }
    }
})();
