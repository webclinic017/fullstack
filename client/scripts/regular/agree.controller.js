;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AgreeController', AgreeController);

    AgreeController.$inject = ['$scope', '$location', 'ranklist','$http'];

    function AgreeController($scope, $location, ranklist, $http) {
        $scope.name = getQueryString('name') || '';
    }
    function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) return decodeURIComponent(r[2]); return null; 
	} 
})();
