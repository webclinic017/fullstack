;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetCardController', AssetCardController);

    AssetCardController.$inject = ['$scope', 'config', '$state', '$modalInstance', 'validator', 'account', 'asset', 'passedScope', 'lang'];

    function AssetCardController($scope, config, $state, $modalInstance, validator, account, asset, passedScope, lang) {
        $scope.personal = passedScope.personal;
        $scope.card = {
            //number: ,         // 卡号
            //bank: ,           // 银行
            // address: ,       // 开户行
            binding: false,
            realname: $scope.personal.realname,
            world: $scope.personal.region
        };
        $scope.lang = lang;
        $scope.banks = [];
        $scope.clickable = true;

        $scope.worlds = [];
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
            swift_code: {
                show: false
            },
            bank: {
                show: false
            },
            bankOther: {
                show: false
            },
            address: {
                show: false
            },
            world: {
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

        getWorlds();
        getProvince();

        asset.getBanks().then(function (data) {
            // console.log(data);
            if (data.is_succ) {
                $scope.banks = data.data;
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
                if (bank.code === passedScope.card.bank) {
                    $scope.card.bank = bank;
                    isBreak = true;
                }
            });
        }

        function getWorlds() {
            account.getWorlds().then(function (data) {
                if (data.is_succ) {
                    $scope.worlds = data.data;
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
            // console.log($scope.card);
            showErr('realname');
            showErr('world');
            showErr('number');
            showErr('address');

            if ($scope.card.world && $scope.card.world.world_code === 'CN') {
                showErr('bank');
                showErr('province');
                showErr('city');
                showErr('phone');
            }
            if ($scope.card.world && $scope.card.world.world_code !== 'CN') {
                showErr('bankOther');
                if ($scope.card.world.world_code !== 'VN') {
                    showErr('swift_code');
                }

            }

            if ($scope.cardForm.$invalid) {
                return;
            }

            var oParams = {
                card_no: $scope.card.number,
                country: $scope.card.world.world_code,
                bank_addr: $scope.card.address,
            };
            if ($scope.card.world && $scope.card.world.world_code === 'CN') {
                oParams.bank_name = $scope.card.bank.code;
                oParams.province = $scope.card.province.code;
                oParams.city = $scope.card.city.code;
                oParams.phone = $scope.card.phone;
            } else {
                oParams.bank_name = $scope.card.bankOther;
                if ($scope.card.world.world_code !== 'VN') {
                    oParams.swift_code = $scope.card.swift_code;
                }
            }

            $scope.clickable = false;

            // 如果是第一次绑卡()
            // if (typeof $scope.card.id === 'undefined') {
            asset.bindCard(oParams).then(function (data) {
                $scope.clickable = true
                if (!data) return;
                if (data.is_succ) {
                    $scope.card.binding = true;
                    $scope.$emit('bindCardSuccess');
                } else {
                    // $scope.$emit('bindCardFail');
                    alert(data.message);
                }
            });
            // }
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