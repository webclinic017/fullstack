$(document).ready(function () {    /*        点击弹出活动条款层        1.获取点击按钮    */    $(".activity_rule_button").on("click", function () {        /*条款层显示*/        $(".activity_rule_detail").stop().slideToggle();        /*mask层显示 /并添加点击事件*/        $(".mask").toggle().on("click", function () {                $(".activity_rule_detail").stop().slideUp();                $(".mask").hide();            });        /*点击ESC退出*/        $(document).on("keyup",function(e){                if(e.keyCode === 27){                    $(".activity_rule_detail").stop().slideUp();                    $(".mask").hide();                }        });    });    var mySwiper = new Swiper ('.swiper-container', {        direction: 'horizontalspeed',        autoplay: 3000,        autoplayDisableOnInteraction: false,        loop: true    });    /*award list*/    var $awardList1 = $(".award_table_list.list1");         var $awardList2 = $(".award_table_list.list2");    var listHeight = $awardList1.height();    var timer,        speed = 1;    var top1 = 0, top2 = listHeight;        $awardList2.css({"top":listHeight+'px'});    clearInterval(timer);    timer = setInterval(function () {        top1 = Math.abs(top1) > listHeight ? top1+listHeight*2-speed : top1 - speed;        top2 = Math.abs(top2) > listHeight ? top2+listHeight*2-speed : top2 - speed;        $awardList1.css({"top": top1+'px'});        $awardList2.css({"top": top2+'px'});    }, 30);});