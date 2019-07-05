;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AuthenController', AuthenController)
        .controller('AuthenInvestInfoController', AuthenInvestInfoController)
        .controller('AuthenRealnameController', AuthenRealnameController)
        .controller('AuthenIdentityController', AuthenIdentityController)
        .controller('AuthenAddressController', AuthenAddressController)
        .controller('AuthenAgreementController', AuthenAgreementController)
        .controller('AuthenSubmitController', function () { })
        .controller('AuthenSuccessController', function () { })
        .controller('AuthenIslamicController', AuthenIslamicController)
        .controller('AuthenAddressInfoController', AuthenAddressInfoController)

    AuthenController.$inject = ['$scope', '$cookies', '$location', 'account', '$state', '$stateParams', '$timeout', '$modal', '$layer'];
    AuthenInvestInfoController.$inject = ['$scope', '$state', '$timeout', 'account', '$location', '$modal'];
    AuthenRealnameController.$inject = ['$scope', 'validator', 'account', '$timeout', '$interval', '$location', '$modal', '$cookies'];
    AuthenIdentityController.$inject = ['$scope', '$state', '$modal', 'validator', 'account', '$location', '$layer', '$timeout'];
    AuthenAddressController.$inject = ['$scope', '$state', '$modal', 'validator', 'account', '$timeout'];
    AuthenIslamicController.$inject = ['$scope', '$state', '$modal', 'validator', 'account', '$timeout'];
    AuthenAgreementController.$inject = ['$scope', 'account'];
    AuthenAddressInfoController.$inject = ['$scope', 'account', '$modal', '$timeout'];

    // 主控制器
    function AuthenController($scope, $cookies, $location, account, $state, $stateParams, $timeout, $modal, $layer) {
        $scope.dredgingType = 'unkown'  // 交易账户开通状态
        $scope.flow = {
            step: 1,
            // authStatusMap: {
            //     '1': 'investInfo',   // 投资信息 - kyc
            //     '2': 'complete',     // 完成kyc 完善资料信息
            //     '3': 'realname',     // 未上传过身份证
            //     '4': 'realname',     // 审核拒绝 完善资料信息
            //     "5": "submit",       // 待审核 -> 审核中页面
            //     "6": 'success',      // 审核通过
            //     "7": 'address',      // 真实地址
            //     "10001": 'agreement',    // 上传协议
            //     "10": 'success',     // 审核通过
            //     "8": 'islamic',      // 伊斯兰账户协议页面
            // }
            authStatusMap: {
                '1': 'islamic',         //伊斯兰协议
                '2': 'realname',        //完善资料
                '3': 'addressInfo',     //完善地址
                '4': 'investInfo',      //投资信息确认(KYC)
                '5': 'fundInfo',        //财务细节调查
                '6': 'address',         //上传地址证明
                '7': 'identity',        //上传身份证明
                '10': 'submit',         //待审核
                '11': 'success',        //审核通过
                "10001": 'agreement',   //上传协议 (代理商)
            }
        }

        $scope.$on('goState', function (e, data) {
            if ($location.search().isAgent) {
                agentStatus()
            } else {
                goState(data)
            }
        })
        // 开户认证
        function goState(data) {
            // console.log(data)
            // console.log($scope.personal)
            $scope.dredgingType = data.dredged_type || data.account_status
            $timeout(function () {
                $state.go($state.current.name, {
                    subpage: $scope.flow.authStatusMap[data.verify_status || data.status]
                });
            })
        }
        // 代理商认证
        function agentStatus() {
            $scope.$emit('gloabl.agentAuthStatus', {
                callback: function () {
                    $timeout(function () {
                        $state.go($state.current.name, {
                            subpage: $scope.flow.authStatusMap[$scope.personal.agentAuthStatus.status],
                            isAgent: 'isAgent'
                        });
                    })
                }
            })
        }
        if ($location.search().isAgent) {
            agentStatus()
        } else {

            if ($scope.personal.verify_status) {
                // 防止不能跳转到本页
                setVerifyStatus();
                goState({
                    verify_status: $scope.personal.verify_status,
                    dredged_type: {
                        '0': 'unknow',
                        '1': 'live',
                        '2': 'demo',
                    }[$scope.personal.account_status]
                });
            } else {
                $scope.$emit('global.getAuthStatus', {
                    ctrlName: 'AuthenController',
                    callback: function (data) {
                        setVerifyStatus();
                        goState(data)
                    }
                })
            }
        }
        // 如果处于待更新证件且认证成功过的情况跳入上传身份证页面
        function setVerifyStatus() {
            if ($scope.personal.updatePapers.hint == 1 && $scope.personal.updatePapers.profile_check == 3) {
                $scope.personal.verify_status = 7;
            }
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
    }

    // kyc、fundInfo
    function AuthenInvestInfoController($scope, $state, $timeout, account, $location, $modal) {
        // window.onbeforeunload = function () {
        //     return '确认离开当前页面吗？未保存的数据将会丢失！'
        // }
        $scope.questions = [];
        $scope.isSetKyc = false;
        $scope.pageType = 0;    //0 kyc, 1 财务细节, 2 代理商
        $scope.title = $scope.lang.text('tigerWitID.myAccount.questionnaire');
        $scope.subTitle = $scope.lang.text('tigerWitID.settings.openAccountNewTip15');
        var confirmTwo = true;   //二次确认

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
        $scope.kycInfo = {};
        var kycInfo = {};
        var muiltiSelect = {};

        if ($state.current.name === 'space.setting.subpage') {
            $scope.type = 'setting';
        }

        if ($state.params.subpage === 'fundInfo') {
            $scope.pageType = 1;
            $scope.title = $scope.lang.text('tigerWitID.settings.openAccountNewTip16');
            $scope.subTitle = $scope.lang.text('tigerWitID.settings.openAccountNewTip17');
        } else {
            if ($location.search().isAgent) {
                $scope.pageType = 2;
            } else {
                $scope.pageType = 0;
            }
        }
        getKyc({ type: $scope.pageType });
        function selectOption(question, option, $index) {
            // console.log('question', question);
            // console.log('option', option);
            $scope.tip.questions.show = false;
            $scope.tip.questions.msg = undefined;
            // console.log(question, option);
            // 多选
            if (question.data.type == 3) {
                if (!muiltiSelect[question.id]) {
                    muiltiSelect[question.id] = [];
                }
                option.checked = option.checked ? false : true;
                muiltiSelect[question.id][$index] = option.checked ? option.key : undefined;
                console.log(muiltiSelect[question.id]);
            }
            else if (question.data.type == 4) {
                kycInfo[question.id] = question.answer;
            }
            // 单选、下拉
            else {
                kycInfo[question.id] = option.key;
            }
            if (question.id === 'investment_goals') {   //财务细节第6题需二次确认
                if (option.key === 'capital_preservation') {
                    confirmTwo = false;
                    openConfrimTwoMdl();
                } else {
                    confirmTwo = true;
                }
            }
            $scope.kycInfo = kycInfo;
            // console.log(kycInfo);
        }

        function openConfrimTwoMdl (type) {
            $modal.open({
                templateUrl: '/views/authen/authen_modal.html',
                size: 'sm',
                backdrop: true,
                controller: ['$scope', '$modalInstance', 'lang', function ($scope, $modalInstance, lang) {
                    $scope.lang = lang;
                    $scope.closeModal = closeModal;
                    $scope.setConfirm = setConfirm;

                    function setConfirm (status) {
                        closeModal();
                        confirmTwo = status;
                        if (type && status) {
                            confirmSubmitForm();
                        }
                    }
                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }]
            });
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
            // console.log(kycInfo);
        }

        function submitForm() {
            mapMuiltiSelectToKycInfo();

            if ($scope.tip.questions.msg) {
                return;
            }

            if ($scope.pageType !== 0) {
                angular.extend(kycInfo, {
                    type: $scope.pageType
                });
            }

            if (confirmTwo) {
                confirmSubmitForm();
            } else {
                openConfrimTwoMdl(true);
            }
            
        }

        function confirmSubmitForm () {
            var msg = {};
            angular.forEach(kycInfo, function (value, key) {
                msg[key] = value;
            })
            if (msg.employment_status === "self_employed") {
                msg.position = undefined;
            } else if (msg.employment_status === "unemployed" || msg.employment_status === "retired") {
                msg.industry = undefined;
                msg.position = undefined;
            }
            $scope.clickable = false;
            account.setKyc(msg).then(function (data) {
                // console.info(data);
                $scope.clickable = true;
                if (data.is_succ) {
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

        function getKyc(params) {
            account.getKyc(params).then(function (data) {
                $scope.$broadcast("hideLoadingImg");
                // console.info('data', data);
                angular.forEach(data.data, function (data, index, array) {
                    var json = {};
                    json["id"] = data.name;
                    json["data"] = data;
                    json["title"] = data["title"];
                    if (data.type == 1) {
                        json["answer"] = {
                            key: undefined,
                            value: undefined
                        }
                    } else {
                        json["answer"] = undefined;
                    }
                    $scope.questions.push(json);
                });
                // console.log('questions', $scope.questions)
                $scope.industry = {} // 默认职业所属行业
                // console.log($scope.industry)
                angular.forEach($scope.questions, function (question) {
                    kycInfo[question.id] = '';
                });
            });
        }
    }

    // realname
    function AuthenRealnameController($scope, validator, account, $timeout, $interval, $location, $modal, $cookies) {
        // console.log('$scope.personal', $scope.personal)
        $scope.completeInfo = {
            username: '',
            firstname: '',
            lastname: '',
            gender: {
                key: '',
                value: ''
            },
            birthday: '',
            email: '',
            emailCode: '',
            phone: '',
            phoneCode: '',
            areaCode: {
                key: undefined,
                value: ''
            },
            clickable: true,
            hasSendCode: false,
            waitTime: 59
        };
        $scope.genders = [
            {
                key: $scope.lang.text("tigerWitID.female"),
                value: '0'
            },
            {
                key: $scope.lang.text("tigerWitID.male"),
                value: '1'
            }
        ];

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
            gender: {
                show: false
            },
            birthday: {
                show: false
            },
            phone: {
                show: false,
                reg: new RegExp()
            },
            country: {
                show: false
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
            },
            postCode: {
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
        var personalIsNan = $scope.$watch('personal.user_code', function (n) {
            if (!n) return;
            $scope.completeInfo.username = $scope.personal.username;
            $scope.completeInfo.email = ($scope.personal.email || '');
            $scope.completeInfo.phone = ($scope.personal.phone || '');
            $scope.completeInfo.areaCode.value = '+' + ($scope.personal.phone_code || '86');
            $scope.frontErr.email.reg = $scope.completeInfo.email ? /[\s\S]*/ : validator.regType.email.reg;
            $scope.frontErr.phone.reg = $scope.completeInfo.phone ? /[\s\S]*/ : validator.regType.phone.reg;
            $scope.stopWatch = function () {
                return personalIsNan()
            }
            $scope.stopWatch()
        })

        $scope.areaCodes = []

        $scope.$watch('worldList', function (n, o) {
            if (n.length > 0) {
                angular.forEach(n, function (item, index) {
                    $scope.areaCodes.push({
                        key: item.name,
                        value: '+' + item.phone_code,
                        name: item.name
                    })
                })
            }
        });

        $scope.sendCode = function (type) {
            if (type == 'phone' && !$scope.completeInfo.areaCode.value) {
                $scope.showErr('areaCode');
            }
            if (!$scope.completeInfo[type]) {
                $scope.showErr(type);
                return
            }
            account.sendCode(
                $scope.completeInfo[type],
                $cookies['code_token'],
                1,
                $scope.completeInfo.areaCode.value.replace(/\+/gi, '') || null,
                type == 'phone' ? 1 : 2
            ).then(function (data) {
                $scope.completeInfo.hasSendCode = data.is_succ
                $scope.codeErr[type] = {
                    show: !data.is_succ,
                    msg: data.message
                }
                if ($scope.completeInfo.hasSendCode) {
                    $interval(function () {
                        $scope.completeInfo.waitTime -= 1
                        if ($scope.completeInfo.waitTime == 0) {
                            $scope.completeInfo.hasSendCode = false
                            $scope.completeInfo.waitTime = 59
                        }
                    }, 1000, 59)
                }
            })
        }

        $scope.submitCompleteForm = function () {
            if (!$scope.personal.phone) {
                $scope.showErr('phone');
                $scope.showErr('areaCode');
                $scope.showErr('phoneCode');
            }
            if (!$scope.personal.email) {
                $scope.showErr('email');
                $scope.showErr('emailCode');
            }
            $scope.showErr('username');
            $scope.showErr('gender');
            $scope.showErr('birthday');

            if ($scope.completeForm.$invalid) {
                return
            }

            $scope.completeInfo.clickable = false;

            if (!$scope.personal.email || !$scope.personal.phone) {
                account.checkCode(
                    $scope.personal.phone ? $scope.completeInfo.email : $scope.completeInfo.phone,
                    $scope.personal.phone ? $scope.completeInfo.emailCode : $scope.completeInfo.phoneCode,
                    $scope.personal.phone ? 2 : 1,
                    $scope.personal.phone ? null : $scope.completeInfo.areaCode.value.replace(/\+/gi, '')
                ).then(function (data) {
                    if (data.is_succ) {
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

            function confirmSubmit() {

                var params = {
                    username: $scope.completeInfo.username,
                    first_name: $scope.completeInfo.firstname,
                    last_name: $scope.completeInfo.lastname,
                    gender: $scope.completeInfo.gender.value,
                    birth: $scope.completeInfo.birthday
                }
                if (!$scope.personal.email) {
                    params.email = $scope.completeInfo.email || null
                }
                if (!$scope.personal.phone) {
                    params.phone = $scope.completeInfo.phone || null
                    params.phone_code = $scope.completeInfo.areaCode.value.replace(/\+/gi, '') || null
                }
                updataUserInfo();
                
                function updataUserInfo () {
                    $scope.completeInfo.clickable = false;
                    account.updataUserInfo(params).then(function (data) {
                        $scope.completeInfo.clickable = true;
                        if (data.is_succ) {
                            // 向authenController发送信息
                            $scope.$emit('goState', data.data);
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
    function AuthenIdentityController($scope, $state, $modal, validator, account, $location, $layer, $timeout) {
        $scope.is_live = $scope.personal.is_live
        $scope.verification = {
            id: {
                number: undefined,
                frontStatus: 0,
                backStatus: 0
            }
        };

        $scope.realnameInfo = {
            id_type: {
                key: undefined,
                value: undefined
            },
            id_num: ''
        };
        $scope.identityImgFront = undefined;
        $scope.identityImgBack = undefined;
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
            if (JSON.stringify(newVal) != "{}" && newVal.hint == 1) {
                $scope.realnameInfo.id_type.key = $scope.idType[newVal.idcard_type].key;
                $scope.realnameInfo.id_type.value = $scope.idType[newVal.idcard_type].value;
                $scope.realnameInfo.id_num = newVal.id_no;
            }
        }, true);
        $scope.frontErr = {
            id_num: {
                show: false,
                reg: validator.regType.idNumber.reg,
                tip: validator.regType.idNumber.tip
            },
            id_type: {
                show: false
            }
        };

        $scope.backErr = {
            show: false,
            msg: ''
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

        function submitForm() {
            showErr('id_num');
            showErr('id_type');
            if ($scope.realnameForm.$invalid) {
                return
            }
            if (twoDecide()) {
                $scope.clickable = false;

                // 提交身份信息
                account.updataIdCard({
                    id_no: $scope.realnameInfo.id_num,
                    cert_type: $scope.realnameInfo.id_type.value,
                    front: $scope.identityImgFront,
                    back: $scope.identityImgBack ? $scope.identityImgBack : undefined
                }).then(function (data) {
                    $scope.clickable = true;
                    if (data.is_succ) {
                        $scope.$emit('goState', data.data);
                    } else {
                        $scope.backErr.show = true;
                        $scope.backErr.msg = data.message;

                        $timeout(function () {
                            $scope.backErr.show = false;
                            $scope.backErr.msg = '';
                        }, 2000);
                    }
                })
            }
        }
        // 更新证件
        function updatePaper() {
            if (twoDecide()) {
                $scope.clickable = false;
                paperUpdate();
            }
        }
        function twoDecide() {
            if (!$scope.identityImgFront) {
                $scope.backErr.show = true;
                $scope.backErr.msg = $scope.lang.text('tigerWitID.myAccount.submitFrontSide');

                $timeout(function () {
                    $scope.backErr.show = false;
                    $scope.backErr.msg = '';
                }, 2000);
                return false;
            }

            if (($scope.realnameInfo.id_type.value == 0 || $scope.realnameInfo.id_type.value == 5 || $scope.realnameInfo.id_type.value == 4) && !$scope.identityImgBack) {
                $scope.backErr.show = true;
                $scope.backErr.msg = $scope.lang.text('tigerWitID.myAccount.uploadBackSide');

                $timeout(function () {
                    $scope.backErr.show = false;
                    $scope.backErr.msg = '';
                }, 2000);
                return false;
            }
            return true;
        }
        function paperUpdate() {
            account.updataIdCardBase64('front', $scope.identityImgFront).then(function (data) {
                if (data.is_succ) {
                    if ($scope.identityImgBack) {
                        account.updataIdCardBase64('back', $scope.identityImgBack).then(function (data) {
                            $scope.clickable = false;
                            if (data.is_succ) {
                                $scope.$emit('goState', data.data);
                            } else {
                                $scope.backErr.show = true;
                                $scope.backErr.msg = data.message;

                                $timeout(function () {
                                    $scope.backErr.show = false;
                                    $scope.backErr.msg = '';
                                }, 2000);
                            }
                        })
                    } else {
                        $scope.clickable = false;
                        $scope.$emit('goState', data.data);
                    }
                } else {
                    $scope.clickable = false;
                    $scope.backErr.show = true;
                    $scope.backErr.msg = data.message;

                    $timeout(function () {
                        $scope.backErr.show = false;
                        $scope.backErr.msg = '';
                    }, 2000);
                }
            })
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
    }

    // Address
    function AuthenAddressController($scope, $state, $modal, validator, account, $timeout) {
        $scope.addressType = [
            {
                key: $scope.lang.text('tigerWitID.settings.openAccountNewTip20'),
                value: 1
            },
            {
                key: $scope.lang.text('tigerWitID.settings.openAccountNewTip21'),
                value: 2
            },
            {
                key: $scope.lang.text('tigerWitID.settings.openAccountNewTip22'),
                value: 3
            }
        ]
        $scope.frontErr = {
            addressType: {
                show: false
            }
        };
        $scope.backErr = {
            show: false,
            msg: ''
        }
        $scope.clickable = true;
        $scope.addressInfo = {
            type: {
                key: undefined,
                value: undefined
            }
        };
        $scope.addressImgFront = undefined;
        $scope.addressImgBack = undefined;
        $scope.uploadAddress = uploadAddress;
        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        function uploadAddress() {
            showErr('addressType');
            if ($scope.addressForm.$invalid) {
                return
            }
            if ($scope.addressImgFront) {
                var oParams = {
                    cert_type: $scope.addressInfo.type.value,
                    front: $scope.addressImgFront
                };
                $scope.addressImgBack && (oParams.back = $scope.addressImgBack);
                $scope.clickable = false;
                account.setUploadAddressProve(oParams).then(function (data) {
                    $scope.clickable = true;
                    if (!data) return;
                    if (data.is_succ) {
                        // 向authenController发送信息
                        $scope.$emit('goState', data.data);
                    } else {
                        $scope.backErr.show = true;
                        $scope.backErr.msg = data.message;

                        $timeout(function () {
                            $scope.backErr.show = false;
                            $scope.backErr.msg = '';
                        }, 2000);
                    }
                })
            } else {
                $scope.backErr.show = true;
                $scope.backErr.msg = $scope.lang.text('tigerWitID.authen.pUploadAddress');

                $timeout(function () {
                    $scope.backErr.show = false;
                    $scope.backErr.msg = '';
                }, 2000);
            }
        }
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
    }

    //islamic
    function AuthenIslamicController($scope, $state, $modal, validator, account, $timeout) {
        $scope.applyIslamic = false;
        $scope.waiting = false;
        $scope.backErr = {
            show: false,
            msg: ''
        }

        $scope.submitApplyIslamic = submitApplyIslamic;

        function submitApplyIslamic (status) {
            // console.log(status, $scope.applyIslamic);
            if ($scope.waiting) return;
            if (status == 2 && !$scope.applyIslamic) return;
            $scope.waiting = true;
            account.setIslamicStatus(status).then(function (data) {
                // console.log(data);
                $scope.waiting = false;
                if (data.is_succ) {
                    $scope.$emit('goState', data.data);
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
    // Agreement  代理商上传协议
    function AuthenAgreementController($scope, account) {
        $scope.clickable = true;
        $scope.flagClick = true;
        $scope.agreementImg = [];
        $scope.uploadAgreement = uploadAgreement;
        $scope.agentProtocol = agentProtocol;
        function uploadAgreement(){
            if(!$scope.agreementImg[0] || !$scope.agreementImg[2]){
                layer.msg($scope.lang.text("tigerWitID.myAccount.completelyUpload"))
                return
            }
            $scope.clickable = false;
            account.uploadAgentProtocol({file: $scope.agreementImg}).then(function(data){
                if(data.is_succ){
                    $scope.$emit('goState');
                }else{
                    $scope.clickable = true;
                    layer.msg(data.message)
                }
            })
        }
        function agentProtocol(){
            if(!$scope.flagClick){
                return
            }
            $scope.flagClick = false;
            account.agentProtocol().then(function(data){
                $scope.flagClick = true;
                if(data.is_succ){
                    var url;
                    if($scope.lang.isDemo()){
                        url = 'https://demoimg.tigerwit.com'
                    }else{
                        url = 'https://img.tigerwit.com'
                    }
                    var flag = window.open(url + data.data.imgUrl)
                    if(flag == null) {
                        alert("Enable popup filtering in your browser!\n\n Please turn off this function temporarily!") ;  
                    }
                }
            })
        }
    }
    // addressInfo
    function AuthenAddressInfoController($scope, account, $modal, $timeout) {
        $scope.addressInfo = {
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
            postCode: '',
            type: {
                key: undefined,
                value: undefined
            },
            nationality: {
                key: undefined,
                value: undefined
            },
            tax_residency: {
                key: undefined,
                value: undefined
            },
            isNationality: true,
            isTaxResidency: true,
            clickable: true
        };
        $scope.frontErr = {
            province: {
                show: false
            },
            city: {
                show: false
            },
            postCode: {
                show: false
            },
            address: {
                show: false
            },
            type: {
                show: false
            }
        };
        $scope.backErr = {
            show: false,
            msg: ''
        };
        $scope.isIslamic = false;
        $scope.address = {};
        $scope.types = [
            {
                key: $scope.lang.text("tigerWitID.yes"),
                value: 1
            },
            {
                key: $scope.lang.text("tigerWitID.no"),
                value: 0
            }
        ];

        // 地址相关操作
        initLocation();
        $scope.selectRegion = selectRegion;

        function initLocation() {
            account.getLocation().then(function (data) {
                if (data.is_succ) {
                    data = data.data
                    angular.extend($scope.addressInfo, {
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
                    // 检测注册国际是否是伊斯兰国家
                    angular.forEach($scope.worldList, function (value, index) {
                        if (value.code === data.region.world_code && value.type === 'islamic') {
                            // console.log(value);
                            $scope.isIslamic = true;
                        }
                    });
                    // console.log('$scope.basicInfo.locationWorld', $scope.basicInfo.locationWorld);
                    $scope.$broadcast('locationInfoReady');
                }

            });

            $scope.$on('locationInfoReady', function () {

                if ($scope.addressInfo.country.value == 'CN') {
                    getRegions('province', 'provinces', $scope.addressInfo.country.value);
                    getRegions('city', 'cities', $scope.addressInfo.province.value);
                }
            });
        }

        // 根据 region code 获取对应的 regions
        function getRegions(regionName, regionsName, upperRegionCode) {
            var tmp;

            switch (regionName) {
                case 'country':
                    tmp = account.getWorlds();
                    break;
                case 'province':
                    tmp = account.getStates(upperRegionCode);
                    break;
                case 'city':
                    tmp = upperRegionCode && account.getCities(upperRegionCode);
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
        function selectRegion(regionName, regionCode, regionIslamic) {
            // console.log($scope.completeInfo)
            switch (regionName) {
                case 'country':
                    $scope.isIslamic = regionIslamic === 'islamic' ? true : false;
                    $scope.address.cities = [];
                    $scope.address.provinces = [];
                    if(regionCode == 'CN'){
                        getRegions('province', 'provinces', regionCode);
                        $scope.addressInfo.province = {
                            key: undefined,
                            value: undefined
                        };
                        $scope.addressInfo.city = {
                            key: undefined,
                            value: undefined
                        };
                    }
                    break;
                case 'province':
                    $scope.addressInfo.city = {
                        key: undefined,
                        value: undefined
                    };
                    getRegions('city', 'cities', regionCode);
                    break;
                default:
                    break;
            }
        }

        $scope.submitAddressInfoForm = function () {
            $scope.showErr('province');
            $scope.showErr('postCode');
            $scope.showErr('address');
            // $scope.showErr('type');

            if ($scope.addressInfoForm.$invalid) {
                console.log($scope.addressInfoForm);
                return
            }

            $scope.addressInfo.clickable = false;
            confirmSubmit()

            function confirmSubmit() {
                var params = {
                    world_code: $scope.addressInfo.country.value,
                    nationality: $scope.addressInfo.nationality.value,
                    tax_residency: $scope.addressInfo.tax_residency.value,
                    type: $scope.addressInfo.type.value,
                    post_code: $scope.addressInfo.postCode
                }
                if ($scope.addressInfo.country.value === 'CN') {
                    params.state_code = $scope.addressInfo.province.value;
                    params.city_code = $scope.addressInfo.city.value;
                    params.address = $scope.addressInfo.address;
                } else {
                    params.first_line_address = $scope.addressInfo.province.key;
                    params.second_line_address = $scope.addressInfo.city.key;
                    params.town = $scope.addressInfo.address;
                }

                if ($scope.isIslamic && !$scope.personal.islamic_status) {
                    $scope.addressInfo.clickable = true;
                    $modal.open({
                        templateUrl: '/views/account/islamic_modal.html',
                        size: 'sm',
                        backdrop: 'false',
                        resolve: {
                            passedScope: function () {
                                return {}
                            }
                        },
                        controller: ['$scope', 'passedScope', '$modalInstance', 'lang', function ($scope, passedScope, $modalInstance, lang) {
                            $scope.lang = lang;
                            $scope.loading = 0;
                            $scope.modalType = 1;
    
                            $scope.closeModal = closeModal;
                            $scope.submitConfrim = submitConfrim;
    
                            function submitConfrim (type) {
                                $scope.loading = 1;
                                updataUserInfo(type);
                                closeModal();
                            }
                            function closeModal() {
                                $modalInstance.dismiss();
                            }
                        }]
                    });
                } else {
                    updataUserInfo();
                }

                function updataUserInfo (type) {
                    $scope.addressInfo.clickable = false;
                    if (type === 'yes') params.islamic_status = 2;
                    if (type === 'no') params.islamic_status = 1;
                    account.setAuthenAddress(params).then(function (data) {
                        $scope.addressInfo.clickable = true;
                        if (data.is_succ) {
                            // 向authenController发送信息
                            $scope.$emit('goState', data.data);
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
        };

        $scope.checkNationality = function (status) {
            $scope.addressInfo.isNationality = status;
            if (status) {
                $scope.addressInfo.nationality.key = undefined;
                $scope.addressInfo.nationality.value = undefined;
            } else {
                $scope.addressInfo.nationality.key = $scope.addressInfo.country.key;
                $scope.addressInfo.nationality.value = $scope.addressInfo.country.value;
            }
        };
        $scope.checkTaxResidency = function (status) {
            $scope.addressInfo.isTaxResidency = status;
            if (status) {
                $scope.addressInfo.tax_residency.key = undefined;
                $scope.addressInfo.tax_residency.value = undefined;
            } else {
                $scope.addressInfo.tax_residency.key = $scope.addressInfo.country.key;
                $scope.addressInfo.tax_residency.value = $scope.addressInfo.country.value;
            }
        };

        $scope.showErr = function (name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name].show = true;
            }
        }

        $scope.hideErr = function (name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name].show = false;
            }
        }
    }
})();