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

            .state('add', {
                url : '/add',
                templateUrl : 'templates/add-abstract.html',
                abstract : true,
                controller : 'AddController'
            })

        .state('add.device', {
                url : '/add-device',
                views: {
                    'add': {
                        templateUrl : 'templates/add-device.html',
                        controller : 'AddDeviceController'
                    }
                }

            })
        .state('add.sensor', {
                url : '/add-sensor',
            views: {
                    'add': {
                        templateUrl : 'templates/add-sensor.html',
                controller : 'AddSensorController'
                    }
                }

            })

        .state('map', {
                url : '/map',
                templateUrl : 'templates/map.html',
                controller : 'MapController'
            })

        $urlRouterProvider.otherwise('/root');
    }])
