;
(function () {
    'use strict';
    angular.module('fullstackApp').directive('voiceVerificationTab', voiceVerificationTab);
    voiceVerificationTab.$inject = ['$timeout', 'lang', 'account', '$layer', '$interval', '$state', '$cookies'];

    // 条件与条款 导航
    function voiceVerificationTab($timeout, lang, account, $layer, $interval, $state, $cookies) {
        return {
            restrict: 'A',
            // require:'?^sliderVerificationTab',
            // replace: true,
            scope: {
                accountType: '=',
                registerSetPassword: '=',
                settingInfoPhone: '=',
                isSlider: '=',
                registerStep: '=',
                codeList: '=',
                coldType: '=',
                isSendVoice: '=',
                fn: '&'
            },
            template:
              '<p class="account_login__remenber-switch text-center cannot-get">{{lang.text("verificationArray.notReceive")}}</p>' +
              '<div class="verification-wrap">' +
                '<ul>' +
                  '<li>' +
                    '<img src="/white_label/icons/voice_phone.png" alt="">' +
                    '<span class="account_login__remenber-switch get-send-code" ng-show="codeBtnStatus.step1Phone.count">{{lang.text("verificationArray.getVoice")}}</span>' +
                    '<span class="ash-disposal" ng-show="!codeBtnStatus.step1Phone.count">{{lang.text("verificationArray.getVoice")}}</span>' +
                    '<span>{{lang.text("verificationArray.getVoice2")}}</span>' +
                    '<span class="notAllowed" ng-show="codeBtnStatus.step1Phone.count_down">{{lang.text("tigerWitID.myAccount.tip39_1")}}{{ codeBtnStatus.step1Phone.msg }}{{lang.text("tigerWitID.myAccount.tip39_2")}}</span>' +
                  '</li>' +
                  '<li>' +
                    '<img src="/white_label/icons/voice_live.png" alt="">' +
                    '<span class="account_login__remenber-switch contact-us">{{lang.text("verificationArray.ContactUs")}}</span>' +
                    '<span>{{lang.text("verificationArray.ContactUs2")}}</span>' +
                  '</li>' +
                  '<li ng-show="isSlider">' +
                    '<img src="/white_label/icons/voice_skip.png" alt="">' +
                    '<span class="account_login__remenber-switch set-slider-show" ng-click="setSliderShow()">{{lang.text("verificationArray.skipVoice")}}</span>' +
                    '<span>{{lang.text("verificationArray.skipVoice2")}}</span>' +
                  '</li>' +
                '</ul>' +
              '</div>' +
              '<div slider-verification-tab slider-succ-fn="fn()" data-register-set-password="registerSetPassword" data-register-step="registerStep" data-code-list="codeList" data-cold-type="coldType" data-slider-show="codeBtnStatus.step1Phone.isSliderShow" ng-show="codeBtnStatus.step1Phone.isSliderShow"></div>',
            link: function (scope, element, attrs) {
              scope.codeBtnStatus = {            // 获取验证码按钮状态
                  step1Phone: {
                    isSliderShow: false,
                    count_down: false,
                    count: true,       // 点击状态 false 可点击；true 不可点击
                    msg: '',            // 倒计时信息
                    timer: undefined    // 定时器
                  }
              };
              // scope.registerStep1 = 2
              scope.lang = lang;
              scope.setSliderShow =setSliderShow;
              function setSliderShow () {
                // if (scope.accountType) {
                //   $scope.toGtagEvent('click_contact_account_web', { belong: 'tigerwit' })
                // }
                if (scope.coldType === 1 && !scope.accountType) {
                  $scope.toGtagEvent('click_jump_phone_web', { belong: 'tigerwit' })
                }
                // if (scope.coldType === 3 && !scope.accountType) {
                //   $scope.toGtagEvent('click_contact_change_web', { belong: 'tigerwit' })
                // }
                scope.codeBtnStatus.step1Phone.isSliderShow = true;
              }
              // 获取验证码倒计时
              function countDown(codeType) {
                  scope.codeBtnStatus[codeType].count = false;
                  scope.codeBtnStatus[codeType].count_down = true;
                  scope.codeBtnStatus[codeType].msg = 60;
                  $interval.cancel(scope.codeBtnStatus[codeType].timer);
                  scope.codeBtnStatus[codeType].timer = $interval(function () {
                    scope.codeBtnStatus[codeType].msg--;
                    if (scope.codeBtnStatus[codeType].msg <= 0) {
                      scope.codeBtnStatus[codeType].count = true;
                      scope.codeBtnStatus[codeType].count_down = false;
                      $interval.cancel(scope.codeBtnStatus[codeType].timer);
                    }
                  }, 1000);
              }

              // $(".set-slider-show").on('click', function () {
              //   setSliderShow()
              // });
              $(".contact-us").on('click', function () {
                // getPageSignup()
                if (scope.accountType) {
                  $scope.toGtagEvent('click_contact_account_web', { belong: 'tigerwit' })
                }
                if (scope.coldType === 1) {
                  $scope.toGtagEvent('click_contact_phone_web', { belong: 'tigerwit' })
                }
                if (scope.coldType === 2 && !scope.accountType) {
                  $scope.toGtagEvent('click_contact_retrieve_web', { belong: 'tigerwit' })
                }
                if (scope.coldType === 4 && !scope.accountType) {
                  $scope.toGtagEvent('click_contact_login_web', { belong: 'tigerwit' })
                }
                zE.activate()
              });
              $(".cannot-get").on('click', function (e) {
                  if (scope.accountType) {
                    $scope.toGtagEvent('click_get code_failure_account_web', { belong: 'tigerwit' })
                  }
                  if (scope.coldType === 1 && !scope.accountType) {
                    $scope.toGtagEvent('click_get code_failure_phone_web', { belong: 'tigerwit' })
                  }
                  if (scope.coldType === 2 && !scope.accountType) {
                    $scope.toGtagEvent('click_get code_failure_retrieve_web', { belong: 'tigerwit' })
                  }
                  if (scope.coldType === 3 && !scope.accountType) {
                    $scope.toGtagEvent('click_voice code_live_phone_web', { belong: 'tigerwit' })
                  }
                  e.stopPropagation();
                  $(".verification-wrap").slideToggle(200);
              });
              $(".get-send-code").on('click', function () {
                if (scope.accountType) {
                  $scope.toGtagEvent('click_voice code_account_phone_web', { belong: 'tigerwit' })
                }
                if (scope.coldType === 1 && !scope.accountType) {
                  $scope.toGtagEvent('click_voice code_phone_web', { belong: 'tigerwit' })
                }
                if (scope.coldType === 2 && !scope.accountType) {
                  $scope.toGtagEvent('click_voice code_retrieve_web', { belong: 'tigerwit' })
                }
                if (scope.coldType === 3 && !scope.accountType) {
                  // $scope.toGtagEvent('click_voice code_change_web', { belong: 'tigerwit' })
                  $scope.toGtagEvent('click_voice code_live_phone_web', { belong: 'tigerwit' })
                }
                if (scope.coldType === 4 && !scope.accountType) {
                  $scope.toGtagEvent('click_voice code_login_web', { belong: 'tigerwit' })
                }
                if (!scope.codeList.step1Phone && scope.codeList.phonePhone) {
                  scope.codeList.step1Phone = scope.codeList.phonePhone
                }
                if (!scope.codeList.step1Phone && !scope.codeList.phonePhone && scope.codeList.phoneNew) {
                  scope.codeList.step1Phone = scope.codeList.phoneNew
                }
                if (scope.codeList.step1Phone && scope.codeList.phoneNew) {
                  scope.codeList.step1Phone = scope.codeList.phoneNew
                }
                if (!scope.codeList.phoneArea && scope.codeList.phone_code) {
                  scope.codeList.phoneArea = scope.codeList.phone_code
                }
                if (scope.settingInfoPhone) {
                  scope.codeList.step1Phone = scope.settingInfoPhone;
                }
                if (!scope.codeList.step1Phone) {
                    layer.msg(lang.text("actLogin3"));    //请填写手机号
                    return;
                }
                var params = {
                  account: scope.codeList.step1Phone === scope.settingInfoPhone ? '' : scope.codeList.step1Phone,
                  phone_code: scope.codeList.phoneArea.value,
                  account_type: 1,
                  type: scope.coldType,
                  mode: 2
                }
                account.sendCode(params).then(function (data) {
                  if (data.is_succ) {
                    scope.show = false;
                    countDown('step1Phone');
                    var obj = {
                        title: lang.text('tigerWitID.login.verificationCodeSent'),
                        titleClass: 'account_login__layer-title',
                        msg: lang.text('tigerWitID.login.tip6_1_y') + scope.codeList.step1Phone + lang.text('tigerWitID.login.tip6_3_y'),
                        msgClass: 'account_login__layer-msg',
                        btns: {},
                        btnsClass: 'account_login__layer-btns'
                    }
                    obj.btns[lang.text("tigerWitID.confirm2")] = function () { };
                    $layer(obj);
                  } else {
                    layer.msg(data.message);
                  }
                })
              })
            }
        };
    }
})();
