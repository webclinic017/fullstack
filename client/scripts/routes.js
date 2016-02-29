;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/invest/current');

            $stateProvider
                .state('space', {
                    views: {
                        '@': {
                            templateUrl: '/views/common/layout-2.html',
                            controller: 'SpaceInfoController'
                        },
                        'sidebar@space': {
                            templateUrl: '/views/navbar/navbar.html',
                            controller: ''
                        }
                    }
                })
                .state('space.invest', {
                    views: {
                        'content@space': {
                            templateUrl: '/views/invest/layout.html',
                            controller: ''
                        }
                    }
                })
                .state('space.invest.subpage', {
                    url: '/invest/:subpage',
                    views: {
                        '@space.invest': {
                            templateUrl: function ($stateParams) {
                                $stateParams.subpage = $stateParams.subpage || 'current';
                                return '/views/invest/' + $stateParams.subpage + '.html';
                            },
                            controllerProvider: function ($stateParams) {
                                $stateParams.subpage = $stateParams.subpage || 'current';
                                var ctrlPrefix = 'Invest';
                                var ctrlSuffix = 'Controller';
                                var ctrlRoot = modCtrlName($stateParams.subpage);
                                // return '';
                                return ctrlPrefix + ctrlRoot + ctrlSuffix;
                            }
                        }
                    }
                })

                .state('space.invite', {
                    url: '/space/invite',
                    views: {
                        'content@space': {
                            templateUrl: '/views/invite/index.html',
                            controller: ''
                        }
                    }
                });

            function modCtrlName(name) {
                var strArray = name.split(/[-_]/g);
                var i,
                    length = strArray.length,
                    tmpStr = '',
                    newName = '';

                for (i = 0;i < length;i++) {
                    tmpStr = strArray[i].charAt(0).toUpperCase() +
                            strArray[i].substring(1);
                    newName += tmpStr;
                }

                return newName;
            }
        }]);
})();