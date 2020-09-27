;
(function () {
    'use strict';
    angular.module('fullstackApp').directive('sliderVerificationTab', sliderVerificationTab);
    sliderVerificationTab.$inject = ['$timeout', 'lang', 'account', '$layer', '$interval', '$state', '$cookies'];

    // 条件与条款 导航
    function sliderVerificationTab($timeout, lang, account, $layer, $interval, $state, $cookies) {
        return {
            restrict: 'A',
            // require:'?^voiceVerificationTab',
            // replace: true,
            scope: {
                codeList: '=',
                coldType: '=',
                isSendVoice: '=',
                sliderShow: '=',
                sliderSuccFn: '&'
            },
            template:
              `
              <div class="drag-box">
              <div class="drag-box__wrap" ng-show="title">
              <button class="close" ng-click="closeModal()">&times;</button>
              <p class="title">滑动校验</p>
              <div class="drag-box__drag">
                  <div class="drag-box__drag-bg"></div>
                  <div class="drag-box__drag-text slidetounlock" onselectstart="return false;">请拖动滑块解锁</div>
                  <div class="drag-box__drag-btn">&gt;&gt;</div>
                </div>
                <p ng-click="closeModal()">关闭<span ng-show="count">({{ msg }}S)</span></p>
              </div>
              <div class="drag-box__wrap" ng-show="!title">
              <p class="title">确定跳过验证吗？</p>
              <p class="content">We provide you with multiple ways to obtain verification codes to ensure the security of your account. Skipping verification may cause security risks to your account. Are you sure you want to skip verification?</p>
              <div>
              <button class="tw-btn-md mg-rg-15 mg-lf-15" ng-click="setSliderShow()">确认</button>
              <button class="tw-btn-md tw-btn-capsule-gradient mg-rg-15 mg-lf-15" ng-click="closeModal()">取消</button>
              </div>

              </div>
              `,
            link: function (scope, element, attrs) {
              scope.lang = lang;
              scope.msg = 3;
              scope.timer = undefined;
              scope.count = false;
              scope.title = false;
              scope.closeModal = closeModal;
              scope.setSliderShow = setSliderShow;
              function countDown() {
                // scope.codeBtnStatus[codeType].count = false;
                // scope.codeBtnStatus[codeType].count_down = true;
                scope.msg = 3;
                scope.count = true;
                // $interval.cancel(scope.codeBtnStatus[codeType].timer);
                scope.timer = $interval(function () {
                  scope.msg--;
                  if (scope.msg <= 0) {
                    // scope.codeBtnStatus[codeType].count = true;
                    // scope.codeBtnStatus[codeType].count_down = false;
                    scope.count = false;
                    $interval.cancel(scope.timer);
                  }
                }, 1000);
              }
              //一、定义一个获取DOM元素的方法
              var $ = function(selector){
                return  document.querySelector(selector);
              },
              box = $(".drag-box__drag"),//容器
              bg = $(".drag-box__drag-bg"),//背景
              text = $(".drag-box__drag-text"),//文字
              btn = $(".drag-box__drag-btn"),//滑块
              success = false,//是否通过验证的标志
              distance = box.offsetWidth - btn.offsetWidth;//滑动成功的宽度（距离）

              //二、给滑块注册鼠标按下事件
              btn.onmousedown = function(e){
                //1.鼠标按下之前必须清除掉后面设置的过渡属性
                btn.style.transition = "";
                bg.style.transition ="";
                //说明：clientX 事件属性会返回当事件被触发时，鼠标指针向对于浏览器页面(或客户区)的水平坐标。
                //2.当滑块位于初始位置时，得到鼠标按下时的水平位置
                var e = e || window.event;
                var downX = e.clientX;
                //三、给文档注册鼠标移动事件
                document.onmousemove = function(e){
                  var e = e || window.event;
                  //1.获取鼠标移动后的水平位置
                  var moveX = e.clientX;
                  //2.得到鼠标水平位置的偏移量（鼠标移动时的位置 - 鼠标按下时的位置）
                  if (scope.lang.isAr()) {
                    var offsetX = -moveX + downX;
                  } else {
                    var offsetX = moveX - downX;
                  }

                  //3.在这里判断一下：鼠标水平移动的距离 与 滑动成功的距离 之间的关系
                  if( offsetX > distance){
                      offsetX = distance;//如果滑过了终点，就将它停留在终点位置
                  }else if( offsetX < 2){
                      offsetX = 2;//如果滑到了起点的左侧，就将它重置为起点位置
                  }
                  console.log(offsetX, distance)
                  //4.根据鼠标移动的距离来动态设置滑块的偏移量和背景颜色的宽度
                  if (scope.lang.isAr()) {
                    btn.style.right = offsetX + "px";
                  } else {
                    btn.style.left = offsetX + "px";
                  }
                  bg.style.width = offsetX + 40 + "px";
                  //如果鼠标的水平移动距离 = 滑动成功的宽度
                  if( offsetX == distance){
                    //1.设置滑动成功后的样式
                    text.innerHTML = "验证通过";
                    text.style.color = "#fff";
                    btn.innerHTML = "<div class='check-style-unequal-width'></div>";
                    btn.style.color = "#11C971";
                    bg.style.backgroundColor = "#11C971";

                    //2.设置滑动成功后的状态
                    success = true;
                    //成功后，清除掉鼠标按下事件和移动事件（因为移动时并不会涉及到鼠标松开事件）
                    btn.onmousedown = null;
                    document.onmousemove = null;

                    //3.成功解锁后的回调函数
                    setTimeout(function(){
                        // alert('解锁成功！');
                        countDown();
                        // scope.sliderSuccFn();
                        scope.$apply();
                        // register('registerForm1');
                        // toTrackEvent('Login and register', 'click_register');
                        // toGtagEvent('click_register_phone_web');
                    }, 100);
                  }
                }
                //四、给文档注册鼠标松开事件
                document.onmouseup = function(e){
                  //如果鼠标松开时，滑到了终点，则验证通过
                  if(success){
                    return;
                  } else {
                    //反之，则将滑块复位（设置了1s的属性过渡效果）
                    btn.style.left = 0;
                    bg.style.width = 0;
                    btn.style.transition = "left 1s ease";
                    bg.style.transition = "width 1s ease";
                  }
                  //只要鼠标松开了，说明此时不需要拖动滑块了，那么就清除鼠标移动和松开事件。
                  document.onmousemove = null;
                  document.onmouseup = null;
                }
              }
              // scope.sliderSuccFn();
              function closeModal() {
                scope.sliderShow = false;
                scope.title = false;
              };
              function setSliderShow() {
                scope.title = true;
              };
            }
        };
    }
})();
