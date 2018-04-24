;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebEvidenceController', WebEvidenceController);

    WebEvidenceController.$inject = ['$scope', '$http'];

    function WebEvidenceController ($scope, $http) {
      
      $scope.evidenceLst = [];

      getEvidenceList();
      function getEvidenceList () {
        $http.get('/napi', {
          params: {
              action: 'get_deposit_evidence'
          }
        }).then(function (data) {
            // console.log(data);
            $scope.evidenceLst = data.data;
        });
      }

      $scope.showEvidence = function (item) {
        item.show = !item.show;
      };
    }
})();