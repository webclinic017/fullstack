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
                    url: '/account/:subpage?name&phone&email&lp&pid&unit&key&back',
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
                    authenticated: true,
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
                    authenticated: true,
                    url: '/space/invite',
                    views: {
                        'content@space': {
                            templateUrl: '/views/invite/index.html',
                            controller: 'InviteIndexController'
                        }
                    }
                })
                // 点击邀请链接对应的路由
                .state('space.come', {
                    url: '/space/invite/come?usercode',
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
                    authenticated: true,
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
                                return ctrlPrefix + ctrlRoot + ctrlSuffix;
                            }
                        }
                    }
                })
                .state('space.notice', {
                    authenticated: true,
                    url: '/space/notice',
                    views: {
                        'content@space': {
                            templateUrl: '/views/notice/index.html',
                            controller: 'NoticeIndexController'
                        }
                    }
                })

                // setting
                .state('space.setting', {
                    views: {
                        'content@space': {
                            templateUrl: '/views/setting/index.html',
                            controller: 'SettingIndexController'
                        }
                    }
                })
                .state('space.setting.subpage', {
                    authenticated: true,
                    url: '/space/setting/:subpage',
                    views: {
                        '@space.setting': {
                            templateUrl: function ($stateParams) {
                                $stateParams.subpage = $stateParams.subpage || 'info';
                                return '/views/setting/' + $stateParams.subpage + '.html';
                            },
                            controllerProvider: function ($stateParams) {
                                $stateParams.subpage = $stateParams.subpage || 'info';

                                if ($stateParams.subpage === 'info') {
                                    var ctrlPrefix = 'Setting';
                                    var ctrlSuffix = 'Controller';
                                    var ctrlRoot = modCtrlName($stateParams.subpage);
                                    return ctrlPrefix + ctrlRoot + ctrlSuffix;
                                } else {
                                    // controller 在模板中指定（为了使用 ng-include）
                                    return '';
                                }
                            }
                        }
                    }
                })

                // 我的分成
                .state('space.bonus', {
                    views: {
                        'content@space': {
                            templateUrl: '/views/bonus/index.html',
                            controller: ''
                        }
                    }
                })
                .state('space.bonus.subpage', {
                    authenticated: true,
                    url: '/space/bonus/:subpage',
                    views: {
                        '@space.bonus': {
                            templateUrl: function ($stateParams) {
                                $stateParams.subpage = $stateParams.subpage || 'deposit';
                                return '/views/bonus/' + $stateParams.subpage + '.html';
                            },
                            controllerProvider: function ($stateParams) {
                                $stateParams.subpage = $stateParams.subpage || 'deposit';
                                var ctrlPrefix = 'Bonus';
                                var ctrlSuffix = 'Controller';
                                var ctrlRoot = modCtrlName($stateParams.subpage);
                                // return '';
                                return ctrlPrefix + ctrlRoot + ctrlSuffix;
                            }
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
                .state('ranklist.list', {
                    url: '/ranklist/list',
                    views: {
                        'list@ranklist': {
                            templateUrl: '/views/ranklist/list.html',
                            controller: 'RanklistListController'
                        }
                    }
                })

                .state('ranklist.huiying1', {
                    url: '/ranklist/huiying1',
                    views: {
                        '@': {
                            templateUrl: '/views/ranklist/list-huiying401.html',
                            controller: 'RanklistListController'
                        }
                    }
                })
                .state('ranklist.huiying2', {
                    url: '/ranklist/huiying2',
                    views: {
                        '@': {
                            templateUrl: '/views/ranklist/list-huiying402.html',
                            controller: 'RanklistListController'
                        }
                    }
                })
                .state('ranklist.huiying3', {
                    url: '/ranklist/huiying3',
                    views: {
                        '@': {
                            templateUrl: '/views/ranklist/list-huiying403.html',
                            controller: 'RanklistListController'
                        }
                    }
                })
                .state('ranklist.huiying-month', {
                    url: '/ranklist/huiying-month',
                    views: {
                        '@': {
                            templateUrl: '/views/ranklist/list-huiying-month.html',
                            controller: 'RanklistListController'
                        }
                    }
                })
                .state('ranklist.huiying-agree', {
                    url: '/ranklist/huiying-agree',
                    views: {
                        '@': {
                            templateUrl: '/views/ranklist/list-huiying-agree.html',
                            controller: 'RanklistListController'
                        }
                    }
                })
                .state('ranklist.huiying-quarter', {
                    url: '/ranklist/huiying-quarter',
                    views: {
                        '@': {
                            templateUrl: '/views/ranklist/list-huiying-quarter.html',
                            controller: 'RanklistListController'
                        }
                    }
                })                
                .state('ranklist.huiying-year', {
                    url: '/ranklist/huiying-year',
                    views: {
                        '@': {
                            templateUrl: '/views/ranklist/list-huiying-year.html',
                            controller: 'RanklistListController'
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
                    url: '/trader/:subpage',
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

                .state('waiting', {
                    url: '/waiting',
                    views: {
                        '@': {
                            templateUrl: '/views/waiting.html',
                            controller: ''
                        }
                    }
                })

                .state('activity', {
                    url: '/activity',
                    views: {
                        '@': {
                            templateUrl: '/views/web-bonus1.html',
                            controller: ''
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
        }])
        .run(['$rootScope', '$state', '$window', 'authorization', function ($rootScope, $state, $window, authorization) {
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                if (toState.authenticated) {
                    authorization.authorize().then(function (isLogined) {
                        if (!isLogined) {
                            $state.go('account.subpage', {subpage: 'login'});
                        }
                    });
                }
            });
        }]);
})();
