// ;
// (function () {
//     'use strict';

//     angular
//         .module('fullstackApp')
//         .controller('AccountInvestInfoController', AccountInvestInfoController);

//     AccountInvestInfoController.$inject = ['$scope', '$state', '$timeout', 'account'];

//     function AccountInvestInfoController($scope, $state, $timeout, account) {
//         $scope.questions = [];
//         $scope.isSetKyc = false;

//         $scope.tip = {
//             questions: {
//                 show: false,
//                 msg: undefined,
//             },
//             system: {
//                 show: false,
//                 status: 0
//             }
//         };
//         $scope.clickable = true;
//         $scope.selectOption = selectOption;
//         $scope.submitForm = submitForm;
//         // $scope.goNextStep = goNextStep;
//         var kycInfo = {};

//         if ($state.current.name === 'space.setting.subpage') {
//             $scope.type = 'setting';
//         }

//         // setUserLastKyc();

//         function selectOption(question, option) {
//             // console.log('question', question);
//             // console.log('option', option);
//             $scope.tip.questions.show = false;
//             $scope.tip.questions.msg = undefined;

//             // 多选
//             if (question.data.type == 3) {
//                 option.checked = option.checked ? false : true;
//                 kycInfo[question.id] = kycInfo[question.id] += ',' + option.key
//             }
//             // 单选
//             else {
//                 kycInfo[question.id] = option.key;
//             }

//             // console.log(kycInfo);
//         }

//         function submitForm() {
//             var isBreak = false;
//             var hasFinishAll = false;
//             // console.log(isBreak);
//             // console.log(kycInfo);
//             angular.forEach($scope.questions, function (item, index) {
//                 if (isBreak) {
//                     return;
//                 }
//                 // console.log(item.id);
//                 if (!kycInfo[item.id]) {
//                     $scope.tip.questions.show = true;
//                     $scope.tip.questions.msg = '请完成题目：' + item.title
//                     isBreak = true;
//                 } else {
//                     $scope.tip.questions.show = false;
//                     $scope.tip.questions.msg = undefined;
//                 }
//             });

//             if ($scope.tip.questions.msg) {
//                 return;
//             }

//             $scope.clickable = false;
//             // console.info(kycInfo);

//             account.setKyc(kycInfo).then(function (data) {
//                 console.info(data);
//                 $scope.clickable = true;
//                 if (data.is_succ) {
//                     // 神策数据统计
//                     sa.setProfile({
//                         key_experience: kycInfo.interests_exp,
//                         key_market: kycInfo.trading_market,
//                         key_risk: kycInfo.risk_tendency
//                     });
//                     // 神策数据统计
//                     sa.track('btn_kyc');
//                     $scope.tip.system.show = true;
//                     $scope.tip.system.msg = 'KYC 认证信息提交成功';

//                     // 向authenController发送信息，切换到complete页面
//                     $timeout(function () {
//                         $scope.$emit('goState','complete');
//                     }, 1500);
//                 } else {
//                     $scope.tip.system.show = true;
//                     $scope.tip.system.msg = data.message;
//                     $timeout(function () {
//                         $scope.tip.system.show = false;
//                     }, 1500);
//                 }
//             });
//         }

//         getKyc();
//         function getKyc() {
//             account.getKyc().then(function (data) {
//                 $scope.$broadcast("hideLoadingImg");
//                 // console.info('data',data);
//                 angular.forEach(data.data, function (data, index, array) {
//                     var json = {};
//                     json["id"] = index;
//                     json["data"] = data;
//                     json["answer"] = undefined;
//                     json["title"] = data["title"];
//                     $scope.questions.push(json);
//                 });
//                 console.log('questions', $scope.questions)
//                 $scope.industry = $scope.questions[0].data.list[0].value

//                 angular.forEach($scope.questions, function (question) {
//                     kycInfo[question.id] = '';
//                 });
//             });
//         }
//     }
// })();