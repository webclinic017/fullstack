;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AuthenController', AuthenController)
        .controller('AuthenInvestInfoController', AuthenInvestInfoController)
        .controller('AuthenCompleteController', AuthenCompleteController)
        .controller('AuthenRealnameController', AuthenRealnameController)
        .controller('AuthenSubmitController', AuthenSubmitController);

    AuthenController.$inject = ['$scope', '$cookies', '$location', 'account', '$state'];
    AuthenInvestInfoController.$inject = ['$scope', '$state', '$timeout', 'account'];
    AuthenCompleteController.$inject = ['$scope', 'validator', 'account', '$timeout'];
    AuthenRealnameController.$inject = ['$scope', '$state', '$modal', 'validator', 'account'];
    AuthenRealnameController.$inject = ['$scope', '$state', '$modal', 'validator', 'account'];
    AuthenSubmitController.$inject = ['$scope', '$state', '$modal', 'validator', 'account'];

    // 主控制器
    function AuthenController($scope, $cookies, $location, account, $state) {
        $scope.flow = {
            step: 1,
            authStatusMap: {
                "0": "index",        // 未注册 -> 首页
                '1': 'investInfo',   // 投资信息 - kyc
                '2': 'complete',     // 完成kyc 完善资料信息
                '3': 'realname',     // 已经填写真实姓名和身份证号 -> 身份证图片页面
                '4': 'realname',     // 审核拒绝 -> 姓名、身份证号页面
                "5": "submit",       // 待审核 -> 审核中页面
                "6": 'submit',       // 审核通过 -> 审核成功，设置MT4密码页面
                "7": 'submit'        // 已经开户 -> MT4 帐号设置成功页面
            }
        }

        function goState(dist) {
            $state.go('anthen.subpage', {
                subpage: dist
            });
        }

        $scope.$on('goState', function (e, flow) {
            getAuthStatus();
            goState(flow);
        });

        $scope.$on('getAuthStatus', function (e, flow) {
            getAuthStatus();
        });

        if($scope.personal.verify_status){
            goState($scope.flow.authStatusMap[$scope.personal.verify_status]);
        }

        // 获取当前认证状态
        getAuthStatus();
        var showMsg = undefined;
        function getAuthStatus() {
            account.getAuthStatus().then(function (data) {
                console.log('getAuthStatus', data);
                if (data.is_succ) {
                    $scope.$broadcast("hideLoadingImg");
                    // 控制流程导航active
                    $scope.flow.step = data.data.status;
                    // 控制当前流程显示页面
                    goState($scope.flow.authStatusMap[data.data.status]);
                    if (data.data.status == 4) {
                        if (!showMsg) {
                            showMsg = layer.msg('您上传的身份证照片审核被拒绝，请重新上传，被拒原因请查看系统消息。');
                        }
                    }
                    if (data.data.status == 0) {
                        window.location.href = 'https://www.tigerwit.com/space/#/account/register'
                    }
                } else {
                    layer.msg('服务器异常，请刷新重试！');
                }
            });
        }
    }

    // kyc
    function AuthenInvestInfoController($scope, $state, $timeout, account) {
        window.onbeforeunload = function () {
            return '确认离开当前页面吗？未保存的数据将会丢失！'
        }
        $scope.$emit('getAuthStatus');
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

        if ($state.current.name === 'space.setting.subpage') {
            $scope.type = 'setting';
        }

        // setUserLastKyc();

        function selectOption(question, option) {
            // console.log('question', question);
            // console.log('option', option);
            $scope.tip.questions.show = false;
            $scope.tip.questions.msg = undefined;

            // 多选
            if (question.data.type == 3) {
                option.checked = option.checked ? false : true;
                kycInfo[question.id] = kycInfo[question.id] += ',' + option.key
            }
            // 单选
            else {
                kycInfo[question.id] = option.key;
            }

            // console.log(kycInfo);
        }

        function submitForm() {
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
                    $scope.tip.questions.msg = '请完成题目：' + item.title
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
            // console.info(kycInfo);

            account.setKyc(kycInfo).then(function (data) {
                console.info(data);
                $scope.clickable = true;
                if (data.is_succ) {
                    // 神策数据统计
                    sa.setProfile({
                        key_experience: kycInfo.interests_exp,
                        key_market: kycInfo.trading_market,
                        key_risk: kycInfo.risk_tendency
                    });
                    // 神策数据统计
                    sa.track('btn_kyc');
                    $scope.tip.system.show = true;
                    $scope.tip.system.msg = 'KYC 认证信息提交成功';

                    // 向authenController发送信息，切换到complete页面
                    $timeout(function () {
                        $scope.$emit('goState', 'complete');
                    }, 1500);
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
                // console.info('data',data);
                angular.forEach(data.data, function (data, index, array) {
                    var json = {};
                    json["id"] = index;
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
    function AuthenCompleteController($scope, validator, account, $timeout) {
        window.onbeforeunload = function () {
            return '确认离开当前页面吗？未保存的数据将会丢失！'
        }
        $scope.$emit('getAuthStatus');
        $scope.completeInfo = {
            username: '',
            email: '',
            realname: '',
            id_num: '',
            clickable: true
        }

        $scope.exsit = {
            username: {
                show: false,
                msg: ''
            },
            email: {
                show: false,
                msg: ''
            },
            id_num: {
                show: false,
                msg: ''
            },
        }

        $scope.frontErr = {
            username: {
                show: false,
                tip: validator.regType.username.tip
            },
            email: {
                show: false,
                reg: validator.regType.email.reg
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
            }
        }

        $scope.backErr = {
            show: false,
            msg: ''
        }

        $scope.submitCompleteForm = function () {
            $scope.showErr('username');
            $scope.showErr('email');
            $scope.showErr('realname');
            $scope.showErr('id_num');

            console.log('$scope.completeForm.$invalid', $scope.completeForm.$invalid);

            if ($scope.completeForm.$invalid) {
                return
            }

            $scope.completeInfo.clickable = false;

            // 神策数据统计
            sa.track('btn_verify');

            account.updataUserInfo({
                username: $scope.completeInfo.username,
                realname: $scope.completeInfo.realname,
                id_no: $scope.completeInfo.id_num,
                email: $scope.completeInfo.email,
            }).then(function (data) {
                // console.log(data);
                $scope.completeInfo.clickable = true;
                if (data.is_succ) {
                    // 去实名认证
                    $scope.$emit('goState', 'realname');
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

        $scope.checkExsit = function (type) {
            if (type == 1) {
                var checkName = 'username';
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

            account.checkExist(type, checkInfo).then(function (data) {
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
        }
    }

    // id_card
    function AuthenRealnameController($scope, $state, $modal, validator, account) {
        $scope.verification = {
            id: {
                number: undefined,
                frontStatus: 0,
                backStatus: 0
            }
        };

        $scope.frontErr = {
            idFront: {
                show: false
            },
            idBack: {
                show: false
            }
        };

        $scope.backErr = {
            system: {
                show: false,
                status: 0
            }
        };

        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.submitForm = submitForm;
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
            if ($scope.uploadFinish.hasOwnProperty('front') &&
                $scope.uploadFinish.hasOwnProperty('back') &&
                ($scope.backErr.system.status != 3)
            ) {
                $scope.$emit('goState', 'submit');
            }
        });

        $scope.$on('uploadIdCardFail', function (event, data) {
            $scope.$apply(function () {
                $scope.clickable = false;
                $scope.verification.id[data.face + 'Status'] = 3;
            });
        });

        function hideErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = false;
            }
        }

        function showErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = true;
            }
        }

        function submitForm(formName) {
            // console.log($scope.readyToUpload);

            if (!$scope.readyToUpload.hasOwnProperty('front')) {
                showErr(formName, 'idFront');
                return
            }
            if (!$scope.readyToUpload.hasOwnProperty('back')) {
                showErr(formName, 'idBack');
                return
            }

            /*遍历对象上传图片*/
            angular.forEach($scope.readyToUpload, function (data, index, array) {
                data.submit();
            });

            $scope.clickable = false;
        }
    }

    function AuthenSubmitController($scope) {
        $scope.$emit('getAuthStatus');
    }
})();