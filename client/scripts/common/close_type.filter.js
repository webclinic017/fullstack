;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .filter('close_type', closeType);

    function closeType() {
        return function(type){
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
    }
})();
