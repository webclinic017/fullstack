jQuery(function($){

    var $agreementYi = $("#agreement_yi");
	var username = getQueryString('name') || '';

    $agreementYi.html(username);

    function getQueryString(name) { 
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return decodeURIComponent(r[2]); return null; 
    } 
});