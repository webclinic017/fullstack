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
         *   titleClass: 标题class || ''
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
                controller: ['$scope', '$modalInstance', 'lang', function ($scope, $modalInstance, lang) {
                    // 绑定参数
                    angular.extend($scope, params)
                    $scope.lang = lang;
                    //$scope.loading = 0;   0 未loading；1 正在loading；2 loading完毕
                    $scope.loading = 0;
                    $scope.handler = function (value) {
                        toGtagEvent('click_confirm_voice code_phone_web', { belong: 'tigerwit' })
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
                }]
            });
        }
    }
})();
