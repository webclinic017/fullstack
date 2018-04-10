;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('ThirdEvidenceListController', ThirdEvidenceListController);

    ThirdEvidenceListController.$inject = ['$scope', '$http'];

    function ThirdEvidenceListController($scope, $http) {
      $scope.evidenceLst = [];

      getEvidenceList();
      function getEvidenceList () {
        console.log(12);
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