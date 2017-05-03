var smart = angular.module('smart', ['ionic'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('root', {
                url : '/root',
                templateUrl : 'templates/root.html',
                controller : 'RootPageController'
            })

            .state('fst', {
                url : '/fst',
                templateUrl : 'templates/fst-abstract.html',
                abstract : true,
                controller : 'FstController'
            })
            .state('fst.home', {
                url: '/home',
                views: {
                    'fst': {
                        templateUrl: 'templates/fst-home.html',
                        controller : 'FstHomePageController'
                    }
                }
            })
            .state('fst.first', {
                url: '/first',
                views: {
                    'fst': {
                        templateUrl: 'templates/fst-first.html',
                        controller : 'FstFirstPageController'
                    }
                }
            })
            .state('fst.second', {
                url: '/second',
                views: {
                    'fst': {
                        templateUrl: 'templates/fst-second.html',
                        controller : 'FstSecondPageController'
                    }
                }
            })

            .state('snd', {
                url : '/snd',
                templateUrl : 'templates/snd-abstract.html',
                abstract : true,
                controller : 'SndController'
            })
            .state('snd.home', {
                url: '/home',
                views: {
                    'snd': {
                        templateUrl: 'templates/snd-home.html',
                        controller : 'SndHomePageController'
                    }
                }
            })
            .state('snd.chat', {
                url: '/chat',
                views: {
                    'snd': {
                        templateUrl: 'templates/snd-chat.html',
                        controller : 'SndChatPageController'
                    }
                }
            })
            .state('snd.chat-single', {
              url: '/chat-single',
              views: {
                'snd': {
                  templateUrl: 'templates/snd-chat-single.html',
                  controller : 'SndChatSinglePageController'
                }
              }
            })
            .state('snd.drink', {
                url: '/drink',
                views: {
                    'snd': {
                        templateUrl: 'templates/snd-drink.html',
                        controller : 'SndDrinkPageController'
                    }
                }
            })
            .state('snd.policy', {
                url: '/policy',
                views: {
                    'snd': {
                        templateUrl: 'templates/snd-policy.html',
                        controller : 'SndPolicyPageController'
                    }
                }
            })

        $urlRouterProvider.otherwise('/root');
    }])
