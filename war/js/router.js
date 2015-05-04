var router = angular.module('flappyville.router', []);

router
    .config(['$urlRouterProvider',
        function($urlRouterProvider) {

            $urlRouterProvider.otherwise("/login");

        }]);

router
    .config(['$stateProvider',
        function($stateProvider) {

            $stateProvider

                .state('login', {
                    url :'/login',
                    views :  {
                        '': {
                            templateUrl: 'partials/login.html',
                            controller: 'login',
                        },
                    },
                })

                .state('home', {
                    url :'/',
                    views :  {
                        '': {
                            templateUrl: 'partials/home.html',
							controller: 'home',
                        },
                    },
                })

    }])
