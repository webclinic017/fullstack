;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetCardController', AssetCardController);

    AssetCardController.$inject = ['$scope', 'config', '$state', '$modalInstance', 'validator', 'account', 'asset', 'passedScope'];

    function AssetCardController($scope, config, $state, $modalInstance, validator, account, asset, passedScope) {
        $scope.personal = passedScope.personal;
        $scope.card = {
            //number: ,         // 卡号
            //bank: ,           // 银行
            // address: ,       // 开户行
            binding: false,
            realname: $scope.personal.realname
        };
        $scope.banks = [];
        $scope.clickable = true;

        $scope.provinces = [];
        $scope.citys = [];

        $scope.frontErr = {
            number: {
                show: false,
                reg: validator.regType.bankCardNumber.reg,
                tip: validator.regType.bankCardNumber.tip
            },
            phone: {
                show: false,
                reg: validator.regType.phone.reg,
                tip: validator.regType.phone.tip
            },
            bank: {
                show: false
            },
            address: {
                show: false
            },
            province: {
                show: false
            },
            city: {
                show: false
            },
            realname: {
                show: false
            }
        };

        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.closeModal = closeModal;
        $scope.submitForm = submitForm;
        $scope.getCity = getCity;

        getProvince();

        asset.getBanks().then(function (data) {
            // console.log(data);
            if (data.is_succ) {
                var b = [];
                angular.forEach(data.data, function (val, key) {
                    b.push({
                        nameEN: key,
                        nameZH: val
                    });
                });
                $scope.banks = b;
            }
        });

        // 如果是修改银行卡，要初始化表单元素数据
        if (typeof passedScope.card !== 'undefined') {
            // angular.extend($scope.card, passedScope.card);
            $scope.card.realname = passedScope.card.realname
            // console.log('$scope.card', $scope.card)
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

        function getProvince() {
            account.getStates('CN').then(function (data) {
                if (!data) return;
                // console.info(data);
                $scope.provinces = data.data;
                // if (!passedScope.card.province) { return }
                // var keepGoing = true;
                // var targetProvinceZh = passedScope.card.province
                // angular.forEach($scope.provinces, function (province, index) {
                //     if (!keepGoing) {
                //         return;
                //     }
                //     // console.log(province.name_cn === targetProvinceZh);
                //     if (province.name_cn === targetProvinceZh) {
                //         $scope.card.province = province;
                //         keepGoing = false;
                //     }
                // });
                // getCity();
            });
        }
        function getCity() {
            account.getCities($scope.card.province.code).then(function (data) {
                if (!data) return;
                // console.info(data);
                $scope.citys = data.data;
                // if (!passedScope.card.city) { return }
                // var targetCityZh = passedScope.card.city;
                // var keepGoing = true;
                // angular.forEach($scope.citys, function (city, index) {
                //     if (!keepGoing) {
                //         return;
                //     }
                //     if (city.name_cn === targetCityZh) {
                //         $scope.card.city = city;
                //         keepGoing = false;
                //     }
                // });
            });
        }
        function submitForm() {
            // console.log($scope.card, $scope.card.bank.nameEN);
            showErr('realname');
            showErr('number');
            showErr('bank');
            showErr('address');
            showErr('province');
            showErr('city');
            showErr('phone');
            // console.info($scope.cardForm.city);

            if ($scope.cardForm.$invalid) {
                return;
            }

            $scope.clickable = false;

            // 如果是第一次绑卡
            if (typeof $scope.card.id === 'undefined') {
                asset.bindCard($scope.card.number, $scope.card.bank.nameEN, $scope.card.address, $scope.card.province.code, $scope.card.city.code, null, $scope.card.phone ).then(function (data) {
                    $scope.clickable = true
                    if (!data) return;
                    if (data.is_succ) {
                        $scope.card.binding = true;
                        $scope.$emit('bindCardSuccess');
                    } else {
                        $scope.$emit('bindCardFail');
                        alert(data.message);
                    }
                });
            } else {
                // 修改银行卡
                asset.bindCard($scope.card.number, $scope.card.bank.nameEN, $scope.card.address, $scope.card.province.code, $scope.card.city.code, $scope.card.id, $scope.card.phone).then(function (data) {
                    $scope.clickable = true
                    if (!data) return;
                    if (data.is_succ) {
                        $scope.card.binding = true;
                        $scope.$emit('bindCardSuccess');
                    } else {
                        $scope.$emit('bindCardFail');
                        alert(data.message);
                    }
                });
            }
        }
        // 去实名认证
        $scope.verify = verify;
        function verify() {
            $state.go('authen.subpage', { subpage: 'investInfo' });
            closeModal();
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