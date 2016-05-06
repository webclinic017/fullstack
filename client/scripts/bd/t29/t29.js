;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('BdT29Controller', BdT29Controller);

    BdT29Controller.$inject = ['$scope', '$modal','$http','account'];

    function BdT29Controller($scope, $modal,$http,account) {
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
 

         // layer.confirm('需要登录后才可以报名', {
         //     btn: ['登录','注册','暂不'] //按钮
         // }, function(){
         //   location.href="https://www.tigerwit.com/space/#/account/login?back="+location.href;
         // }, function(){
         //   location.href="https://www.tigerwit.com/space/#/account/register";
         // },function(){
         // });
         // $(".layui-layer-close1").remove();
      }
})();

