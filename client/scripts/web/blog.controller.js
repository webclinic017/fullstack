;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('BlogController', BlogController)
        .controller('BlogDetailsController', BlogDetailsController);

        BlogController.$inject = ['$scope', 'lang', 'product'];
        BlogDetailsController.$inject = ['$scope', '$stateParams', 'product'];

    function BlogController ($scope, lang, product) {
      var la = lang.currentLanguage() === 'zh' ? 'cn' : lang.currentLanguage();
      $scope.blogList = [];

      getBlogList();

      $scope.goDetails = function (key) {
        window.open('/blog/'+key);
      }

      function getBlogList () {
        product.getBlogList(la).then(function (rs) {
          // console.log(rs);
          if (rs.is_succ) {
            $scope.blogList = rs.data.records;
          }
        })
      }
    }
    function BlogDetailsController ($scope, $stateParams, product) {

      var name = window.location.pathname;
      var key = name.slice(name.lastIndexOf('/'));
      $scope.details = {};
      $scope.praise = false;

      getBlogDetails();

      $scope.praiseBlog = function () {
        if ($scope.praise) return;
        product.opBlogNums({
          id: $scope.details.id,
          type: 1
        }).then(function (rs) {
          if (rs.is_succ) {
            $scope.praise = true;
            $scope.details.praise++;
          }
        })
      }

      function getBlogDetails () {
        product.getBlogDetails(key).then(function (rs) {
          // console.log(rs);
          if (rs.is_succ) {
            $scope.details = rs.data;
            document.title = rs.data.title + ' | TigerWit Global'
            product.opBlogNums({
              id: $scope.details.id,
              type: 0
            });
          }
        })
      }
    }
})();