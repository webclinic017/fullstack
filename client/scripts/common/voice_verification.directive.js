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
                codeList: '=',
                coldType: '=',
                isSendVoice: '=',
                fn: '&'
            },
            template:
              `<p class="account_login__remenber-switch text-center cannot-get">无法获取验证码</p>
              <div class="verification-wrap">
                <ul>
                  <li>
                    <img src="/white_label/icons/voice_phone.png" alt="">
                    <span class="account_login__remenber-switch get-send-code" ng-show="codeBtnStatus.step1Phone.count">
                      接受语音验证码
                    </span>
                    <span class="ash-disposal" ng-show="!codeBtnStatus.step1Phone.count">
                      接受语音验证码
                    </span>
                    <span>
                      未接收到短信？试试接听来电获取验证码
                    </span>
                    <span class="notAllowed" ng-show="codeBtnStatus.step1Phone.count_down">
                        {{lang.text('tigerWitID.myAccount.tip39_1')}}{{ codeBtnStatus.step1Phone.msg }}{{lang.text('tigerWitID.myAccount.tip39_2')}}
                    </span>
                  </li>
                  <li>
                    <img src="/white_label/icons/voice_live.png" alt="">
                    <span class="account_login__remenber-switch contact-us">
                      联系我们
                    </span>
                    <span>
                      需要帮助？联系我们
                    </span>
                  </li>
                  <li>
                    <img src="/white_label/icons/voice_skip.png" alt="">
                    <span class="account_login__remenber-switch set-slider-show" ng-click="setSliderShow()">
                      跳过验证
                    </span>
                    <span>
                      此操作会让您的账户存在安全隐患哦！
                    </span>
                  </li>
                </ul>
              </div>
              <div slider-verification-tab slider-succ-fn="fn()" data-slider-show="codeBtnStatus.step1Phone.isSliderShow" ng-show="codeBtnStatus.step1Phone.isSliderShow"></div>
              `,
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
              scope.lang = lang;
              // ng-show="codeBtnStatus.step1Phone.count"
              // function show() {
              //   zE.activate()
              // }
              // acope.fn()
              // scope.fun = fun;
              scope.setSliderShow =setSliderShow;
              function setSliderShow () {
                // scope.isSliderShow = true;

                // scope.codeBtnStatus['step1Phone'].isSliderShow = true;
                scope.codeBtnStatus.step1Phone.isSliderShow = true;
                console.log(9)
                console.log(121, scope.codeBtnStatus.step1Phone.isSliderShow)
              }
              // 线索客户接口判断是否展示跳过验证
              function getPageSignup () {
                console.log(123)
                var para = {
                    type: scope.coldType,
                    phone: scope.codeList.step1Phone,
                    phone_code: scope.codeList.phoneArea.value,
                    // world_code: $scope.account.country.value,
                    // appsflyer_id: $cookies['APPSFLYER_ID'] || null,
                    lp: getLp($state.params.lp)
                    // TODO 暂时
                    // referrer: document.referrer,
                    // href: location.href,
                    // cookie: document.cookie
                };
                var all_sources = $cookies['all_sources'];
                if (all_sources) {
                    para = angular.extend(para, JSON.parse(all_sources))
                }
                console.log(para)
                $.post('/api/v3/auth/page_signup', para).then(function (data) {
                  console.log(23, data);
                  layer.closeAll();
                  if (data.is_succ) {
                    layer.msg(data.data);
                  } else {
                    layer.msg(data.message);
                  }
                });

                // account.pageSignup().then(function(data) {
                //   console.log(data)
                // })
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
                zE.activate()
              });
              $(".cannot-get").on('click', function (e) {
                  e.stopPropagation();
                  $(".verification-wrap").slideToggle(200);
              });
              $(".get-send-code").on('click', function () {
                if (!scope.codeList.step1Phone) {
                    layer.msg(lang.text("actLogin3"));    //请填写手机号
                    return;
                }
                console.log(scope.codeList)
                var params = {
                  account: scope.codeList.step1Phone,
                  phone_code: scope.codeList.phoneArea.value,
                  account_type: 1,
                  type: scope.coldType,
                  mode: 2
                }
                console.log(params)
                account.sendCode(params).then(function (data) {
                  if (data.is_succ) {
                    scope.show = false;
                    countDown('step1Phone');
                    var obj = {
                        title: lang.text('tigerWitID.login.verificationCodeSent'),
                        titleClass: 'account_login__layer-title',
                        msg: lang.text('tigerWitID.login.tip6_1') + lang.text('tigerWitID.login.tip6_21') + scope.codeList.step1Phone + lang.text('tigerWitID.login.tip6_3'),
                        msgClass: 'account_login__layer-msg',
                        btns: {},
                        btnsClass: 'account_login__layer-btns'
                    }
                    obj.btns[lang.text("tigerWitID.confirm2")] = function () { };
                    $layer(obj);
                    console.log(1212, data)
                  } else {
                    layer.msg(data.message);
                  }
                })
              })
                // var params = {
                //     account: account_num,
                //     code_token: token,
                //     type: type,
                //     phone_code: phone_code,
                //     account_type: account_type,
                //     world_code: $scope.account.country.value || undefined,
                //     referer: location.href
                // }
                // var all_sources = $cookies['all_sources'];
                // if (all_sources) {
                //     params = angular.extend(params, JSON.parse(all_sources))
                // }
                // account.sendCode(params).then(function (data) {
                //     // console.log(data);
                //     if (data.is_succ) {
                //         countDown(name);
                //         var obj = {
                //             title: lang.text('tigerWitID.login.verificationCodeSent'),
                //             titleClass: 'account_login__layer-title',
                //             msg: lang.text('tigerWitID.login.tip6_1') + msg + account_num + lang.text('tigerWitID.login.tip6_3'),
                //             msgClass: 'account_login__layer-msg',
                //             btns: {},
                //             btnsClass: 'account_login__layer-btns'
                //         }
                //         obj.btns[lang.text("tigerWitID.confirm2")] = function () { };
                //         $layer(obj);
                //     } else {
                //         layer.msg(data.message);
                //     }
                // });

            }
        };
    }
})();
