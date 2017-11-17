;
(function () {
    'use strict';

    angular.module('fullstackApp').service('$layer', $layer);

    $layer.$inject = ['$modal'];

    function $layer($modal) {
        /**
         * params {
         *   size: 弹窗大小 || 'sm'
         *   title: 提示标题 || '系统提示'
         *   msg:  提示内容 || ''
         *   msgClass:  消息class || 'text-center'
         *   btnsClass:  按钮class || 'text-center'
         *   autoClose:  点击按钮是否自动关闭
         *   btns: {
         *         'OK': function(){ alert('OK') }
         *      }
         *  }
         */
        return function (params) {
            $modal.open({
                templateUrl: '/views/template/$layer_modal.html',
                size: params.size || 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    // 绑定参数
                    angular.extend($scope, params)
                    //$scope.loading = 0;   0 未loading；1 正在loading；2 loading完毕
                    $scope.loading = 0;
                    $scope.handler = function (value) {
                        var evaled = eval(value)
                        angular.isFunction(evaled) && evaled($scope)
                        if (!params.autoClose) {
                            closeModal()
                        }
                        
                    }

                    $scope.closeModal = closeModal
                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }
    }
})();