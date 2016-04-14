;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .filter('bindhtml', bindhtml);

    bindhtml.$inject = ['$sce'];

    function bindhtml($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }
})();
