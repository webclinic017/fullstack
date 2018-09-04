;
(function() {
  'use strict';

  angular.module('fullstackApp').factory('product', product);

  product.$inject = ['$http', 'api'];

  function product($http, api) {
    var o = api.product;
    var service = {
      getCommentList: getCommentList,
      getCommentDetails: getCommentDetails,
      getProductInfo: getProductInfo,
      getTradeFeeInfo: getTradeFeeInfo,
      getSymbolList: getSymbolList
    };
    return service;


    /**
     * Product Service 每日汇评列表
     *
     * @method getCommentList
     */
    function getCommentList(oParams) {

      return $http.get(o.getCommentListApi, {
        params: oParams
      });

    }

    /**
     * Product Service 每日汇评详情
     *
     * @method getCommentDetails
     */
    function getCommentDetails(id) {

      return $http.get(o.getCommentDetailsApi, {
        params: {
            comment_id: id
        }
      });

    }

    function getProductInfo(oParams) {
      return $http.get(o.getWebProductInfoApi, {
        params: oParams
      });
    }

    function getTradeFeeInfo(oParams) {
      return $http.get(o.getWebTradeFeeInfoApi, {
        params: oParams
      });
    }

    function getSymbolList() {
      return $http.get(o.getSymbolListApi, {
        params: {
          detail: 1
        }
      });
    }
  }
})();
