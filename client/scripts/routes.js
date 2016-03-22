;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/404');

            $stateProvider
                .state('account', {
                    views: {
                        '@': {
                            templateUrl: '/views/account/layout.html',
                            controller: ''
                        }
                    }
                })
                .state('account.subpage', {
                    url: '/account/:subpage',
                    views: {
                        'content@account': {
                            templateUrl: function ($stateParams) {
                                $stateParams.subpage = $stateParams.subpage || 'login';
                                return '/views/account/' + $stateParams.subpage + '.html';
                            },
                            controllerProvider: function ($stateParams) {
                                $stateParams.subpage = $stateParams.subpage || 'login';
                                var ctrlPrefix = 'Account';
                                var ctrlSuffix = 'Controller';
                                var ctrlRoot = modCtrlName($stateParams.subpage);
                                return '';
                                return ctrlPrefix + ctrlRoot + ctrlSuffix;
                            }
                        }
                    }
                })

                .state('space', {
                    views: {
                        '@': {
                            templateUrl: '/views/space/layout.html',
                            controller: 'SpaceInfoController'
                        },
                        'side@space': {
                            templateUrl: '/views/space/sidebar.html',
                            controller: ''
                        },
                        'basic@space': {
                            templateUrl: '/views/space/basic.html',
                            controller: ''
                        }
                    }
                })
                .state('space.invest', {
                    views: {
                        'content@space': {
                            templateUrl: '/views/invest/index.html',
                            controller: ''
                        }
                    }
                })
                .state('space.invest.subpage', {
                    // authenticated: true,
                    url: '/space/invest/:subpage',
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
                                return ctrlPrefix + ctrlRoot + ctrlSuffix;
                            }
                        }
                    }
                })
                .state('space.invite', {
                    url: '/space/invite',
                    authenticated: true,
                    views: {
                        'content@space': {
                            templateUrl: '/views/invite/index.html',
                            controller: 'InviteIndexController'
                        }
                    }
                })
                .state('invite', {
                    url: '/invite/come?usercode',
                    views: {
                        '@': {
                            controller: 'InviteIndexBlankController'
                        }
                    }
                })
                .state('space.asset', {
                    views: {
                        'content@space': {
                            templateUrl: '/views/asset/index.html',
                            controller: ''
                        }
                    }
                })
                .state('space.asset.subpage', {
                    // authenticated: true,
                    url: '/space/asset/:subpage',
                    views: {
                        '@space.asset': {
                            templateUrl: function ($stateParams) {
                                $stateParams.subpage = $stateParams.subpage || 'deposit';
                                return '/views/asset/' + $stateParams.subpage + '.html';
                            },
                            controllerProvider: function ($stateParams) {
                                $stateParams.subpage = $stateParams.subpage || 'deposit';
                                var ctrlPrefix = 'Asset';
                                var ctrlSuffix = 'Controller';
                                var ctrlRoot = modCtrlName($stateParams.subpage);
                                // return '';
                                return ctrlPrefix + ctrlRoot + ctrlSuffix;
                            }
                        }
                    }
                })
                .state('space.notice', {
                    url: '/space/notice',
                    // authenticated: true,
                    views: {
                        'content@space': {
                            templateUrl: '/views/notice/index.html',
                            controller: 'NoticeIndexController'
                        }
                    }
                })

                // 排行榜
                .state('ranklist', {
                    views: {
                        '@': {
                            templateUrl: '/views/ranklist/index.html',
                            controller: 'RanklistIndexController'
                        }
                    }
                })
                .state('ranklist.masters', {
                    url: '/ranklist/masters',
                    views: {
                        'list@ranklist': {
                            templateUrl: '/views/ranklist/masters.html',
                            controller: 'RanklistAllController'
                        }
                    }
                })

                // 高手主页
                .state('trader', {
                    views: {
                        '@': {
                            templateUrl: '/views/trader/list.html',
                            controller: ''
                        }
                    }
                })
                .state('trader.subpage', {
                    url: '/trader/:usercode/:subpage',
                    views: {
                        'list@trader': {
                            templateUrl: function ($stateParams) {
                                $stateParams.subpage = $stateParams.subpage || 'summary';
                                return '/views/trader/' + $stateParams.subpage + '.html';
                            },
                            controllerProvider: function ($stateParams) {
                                $stateParams.subpage = $stateParams.subpage || 'summary';
                                var ctrlPrefix = 'Trader';
                                var ctrlSuffix = 'Controller';
                                var ctrlRoot = modCtrlName($stateParams.subpage);
                                return ctrlPrefix + ctrlRoot + ctrlSuffix;
                            }
                        }
                    }
                })

                .state('404', {
                    url: '/404'
                });

            function modCtrlName(name) {
                var strArray = name.split(/[-_]/g);
                var i,
                    length = strArray.length,
                    tmpStr = '',
                    newName = '';

                for (i = 0; i < length; i++) {
                    tmpStr = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1);
                    newName += tmpStr;
                }

                return newName;
            }
        }]);
})();
