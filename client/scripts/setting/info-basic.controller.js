;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingInfoBasicController', SettingInfoBasicController);

    SettingInfoBasicController.$inject = ['$scope', 'account', 'validator'];

    function SettingInfoBasicController($scope, account, validator) {
        $scope.basicInfo = {
            username: undefined,
            locationState: {
                key: undefined,
                value: undefined
            },
            locationCity: {
                key: undefined,
                value: undefined
            },
            feature: {
                key: undefined,
                value: undefined
            },
            policy: undefined,
            desc: undefined
        };
        $scope.states = [];
        $scope.cities = [];   // 市/区
        // 交易特色选项
        $scope.features = [
            {
                key: '长线交易',
                value: '长线交易'
            }, {
                key: '短线交易',
                value: '短线交易'
            }, {
                key: '超短线交易',
                value: '超短线交易'
            }, {
                key: '人工交易',
                value: '人工交易'
            }, {
                key: 'EA 自动交易',
                value: 'EA 自动交易'
            }, {
                key: 'EA 加人工交易',
                value: 'EA 加人工交易'
            }, {
                key: '技术派',
                value: '技术派'
            }, {
                key: '基本面派',
                value: '基本面派'
            }, {
                key: '心理派',
                value: '心理派'
            }
        ];
        $scope.frontErr = {
            username: {
                show: false,
                tip: validator.regType.username.tip
            },
            locationState: {
                show: false
            },
            locationCity: {
                show: false
            },
            feature: {
                show: false
            },
            policy: {
                show: false
            },
            desc: {
                show: false
            }
        };

        $scope.backErr = {
            username: {
                show: false,
                status: 0
            },
            policy: {
                show: false,
                status: 0
            },
            desc: {
                show: false,
                status: 0
            },
            system: {
                show: false,
                status: 0
            }
        };
        $scope.clickable = true;
        $scope.selectRegion = selectRegion;
        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.submitForm = submitForm;

        $scope.sss = {name: 'xxx'};

        initLocation();

        function initLocation() {
            account.getLocation().then(function (data) {
                angular.extend($scope.basicInfo, {
                    locationState: {
                        key: data.state_name,
                        value: data.state_code
                    },
                    locationCity: {
                        key: data.city_name,
                        value: data.city_code
                    }
                });
                
                $scope.$broadcast('locationInfoReady');
            });

            $scope.$on('locationInfoReady', function () {
                getRegions('state', 'states', 'CN');
                getRegions('city', 'cities', $scope.basicInfo.locationState.value);
            });
        }

        // 根据 region code 获取对应的 regions
        function getRegions(regionName, regionsName, upperRegionCode) {
            var tmp;
            
            switch (regionName) {
                case 'state':
                    tmp = account.getStates(upperRegionCode);
                    break;
                case 'city':
                    tmp = account.getCities(upperRegionCode);
                    break;
                default:
                    break;
            }

            tmp.then(function (data) {
                
                if (!data.is_succ) {
                    return;
                }
                $scope[regionsName] = data.data;
            });
        }

        // 选择一个 region
        function selectRegion(regionName, regionCode) {
            switch (regionName) {
                case 'state':
                    $scope.basicInfo.locationCity = {};
                    getRegions('city', 'cities', regionCode);
                    break;
                default:
                    break;
            }
        }

        function submitForm(formName) {
            showErr(formName, 'username');
            showErr(formName, 'locationState');
            showErr(formName, 'locationCity');
            showErr(formName, 'feature');
            showErr(formName, 'policy');
            showErr(formName, 'desc');
            
            if ($scope[formName].$invalid) {
                return;
            }

            $scope.clickable = false;
            account.setBasicInfo(
                $scope.basicInfo.username, 
                $scope.basicInfo.locationState,
                $scope.basicInfo.locationCity, 
                $scope.basicInfo.feature, 
                $scope.basicInfo.policy, 
                $scope.basicInfo.desc
            ).then(function (data) {

                // 成功
                if (data.is_succ) {
                    $scope.backErr.system.show = true;
                    $scope.backErr.system.status = 1;
                    
                    $timeout(function () {
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.status = 0;
                        $scope.clickable = true;
                    }, 3000);
                } else {
                    
                    if (data.error_code === 8) {
                        $scope.backErr.school.status = 1;
                    }

                    if (data.error_code === 12) {
                        $scope.backErr.desc.status = 1;
                    }
                    $scope.clickable = true;
                }
            }, function (error) {
                console.log(error);
                $scope.clickable = true;
            });
        }

        function hideErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = false;
            }

            // 如果需要后端验错，这里是隐藏错误，所以把状态重置为后端未验证的状态
            if($scope.backErr[controlName]) {
                $scope.backErr[controlName].show = false;
                $scope.backErr[controlName].status = 0;
            }
        }

        function showErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = true;
            }

            if ($scope[formName][controlName].$invalid) {
                // 前端验错未通过，不需要显示后端错误
                return;
            }

            if ($scope.backErr[controlName]) {
                $scope.backErr[controlName].show = true;
            }
        }
    }
})();