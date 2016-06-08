;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('BdT29Controller', BdT29Controller);

    BdT29Controller.$inject = ['$scope', '$modal','$http','account','trader','$location'];

    function BdT29Controller($scope, $modal,$http,account,trader,$location) {
      var sending = false;
      var _logined = false;
      var _isChecked = false;

      //检查是否登录
      if(isLoginFromCookie()){
        account.checkLogined().then(function(logined){
          _isChecked = true;
          _logined = logined;
        });
      }else{
        _isChecked = true;
        _logined =false;
      }

      getTop15('firm');
      getTop15('demo');

      //获取实盘和虚拟盘TOp15
      function getTop15(type){
        $http.get('/action/public/v4/competition',{
          params : {
            type : type
          }
        }).then(function(rs){
          if(type == "demo"){
            $scope.list_top15_demo = rs.data;
          }
          if(type == "firm"){
            $scope.list_top15_firm = rs.data;
          }
        });
      }
      function enroll(game){
        if(sending){
          return;
        }
        if(!_isChecked){
          setTimeout(function(){
            enroll(game);
          },100);
          return;
        }
        if(!_logined){
          toLogin();
          return;
        }

        sending = true;
        $http.get('/action/public/v3/apply_to_game',{
          params : {
            game : game
          }
        }).then(function(rs){
          sending = false;
          console.info('result', rs);
          if(rs && rs.is_succ){
            modalResult(game);
          }else{
            alert('报名失败,'+((rs && rs.error_msg) || "请联系客服"));
          }
      });
      }
      function modalResult(game){
        $modal.open({
          templateUrl: '/views/bd/t29/t29_modal.html',
          size: 'lg',
          backdrop: true,
          controller: function ($scope, $modalInstance) {
              $scope.username = $(".navbar_info__username").text();
              $scope.game = game;
              $scope.game_name = game == 1?"模拟盘":"实盘";
              $scope.closeModal = closeModal;
              $scope.date = getDate();

              function closeModal() {
                  $modalInstance.dismiss();
              }
          }
        });
      }
      function getDate(){
        var dDate = new Date();
        var year = dDate.getFullYear();
        var month = dDate.getMonth()+1;
        var date = dDate.getDate();
        var s = year + '年' + month + '月' + date + '日';
        return s;
      }
      $scope.enroll = enroll;
   //   //方法获取cookie
       function getCookie(name)
       {
         var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
         if(arr=document.cookie.match(reg)){
           return unescape(arr[2]);
         }
         else{
           return null;
         }
       }
       function isLoginFromCookie(){
         var user_code = getCookie('user_code');
         if(user_code){
           return true;
         }else{
           return false;
         }
       }
      function toLogin(){
        $modal.open({
          templateUrl: '/views/bd/t29/t29_login_modal.html',
          size: 'sm',
          backdrop: true,
          controller: function ($scope, $modalInstance) {
              function closeModal() {
                  $modalInstance.dismiss();
              }
              function toLogin(){
                location.href="/space/#/account/login?back="+location.href;
              }
              function toRegister(){
                 location.href="/space/#/account/register?back="+location.href;;
              }
              $scope.toLogin = toLogin;
              $scope.closeModal = closeModal;
              $scope.toRegister = toRegister;
          }
        });
      }
      function lookTradeCurrent(usercode, type){
        $modal.open({
            templateUrl: '/views/bd/t29/t29_current_modal.html',
            size: 'lg',
            backdrop: true,
            controller: function ($scope, $modalInstance) {
                $scope.closeModal = closeModal;
                
                trader.getMasterCurrent(usercode,undefined,undefined,type).then(function (data) {
                    // console.info(data);
                    $scope.$broadcast('hideLoadingImg');
                    $scope.orders = data.data;
                });
                
                function closeModal() {
                    $modalInstance.dismiss();
                }
            }
        });
      }
      function lookTradeHistory(usercode, type){
        $modal.open({
            templateUrl: '/views/bd/t29/t29_history_modal.html',
            size: 'lg',
            backdrop: true,
            controller: function ($scope, $modalInstance) {
                var pagesize = 8;
                $scope.orders = [];
                $scope.pagebar = {
                    config: {
                        // total: , // 总页数
                        page: 1    
                    },
                    pages: [],
                    pagesBtn: [],
                    // selectPage: , bind to pagination.selectPage
                    getList: getList           
                };
                $scope.closeModal = closeModal;
                getList(1);
                function closeModal() {
                    $modalInstance.dismiss();
                }
                function getList (page) {
                  trader.getMasterHistory(usercode, page, pagesize).then(function (data) {
                      // console.info(data);
                      $scope.orders = data.data;

                      $scope.$broadcast('hideLoadingImg');

                      if ($scope.orders.length <= 0) return;

                      angular.forEach($scope.orders, function(order, index){
                          order.close_type_name = formatCloseTypeName(order.close_type);
                      });
                      angular.extend($scope.pagebar.config, {
                          total: getTotal(data.sum, pagesize),
                          page: page
                      }); 
                  });
                }
            }
        });

        function formatCloseTypeName(type){
            var type_name = "手动平仓";
            if(type == "sl"){
                type_name = "止损平仓";
            }
            if(type == "tp"){
                type_name = "止盈平仓";
            }
            if(type == "so"){
                type_name = "强制平仓";
            }
            return type_name;
        }
        function getTotal(sum, pagesize) {
            var total;
            sum = parseInt(sum, 10); // list item 总个数
            pagesize = parseInt(pagesize, 10); // 单页显示数

            if (sum % pagesize > 0) {
                total = parseInt(sum / pagesize) + 1;
            } else {
                total = parseInt(sum / pagesize);
            }
            return total;
        }
      }
      $scope.lookTradeCurrent = lookTradeCurrent;
      $scope.lookTradeHistory = lookTradeHistory;

    }
})();

