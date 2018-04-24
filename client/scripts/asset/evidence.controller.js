;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetEvidenceController', AssetEvidenceController);

    AssetEvidenceController.$inject = ['$scope', '$window', '$cookies', '$modal', '$state', 'asset', 'validator', 'account', '$layer', 'previewImage'];

    function AssetEvidenceController($scope, $window, $cookies, $modal, $state, asset, validator, account, $layer, previewImage) {

        $scope.srcHead = 'data:image/jpeg;base64,';
        $scope.status = 1;  //状态0不需要上传,1需要上传(默认)，2待审核
        $scope.evidenceList = [];
        
        $scope.changeEvidenceStatus = changeEvidenceStatus; //切换审核状态
        $scope.uploadEvidence = uploadEvidence; //提交审核
        $scope.cancelEvidence = cancelEvidence; //取消提交
        $scope.checkImage = checkImage;

        getPaymentEvidence();

        function getPaymentEvidence () {
          asset.getPaymentEvidence($scope.status).then(function (data) {
            // console.log(data);
            $scope.evidenceList = data.data.records;
            angular.forEach($scope.evidenceList, function (value, index) {
              value.files = [];
              value.pic_thumb = [];
              angular.forEach(value.pic, function (value2, index2) {
                var t = value2.replace('pay', 'pay_thumb');
                var s = t.substring(t.lastIndexOf('.'));
                t = t.replace(s, '_80_60'+s);
                value.pic_thumb.push(t);
              });
            });
          });
        }

        function changeEvidenceStatus (status) {
          if ($scope.status === status) return;
          $scope.status = status;
          getPaymentEvidence();
        }

        function uploadEvidence (evidence, ind) {
          asset.uploadPaymentEvidence(evidence.files, evidence.id).then(function (data) {
            if (data.is_succ) {
              $scope.evidenceList.splice(ind, 1);
              $layer({
                title: '提示',
                msg: '入金凭证已提交，正在审核中。审核时间：大约1个工作日',
                msgClass: '',
                btns: {
                  "确定": function(){}
                }
              });
            } else {
              $layer({
                title: '提示',
                msg: data.message,
                msgClass: 'font-danger',
                btns: {
                  "好的": function(){}
                }
              });
            }
          });
        }
        function cancelEvidence (evidence, ind) {
          asset.cancelPaymentEvidence(evidence.id).then(function (data) {
            if (data.is_succ) {
              $scope.evidenceList.splice(ind, 1);
            } else {
              $layer({
                title: '提示',
                msg: data.message,
                msgClass: 'font-danger',
                btns: {
                  "好的": function(){}
                }
              });
            }
          });
        }

        function checkImage (e, targetUrl) {
          // console.log(targetUrl);
          previewImage.toLargeImage(e, targetUrl);
        }
    }
})();
