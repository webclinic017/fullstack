;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('langData', langData);

    langData.$inject = [];

    function langData () {
        var data = {
            test: {en: "testaaa", zh: "测试的"},
            language: {en: "english,hahaha...", zh: "我是中文"}
        };

        return data;
    }
})();