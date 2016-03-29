;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebBecomeModalController', WebBecomeModalController);

    WebBecomeModalController.$inject = ['$scope', 'passedScope', '$modalInstance', 'validator', 'account'];

    function WebBecomeModalController ($scope, passedScope, $modalInstance, validator, account) {
        
        $scope.becomeModal = passedScope.modal;

        angular.extend($scope.becomeModal, {
            followFunds: undefined,
            tradeDesc: undefined,
            historyFile: undefined,
            tradeExperience: {
                key: undefined,
                value: undefined
            },
            tradeWay: {
                key: undefined,
                value: undefined
            }
        });
        
        $scope.tradeExperiences = [
            {
                key: '3 年以下',
                value: '3 年以下' 
            },
            {
                key: '3 年－5 年',
                value: '3 年－5 年' 
            },
            {
                key: '5 年以上',
                value: '5 年以上' 
            }
        ];

        $scope.tradeWays = [
            {
                key: '手动交易',
                value: '手动交易' 
            },
            {
                key: '智能交易(EA)',
                value: '智能交易(EA)' 
            },
            {
                key: '手动交易 + 智能交易',
                value: '手动交易 + 智能交易' 
            }
        ];

        $scope.error = {
            tradeExperience: {
                show: false
            },
            tradeWay: {
                show: false
            },
            followFunds: {
                show: false,
                reg: validator.regType.amount.reg
            }
        };

        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        $scope.submitForm = submitForm;
        $scope.closeModal = closeModal;

        $scope.history = {
            status: 0             
        };
        
        $scope.$on('uploadHistoryStart', function () {
            $scope.$apply(function () {
                $scope.history.status = 1;
            });
        });
        $scope.$on('uploadHistorySuccess', function (e,data) {
            // console.info(data);
            $scope.becomeModal.historyFile = data.file_name;
            $scope.$apply(function () {
                $scope.history.status = 2;
            });
        });
        $scope.$on('uploadHistoryFail', function () {
            $scope.$apply(function () {
                $scope.history.status = 3;
            });
        });

        function submitForm () {
            showErr('tradeExperience');
            showErr('tradeWay');
            showErr('followFunds');

            if ($scope.becomeMasterForm.$invalid) {
                return;
            }
            
            account.applyBecomeMaster($scope.becomeModal.tradeExperience.value, $scope.becomeModal.tradeWay.value, $scope.becomeModal.followFunds, $scope.becomeModal.tradeDesc, $scope.becomeModal.historyFile).then(function (data) {
                
                if (data.error_code === 0) {
                    // 提交成功
                    $scope.becomeModal.success = true;
                    $scope.becomeModal.code = 0;
                } else if (data.error_code === 6) {
                    // 登录超时
                    $scope.becomeModal.success = true;
                    $scope.becomeModal.code = 6;
                } else if (data.error_code === 5) {
                    // 需要上传文件
                    $scope.becomeModal.code = 5;
                } else {
                    // 其他错误
                    $scope.becomeModal.success = true;
                    $scope.becomeModal.code = 1;
                }

            });
        }

        function closeModal() {
            $modalInstance.dismiss();
        }

        function hideErr(name) {
            if ($scope.error[name]) {
                $scope.error[name].show = false;
            }
        }

        function showErr(name) {
            if ($scope.error[name]) {
                $scope.error[name].show = true;
            }
        }
    }
})();