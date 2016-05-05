;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('BdT29Controller', BdT29Controller);

    BdT29Controller.$inject = ['$scope', '$modal','$http'];

    function BdT29Controller($scope, $modal,$http) {
      var sending = false;
      function enroll(game){
        console.info('aaa');
        if(sending){
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
              $scope.game_name = game == 1?"模拟盘":"实盘";
              $scope.closeModal = closeModal;

              function closeModal() {
                  $modalInstance.dismiss();
              }
          }
        });
      }
      $scope.enroll = enroll;
    }
})();



















 $(function() {
     $(".hy-tabs-ul li").each(function(index){
         var liCurrent = $(this);
         var liIndex = index;
         liCurrent.click(function(){
             // console.info(index);
             liCurrent.addClass("hy-tabs-ul-active").siblings().removeClass("hy-tabs-ul-active");
             $(".hy-tabs-con .hy-tabs-con1:eq(" + liIndex +")").addClass("div-block").siblings().removeClass("div-block");

         });
     });
 });


 $(function(){

   //方法获取cookie
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
   function isLogin(){
     var user_code = getCookie('user_code');
     if(user_code){
       return true;
     }else{
       return false;
     }
   }
   var dEnroll = $(".enroll");
   dEnroll.click(function(){
     if(!isLogin()){
        toLogin();
        return;
     }else{
       layer.msg('正在报名...', {icon: 16,time:0});
       var game = $(this).attr('_type');
       var varName = 'var' + new Date().getTime();
       $.getScript('https://www.tigerwit.com/action/public/v3/apply_to_game?'+$.param({
         game : game,
         'var' : varName 
       }),function(){
         var rs = window[varName];
         var msg = "失败";
         if(rs && rs.is_succ){
           msg = "报名成功";
         }else{
           msg = (rs && rs.error_msg) || "失败:"+(rs &&rs.error_code);
         }
         layer.closeAll();
         layer.alert(msg, {
             skin: 'layui-layer-molv' //样式类名
             ,closeBtn: 0
         }, function(){
           layer.closeAll();
         });
       });
     }
     var _type = $(this).attr('_type');
   });
   function toLogin(){
     layer.confirm('需要登录后才可以报名', {
         btn: ['登录','注册','暂不'] //按钮
     }, function(){
       location.href="https://www.tigerwit.com/space/#/account/login?back="+location.href;
     }, function(){
       location.href="https://www.tigerwit.com/space/#/account/register";
     },function(){
     });
     $(".layui-layer-close1").remove();
   }
 });
