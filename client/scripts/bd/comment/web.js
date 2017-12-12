;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('ProductCommentDetailsController', ProductCommentDetailsController);

    ProductCommentDetailsController.$inject = ['$scope', 'product'];

    function ProductCommentDetailsController($scope, product) {
        var searchArr = location.search.substring(1).split('&');
        var searchInfo = {};
        angular.forEach(searchArr, function (value, index) {
            var val = value.split('=');
            searchInfo[val[0]] = val[1];
        });
        $scope.commentDetails = {};
        // console.log(searchInfo);
        getCommentDetails();
        function getCommentDetails() {
            product.getCommentDetails(searchInfo["type"]).then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    $scope.commentDetails = data.data;
                    
                    angular.forEach($scope.commentDetails.comment_field, function (value, index) {
                        value.image && (value.image = JSON.parse(value.image));
                    });
                }
            });
        }
    }
})();
