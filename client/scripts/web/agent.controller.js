;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebAgentController', WebAgentController);

    WebAgentController.$inject = ['$scope', 'validator', '$modal', 'market', 'account', 'lang'];

    function WebAgentController ($scope, validator, $modal, market, account, lang) {

        $scope.becomeAgent = {
            phone: undefined,
            name: undefined,
            country: {
                code: undefined,
                name_en: undefined,
                name_cn: undefined
            },
            email: undefined,
            message: undefined
        };
        $scope.error = {
            is_succ: false,
            message: ''
        };
        $scope.loading = false;
        $scope.countryList = [];

        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        $scope.submitForm = submitForm;

        var degaultAD = lang.isEnglish() ? 4 : 3;
        var sources = getQueryString('q') || 1;
        var ad_position = getQueryString('w') || degaultAD;
        console.log(ad_position);
        account.getWorlds().then(function (data) {
            // console.log(data);
            $scope.countryList = data.data;
        });

        if (!lang.isEnglish()) {
            $scope.becomeAgent.country.code = 'CN';
            $scope.becomeAgent.country.name_cn = '中国';
        }

        function submitForm () {
            $scope.error = {
                is_succ: false,
                message: ''
            };
            // showErr('phone');
            // console.log(sources, ad_position);
            if ($scope.agentForm.$invalid) {
                $scope.error = {
                    is_succ: true,
                    message:  $scope.lang.isEnglish() ? 'Please Fill in Name and Country' : '请填写姓名和国家'
                };
                return;
            }
            if (!$scope.becomeAgent.phone && !$scope.becomeAgent.email) {
                $scope.error = {
                    is_succ: true,
                    message:  $scope.lang.isEnglish() ? 'You should fill in one of email address or phone number' : '邮箱和手机号必选一项填写'
                };
                return;
            }
            $scope.loading = true;
            market.checkPhone({
                phone: $scope.becomeAgent.phone,
                agent_name: $scope.becomeAgent.name,
                world_code: $scope.becomeAgent.country.code,
                email: $scope.becomeAgent.email,
                comment: $scope.becomeAgent.message,
                sources: sources,
                ad_position: ad_position
            }).then(function (data) {
                // console.info(data);
                $scope.loading = false;
                if (!data) return;
                if (data.is_succ) {
                    $scope.error = {
                        is_succ: true,
                        success: true,
                        message: $scope.lang.isEnglish() ? 'Submit successfully!' : '信息提交成功!'
                    };
                } else {
                    $scope.error = {
                        is_succ: true,
                        message: data.message
                    };
                }
            });

        }

        function openSystemMdl(type, message) {
            $modal.open({
                templateUrl: '/views/web/agent/modal.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    $scope.modal = {
                        type: type,
                        message: message || ''
                    };
                    $scope.closeModal = closeModal;

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }

        function getQueryString(name){
             var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
             var r = window.location.search.substr(1).match(reg);
             if(r!=null)return  unescape(r[2]); return null;
        }

        function hideErr(name) {
            if ($scope.error[name]) {
                $scope.error[name].show = false;
            }
        }

        function showErr(name) {
            if ($scope.error[name]) {
                $scope.error[name].show = true;
            }
        }
    }
})();