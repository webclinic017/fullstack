;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twCaptchaTimer', twCaptchaTimer);

    twCaptchaTimer.$inject = ['$timeout', 'lang'];

    // 获取手机验证码的计时器
    function twCaptchaTimer($timeout, lang) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                startTimer: '=',
                captchaBtnClickable: '=',
                voiceCaptcha: '='
            },
            template: 
                '<div>' + 
                    '<span ng-show="timer.start">' + lang.text("register6") + '</span>' +
                    '<span ng-show="timer.running">' + '{{timer.seconds}}' + lang.text("tigerWitID.second") +'</span>' +
                    '<span ng-show="timer.restart && voiceCaptcha">' + 
                        '{{timer.voiceCaptchaTimes === 1 ? lang.text("tigerWitID.getCodeAgain") : lang.text("tigerWitID.getVoiceCodeAgain") }}' + 
                    '</span>' +
                '</div>',
            link: function (scope, element, attrs) {
                var totalSeconds = 61;

                scope.lang = lang;
                
                scope.timer = {
                    seconds: totalSeconds,
                    start: true,
                    running: false,
                    restart: false,
                    voiceCaptchaTimes: 0  // 第几次获取语音验证码
                };

                scope.startTimer = startTimer;

                // 启动计时器
                function startTimer() {
                    if (scope.timer.start || scope.timer.restart) {
                        scope.timer.start = false;
                        scope.timer.running = true;
                        scope.timer.restart = false;
                        updateTime(); 
                    }
                }

                function updateTime() {
                    if (scope.timer.seconds <= 0) {
                        scope.timer.start = false;
                        scope.timer.running = false;
                        scope.timer.restart = true;
                        scope.timer.seconds = totalSeconds;
                        scope.timer.voiceCaptchaTimes++;
                        scope.captchaBtnClickable = true;
                        scope.voiceCaptcha = true;
                        return;
                    }
                    scope.timer.seconds --;

                    $timeout(function () {
                       updateTime();
                    }, 1000);
                }
            }
        };
    }
})();