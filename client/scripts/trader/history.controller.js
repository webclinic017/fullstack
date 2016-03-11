;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderHistoryController', TraderHistoryController);

    TraderHistoryController.$inject = ['$scope'];

    function TraderHistoryController($scope) {
        $scope.pagebar = {
            config: {
                total: 2, // 总页数
                page: 1    
            },
            pages: [],
            pagesBtn: [],
            // selectPage: , bind to pagination.selectPage
            getList: getList           
        };

        var pagesize = 5;
        // var usercode = $state.params.usercode;

        // getList(1);

        function getList (page) {
            // master.getMasterHistory(usercode, page, pagesize).then(function (data) {
            //     // console.info(data);
            //     $scope.orders = data.data;

            //     $scope.$broadcast('hideLoadingImg');
                
            //     angular.extend($scope.pagebar.config, {
            //         total: utils.getTotal(data.sum, pagesize),
            //         page: page
            //     }); 
            // });
        }
    }
})();