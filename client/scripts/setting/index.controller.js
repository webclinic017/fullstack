;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingIndexController', SettingIndexController);

    SettingIndexController.$inject = ['$scope', 'account'];

    function SettingIndexController($scope, account) {
        $scope.settingInfo = {};

        account.getSettingInfo().then(function (data) {
            if (!data) return;
            $scope.settingInfo = data;
        });
    }
})();