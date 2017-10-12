;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebReportController', WebReportController);

    WebReportController.$inject = ['$scope', '$http'];

    function WebReportController ($scope, $http) {
        $scope.reports = [];
        $scope.pagebar = {
            config: {
                // total: , // 总页数
                page: 1    
            },
            pages: [],
            pagesBtn: [],
            // selectPage: , bind to pagination.selectPage
            getList: getReportList           
        };

        getReportList();

        function getReportList (page) {
            page = page ? page : 1;
            var offset = (page - 1) * 10
            var limit = 10;
            $http.get('/napi', {
                params: {
                    action: 'get_report_site',
                    offset: offset,
                    limit: limit
                }
            }).then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    $scope.reports = data.data.records;

                    angular.extend($scope.pagebar.config, {
                        total: data.data.page_count,
                        page: page
                    }); 
                }
            });
        }
    }

})();