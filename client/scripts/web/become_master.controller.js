;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebBecomeMasterController', WebBecomeMasterController);

    WebBecomeMasterController.$inject = ['$scope', '$timeout', '$modal', '$state', 'account'];

    function WebBecomeMasterController ($scope, $timeout, $modal, $state, account) {
        // $scope.become = {
        //     readAgreement: true
        // };

        // $scope.becomeMaster = becomeMaster;

        // function becomeMaster () {
        //     if (! $scope.become.readAgreement) {
        //         return;
        //     }

        //     // 判断是否登陆
        //     if ($scope.userstatus.logined) {
        //         // 判断是否是高手，有无复制关系，有无交易记录
        //         account.checkMaster().then(function (data) {
        //             // console.info(data);
        //             if (data.master) {
        //                 openSystemMdl('master');
        //             } else if (data.copy){
        //                 openSystemMdl('copy');
        //             } else {
        //                 if (data.status === 0) {
        //                     openSystemMdl('audit');
        //                 } else if (data.status === 3) {
        //                     if (data.history) {
        //                         // 不需要上传文件
        //                         openBecomeMdl('history');
        //                     } else {
        //                         openBecomeMdl('noHistory');
        //                     }
        //                 }
        //             }
        //         });
        //     } else {
        //         openSystemMdl('login');
        //     }
        // }

        // function openSystemMdl(type) {
        //     $modal.open({
        //         templateUrl: '/views/web/system_modal.html',
        //         size: 'sm',
        //         backdrop: true,
        //         controller: function ($scope, $modalInstance) {
        //             $scope.modal = {
        //                 type: type
        //             };
        //             $scope.closeModal = closeModal;

        //             function closeModal() {
        //                 $modalInstance.dismiss();
        //             }
        //         }
        //     });
        // }
        
        // function openBecomeMdl(type) {

        //     $modal.open({
        //         templateUrl: '/views/web/copy_become_modal.html',
        //         controller: 'WebBecomeModalController',
        //         size: 'md',
        //         backdrop: 'static',
        //         resolve: {
        //             passedScope: function () {
                        
        //                 $scope.modal = {
        //                     type: type,
        //                     personal: $scope.personal
        //                 };

        //                 return {
        //                     modal: $scope.modal
        //                 }
        //             }
        //         }
        //     });
        // }
    }
})();