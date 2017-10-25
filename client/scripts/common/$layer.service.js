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

                    $scope.handler = function (value) {
                        var evaled = eval(value)
                        angular.isFunction(evaled) && evaled()
                        closeModal()
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