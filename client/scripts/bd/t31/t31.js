;(function(){    'use strict';    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;    function checkScroll (){        if(scrollTop >= 250){            $("#reg_box").css({                right:"20px",                width:"200px",                height:'265px',                top:'380px'            });            $("#reg_box h1").css({                height:'50px',                lineHeight:'50px',                fontSize:"15px"            });            $("#reg_box input").css({                height:'40px',                lineHeight:'40px',                fontSize:"12px",                width:'185px',                marginLeft: "5px",                marginTop:"10px"            });            $("#regist_btn").css({                height:'40px',                lineHeight:'40px',                fontSize:"12px",                width:'185px',                marginLeft: "5px",                marginTop:"10px"            });        }    }checkScroll();    window.document.onscroll = function(){        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;        if(scrollTop >= 250){            $("#reg_box").css({                right:"20px",                width:"200px",                height:'265px',                top:'380px'            });            $("#reg_box h1").css({                height:'50px',                lineHeight:'50px',                fontSize:"15px"            });            $("#reg_box input").css({                height:'40px',                lineHeight:'40px',                fontSize:"12px",                width:'185px',                marginLeft: "5px",                marginTop:"10px"            });            $("#regist_btn").css({                height:'40px',                lineHeight:'40px',                fontSize:"12px",                width:'185px',                marginLeft: "5px",                marginTop:"10px"            });        }        if(scrollTop <= 330){            $("#reg_box").css({                right:"17.5%",                top: "160px",                width:"320px",                height:'380px',                border:"1px solid #fff000"            });            $("#reg_box h1").css({                height:'60px',                lineHeight:'60px',                fontSize:'24px'            });            $("#reg_box input").css({                height:'50px',                lineHeight:'50px',                width:'275px',                fontSize:"18px",                marginLeft: "24px",                marginTop:"18px"            });            $("#regist_btn").css({                height:'50px',                lineHeight:'50px',                width:'275px',                fontSize:"25px",                marginLeft: "24px",                marginTop:"18px"            });        }    };}());