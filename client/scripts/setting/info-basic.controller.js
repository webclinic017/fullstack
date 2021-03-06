;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingInfoBasicController', SettingInfoBasicController);

    SettingInfoBasicController.$inject = ['$scope', 'account', '$timeout', 'validator', '$layer'];

    function SettingInfoBasicController($scope, account, $timeout, validator, $layer) {
        $scope.basicInfo = {
            username: undefined,
            username_en: undefined,
            // locationWorld: {
            //     key: '中国',
            //     value: 'CN'
            // },
            // locationState: {
            //     key: undefined,
            //     value: undefined
            // },
            // locationCity: {
            //     key: undefined,
            //     value: undefined
            // },
            special: {
                key: undefined,
                value: undefined
            },
            // strategy: undefined,
            // desc: undefined
        };
        // $scope.worlds = [];
        // $scope.states = [];
        // $scope.cities = [];   // 市/区
        // 交易特色选项
        // $scope.specials = [
        //     {
        //         key: '长线交易',
        //         value: '长线交易'
        //     }, {
        //         key: '短线交易',
        //         value: '短线交易'
        //     }, {
        //         key: '超短线交易',
        //         value: '超短线交易'
        //     }, {
        //         key: '人工交易',
        //         value: '人工交易'
        //     }, {
        //         key: 'EA 自动交易',
        //         value: 'EA 自动交易'
        //     }, {
        //         key: 'EA 加人工交易',
        //         value: 'EA 加人工交易'
        //     }, {
        //         key: '技术派',
        //         value: '技术派'
        //     }, {
        //         key: '基本面派',
        //         value: '基本面派'
        //     }, {
        //         key: '心理派',
        //         value: '心理派'
        //     }
        // ];
        $scope.frontErr = {
            username: {
                show: false,
                tip: validator.regType.username.tip
            },
            username_en: {
                show: false,
                tip: validator.regType.username_en.tip
            },
            // locationState: {
            //     show: false
            // },
            // locationCity: {
            //     show: false
            // },
            // special: {
            //     show: false
            // },
            // strategy: {
            //     show: false
            // },
            // desc: {
            //     show: false
            // }
        };

        $scope.backErr = {
            system: {
                show: false,
                msg: ''
            }
        };
        $scope.isEditName = false;
        $scope.isEditNameEn = false;
        $scope.editName = function(lang) {
            if(lang == 'cn'){
                $scope.isEditName = true;
                $scope.isEditNameEn = false;
                $scope.basicInfo.username_en = $scope.settingInfo.username_en;
            }
            if(lang == 'en'){
                $scope.isEditNameEn = true;
                $scope.isEditName = false;
                $scope.basicInfo.username = $scope.settingInfo.username;
            }
        }
        $scope.clickable = true;
        // $scope.selectRegion = selectRegion;
        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.submitForm = submitForm;
        $scope.submitEnNameForm = submitEnNameForm;
        // console.info($scope.settingInfo);

        // $scope.$watch('personal', function (newVal, oldVal, scope) {
        //     debugger;
        //     if (newVal === oldVal) return;
        //     if (newVal.username === undefined) return;
        //     // console.info(newVal);

        //     $scope.basicInfo.username = newVal.username;
        //     $scope.basicInfo.special = {
        //         key: newVal.trading_type,
        //         value: newVal.trading_type
        //     };
        //     $scope.basicInfo.strategy = newVal.trading_strategy;
        //     $scope.basicInfo.desc = newVal.desc;
        // }, true);
        $scope.$watch('settingInfo', function (newVal, oldVal, scope) {
            $scope.basicInfo.username = newVal.username;
            $scope.basicInfo.username_en = newVal.username_en;
            $scope.basicInfo.special = {
                key: newVal.trading_type,
                value: newVal.trading_type
            };
            // $scope.basicInfo.strategy = newVal.trading_strategy;
            // $scope.basicInfo.desc = newVal.desc;

        }, true);
        // initLocation();

        // function initLocation() {
        //     account.getLocation().then(function (data) {
        //         // console.info(data);
        //         if (data.is_succ) {
        //             data = data.data
        //             angular.extend($scope.basicInfo, {
        //                 locationWorld: {
        //                     key: '中国',
        //                     value: 'CN'
        //                 },
        //                 locationState: {
        //                     key: data.region.state_name,
        //                     value: data.region.state_code
        //                 },
        //                 locationCity: {
        //                     key: data.region.city_name,
        //                     value: data.region.city_code
        //                 }
        //             });

        //             $scope.$broadcast('locationInfoReady');
        //         }

        //     });

        //     $scope.$on('locationInfoReady', function () {
        //         // getRegions('world', 'worlds');

        //         if ($scope.basicInfo.locationWorld.value == 'CN') {
        //             getRegions('state', 'states', $scope.basicInfo.locationWorld.value);
        //             getRegions('city', 'cities', $scope.basicInfo.locationState.value);
        //         }
        //     });
        // }

        // // 根据 region code 获取对应的 regions
        // function getRegions(regionName, regionsName, upperRegionCode) {
        //     var tmp;

        //     switch (regionName) {
        //         case 'world':
        //             tmp = account.getWorlds();
        //             break;
        //         case 'state':
        //             tmp = account.getStates(upperRegionCode);
        //             break;
        //         case 'city':
        //             tmp = account.getCities(upperRegionCode);
        //             break;
        //         default:
        //             break;
        //     }

        //     tmp.then(function (data) {
        //         if (!data) return;
        //         // console.log(data);
        //         if (!data.is_succ) {
        //             return;
        //         }
        //         $scope[regionsName] = data.data;
        //     });
        // }

        // // 选择一个 region
        // function selectRegion(regionName, regionCode) {
        //     switch (regionName) {
        //         case 'world':
        //             $scope.basicInfo.locationState = {
        //                 key: undefined,
        //                 value: undefined
        //             };
        //             $scope.basicInfo.locationCity = {
        //                 key: undefined,
        //                 value: undefined
        //             };
        //             $scope.cities = [];
        //             getRegions('state', 'states', regionCode);
        //             break;
        //         case 'state':
        //             $scope.basicInfo.locationCity = {
        //                 key: undefined,
        //                 value: undefined
        //             };
        //             getRegions('city', 'cities', regionCode);
        //             break;
        //         default:
        //             break;
        //     }
        // }

        function submitForm(formName) {
            if($scope.personal.has_master || $scope.personal.master_apply_status){
                var msg = ($scope.personal.has_master && $scope.lang.text("tigerWitID.settings.tip11")) || ($scope.personal.master_apply_status && $scope.lang.text("tigerWitID.settings.tip11_1"))
                var obj = {
                    title: $scope.lang.text("tigerWitID.settings.error"),
                    size: 'sm',
                    msgClass: 'font-danger',
                    msg: msg,
                    btns: {}
                }
                obj.btns[$scope.lang.text("tigerWitID.confirm")] = function(){}
                $layer(obj)
                return
            }
            showErr(formName, 'username');
            // showErr(formName, 'locationWorld');
            // showErr(formName, 'special');
            // showErr(formName, 'strategy');
            // showErr(formName, 'desc');

            // if ($scope.basicInfo.locationWorld.value == 'CN') {
            //     showErr(formName, 'locationState');
            //     showErr(formName, 'locationCity');
            // }

            if ($scope[formName].$invalid) {
                return;
            }

            // console.info($scope.basicInfo.username);
            // console.info($scope.basicInfo.locationWorld.key);
            // console.info($scope.basicInfo.locationState.key);
            // console.info($scope.basicInfo.locationCity.key);
            // console.info($scope.basicInfo.special.value);
            // console.info($scope.basicInfo.strategy);
            // console.info($scope.basicInfo.desc);

            $scope.clickable = false;
            account.setBasicInfoName(
                $scope.basicInfo.username
                // $scope.basicInfo.locationWorld.value,
                // $scope.basicInfo.locationState.value,
                // $scope.basicInfo.locationCity.value
                // $scope.basicInfo.special.value, 
                // $scope.basicInfo.strategy, 
                // $scope.basicInfo.desc
            ).then(function (data) {
                console.info(data);
                // 成功
                if (data.is_succ) {
                    $scope.backErr.system.show = true;
                    $scope.backErr.system.msg = $scope.lang.text("tigerWitID.settings.submitSuccess");
                    $scope.clickable = true;

                    // 神策数据统计
                    sa.setProfile({
                        $name: $scope.basicInfo.username,
                        // country: $scope.basicInfo.locationWorld.key,
                        // $province: $scope.basicInfo.locationState.key,
                        // $city: $scope.basicInfo.locationCity.key,
                        trade_feature: $scope.basicInfo.special.value
                    });
                    $scope.writeCookie({name: 'username', value: $scope.basicInfo.username});
                    window.location.reload();

                    $timeout(function () {
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.msg = '';
                    }, 3000);
                } else {

                    $scope.backErr.system.show = true;
                    $scope.backErr.system.msg = data.message;

                    $timeout(function () {
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.msg = '';
                    }, 3000);
                    $scope.clickable = true;
                }
            });
        }
    
        function submitEnNameForm(formName){
            if($scope.personal.has_master || $scope.personal.master_apply_status){
                var msg = ($scope.personal.has_master && $scope.lang.text("tigerWitID.settings.tip11")) || ($scope.personal.master_apply_status && $scope.lang.text("tigerWitID.settings.tip11_1"))
                var obj = {
                    title: $scope.lang.text("tigerWitID.settings.error"),
                    size: 'sm',
                    msgClass: 'font-danger',
                    msg: msg,
                    btns: {}
                }
                obj.btns[$scope.lang.text("tigerWitID.confirm")] = function(){}
                $layer(obj)
                return
            }
            showErr(formName, 'username_en');

            if ($scope[formName].$invalid) {
                return;
            }

            $scope.clickable = false;
            account.setBasicInfoNameEn(
                $scope.basicInfo.username_en
            ).then(function (data) {
                console.info(data);
                // 成功
                if (data.is_succ) {
                    $scope.backErr.system.show = true;
                    $scope.backErr.system.msg = $scope.lang.text("tigerWitID.settings.submitSuccess");
                    $scope.clickable = true;

                    // 神策数据统计
                    // sa.setProfile({
                    //     $name: $scope.basicInfo.username,
                    //     // country: $scope.basicInfo.locationWorld.key,
                    //     // $province: $scope.basicInfo.locationState.key,
                    //     // $city: $scope.basicInfo.locationCity.key,
                    //     trade_feature: $scope.basicInfo.special.value
                    // });
                    $scope.writeCookie({name: 'username_en', value: $scope.basicInfo.username_en});
                    window.location.reload();

                    $timeout(function () {
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.msg = '';
                    }, 3000);
                } else {

                    $scope.backErr.system.show = true;
                    $scope.backErr.system.msg = data.message;

                    $timeout(function () {
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.msg = '';
                    }, 3000);
                    $scope.clickable = true;
                }
            });
        }

        function hideErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = false;
            }

            // 如果需要后端验错，这里是隐藏错误，所以把状态重置为后端未验证的状态
            if ($scope.backErr[controlName]) {
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