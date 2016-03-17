;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetCardController', AssetCardController);

    AssetCardController.$inject = ['$scope', '$state', '$modalInstance', 'validator', 'asset', 'passedScope'];

    function AssetCardController($scope, $state, $modalInstance, validator, asset, passedScope) {
        $scope.personal = passedScope.personal;
        $scope.card = {
            //number: ,         // 卡号
            //bank: ,           // 银行
            // address: ,       // 开户行
            binding: false
        };
        $scope.banks = [{nameEN: 'icbc', nameZH: '中国工商银行'},
                {nameEN: 'ccb', nameZH: '中国建设银行'},
                {nameEN: 'cmb', nameZH: '招商银行'},
                {nameEN: 'abc', nameZH: '中国农业银行'},
                {nameEN: 'spdb', nameZH: '浦发银行'},
                {nameEN: 'hxb', nameZH: '华夏银行'},
                {nameEN: 'ceb', nameZH: '中国光大银行'},
                {nameEN: 'boc', nameZH: '中国银行'},
                {nameEN: 'psbc', nameZH: '中国邮政储蓄银行'},
                {nameEN: 'bcm', nameZH: '交通银行'},
                {nameEN: 'cmbc', nameZH: '中国民生银行'},
                {nameEN: 'gdb', nameZH: '广发银行'},
                {nameEN: 'sdb', nameZH: '深圳发展银行'},
                {nameEN: 'cib', nameZH: '兴业银行'},
                {nameEN: 'citic', nameZH: '中信银行'},
                {nameEN: 'pab', nameZH: '平安银行'},
                {nameEN: 'bob', nameZH: '北京银行'},
                {nameEN: 'srcb', nameZH: '上海农商银行'},
                {nameEN: 'bea', nameZH: '东亚银行'},
                {nameEN: 'nbcb', nameZH: '宁波银行'},
                {nameEN: 'bon', nameZH: '南京银行'},
                {nameEN: 'other', nameZH: '其他银行'}];

        $scope.frontErr = {
            number: {
                show: false,
                reg: validator.regType.bankCardNumber.reg,
                tip: validator.regType.bankCardNumber.tip
            },
            bank: {
                show: false
            },
            address: {
                show: false
            }
        };

        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.closeModal = closeModal;
        $scope.submitForm = submitForm;

        // 如果是修改银行卡，要初始化表单元素数据
        if (typeof passedScope.card !== 'undefined') {
            angular.extend($scope.card, passedScope.card);
            $scope.card.number = undefined;

            var isBreak = false;
            angular.forEach($scope.banks, function (bank) {
                if (isBreak) {
                    return;
                }
                if (bank.nameEN === passedScope.card.bank) {
                    $scope.card.bank = bank;
                    isBreak = true;
                }
            });
        }

        function submitForm() {
            showErr('number');
            showErr('bank');
            showErr('address');

            if ($scope.cardForm.$invalid) {
                return;
            }

            // 如果是第一次绑卡
            if (typeof $scope.card.id === 'undefined') {
                asset.bindCard($scope.card.number, $scope.card.bank.nameEN, $scope.card.address).then(function (data) {
                    if (data.is_succ) {
                        $scope.card.binding = true;
                        $scope.$emit('bindCardSuccess');
                    }
                });
            } else {
                // 修改银行卡
                asset.bindCard($scope.card.number, $scope.card.bank.nameEN, $scope.card.address, $scope.card.id).then(function (data) {
                    if (data.is_succ) {
                        $scope.card.binding = true;
                        $scope.$emit('bindCardSuccess');
                    }
                });
            }
        }

        function closeModal() {
            $modalInstance.dismiss();
        }

        function hideErr(name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name].show = false;
            }
        }

        function showErr(name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name].show = true;
            }
        }
    }
})();
