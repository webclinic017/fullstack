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
                name: undefined,
            },
            email: undefined,
            message: undefined
        };
        $scope.error = {
            is_succ: false,
            message: ''
        };
        $scope.loading = false;
        // $scope.countryList = [];

        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        $scope.submitForm = submitForm;

        var degaultAD = lang.isEnglishArea() ? 4 : 3;
        var sources = getQueryString('q') || 1;
        var ad_position = getQueryString('w') || degaultAD;
        console.log(ad_position);
        // account.getWorlds().then(function (data) {
        //     // console.log(data);
        //     $scope.countryList = data.data;
        // });

        // if (!lang.isEnglishArea()) {
        //     $scope.becomeAgent.country.code = 'CN';
        //     $scope.becomeAgent.country.name_cn = '中国';
        // }

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
                    message: $scope.lang.text("tigerWitID.partner.fillNameCoun")
                };
                return;
            }
            if (!$scope.becomeAgent.phone && !$scope.becomeAgent.email) {
                $scope.error = {
                    is_succ: true,
                    message: $scope.lang.text("tigerWitID.partner.fillEmailPhone")
                };
                return;
            }
            if ($scope.becomeAgent.phone && !(validator.regType.phone.reg.test($scope.becomeAgent.phone))) {
                $scope.error = {
                    is_succ: true,
                    message: validator.regType.phone.tip
                };
                return;
            }
            if ($scope.becomeAgent.email && !(validator.regType.email.reg.test($scope.becomeAgent.email))) {
                $scope.error = {
                    is_succ: true,
                    message: validator.regType.email.tip
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
                        message: $scope.lang.text("tigerWitID.partner.submittedSucc")
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