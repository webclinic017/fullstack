;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('TraderCopyCancelController', TraderCopyCancelController);

        TraderCopyCancelController.$inject = ['$scope', 'trader', '$modalInstance', 'lang', 'passedScope'];

    function TraderCopyCancelController($scope, trader, $modalInstance, lang, passedScope) {
        var account_code = passedScope.account_code;
        var username = passedScope.username;
        $scope.copyCancel = {
            username: username,
            success: false,     // 是否取消复制成功
            fail: false,
            failMsg: ''
        };
        $scope.clickable = true;
        $scope.lang = lang;
        $scope.cancelCopy = cancelCopy;
        $scope.closeModal = closeModal;

        function cancelCopy(auto_delete) {
            $scope.clickable = false;

            trader.cancelCopy(account_code, auto_delete).then(function (data) {
                // console.info(data);
                if (data.is_succ) {
                    $scope.copyCancel.success = true;
                    $scope.clickable = true;

                    passedScope.callBack && passedScope.callBack();
                    // $state.go('space.invest.subpage', {
                    //     subpage: 'current'
                    // }, { reload: true });
                } else {
                    $scope.clickable = true;
                    $scope.copyCancel.fail = true;
                    $scope.copyCancel.failMsg = data.error_msg;

                    $timeout(function () {
                        $scope.copyCancel.fail = false;
                        $scope.copyCancel.failMsg = '';
                    }, 3000);
                }
            }, function (err) {
                $scope.clickable = true;
                $scope.copyCancel.fail = true;
                $scope.copyCancel.failMsg = '';
                console.info(err);

                $timeout(function () {
                    $scope.copyCancel.fail = false;
                }, 3000);
            });
        }

        function closeModal() {
            $modalInstance.dismiss();
        }
    }
})();