;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('MasterGradeController', MasterGradeController);

    MasterGradeController.$inject = ['$scope', 'trader', '$state'];

    function MasterGradeController($scope, trader, $state) {
        $scope.masterGradeInfo = {};    // 高手等级信息
        var account_code = $state.params.account_code;
        getMasterGrade();
        // 获取高手等级
        function getMasterGrade () {
            trader.getMasterGrade($scope.personal.usercode, account_code).then(function (data) {
                // console.log(data);
                if (data.is_succ && data.code == 0) {
                    $scope.masterGradeInfo = data.data;
                    $scope.masterGradeInfo.scale = (($scope.masterGradeInfo.follow_amount - $scope.masterGradeInfo.available_amount) / $scope.masterGradeInfo.follow_amount * 100).toFixed(2)+'%';
                }
            });
        }
    }
})();
