;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AuthenController', AuthenController)
        .controller('AuthenInvestInfoController', AuthenInvestInfoController)
        .controller('AuthenCompleteController', AuthenCompleteController)
        .controller('AuthenRealnameController', AuthenRealnameController)
        .controller('AuthenSubmitController', function () { })
        .controller('AuthenSuccessController', function () { });

    AuthenController.$inject = ['$scope', '$cookies', '$location', 'account', '$state', '$stateParams', '$timeout', '$modal', '$layer'];
    AuthenInvestInfoController.$inject = ['$scope', '$state', '$timeout', 'account', '$location', '$modal'];
    AuthenCompleteController.$inject = ['$scope', 'validator', 'account', '$timeout', '$interval', '$location', '$modal', '$cookies'];
    AuthenRealnameController.$inject = ['$scope', '$state', '$modal', 'validator', 'account', '$location', '$layer'];

    // 主控制器
    function AuthenController($scope, $cookies, $location, account, $state, $stateParams, $timeout, $modal, $layer) {
        $scope.dredgingType = 'unkown'  // 交易账户开通状态
        $scope.flow = {
            step: 1,
            authStatusMap: {
                '1': 'investInfo',   // 投资信息 - kyc
                '2': 'complete',     // 完成kyc 完善资料信息
                '3': 'realname',     // 未上传过身份证
                '4': 'realname',     // 审核拒绝 完善资料信息
                "5": "submit",       // 待审核 -> 审核中页面
                "6": 'success',      // 审核通过
                "10": 'success',     // 审核通过
            }
        }

        $scope.$on('goState', function (e, data) {
            goState(data)
        })
        function goState(data) {
            // console.log(data)
            // console.log($scope.personal)
            $scope.dredgingType = data.dredged_type || data.account_status
            $timeout(function () {
                $state.go('authen.subpage', {
                    subpage: $scope.flow.authStatusMap[data.verify_status || data.status]
                });
            })
        }

        if ($scope.personal.verify_status) {
            // 防止不能跳转到本页
            goState({
                verify_status: $scope.personal.verify_status,
                dredged_type: {
                    '0': 'unknow',
                    '1': 'live',
                    '2': 'demo',
                }[$scope.personal.verify_status]
            });
            showErr4()
        } else {
            $scope.$emit('global.getAuthStatus', {
                ctrlName: 'AuthenController',
                callback: function (data) {
                    goState(data)
                    showErr4()
                }
            })
        }

        var parentScope = $scope;
        $scope.$on('open_alert_modal', function (e) {
            $modal.open({
                templateUrl: '/views/authen/alert_modal.html',
                size: 'md',
                backdrop: 'static',
                resolve: {
                    passedScope: function () {
                        return {
                            dredgeType: $scope.dredgingType
                        }
                    }
                },
                controller: ['$scope', 'passedScope', '$modalInstance', '$state', 'lang', function ($scope, passedScope, $modalInstance, $state, lang) {
                    angular.extend($scope, passedScope)
                    $scope.closeModal = closeModal;
                    $scope.lang = lang;
                    function closeModal() {
                        $modalInstance.dismiss();
                    }

                    $scope.go_realname = function () {
                        parentScope.flow.step = 3
                        goState(3);
                        $modalInstance.dismiss();
                    }
                }]
            });
        });

        function showErr4() {
            if ($scope.personal.verify_status == 4) {
                if (!$scope.personal.showAuthenMsg) {
                    var obj = {
                        title: $scope.lang.text('tigerWitID.prompt'),
                        msg: $scope.lang.text('tigerWitID.settings.tip12'),
                        msgClass: 'font-danger',
                        btns: {}
                    }
                    obj.btns[$scope.lang.text("tigerWitID.ok")] = function(){}
                    $layer(obj)

                    $scope.personal.showAuthenMsg = true
                }
            }
        }
    }

    // kyc
    function AuthenInvestInfoController($scope, $state, $timeout, account) {
        // window.onbeforeunload = function () {
        //     return '确认离开当前页面吗？未保存的数据将会丢失！'
        // }
        $scope.questions = [];
        $scope.isSetKyc = false;

        $scope.tip = {
            questions: {
                show: false,
                msg: undefined,
            },
            system: {
                show: false,
                status: 0
            }
        };
        $scope.clickable = true;
        $scope.selectOption = selectOption;
        $scope.submitForm = submitForm;
        var kycInfo = {};
        var muiltiSelect = {};

        if ($state.current.name === 'space.setting.subpage') {
            $scope.type = 'setting';
        }

        function selectOption(question, option, $index) {
            // console.log('question', question);
            // console.log('option', option);
            $scope.tip.questions.show = false;
            $scope.tip.questions.msg = undefined;

            // 多选
            if (question.data.type == 3) {
                if (!muiltiSelect[question.id]) {
                    muiltiSelect[question.id] = [];
                }
                option.checked = option.checked ? false : true;
                muiltiSelect[question.id][$index] = option.checked ? option.key : undefined;
                console.log(muiltiSelect[question.id]);
            }
            // 单选
            else {
                kycInfo[question.id] = option.key;
            }
        }

        function mapMuiltiSelectToKycInfo() {
            angular.forEach(muiltiSelect, function (item, index) {
                var temp = [];
                angular.forEach(item, function (item, index) {
                    if (item) {
                        temp.push(item);
                    }
                })
                // console.log(temp);
                kycInfo[index] = temp.join(',');
            });
            console.log(kycInfo);
        }

        function submitForm() {
            mapMuiltiSelectToKycInfo();
            var isBreak = false;
            var hasFinishAll = false;
            // console.log(isBreak);
            // console.log(kycInfo);
            angular.forEach($scope.questions, function (item, index) {
                if (isBreak) {
                    return;
                }
                // console.log(item.id);
                if (!kycInfo[item.id]) {
                    $scope.tip.questions.show = true;
                    $scope.tip.questions.msg = $scope.lang.text("tigerWitID.tip.tip12_1") + (Number(index) + 1) + $scope.lang.text("tigerWitID.tip.tip12_2") + item.title
                    isBreak = true;
                } else {
                    $scope.tip.questions.show = false;
                    $scope.tip.questions.msg = undefined;
                }
            });

            if ($scope.tip.questions.msg) {
                return;
            }

            $scope.clickable = false;

            account.setKyc(
                angular.extend(kycInfo, {
                    is_live: $scope.personal.is_live
                })
            ).then(function (data) {
                console.info(data);
                $scope.clickable = true;
                if (data.is_succ) {
                    // 神策数据统计
                    sa.setProfile({
                        key_industry: kycInfo.industry,
                        key_annual_income: kycInfo.annual_income,
                        key_experience: kycInfo.interests_exp,
                        key_market: kycInfo.trading_market,
                        key_invest_obj: kycInfo.investment_objectives,
                        key_risk_tendency: kycInfo.risk_tendency
                    });
                    // 神策数据统计
                    sa.track('btn_kyc');
                    sa.track('New_information');
                    $scope.tip.system.show = true;
                    $scope.tip.system.msg = $scope.lang.text("tigerWitID.settings.verificationSucc_1") + 'KYC' + $scope.lang.text("tigerWitID.settings.verificationSucc_2");

                    // 向authenController发送信息
                    $scope.$emit('goState', data.data);
                } else {
                    $scope.tip.system.show = true;
                    $scope.tip.system.msg = data.message;
                    $timeout(function () {
                        $scope.tip.system.show = false;
                    }, 1500);
                }
            });
        }

        getKyc();
        function getKyc() {
            account.getKyc().then(function (data) {
                $scope.$broadcast("hideLoadingImg");
                console.info('data', data);
                angular.forEach(data.data, function (data, index, array) {
                    var json = {};
                    json["id"] = data.name;
                    json["data"] = data;
                    json["answer"] = undefined;
                    json["title"] = data["title"];
                    $scope.questions.push(json);
                });
                console.log('questions', $scope.questions)
                $scope.industry = $scope.questions[0].data.list[0].value

                angular.forEach($scope.questions, function (question) {
                    kycInfo[question.id] = '';
                });
            });
        }
    }

    // complete
    function AuthenCompleteController($scope, validator, account, $timeout, $interval, $location, $modal, $cookies) {
        // console.log('$scope.personal', $scope.personal)
        $scope.completeInfo = {
            username: '',
            email: '',
            emailCode: '',
            phone: '',
            phoneCode: '',
            areaCode: {
                key: undefined,
                value: ''
            },
            clickable: true,
            // overTime: 1500,
            country: {
                key: undefined,
                value: undefined
            },
            province: {
                key: undefined,
                value: undefined
            },
            city: {
                key: undefined,
                value: undefined
            },
            address: '',
            hasSendCode: false,
            waitTime: 59
        }
        // console.log($scope.completeInfo)
        // getUserInfo('username');
        // function getUserInfo(name) {
        //     if ($scope.completeInfo.overTime <= 0) { return };
        //     if ($scope.personal[name]) {
        //         $scope.completeInfo[name] = $scope.personal[name];
        //     } else {
        //         $timeout(function () {
        //             getUserInfo(name);
        //             $scope.completeInfo.overTime -= 500;
        //         }, 500);
        //     }
        // }

        $scope.exsit = {
            username: {
                show: false,
                msg: ''
            },
            email: {
                show: false,
                msg: ''
            },
            phone: {
                show: false,
                msg: ''
            }
        }

        $scope.frontErr = {
            username: {
                show: false,
                tip: validator.regType.username.tip
            },
            email: {
                show: false,
                reg: new RegExp()
            },
            emailCode: {
                show: false
            },
            phone: {
                show: false,
                reg: new RegExp()
            },
            phoneCode: {
                show: false
            },
            areaCode: {
                show: false
            },
            province: {
                show: false
            },
            city: {
                show: false
            },
            address: {
                show: false
            }
        }

        $scope.backErr = {
            show: false,
            msg: ''
        }

        $scope.codeErr = {
            email: {
                show: false,
                msg: ''
            },
            phone: {
                show: false,
                msg: ''
            }
        }
        var personalIsNan = $scope.$watch('personal.user_code', function(n){
            if(!n) return;
            $scope.completeInfo.username = $scope.personal.username;
            $scope.completeInfo.email = ($scope.personal.email || '');
            $scope.completeInfo.phone = ($scope.personal.phone || '');
            $scope.completeInfo.areaCode.value = '+' + ($scope.personal.phone_code || '86');
            $scope.frontErr.email.reg = $scope.completeInfo.email ? /[\s\S]*/ : validator.regType.email.reg;
            $scope.frontErr.phone.reg = $scope.completeInfo.phone ? /[\s\S]*/ : validator.regType.phone.reg;
            $scope.stopWatch = function(){
                return personalIsNan()
            }
            $scope.stopWatch()
        })

        $scope.areaCodes = []

        // 地址相关操作
        initLocation();
        $scope.selectRegion = selectRegion;
        $scope.address = {};

        $scope.$watch('worldList', function(n, o){
            if(n.length > 0) {
                angular.forEach(n, function(item, index){
                    $scope.areaCodes.push({
                        key: item.name,
                        value: '+' + item.phone_code,
                        name: item.name
                    })
                })
            }
        })

        function initLocation() {
            account.getLocation().then(function (data) {
                if (data.is_succ) {
                    data = data.data
                    angular.extend($scope.completeInfo, {
                        country: {
                            key: data.region.world_name,
                            value: data.region.world_code,
                        },
                        province: {
                            key: data.region.state_name,
                            value: data.region.state_code
                        },
                        city: {
                            key: data.region.city_name,
                            value: data.region.city_code
                        }
                    });
                    // console.log('$scope.basicInfo.locationWorld', $scope.basicInfo.locationWorld);
                    $scope.$broadcast('locationInfoReady');
                }

            });

            $scope.$on('locationInfoReady', function () {
                // getRegions('country', 'countries');

                if ($scope.completeInfo.country.value == 'CN') {
                    getRegions('province', 'provinces', $scope.completeInfo.country.value);
                    getRegions('city', 'cities', $scope.completeInfo.province.value);
                }
                if (!$scope.completeInfo.country.value) {
                    getRegions('province', 'provinces', 'CN');
                }
            });
        }

        // 根据 region code 获取对应的 regions
        function getRegions(regionName, regionsName, upperRegionCode) {
            var tmp;

            switch (regionName) {
                case 'country':
                    tmp = account.getWorlds(($scope.lang.isEnglish() ? 'en' : 'cn'));
                    break;
                case 'province':
                    tmp = account.getStates(upperRegionCode, ($scope.lang.isEnglish() ? 'en' : 'cn'));
                    break;
                case 'city':
                    tmp = upperRegionCode && account.getCities(upperRegionCode, ($scope.lang.isEnglish() ? 'en' : 'cn'));
                    break;
                default:
                    break;
            }

            tmp && tmp.then(function (data) {
                if (!data) return;
                // console.log(data);
                if (!data.is_succ) {
                    return;
                }
                $scope.address[regionsName] = data.data;
            });
        }

        // 选择一个 region
        function selectRegion(regionName, regionCode) {
            console.log($scope.completeInfo)
            switch (regionName) {
                case 'country':
                    $scope.completeInfo.province = {
                        key: undefined,
                        value: undefined
                    };
                    $scope.completeInfo.city = {
                        key: undefined,
                        value: undefined
                    };
                    $scope.address.cities = [];
                    getRegions('province', 'provinces', regionCode);
                    break;
                case 'province':
                    $scope.completeInfo.city = {
                        key: undefined,
                        value: undefined
                    };
                    getRegions('city', 'cities', regionCode);
                    break;
                default:
                    break;
            }
        }

        // 生成token
        account.setToken();

        $scope.sendCode = function(type) {
            if(type == 'phone' && !$scope.completeInfo.areaCode.value){
                $scope.showErr('areaCode');
            }
            if(!$scope.completeInfo[type]){
                $scope.showErr(type);
                return
            }
            account.sendCode(
                $scope.completeInfo[type],
                $cookies['code_token'],
                1,
                $scope.completeInfo.areaCode.value.replace(/\+/gi, '') || null,
                type == 'phone' ? 1 : 2
            ).then(function(data){
                $scope.completeInfo.hasSendCode = data.is_succ
                $scope.codeErr[type] = {
                    show: !data.is_succ,
                    msg: data.message
                }
                if($scope.completeInfo.hasSendCode){
                    $interval(function(){
                        $scope.completeInfo.waitTime -= 1
                        if($scope.completeInfo.waitTime == 0){
                            $scope.completeInfo.hasSendCode = false
                            $scope.completeInfo.waitTime = 59
                        }
                    }, 1000, 59)
                }
            })
        }

        $scope.submitCompleteForm = function () {
            if(!$scope.personal.phone){
                $scope.showErr('phone');
                $scope.showErr('areaCode');
                $scope.showErr('phoneCode');
            }
            if(!$scope.personal.email){
                $scope.showErr('email');
                $scope.showErr('emailCode');
            }
            $scope.showErr('username');
            if($scope.completeInfo.country.value == 'CN'){
                $scope.showErr('province');
                $scope.showErr('city');
            }
            $scope.showErr('address');

            console.log('$scope.completeForm.$invalid', $scope.completeForm.$invalid);
            console.log('$scope.completeInfo', $scope.completeInfo);

            if ($scope.completeForm.$invalid) {
                return
            }

            $scope.completeInfo.clickable = false;

            if(!$scope.personal.email || !$scope.personal.phone){
                account.checkCode(
                    $scope.personal.phone ? $scope.completeInfo.email : $scope.completeInfo.phone,
                    $scope.personal.phone ? $scope.completeInfo.emailCode : $scope.completeInfo.phoneCode,
                    $scope.personal.phone ? 2 : 1,
                    $scope.personal.phone ? null : $scope.completeInfo.areaCode.value.replace(/\+/gi, '')
                ).then(function(data){
                    if(data.is_succ){
                        confirmSubmit()
                    } else {
                        $scope.completeInfo.clickable = true;
                        $scope.backErr.show = true;
                        $scope.backErr.msg = data.message;
    
                        $timeout(function () {
                            $scope.backErr.show = false;
                            $scope.backErr.msg = '';
                        }, 2000);
                    }
                })
            } else {
                confirmSubmit()
            }

            function confirmSubmit(){
                var params = {
                    username: $scope.completeInfo.username,
                    world_code: $scope.personal.region.world_code,
                    state_code: $scope.completeInfo.province.value,
                    city_code: $scope.completeInfo.city.value,
                    address: $scope.completeInfo.address,
                    is_live: $scope.personal.is_live || null
                }
                if(!$scope.personal.email){
                    params.email = $scope.completeInfo.email || null
                    params.code = $scope.completeInfo.emailCode || null
                } 
                if(!$scope.personal.phone){
                    params.phone = $scope.completeInfo.phone || null
                    params.code = $scope.completeInfo.phoneCode || null
                    params.phone_code = $scope.completeInfo.areaCode.value.replace(/\+/gi, '') || null
                }
                // 神策数据统计
                sa.track('btn_verify');
                account.updataUserInfo( params ).then(function (data) {
                    $scope.completeInfo.clickable = true;
                    if (data.is_succ) {
                        // 向authenController发送信息
                        $scope.$emit('goState', data.data);

                        sa.track('New_Personaldata');
                    } else {
                        $scope.backErr.show = true;
                        $scope.backErr.msg = data.message;

                        $timeout(function () {
                            $scope.backErr.show = false;
                            $scope.backErr.msg = '';
                        }, 2000);
                    }
                });
            }
        }

        $scope.checkExsit = function (type) {
            var user_code = $scope.personal.user_code;
            if (type == 1) {
                var checkName = 'username';
                if ($scope.personal.username == $scope.completeInfo.username) {
                    return;
                }
            }
            else if (type == 2) {
                var checkName = 'email';
            }
            else if (type == 4) {
                var checkName = 'id_num';
            }

            var checkInfo = $scope.completeInfo[checkName];

            // console.log($scope.completeInfo[checkName])

            if (!checkName || $scope.completeForm[checkName].$invalid) {
                return
            }

            account.checkExist(type, checkInfo, user_code || null).then(function (data) {
                if (data.data) {
                    $scope.exsit[checkName].show = true;
                } else {
                    $scope.exsit[checkName].show = false;
                }
            });
        }

        $scope.showErr = function (name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name].show = true;
            }
        }

        $scope.hideErr = function (name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name].show = false;
            }
            if ($scope.exsit[name]) {
                $scope.exsit[name].show = false;
            }
            if ($scope.codeErr[name]) {
                $scope.codeErr[name].show = false;
            }
        }
    }

    // id_card
    function AuthenRealnameController($scope, $state, $modal, validator, account) {
        $scope.is_live = $scope.personal.is_live
        $scope.verification = {
            id: {
                number: undefined,
                frontStatus: 0,
                backStatus: 0
            }
        };

        $scope.realnameInfo = {
            realname: '',
            id_type: {
                key: undefined,
                value: undefined
            },
            id_num: '',
            year18: '',
            gender: {
                key: '',
                value: ''
            },
            birthday: ''
        }
        $scope.genders = [
            {
                key: $scope.lang.text("tigerWitID.female"),
                value: '0'
            },
            {
                key: $scope.lang.text("tigerWitID.male"),
                value: '1'
            }
        ]
        $scope.idType = [
            {
                key: $scope.lang.text("tigerWitID.settings.mainlandResidentIdentityCard"),
                value: 0,
                isCN: true,         //中国区
                isGlobal: false     //国际区
            },
            {
                key: $scope.lang.text("tigerWitID.settings.gAPermit"),
                value: 1,
                isCN: true,
                isGlobal: false
            },
            {
                key: $scope.lang.text("tigerWitID.settings.tPermit"),
                value: 2,
                isCN: true,
                isGlobal: false
            },
            {
                key: $scope.lang.text("tigerWitID.settings.passport"),
                value: 3,
                isCN: true,
                isGlobal: true
            },
            {
                key: $scope.lang.text("tigerWitID.settings.driverLicense"),
                value: 4,
                isCN: true,
                isGlobal: true
            },
            {
                key: $scope.lang.text("tigerWitID.settings.iDCard"),
                value: 5,
                isCN: false,
                isGlobal: true
            }
        ]
        $scope.$watch('personal.updatePapers', function (newVal, oldVal) {
            if(JSON.stringify(newVal) != "{}" && newVal.hint == 1){
                $scope.realnameInfo.realname = newVal.real_name;
                $scope.realnameInfo.id_type.key = $scope.idType[newVal.idcard_type].key;
                $scope.realnameInfo.id_type.value = $scope.idType[newVal.idcard_type].value;
                $scope.realnameInfo.id_num = newVal.id_no;
                $scope.realnameInfo.gender.key = $scope.genders[newVal.gender].key;
                $scope.realnameInfo.gender.value = $scope.genders[newVal.gender].value;
                var date = newVal.birth;
                $scope.realnameInfo.birthday = date.substr(0,4)+'-'+date.substr(4,2)+'-'+date.substr(6,2);
            }
        }, true)
        $scope.frontErr = {
            idFront: {
                show: false
            },
            idBack: {
                show: false
            },
            realname: {
                show: false,
                reg: validator.regType.realname.reg,
                tip: validator.regType.realname.tip,
            },
            id_num: {
                show: false,
                reg: validator.regType.idNumber.reg,
                tip: validator.regType.idNumber.tip
            },
            id_type: {
                show: false
            },
            gender: {
                show: false
            },
            birthday: {
                show: false
            }
        };

        $scope.backErr = {
            system: {
                show: false,
                status: 0
            }
        };


        $scope.exsit = {
            id_num: {
                show: ''
            }
        }

        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.submitForm = submitForm;
        $scope.updatePaper = updatePaper;
        $scope.readyToUpload = {};
        $scope.uploadFinish = {};
        $scope.clickable = true;

        // 实名认证功能的位置：注册或者 setting
        if ($state.current.name === 'space.setting.subpage') {
            $scope.type = 'setting';
        }

        $scope.$on('saveFile', function (event, data) {
            $scope.$apply(function () {
                $scope.verification.id[data.target.face + 'Status'] = 0;
                hideErr('', 'idFront');
                hideErr('', 'idBack');
                /*去重*/
                if (data.target.face == 'front') {
                    $scope.readyToUpload.front = data.target
                } else {
                    $scope.readyToUpload.back = data.target
                }
                console.log($scope.readyToUpload);
            });
        });

        $scope.$on('uploadIdCardStart', function (event, data) {
            $scope.verification.id[data.face + 'Status'] = 1;
        });

        $scope.$on('uploadIdCardSuccess', function (event, data) {
            $scope.uploadFinish[data.face] = true;
            $scope.$apply(function () {
                $scope.verification.id[data.face + 'Status'] = 2;
            });
            if($scope.realnameInfo.id_type.value == '0'){
                if ($scope.uploadFinish.hasOwnProperty('front') &&
                    $scope.uploadFinish.hasOwnProperty('back') &&
                    ($scope.backErr.system.status != 3)
                ) {
                    if($scope.toState.name == 'space.update'){
                        $scope.personal.updatePapers.profile_check = 2;
                        $scope.personal.verify_status = 5;
                    }else{
                        // 向authenController发送信息
                        $scope.$emit('goState', data.data);
                    }
                    // 神策数据统计
                    sa.track('btn_verify');
                }
            }else{
                if ($scope.uploadFinish.hasOwnProperty('front') &&
                    ($scope.backErr.system.status != 3)
                ) { 
                    if($scope.toState.name == 'space.update'){
                        $scope.personal.updatePapers.profile_check = 2;
                        $scope.personal.verify_status = 5;
                    }else{
                        // 向authenController发送信息
                        $scope.$emit('goState', data.data);
                    }
                    // 神策数据统计
                    sa.track('btn_verify');
                }
            }
        });

        $scope.$on('uploadIdCardFail', function (event, data) {
            $scope.$apply(function () {
                $scope.clickable = true;
                $scope.verification.id[data.face + 'Status'] = 3;
            });
        });

        function hideErr(controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = false;
            }
        }

        function showErr(controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = true;
            }
        }

        function submitForm(formName) {
            showErr('realname');
            showErr('id_num');
            showErr('id_type');
            showErr('gender');
            showErr('birthday');

            if (!$scope.readyToUpload.hasOwnProperty('front')) {
                showErr('idFront');
                return
            }

            if ($scope.realnameInfo.id_type.value == 0 && !$scope.readyToUpload.hasOwnProperty('back')) {
                showErr('idBack');
                return
            }

            if ($scope.realnameForm.$invalid) {
                return
            }

            if (!$scope.realnameInfo.year18 && $scope.realnameInfo.id_type.value == 0) {
                layer.msg($scope.lang.text("tigerWitID.settings.tip13"))
                return
            }
            $scope.clickable = false;

            // 提交身份信息
            account.updataId({
                id_no: $scope.realnameInfo.id_num,
                idcard_type: $scope.realnameInfo.id_type.value,
                real_name: $scope.realnameInfo.realname,
                gender: $scope.realnameInfo.gender.value,
                birth: $scope.realnameInfo.birthday,
                is_live: $scope.personal.is_live
            }).then(function (data) {
                if (!data.is_succ || data.data.id_no_exists) {
                    layer.msg(data.message || $scope.lang.text("tigerWitID.settings.idNumExists"))
                    $scope.clickable = true;
                } else {
                    sa.track('New_Realname');
                    sa.track('New_uploadcard');
                    /*上传图片*/
                    paperUpdate();
                }
            })
        }
        // 更新证件
        function updatePaper(){
            if (!$scope.readyToUpload.hasOwnProperty('front')) {
                showErr('idFront');
                return
            }

            if ($scope.realnameInfo.id_type.value == 0 && !$scope.readyToUpload.hasOwnProperty('back')) {
                showErr('idBack');
                return
            }
            $scope.clickable = false;
            paperUpdate();
        }
        function paperUpdate(){
            angular.forEach($scope.readyToUpload, function (data, index, array) {
                data.submit();
            });
        }

        $scope.checkExsit = function (type) {
            var checkInfo = $scope.realnameInfo.id_num;
            var user_code = $scope.personal.user_code;
            var checkName = 'id_num'

            if (!checkName || $scope.realnameForm[checkName].$invalid) {
                return
            }

            account.checkExist(type, checkInfo, user_code || null).then(function (data) {
                if (data.data) {
                    $scope.exsit[checkName].show = true;
                } else {
                    $scope.exsit[checkName].show = false;
                }
            });
        }

        $scope.checkBirthday = function () {
            var strBirthday = "";
            var identityCard = $scope.realnameInfo.id_num
            if ($scope.realnameForm.id_num.$invalid) {
                return
            }
            if (identityCard.length == 15) {
                strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
            }
            if (identityCard.length == 18) {
                strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
            }
            var birthDate = new Date(strBirthday);
            var nowDateTime = new Date();
            var age = nowDateTime.getFullYear() - birthDate.getFullYear();
            if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
                age--;
            }
            if (parseInt(age) < 18) {
                $scope.realnameInfo.year18 = false
                layer.msg($scope.lang.text("tigerWitID.settings.tip13"))
            } else {
                $scope.realnameInfo.year18 = true
                if (parseInt(age) >= 75) {
                    layer.msg($scope.lang.text("tigerWitID.myAccount.tip37"), {
                        time: 0,
                        btn: [$scope.lang.text("tigerWitID.ok")],
                        yes: function (index) {
                            layer.close(index)
                        }
                    })
                }
            }
        }
    }
})();