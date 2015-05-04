var app = angular.module('flappyville', ['ui.router', 'angular-google-gapi']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/',
      controller: 'login',
      templateUrl: 'partials/login.html'
    })
    $stateProvider
    .state('home', {
      url: '/home',
      controller: 'Home',
      templateUrl: 'partials/home.html'
    });
  $urlRouterProvider.otherwise('/');
});


app.run(function($rootScope, $state, GApi, GAuth) {
  var BASE = 'https://flappyville.appspot.com/_ah/api';
  var CLIENT = '979308098536-gsn76chp45hp0c3coctru5jjm4svpl50.apps.googleusercontent.com';

  GApi.load('evenementsendpoint','v1', BASE);
  GApi.load('usersendpoint','v1', BASE);
  GAuth.setClient(CLIENT);

  GAuth.checkAuth()
  .then(function() {
    $state.go('home');
  }, function() {
    $state.go('login');
  });
});
